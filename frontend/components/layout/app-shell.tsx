import { ReactNode } from "react";
import { BottomNav } from "./bottom-nav";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 py-6 pb-24">
        {children}
      </div>

      <BottomNav />
    </main>
  );
}