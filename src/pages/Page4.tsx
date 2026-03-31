import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";

/* =============================================
 * PAGE 4 — FEATURE SHOWCASE
 * =============================================
 * Highlight cards, accent blocks, and stacked sections.
 *
 * EDIT: Replace all text, images, and links.
 * ADD: Copy any block and paste below with new content.
 * REMOVE: Delete any <ScrollReveal> or <div> section.
 * =========================================== */

const Page4 = () => {
  return (
    <Layout>
      <PageHeader
        imageUrl="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&h=900&fit=crop"
        title="Text goes here"
        description="Text goes here"
      />
      <div className="container mx-auto px-6 py-20 space-y-16">

        {/* ============ PAGE TITLE ============ */}
        <ScrollReveal direction="full">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            {/* EDIT: Page title */}
            Text goes here
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            {/* EDIT: Page description */}
            Text goes here
          </p>
        </ScrollReveal>

        {/* ============ ACCENT HIGHLIGHT CARD — fades in ============ */}
        <ScrollReveal direction="full">
          <div className="bg-accent/30 border border-border rounded-xl p-8 hover-pop">
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">
              {/* EDIT: Highlight heading */}
              Text goes here
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {/* EDIT: Highlight text */}
              Text goes here
            </p>
          </div>
        </ScrollReveal>

        {/* ============ TWO FEATURE CARDS ============ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal direction="left">
            <div className="bg-card border border-border rounded-lg overflow-hidden hover-pop">
              {/* EDIT: Replace image */}
              <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=280&fit=crop" alt="Aerial forest view" className="w-full" style={{ height: "220px", objectFit: "cover" }} />
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  {/* EDIT: Card title */}
                  Text goes here
                </h3>
                <p className="text-muted-foreground">
                  {/* EDIT: Card description */}
                  Text goes here
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="bg-card border border-border rounded-lg overflow-hidden hover-pop">
              <img src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=280&fit=crop" alt="Waterfall in nature" className="w-full" style={{ height: "220px", objectFit: "cover" }} />
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  Text goes here
                </h3>
                <p className="text-muted-foreground">
                  Text goes here
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ============ STACKED: IMAGE + TEXT BELOW ============ */}
        <div className="space-y-6">
          <ScrollReveal direction="full">
            {/* EDIT: Replace image */}
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=450&fit=crop"
              alt="Mountain landscape at sunset"
              className="w-full rounded-lg hover-pop"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </ScrollReveal>
          <ScrollReveal direction="left">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-display font-bold text-foreground mb-3">
                {/* EDIT: Heading */}
                Text goes here
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {/* EDIT: Description */}
                Text goes here
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* ============ VIDEO IN CARD (uncomment to use) ============
        <ScrollReveal direction="right">
          <div className="bg-card border border-border rounded-lg p-6 hover-pop">
            <h3 className="font-display font-bold text-xl text-foreground mb-4">Watch This</h3>
            <video src="/videos/your-video.mp4" controls className="rounded-lg w-full" style={{ maxHeight: "400px" }}>
              Your browser does not support the video tag.
            </video>
            <p className="text-muted-foreground mt-3">Description of the video.</p>
          </div>
        </ScrollReveal>
        */}

        <Link to="/page-5" className="inline-block mt-6 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover-pop">
            {/* EDIT: Button text and href */}
            Go to Page 5 →
        </Link>
  
      </div>
    </Layout>
  );
};

export default Page4;
