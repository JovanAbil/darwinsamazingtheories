// src/pages/DomainClassification.tsx
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import PageHeader from "@/components/PageHeader";

const DomainClassification = () => {
  return (
    <Layout>
      <PageHeader
        imageUrl="https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=1600&h=900&fit=crop"
        title="Domain Classification"
        description="How life is organized, named, and understood"
      />

      <div className="container mx-auto px-6 py-20 space-y-16">

        {/* ============ WHAT IS TAXONOMY ============ */}
        <ScrollReveal direction="full">
          <div className="bg-accent/30 border border-border rounded-xl p-8 hover-pop">
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">
              What is Taxonomy?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Taxonomy is the science of naming, describing, and classifying organisms. It organizes the diversity of life into a structure that ranges from domain to species — with domain being at the top (broadest) and species being at the bottom (most specific).
            </p>
          </div>
        </ScrollReveal>

        {/* ============ HOW TAXONOMY HAS EVOLVED ============ */}
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <ScrollReveal direction="left" className="flex-1">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              How Classification Has Evolved
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Unlike previous classification systems, today's advanced genetic technology allows for far more precise grouping. Previously, taxonomy relied on physical traits alone because the technology to study genes simply didn't exist. Now, scientists classify organisms using both physical and genetic structure. Techniques like DNA and RNA sequencing have revolutionized how scientists understand and organize life on Earth.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="right" className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop"
              alt="DNA sequencing lab"
              className="rounded-lg hover-pop w-full"
              style={{ height: "350px", objectFit: "cover" }}
            />
          </ScrollReveal>
        </div>

        {/* ============ PARALLAX: 3 DOMAINS ============ */}
        <ParallaxSection
          imageUrl="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&h=600&fit=crop"
          height="40vh"
        >
          <div className="text-center px-6">
            <h2 className="text-3xl font-display font-bold text-foreground mb-2">
              The Three Domains of Life
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Bacteria, Archaea, and Eukarya — the broadest classification of all life on Earth
            </p>
          </div>
        </ParallaxSection>

        {/* ============ THREE DOMAIN CARDS ============ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ScrollReveal direction="left">
            <div className="bg-card rounded-lg p-5 border border-border hover-pop h-full">
              <img
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=250&fit=crop"
                alt="Bacteria"
                className="rounded-md w-full mb-4"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Bacteria</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Bacteria consist of unicellular, prokaryotic microorganisms that lack a nucleus. They are ubiquitous — found in virtually all environments on Earth. They reproduce asexually, primarily through binary fission.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="full">
            <div className="bg-card rounded-lg p-5 border border-border hover-pop h-full">
              <img
                src="https://bpb-us-w2.wpmucdn.com/sites.gsu.edu/dist/7/5977/files/2017/03/Pic-of-Archaea-2dtedkn-395x230.jpg?w=400&h=250&fit=crop"
                alt="Archaea"
                className="rounded-md w-full mb-4"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Archaea</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Archaea are single-celled, prokaryotic microorganisms that are actually closer to eukaryotes than bacteria — sharing a more recent common ancestor. They thrive in extreme environments and play crucial roles in global carbon and nitrogen cycles.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-card rounded-lg p-5 border border-border hover-pop h-full">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
                alt="Eukarya"
                className="rounded-md w-full mb-4"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Eukarya</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Eukarya are organisms with complex cells containing a nucleus and specialized organelles. Generally larger than prokaryotes, they reproduce through mitosis or meiosis. Key kingdoms include Plantae, Animalia, Fungi, and Protista.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* ============ PARALLAX: KINGDOMS ============ */}
        <ParallaxSection
          imageUrl="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&h=600&fit=crop"
          height="40vh"
        >
          <div className="text-center px-6">
            <h2 className="text-3xl font-display font-bold text-foreground mb-2">
              Kingdoms of Eukarya
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Within the domain of Eukarya, life is further divided into four key kingdoms
            </p>
          </div>
        </ParallaxSection>

        {/* ============ PLANTAE ============ */}
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <ScrollReveal direction="left" className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop"
              alt="Plantae"
              className="rounded-lg hover-pop w-full"
              style={{ height: "350px", objectFit: "cover" }}
            />
          </ScrollReveal>
          <ScrollReveal direction="right" className="flex-1">
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">
              Plantae
            </h2>
            <div className="bg-accent/20 border border-border rounded-lg p-4 mb-4">
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-1">Characteristics</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Multicellular, eukaryotic, and autotrophic — they produce their own food through photosynthesis. Their cells have walls made of cellulose.
              </p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <span className="font-medium text-foreground">Examples:</span> Trees, grasses, flowers, and mosses.
            </p>
          </ScrollReveal>
        </div>

        {/* ============ ANIMALIA ============ */}
        <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
          <ScrollReveal direction="right" className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&h=400&fit=crop"
              alt="Animalia"
              className="rounded-lg hover-pop w-full"
              style={{ height: "350px", objectFit: "cover" }}
            />
          </ScrollReveal>
          <ScrollReveal direction="left" className="flex-1">
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">
              Animalia
            </h2>
            <div className="bg-accent/20 border border-border rounded-lg p-4 mb-4">
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-1">Characteristics</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Multicellular, eukaryotic, and heterotrophic — they consume other organisms for energy. They lack cell walls and are typically motile.
              </p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <span className="font-medium text-foreground">Examples:</span> Humans, lions, birds, and fish.
            </p>
          </ScrollReveal>
        </div>

        {/* ============ FUNGI + PROTISTA ============ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ScrollReveal direction="left">
            <div className="bg-card rounded-lg p-5 border border-border hover-pop h-full">
              <img
                src="https://i.natgeofe.com/n/3869a86a-295b-4d64-a166-7122d9b33f3f/prod-yourshot-339782-2075670.jpg?w=400&h=250&fit=crop"
                alt="Fungi"
                className="rounded-md w-full mb-4"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Fungi</h3>
              <div className="bg-accent/20 border border-border rounded-lg p-3 mb-3">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Characteristics</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Mostly multicellular, eukaryotic, and heterotrophic. They act as decomposers, absorbing nutrients from organic matter. Their cell walls are made of chitin.
                </p>
              </div>
              <p className="text-muted-foreground text-sm">
                <span className="font-medium text-foreground">Examples:</span> Mushrooms, yeast, and mold.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-card rounded-lg p-5 border border-border hover-pop h-full">
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=250&fit=crop"
                alt="Protista"
                className="rounded-md w-full mb-4"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Protista</h3>
              <div className="bg-accent/20 border border-border rounded-lg p-3 mb-3">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Characteristics</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Primarily single-celled, eukaryotic organisms that don't fit into the other kingdoms. They can be autotrophic or heterotrophic and live in aquatic or damp environments.
                </p>
              </div>
              <p className="text-muted-foreground text-sm">
                <span className="font-medium text-foreground">Examples:</span> Amoeba, paramecium, and algae.
              </p>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </Layout>
  );
};

export default DomainClassification;
