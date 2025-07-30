import { ReactNode } from "react";
import { MainNav } from "@/components/layout/main-nav";
import { SiteFooter } from "@/components/layout/footer";

interface DashboardShellProps {
  children: ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav />
          <div className="flex items-center space-x-4">
            {/* User account dropdown would go here */}
          </div>
        </div>
      </header>
      <main className="container flex-1 py-6">{children}</main>
      <SiteFooter />
    </div>
  );
}
