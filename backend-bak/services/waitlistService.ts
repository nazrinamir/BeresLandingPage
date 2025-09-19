import { pool } from '../config/database';
import { WaitlistEntry, CreateWaitlistRequest } from '../types/waitlist';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

export class WaitlistService {
  async addToWaitlist(data: CreateWaitlistRequest): Promise<WaitlistEntry> {
    try {
      const [result] = await pool.execute<ResultSetHeader>(
        `INSERT INTO waitlist (first_name, last_name, email, phone, business) 
         VALUES (?, ?, ?, ?, ?)`,
        [data.first_name || null, data.last_name || null, data.email, data.phone || null, data.business || null]
      );

      // Get the created entry
      const [rows] = await pool.execute<RowDataPacket[]>(
        'SELECT * FROM waitlist WHERE id = ?',
        [result.insertId]
      );

      return rows[0] as WaitlistEntry;
    } catch (error: any) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new Error('Email already exists in waitlist');
      }
      throw error;
    }
  }

  async getAllWaitlistEntries(): Promise<WaitlistEntry[]> {
    const [rows] = await pool.execute<RowDataPacket[]>(
      'SELECT * FROM waitlist ORDER BY created_at DESC'
    );
    return rows as WaitlistEntry[];
  }

  async getWaitlistByEmail(email: string): Promise<WaitlistEntry | null> {
    const [rows] = await pool.execute<RowDataPacket[]>(
      'SELECT * FROM waitlist WHERE email = ?',
      [email]
    );
    return rows.length > 0 ? (rows[0] as WaitlistEntry) : null;
  }

  async deleteFromWaitlist(email: string): Promise<boolean> {
    const [result] = await pool.execute<ResultSetHeader>(
      'DELETE FROM waitlist WHERE email = ?',
      [email]
    );
    return result.affectedRows > 0;
  }

  async getWaitlistCount(): Promise<number> {
    const [rows] = await pool.execute<RowDataPacket[]>(
      'SELECT COUNT(*) as count FROM waitlist'
    );
    return (rows[0] as any).count;
  }
}
