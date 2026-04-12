# Changes Changelog v2.0 — Copy-Paste Guide

This file documents all changes made in this update. Follow each section in order to avoid issues.

---

## NEW FILES (create these and paste entire contents)

### 1. `src/components/PageBottomPopup.tsx`

**What**: A component that shows a specific pop-up when the user scrolls to the bottom of a claim page (e.g., `/page-1`). Each page has its own unique pop-up that fires every time.

**Action**: Create this file at `src/components/PageBottomPopup.tsx` and paste the entire contents from the project.

---

## MODIFIED FILES (exact changes with placement)

---

### 2. `src/data/popupMessages.ts`

**What changed**: Added `pageBottomPopups` — a map of routes to specific pop-up messages that trigger at the bottom of each claim page. Updated comments/docs.

**REPLACE the entire file** with the version from the project. Key additions:

- New export: `pageBottomPopups` — a `Record<string, PopupMessage>` mapping routes like `"/page-1"` through `"/page-5"` to specific pop-up messages.
- The existing `popupMessages` array is unchanged.

If you prefer to patch manually instead of replacing the whole file:

**ADD this export** at the bottom of the file, after the `popupMessages` array:

```ts
/**
 * PAGE-BOTTOM POP-UPS
 * Map a route (e.g. "/page-1") to a popup that fires when the user
 * scrolls to the bottom of that page. Shows every time without fail.
 */
export const pageBottomPopups: Record<string, PopupMessage> = {
  "/page-1": {
    id: "bottom-claim-1",
    title: "🌱 You Finished Claim 1!",
    content: `Congrats on making it through! If natural selection were a class, you'd be the <strong>fittest</strong> student. Darwin would be proud… or maybe confused — hard to tell with that beard.<br/><br/><em>Fun fact: Darwin once spent 8 years studying barnacles. Eight. Years. And you thought this page was long.</em>`,
  },
  "/page-2": {
    id: "bottom-claim-2",
    title: "🌳 Claim 2 Complete!",
    content: `You've reached the bottom — just like how biodiversity reaches every corner of the planet!<br/><br/><em>Did you know there are more species of beetles than any other order of insects? Even Darwin said, "God has an inordinate fondness for beetles."</em>`,
  },
  "/page-3": {
    id: "bottom-claim-3",
    title: "☀️ Claim 3 Done!",
    content: `You made it! That took about as long as it takes for a new species to emerge… okay maybe not <strong>that</strong> long.<br/><br/><em>Speciation can take thousands to millions of years. You finished this page in minutes. Clearly you're evolving faster than the rest of us.</em>`,
  },
  "/page-4": {
    id: "bottom-claim-4",
    title: "🏔️ Claim 4 Conquered!",
    content: `You've scaled the heights of Claim 4! Much like a mountain goat adapting to rocky terrain, you've adapted to our content.<br/><br/><em>Conservation tip: The best way to protect a species is to protect its habitat. The best way to protect your grade is to keep reading.</em>`,
  },
  "/page-5": {
    id: "bottom-claim-5",
    title: "👥 All Claims Complete!",
    content: `You did it — every single claim page! If this were a <strong>fitness landscape</strong>, you'd be sitting right at the peak.<br/><br/><em>Now go tell your friends. Spread the knowledge like an invasive species — but, you know, in a good way.</em>`,
  },
};
```

---

### 3. `src/components/RandomPopup.tsx`

**What changed**: Added "no-repeat" logic so the same random pop-up never shows twice in a row.

**Option A — Replace the entire file** with the version from the project.

**Option B — Patch manually** (3 changes):

**CHANGE 1**: Update the import line at the top:

```ts
// BEFORE:
import { useState, useEffect, useCallback } from "react";

// AFTER:
import { useState, useEffect, useCallback, useRef } from "react";
```

**CHANGE 2**: Inside the component, add a ref after the state declarations:

```ts
const [currentMessage, setCurrentMessage] = useState(popupMessages[0]);
const lastIdRef = useRef<string | null>(null);   // ← ADD THIS LINE
```

**CHANGE 3**: Replace the `showRandomPopup` callback body:

```ts
// BEFORE:
const showRandomPopup = useCallback(() => {
  if (popupMessages.length === 0) return;
  const msg = popupMessages[Math.floor(Math.random() * popupMessages.length)];
  setCurrentMessage(msg);
  setOpen(true);
}, []);

// AFTER:
const showRandomPopup = useCallback(() => {
  if (popupMessages.length === 0) return;

  // Pick a random message that isn't the same as the last one shown
  let msg = popupMessages[Math.floor(Math.random() * popupMessages.length)];
  if (popupMessages.length > 1) {
    while (msg.id === lastIdRef.current) {
      msg = popupMessages[Math.floor(Math.random() * popupMessages.length)];
    }
  }

  lastIdRef.current = msg.id;
  setCurrentMessage(msg);
  setOpen(true);
}, []);
```

---

### 4. `src/components/Layout.tsx`

**What changed**: Added import and JSX for `PageBottomPopup`.

**ADD this import** at the top (after the `RandomPopup` import):

```ts
import PageBottomPopup from "./PageBottomPopup";
```

**ADD this line** in the JSX, right after `<RandomPopup />` and before `</SidebarProvider>`:

```tsx
      <PageBottomPopup />
```

Final JSX structure should look like:

```tsx
      <CounterDev />
      <RandomPopup />
      <PageBottomPopup />       {/* ← ADD */}
    </SidebarProvider>
```

---

## SUMMARY TABLE

| Change | Files |
|---|---|
| No-repeat random pop-ups | `RandomPopup.tsx` |
| Page-bottom pop-ups for claims | `PageBottomPopup.tsx` (new), `popupMessages.ts` |
| Layout wiring | `Layout.tsx` |

---

## ORDER OF OPERATIONS

1. **Create** `src/components/PageBottomPopup.tsx` — paste entire file
2. **Update** `src/data/popupMessages.ts` — add `pageBottomPopups` export at the bottom
3. **Update** `src/components/RandomPopup.tsx` — add `useRef` import, `lastIdRef`, and no-repeat logic
4. **Update** `src/components/Layout.tsx` — add import + `<PageBottomPopup />` in JSX

That's it — no other files need changes for this update.

---

## HOW TO EDIT PAGE-BOTTOM POP-UPS

Open `src/data/popupMessages.ts` and edit the `pageBottomPopups` object:

- **Change a message**: Edit the `title` or `content` for any route key
- **Add a new page**: Add a new key like `"/page-6"` with an `{ id, title, content }` object
- **Remove a page pop-up**: Delete the route key from the object
- **Formatting**: Same HTML rules as random pop-ups — `<strong>`, `<em>`, `<br/>`

The pop-up triggers every time the user scrolls within 150px of the page bottom. It resets when they navigate to a different page, so returning to the same page will trigger it again.
