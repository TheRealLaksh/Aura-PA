export default function ChatPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:p-8 pb-24 h-full">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Chat</h1>
        <p className="text-muted-foreground">Talk to AURA using natural language.</p>
      </div>
      <div className="flex-1 rounded-xl border bg-card text-card-foreground shadow flex items-center justify-center min-h-[50vh]">
        <p className="text-muted-foreground text-sm">Chat interface coming in the next milestone.</p>
      </div>
    </div>
  );
}