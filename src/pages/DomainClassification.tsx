// src/pages/DomainClassification.tsx
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";

const DomainClassification = () => {
  return (
    <Layout>
      <PageHeader
        imageUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&h=900&fit=crop"
        title="Text goes here"
        description="Text goes here"
      />
      <div className="space-y-0">

        {/* ============ PAGE HEADER ============ */}
        <div className="container mx-auto px-6 pt-20 pb-10">
          <ScrollReveal direction="full">
            <h1 className="text-4xl font-display font-bold text-foreground mb-4">
              {/* EDIT: Page title */}
              Text goes here
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              {/* EDIT: Page intro */}
              Text goes here
            </p>
          </ScrollReveal>
        </div>

        {/* ============ ROW 1: TEXT LEFT, IMAGE RIGHT ============ */}
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <ScrollReveal direction="left" className="flex-1">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                {/* EDIT: Section heading */}
               Text goes here
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                {/* EDIT: Section text */}
                Text goes here
              </p>
              <Link to="/page-1" className="bio-link">
                Text goes here
              </Link>
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

        {/* ============ PARALLAX DIVIDER ============ */}
        {/* EDIT: Change imageUrl to your own image */}
        <ParallaxSection
          imageUrl="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&h=600&fit=crop"
          height="40vh"
        >
          <div className="text-center px-6">
            <h2 className="text-3xl font-display font-bold text-foreground mb-2">
              Text goes here
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Text goes here
            </p>
          </div>
        </ParallaxSection>

        {/* ============ ROW 2: IMAGE LEFT, TEXT RIGHT (flipped) ============ */}
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            <ScrollReveal direction="right" className="flex-1">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                {/* EDIT: Section heading */}
                Text goes here
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {/* EDIT: Section text */}
                Text goes here
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" className="flex-1">
              {/* EDIT: Replace image */}
              <img
                src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=400&fit=crop"
                alt="Green meadow landscape"
                className="rounded-lg hover-pop w-full"
                style={{ height: "350px", objectFit: "cover" }}
              />
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
      <ScrollReveal direction="full">
          <div className="bg-accent/20 border border-border rounded-xl p-10 text-center hover-pop">
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">
              {/* EDIT: Conclusion heading */}
              Click on the button to move forward!
            </h2>
            <Link to="/credits" className="inline-block mt-6 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover-pop">
                {/* EDIT: Button text and href */}
                Go to Credits →
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </Layout>
  );
};

export default DomainClassification;
