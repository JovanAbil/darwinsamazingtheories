import type { ReactNode } from "react";

/* =============================================
 * PAGE HEADER — PARALLAX TITLE SECTION
 * =============================================
 * Displays a parallax background image behind the
 * page title and description. The image scrolls at
 * a different pace (fixed attachment) creating a
 * "window" effect — just like the hero on the home page.
 *
 * EDIT: Change imageUrl to your own image path.
 *       e.g. imageUrl="/images/my-header.jpg"
 * =========================================== */

interface PageHeaderProps {
  /** Background image URL for the parallax effect */
  imageUrl: string;
  /** Page title */
  title: string;
  /** Page description */
  description: string;
  /** Optional extra content below the description */
  children?: ReactNode;
}

const PageHeader = ({ imageUrl, title, description, children }: PageHeaderProps) => {
  return (
    <div
      className="parallax-bg relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
        minHeight: "45vh",
      }}
    >
      {/* Semi-transparent overlay for readability */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
      {/* Content */}
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
