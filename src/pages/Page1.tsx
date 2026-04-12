import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";

/* =============================================
 * PAGE 1 — COMPREHENSIVE EXAMPLES
 * =============================================
 * This page shows LIVE examples of every content type
 * with scroll-triggered animations. Edit or replace
 * any section — each one is independent.
 *
 * SCROLL REVEAL DIRECTIONS:
 *   direction="left"  → slides in from the left
 *   direction="right" → slides in from the right
 *   direction="full"  → fades in (best for full-width)
 *
 * FILES:
 *   Images → put in public/images/, use as /images/filename.jpg
 *   Videos → put in public/videos/, use as /videos/filename.mp4
 *
 * TIPS:
 *   - Alternate "left" and "right" for a dynamic flow
 *   - Use "full" for hero images or important announcements
 *   - Add hover-pop class to any element for a subtle hover scale
 *   - Wrap text in max-w-2xl or max-w-3xl for readability
 * =========================================== */

const Page1 = () => {
  return (
    <Layout>
      <PageHeader
        imageUrl="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&h=900&fit=crop"
        title="Nonconstancy of species"
        description="Species are not fixed but can adapt and evolve over time"
      />
      <div className="container mx-auto px-6 py-20 space-y-16">

    
        {/* ============ TEXT BLOCK — slides from LEFT ============ */}
        <ScrollReveal direction="left">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">
              {/* EDIT: Your heading */}
              What does it mean?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {/* EDIT: Your paragraph text */}
              The non-constancy of species is one of Darwin’s claims and says that species are not fixed to always being the same, but can rather have variation and adapt to their environments.
            </p>
          </div>
        </ScrollReveal>

        {/* ============ IMAGE — slides from RIGHT ============ */}
        {/* EDIT: Replace src with /images/your-file.jpg after adding to public/images/ */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <ScrollReveal direction="right" className="flex-1">
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">
              {/* EDIT: Your heading */}
              What led him to this conclusion?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {/* EDIT: Your text */}
Darwin made this claim by observing that finches on different islands had different beak shapes that were specifically adapted to their own food sources (Tomkins, 2024). For example this proved that the finches could indeed adapt and change to their environment.             </p>
          </ScrollReveal>
          <ScrollReveal direction="left" className="flex-1">
            {/* EDIT: Replace with your image */}
            <img
              src="https://d20knvk822eu5a.cloudfront.net/s3fs-public-optimized-mobile/2024-02/Blogposts-Landscape-in-story-Darwins-finches-1.png.webp?w=600&h=350&fit=crop"
              alt="Green leaves with morning dew"
              className="rounded-lg hover-pop w-full"
              style={{ height: "300px", objectFit: "cover" }}
            />
          </ScrollReveal>
        </div>

        {/* ============ TEXT + IMAGE SIDE BY SIDE ============ */}
        {/* On mobile these stack vertically */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <ScrollReveal direction="right" className="flex-1">
            {/* EDIT: Replace with your image */}
            <img
              src="https://www.reactgroup.org/wp-content/uploads/2022/08/UU_React_Infografer_4_vit-e1661261418778.png?w=600&h=350&fit=crop"
              alt="Green leaves with morning dew"
              className="rounded-lg hover-pop w-full"
              style={{ height: "300px", objectFit: "cover" }}
            />
          </ScrollReveal>
          <ScrollReveal direction="left" className="flex-1">
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">
              {/* EDIT: Your heading */}
              How do antibiotic-resistant bacteria evolve? 
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {/* EDIT: Your text */}
              Bacteria evolve antibiotic resistance through natural selection, where random genetic mutations allow some bacteria to survive against the antibiotics. The surviving bacteria reproduce rapidly, because they are able to survive the antibiotics, which allows them to pass on resistance genes. This is what allows once susceptible bacteria to evolve and become antibiotic resistant. 
            </p>
          </ScrollReveal>
        </div>
        
         <ScrollReveal direction="full">
          <div className="bg-accent/30 border border-border rounded-xl p-8 hover-pop">
            <p className="text-muted-foreground text-lg leading-relaxed">
              {/* EDIT: Highlight text */}
A real-world example of antibiotic resistant bacteria evolving is Methicillin-resistant Staphylococcus aureus or MRSA for short. MRSA affects the skin and symptoms of it can be when the skin is red, warm, and swollen (CDC, 2025). Initially the bacteria was Staphylococcus aureus (staph) and could easily be treated with the antibiotic penicillin and later it was discovered that the antibiotic methicillin proved to be even more effective (Auwaerter, 2005). Doctors then consistently used methicillin to treat serious staph infections. From there, rare mutant bacteria existed that produced a different enzyme, or altered their cell walls, preventing methicillin from making any impact on them whatsoever. When patients were treated, susceptible bacteria died, but the resistant bacteria survived and grew in numbers. The final population would be entirely MRSA, which cannot be killed by methicillin and required different antibiotics in order to be properly treated.
            </p>
          </div>
        </ScrollReveal>

        {/* ============ FULL-WIDTH IMAGE — fades in ============ */}
        <ScrollReveal direction="right">
          <img
            src="https://images.unsplash.com/photo-1698472505070-6d3b90afb530?w=800&h=400&fit=crop"
            alt="name"
            className="rounded-lg hover-pop w-full"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <p className="text-sm text-muted-foreground mt-2 italic">
            {/* EDIT: Image caption */}
            Whales Still Have Pelvic Bones: The non-constancy of species means current forms are modified versions of ancestors. Whales, which are marine mammals, still possess vestigial pelvic bones (hips) that serve no purpose, a clear remnant of their land-dwelling ancestors.
          </p>
        </ScrollReveal>

        {/* ============ ADDITIONAL SECTIONS ============
         * Copy any block above, change the direction and content.
         * Uncomment the video example below to add a video:
         */}

        {/* --- LOCAL VIDEO (uncomment to use) ---
        <ScrollReveal direction="left">
          <video src="/videos/your-video.mp4" controls className="rounded-lg w-full hover-pop" style={{ maxHeight: "500px" }}>
            Your browser does not support the video tag.
          </video>
        </ScrollReveal>
        */}

          {/* --- YOUTUBE VIDEO (uncomment to use) ---
            <ScrollReveal direction="right">
              <iframe
                src="https://www.youtube.com/embed/w56u2gv8XLs"
                title="Video title"
                className="w-full rounded-lg hover-pop"
                style={{ height: "400px" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </ScrollReveal>
        */}

      </div>
    </Layout>
  );
};

export default Page1;
