import { useContext } from 'react';
import { SupabaseContext } from '../context/supabase/SupabaseContext';

export function useSupabase() {
  const supabase = useContext(SupabaseContext);
  if (!supabase) {
    throw new Error('useSupabase must be used within a SupabaseProvider');
  }
  return supabase;
} 