import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction: "left" | "right" | "full";
  className?: string;
}

const ScrollReveal = ({ children, direction, className = "" }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"hidden" | "visible" | "hidden-exit">("hidden");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
        } else {
          // Element left the viewport
          const boundingRect = entry.boundingClientRect;
          if (boundingRect.top > 0) {
            // Scrolled up past the element — exit animation
            setState("hidden-exit");
          } else {
            setState("hidden");
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const baseClass =
    direction === "full"
      ? "scroll-reveal-fade"
      : direction === "left"
      ? "scroll-reveal-left"
      : "scroll-reveal-right";

  const stateClass = state === "visible" ? "visible" : state === "hidden-exit" ? "hidden-exit" : "";

  return (
    <div ref={ref} className={`${baseClass} ${stateClass} hover-pop ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;
