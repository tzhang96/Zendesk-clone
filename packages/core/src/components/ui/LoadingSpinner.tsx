import React from 'react';

interface LoadingSpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-8 w-8',
  lg: 'h-12 w-12'
};

export function LoadingSpinner({ className = '', size = 'md' }: LoadingSpinnerProps) {
  return (
    <div 
      className={`animate-spin rounded-full border-2 border-gray-200 border-b-gray-800 ${sizeClasses[size]} ${className}`}
      role="status"
      aria-label="Loading"
    />
  );
} 