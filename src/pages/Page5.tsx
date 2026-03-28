import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

/* =============================================
 * PAGE 5 — TEMPLATE (TIMELINE / VERTICAL FLOW)
 * =============================================
 * This template uses a vertical timeline-style layout where
 * sections alternate sliding from left and right.
 *
 * ScrollReveal directions:
 *   "left"  → slides in from the left
 *   "right" → slides in from the right
 *   "full"  → fades in/out
 *
 * Images → public/images/filename.jpg → use /images/filename.jpg
 * Videos → public/videos/filename.mp4 → use /videos/filename.mp4
 * =========================================== */

const Page5 = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-20 space-y-20">

        {/* ============ PAGE TITLE ============ */}
        <ScrollReveal direction="full">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            Page 5 Title
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Replace this subtitle with your own.
          </p>
        </ScrollReveal>

        {/* ============ STEP 1 — from LEFT ============
         * EXAMPLE (uncomment to use):
         */}
        {/*
        <ScrollReveal direction="left">
          <div className="max-w-2xl">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Step 1</span>
            <h2 className="text-3xl font-display font-bold text-foreground mt-1 mb-3">First Section</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Describe the first step or topic. Slides in from the left.
            </p>
          </div>
        </ScrollReveal>
        */}

        {/* ============ STEP 2 — IMAGE from RIGHT ============
         * EXAMPLE (uncomment to use):
         */}
        {/*
        <ScrollReveal direction="right">
          <div className="max-w-2xl ml-auto text-right">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Step 2</span>
            <h2 className="text-3xl font-display font-bold text-foreground mt-1 mb-3">Second Section</h2>
            <img
              src="/images/your-image.jpg"
              alt="Step 2 visual"
              className="rounded-lg hover-pop w-full mt-4"
              style={{ height: "300px", objectFit: "cover" }}
            />
          </div>
        </ScrollReveal>
        */}

        {/* ============ STEP 3 — VIDEO from LEFT ============
         * EXAMPLE (uncomment to use):
         */}
        {/*
        <ScrollReveal direction="left">
          <div className="max-w-2xl">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Step 3</span>
            <h2 className="text-3xl font-display font-bold text-foreground mt-1 mb-3">Third Section</h2>
            <video src="/videos/your-video.mp4" controls className="rounded-lg w-full hover-pop mt-4" style={{ maxHeight: "350px" }}>
              Your browser does not support the video tag.
            </video>
          </div>
        </ScrollReveal>
        */}

        {/* ============ FULL-WIDTH CONCLUSION — fades in ============
         * EXAMPLE (uncomment to use):
         */}
        {/*
        <ScrollReveal direction="full">
          <div className="bg-accent/20 border border-border rounded-xl p-10 text-center hover-pop">
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">Conclusion</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Wrap up your page with a final thought. This section fades in smoothly.
            </p>
            <a href="/credits" className="inline-block mt-6 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover-pop">
              Next Page →
            </a>
          </div>
        </ScrollReveal>
        */}

      </div>
    </Layout>
  );
};

export default Page5;
