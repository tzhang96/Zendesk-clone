import { User } from '@supabase/supabase-js';
import { User as AppUser } from '../types';

export function mapSupabaseUser(supabaseUser: User): AppUser {
  return {
    user_id: supabaseUser.id,
    email: supabaseUser.email || '',
    role: (supabaseUser.user_metadata?.role || 'customer') as AppUser['role'],
    first_name: supabaseUser.user_metadata?.first_name || '',
    last_name: supabaseUser.user_metadata?.last_name || '',
    created_at: supabaseUser.created_at,
    updated_at: supabaseUser.updated_at || supabaseUser.created_at,
  };
} 