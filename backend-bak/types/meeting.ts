export interface MeetingEntry {
  id?: number;
  full_name?: string;
  email: string;
  phone?: string;
  business?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface CreateMeetingRequest {
  full_name?: string;
  email: string;
  phone?: string;
  business?: string;
}

export interface UpdateMeetingRequest {
  full_name?: string;
  email?: string;
  phone?: string;
  business?: string;
}
  