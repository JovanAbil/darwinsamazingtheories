import { useEffect, useRef, type ReactNode } from "react";

/* =============================================
 * PAGE HEADER — PARALLAX TITLE SECTION
 * =============================================
 * Displays a parallax background image behind the
 * page title and description. The image scrolls at
 * a slower pace creating a depth effect.
 *
 * EDIT: Change imageUrl to your own image path.
 *       e.g. imageUrl="/images/my-header.jpg"
 * =========================================== */

interface PageHeaderProps {
  imageUrl: string;
  title: string;
  description: string;
  children?: ReactNode;
  speed?: number;
}

const PageHeader = ({ imageUrl, title, description, children, speed = 0.4 }: PageHeaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
    let ticking = false;

    const updateParallax = () => {
      const rect = container.getBoundingClientRect();
      const windowH = window.innerHeight;
      if (rect.bottom < 0 || rect.top > windowH) {
        ticking = false;
        return;
      }

      const maxOffset = rect.height * 0.2;
      const rawOffset = -rect.top * (1 - speed);
      const offset = clamp(rawOffset, -maxOffset, maxOffset);
      image.style.transform = `translate3d(0, ${offset}px, 0) scale(1.08)`;
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    updateParallax();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "45vh" }}
    >
      {/* Parallax image layer */}
      <div
        ref={imageRef}
        className="absolute inset-0 will-change-transform pointer-events-none"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          top: "-30%",
          bottom: "-30%",
        }}
      />
      <div className="absolute inset-0 bg-background/35 backdrop-blur-[1px]" />
      <div className="relative z-10 container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 animate-fade-in" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6), 0 0 12px rgba(0,0,0,0.3)" }}>
          {title}
        </h1>
        <p className="text-lg max-w-2xl animate-fade-in text-foreground font-medium" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5), 0 0 8px rgba(0,0,0,0.25)" }}>
          {description}
        </p>
        {children}
      </div>
    </div>
  );
};

export default PageHeader;
