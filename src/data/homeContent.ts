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
  heading: "Text goes here",
  subheading: "Text goes here",
  ctaText: "Credits",
  ctaLink: "#claims",
};

export const claims = [
  {
    id: "claim-1",
    title: "Text goes here",
    description: "Text goes here",
    icon: "Leaf",
  },
  {
    id: "claim-2",
    title: "Text goes here",
    description: "Text goes here",
  },
  {
    id: "claim-3",
    title: "Text goes here",
    description: "Text goes here",
  },
  {
    id: "claim-4",
    title: "Text goes here",
    description: "Text goes here",
  },
  {
    id: "claim-5",
    title: "Text goes here",
    description: "Text goes here",
  },
];

export const homeContentBlocks: ContentBlock[] = [
  {
    id: "block-1",
    type: "text",
    direction: "left",
    heading: "Text goes here",
    content: "Text goes here",
  },
  {
    id: "block-2",
    type: "image",
    direction: "right",
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
    alt: "Text goes here",
    width: "100%",
    height: "400px",
  },
  {
    id: "block-3",
    type: "text",
    direction: "right",
    heading: "Text goes here",
    content: "Text goes here",
  },
  {
    id: "block-4",
    type: "image",
    direction: "full",
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=500&fit=crop",
    alt: "Text goes here",
    width: "100%",
    height: "500px",
  },
  {
    id: "block-5",
    type: "text",
    direction: "left",
    heading: "Text goes here",
    content: "Text goes here",
    link: "/credits",
  },
  {
    id: "block-6",
    type: "image",
    direction: "left",
    src: "https://images.unsplash.com/photo-1518173946687-a53e16966f10?w=600&h=400&fit=crop",
    alt: "Text goes here",
    width: "100%",
    height: "400px",
  },
];
