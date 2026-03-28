import type { ReactNode } from "react";

interface ParallaxSectionProps {
  imageUrl: string;
  children?: ReactNode;
  height?: string;
  overlay?: boolean;
}

const ParallaxSection = ({ imageUrl, children, height = "60vh", overlay = true }: ParallaxSectionProps) => {
  return (
    <div
      className="parallax-bg relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
        minHeight: height,
      }}
    >
      {overlay && <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

export default ParallaxSection;
