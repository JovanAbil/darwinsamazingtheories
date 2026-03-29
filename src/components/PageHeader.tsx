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

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowH = window.innerHeight;
      if (rect.bottom < 0 || rect.top > windowH) return;
      const offset = rect.top * speed;
      image.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          top: "-20%",
          bottom: "-20%",
        }}
      />
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
      <div className="relative z-10 container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 animate-fade-in">
          {title}
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl animate-fade-in">
          {description}
        </p>
        {children}
      </div>
    </div>
  );
};

export default PageHeader;
