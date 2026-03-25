"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigationConfig } from "@/lib/navigation";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  PanelLeftClose,
  PanelLeftOpen,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store";
import { toggleCollapsed, setMobileOpen } from "@/store/slices/sidebar-slice";
import { motion, AnimatePresence } from "motion/react";

export function AppSidebar() {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const { collapsed, mobileOpen } = useSelector(
    (state: RootState) => state.sidebar
  ) as { collapsed: boolean; mobileOpen: boolean };

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => dispatch(setMobileOpen(false))}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-screen border-r border-sidebar-border bg-sidebar",
          "flex flex-col transition-all duration-300 ease-in-out",
          // Desktop
          "max-lg:-translate-x-full",
          collapsed ? "lg:w-[72px]" : "lg:w-[260px]",
          // Mobile
          mobileOpen && "max-lg:translate-x-0 max-lg:w-[280px]"
        )}
      >
        {/* Logo Area */}
        <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <AnimatePresence>
            {(!collapsed || mobileOpen) && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="overflow-hidden"
              >
                <span className="text-lg font-bold tracking-tight text-sidebar-foreground whitespace-nowrap">
                  NexBoard
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile close button */}
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto lg:hidden"
            onClick={() => dispatch(setMobileOpen(false))}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <ScrollArea className="flex-1 px-3 py-4">
          <nav className="space-y-6">
            {navigationConfig.map((group) => (
              <div key={group.label}>
                {/* Group Label */}
                <AnimatePresence>
                  {(!collapsed || mobileOpen) && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60"
                    >
                      {group.label}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Items */}
                <div className="space-y-1">
                  {group.items.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    const linkContent = (
                      <Link
                        href={item.href}
                        onClick={() => dispatch(setMobileOpen(false))}
                        className={cn(
                          "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                          "hover:bg-sidebar-accent",
                          isActive
                            ? "bg-primary text-primary-foreground shadow-sm glow-primary"
                            : "text-sidebar-foreground/70 hover:text-sidebar-foreground"
                        )}
                      >
                        <Icon
                          className={cn(
                            "h-[18px] w-[18px] shrink-0 transition-colors",
                            isActive
                              ? "text-primary-foreground"
                              : "text-muted-foreground group-hover:text-sidebar-foreground"
                          )}
                        />
                        {(!collapsed || mobileOpen) && (
                          <>
                            <span className="flex-1 truncate">
                              {item.title}
                            </span>
                            {item.badge && (
                              <Badge
                                variant={isActive ? "secondary" : "default"}
                                className="text-[10px] px-1.5 py-0 h-5"
                              >
                                {item.badge}
                              </Badge>
                            )}
                          </>
                        )}
                      </Link>
                    );

                    if (collapsed && !mobileOpen) {
                      return (
                        <Tooltip key={item.href}>
                          <TooltipTrigger>{linkContent}</TooltipTrigger>
                          <TooltipContent side="right" sideOffset={12}>
                            {item.title}
                          </TooltipContent>
                        </Tooltip>
                      );
                    }

                    return <div key={item.href}>{linkContent}</div>;
                  })}
                </div>
              </div>
            ))}
          </nav>
        </ScrollArea>

        {/* Collapse Toggle (Desktop only) */}
        <div className="border-t border-sidebar-border p-3 max-lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => dispatch(toggleCollapsed())}
            className="w-full justify-center text-muted-foreground hover:text-foreground"
          >
            {collapsed ? (
              <PanelLeftOpen className="h-4 w-4" />
            ) : (
              <>
                <PanelLeftClose className="h-4 w-4 mr-2" />
                <span>Collapse</span>
              </>
            )}
          </Button>
        </div>
      </aside>
    </>
  );
}
