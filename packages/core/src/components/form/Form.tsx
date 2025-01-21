import React from 'react';
import { useForm, FormProvider, UseFormReturn, DefaultValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

interface FormProps<T extends z.ZodType<any, any>> {
  schema: T;
  onSubmit: (values: z.infer<T>) => void | Promise<void>;
  children: (methods: UseFormReturn<z.infer<T>>) => React.ReactNode;
  defaultValues?: DefaultValues<z.infer<T>>;
  className?: string;
}

export function Form<T extends z.ZodType<any, any>>({
  schema,
  onSubmit,
  children,
  defaultValues,
  className,
}: FormProps<T>) {
  const methods = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={className}
      >
        {children(methods)}
      </form>
    </FormProvider>
  );
} 