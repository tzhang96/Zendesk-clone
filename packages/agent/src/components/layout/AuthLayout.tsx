import { Outlet } from 'react-router-dom';
import { Container } from '@autocrm/core';

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Container className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              AutoCRM
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Agent Support Dashboard
            </p>
          </div>
          
          <Outlet />
        </div>
      </Container>
    </div>
  );
} 