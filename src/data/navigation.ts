/**
 * =============================================
 * NAVIGATION CONFIGURATION
 * =============================================
 * Add, remove, or reorder pages here.
 * Each entry becomes a sidebar link.
 * The `icon` field maps to lucide-react icon names.
 *
 * DROPDOWN SUPPORT:
 *   Set `children` to create a collapsible dropdown in the sidebar.
 *   The parent item links to its own page, and children appear nested.
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
  children?: NavItem[];
}

export const navigationItems: NavItem[] = [
  { title: "Home", href: "/", icon: "Home", description: "Main landing page" },
  {
    title: "Claims",
    href: "/claims",
    icon: "Shield",
    description: "Our core claims",
    children: [
      { title: "Sustainable Living", href: "/page-1", icon: "Leaf" },
      { title: "Biodiversity", href: "/page-2", icon: "Trees" },
      { title: "Clean Energy", href: "/page-3", icon: "Sun" },
      { title: "Conservation", href: "/page-4", icon: "Mountain" },
      { title: "Community", href: "/page-5", icon: "Users" },
    ],
  },
  { title: "Credits", href: "/credits", icon: "Heart", description: "Credits and attributions" },
];
