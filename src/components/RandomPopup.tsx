import { useState, useEffect, useCallback, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { popupMessages } from "@/data/popupMessages";

/* =============================================
 * RANDOM POP-UP COMPONENT
 * =============================================
 * Shows a random message from popupMessages every 5–10 minutes.
 * Never shows the same pop-up twice in a row.
 * Edit the delays below to change timing.
 * Add/remove messages in src/data/popupMessages.ts
 * =========================================== */

const MIN_DELAY_MS = 5 * 60 * 1000;  // 5 minutes
const MAX_DELAY_MS = 10 * 60 * 1000; // 10 minutes

function getRandomDelay() {
  return MIN_DELAY_MS + Math.random() * (MAX_DELAY_MS - MIN_DELAY_MS);
}

const RandomPopup = () => {
  const [open, setOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(popupMessages[0]);
  const lastIdRef = useRef<string | null>(null);

  const showRandomPopup = useCallback(() => {
    if (popupMessages.length === 0) return;

    // Pick a random message that isn't the same as the last one shown
    let msg = popupMessages[Math.floor(Math.random() * popupMessages.length)];
    if (popupMessages.length > 1) {
      while (msg.id === lastIdRef.current) {
        msg = popupMessages[Math.floor(Math.random() * popupMessages.length)];
      }
    }

    lastIdRef.current = msg.id;
    setCurrentMessage(msg);
    setOpen(true);
  }, []);

  useEffect(() => {
    if (popupMessages.length === 0) return;

    const scheduleNext = () => {
      return setTimeout(() => {
        showRandomPopup();
        timerRef = scheduleNext();
      }, getRandomDelay());
    };

    let timerRef = scheduleNext();
    return () => clearTimeout(timerRef);
  }, [showRandomPopup]);

  // Press ',' to force a pop-up
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "," && !e.metaKey && !e.ctrlKey && !e.altKey) {
        showRandomPopup();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showRandomPopup]);

  if (!currentMessage) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-card border-border max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-foreground text-xl">
            {currentMessage.title}
          </DialogTitle>
        </DialogHeader>
        <div
          className="text-muted-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: currentMessage.content }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default RandomPopup;
