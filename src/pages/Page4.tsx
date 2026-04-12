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
        
        {/* ============ ROW 2: IMAGE LEFT, TEXT RIGHT (flipped) ============ */}
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            <ScrollReveal direction="right" className="flex-1">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                {/* EDIT: Section heading */}
                Allopatric Speciation
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {/* EDIT: Section text */}
This where physical barriers like, rivers, mountains, or human-caused fragmentation, separate the populations. These isolated groups face different selective pressures like climate and predators that cause different species to arise over time.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" className="flex-1">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                {/* EDIT: Section heading */}
                Real World Example
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {/* EDIT: Section text */}
Polar bears and grizzly bears come from the same ancestor but are two distinct species. This happened because back in the ice ages, there were some grizzly bears that became geographically isolated in an arctic environment. Scientists believe that this happened because of an event called pleistocene glaciations, which were glacial cycles that would happen forming new environments with them (Fonseca et al., 2023). Another contributing factor was their growing appetite for seals. Their carcasses would end up on shore and eventually the grizzly bears would start finding ways to hunt them (PBS WHYY, 2008). The grizzly bears were believed to have been in a soon to be arctic location mid cycle, from the transformation of normal to arctic.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            <ScrollReveal direction="right" className="flex-1">
               <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                {/* EDIT: Section heading */}
                Real World Example
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {/* EDIT: Section text */}
A real-life example of sympatric speciation is the North American apple maggot fly, which diverged into distinct species while inhabiting the same geographic area. Originally they fed only on hawthorn fruit, but then some flies shifted to apple trees, which were introduced in the 19th century. This caused a whole new species to be introduced. Because the young would favor the scent of the food they were born on, flies born on apples would favor apples, and flies born on hawthorn would favor hawthorn (Berkeley University of California, n.d.).
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" className="flex-1">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                {/* EDIT: Section heading */}
                Sympatric Speciation
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {/* EDIT: Section text */}
New species are made without physical barriers. This often occurs when parts of a population specialize in different things or consume different food within the same area
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
