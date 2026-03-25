# Installation Guide

## Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher (or yarn/pnpm)

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build

```bash
npm run build
npm start
```

## Project Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm run dev` | Start development server with HMR |
| `build` | `npm run build` | Create optimized production build |
| `start` | `npm start` | Start production server |
| `lint` | `npm run lint` | Run ESLint |

## Environment Variables

No environment variables are required for the template. If you integrate a
backend API, create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_APP_NAME=NexBoard
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Click Deploy

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Static Export

```bash
# Add to next.config.ts:
# output: 'export'
npm run build
# Deploy the 'out' folder to any static host
```

## Troubleshooting

**Build fails with TypeScript errors?**
- Ensure Node.js 18+ is installed
- Delete `node_modules` and `package-lock.json`, then run `npm install`

**Styles not loading?**
- Ensure Tailwind CSS v4 is installed: `npm ls tailwindcss`
- Check that `globals.css` imports are correct

**Charts not rendering?**
- Recharts requires a parent container with explicit dimensions
- Ensure you're not rendering charts in SSR (they're client components)
