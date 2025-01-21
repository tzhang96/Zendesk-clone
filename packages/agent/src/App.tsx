import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { AuthProvider } from '@autocrm/core';
import { MainLayout } from './components/layout/MainLayout';
import { AuthLayout } from './components/layout/AuthLayout';
import { ProtectedRoute } from './features/auth/components/ProtectedRoute';
import { LoginPage } from './features/auth/pages/LoginPage';
import { SignupPage } from './features/auth/pages/SignupPage';
import ShowcasePage from './pages/showcase';

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase credentials in environment variables');
}

console.log('App: Initializing with Supabase credentials');

// Create router with future flags
const router = createBrowserRouter(
  [
    {
      element: <AuthLayout />,
      children: [
        {
          path: 'login',
          element: <LoginPage />,
        },
        {
          path: 'signup',
          element: <SignupPage />,
        },
      ],
    },
    {
      element: <ProtectedRoute />,
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              path: 'showcase',
              element: <ShowcasePage />,
            },
          ],
        },
      ],
    },
    {
      path: '/',
      element: <Navigate to="/showcase" replace />,
    },
    {
      path: '*',
      element: (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">404</h1>
            <p className="mt-2 text-lg text-gray-600">Page not found</p>
            <a href="/" className="mt-4 text-primary hover:underline">
              Go back home
            </a>
          </div>
        </div>
      ),
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);

export function App() {
  console.log('App: Rendering');
  
  return (
    <AuthProvider supabaseUrl={supabaseUrl} supabaseKey={supabaseKey}>
      <RouterProvider router={router} />
    </AuthProvider>
  );
} 