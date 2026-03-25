"use client";

import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import { AppSidebar } from "./app-sidebar";
import { AppHeader } from "./app-header";
import { cn } from "@/lib/utils";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { collapsed } = useSelector((state: RootState) => state.sidebar) as { collapsed: boolean };

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <div
        className={cn(
          "flex flex-col transition-all duration-300",
          collapsed ? "lg:ml-[72px]" : "lg:ml-[260px]"
        )}
      >
        <AppHeader />
        <main className="flex-1 p-6 animate-page-enter">{children}</main>
      </div>
    </div>
  );
}
