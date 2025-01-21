import { createContext } from 'react';
import { User } from '../../types';

export interface SignUpData {
  email: string;
  password: string;
  metadata: {
    firstName: string;
    lastName: string;
    role?: 'admin' | 'agent' | 'customer';
  };
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: Error | null;
}

export interface AuthContextType extends AuthState {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (data: SignUpData) => Promise<void>;
  signOut: () => Promise<void>;
  refreshSession: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null); 