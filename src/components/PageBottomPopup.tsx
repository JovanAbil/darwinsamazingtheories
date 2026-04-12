import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { pagePopups } from "@/data/popupMessages";

/**
 * PAGE-BOTTOM POP-UP
 * Shows a specific pop-up every time the user scrolls to the bottom of a page
 * that has an entry in `pagePopups`.
 */
const PageBottomPopup = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const popup = pagePopups.find((p) => p.triggerPage === pathname);

  // Reset trigger when page changes
  useEffect(() => {
    setHasTriggered(false);
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!popup || hasTriggered) return;

    const handleScroll = () => {
      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.scrollHeight;

      // Trigger when within 100px of the bottom
      if (scrollBottom >= docHeight - 100) {
        setOpen(true);
        setHasTriggered(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [popup, hasTriggered]);

  if (!popup) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-card border-border max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-foreground text-xl">
            {popup.title}
          </DialogTitle>
        </DialogHeader>
        <div
          className="text-muted-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: popup.content }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default PageBottomPopup;
