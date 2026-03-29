import { useEffect, useRef, type ReactNode } from "react";

interface ParallaxSectionProps {
  imageUrl: string;
  children?: ReactNode;
  height?: string;
  overlay?: boolean;
  /** Background speed factor: 0 = strongest parallax, 1 = no parallax */
  speed?: number;
}

const ParallaxSection = ({
  imageUrl,
  children,
  height = "60vh",
  overlay = true,
  speed = 0.4,
}: ParallaxSectionProps) => {
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
      // Only animate when visible
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
      style={{ minHeight: height }}
    >
      {/* Parallax image layer — oversized to allow movement */}
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
      {overlay && <div className="absolute inset-0 bg-background/35 backdrop-blur-[1px]" />}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

export default ParallaxSection;
