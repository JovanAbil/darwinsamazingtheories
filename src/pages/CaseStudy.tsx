// src/pages/CaseStudy.tsx
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";

const CaseStudy = () => {
  return (
    <Layout>
      <PageHeader
        imageUrl="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&h=900&fit=crop"
        title="Case Study"
        description="Insects vs Bacillus thuringiensis (Bt) corn"
      />
      <div className="container mx-auto px-6 py-20 space-y-16">

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <ScrollReveal direction="right" className="flex-1">
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">
              What is this crop?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              This crop is genetically modified to express proteins from the soil bacterium Bacillus thuringiensis, which are toxic to specific pests like the European corn borer and corn rootworm. This technology allows the plant to produce its own insecticide, reducing the need for chemical sprays.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left" className="flex-1">
            <img
              src="https://cdn1.byjus.com/wp-content/uploads/2018/11/biology/2017/06/01070957/BT-CROPS.png"
              alt="Green leaves with morning dew"
              className="rounded-lg hover-pop w-full"
              style={{ height: "300px", objectFit: "cover" }}
            />
          </ScrollReveal>
        </div>

        <ParallaxSection
          imageUrl="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&h=600&fit=crop"
          height="40vh"
        >
          <div className="text-center px-6">
            <h2 className="text-3xl font-display font-bold text-foreground mb-2">
              How Bt Corn Supports Darwin's 5 Claims
            </h2>
          </div>
        </ParallaxSection>

        {/* ============ THREE-COLUMN CARDS ============ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ScrollReveal direction="left">
            <div className="bg-card rounded-lg p-5 border border-border hover-pop h-full">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Ostrinia_nubilalis01.jpg?w=400&h=250&fit=crop"
                alt="Bt Corn"
                className="rounded-md w-full mb-4"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Nonconstancy of Species</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Bt corn, with its special ability to produce its own insecticide, has caused changes to organisms in its environment. The European corn borer, corn rootworm and other insects have developed a resistance to the Bt corn's insecticide. To do this they had to change and adapt to the corn's modification, representing nonconstancy of species.
              </p>
            </div>
          </ScrollReveal>
        
          <ScrollReveal direction="full">
            <div className="bg-card rounded-lg p-5 border border-border hover-pop h-full">
              <img
                src="https://vegento.russell.wisc.edu/wp-content/uploads/sites/249/2012/05/ecbLarvae.jpg?w=400&h=250&fit=crop"
                alt="Common Ancestor"
                className="rounded-md w-full mb-4"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Descent from a Common Ancestor</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                These now resistant insects didn't appear out of nowhere. They came from their once non-resistant species ancestors, which falls under descent from a common ancestor.
              </p>
            </div>
          </ScrollReveal>
        
          <ScrollReveal direction="right">
            <div className="bg-card rounded-lg p-5 border border-border hover-pop h-full">
              <img
                src="https://www.gardenia.net/wp-content/uploads/2010/01/shutterstock_1052168228-Optimized.jpg?w=400&h=250&fit=crop"
                alt="Gradual Evolution"
                className="rounded-md w-full mb-4"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Gradual Evolution</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The now resistant insects didn't instantaneously change and adapt to Bt corn's insecticide. They took time to gain a steady population of resistant insects. Gradually, over time, evolution occurred, falling under gradual evolution.
              </p>
            </div>
          </ScrollReveal>
        </div>
        
        {/* ============ TWO-COLUMN CARDS ============ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ScrollReveal direction="left">
            <div className="bg-card rounded-lg p-5 border border-border hover-pop h-full">
              <img
                src="https://extension.usu.edu/vegetableguide/images/sweet-corn-pests/wcr-adult.jpg?w=400&h=250&fit=crop"
                alt="Multiplication of Species"
                className="rounded-md w-full mb-4"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Multiplication of Species</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Over time the split between species of resistant insects from non-resistant represents multiplication of species.
              </p>
            </div>
          </ScrollReveal>
        
          <ScrollReveal direction="right">
            <div className="bg-card rounded-lg p-5 border border-border hover-pop h-full">
              <img
                src="https://extension.entm.purdue.edu/newsletters/pestandcrop/wp-content/uploads/sites/2/2022/07/WCRbtlesLeafAxil72.jpg?w=400&h=250&fit=crop"
                alt="Natural Selection"
                className="rounded-md w-full mb-4"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Natural Selection</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The non-resistant insects died out due to being unfit for their environment. Those who were resistant survived, grew in numbers, and eventually dominated. They were fit for their environment and overall show how natural selection took place with Bt corn and the insects.
              </p>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </Layout>
  );
};

export default CaseStudy;
