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
  heading: "Darwin’s Evolutionary Impact",
  subheading: "Go Read!",
  ctaText: "Claims",
  ctaLink: "#claims",
};

export const claims = [
  {
    id: "claim-1",
    title: "Nonconstancy of species",
    description: "Species are not fixed but can adapt and evolve over time",
    icon: "Leaf",
  },
  {
    id: "claim-2",
    title: "Descent from a common ancestor",
    description: "All life descends from a common ancestor",
  },
  {
    id: "claim-3",
    title: "Gradual evolution",
    description: "Species evolve slowly and steadily over time",
  },
  {
    id: "claim-4",
    title: "Multiplication of species",
    description: "New species are formed from a common ancestor",
  },
  {
    id: "claim-5",
    title: "Natural Selection",
    description: "The process through which populations of organisms adapt and change to reproduce better fit organisms for the environment",
  },
];

export const homeContentBlocks: ContentBlock[] = [
  {
    id: "block-1",
    type: "text",
    direction: "left",
    heading: "Charles Darwin",
    content: "Father of Evolution",
  },
  {
    id: "block-2",
    type: "image",
    direction: "right",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Charles_Darwin_portrait.jpg",
    alt: "Darwin",
    width: "100%",
    height: "400px",
  },
  {
    id: "block-3",
    type: "image",
    direction: "full",
    //Fix this image
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=500&fit=crop",
    alt: "Text goes here",
    width: "100%",
    height: "500px",
  },
];
