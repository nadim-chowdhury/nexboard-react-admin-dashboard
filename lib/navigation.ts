import {
  LayoutDashboard,
  Bot,
  ShoppingCart,
  MessageSquare,
  Image,
  FileText,
  Users,
  CreditCard,
  Receipt,
  Settings,
  User,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
  children?: NavItem[];
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const navigationConfig: NavGroup[] = [
  {
    label: "Dashboards",
    items: [
      {
        title: "Analytics",
        href: "/dashboard/analytics",
        icon: LayoutDashboard,
      },
      {
        title: "AI Overview",
        href: "/dashboard/ai",
        icon: Bot,
        badge: "New",
      },
      {
        title: "eCommerce",
        href: "/dashboard/ecommerce",
        icon: ShoppingCart,
      },
    ],
  },
  {
    label: "AI Applications",
    items: [
      {
        title: "AI Chat",
        href: "/apps/ai-chat",
        icon: MessageSquare,
        badge: "Hot",
      },
      {
        title: "Image Generator",
        href: "/apps/ai-image",
        icon: Image,
      },
      {
        title: "Content Writer",
        href: "/apps/ai-writer",
        icon: FileText,
      },
    ],
  },
  {
    label: "Management",
    items: [
      {
        title: "Users",
        href: "/apps/users",
        icon: Users,
      },
      {
        title: "Pricing Plans",
        href: "/apps/pricing",
        icon: CreditCard,
      },
      {
        title: "Invoice",
        href: "/apps/invoice",
        icon: Receipt,
      },
    ],
  },
  {
    label: "Settings",
    items: [
      {
        title: "Profile",
        href: "/settings/profile",
        icon: User,
      },
      {
        title: "Account",
        href: "/settings/account",
        icon: Settings,
      },
    ],
  },
];
