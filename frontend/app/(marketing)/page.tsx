import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-6 text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Welcome to <span className="text-primary">AURA</span>
        </h1>
        <p className="max-w-[600px] mx-auto text-muted-foreground text-lg sm:text-xl">
          Your AI-first personal operating system. Track expenses, manage your calendar, and organize your life with natural language.
        </p>
      </div>
      <Link href="/dashboard">
        <Button size="lg" className="w-full sm:w-auto font-semibold">
          Enter Dashboard
        </Button>
      </Link>
    </div>
  );
}