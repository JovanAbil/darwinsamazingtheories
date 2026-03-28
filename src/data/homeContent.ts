/**
 * =============================================
 * HOME PAGE CONTENT
 * =============================================
 * Edit this file to change home page content.
 *
 * CONTENT TYPES:
 *   - "text"   → renders a text block
 *   - "image"  → renders an image (set src, alt, width, height)
 *   - "video"  → renders a video (set src, width, height)
 *
 * DIRECTION:
 *   - "left"   → slides in from left on scroll down, exits to right on scroll up
 *   - "right"  → slides in from right on scroll down, exits to left on scroll up
 *   - "full"   → fades in/out (for full-width content)
 *
 * All items have hover pop-up effect automatically.
 *
 * See /docs/MANAGEMENT.md for full instructions.
 */

export interface ContentBlock {
  id: string;
  type: "text" | "image" | "video";
  direction: "left" | "right" | "full";
  content?: string;          // For text blocks
  heading?: string;          // Optional heading
  src?: string;              // For images/videos
  alt?: string;              // For images
  width?: string;            // CSS width (e.g., "100%", "500px")
  height?: string;           // CSS height (e.g., "auto", "300px")
  link?: string;             // Optional clickable link
}

export const heroContent = {
  heading: "BioSphere",
  subheading: "Exploring the beauty of life and nature",
  ctaText: "Learn More",
  ctaLink: "#claims",
};

export const claims = [
  {
    id: "claim-1",
    title: "Sustainable Living",
    description: "Promoting eco-friendly practices for a healthier planet.",
    icon: "Leaf",
  },
  {
    id: "claim-2",
    title: "Biodiversity",
    description: "Protecting the rich tapestry of life on Earth.",
    icon: "Trees",
  },
  {
    id: "claim-3",
    title: "Clean Energy",
    description: "Harnessing renewable resources for a brighter future.",
    icon: "Sun",
  },
  {
    id: "claim-4",
    title: "Conservation",
    description: "Preserving natural habitats for generations to come.",
    icon: "Mountain",
  },
  {
    id: "claim-5",
    title: "Community",
    description: "Building connections through shared environmental values.",
    icon: "Users",
  },
];

export const homeContentBlocks: ContentBlock[] = [
  {
    id: "block-1",
    type: "text",
    direction: "left",
    heading: "Our Mission",
    content: "We believe in creating a sustainable future where humanity and nature thrive together. Through education, innovation, and community action, we work toward a world where every living thing is valued.",
  },
  {
    id: "block-2",
    type: "image",
    direction: "right",
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
    alt: "A lush green forest with sunlight filtering through the canopy",
    width: "100%",
    height: "400px",
  },
  {
    id: "block-3",
    type: "text",
    direction: "right",
    heading: "What We Do",
    content: "From community gardens to wildlife corridors, we support projects that make a real difference. Our team works with local communities to implement solutions that protect biodiversity while improving quality of life.",
  },
  {
    id: "block-4",
    type: "image",
    direction: "full",
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=500&fit=crop",
    alt: "A panoramic view of a misty valley with rolling green hills",
    width: "100%",
    height: "500px",
  },
  {
    id: "block-5",
    type: "text",
    direction: "left",
    heading: "Get Involved",
    content: "Join our growing community of nature enthusiasts, scientists, and changemakers. Together, we can create lasting positive change for our planet.",
    link: "/credits",
  },
  {
    id: "block-6",
    type: "image",
    direction: "left",
    src: "https://images.unsplash.com/photo-1518173946687-a53e16966f10?w=600&h=400&fit=crop",
    alt: "Close-up of green leaves with morning dew drops",
    width: "100%",
    height: "400px",
  },
];
