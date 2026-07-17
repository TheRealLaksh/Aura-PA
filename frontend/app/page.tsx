import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <AppShell showBottomNav={false}>
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-sm text-muted-foreground">
          Welcome to
        </p>

        <h1 className="mt-2 text-6xl font-bold tracking-tight">
          AURA
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          Adaptive University &amp; Routine Assistant
        </p>

        <div className="mt-10 rounded-3xl border bg-card p-6">
          <h2 className="text-xl font-semibold">
            Your Personal AI Assistant
          </h2>

          <p className="mt-3 text-sm text-muted-foreground">
            Organize your college life, manage your schedule, track expenses,
            and let AI handle everything else.
          </p>

          <Button className="mt-8 w-full rounded-2xl">
            Get Started
          </Button>
        </div>
      </div>
    </AppShell>
  );
}