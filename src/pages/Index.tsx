import { Leaf, Trees, Sun, Mountain, Users } from "lucide-react";
import { Link } from "react-router-dom";  // ← added this import
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
              Text goes here
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

      <ScrollReveal direction="right">
          <iframe
            src="https://www.youtube.com/watch?v=w56u2gv8XLs"
            title="Darwin's Theory of Evolution"
            className="w-full rounded-lg hover-pop"
            style={{ height: "400px" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </ScrollReveal>
      
      {/* Second Parallax */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&h=900&fit=crop"
        height="50vh"
      >
        <div className="text-center px-6">
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">
            Text goes here
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">
            Text goes here
          </p>
        </div>
      </ParallaxSection>
    <div>
      <ScrollReveal direction="full">
          <div className="bg-accent/20 border border-border rounded-xl p-10 text-center hover-pop">
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">
              {/* EDIT: Conclusion heading */}
              Text goes here
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {/* EDIT: Conclusion text */}
              Text goes here
            </p>
            <Link to="/page-1" className="inline-block mt-6 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover-pop">
                {/* EDIT: Button text and href */}
                Go to Claim 1 →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </Layout>
  );
};

export default Index;
