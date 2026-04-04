# Quiz Guide

## How the Darwin Quiz Works

The quiz appears on the **Claims page** (`/claims`) between the claim cards and the timeline. Users click an option to answer, and the correct answer + explanation are revealed.

## How to Add a Question

Open `src/data/quizData.ts` and add an object to the `quizQuestions` array:

```ts
{
  id: "q5",                                    // Unique ID
  question: "Your question here?",             // Question text
  image: "https://example.com/photo.jpg",      // Optional image above question
  options: [
    { text: "Wrong answer", isCorrect: false },
    { text: "Right answer", isCorrect: true },
    { text: "Another wrong one", isCorrect: false },
    { text: "Also wrong", isCorrect: false },
  ],
  explanation: "Explanation shown after answering.",
}
```

### Adding an Image to a Question
Add the `image` field with a URL. It displays above the question text.

### Removing a Question
Delete the entire `{ ... }` object from the array.

### Tips
- Keep 2-4 options per question
- Only one option should have `isCorrect: true`
- Write funny explanations to keep the Darwin theme going
