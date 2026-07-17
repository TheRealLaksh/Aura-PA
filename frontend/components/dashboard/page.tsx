import {
  Brain,
  CalendarDays,
  Wallet,
} from "lucide-react";

import { AppShell } from "@/components/layout/app-shell";
import { TopBar } from "@/components/layout/top-bar";
import { DashboardCard } from "@/components/dashboard/dashboard-card";

export default function DashboardPage() {
  return (
    <AppShell>
      <TopBar
        title="Dashboard"
        subtitle="Welcome back, Laksh."
      />

      <div className="space-y-4">
        <DashboardCard
          title="AI Assistant"
          description="Ask AURA anything."
          icon={<Brain className="h-6 w-6" />}
        />

        <DashboardCard
          title="Today's Schedule"
          description="No upcoming events."
          icon={<CalendarDays className="h-6 w-6" />}
        />

        <DashboardCard
          title="Expenses"
          description="No expenses recorded."
          icon={<Wallet className="h-6 w-6" />}
        />
      </div>
    </AppShell>
  );
}