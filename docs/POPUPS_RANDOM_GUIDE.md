# Random Pop-ups Guide — BioSphere

## Overview

Random pop-ups appear automatically every **5–10 minutes** while a user browses the site. Messages are defined in a single data file — no coding required to add or remove them.

---

## How It Works

| File | Purpose |
|------|---------|
| `src/data/popupMessages.ts` | **Edit this** — all pop-up messages live here |
| `src/components/RandomPopup.tsx` | The component that picks a random message and shows it |
| `src/components/Layout.tsx` | Loads `RandomPopup` site-wide (already done) |

---

## Adding a New Pop-up

Open `src/data/popupMessages.ts` and add a new object to the `popupMessages` array:

```ts
{
  id: "my-unique-id",
  title: "My Pop-up Title",
  content: "Your message here. Use <strong>bold</strong> and <em>italic</em> tags.",
},
```

### Formatting Reference

| What you want | How to write it |
|---------------|-----------------|
| **Bold text** | `<strong>word</strong>` |
| *Italic text* | `<em>word</em>` |
| Line break | `<br/>` |
| Link | `<a href="/page-1" class="bio-link">Page 1</a>` |

### Example

```ts
{
  id: "fun-fact-1",
  title: "🌿 Did You Know?",
  content: "A single tree can absorb up to <strong>48 pounds</strong> of CO₂ per year.<br/><br/><em>That's the weight of a medium-sized dog!</em>",
},
```

---

## Removing a Pop-up

Delete the entire `{ id, title, content }` block from the array in `popupMessages.ts`. Make sure commas are correct after removing.

---

## Changing the Timing

Open `src/components/RandomPopup.tsx` and edit these two lines near the top:

```ts
const MIN_DELAY_MS = 5 * 60 * 1000;  // 5 minutes — change the 5
const MAX_DELAY_MS = 10 * 60 * 1000; // 10 minutes — change the 10
```

For example, to show pop-ups every 1–3 minutes:
```ts
const MIN_DELAY_MS = 1 * 60 * 1000;
const MAX_DELAY_MS = 3 * 60 * 1000;
```

---

## Testing Pop-ups Quickly

To test without waiting 5 minutes, temporarily change the delays:

```ts
const MIN_DELAY_MS = 5 * 1000;  // 5 seconds
const MAX_DELAY_MS = 10 * 1000; // 10 seconds
```

**Remember to change them back before publishing!**
