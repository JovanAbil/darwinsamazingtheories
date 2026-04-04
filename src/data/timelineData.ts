/**
 * =============================================
 * TIMELINE DATA
 * =============================================
 * Each entry becomes a clickable circle on the
 * interactive timeline at the bottom of the Claims page.
 *
 * CONTENT TYPES you can add to each entry:
 *   - text: set `content` field with your paragraph
 *   - image: set `image` field with URL, `imageAlt` for alt text
 *   - video: set `videoUrl` field (YouTube embed URL or local /videos/file.mp4)
 *   - heading: set `heading` field for a title
 *
 * HOW TO ADD AN ENTRY:
 *   1. Copy one of the objects below
 *   2. Change the id to something unique (e.g. "event-6")
 *   3. Fill in the fields you want (leave others as undefined)
 *   4. The timeline circle appears automatically
 *
 * HOW TO ADD AN IMAGE:
 *   image: "https://example.com/photo.jpg"
 *   imageAlt: "Description of the image"
 *
 * HOW TO ADD A VIDEO:
 *   videoUrl: "https://www.youtube.com/embed/VIDEO_ID"
 *   — or for local: videoUrl: "/videos/my-video.mp4"
 *   — set videoType: "youtube" or "local"
 *
 * HOW TO ADD TEXT:
 *   content: "Your paragraph text here."
 *
 * See /docs/TIMELINE_GUIDE.md for full instructions.
 */

export interface TimelineEntry {
  id: string;
  year: string;
  heading: string;
  content?: string;
  image?: string;
  imageAlt?: string;
  videoUrl?: string;
  videoType?: "youtube" | "local";
}

export const timelineEntries: TimelineEntry[] = [
  {
    id: "event-1",
    year: "1831",
    heading: "The Voyage Begins",
    content: "Charles Darwin sets sail on HMS Beagle, beginning a five-year journey that would change our understanding of life on Earth.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&h=300&fit=crop",
    imageAlt: "Ocean voyage illustration",
  },
  {
    id: "event-2",
    year: "1835",
    heading: "Galápagos Discovery",
    content: "Darwin arrives at the Galápagos Islands and observes unique species that will later inform his theory of natural selection.",
  },
  {
    id: "event-3",
    year: "1859",
    heading: "On the Origin of Species",
    content: "Darwin publishes his groundbreaking work, introducing the theory of evolution by natural selection to the world.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop",
    imageAlt: "Nature and evolution",
  },
  {
    id: "event-4",
    year: "Today",
    heading: "Modern Conservation",
    content: "Darwin's legacy lives on as we apply evolutionary principles to conservation biology and sustainable living.",
  },
];
