import type { ReactNode } from "react";

/* =============================================
 * PAGE HEADER — PARALLAX TITLE SECTION
 * =============================================
 * Displays a parallax background image behind the
 * page title and description. The effect ends where
 * the first content section begins.
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
    <div className="relative overflow-hidden">
      {/* Parallax background — fixed attachment creates the scroll effect */}
      <div
        className="absolute inset-0 parallax-bg"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-background/70 backdrop-blur-[3px]" />
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-16">
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
