import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types';

let supabaseClient: ReturnType<typeof createClient<Database>> | null = null;

export function getSupabaseClient(url?: string, key?: string) {
  if (!supabaseClient) {
    if (!url || !key) {
      throw new Error('Supabase credentials are required when initializing the client');
    }
    supabaseClient = createClient<Database>(url, key);
  }
  return supabaseClient;
} 