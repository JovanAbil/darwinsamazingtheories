import Layout from "@/components/Layout";

const Credits = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-display font-bold text-foreground mb-8">Credits & Attribution</h1>
        <div className="bg-card rounded-lg p-8 border border-border space-y-6">
          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Sources</h2>
            <p className="text-muted-foreground">
              Text goes here.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Images</h2>
            <ul className="text-muted-foreground space-y-2">
              <li>
                Photos from{" "}
                <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="bio-link">
                  Unsplash
                </a>
              </li>
              <li>
              Google
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Technologies</h2>
            <ul className="text-muted-foreground space-y-2">
              <li>Built with React, TypeScript, and Tailwind CSS</li>
              <li>Icons by Lucide</li>
              <li>UI components by shadcn/ui</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Credits;
