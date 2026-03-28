import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

/* =============================================
 * PAGE 1 — TEMPLATE WITH SCROLL REVEAL EXAMPLES
 * =============================================
 *
 * This page demonstrates EVERY type of content you can add,
 * all wrapped in ScrollReveal for scroll-triggered animations.
 *
 * HOW SCROLL REVEAL WORKS:
 *   direction="left"  → slides in from the left, exits to the right
 *   direction="right" → slides in from the right, exits to the left
 *   direction="full"  → fades in/out (best for full-width content)
 *
 * HOW TO EDIT:
 *   1. Uncomment any section you want to use
 *   2. Replace placeholder text/URLs with your own
 *   3. Mix and match sections in any order
 *
 * FILES:
 *   Images → put in public/images/, reference as /images/filename.jpg
 *   Videos → put in public/videos/, reference as /videos/filename.mp4
 * =========================================== */

const Page1 = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-20 space-y-16">

        {/* ============ PAGE TITLE (fades in) ============ */}
        <ScrollReveal direction="full">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            Page 1 Title
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Replace this with your page description.
          </p>
        </ScrollReveal>

        {/* ============ TEXT BLOCK — slides from LEFT ============
         * Change direction="left" to "right" or "full" for different effects.
         *
         * EXAMPLE (uncomment to use):
         */}
        {/*
        <ScrollReveal direction="left">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">
              Section Heading
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Your paragraph text goes here. This slides in from the left
              when you scroll down, and exits to the right when you scroll up.
            </p>
          </div>
        </ScrollReveal>
        */}

        {/* ============ IMAGE — slides from RIGHT ============
         * 1. Put your image in public/images/
         * 2. Change src to /images/your-file.jpg
         * 3. Change alt to describe the image
         *
         * EXAMPLE (uncomment to use):
         */}
        {/*
        <ScrollReveal direction="right">
          <img
            src="/images/your-image.jpg"
            alt="Description of your image"
            className="rounded-lg hover-pop w-full"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <p className="text-sm text-muted-foreground mt-2 italic">
            Caption: Describe your image here
          </p>
        </ScrollReveal>
        */}

        {/* ============ FULL-WIDTH IMAGE — fades in ============
         * Use direction="full" for images that span the whole width.
         *
         * EXAMPLE (uncomment to use):
         */}
        {/*
        <ScrollReveal direction="full">
          <img
            src="/images/your-wide-image.jpg"
            alt="Full width image"
            className="w-full rounded-lg hover-pop"
            style={{ height: "500px", objectFit: "cover" }}
          />
        </ScrollReveal>
        */}

        {/* ============ VIDEO (Local) — slides from LEFT ============
         * 1. Put your video in public/videos/
         * 2. Change src to /videos/your-file.mp4
         *
         * EXAMPLE (uncomment to use):
         */}
        {/*
        <ScrollReveal direction="left">
          <video
            src="/videos/your-video.mp4"
            controls
            className="rounded-lg w-full hover-pop"
            style={{ maxHeight: "500px" }}
          >
            Your browser does not support the video tag.
          </video>
          <p className="text-sm text-muted-foreground mt-2 italic">
            Caption: Describe your video here
          </p>
        </ScrollReveal>
        */}

        {/* ============ YOUTUBE VIDEO — slides from RIGHT ============
         * Replace VIDEO_ID with your YouTube video ID.
         * Example URL: youtube.com/watch?v=dQw4w9WgXcQ → ID = dQw4w9WgXcQ
         *
         * EXAMPLE (uncomment to use):
         */}
        {/*
        <ScrollReveal direction="right">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Video title here"
            className="w-full rounded-lg hover-pop"
            style={{ height: "400px" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p className="text-sm text-muted-foreground mt-2 italic">
            Caption: Describe your video here
          </p>
        </ScrollReveal>
        */}

        {/* ============ TEXT + IMAGE SIDE BY SIDE ============
         * Left text slides from left, right image slides from right.
         * On mobile they stack vertically.
         *
         * EXAMPLE (uncomment to use):
         */}
        {/*
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <ScrollReveal direction="left" className="flex-1">
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">
              Your Heading
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Your description text here. It sits next to the image on
              desktop and stacks on top on mobile.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="right" className="flex-1">
            <img
              src="/images/your-image.jpg"
              alt="Description"
              className="rounded-lg hover-pop w-full"
              style={{ height: "300px", objectFit: "cover" }}
            />
          </ScrollReveal>
        </div>
        */}

        {/* ============ CLICKABLE LINK ============
         * bio-link = green underline style that matches the theme
         *
         * EXAMPLE (uncomment to use):
         */}
        {/*
        <ScrollReveal direction="full">
          <p className="text-muted-foreground">
            Learn more at{" "}
            <a href="https://example.com" className="bio-link" target="_blank" rel="noopener noreferrer">
              this external link
            </a>
            {" "}or visit{" "}
            <a href="/page-2" className="bio-link">Page 2</a>.
          </p>
        </ScrollReveal>
        */}

      </div>
    </Layout>
  );
};

export default Page1;
