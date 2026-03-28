import ScrollReveal from "./ScrollReveal";
import type { ContentBlock as ContentBlockType } from "@/data/homeContent";

interface ContentBlockProps {
  block: ContentBlockType;
}

const ContentBlock = ({ block }: ContentBlockProps) => {
  const renderContent = () => {
    switch (block.type) {
      case "text":
        return (
          <div className="max-w-2xl mx-auto p-6 rounded-lg bg-card">
            {block.heading && (
              <h2 className="text-3xl font-display font-bold mb-4 text-foreground">{block.heading}</h2>
            )}
            <p className="text-muted-foreground leading-relaxed text-lg">{block.content}</p>
            {block.link && (
              <a href={block.link} className="bio-link inline-block mt-4 text-primary font-medium">
                Learn more →
              </a>
            )}
          </div>
        );

      case "image":
        const imgContent = (
          <img
            src={block.src}
            alt={block.alt || ""}
            className="rounded-lg object-cover"
            style={{ width: block.width || "100%", height: block.height || "auto" }}
            loading="lazy"
          />
        );
        return block.link ? (
          <a href={block.link} className="block">
            {imgContent}
          </a>
        ) : (
          imgContent
        );

      case "video":
        return (
          <video
            src={block.src}
            controls
            className="rounded-lg"
            style={{ width: block.width || "100%", height: block.height || "auto" }}
          />
        );

      default:
        return null;
    }
  };

  return (
    <ScrollReveal direction={block.direction} className={block.direction === "full" ? "w-full" : ""}>
      <div className={`${block.direction === "full" ? "" : block.direction === "left" ? "mr-auto max-w-2xl" : "ml-auto max-w-2xl"}`}>
        {renderContent()}
      </div>
    </ScrollReveal>
  );
};

export default ContentBlock;
