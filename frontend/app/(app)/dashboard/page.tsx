import { DashboardCard } from "@/components/dashboard/dashboard-card";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 p-4 md:p-8 pb-24">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Here is your daily overview.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <DashboardCard 
          title="Recent Expense" 
          value="₹120" 
          description="Coffee at Campus Cafe" 
        />
        <DashboardCard 
          title="Upcoming Class" 
          value="Physics 101" 
          description="Today, 10:00 AM" 
        />
        <DashboardCard 
          title="Pending Tasks" 
          value="3 Assignments" 
          description="Due this week" 
        />
      </div>
    </div>
  );
}