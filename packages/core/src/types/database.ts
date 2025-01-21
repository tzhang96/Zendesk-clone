export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          user_id: string;
          email: string;
          role: 'admin' | 'agent' | 'customer';
          name: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id?: string;
          email: string;
          role?: 'admin' | 'agent' | 'customer';
          name: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          user_id?: string;
          email?: string;
          role?: 'admin' | 'agent' | 'customer';
          name?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
} 