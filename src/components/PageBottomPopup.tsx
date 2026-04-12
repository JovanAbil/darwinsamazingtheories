import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { pageBottomPopups } from "@/data/popupMessages";

/* =============================================
 * PAGE-BOTTOM POP-UP COMPONENT
 * =============================================
 * Shows a specific pop-up when the user scrolls to
 * the bottom of a claim page (e.g. /page-1).
 * Configure messages in src/data/popupMessages.ts
 * under the `pageBottomPopups` object.
 * =========================================== */

const BOTTOM_THRESHOLD = 150; // px from bottom to trigger

const PageBottomPopup = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const message = pageBottomPopups[location.pathname];

  // Reset trigger when route changes
  useEffect(() => {
    setHasTriggered(false);
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!message || hasTriggered) return;

    const handleScroll = () => {
      const scrollBottom =
        window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.scrollHeight;

      if (docHeight - scrollBottom < BOTTOM_THRESHOLD) {
        setOpen(true);
        setHasTriggered(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [message, hasTriggered]);

  if (!message) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-card border-border max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-foreground text-xl">
            {message.title}
          </DialogTitle>
        </DialogHeader>
        <div
          className="text-muted-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: message.content }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default PageBottomPopup;
