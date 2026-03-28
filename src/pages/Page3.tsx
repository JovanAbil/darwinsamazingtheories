import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";

/* =============================================
 * PAGE 3 — STORYTELLING LAYOUT
 * =============================================
 * Alternating text+image rows create a narrative flow.
 * Includes a parallax divider section.
 *
 * EDIT: Replace all headings, text, and images.
 * ADD: Copy a row block and paste it below.
 * REMOVE: Delete any section you don't need.
 * =========================================== */

const Page3 = () => {
  return (
    <Layout>
      <div className="space-y-0">

        {/* ============ PAGE HEADER ============ */}
        <div className="container mx-auto px-6 pt-20 pb-10">
          <ScrollReveal direction="full">
            <h1 className="text-4xl font-display font-bold text-foreground mb-4">
              {/* EDIT: Page title */}
              Our Story
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              {/* EDIT: Page intro */}
              A journey through the landscapes and ideas that inspire us.
            </p>
          </ScrollReveal>
        </div>

        {/* ============ ROW 1: TEXT LEFT, IMAGE RIGHT ============ */}
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <ScrollReveal direction="left" className="flex-1">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                {/* EDIT: Section heading */}
                Where It Began
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                {/* EDIT: Section text */}
                Every great journey starts with a single step. Ours began with a
                simple question: how can we better protect the world around us?
              </p>
              <a href="/page-1" className="bio-link">
                Read more →
              </a>
            </ScrollReveal>
            <ScrollReveal direction="right" className="flex-1">
              {/* EDIT: Replace image */}
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop"
                alt="Sunlit forest path"
                className="rounded-lg hover-pop w-full"
                style={{ height: "350px", objectFit: "cover" }}
              />
            </ScrollReveal>
          </div>
        </div>

        {/* ============ PARALLAX DIVIDER ============ */}
        {/* EDIT: Change imageUrl to your own image */}
        <ParallaxSection
          imageUrl="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&h=600&fit=crop"
          height="40vh"
        >
          <div className="text-center px-6">
            <h2 className="text-3xl font-display font-bold text-foreground mb-2">
              {/* EDIT: Parallax heading */}
              Nature Speaks
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              {/* EDIT: Parallax subtext */}
              If we listen closely enough, every ecosystem has a story to tell.
            </p>
          </div>
        </ParallaxSection>

        {/* ============ ROW 2: IMAGE LEFT, TEXT RIGHT (flipped) ============ */}
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            <ScrollReveal direction="right" className="flex-1">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                {/* EDIT: Section heading */}
                Growing Together
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {/* EDIT: Section text */}
                Community action drives lasting change. By working together, we
                amplify our impact and create a healthier planet for all.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" className="flex-1">
              {/* EDIT: Replace image */}
              <img
                src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=400&fit=crop"
                alt="Green meadow landscape"
                className="rounded-lg hover-pop w-full"
                style={{ height: "350px", objectFit: "cover" }}
              />
            </ScrollReveal>
          </div>
        </div>

        {/* ============ FULL-WIDTH VIDEO (uncomment to use) ============
        <div className="container mx-auto px-6 py-10">
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
        </div>
        */}

      </div>
    </Layout>
  );
};

export default Page3;
