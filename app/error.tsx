"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background pattern-dots p-4">
      <div className="text-center max-w-md">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient shadow-lg">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight">NexBoard</span>
        </div>

        <h1 className="text-8xl font-bold text-gradient mb-4">500</h1>
        <h2 className="text-xl font-semibold mb-2">Something Went Wrong</h2>
        <p className="text-muted-foreground mb-8">
          An unexpected error occurred. Our team has been notified. Please try
          again or return to the dashboard.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Button variant="outline" onClick={reset}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
          <Link href="/dashboard/analytics">
            <Button className="bg-brand-gradient text-white border-0 hover:opacity-90">
              <Home className="h-4 w-4 mr-2" />
              Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
