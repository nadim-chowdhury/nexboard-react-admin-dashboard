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
- **UI Architecture:** [Shadcn UI](https://ui.shadcn.com/) / [Base UI](https://mui.com/base-ui/) / clsx / tailwind-merge
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) & react-redux
- **Animation:** framer-motion & tw-animate-css
- **Icons & Visuals:** lucide-react
- **Other Utilities:** date-fns (time parsing), sonner (toast notifications), embla-carousel-react.

## 📂 Architecture & Folder Structure

    nexboard-react-admin-dashboard/
    ├── app/               # Next.js App Router logic (pages, layouts, API routes)
    ├── components/        # Reusable React components (UI kits, charts, modals)
    ├── docs/              # Project documentation and architectural notes
    ├── hooks/             # Custom React hooks (e.g., useAuth, useMediaQuery)
    ├── lib/               # Utility functions and shared helpers (e.g., Shadcn utils)
    ├── services/          # API integration layer (Axios/Fetch wrappers, endpoints)
    ├── store/             # Redux configuration, slices, and global state logic
    ├── public/            # Static assets like images, fonts, and favicons
    └── ...                # Config files (eslint.config.mjs, next.config.ts, etc)

## 📦 Getting Started

### Prerequisites

Ensure you have Node.js 20+ installed. This project uses npm as the package manager.

### 1. Installation

Clone the repository and install the dependencies:

    git clone <repository-url>
    cd nexboard-react-admin-dashboard
    npm install

### 2. Environment Variables

Create a .env.local file in the root directory based on .env.example (if available) and fill in your variables:

    NEXT_PUBLIC_API_URL=http://localhost:8000/api
    # Add any specialized auth secrets or keys here

### 3. Running the Development Server

    npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page auto-updates as you edit the files.

## 🛠️ Scripts & Commands

- `npm run dev`: Starts the Next.js development server with hot-reloading.
- `npm run build`: Compiles the application for production deployment.
- `npm run start`: Starts the Next.js production server (must run `build` first).
- `npm run lint`: Analyzes the code using ESLint to identify and report on patterns.

## 🤝 Contribution Guidelines

1. **Branch Naming**: Use feature/your-feature-name or fix/your-fix-name.
2. **Components**: All new UI components should be designed functionally and placed in the components/ directory.
3. **State**: Keep component-level state inside the component. Use the store/ directory exclusively for global state patterns.

---

_Bootstrapped with create-next-app & custom tailored for NexBoard Dashboard._
