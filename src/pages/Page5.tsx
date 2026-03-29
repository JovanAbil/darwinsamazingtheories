import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
/* =============================================
 * PAGE 5 — TIMELINE / VERTICAL FLOW
 * =============================================
 * A step-by-step vertical layout with alternating
 * slide directions. Great for processes or timelines.
 *
 * EDIT: Replace step labels, headings, text, images.
 * ADD: Copy a step block and add below.
 * REMOVE: Delete any step section.
 * =========================================== */

const Page5 = () => {
  return (
    <Layout>
      {/* EDIT: Change imageUrl, title, and description */}
      <PageHeader
        imageUrl="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1600&h=900&fit=crop"
        title="The Process"
        description="Follow our journey step by step, from vision to reality."
      />

      <div className="container mx-auto px-6 py-16 space-y-20">

        {/* ============ STEP 1 — slides from LEFT ============ */}
        <ScrollReveal direction="left">
          <div className="max-w-2xl">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">
              {/* EDIT: Step label */}
              Step 1
            </span>
            <h2 className="text-3xl font-display font-bold text-foreground mt-1 mb-3">
              {/* EDIT: Step heading */}
              Research & Discovery
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {/* EDIT: Step description */}
              We begin by studying local ecosystems and identifying areas where
              our efforts can have the greatest positive impact.
            </p>
          </div>
        </ScrollReveal>

        {/* ============ STEP 2 — IMAGE from RIGHT ============ */}
        <ScrollReveal direction="right">
          <div className="max-w-2xl ml-auto text-right">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">
              Step 2
            </span>
            <h2 className="text-3xl font-display font-bold text-foreground mt-1 mb-3">
              Planning & Design
            </h2>
            {/* EDIT: Replace image */}
            <img
              src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=700&h=350&fit=crop"
              alt="Green landscape planning"
              className="rounded-lg hover-pop w-full mt-4"
              style={{ height: "300px", objectFit: "cover" }}
            />
          </div>
        </ScrollReveal>

        {/* ============ STEP 3 — TEXT from LEFT ============ */}
        <ScrollReveal direction="left">
          <div className="max-w-2xl">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">
              Step 3
            </span>
            <h2 className="text-3xl font-display font-bold text-foreground mt-1 mb-3">
              Implementation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With plans in place, we work alongside communities to bring
              sustainable projects to life through hands-on collaboration.
            </p>
          </div>
        </ScrollReveal>

        {/* ============ STEP 4 — VIDEO from RIGHT (uncomment to use) ============
        <ScrollReveal direction="right">
          <div className="max-w-2xl ml-auto">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Step 4</span>
            <h2 className="text-3xl font-display font-bold text-foreground mt-1 mb-3">Documentation</h2>
            <video src="/videos/your-video.mp4" controls className="rounded-lg w-full hover-pop mt-4" style={{ maxHeight: "350px" }}>
              Your browser does not support the video tag.
            </video>
          </div>
        </ScrollReveal>
        */}

        {/* ============ CONCLUSION — fades in ============ */}
        <ScrollReveal direction="full">
          <div className="bg-accent/20 border border-border rounded-xl p-10 text-center hover-pop">
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">
              {/* EDIT: Conclusion heading */}
              The Journey Continues
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {/* EDIT: Conclusion text */}
              Every step forward brings us closer to a sustainable future.
              Join us in making a lasting difference.
            </p>
            <a href="/credits" className="inline-block mt-6 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover-pop">
              {/* EDIT: Button text and href */}
              Learn More →
            </a>
          </div>
        </ScrollReveal>

      </div>
    </Layout>
  );
};

export default Page5;
