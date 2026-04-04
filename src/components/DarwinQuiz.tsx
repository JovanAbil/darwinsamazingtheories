import { useState } from "react";
import { quizQuestions } from "@/data/quizData";
import ScrollReveal from "./ScrollReveal";

const DarwinQuiz = () => {
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const handleAnswer = (questionId: string, optionIndex: number) => {
    if (revealed[questionId]) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
    setRevealed((prev) => ({ ...prev, [questionId]: true }));
  };

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="full">
          <h2 className="text-4xl font-display font-bold text-center text-foreground mb-4">
            Darwin's Pop Quiz
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Test your knowledge of evolution — and Darwin's patience.
          </p>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto space-y-10">
          {quizQuestions.map((q, qi) => (
            <ScrollReveal key={q.id} direction={qi % 2 === 0 ? "left" : "right"}>
              <div className="bg-card rounded-xl border border-border p-6 space-y-4">
                {q.image && (
                  <img
                    src={q.image}
                    alt=""
                    className="w-full rounded-lg"
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                )}
                <h3 className="font-display font-bold text-lg text-foreground">
                  {qi + 1}. {q.question}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {q.options.map((opt, oi) => {
                    const isSelected = answers[q.id] === oi;
                    const isRevealed = revealed[q.id];
                    let btnClass = "border border-border rounded-lg px-4 py-3 text-left transition-all duration-300 cursor-pointer text-sm";

                    if (isRevealed) {
                      if (opt.isCorrect) {
                        btnClass += " bg-primary/20 border-primary text-foreground";
                      } else if (isSelected && !opt.isCorrect) {
                        btnClass += " bg-destructive/20 border-destructive text-foreground";
                      } else {
                        btnClass += " opacity-50 text-muted-foreground";
                      }
                    } else {
                      btnClass += " hover:bg-accent/50 text-foreground";
                    }

                    return (
                      <button
                        key={oi}
                        onClick={() => handleAnswer(q.id, oi)}
                        className={btnClass}
                        disabled={isRevealed}
                      >
                        {opt.text}
                      </button>
                    );
                  })}
                </div>
                {revealed[q.id] && (
                  <p className="text-muted-foreground text-sm italic mt-2 animate-fade-in">
                    {q.explanation}
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DarwinQuiz;
