import { useEffect, useRef, type ReactNode } from "react";

interface ParallaxSectionProps {
  imageUrl: string;
  children?: ReactNode;
  height?: string;
  overlay?: boolean;
  /** Speed factor: 0 = fixed, 0.5 = half scroll speed (default), 1 = normal */
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

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowH = window.innerHeight;
      // Only animate when visible
      if (rect.bottom < 0 || rect.top > windowH) return;
      const offset = rect.top * speed;
      image.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial position
    return () => window.removeEventListener("scroll", handleScroll);
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
      {overlay && <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

export default ParallaxSection;
