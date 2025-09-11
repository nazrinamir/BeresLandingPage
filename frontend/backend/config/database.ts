import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import path from 'path';
import { promises as fs } from 'fs';
import crypto from 'crypto';

dotenv.config();

export const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'beres_db',
};

// Create connection pool
export const pool = mysql.createPool({
  ...dbConfig,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  multipleStatements: true, // Enable multiple SQL statements
});

const MIGRATIONS_TABLE = '_migrations';
const MIGRATIONS_DIR = path.resolve(process.cwd(), 'migrations');

// Helper functions for migration system
async function ensureMigrationsTable(conn: mysql.Connection) {
  await conn.execute(`
    CREATE TABLE IF NOT EXISTS ${MIGRATIONS_TABLE} (
      id INT AUTO_INCREMENT PRIMARY KEY,
      filename VARCHAR(255) NOT NULL UNIQUE,
      hash CHAR(64) NOT NULL,
      applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

async function getAppliedMigrations(conn: mysql.Connection): Promise<Record<string, string>> {
  const [rows] = await conn.query(`SELECT filename, hash FROM ${MIGRATIONS_TABLE}`);
  const map: Record<string, string> = {};
  (rows as Array<{ filename: string; hash: string }>).forEach(r => {
    map[r.filename] = r.hash;
  });
  return map;
}

function sha256(content: string) {
  return crypto.createHash('sha256').update(content).digest('hex');
}

async function readSqlMigrations(): Promise<Array<{ filename: string; sql: string; hash: string }>> {
  try {
    const files = await fs.readdir(MIGRATIONS_DIR);
    const sqlFiles = files
      .filter(f => f.toLowerCase().endsWith('.sql'))
      .sort(); // Apply in lexicographic order (prefix with 0001_, 0002_...)

    const migrations = [];
    for (const filename of sqlFiles) {
      const fullPath = path.join(MIGRATIONS_DIR, filename);
      const sql = await fs.readFile(fullPath, 'utf8');
      migrations.push({ filename, sql, hash: sha256(sql) });
    }
    return migrations;
  } catch (e: any) {
    if (e.code === 'ENOENT') return []; // Folder not found; treat as no migrations
    throw e;
  }
}

async function applyMigration(conn: mysql.Connection, filename: string, sql: string, hash: string) {
  await conn.beginTransaction();
  try {
    // Run the SQL file
    await conn.query(sql);

    // Record it in migrations table
    await conn.execute(
      `INSERT INTO ${MIGRATIONS_TABLE} (filename, hash) VALUES (?, ?)`,
      [filename, hash]
    );

    await conn.commit();
    console.log(`✓ Applied migration: ${filename}`);
  } catch (err) {
    await conn.rollback();
    console.error(`✗ Migration failed: ${filename}`, err);
    throw err;
  }
}

async function runMigrations() {
  const conn = await pool.getConnection();
  try {
    await ensureMigrationsTable(conn);

    const applied = await getAppliedMigrations(conn);
    const migrations = await readSqlMigrations();

    for (const migration of migrations) {
      const alreadyApplied = applied[migration.filename];
      if (!alreadyApplied) {
        await applyMigration(conn, migration.filename, migration.sql, migration.hash);
      } else {
        // Check if migration content changed
        if (alreadyApplied !== migration.hash) {
          console.warn(
            `⚠️  Migration content changed since applied: ${migration.filename}. ` +
            `Previously ${alreadyApplied}, now ${migration.hash}. (Not re-applying)`
          );
        }
      }
    }

    if (migrations.length === 0) {
      console.log('📁 No migrations found in migrations/ folder');
    } else {
      console.log(`🎯 Processed ${migrations.length} migration(s)`);
    }
  } finally {
    conn.release();
  }
}

// Initialize database and run migrations
export async function initializeDatabase() {
  try {
    // Create database if it doesn't exist
    const connection = await mysql.createConnection({
      host: dbConfig.host,
      port: dbConfig.port,
      user: dbConfig.user,
      password: dbConfig.password,
    });

    await connection.execute(`CREATE DATABASE IF NOT EXISTS ${dbConfig.database}`);
    await connection.end();

    // Run migrations
    console.log('🚀 Running database migrations...');
    await runMigrations();

    console.log('✅ Database initialized successfully');
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    throw error;
  }
}


    