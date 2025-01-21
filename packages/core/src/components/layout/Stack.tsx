import React from 'react';
import { cn } from '../../utils/cn';

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column';
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between';
}

const spacingStyles = {
  none: '',
  xs: 'space-x-1 space-y-1',
  sm: 'space-x-2 space-y-2',
  md: 'space-x-4 space-y-4',
  lg: 'space-x-6 space-y-6',
  xl: 'space-x-8 space-y-8',
};

const alignStyles = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};

const justifyStyles = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
};

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({
    className,
    direction = 'column',
    spacing = 'md',
    align = 'stretch',
    justify = 'start',
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex',
          direction === 'row' ? 'flex-row' : 'flex-col',
          direction === 'row' ? spacingStyles[spacing].split(' ')[0] : spacingStyles[spacing].split(' ')[1],
          alignStyles[align],
          justifyStyles[justify],
          className
        )}
        {...props}
      />
    );
  }
);

Stack.displayName = 'Stack'; 