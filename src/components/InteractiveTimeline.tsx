import { useState } from "react";
import { X } from "lucide-react";
import { timelineEntries, type TimelineEntry } from "@/data/timelineData";
import ScrollReveal from "./ScrollReveal";

const InteractiveTimeline = () => {
  const [selected, setSelected] = useState<TimelineEntry | null>(null);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="full">
          <h2 className="text-4xl font-display font-bold text-center text-foreground mb-16">
            Timeline
          </h2>
        </ScrollReveal>

        {/* Timeline line */}
        <div className="relative">
          {/* Vertical wavy line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-16">
            {timelineEntries.map((entry, i) => {
              const isLeft = i % 2 === 0;
              return (
                <ScrollReveal key={entry.id} direction={isLeft ? "left" : "right"}>
                  <div className="relative flex items-center">
                    {/* Content */}
                    <div className={`w-5/12 ${isLeft ? "pr-8 text-right" : "pl-8 ml-auto text-left"}`}>
                      <span className="text-primary font-bold text-sm uppercase tracking-wider">
                        {entry.year}
                      </span>
                      <h3 className="font-display font-bold text-xl text-foreground mt-1">
                        {entry.heading}
                      </h3>
                      {entry.content && (
                        <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                          {entry.content}
                        </p>
                      )}
                    </div>

                    {/* Circle button */}
                    <button
                      onClick={() => setSelected(entry)}
                      className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background hover:scale-150 transition-transform duration-300 cursor-pointer z-10"
                      aria-label={`View details: ${entry.heading}`}
                    />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sidebar panel */}
      {selected && (
        <>
          <div
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-50"
            onClick={() => setSelected(null)}
          />
          <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-card border-l border-border z-50 overflow-y-auto animate-fade-in">
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold text-sm uppercase tracking-wider">
                  {selected.year}
                </span>
                <button
                  onClick={() => setSelected(null)}
                  className="p-2 rounded-md hover:bg-muted transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <h2 className="text-2xl font-display font-bold text-foreground">
                {selected.heading}
              </h2>

              {selected.image && (
                <img
                  src={selected.image}
                  alt={selected.imageAlt || ""}
                  className="w-full rounded-lg"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              )}

              {selected.videoUrl && selected.videoType === "youtube" && (
                <iframe
                  src={selected.videoUrl}
                  title={selected.heading}
                  className="w-full rounded-lg"
                  style={{ height: "220px" }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}

              {selected.videoUrl && selected.videoType === "local" && (
                <video
                  src={selected.videoUrl}
                  controls
                  className="w-full rounded-lg"
                  style={{ maxHeight: "220px" }}
                />
              )}

              {selected.content && (
                <p className="text-muted-foreground leading-relaxed">
                  {selected.content}
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default InteractiveTimeline;
