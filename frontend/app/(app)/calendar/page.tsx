export default function CalendarPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:p-8 pb-24">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
        <p className="text-muted-foreground">Manage your routines and schedule.</p>
      </div>
      <div className="rounded-xl border bg-card text-card-foreground shadow p-6 flex items-center justify-center min-h-[50vh]">
        <p className="text-muted-foreground text-sm">Google Calendar integration coming soon.</p>
      </div>
    </div>
  );
}