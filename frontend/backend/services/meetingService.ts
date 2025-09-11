import { pool } from '../config/database';
import { MeetingEntry, CreateMeetingRequest, UpdateMeetingRequest } from '../types/meeting';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

export class MeetingService {
  // Create a new meeting
  async createMeeting(data: CreateMeetingRequest): Promise<MeetingEntry> {
    try {
      const [result] = await pool.execute<ResultSetHeader>(
        `INSERT INTO meeting (full_name, email, phone, business) 
         VALUES (?, ?, ?, ?)`,
        [data.full_name || null, data.email, data.phone || null, data.business || null]
      );

      // Get the created entry
      const [rows] = await pool.execute<RowDataPacket[]>(
        'SELECT * FROM meeting WHERE id = ?',
        [result.insertId]
      );

      return rows[0] as MeetingEntry;
    } catch (error: any) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new Error('Email already exists in meetings');
      }
      throw error;
    }
  }

  // Get all meetings
  async getAllMeetings(): Promise<MeetingEntry[]> {
    const [rows] = await pool.execute<RowDataPacket[]>(
      'SELECT * FROM meeting ORDER BY created_at DESC'
    );
    return rows as MeetingEntry[];
  }

  // Get meeting by ID
  async getMeetingById(id: number): Promise<MeetingEntry | null> {
    const [rows] = await pool.execute<RowDataPacket[]>(
      'SELECT * FROM meeting WHERE id = ?',
      [id]
    );
    return rows.length > 0 ? (rows[0] as MeetingEntry) : null;
  }

  // Get meeting by email
  async getMeetingByEmail(email: string): Promise<MeetingEntry | null> {
    const [rows] = await pool.execute<RowDataPacket[]>(
      'SELECT * FROM meeting WHERE email = ?',
      [email]
    );
    return rows.length > 0 ? (rows[0] as MeetingEntry) : null;
  }

  // Update meeting by ID
  async updateMeeting(id: number, data: UpdateMeetingRequest): Promise<MeetingEntry | null> {
    try {
      // Build dynamic update query
      const updateFields: string[] = [];
      const values: any[] = [];

      if (data.full_name !== undefined) {
        updateFields.push('full_name = ?');
        values.push(data.full_name);
      }
      if (data.email !== undefined) {
        updateFields.push('email = ?');
        values.push(data.email);
      }
      if (data.phone !== undefined) {
        updateFields.push('phone = ?');
        values.push(data.phone);
      }
      if (data.business !== undefined) {
        updateFields.push('business = ?');
        values.push(data.business);
      }

      if (updateFields.length === 0) {
        throw new Error('No fields to update');
      }

      values.push(id); // Add ID for WHERE clause

      const [result] = await pool.execute<ResultSetHeader>(
        `UPDATE meeting SET ${updateFields.join(', ')}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
        values
      );

      if (result.affectedRows === 0) {
        return null; // Meeting not found
      }

      // Return updated meeting
      return await this.getMeetingById(id);
    } catch (error: any) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new Error('Email already exists in meetings');
      }
      throw error;
    }
  }

  // Delete meeting by ID
  async deleteMeeting(id: number): Promise<boolean> {
    const [result] = await pool.execute<ResultSetHeader>(
      'DELETE FROM meeting WHERE id = ?',
      [id]
    );
    return result.affectedRows > 0;
  }

  // Delete meeting by email
  async deleteMeetingByEmail(email: string): Promise<boolean> {
    const [result] = await pool.execute<ResultSetHeader>(
      'DELETE FROM meeting WHERE email = ?',
      [email]
    );
    return result.affectedRows > 0;
  }

  // Get meetings count
  async getMeetingsCount(): Promise<number> {
    const [rows] = await pool.execute<RowDataPacket[]>(
      'SELECT COUNT(*) as count FROM meeting'
    );
    return (rows[0] as any).count;
  }

  // Search meetings by name or email
  async searchMeetings(query: string): Promise<MeetingEntry[]> {
    const searchTerm = `%${query}%`;
    const [rows] = await pool.execute<RowDataPacket[]>(
      'SELECT * FROM meeting WHERE full_name LIKE ? OR email LIKE ? OR business LIKE ? ORDER BY created_at DESC',
      [searchTerm, searchTerm, searchTerm]
    );
    return rows as MeetingEntry[];
  }
}
