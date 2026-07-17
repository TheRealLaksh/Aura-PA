import { AppShell } from "@/components/layout/app-shell";
import { TopBar } from "@/components/layout/top-bar";

export default function DashboardPage() {
  return (
    <AppShell>
      <TopBar
        title="Dashboard"
        subtitle="Welcome back."
      />

      <div className="flex-1 rounded-3xl border bg-card p-6">
        <p className="text-muted-foreground">
          Dashboard coming soon.
        </p>
      </div>
    </AppShell>
  );
}