# NexBoard — AI-Powered SaaS Admin Dashboard

**NexBoard** is a premium, production-ready admin dashboard template built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui v4**. Designed for AI SaaS platforms, it features 17+ beautifully crafted pages, a unique Aurora design system, and a fully responsive layout with dark/light mode.

---

## ✨ Key Features

- **3 Dashboard Variants** — Analytics, AI Overview, eCommerce
- **3 AI Application Pages** — Chat (GPT-style), Image Generator, Content Writer
- **3 Management Pages** — Users, Pricing Plans, Invoice
- **3 Authentication Pages** — Login, Register, Forgot Password (standalone layout)
- **2 Settings Pages** — Profile, Account (tabbed: General/Security/Notifications/Billing)
- **2 Error Pages** — 404 Not Found, 500 Server Error
- **Dark / Light Mode** — Seamless theme switching with system preference support
- **Aurora Design System** — Unique jewel-tone oklch color palette
- **Responsive Layout** — Mobile-first, collapsible sidebar with drawer mode
- **55+ ShadCN Components** — Fully installed and themed
- **Recharts Integration** — Line, Area, Bar, Pie charts with theme-aware colors
- **Framer Motion** — Smooth page transitions and micro-animations
- **Redux Toolkit** — State management for sidebar and theme
- **SEO Optimized** — Proper meta tags, semantic HTML

## 🛠 Tech Stack

| Technology | Version |
|------------|---------|
| Next.js | 16.2.1 |
| React | 19.2.4 |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |
| shadcn/ui | 4.1.0 (Vega preset) |
| Recharts | 3.8.0 |
| Framer Motion | 12.x |
| Redux Toolkit | 2.x |
| next-themes | 0.4.6 |
| Lucide React | 1.6.0 |

## 📁 Folder Structure

```
nexboard-react-admin-dashboard/
├── app/                          # Next.js App Router pages
│   ├── (dashboard)/              # Dashboard route group (with sidebar)
│   │   ├── dashboard/
│   │   │   ├── analytics/        # Analytics Dashboard
│   │   │   ├── ai/               # AI Dashboard
│   │   │   └── ecommerce/        # eCommerce Dashboard
│   │   ├── apps/
│   │   │   ├── ai-chat/          # AI Chat Interface
│   │   │   ├── ai-image/         # AI Image Generator
│   │   │   ├── ai-writer/        # AI Content Writer
│   │   │   ├── users/            # User Management
│   │   │   ├── pricing/          # Pricing Plans
│   │   │   └── invoice/          # Invoice Page
│   │   └── settings/
│   │       ├── profile/          # User Profile
│   │       └── account/          # Account Settings
│   ├── auth/                     # Auth pages (standalone layout)
│   │   ├── login/
│   │   ├── register/
│   │   └── forgot-password/
│   ├── error.tsx                 # 500 Error Page
│   ├── not-found.tsx             # 404 Page
│   ├── layout.tsx                # Root Layout
│   └── globals.css               # Aurora Design System
├── components/
│   ├── layout/                   # Sidebar, Header, Dashboard Layout
│   ├── providers/                # Theme & Redux Providers
│   └── ui/                       # 55+ shadcn/ui components
├── store/                        # Redux Toolkit store & slices
├── lib/                          # Utils, navigation config, mock data
├── hooks/                        # Custom React hooks
└── docs/                         # Documentation
```

## 🎨 Design System

NexBoard uses the **Aurora Design System** — a handcrafted color palette built on the oklch color space:

- **Light Mode**: Warm pearl surfaces with jewel-tone accents (deep indigo primary, teal accent)
- **Dark Mode**: Deep obsidian surfaces with luminous neon accents
- **5 Chart Colors**: Aurora jewel tones that adapt to theme
- **Semantic Colors**: Success (emerald), Warning (amber), Info (sapphire), Destructive (crimson)
- **Brand Gradient**: Indigo → Violet → Magenta
- **Custom Utilities**: Glassmorphism, glow effects, dot patterns, text gradients

## 📄 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Analytics Dashboard | `/dashboard/analytics` | Revenue charts, traffic sources, recent orders |
| AI Dashboard | `/dashboard/ai` | API calls, token usage, model performance |
| eCommerce Dashboard | `/dashboard/ecommerce` | Sales trends, top products, categories |
| AI Chat | `/apps/ai-chat` | ChatGPT-style interface with conversation history |
| AI Image Generator | `/apps/ai-image` | Text-to-image with controls and gallery |
| AI Content Writer | `/apps/ai-writer` | Content generation with templates |
| Users | `/apps/users` | User table with search, filter, actions |
| Pricing | `/apps/pricing` | 3-tier pricing with monthly/yearly toggle |
| Invoice | `/apps/invoice` | Professional invoice with download/print |
| Profile | `/settings/profile` | User profile with cover, stats, timeline |
| Account Settings | `/settings/account` | 4-tab settings (General/Security/Notifications/Billing) |
| Login | `/auth/login` | Social + email login |
| Register | `/auth/register` | Social + email registration |
| Forgot Password | `/auth/forgot-password` | Email reset with success state |
| 404 | Auto | Branded not found page |
| 500 | Auto | Error boundary with retry |

## 📜 License

This item is sold under the Envato Regular License. Please refer to the Envato
License terms for details.

## 🤝 Support

For questions and support, please contact us at support@nexboard.io
