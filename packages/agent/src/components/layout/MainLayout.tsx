import { Outlet, Link } from 'react-router-dom';
import { Container } from '@autocrm/core';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link to="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">AutoCRM</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Container>
          <Outlet />
        </Container>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <Container>
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                © 2024 AutoCRM. All rights reserved.
              </span>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
} 