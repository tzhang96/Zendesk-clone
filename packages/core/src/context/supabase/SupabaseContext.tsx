import React, { createContext } from 'react';
import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from '../../types';

export const SupabaseContext = createContext<SupabaseClient<Database> | null>(null);

interface SupabaseProviderProps {
  children: React.ReactNode;
  client: SupabaseClient<Database>;
}

export function SupabaseProvider({ children, client }: SupabaseProviderProps) {
  return (
    <SupabaseContext.Provider value={client}>
      {children}
    </SupabaseContext.Provider>
  );
} 