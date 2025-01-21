import { ReactNode, useCallback, useEffect, useState } from 'react';
import { AuthContext, AuthState, SignUpData } from './AuthContext';
import { User } from '../../types';
import { getSupabaseClient } from '../../utils/supabase';
import { mapSupabaseUser } from '../../utils/auth';

interface AuthProviderProps {
  children: ReactNode;
  supabaseUrl: string;
  supabaseKey: string;
}

export function AuthProvider({ children, supabaseUrl, supabaseKey }: AuthProviderProps) {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null,
  });

  const supabase = getSupabaseClient(supabaseUrl, supabaseKey);

  useEffect(() => {
    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setState(prev => ({
          ...prev,
          user: mapSupabaseUser(session.user),
          loading: false,
        }));
      } else {
        setState(prev => ({ ...prev, loading: false }));
      }
    });

    // Listen for changes on auth state (signed in, signed out, etc.)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        setState(prev => ({
          ...prev,
          user: mapSupabaseUser(session.user),
          loading: false,
        }));
      } else {
        setState(prev => ({
          ...prev,
          user: null,
          loading: false,
        }));
      }
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  const signIn = useCallback(async (email: string, password: string) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
    } catch (error) {
      setState(prev => ({ ...prev, error: error as Error }));
    } finally {
      setState(prev => ({ ...prev, loading: false }));
    }
  }, [supabase.auth]);

  const signUp = useCallback(async (data: SignUpData) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            first_name: data.metadata.firstName,
            last_name: data.metadata.lastName,
            role: data.metadata.role || 'customer',
          }
        }
      });
      if (error) throw error;
    } catch (error) {
      setState(prev => ({ ...prev, error: error as Error }));
    } finally {
      setState(prev => ({ ...prev, loading: false }));
    }
  }, [supabase.auth]);

  const signOut = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      setState(prev => ({ ...prev, error: error as Error }));
    } finally {
      setState(prev => ({ ...prev, loading: false }));
    }
  }, [supabase.auth]);

  const refreshSession = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      const { error } = await supabase.auth.refreshSession();
      if (error) throw error;
    } catch (error) {
      setState(prev => ({ ...prev, error: error as Error }));
    } finally {
      setState(prev => ({ ...prev, loading: false }));
    }
  }, [supabase.auth]);

  return (
    <AuthContext.Provider value={{
      ...state,
      signIn,
      signUp,
      signOut,
      refreshSession,
    }}>
      {children}
    </AuthContext.Provider>
  );
} 