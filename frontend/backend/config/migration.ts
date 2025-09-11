import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";
import mysql from "mysql2/promise";
import { dbConfig } from "./database";

export const pool = mysql.createPool({
    ...dbConfig,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    multipleStatements: true, // <= add this
  });

const MIGRATIONS_TABLE = "_migrations";
const MIGRATIONS_DIR = path.resolve(process.cwd(), "migrations");

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
  return crypto.createHash("sha256").update(content).digest("hex");
}

async function readSqlMigrations(): Promise<Array<{ filename: string; sql: string; hash: string }>> {
  try {
    const files = await fs.readdir(MIGRATIONS_DIR);
    const sqlFiles = files
      .filter(f => f.toLowerCase().endsWith(".sql"))
      .sort(); // apply in lexicographic order (prefix with 0001_, 0002_...)

    const migrations = [];
    for (const filename of sqlFiles) {
      const full = path.join(MIGRATIONS_DIR, filename);
      const sql = await fs.readFile(full, "utf8");
      migrations.push({ filename, sql, hash: sha256(sql) });
    }
    return migrations;
  } catch (e: any) {
    if (e.code === "ENOENT") return []; // folder not found yet; treat as no migrations
    throw e;
  }
}

async function applyMigration(conn: mysql.Connection, filename: string, sql: string, hash: string) {
  await conn.beginTransaction();
  try {
    // Run the SQL file (supports multiple statements if multipleStatements: true)
    await conn.query(sql);

    // Record it
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

    for (const m of migrations) {
      const already = applied[m.filename];
      if (!already) {
        await applyMigration(conn, m.filename, m.sql, m.hash);
      } else {
        // Optional: detect changed content
        if (already !== m.hash) {
          console.warn(
            `! Migration content changed since applied: ${m.filename}.` +
            ` Previously ${already}, now ${m.hash}. (No re-apply.)`
          );
        }
      }
    }

    if (migrations.length === 0) {
      console.log("No migrations found.");
    }
  } finally {
    conn.release();
  }
}
