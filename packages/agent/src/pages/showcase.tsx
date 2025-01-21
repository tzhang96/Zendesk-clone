import { Button, Input, Alert, AlertTitle, AlertDescription, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Container, Stack } from '@autocrm/core';
import { z } from 'zod';
import { Form } from '@autocrm/core';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default function ShowcasePage() {
  const handleSubmit = async (values: z.infer<typeof schema>) => {
    console.log(values);
  };

  return (
    <Container>
      <Stack spacing="xl" className="py-8">
        <Card>
          <CardHeader>
            <CardTitle>Component Test Page</CardTitle>
            <CardDescription>Testing our core components</CardDescription>
          </CardHeader>
          <CardContent>
            <Stack spacing="lg">
              {/* Buttons */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Buttons</h3>
                <Stack direction="row" spacing="sm">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </Stack>
              </div>

              {/* Alerts */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Alerts</h3>
                <Stack spacing="md">
                  <Alert>
                    <AlertTitle>Default Alert</AlertTitle>
                    <AlertDescription>This is a default alert message.</AlertDescription>
                  </Alert>
                  <Alert variant="destructive">
                    <AlertTitle>Error Alert</AlertTitle>
                    <AlertDescription>This is an error alert message.</AlertDescription>
                  </Alert>
                  <Alert variant="success">
                    <AlertTitle>Success Alert</AlertTitle>
                    <AlertDescription>This is a success alert message.</AlertDescription>
                  </Alert>
                </Stack>
              </div>

              {/* Form */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Form</h3>
                <Form
                  schema={schema}
                  onSubmit={handleSubmit}
                >
                  {(form) => (
                    <Stack spacing="md">
                      <div>
                        <label className="text-sm font-medium">Email</label>
                        <Input
                          type="email"
                          {...form.register('email')}
                          error={!!form.formState.errors.email}
                        />
                        {form.formState.errors.email && (
                          <p className="text-sm text-destructive mt-1">
                            {form.formState.errors.email.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm font-medium">Password</label>
                        <Input
                          type="password"
                          {...form.register('password')}
                          error={!!form.formState.errors.password}
                        />
                        {form.formState.errors.password && (
                          <p className="text-sm text-destructive mt-1">
                            {form.formState.errors.password.message}
                          </p>
                        )}
                      </div>
                      <Button type="submit">Submit</Button>
                    </Stack>
                  )}
                </Form>
              </div>
            </Stack>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              These components are from @autocrm/core package
            </p>
          </CardFooter>
        </Card>
      </Stack>
    </Container>
  );
} 