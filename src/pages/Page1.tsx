import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

/* =============================================
 * PAGE 1 — COMPREHENSIVE EXAMPLES
 * =============================================
 * This page shows LIVE examples of every content type
 * with scroll-triggered animations. Edit or replace
 * any section — each one is independent.
 *
 * SCROLL REVEAL DIRECTIONS:
 *   direction="left"  → slides in from the left
 *   direction="right" → slides in from the right
 *   direction="full"  → fades in (best for full-width)
 *
 * FILES:
 *   Images → put in public/images/, use as /images/filename.jpg
 *   Videos → put in public/videos/, use as /videos/filename.mp4
 *
 * TIPS:
 *   - Alternate "left" and "right" for a dynamic flow
 *   - Use "full" for hero images or important announcements
 *   - Add hover-pop class to any element for a subtle hover scale
 *   - Wrap text in max-w-2xl or max-w-3xl for readability
 * =========================================== */

const Page1 = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-20 space-y-16">

        {/* ============ PAGE TITLE — fades in ============ */}
        <ScrollReveal direction="full">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            {/* EDIT: Change this title */}
            Exploring Nature
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            {/* EDIT: Change this description */}
            Discover the wonders of the natural world through images, videos, and stories.
          </p>
        </ScrollReveal>

        {/* ============ TEXT BLOCK — slides from LEFT ============ */}
        <ScrollReveal direction="left">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">
              {/* EDIT: Your heading */}
              The Living World
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {/* EDIT: Your paragraph text */}
              From the deepest oceans to the highest peaks, life finds a way to thrive
              in every corner of our planet. Each ecosystem tells a unique story of
              adaptation and resilience.
            </p>
          </div>
        </ScrollReveal>

        {/* ============ IMAGE — slides from RIGHT ============ */}
        {/* EDIT: Replace src with /images/your-file.jpg after adding to public/images/ */}
        <ScrollReveal direction="right">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop"
            alt="Sunlight filtering through a lush forest canopy"
            className="rounded-lg hover-pop w-full"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <p className="text-sm text-muted-foreground mt-2 italic">
            {/* EDIT: Image caption */}
            A forest canopy bathed in golden sunlight
          </p>
        </ScrollReveal>

        {/* ============ TEXT + IMAGE SIDE BY SIDE ============ */}
        {/* On mobile these stack vertically */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <ScrollReveal direction="left" className="flex-1">
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">
              {/* EDIT: Your heading */}
              Biodiversity Matters
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {/* EDIT: Your text */}
              Every species plays a role in the delicate balance of our ecosystems.
              Protecting biodiversity means protecting our future.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="right" className="flex-1">
            {/* EDIT: Replace with your image */}
            <img
              src="https://images.unsplash.com/photo-1518173946687-a53e16966f10?w=600&h=350&fit=crop"
              alt="Green leaves with morning dew"
              className="rounded-lg hover-pop w-full"
              style={{ height: "300px", objectFit: "cover" }}
            />
          </ScrollReveal>
        </div>

        {/* ============ FULL-WIDTH IMAGE — fades in ============ */}
        <ScrollReveal direction="full">
          {/* EDIT: Replace with your wide image */}
          <img
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=500&fit=crop"
            alt="Panoramic misty valley with rolling green hills"
            className="w-full rounded-lg hover-pop"
            style={{ height: "500px", objectFit: "cover" }}
          />
        </ScrollReveal>

        {/* ============ LINK EXAMPLE — fades in ============ */}
        <ScrollReveal direction="full">
          <p className="text-muted-foreground text-center">
            Want to learn more? Visit{" "}
            <a href="/page-2" className="bio-link">Page 2</a>
            {" "}or check out the{" "}
            <a href="/credits" className="bio-link">Credits</a>.
          </p>
        </ScrollReveal>

        {/* ============ ADDITIONAL SECTIONS ============
         * Copy any block above, change the direction and content.
         * Uncomment the video example below to add a video:
         */}

        {/* --- LOCAL VIDEO (uncomment to use) ---
        <ScrollReveal direction="left">
          <video src="/videos/your-video.mp4" controls className="rounded-lg w-full hover-pop" style={{ maxHeight: "500px" }}>
            Your browser does not support the video tag.
          </video>
        </ScrollReveal>
        */}

        {/* --- YOUTUBE VIDEO (uncomment to use) ---
        <ScrollReveal direction="right">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Video title"
            className="w-full rounded-lg hover-pop"
            style={{ height: "400px" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </ScrollReveal>
        */}

      </div>
    </Layout>
  );
};

export default Page1;
