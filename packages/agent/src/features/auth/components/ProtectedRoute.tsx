import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@autocrm/core';
import { LoadingSpinner } from '../../../components/ui/LoadingSpinner';

interface ProtectedRouteProps {
  requiredRole?: 'agent' | 'admin';
}

export function ProtectedRoute({ requiredRole = 'agent' }: ProtectedRouteProps) {
  const { user, loading } = useAuth();

  console.log('ProtectedRoute:', { user, loading });

  // Show loading spinner while checking auth
  if (loading) {
    console.log('ProtectedRoute: Loading...');
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!user) {
    console.log('ProtectedRoute: No user, redirecting to login');
    return <Navigate to="/login" replace />;
  }

  // Strict role check - must match exactly
  if (user.role !== requiredRole) {
    console.log('ProtectedRoute: Invalid role, redirecting to unauthorized');
    return <Navigate to="/unauthorized" replace />;
  }

  console.log('ProtectedRoute: Rendering protected content');
  // Render the protected route
  return <Outlet />;
} 