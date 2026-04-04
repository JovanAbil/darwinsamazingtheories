import { useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { navigationItems, type NavItem } from "@/data/navigation";

/* Flatten nav tree so child pages are included in prev/next logic */
const flattenNav = (items: NavItem[]): NavItem[] =>
  items.flatMap((item) => [item, ...(item.children ? flattenNav(item.children) : [])]);

const flatItems = flattenNav(navigationItems);

const PageNavigation = () => {
  const location = useLocation();
  const currentIndex = flatItems.findIndex((item) => item.href === location.pathname);

  const prev = currentIndex > 0 ? navigationItems[currentIndex - 1] : null;
  const next = currentIndex < navigationItems.length - 1 ? navigationItems[currentIndex + 1] : null;

  return (
    <nav className="border-t border-border/50 py-8 mt-16">
      <div className="container mx-auto px-6 flex items-center justify-between max-w-3xl">
        {/* Previous */}
        {prev ? (
          <a
            href={prev.href}
            className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:shadow-[var(--shadow-soft)] transition-all duration-700 group"
          >
            <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <div className="flex flex-col items-start">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60 font-medium">Previous</span>
              <span className="text-sm font-medium">{prev.title}</span>
            </div>
          </a>
        ) : (
          <div className="w-36" />
        )}

        {/* Home */}
        <a
          href="/"
          className="flex items-center justify-center w-11 h-11 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-700 hover:shadow-[var(--shadow-soft)]"
        >
          <Home className="h-4 w-4" />
        </a>

        {/* Next */}
        {next ? (
          <a
            href={next.href}
            className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:shadow-[var(--shadow-soft)] transition-all duration-700 group"
          >
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60 font-medium">Next</span>
              <span className="text-sm font-medium">{next.title}</span>
            </div>
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        ) : (
          <div className="w-36" />
        )}
      </div>
    </nav>
  );
};

export default PageNavigation;
