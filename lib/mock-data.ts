// ──────────────────────────────────────────
// NexBoard Mock Data — Demo-ready analytics
// ──────────────────────────────────────────

export const revenueData = [
  { month: "Jan", revenue: 4200, expenses: 2800, profit: 1400 },
  { month: "Feb", revenue: 5100, expenses: 3100, profit: 2000 },
  { month: "Mar", revenue: 4800, expenses: 2950, profit: 1850 },
  { month: "Apr", revenue: 6200, expenses: 3400, profit: 2800 },
  { month: "May", revenue: 5800, expenses: 3200, profit: 2600 },
  { month: "Jun", revenue: 7100, expenses: 3800, profit: 3300 },
  { month: "Jul", revenue: 6900, expenses: 3600, profit: 3300 },
  { month: "Aug", revenue: 7800, expenses: 4100, profit: 3700 },
  { month: "Sep", revenue: 8200, expenses: 4300, profit: 3900 },
  { month: "Oct", revenue: 7600, expenses: 4000, profit: 3600 },
  { month: "Nov", revenue: 8900, expenses: 4600, profit: 4300 },
  { month: "Dec", revenue: 9500, expenses: 5000, profit: 4500 },
];

export const trafficSources = [
  { name: "Organic Search", value: 42, fill: "var(--color-chart-1)" },
  { name: "Direct", value: 28, fill: "var(--color-chart-2)" },
  { name: "Social Media", value: 18, fill: "var(--color-chart-3)" },
  { name: "Referral", value: 12, fill: "var(--color-chart-5)" },
];

export const recentOrders = [
  {
    id: "ORD-7291",
    customer: "Emma Wilson",
    email: "emma@example.com",
    product: "Pro Plan",
    amount: 299.0,
    status: "completed" as const,
    date: "2026-03-24",
  },
  {
    id: "ORD-7290",
    customer: "Alex Chen",
    email: "alex@example.com",
    product: "Enterprise Plan",
    amount: 999.0,
    status: "processing" as const,
    date: "2026-03-24",
  },
  {
    id: "ORD-7289",
    customer: "Sarah K.",
    email: "sarah@example.com",
    product: "Starter Plan",
    amount: 49.0,
    status: "completed" as const,
    date: "2026-03-23",
  },
  {
    id: "ORD-7288",
    customer: "Mike Brown",
    email: "mike@example.com",
    product: "Pro Plan",
    amount: 299.0,
    status: "pending" as const,
    date: "2026-03-23",
  },
  {
    id: "ORD-7287",
    customer: "Lisa Park",
    email: "lisa@example.com",
    product: "Enterprise Plan",
    amount: 999.0,
    status: "completed" as const,
    date: "2026-03-22",
  },
];

export const activityFeed = [
  {
    id: 1,
    user: "Emma Wilson",
    action: "upgraded to Pro Plan",
    time: "2 min ago",
    avatar: "EW",
  },
  {
    id: 2,
    user: "Alex Chen",
    action: "generated 50 AI images",
    time: "15 min ago",
    avatar: "AC",
  },
  {
    id: 3,
    user: "Sarah K.",
    action: "created a new workspace",
    time: "1 hour ago",
    avatar: "SK",
  },
  {
    id: 4,
    user: "Mike Brown",
    action: "published 3 blog posts via AI Writer",
    time: "2 hours ago",
    avatar: "MB",
  },
  {
    id: 5,
    user: "Lisa Park",
    action: "invited 5 team members",
    time: "4 hours ago",
    avatar: "LP",
  },
];

// ──────────────────────────────────────────
// AI Dashboard Data
// ──────────────────────────────────────────

export const aiUsageData = [
  { day: "Mon", apiCalls: 1200, tokens: 450000, latency: 120 },
  { day: "Tue", apiCalls: 1800, tokens: 620000, latency: 115 },
  { day: "Wed", apiCalls: 1500, tokens: 530000, latency: 125 },
  { day: "Thu", apiCalls: 2200, tokens: 780000, latency: 110 },
  { day: "Fri", apiCalls: 2800, tokens: 950000, latency: 105 },
  { day: "Sat", apiCalls: 900, tokens: 320000, latency: 130 },
  { day: "Sun", apiCalls: 600, tokens: 210000, latency: 140 },
];

