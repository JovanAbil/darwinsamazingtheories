import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";

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
      <PageHeader
        imageUrl="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&h=900&fit=crop"
        title="Gradual evolution"
        description="Harnessing renewable resources for a brighter future."
      />
      <div className="container mx-auto px-6 py-20 space-y-16">

        <ScrollReveal direction="full">
          <div className="bg-accent/30 border border-border rounded-xl p-8 hover-pop">
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">
              {/* EDIT: Your heading */}
              What does it mean?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {/* EDIT: Your paragraph text */}
Gradual evolution is yet another claim made by Darwin. It's a theory that species evolve slowly, and in small steps, over long periods of time. This contrasts to a once previous belief of spontaneous generation that would’ve made species appear instantly out of nowhere. It's these small changes over long periods of time that have helped us to be us. Humans wouldn’t be where they are today without gradually evolving, changing ever so slightly, over thousands and millions of years.
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
Darwin was able to make this claim by using his knowledge of the finch’s beak size and shape. He saw that each differed, but the changes were slight. He knew that they must’ve gradually evolved to get there. With time they had been able to properly adapt to their local food source, having an ideal beak to properly eat specific foods like seeds, insects, nectar, or fruit.
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
        
        {/* ============ TWO-COLUMN IMAGE GRID ============ 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal direction="left">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=350&fit=crop"
              alt="Mountain landscape at golden hour"
              className="rounded-lg hover-pop w-full"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <p className="text-sm text-muted-foreground mt-2">Text goes here</p>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <img
              src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=350&fit=crop"
              alt="Rolling green meadow under blue sky"
              className="rounded-lg hover-pop w-full"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <p className="text-sm text-muted-foreground mt-2">Text goes here</p>
          </ScrollReveal>
        </div>
        */}

        {/* ============ FULL-WIDTH FEATURE IMAGE ============ 
        <ScrollReveal direction="full">
          <div className="relative rounded-lg overflow-hidden hover-pop">
            {/* EDIT: Replace with your hero image 
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=500&fit=crop"
              alt="Misty valley panorama"
              className="w-full"
              style={{ height: "450px", objectFit: "cover" }}
            />
          </div>
          <p className="text-muted-foreground mt-4 text-center text-lg">
            {/* EDIT: Caption for the feature image 
            Text goes here
          </p>
        </ScrollReveal>
        */}

        {/* ============ THREE-COLUMN CARDS ============ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ScrollReveal direction="left">
            <div className="bg-card rounded-lg p-5 border border-border hover-pop">
              {/* EDIT: Replace image, title, description */}
              <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=250&fit=crop" alt="Aerial view of forest" className="rounded-md w-full mb-4" style={{ height: "200px", objectFit: "cover" }} />
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Dog Breeding</h3>
              <p className="text-muted-foreground text-sm">
                Overtime dogs have changed. Today people are accustomed to dogs as cute pets, but they were once wild animals. This change is the result of people choosing to keep the harmless pet-like kind of dogs and breed them, growing their population. Today certain features in specific dogs can be seen because over time humans have bred the dogs to their liking. For example, there used to be a variety of terriers in Ireland, with different structures, colors,and coats, but gradually three main breeds evolved: the Irish, Kerry Blue and Soft Coated Wheaten terriers. These three don’t differ much in their structure but mainly show their differences in color and coats (AKC Staff, 2021). This shows how breeding over time led to a more similar structure between the dogs. This is also artificial selection because it was predetermined by humans who the dogs would breed with.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="full">
            <div className="bg-card rounded-lg p-5 border border-border hover-pop">
              <img src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=250&fit=crop" alt="Waterfall in forest" className="rounded-md w-full mb-4" style={{ height: "200px", objectFit: "cover" }} />
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Pesticide Resistance</h3>
              <p className="text-muted-foreground text-sm">Insects can sometimes be annoying, thus the invention of pesticide. Pesticide is meant to kill or repel insects, however over time there are some insects and bugs that have become pesticide resistant. For example, the twospotted spider mite went after most fruits and used to be vulnerable to a pesticide called miticide. Over time, more and more mites became resistant to miticide and are now unaffected by it (Michigan State University, n.d.). This shows the gradual evolution bugs and insects can go through to become resistant to pesticides.
</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="bg-card rounded-lg p-5 border border-border hover-pop">
              <img src="https://images.unsplash.com/photo-1518173946687-a53e16966f10?w=400&h=250&fit=crop" alt="Close-up of green leaves" className="rounded-md w-full mb-4" style={{ height: "200px", objectFit: "cover" }} />
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Antibiotic-Resistant Bacteria</h3>
              <p className="text-muted-foreground text-sm">An example used early was MRSA (Methicillin-resistant Staphylococcus aureus), a bacterium that became resistant to an antibiotic. Well this didn’t happen instantly, it took time. Methicillin was made in 1959, but staph didn’t become resistant until after a full year (MRSA Action UK, n.d.). This shows the gradual evolution staph had to undergo for eventually gaining resistance over the antibiotic.
</p>
            </div>
          </ScrollReveal>
        </div>

        {/* ============ VIDEO + TEXT (uncomment to use) ============
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <ScrollReveal direction="left" className="flex-1">
            <video src="/videos/your-video.mp4" controls className="rounded-lg w-full hover-pop" style={{ maxHeight: "350px" }}>
              Your browser does not support the video tag.
            </video>
          </ScrollReveal>
          <ScrollReveal direction="right" className="flex-1">
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">About This Video</h2>
            <p className="text-muted-foreground leading-relaxed">Your video description here.</p>
          </ScrollReveal>
        </div>
        */}

  
      </div>
    </Layout>
  );
};

export default Page3;
