import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

/* =============================================
 * PAGE 3 — TEMPLATE (ALTERNATING TEXT + MEDIA)
 * =============================================
 * This template shows a storytelling layout: alternating
 * text-left/image-right then image-left/text-right sections.
 *
 * ScrollReveal directions:
 *   "left"  → slides in from the left
 *   "right" → slides in from the right
 *   "full"  → fades in/out
 *
 * Images → public/images/filename.jpg → use /images/filename.jpg
 * Videos → public/videos/filename.mp4 → use /videos/filename.mp4
 * =========================================== */

const Page3 = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-20 space-y-20">

        {/* ============ PAGE TITLE ============ */}
        <ScrollReveal direction="full">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            Page 3 Title
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Replace this subtitle with your own.
          </p>
        </ScrollReveal>

        {/* ============ ROW 1: TEXT LEFT, IMAGE RIGHT ============
         * EXAMPLE (uncomment to use):
         */}
        {/*
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <ScrollReveal direction="left" className="flex-1">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">First Topic</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Describe your first topic here. This text slides in from the left.
              Add as many paragraphs as you need.
            </p>
            <a href="https://example.com" className="bio-link" target="_blank" rel="noopener noreferrer">
              Learn more →
            </a>
          </ScrollReveal>
          <ScrollReveal direction="right" className="flex-1">
            <img
              src="/images/your-image.jpg"
              alt="First topic image"
              className="rounded-lg hover-pop w-full"
              style={{ height: "350px", objectFit: "cover" }}
            />
          </ScrollReveal>
        </div>
        */}

        {/* ============ ROW 2: IMAGE LEFT, TEXT RIGHT (flipped) ============
         * EXAMPLE (uncomment to use):
         */}
        {/*
        <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
          <ScrollReveal direction="right" className="flex-1">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Second Topic</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Now the text is on the right and slides in from the right,
              while the image is on the left sliding in from the left.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left" className="flex-1">
            <img
              src="/images/your-image-2.jpg"
              alt="Second topic image"
              className="rounded-lg hover-pop w-full"
              style={{ height: "350px", objectFit: "cover" }}
            />
          </ScrollReveal>
        </div>
        */}

        {/* ============ FULL-WIDTH VIDEO BREAK ============
         * A YouTube or local video that fades in between sections.
         *
         * EXAMPLE (uncomment to use):
         */}
        {/*
        <ScrollReveal direction="full">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Video title"
            className="w-full rounded-lg hover-pop"
            style={{ height: "450px" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </ScrollReveal>
        */}

        {/* ============ ROW 3: TEXT LEFT, VIDEO RIGHT ============
         * EXAMPLE (uncomment to use):
         */}
        {/*
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <ScrollReveal direction="left" className="flex-1">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Third Topic</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Keep alternating for a dynamic, engaging scroll experience.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="right" className="flex-1">
            <video src="/videos/your-video.mp4" controls className="rounded-lg w-full hover-pop" style={{ maxHeight: "350px" }}>
              Your browser does not support the video tag.
            </video>
          </ScrollReveal>
        </div>
        */}

      </div>
    </Layout>
  );
};

export default Page3;
