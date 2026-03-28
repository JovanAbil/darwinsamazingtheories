import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

/* =============================================
 * PAGE 4 — TEMPLATE (FEATURE SHOWCASE)
 * =============================================
 * This template uses a feature/showcase style with
 * highlighted cards and stacked sections.
 *
 * ScrollReveal directions:
 *   "left"  → slides in from the left
 *   "right" → slides in from the right
 *   "full"  → fades in/out
 *
 * Images → public/images/filename.jpg → use /images/filename.jpg
 * Videos → public/videos/filename.mp4 → use /videos/filename.mp4
 * =========================================== */

const Page4 = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-20 space-y-16">

        {/* ============ PAGE TITLE ============ */}
        <ScrollReveal direction="full">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            Page 4 Title
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Replace this subtitle with your own.
          </p>
        </ScrollReveal>

        {/* ============ HIGHLIGHTED INTRO CARD ============
         * A card with accent background that fades in.
         *
         * EXAMPLE (uncomment to use):
         */}
        {/*
        <ScrollReveal direction="full">
          <div className="bg-accent/30 border border-border rounded-xl p-8 hover-pop">
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">Key Highlight</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Use this card to highlight important information. It fades in
              as the user scrolls and has a subtle hover effect.
            </p>
          </div>
        </ScrollReveal>
        */}

        {/* ============ TWO FEATURE CARDS ============
         * Side by side cards, one from each direction.
         *
         * EXAMPLE (uncomment to use):
         */}
        {/*
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal direction="left">
            <div className="bg-card border border-border rounded-lg overflow-hidden hover-pop">
              <img src="/images/feature-1.jpg" alt="Feature 1" className="w-full" style={{ height: "220px", objectFit: "cover" }} />
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-foreground mb-2">Feature One</h3>
                <p className="text-muted-foreground">Describe this feature or topic. Slides in from the left.</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="bg-card border border-border rounded-lg overflow-hidden hover-pop">
              <img src="/images/feature-2.jpg" alt="Feature 2" className="w-full" style={{ height: "220px", objectFit: "cover" }} />
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-foreground mb-2">Feature Two</h3>
                <p className="text-muted-foreground">Describe this feature or topic. Slides in from the right.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
        */}

        {/* ============ STACKED IMAGE + TEXT ============
         * Image on top (fades in), text below (slides from left).
         *
         * EXAMPLE (uncomment to use):
         */}
        {/*
        <div className="space-y-6">
          <ScrollReveal direction="full">
            <img
              src="/images/your-image.jpg"
              alt="Showcase"
              className="w-full rounded-lg hover-pop"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </ScrollReveal>
          <ScrollReveal direction="left">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-display font-bold text-foreground mb-3">About This Image</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Explain what the image shows. The image fades in first,
                then this text slides in from the left as you continue scrolling.
              </p>
            </div>
          </ScrollReveal>
        </div>
        */}

        {/* ============ VIDEO WITH CONTEXT ============
         * EXAMPLE (uncomment to use):
         */}
        {/*
        <ScrollReveal direction="right">
          <div className="bg-card border border-border rounded-lg p-6 hover-pop">
            <h3 className="font-display font-bold text-xl text-foreground mb-4">Watch This</h3>
            <video src="/videos/your-video.mp4" controls className="rounded-lg w-full" style={{ maxHeight: "400px" }}>
              Your browser does not support the video tag.
            </video>
            <p className="text-muted-foreground mt-3">
              Description of the video content.
            </p>
          </div>
        </ScrollReveal>
        */}

      </div>
    </Layout>
  );
};

export default Page4;