export const aiModels = [
  { name: "GPT-4o", calls: 4500, accuracy: 96.2, avgLatency: 890 },
  { name: "Claude 3.5", calls: 3200, accuracy: 95.8, avgLatency: 720 },
  { name: "Gemini Pro", calls: 2100, accuracy: 94.5, avgLatency: 650 },
  { name: "Llama 3", calls: 1800, accuracy: 92.1, avgLatency: 450 },
  { name: "Mixtral", calls: 1200, accuracy: 91.3, avgLatency: 380 },
];

export const aiGenerations = [
  {
    id: 1,
    type: "text",
    prompt: "Write a marketing email for SaaS launch",
    model: "GPT-4o",
    tokens: 850,
    time: "3 min ago",
  },
  {
    id: 2,
    type: "image",
    prompt: "Futuristic city skyline, neon lights",
    model: "DALL-E 3",
    tokens: 0,
    time: "12 min ago",
  },
  {
    id: 3,
    type: "text",
    prompt: "Summarize quarterly earnings report",
    model: "Claude 3.5",
    tokens: 1200,
    time: "25 min ago",
  },
  {
    id: 4,
    type: "code",
    prompt: "Generate React hook for data fetching",
    model: "GPT-4o",
    tokens: 650,
    time: "1 hour ago",
  },
  {
    id: 5,
    type: "text",
    prompt: "Create social media content calendar",
    model: "Gemini Pro",
    tokens: 920,
    time: "2 hours ago",
  },
];

// ──────────────────────────────────────────
// eCommerce Dashboard Data
// ──────────────────────────────────────────

export const salesData = [
  { month: "Jan", sales: 245, revenue: 12500 },
  { month: "Feb", sales: 312, revenue: 15800 },
  { month: "Mar", sales: 280, revenue: 14200 },
  { month: "Apr", sales: 398, revenue: 19900 },
  { month: "May", sales: 356, revenue: 17800 },
  { month: "Jun", sales: 445, revenue: 22250 },
  { month: "Jul", sales: 420, revenue: 21000 },
  { month: "Aug", sales: 510, revenue: 25500 },
  { month: "Sep", sales: 480, revenue: 24000 },
  { month: "Oct", sales: 520, revenue: 26000 },
  { month: "Nov", sales: 610, revenue: 30500 },
  { month: "Dec", sales: 680, revenue: 34000 },
];

export const topProducts = [
  { name: "Pro Plan Annual", sales: 1245, revenue: 37350, growth: 12.5 },
  { name: "Enterprise Plan", sales: 890, revenue: 88110, growth: 18.2 },
  { name: "Starter Monthly", sales: 2100, revenue: 10500, growth: -3.1 },
  { name: "API Credits Pack", sales: 3400, revenue: 17000, growth: 45.8 },
  { name: "Custom Integration", sales: 156, revenue: 78000, growth: 22.0 },
];

export const categoryRevenue = [
  { name: "Subscriptions", value: 45, fill: "var(--color-chart-1)" },
  { name: "API Credits", value: 25, fill: "var(--color-chart-2)" },
  { name: "Enterprise", value: 20, fill: "var(--color-chart-3)" },
  { name: "Add-ons", value: 10, fill: "var(--color-chart-4)" },
];

// ──────────────────────────────────────────
// Users Data
// ──────────────────────────────────────────

export const usersData = [
  {
    id: 1,
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    role: "Admin",
    status: "active" as const,
    plan: "Enterprise",
    lastLogin: "2 hours ago",
    avatar: "EW",
  },
  {
    id: 2,
    name: "Alex Chen",
    email: "alex.chen@example.com",
    role: "Editor",
    status: "active" as const,
    plan: "Pro",
    lastLogin: "5 min ago",
    avatar: "AC",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    role: "Viewer",
    status: "inactive" as const,
    plan: "Starter",
    lastLogin: "3 days ago",
    avatar: "SJ",
  },
  {
    id: 4,
    name: "Michael Brown",
    email: "m.brown@example.com",
    role: "Editor",
    status: "active" as const,
    plan: "Pro",
    lastLogin: "12 hours ago",
    avatar: "MB",
  },
  {
    id: 5,
    name: "Lisa Park",
    email: "lisa.park@example.com",
    role: "Admin",
    status: "active" as const,
    plan: "Enterprise",
    lastLogin: "1 hour ago",
    avatar: "LP",
  },
  {
    id: 6,
    name: "David Kim",
    email: "d.kim@example.com",
    role: "Viewer",
    status: "pending" as const,
    plan: "Starter",
    lastLogin: "Never",
    avatar: "DK",
  },
  {
    id: 7,
    name: "Rachel Green",
    email: "rachel.g@example.com",
    role: "Editor",
    status: "active" as const,
    plan: "Pro",
    lastLogin: "30 min ago",
    avatar: "RG",
  },
  {
    id: 8,
    name: "James Wang",
    email: "j.wang@example.com",
    role: "Admin",
    status: "active" as const,
    plan: "Enterprise",
    lastLogin: "Just now",
    avatar: "JW",
  },
];

