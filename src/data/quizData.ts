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
    question: "Placeholder questions",
    options: [
      { text: "Answer 1", isCorrect: true },
      { text: "Answer 2", isCorrect: false },
      { text: "Answer 3", isCorrect: false },
      { text: "Answer 4", isCorrect: false },
    ],
    explanation: "Explanation!",
  },
];
