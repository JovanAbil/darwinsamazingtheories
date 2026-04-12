import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";

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
      <PageHeader
        imageUrl="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&h=900&fit=crop"
        title="Natural Selection"
        description="The process through which populations of organisms adapt and change to reproduce better fit organisms for the environment"
      />
      <div className="container mx-auto px-6 py-20 space-y-20">

        <ScrollReveal direction="full">
          <div className="bg-accent/30 border border-border rounded-xl p-8 hover-pop">
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">
              {/* EDIT: Your heading */}
              What does it mean?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {/* EDIT: Your paragraph text */}
Natural selection is a claim made by Darwin that has proven to be a fundamental mechanism of evolution where organisms better adapted to their environment tend to survive and produce more offspring. Traits that benefit the organism and allow them to survive are passed down, while those without them die. As better suited organisms survive, they reproduce more, while those that are unfit don’t reproduce because they die.
            </p>
          </div>
        </ScrollReveal>

        {/* ============ ROW 1: TEXT LEFT, IMAGE RIGHT ============ */}
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <ScrollReveal direction="left" className="flex-1">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                {/* EDIT: Section heading */}
               How did Darwin make this claim?  
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                {/* EDIT: Section text */}
Charles Darwin was able to make the claim of natural selection when he noticed how the Galapagos tortoises survived. He noticed that tortoises with longer necks were better suited for their environment because they could reach food easier and food that was out of reach for others (Hardy, n.d.). Thus, tortoises with longer necks survived while those with short necks died out. The ones with long necks reproduced and just like that Charles Darwin witnessed natural selection
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
        
        {/* ============ STEP 1 — slides from LEFT ============ */}
        <ScrollReveal direction="left">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-display font-bold text-foreground mt-1 mb-3">
              {/* EDIT: Step heading */}
How are climate change and environmental pressures shaping species now?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {/* EDIT: Step description */}
Climate change is driving rapid natural selection by changing habitats, impacting the organism by forcing things like physical changes and altered migration timing (Rhodes, 2025). Species adapt through genetic changes to survive the new environmental pressures they face.
            </p>
          </div>
        </ScrollReveal>

        {/* ============ STEP 2 — IMAGE from RIGHT ============ */}
        <ScrollReveal direction="left">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-display font-bold text-foreground mt-1 mb-3">
              {/* EDIT: Step heading */}
              Real World Example
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {/* EDIT: Step description */}
              Climate change reduces snow cover duration in the Snowshoe Hare’s habitat. This causes problems as the snowshoe hares normally change from brown to white for winter camouflage. They do this in a process called molting where they shed their fur. Now that their color changing timing is shifting, hares that change color too early or stay white too long on bare ground are easily spotted by predators. Hares that can adjust their molting timing or are better suited to a less-snowy environment survive and reproduce. (Climate Adaptation Science Centers, 2016)This shows how climate change is impacting and shaping the snowshoe hares.
            </p>
          </div>

        <ScrollReveal direction="right">
          <img
            src="https://images.unsplash.com/photo-1698472505070-6d3b90afb530?w=800&h=400&fit=crop"
            alt="name"
            className="rounded-lg hover-pop w-full"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <p className="text-sm text-muted-foreground mt-2 italic">
            {/* EDIT: Image caption */}
Real World Example
          </p>
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

      </div>
    </Layout>
  );
};

export default Page5;
