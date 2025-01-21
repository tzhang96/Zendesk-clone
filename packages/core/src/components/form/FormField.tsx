import React from 'react';
import { useFormContext } from 'react-hook-form';
import { cn } from '../../utils/cn';

interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  label?: string;
  error?: string;
  children: React.ReactElement;
}

export const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ className, name, label, error, children, ...props }, ref) => {
    const { register, formState: { errors } } = useFormContext();
    const fieldError = error || (errors[name]?.message as string);

    return (
      <div ref={ref} className={cn('space-y-2', className)} {...props}>
        {label && (
          <label
            htmlFor={name}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
        {React.cloneElement(children, {
          ...register(name),
          id: name,
          'aria-describedby': fieldError ? `${name}-error` : undefined,
          error: !!fieldError,
        })}
        {fieldError && (
          <p
            id={`${name}-error`}
            className="text-sm font-medium text-destructive"
          >
            {fieldError}
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = 'FormField'; 