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
        imageUrl="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&h=900&fit=crop"
        title="Multiplication of species"
        description="New species are formed from a common ancestor"
      />
      <div className="container mx-auto px-6 py-20 space-y-16">

        {/* ============ ACCENT HIGHLIGHT CARD — fades in ============ */}
        <ScrollReveal direction="full">
          <div className="bg-accent/30 border border-border rounded-xl p-8 hover-pop">
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">
              {/* EDIT: Highlight heading */}
              What does it mean?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {/* EDIT: Highlight text */}
A claim made by Darwin stating that through evolution species can diversify into new and different species.
            </p>
          </div>
        </ScrollReveal>

        {/* ============ ROW 1: TEXT LEFT, IMAGE RIGHT ============ */}
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <ScrollReveal direction="left" className="flex-1">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                {/* EDIT: Section heading */}
               How did Darwin discover this?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                {/* EDIT: Section text */}
Darwin discovered the multiplication of species primarily through his observations during the Beagle voyage, concluding that species on the island were similar to those on the mainland and neighboring islands, but each species was still distinct. He realized that species diverge from a common ancestor and in diverging they make new species all together, that are similar yet distinct from each other.
              </p>
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

        {/* ============ ACCENT HIGHLIGHT CARD — fades in ============ */}
        <ScrollReveal direction="full">
          <div className="bg-accent/30 border border-border rounded-xl p-8 hover-pop">
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">
              {/* EDIT: Highlight heading */}
How does speciation occur in different environments today?        
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {/* EDIT: Highlight text */}
Speciation occurs today primarily through geographical isolation, which is allopatric speciation, or in the same environment, which is  sympatric speciation. These processes are where populations evolve into new species. 
            </p>
          </div>
        </ScrollReveal>
        
{/* ============ ROW 2: IMAGE LEFT, TEXT RIGHT ============ */}
<div className="container mx-auto px-6 py-10">
  <div className="flex flex-col md:flex-row gap-10 items-center">
    <ScrollReveal direction="left" className="flex-1">
      <div className="bg-card rounded-lg p-5 border border-border hover-pop">
        <img
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=250&fit=crop"
          alt="Allopatric Speciation"
          className="rounded-md w-full mb-4"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <h3 className="font-display font-bold text-lg text-foreground mb-2">Allopatric Speciation</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Physical barriers like rivers, mountains, or human-caused fragmentation separate populations.
          Isolated groups face different selective pressures causing distinct species to arise over time.
        </p>
      </div>
    </ScrollReveal>
    <ScrollReveal direction="right" className="flex-1">
      <h2 className="text-3xl font-display font-bold text-foreground mb-4">Real World Example</h2>
      <p className="text-muted-foreground text-lg leading-relaxed">
        Polar bears and grizzly bears share a common ancestor but became two distinct species. During the ice ages,
        grizzly bears became geographically isolated in an arctic environment through pleistocene glaciations —
        glacial cycles that formed entirely new environments (Fonseca et al., 2023). A growing appetite for seals
        also contributed, as their carcasses washed ashore and bears developed new hunting behaviors (PBS WHYY, 2008).
      </p>
    </ScrollReveal>
  </div>
</div>

{/* ============ ROW 3: TEXT LEFT, IMAGE RIGHT (flipped) ============ */}
<div className="container mx-auto px-6 py-10">
  <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
    <ScrollReveal direction="right" className="flex-1">
      <div className="bg-card rounded-lg p-5 border border-border hover-pop">
        <img
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=250&fit=crop"
          alt="Sympatric Speciation"
          className="rounded-md w-full mb-4"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <h3 className="font-display font-bold text-lg text-foreground mb-2">Sympatric Speciation</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          New species emerge without physical barriers, often when parts of a population specialize
          in different resources or food within the same area.
        </p>
      </div>
    </ScrollReveal>
    <ScrollReveal direction="left" className="flex-1">
      <h2 className="text-3xl font-display font-bold text-foreground mb-4">Real World Example</h2>
      <p className="text-muted-foreground text-lg leading-relaxed">
        The North American apple maggot fly diverged into distinct populations within the same geographic area.
        Originally feeding only on hawthorn fruit, some flies shifted to apple trees introduced in the 19th century.
        Because young flies favor the scent of the fruit they hatched on, apple-born flies favored apples and
        hawthorn-born flies favored hawthorn, driving the split (Berkeley University of California, n.d.).
      </p>
    </ScrollReveal>
  </div>
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

        {/* ============ CONCLUSION — fades in ============ */}
    
  
      </div>
    </Layout>
  );
};

export default Page4;
