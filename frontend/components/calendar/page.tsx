import { AppShell } from "@/components/layout/app-shell";
import { TopBar } from "@/components/layout/top-bar";

export default function CalendarPage() {
  return (
    <AppShell>
      <TopBar
        title="Calendar"
        subtitle="Manage your schedule."
      />

      <div className="flex-1 rounded-3xl border bg-card p-6">
        <p className="text-muted-foreground">
          Calendar coming soon.
        </p>
      </div>
    </AppShell>
  );
}