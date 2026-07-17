import { AppShell } from "@/components/layout/app-shell";
import { TopBar } from "@/components/layout/top-bar";

export default function ProfilePage() {
  return (
    <AppShell>
      <TopBar
        title="Profile"
        subtitle="Manage your account."
      />

      <div className="flex-1 rounded-3xl border bg-card p-6">
        <p className="text-muted-foreground">
          Profile coming soon.
        </p>
      </div>
    </AppShell>
  );
}