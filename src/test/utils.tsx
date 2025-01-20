import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';

// Mock Supabase client
vi.mock('../lib/supabase', () => ({
  supabase: {
    auth: {
      getSession: vi.fn(),
      onAuthStateChange: vi.fn(),
    },
    storage: {
      listBuckets: vi.fn().mockResolvedValue({ data: [], error: null }),
      createBucket: vi.fn().mockResolvedValue({ error: null }),
    },
  },
  initStorage: vi.fn().mockResolvedValue(undefined),
  STORAGE_BUCKET: 'attachments',
}));

// Wrapper with common providers
function Providers({ children }: { children: React.ReactNode }) {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
}

// Custom render with providers
function render(ui: React.ReactElement, options = {}) {
  return {
    ...rtlRender(ui, {
      wrapper: Providers,
      ...options,
    }),
    user: userEvent.setup(),
  };
}

// Re-export everything
export * from '@testing-library/react';
export { render, userEvent }; 