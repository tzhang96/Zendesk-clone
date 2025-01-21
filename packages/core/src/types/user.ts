import type { Database } from './database';

export type UserRole = 'admin' | 'agent' | 'customer';

// Database type
export type DatabaseUser = Database['public']['Tables']['users']['Row'];

// Client-side type with split name fields
export interface User {
  user_id: string;
  email: string;
  role: UserRole;
  first_name: string;
  last_name: string;
  created_at: string;
  updated_at: string;
}

// Utility function to map database user to client user
export function mapDatabaseUserToUser(dbUser: DatabaseUser): User {
  const [firstName = '', lastName = ''] = dbUser.name.split(' ');
  return {
    user_id: dbUser.user_id,
    email: dbUser.email,
    role: dbUser.role,
    first_name: firstName,
    last_name: lastName,
    created_at: dbUser.created_at,
    updated_at: dbUser.updated_at,
  };
}

// Re-export Database type for convenience
export type { Database }; 