// ──────────────────────────────────────────
// AI Chat Mock Data
// ──────────────────────────────────────────

export const chatConversations = [
  { id: 1, title: "Marketing Strategy Ideas", time: "Now", active: true },
  { id: 2, title: "Code Review Assistant", time: "2h ago", active: false },
  { id: 3, title: "Blog Post Draft", time: "Yesterday", active: false },
  { id: 4, title: "Product Feature Brainstorm", time: "2 days ago", active: false },
  { id: 5, title: "Customer Support Templates", time: "1 week ago", active: false },
];

export const chatMessages = [
  {
    id: 1,
    role: "user" as const,
    content:
      "Can you help me create a marketing strategy for launching an AI-powered SaaS product?",
    time: "10:30 AM",
  },
  {
    id: 2,
    role: "assistant" as const,
    content: `# AI SaaS Launch Strategy 🚀

Here's a comprehensive marketing strategy for your AI-powered SaaS launch:

## 1. Pre-Launch Phase (4-6 weeks)
- **Build anticipation** with a landing page and waitlist
- Create teaser content showcasing AI capabilities
- Partner with tech influencers for early access reviews

## 2. Launch Week
- **Product Hunt launch** — aim for top 3
- Press release to major tech publications
- Live demo webinar with Q&A

## 3. Post-Launch Growth
- Content marketing: publish case studies
- Referral program with credits incentive
- Community building on Discord/Slack

Would you like me to elaborate on any of these phases?`,
    time: "10:31 AM",
  },
  {
    id: 3,
    role: "user" as const,
    content: "Yes, elaborate on the Product Hunt launch strategy please.",
    time: "10:33 AM",
  },
  {
    id: 4,
    role: "assistant" as const,
    content: `## Product Hunt Launch Playbook 🏆

### Timing
- **Best days:** Tuesday or Wednesday
- **Launch time:** 12:01 AM PST (start of PH day)

### Preparation
1. **Hunter:** Get a recognized PH hunter to submit
2. **Assets:** 
   - Compelling tagline (< 60 chars)
   - 5 gallery images showing key features
   - 2-min demo video
3. **Community:** Notify your network before launch

### Day-of Execution
- Respond to every comment within 30 min
- Share on all social channels
- Send email to waitlist with direct PH link
- Offer exclusive PH discount (e.g., 50% first year)

### Post-Launch
- Thank supporters publicly
- Create "As Seen on Product Hunt" badge
- Publish a launch retrospective blog post

This approach has helped SaaS products consistently reach Top 5. Shall I help draft the tagline and description?`,
    time: "10:34 AM",
  },
];

// ──────────────────────────────────────────
// Invoice Data
// ──────────────────────────────────────────

export const invoiceData = {
  id: "INV-2026-0042",
  date: "March 25, 2026",
  dueDate: "April 24, 2026",
  status: "pending" as const,
  from: {
    name: "NexBoard Inc.",
    address: "123 Innovation Drive",
    city: "San Francisco, CA 94105",
    email: "billing@nexboard.io",
  },
  to: {
    name: "Acme Corporation",
    address: "456 Business Ave",
    city: "New York, NY 10001",
    email: "accounts@acme.com",
  },
  items: [
    {
      description: "Enterprise Plan — Annual License",
      quantity: 1,
      rate: 9990,
      amount: 9990,
    },
    {
      description: "AI API Credits — 1M tokens",
      quantity: 5,
      rate: 500,
      amount: 2500,
    },
    {
      description: "Priority Support Add-on",
      quantity: 1,
      rate: 1200,
      amount: 1200,
    },
    {
      description: "Custom Integration Setup",
      quantity: 1,
      rate: 3500,
      amount: 3500,
    },
  ],
  subtotal: 17190,
  tax: 1547.1,
  total: 18737.1,
};
