import React, { useEffect } from 'react';
import { AuthProvider } from '../context/auth/AuthProvider';
import { SupabaseProvider } from '../context/supabase/SupabaseContext';
import { initializeSupabase } from '../utils/supabase';

interface RootProviderProps {
  children: React.ReactNode;
  supabaseUrl: string;
  supabaseKey: string;
}

export function RootProvider({ children, supabaseUrl, supabaseKey }: RootProviderProps) {
  // Initialize Supabase on mount
  useEffect(() => {
    initializeSupabase(supabaseUrl, supabaseKey);
  }, [supabaseUrl, supabaseKey]);

  const supabase = initializeSupabase(supabaseUrl, supabaseKey);

  return (
    <SupabaseProvider client={supabase}>
      <AuthProvider>
        {children}
      </AuthProvider>
    </SupabaseProvider>
  );
} 