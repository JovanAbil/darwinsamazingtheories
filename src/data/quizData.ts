/**
 * =============================================
 * QUIZ DATA
 * =============================================
 * Each quiz question appears on the Claims page.
 * The quiz pokes fun at Darwin and evolution concepts.
 *
 * HOW TO ADD A QUESTION:
 *   1. Copy one of the objects below
 *   2. Give it a unique `id`
 *   3. Write the `question` text
 *   4. Add 2-4 `options` (each with `text` and `isCorrect`)
 *   5. Write an `explanation` shown after answering
 *
 * HOW TO ADD AN IMAGE TO A QUESTION:
 *   Add `image: "https://example.com/photo.jpg"` to the question object.
 *   It will display above the question text.
 *
 * FIELDS:
 *   - id: unique string
 *   - question: the question text
 *   - image?: optional image URL displayed above the question
 *   - options: array of { text, isCorrect }
 *   - explanation: text shown after the user picks an answer
 *
 * See /docs/QUIZ_GUIDE.md for full instructions.
 */

export interface QuizOption {
  text: string;
  isCorrect: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  image?: string;
  options: QuizOption[];
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "What did Darwin famously ride on during his voyage?",
    options: [
      { text: "HMS Beagle", isCorrect: true },
      { text: "HMS Poodle", isCorrect: false },
      { text: "A giant tortoise (he was in no rush)", isCorrect: false },
      { text: "A finch with unusually large wings", isCorrect: false },
    ],
    explanation: "It was HMS Beagle! Though riding a giant tortoise would have been on-brand for the Galápagos.",
  },
  {
    id: "q2",
    question: "What is 'survival of the fittest' really about?",
    options: [
      { text: "Who can do the most push-ups", isCorrect: false },
      { text: "Best adapted to the environment", isCorrect: true },
      { text: "Whoever runs fastest from predators", isCorrect: false },
      { text: "The organism with the best gym membership", isCorrect: false },
    ],
    explanation: "'Fittest' means best adapted to the environment — not who has the biggest biceps. Darwin would like you to know he did NOT have a gym membership.",
  },
  {
    id: "q3",
    question: "How long did Darwin wait before publishing his theory?",
    options: [
      { text: "About 5 minutes", isCorrect: false },
      { text: "Over 20 years", isCorrect: true },
      { text: "He never published it, someone found his notes", isCorrect: false },
      { text: "He posted it on social media immediately", isCorrect: false },
    ],
    explanation: "Darwin sat on his theory for over 20 years! Talk about procrastination — or maybe he was just waiting for peer review to evolve.",
  },
  {
    id: "q4",
    question: "Which animals on the Galápagos Islands were most important to Darwin's theory?",
    options: [
      { text: "Penguins with top hats", isCorrect: false },
      { text: "Finches with different beak shapes", isCorrect: true },
      { text: "Iguanas that could do calculus", isCorrect: false },
      { text: "Crabs that had existential crises", isCorrect: false },
    ],
    explanation: "Darwin's finches! Each island had finches with different beaks adapted to different food sources. No math-capable iguanas were involved.",
  },
];
