import { Leaf, Trees, Sun, Mountain, Users } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import DarwinQuiz from "@/components/DarwinQuiz";
import { claims } from "@/data/claimsData";

const claimIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Leaf, Trees, Sun, Mountain, Users,
};

const ClaimsPage = () => {
  return (
    <Layout>
      <PageHeader
        imageUrl="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&h=900&fit=crop"
        title="What are Darwin's Claims?"
      />

      {/* Claims as full-width cards */}
      <section className="py-16">
        <div className="container mx-auto px-6 space-y-8">
          {claims.map((claim, i) => {
            const Icon = claimIconMap[claim.icon] || Leaf;
            const isLeft = i % 2 === 0;
            return (
              <ScrollReveal key={claim.id} direction={isLeft ? "left" : "right"}>
                <div className={`flex flex-col md:flex-row ${!isLeft ? "md:flex-row-reverse" : ""} gap-6 bg-card rounded-xl border border-border overflow-hidden hover-pop`}>
                  {claim.image && (
                    <img
                      src={claim.image}
                      alt={claim.title}
                      className="w-full md:w-1/3 object-cover"
                      style={{ minHeight: "200px" }}
                    />
                  )}
                  <div className="flex-1 p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-accent/50 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-display font-bold text-2xl text-foreground">{claim.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {claim.longDescription}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Darwin Quiz */}
      <DarwinQuiz />

      {/* Interactive Timeline */}
      <InteractiveTimeline />

      <section>
      <div>
      <ScrollReveal direction="full">
          <div className="bg-accent/20 border border-border rounded-xl p-10 text-center hover-pop">
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">
              {/* EDIT: Conclusion heading */}
              Click on the button to move forward!
            </h2>
            <Link to="/page-1" className="inline-block mt-6 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover-pop">
                {/* EDIT: Button text and href */}
                Go to Claim 1 →
            </Link>
          </div>
        </ScrollReveal>
      </div>
        </section>
    </Layout>
  );
};

export default ClaimsPage;
