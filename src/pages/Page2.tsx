import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import ParallaxSection from "@/components/ParallaxSection";  
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";

/* =============================================
 * PAGE 2 — GALLERY LAYOUT
 * =============================================
 * A gallery-style page with grids and cards.
 * Alternate scroll directions for visual interest.
 *
 * EDIT: Replace images, headings, and text below.
 * ADD: Copy any card/grid block and paste below.
 * REMOVE: Delete any <ScrollReveal> block you don't need.
 * =========================================== */

const Page2 = () => {
  return (
    <Layout>
      <PageHeader
        imageUrl="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&h=900&fit=crop"
        title="Descent from a common ancestor"
        description="All life descends from a common ancestor"
      />
      <div className="space-y-0">

        <ScrollReveal direction="full">
          <div className="bg-accent/30 border border-border rounded-xl p-8 hover-pop">
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">
              {/* EDIT: Your heading */}
              What does it mean?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {/* EDIT: Your paragraph text */}
Descent from a common ancestor is a claim made by Darwin that says all living organisms are related and come from a singular common ancestor. This claim by Darwin suggests all life branched from one source which can be backed up by shared genetic code (DNA/RNA) and fundamental cellular mechanisms, however Darwin didn’t have genetic evidence so it was more of a hypothesis at the time (Jeanson, 2014). Once the claim proved to be true later on in time with more advanced technology, it showed how organisms have shared their genes which can all be traced back to a common ancestor.
            </p>
          </div>
        </ScrollReveal>
        
        {/* ============ ROW 1: TEXT LEFT, IMAGE RIGHT ============ */}
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <ScrollReveal direction="left" className="flex-1">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                {/* EDIT: Section heading */}
               How did Darwin find out?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                {/* EDIT: Section text */}
Darwin found evidence for this claim when he saw that various finch species on the islands closely resembled one of the mainland species. Over time, these birds became different from each other and had specialized feeding habits. Their beak structures evolved and adapted to different diets. Overall, these birds prove they came from a common ancestor and evolved from that common ancestor to adapt to their environment.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" className="flex-1">
              {/* EDIT: Replace image */}
              <img
                src="https://www.icr.org/i/Main%20Stage%20-%201000x563/galapagosfinches_1000x563?w=600&h=400&fit=crop"
                alt="Sunlit forest path"
                className="rounded-lg hover-pop w-full"
                style={{ height: "350px", objectFit: "cover" }}
              />
            </ScrollReveal>
          </div>
        </div>

        {/* ============ ROW 1: TEXT LEFT, IMAGE RIGHT ============ */}
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <ScrollReveal direction="left" className="flex-1">
              {/* EDIT: Replace image */}
              <img
                src="https://www.genome.gov/sites/default/files/inline-images/DNA_sequencing2023.jpg?w=600&h=400&fit=crop"
                alt="Sunlit forest path"
                className="rounded-lg hover-pop w-full"
                style={{ height: "350px", objectFit: "cover" }}
              />
            </ScrollReveal>
            <ScrollReveal direction="right" className="flex-1">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                {/* EDIT: Section heading */}
               How do fossils and DNA sequencing support this?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                {/* EDIT: Section text */}
Fossils and DNA sequencing support common ancestry by showing physical evidence of gradual changes over time and how they are similar on a molecular level. Fossils show changes between bone structure and anatomy, while DNA reveals the shared genetic codes. When both have a high similarity between two species, it shows they have a recent common ancestor. However, all species can eventually be traced back to one common ancestor. Did you know that people call this common ancestor LUCA (Last Universal Common Ancestor)?
              </p>
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
              Hominins 
            </h2>
          </div>
        </ParallaxSection>

        {/* ============ ROW 2: IMAGE LEFT, TEXT RIGHT (flipped) ============ */}
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            <ScrollReveal direction="right" className="flex-1">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                {/* EDIT: Section heading */}
                Fossil Evidence
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {/* EDIT: Section text */}
                Paleoanthropologists have found thousands of hominin fossils, like Lucy (a famous Australopithecus afarensis fossilized skeleton) and Homo erectus. These and many other fossils exhibit a clear progression from once ape-like beings to modern day humans (Becoming Human, 2023). Along the way we became bipedal, our jaw size decreased, and our brain size increased.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" className="flex-1">
              {/* EDIT: Replace image */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Lucy_Mexico.jpg/250px-Lucy_Mexico.jpg?w=600&h=400&fit=crop"
                alt="Green meadow landscape"
                className="rounded-lg hover-pop w-full"
                style={{ height: "350px", objectFit: "cover" }}
              />
            </ScrollReveal>
          </div>
        </div>

        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            <ScrollReveal direction="right" className="flex-1">
              {/* EDIT: Replace image */}
              <img
                src="https://apologeticspress.org/wp-content/uploads/2026/01/New-Research-Chimps-and-Humans-Genomes.jpg?w=600&h=400&fit=crop"
                alt="Green meadow landscape"
                className="rounded-lg hover-pop w-full"
                style={{ height: "350px", objectFit: "cover" }}
              />
            </ScrollReveal>
            <ScrollReveal direction="left" className="flex-1">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                {/* EDIT: Section heading */}
                DNA Evidence
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {/* EDIT: Section text */}
                DNA sequencing shows that humans and chimps share a ton of DNA, approximately 98.8% of their DNA to be exact (American Museum of Natural History, n.d.). This similarity in DNA proves that there was once a common ancestor that these two species originated from.
              </p>
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

export default Page2;
