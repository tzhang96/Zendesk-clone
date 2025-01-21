import React from 'react';
import { UserRoleManager } from '../../features/users/components/UserRoleManager';

export default function UsersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">User Management</h1>
      <UserRoleManager className="bg-white shadow rounded-lg p-6" />
    </div>
  );
} 