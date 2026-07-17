export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6">

        <div className="mb-10">
          <p className="text-sm text-zinc-400">
            Welcome to
          </p>

          <h1 className="mt-2 text-6xl font-bold tracking-tight">
            AURA
          </h1>

          <p className="mt-4 text-lg text-zinc-300">
            Adaptive University & Routine Assistant
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-xl font-semibold">
            Your Personal AI Assistant
          </h2>

          <p className="mt-3 text-zinc-400">
            Organize your college life, track expenses, manage your schedule,
            and let AI handle the rest.
          </p>

          <button className="mt-8 w-full rounded-2xl bg-white px-4 py-3 font-semibold text-black transition hover:bg-zinc-200">
            Get Started
          </button>
        </div>

      </div>
    </main>
  );
}