import { useState } from "react";
import { Home, FileText, Heart, Shield, Leaf, Trees, Sun, Mountain, Users, ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { navigationItems, type NavItem } from "@/data/navigation";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home, FileText, Heart, Shield, Leaf, Trees, Sun, Mountain, Users,
};

function NavItemRenderer({ item, collapsed }: { item: NavItem; collapsed: boolean }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const Icon = iconMap[item.icon] || FileText;
  const isActive = location.pathname === item.href || location.pathname + location.hash === item.href;
  const hasChildren = item.children && item.children.length > 0;
  const childActive = hasChildren && item.children!.some(
    (c) => location.pathname + location.hash === c.href || location.pathname === c.href
  );

  return (
    <>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <div className="flex items-center w-full">
            <a
              href={item.href}
              className={`flex items-center gap-2 rounded-md px-3 py-2 transition-colors flex-1 ${
                isActive || childActive
                  ? "bg-accent text-accent-foreground font-medium"
                  : "hover:bg-muted"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {!collapsed && <span>{item.title}</span>}
            </a>
            {hasChildren && !collapsed && (
              <button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen(!open); }}
                className="p-1 rounded hover:bg-muted transition-colors"
              >
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
              </button>
            )}
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>

      {/* Dropdown children */}
      {hasChildren && open && !collapsed && (
        <div className="ml-6 border-l border-border pl-2 space-y-0.5">
          {item.children!.map((child) => {
            const ChildIcon = iconMap[child.icon] || FileText;
            const childIsActive = location.pathname + location.hash === child.href;
            return (
              <SidebarMenuItem key={child.href}>
                <SidebarMenuButton asChild>
                  <a
                    href={child.href}
                    className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors ${
                      childIsActive
                        ? "bg-accent text-accent-foreground font-medium"
                        : "hover:bg-muted text-muted-foreground"
                    }`}
                  >
                    <ChildIcon className="h-3.5 w-3.5 shrink-0" />
                    <span>{child.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </div>
      )}
    </>
  );
}

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            {!collapsed && "Navigation"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <NavItemRenderer key={item.href} item={item} collapsed={collapsed} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-2">
        <ThemeToggle />
      </SidebarFooter>
    </Sidebar>
  );
}
