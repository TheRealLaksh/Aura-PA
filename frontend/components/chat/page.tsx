import { AppShell } from "@/components/layout/app-shell";
import { TopBar } from "@/components/layout/top-bar";

export default function ChatPage() {
  return (
    <AppShell>
      <TopBar
        title="AI Chat"
        subtitle="Talk with AURA."
      />

      <div className="flex-1 rounded-3xl border bg-card p-6">
        <p className="text-muted-foreground">
          AI Chat coming soon.
        </p>
      </div>
    </AppShell>
  );
}