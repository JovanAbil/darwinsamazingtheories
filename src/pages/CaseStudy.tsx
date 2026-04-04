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
        imageUrl="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&h=900&fit=crop"
        title="Text goes here"
        description="Text goes here"
      />
      <div className="container mx-auto px-6 py-20 space-y-16">

        {/* ============ PAGE TITLE ============ */}
        <ScrollReveal direction="full">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            {/* EDIT: Page title */}
            Text goes here
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            {/* EDIT: Page description */}
            Text goes here
          </p>
        </ScrollReveal>

        {/* ============ TWO-COLUMN IMAGE GRID ============ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal direction="left">
            {/* EDIT: Replace image and caption */}
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=350&fit=crop"
              alt="Mountain landscape at golden hour"
              className="rounded-lg hover-pop w-full"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <p className="text-sm text-muted-foreground mt-2">Text goes here</p>
          </ScrollReveal>
          <ScrollReveal direction="right">
            {/* EDIT: Replace image and caption */}
            <img
              src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=350&fit=crop"
              alt="Rolling green meadow under blue sky"
              className="rounded-lg hover-pop w-full"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <p className="text-sm text-muted-foreground mt-2">Text goes here</p>
          </ScrollReveal>
        </div>

        {/* ============ FULL-WIDTH FEATURE IMAGE ============ */}
        <ScrollReveal direction="full">
          <div className="relative rounded-lg overflow-hidden hover-pop">
            {/* EDIT: Replace with your hero image */}
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=500&fit=crop"
              alt="Misty valley panorama"
              className="w-full"
              style={{ height: "450px", objectFit: "cover" }}
            />
          </div>
          <p className="text-muted-foreground mt-4 text-center text-lg">
            {/* EDIT: Caption for the feature image */}
            Text goes here
          </p>
        </ScrollReveal>

        {/* ============ THREE-COLUMN CARDS ============ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ScrollReveal direction="left">
            <div className="bg-card rounded-lg p-5 border border-border hover-pop">
              {/* EDIT: Replace image, title, description */}
              <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=250&fit=crop" alt="Aerial view of forest" className="rounded-md w-full mb-4" style={{ height: "200px", objectFit: "cover" }} />
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Text goes here</h3>
              <p className="text-muted-foreground text-sm">Text goes here</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="full">
            <div className="bg-card rounded-lg p-5 border border-border hover-pop">
              <img src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=250&fit=crop" alt="Waterfall in forest" className="rounded-md w-full mb-4" style={{ height: "200px", objectFit: "cover" }} />
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Text goes here</h3>
              <p className="text-muted-foreground text-sm">Text goes here</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="bg-card rounded-lg p-5 border border-border hover-pop">
              <img src="https://images.unsplash.com/photo-1518173946687-a53e16966f10?w=400&h=250&fit=crop" alt="Close-up of green leaves" className="rounded-md w-full mb-4" style={{ height: "200px", objectFit: "cover" }} />
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Text goes here</h3>
              <p className="text-muted-foreground text-sm">Text goes here</p>
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

export default CaseStudy;
