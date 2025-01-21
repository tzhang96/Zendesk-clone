export * from './user';
export * from './database';

// Database types
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          user_id: string;
          email: string;
          role: 'admin' | 'agent' | 'customer';
          first_name: string;
          last_name: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          email: string;
          role: 'admin' | 'agent' | 'customer';
          first_name: string;
          last_name: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}

// Application types derived from database schema
export type User = Database['public']['Tables']['users']['Row'];

// Ticket types
export interface Ticket {
  id: string;
  created_at: string;
  updated_at: string;
  last_activity_at: string;
  title: string;
  description: string;
  status: 'open' | 'pending' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high';
  tags: string[];
  assigned_to?: string;
  created_by: string;
  custom_fields?: Record<string, any>;
}

// Message types
export interface Message {
  id: string;
  ticket_id: string;
  user_id: string;
  content: string;
  visibility: 'public' | 'internal';
  message_type: 'text' | 'status_change' | 'assignment_change' | 'note' | 'system';
  is_ai_generated: boolean;
  created_at: string;
  edited_at?: string;
  metadata?: Record<string, any>;
}

// Attachment types
export interface Attachment {
  id: string;
  message_id: string;
  file_name: string;
  file_type: string;
  file_size: number;
  storage_path: string;
  uploaded_at: string;
  metadata?: Record<string, any>;
}

// Subscription types
export interface Subscription {
  id: string;
  ticket_id: string;
  user_id: string;
  created_at: string;
  notification_preferences?: Record<string, any>;
} 