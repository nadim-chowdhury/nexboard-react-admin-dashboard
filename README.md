# NexBoard - React Admin Dashboard

NexBoard is a modern, high-performance, and scalable admin dashboard built with the latest React ecosystem. It provides a robust foundation for building data-rich web applications with secure authentication, sophisticated state management, and a beautiful UI.

## 🌟 Features

- **App Router:** Utilizes the new Next.js App Router for optimized server/client rendering boundaries.
- **Modern UI Components:** Built on top of Shadcn UI, Radix UI, and Base UI for accessible, customizable components.
- **Global State:** Powered by Redux Toolkit for predictable state management across complex dashboard views.
- **Data Visualization:** Integrated with Recharts for responsive, interactive charting.
- **Beautiful Animations:** Smooth transitions and interactions using Framer Motion and tw-animate-css.
- **Styling Engine:** Lightning-fast styling with the newly released Tailwind CSS v4.

## 🚀 Tech Stack

- **Core:** [Next.js 16.2](https://nextjs.org) & [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Architecture:** [Shadcn UI](https://ui.shadcn.com/) / [Base UI](https://mui.com/base-ui/) / `clsx` / `tailwind-merge`
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) & `react-redux`
- **Animation:** `framer-motion` & `tw-animate-css`
- **Icons & Visuals:** `lucide-react`
- **Other Utilities:** `date-fns` (time parsing), `sonner` (toast notifications), `embla-carousel-react`.

## 📂 Architecture & Folder Structure

```text
nexboard-react-admin-dashboard/
├── app/               # Next.js App Router logic (pages, layouts, API routes)
├── components/        # Reusable React components (UI kits, charts, modals)
├── docs/              # Project documentation and architectural notes
├── hooks/             # Custom React hooks (e.g., useAuth, useMediaQuery)
├── lib/               # Utility functions and shared helpers (e.g., Shadcn utils)
├── services/          # API integration layer (Axios/Fetch wrappers, endpoints)
├── store/             # Redux configuration, slices, and global state logic
├── public/            # Static assets like images, fonts, and favicons
└── ...                # Config files (eslint.config.mjs, next.config.ts, tailwind/postcss)
```
