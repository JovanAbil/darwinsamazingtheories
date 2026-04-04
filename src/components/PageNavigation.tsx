import { useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { navigationItems } from "@/data/navigation";

/**
 * Prev / Home / Next navigation bar at bottom of every page.
 * Automatically determines neighbors based on navigation order.
 */
const PageNavigation = () => {
  const location = useLocation();
  const currentIndex = navigationItems.findIndex((item) => item.href === location.pathname);

  const prev = currentIndex > 0 ? navigationItems[currentIndex - 1] : null;
  const next = currentIndex < navigationItems.length - 1 ? navigationItems[currentIndex + 1] : null;

  return (
    <nav className="border-t border-border py-6 mt-12">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Previous */}
        {prev ? (
          <a
            href={prev.href}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">{prev.title}</span>
          </a>
        ) : (
          <div />
        )}

        {/* Home */}
        <a
          href="/"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Home className="h-5 w-5" />
        </a>

        {/* Next */}
        {next ? (
          <a
            href={next.href}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="text-sm">{next.title}</span>
            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
};

export default PageNavigation;
