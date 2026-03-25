"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Bot,
  Zap,
  Clock,
  Cpu,
  FileText,
  ImageIcon,
  Code,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { aiUsageData, aiModels, aiGenerations } from "@/lib/mock-data";
import { motion } from "motion/react";

const aiStats = [
  {
    title: "Total API Calls",
    value: "11,000",
    change: "+32%",
    icon: Zap,
    gradient: "stat-gradient-1",
  },
  {
    title: "Tokens Used",
    value: "3.86M",
    change: "+18%",
    icon: Cpu,
    gradient: "stat-gradient-2",
  },
  {
    title: "Avg Latency",
    value: "121ms",
    change: "-8%",
    icon: Clock,
    gradient: "stat-gradient-3",
  },
  {
    title: "Active Models",
    value: "5",
    change: "+2",
    icon: Bot,
    gradient: "stat-gradient-4",
  },
];

const typeIcons = {
  text: FileText,
  image: ImageIcon,
  code: Code,
};

export default function AIDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold tracking-tight">AI Dashboard</h1>
          <Badge className="bg-brand-gradient text-white border-0">New</Badge>
        </div>
        <p className="text-muted-foreground">
          Monitor AI usage, model performance, and recent generations.
        </p>
      </div>

      {/* AI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {aiStats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <Card className={`${stat.gradient} border-0 shadow-sm`}>
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground font-medium">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-xs font-medium text-success">
                      {stat.change} this week
                    </p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* API Calls Bar Chart */}
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">
              API Calls This Week
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={aiUsageData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="var(--color-border)"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="day"
                    tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--color-popover)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "8px",
                      color: "var(--color-popover-foreground)",
                    }}
                  />
                  <Bar
                    dataKey="apiCalls"
                    fill="var(--color-chart-1)"
                    radius={[6, 6, 0, 0]}
                    name="API Calls"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Token Usage Area Chart */}
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">
              Token Usage Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={aiUsageData}>
                  <defs>
                    <linearGradient id="tokenGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor="var(--color-chart-2)"
                        stopOpacity={0.3}
                      />
                      <stop
                        offset="100%"
                        stopColor="var(--color-chart-2)"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="var(--color-border)"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="day"
                    tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `${v / 1000}k`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--color-popover)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "8px",
                      color: "var(--color-popover-foreground)",
                    }}
                    formatter={(value) => [Number(value).toLocaleString(), "Tokens"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="tokens"
                    stroke="var(--color-chart-2)"
                    fill="url(#tokenGrad)"
                    strokeWidth={2}
                    name="Tokens"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Model Performance */}
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">
              Model Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {aiModels.map((model) => (
                <div key={model.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Bot className="h-4 w-4 text-primary" />
                      <span className="font-medium">{model.name}</span>
                    </div>
                    <div className="flex items-center gap-4 text-muted-foreground text-xs">
                      <span>{model.calls.toLocaleString()} calls</span>
                      <span>{model.avgLatency}ms</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={model.accuracy} className="h-2 flex-1" />
                    <span className="text-xs font-medium w-12 text-right">
                      {model.accuracy}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Generations */}
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">
              Recent Generations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {aiGenerations.map((gen) => {
                const Icon = typeIcons[gen.type as keyof typeof typeIcons] || FileText;
                return (
                  <div
                    key={gen.id}
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {gen.prompt}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-[10px]">
                          {gen.model}
                        </Badge>
                        {gen.tokens > 0 && (
                          <span className="text-[11px] text-muted-foreground">
                            {gen.tokens} tokens
                          </span>
                        )}
                        <span className="text-[11px] text-muted-foreground ml-auto">
                          {gen.time}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
