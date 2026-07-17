import { AppShell } from "@/components/layout/app-shell";
import { TopBar } from "@/components/layout/top-bar";

export default function DocumentsPage() {
  return (
    <AppShell>
      <TopBar
        title="Documents"
        subtitle="Store and search files."
      />

      <div className="flex-1 rounded-3xl border bg-card p-6">
        <p className="text-muted-foreground">
          Documents coming soon.
        </p>
      </div>
    </AppShell>
  );
}