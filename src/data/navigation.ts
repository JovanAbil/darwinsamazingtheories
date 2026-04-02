/**
 * =============================================
 * NAVIGATION CONFIGURATION
 * =============================================
 * Add, remove, or reorder pages here.
 * Each entry becomes a sidebar link.
 * The `icon` field maps to lucide-react icon names.
 *
 * To add a new page:
 *   1. Add an entry here
 *   2. Create the page component in src/pages/
 *   3. Add the route in App.tsx
 *
 * See /docs/MANAGEMENT.md for details.
 */

export interface NavItem {
  title: string;
  href: string;
  icon: string;
  description?: string;
}

export const navigationItems: NavItem[] = [
  { title: "Home", href: "/", icon: "Home", description: "Text goes here" },
  { title: "Nonconstancy of species", href: "/page-1", icon: "FileText", description: "Text goes here" },
  { title: "Descent from a common ancestor", href: "/page-2", icon: "FileText", description: "Text goes here" },
  { title: "Gradual evolution", href: "/page-3", icon: "FileText", description: "Text goes here" },
  { title: "Multiplication of species", href: "/page-4", icon: "FileText", description: "Text goes here" },
  { title: "Natural Selection", href: "/page-5", icon: "FileText", description: "Text goes here" },
  { title: "Case Study", href: "/case", icon: "FileText", description: "Text goes here" },
  { title: "Domain Classification", href: "/classification", icon: "FileText", description: "Text goes here" },
  { title: "Credits", href: "/credits", icon: "Heart", description: "Credits and attributions" },
];
