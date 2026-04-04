import { Leaf, Trees, Sun, Mountain, Users } from "lucide-react";
import Layout from "@/components/Layout";
import ParallaxSection from "@/components/ParallaxSection";
import ContentBlock from "@/components/ContentBlock";
import ScrollReveal from "@/components/ScrollReveal";
import { heroContent, homeContentBlocks } from "@/data/homeContent";
import { claims } from "@/data/claimsData";

const claimIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Leaf, Trees, Sun, Mountain, Users,
};

const Index = () => {
  return (
    <Layout>
      {/* Hero with parallax */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&h=900&fit=crop"
        height="80vh"
      >
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-4 animate-fade-in">
            {heroContent.heading}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
            {heroContent.subheading}
          </p>
          <a
            href={heroContent.ctaLink}
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover-pop text-lg"
          >
            {heroContent.ctaText}
          </a>
        </div>
      </ParallaxSection>

      {/* 5 Claims — full-width alternating cards */}
      <section id="claims" className="py-20 gradient-section">
        <div className="container mx-auto px-6">
          <ScrollReveal direction="full">
            <h2 className="text-4xl font-display font-bold text-center text-foreground mb-12">
              What We Stand For
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            {claims.map((claim, i) => {
              const Icon = claimIconMap[claim.icon] || Leaf;
              const isLeft = i % 2 === 0;
              return (
                <ScrollReveal key={claim.id} direction={isLeft ? "left" : "right"}>
                  {/* EDIT: To add an image to a claim card, add an `image` field
                       in src/data/claimsData.ts for that claim.
                       The image displays on the side of the card.
                       To link to the claim detail, the card links to /claims#claim-id */}
                  <a href={`/page-${i + 1}`} className="block">
                    <div className={`flex flex-col md:flex-row ${!isLeft ? "md:flex-row-reverse" : ""} gap-0 bg-card rounded-xl border border-border overflow-hidden hover-pop`}>
                      {claim.image && (
                        <img
                          src={claim.image}
                          alt={claim.title}
                          className="w-full md:w-1/3 object-cover"
                          style={{ minHeight: "180px" }}
                          loading="lazy"
                        />
                      )}
                      <div className="flex-1 p-6 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-accent/50 flex items-center justify-center">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="font-display font-bold text-xl text-foreground">{claim.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{claim.description}</p>
                      </div>
                    </div>
                  </a>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Blocks */}
      <section className="py-20">
        <div className="container mx-auto px-6 space-y-16">
          {homeContentBlocks.map((block) => (
            <ContentBlock key={block.id} block={block} />
          ))}
        </div>
      </section>

      {/* Second Parallax */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&h=900&fit=crop"
        height="50vh"
      >
        <div className="text-center px-6">
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">
            Join the Movement
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">
            Together we can make a difference for our planet.
          </p>
          <a
            href="/credits"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover-pop"
          >
            Get Involved
          </a>
        </div>
      </ParallaxSection>
    </Layout>
  );
};

export default Index;
