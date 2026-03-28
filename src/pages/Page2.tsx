import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

/* =============================================
 * PAGE 2 — TEMPLATE (IMAGE GALLERY LAYOUT)
 * =============================================
 * This template focuses on a gallery-style layout with
 * alternating scroll directions for visual variety.
 *
 * ScrollReveal directions:
 *   "left"  → slides in from the left
 *   "right" → slides in from the right
 *   "full"  → fades in/out
 *
 * Images → public/images/filename.jpg → use /images/filename.jpg
 * Videos → public/videos/filename.mp4 → use /videos/filename.mp4
 * =========================================== */

const Page2 = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-20 space-y-16">

        {/* ============ PAGE TITLE ============ */}
        <ScrollReveal direction="full">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            Page 2 Title
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Replace this subtitle with your own.
          </p>
        </ScrollReveal>

        {/* ============ TWO-COLUMN IMAGE GRID ============
         * Two images side by side, each sliding from opposite sides.
         *
         * EXAMPLE (uncomment to use):
         */}
        {/*
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal direction="left">
            <img
              src="/images/your-image-1.jpg"
              alt="First image"
              className="rounded-lg hover-pop w-full"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <p className="text-sm text-muted-foreground mt-2">Caption for image 1</p>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <img
              src="/images/your-image-2.jpg"
              alt="Second image"
              className="rounded-lg hover-pop w-full"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <p className="text-sm text-muted-foreground mt-2">Caption for image 2</p>
          </ScrollReveal>
        </div>
        */}

        {/* ============ FULL-WIDTH IMAGE ============
         * A large image that fades in with text below.
         *
         * EXAMPLE (uncomment to use):
         */}
        {/*
        <ScrollReveal direction="full">
          <div className="relative rounded-lg overflow-hidden hover-pop">
            <img
              src="/images/your-hero-image.jpg"
              alt="Hero image"
              className="w-full"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </div>
          <p className="text-muted-foreground mt-4 text-center text-lg">
            A description below the full-width image.
          </p>
        </ScrollReveal>
        */}

        {/* ============ THREE-COLUMN CARDS ============
         * Each card slides in with alternating directions.
         *
         * EXAMPLE (uncomment to use):
         */}
        {/*
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ScrollReveal direction="left">
            <div className="bg-card rounded-lg p-6 border border-border hover-pop">
              <img src="/images/card-1.jpg" alt="Card 1" className="rounded-md w-full mb-4" style={{ height: "200px", objectFit: "cover" }} />
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Card Title 1</h3>
              <p className="text-muted-foreground text-sm">Description for this card.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="full">
            <div className="bg-card rounded-lg p-6 border border-border hover-pop">
              <img src="/images/card-2.jpg" alt="Card 2" className="rounded-md w-full mb-4" style={{ height: "200px", objectFit: "cover" }} />
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Card Title 2</h3>
              <p className="text-muted-foreground text-sm">Description for this card.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="bg-card rounded-lg p-6 border border-border hover-pop">
              <img src="/images/card-3.jpg" alt="Card 3" className="rounded-md w-full mb-4" style={{ height: "200px", objectFit: "cover" }} />
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Card Title 3</h3>
              <p className="text-muted-foreground text-sm">Description for this card.</p>
            </div>
          </ScrollReveal>
        </div>
        */}

        {/* ============ VIDEO + DESCRIPTION ============
         * Video on left, text on right.
         *
         * EXAMPLE (uncomment to use):
         */}
        {/*
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <ScrollReveal direction="left" className="flex-1">
            <video src="/videos/your-video.mp4" controls className="rounded-lg w-full hover-pop" style={{ maxHeight: "350px" }}>
              Your browser does not support the video tag.
            </video>
          </ScrollReveal>
          <ScrollReveal direction="right" className="flex-1">
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">About This Video</h2>
            <p className="text-muted-foreground leading-relaxed">
              Describe what the video shows. This text slides in from the right.
            </p>
          </ScrollReveal>
        </div>
        */}

      </div>
    </Layout>
  );
};

export default Page2;
