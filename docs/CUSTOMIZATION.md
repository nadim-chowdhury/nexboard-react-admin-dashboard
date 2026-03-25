# Customization Guide

## Theming

### Changing Colors

All colors are defined as CSS custom properties in `app/globals.css` using the
[oklch color space](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch).

```css
/* Light theme primary color */
:root {
  --primary: oklch(0.45 0.18 270);          /* Deep indigo */
  --primary-foreground: oklch(0.98 0.005 270);
}

/* Dark theme primary color */
.dark {
  --primary: oklch(0.68 0.20 270);          /* Luminous indigo */
  --primary-foreground: oklch(0.12 0.02 270);
}
```

To change the primary color, modify the hue value (last number). Examples:
- Blue: `270` → `240`
- Green: `270` → `145`  
- Orange: `270` → `55`

### Chart Colors

Chart colors are defined as `--chart-1` through `--chart-5` in `globals.css`.
These are used by Recharts via CSS variables.

### Brand Gradient

The brand gradient is defined as `--brand-start`, `--brand-mid`, `--brand-end`.
Used for the logo, badges, and CTA buttons via the `bg-brand-gradient` utility.

## Adding New Pages

### Dashboard Page (with sidebar)

1. Create a new folder under `app/(dashboard)/`:

```
app/(dashboard)/my-page/page.tsx
```

2. Add a navigation item in `lib/navigation.ts`:

```ts
{
  title: "My Page",
  href: "/my-page",
  icon: LayoutDashboard,
}
```

### Standalone Page (without sidebar)

Create a page directly under `app/`:

```
app/my-standalone-page/page.tsx
```

## Modifying Components

All shadcn/ui components are in `components/ui/`. They are fully editable:

- **Modify styles** directly in the component files
- **Add variants** using `class-variance-authority` (CVA)
- **Extend functionality** by adding new props

## Adding Mock Data

Add new mock data in `lib/mock-data.ts` and import it in your page components.

## Redux Store

To add new state:

1. Create a new slice in `store/slices/`
2. Register it in `store/index.ts`
3. Access with `useSelector` and `useDispatch` in client components
