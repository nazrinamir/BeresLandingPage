export interface WaitlistEntry {
  id?: number;
  first_name?: string;
  last_name?: string;
  email: string;
  phone?: string;
  business?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface CreateWaitlistRequest {
  first_name?: string;
  last_name?: string;
  email: string;
  phone?: string;
  business?: string;
}
