import { Leaf, Trees, Sun, Mountain, Users } from "lucide-react";
import Layout from "@/components/Layout";
import ParallaxSection from "@/components/ParallaxSection";
import ContentBlock from "@/components/ContentBlock";
import ScrollReveal from "@/components/ScrollReveal";
import { heroContent, claims, homeContentBlocks } from "@/data/homeContent";

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

      {/* 5 Claims */}
      <section id="claims" className="py-20 gradient-section">
        <div className="container mx-auto px-6">
          <ScrollReveal direction="full">
            <h2 className="text-4xl font-display font-bold text-center text-foreground mb-12">
              What We Stand For
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {claims.map((claim, i) => {
              const Icon = claimIconMap[claim.icon] || Leaf;
              return (
                <ScrollReveal
                  key={claim.id}
                  direction={i % 2 === 0 ? "left" : "right"}
                >
                  <div className="bg-card rounded-lg p-6 text-center shadow-sm hover-pop border border-border overflow-hidden">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/50 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-2">{claim.title}</h3>
                    <p className="text-muted-foreground text-sm">{claim.description}</p>
                  </div>
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
