# Changes Changelog — Copy-Paste Guide

This file documents **every change** made to existing files, with the exact code to copy-paste and where to place it. New files are listed first — just create them and paste the entire contents.

---

## NEW FILES (create these files and paste entire contents)

### 1. `src/data/claimsData.ts`
**What**: Central claims data (title, description, icon, image, longDescription).
**Action**: Create this file at `src/data/claimsData.ts` and paste the entire contents from the project.

### 2. `src/data/timelineData.ts`
**What**: Timeline entries for the interactive timeline on the Claims page.
**Action**: Create this file and paste the entire contents.

### 3. `src/data/quizData.ts`
**What**: Quiz questions for the Darwin quiz on the Claims page.
**Action**: Create this file and paste the entire contents.

### 4. `src/data/popupMessages.ts`
**What**: Random popup messages shown every 5–10 minutes.
**Action**: Create this file and paste the entire contents.

### 5. `src/pages/ClaimsPage.tsx`
**What**: The dedicated Claims page with full-width claim cards, Darwin quiz, and interactive timeline. This is the page the "Claims" sidebar link goes to.
**Action**: Create this file and paste the entire contents.

### 6. `src/components/InteractiveTimeline.tsx`
**What**: Interactive timeline with clickable circles on a vertical line. Clicking a circle opens a sidebar panel showing text, images, or videos.
**Action**: Create this file and paste the entire contents.

**How to add timeline entries**: Edit `src/data/timelineData.ts`. Each entry has:
- `id` — unique string
- `year` — label shown on the timeline (e.g. "1831")
- `heading` — title shown next to the dot and in the sidebar
- `content` — paragraph text shown in the sidebar
- `image` / `imageAlt` — optional image in the sidebar
- `videoUrl` — optional YouTube embed URL or local video path
- `videoType` — `"youtube"` or `"local"`

See `docs/TIMELINE_GUIDE.md` for full instructions.

### 7. `src/components/DarwinQuiz.tsx`
**What**: Quiz component with multiple-choice questions that poke fun at Darwin.
**Action**: Create this file and paste the entire contents.

**How to add quiz questions**: Edit `src/data/quizData.ts`. Each question has:
- `id` — unique string
- `question` — the question text
- `image` — optional image URL
- `options` — array of `{ text, isCorrect }` objects
- `explanation` — text shown after answering

See `docs/QUIZ_GUIDE.md` for full instructions.

### 8. `src/components/PageNavigation.tsx`
**What**: Prev/Home/Next navigation arrows at the bottom of every page.
**Action**: Create this file and paste the entire contents.

### 9. `src/components/RandomPopup.tsx`
**What**: Random popup dialog triggered by timer (5–10 min) or pressing the comma key.
**Action**: Create this file and paste the entire contents.

### 10. `src/components/ParallaxSection.tsx`
**What**: Parallax background image section with scroll effect.
**Action**: Create this file and paste the entire contents.

### 11. `src/components/PageHeader.tsx`
**What**: Reusable page header with parallax background image.
**Action**: Create this file and paste the entire contents.

### 12. Documentation files
Create these in your `docs/` folder:
- `docs/TIMELINE_GUIDE.md`
- `docs/QUIZ_GUIDE.md`
- `docs/POPUPS_RANDOM_GUIDE.md`
- `docs/PARALLAX_GUIDE.md`

---

## MODIFIED FILES (exact snippets with placement)

---

### 13. `src/data/navigation.ts`

**What changed**: Added `children` support to `NavItem` interface. "Claims" is its own page at `/claims` with Pages 1–5 as dropdown children. Standalone Page 1–5 entries removed.

**REPLACE** the `NavItem` interface with:

```ts
export interface NavItem {
  title: string;
  href: string;
  icon: string;
  description?: string;
  children?: NavItem[];
}
```

**REPLACE** the entire `navigationItems` array with:

```ts
export const navigationItems: NavItem[] = [
  { title: "Home", href: "/", icon: "Home", description: "Main landing page" },
  {
    title: "Claims",
    href: "/claims",
    icon: "Shield",
    description: "Our core claims",
    children: [
      { title: "Sustainable Living", href: "/page-1", icon: "Leaf" },
      { title: "Biodiversity", href: "/page-2", icon: "Trees" },
      { title: "Clean Energy", href: "/page-3", icon: "Sun" },
      { title: "Conservation", href: "/page-4", icon: "Mountain" },
      { title: "Community", href: "/page-5", icon: "Users" },
    ],
  },
  { title: "Credits", href: "/credits", icon: "Heart", description: "Credits and attributions" },
];
```

---

### 14. `src/components/AppSidebar.tsx`

**What changed**: Complete rewrite to support collapsible dropdown navigation with chevron toggles and nested children.

**Action**: **Replace the entire file** with the version from the project. This is a full rewrite — patching individual lines would be error-prone.

---

### 15. `src/components/Layout.tsx`

**What changed**: Added 3 new imports and 2 new components in the JSX.

**ADD these imports** at the top of the file (after the existing imports):

```ts
import PageNavigation from "./PageNavigation";
import CounterDev from "./CounterDev";
import RandomPopup from "./RandomPopup";
```

**ADD this line** between `</main>` and `<Footer />`:

```tsx
          <PageNavigation />
```

**ADD these two lines** inside the JSX, right before the closing `</SidebarProvider>` tag:

```tsx
      <CounterDev />
      <RandomPopup />
```

Final JSX structure:
```tsx
          <main className="flex-1">{children}</main>
          <PageNavigation />       {/* ← ADD */}
          <Footer />
        </div>
      </div>
      <CounterDev />               {/* ← ADD */}
      <RandomPopup />              {/* ← ADD */}
    </SidebarProvider>
```

---

### 16. `src/App.tsx`

**What changed**: Added ClaimsPage import and route.

**ADD this import** (with the other page imports):
```ts
import ClaimsPage from "./pages/ClaimsPage";
```

**ADD this route** inside `<Routes>`, after the home route:
```tsx
<Route path="/claims" element={<ClaimsPage />} />
```

---

### 17. `src/pages/Index.tsx`

**What changed**: Claims section links to individual pages. Added parallax sections.

**ADD these imports** at the top:
```ts
import { Leaf, Trees, Sun, Mountain, Users } from "lucide-react";
import ParallaxSection from "@/components/ParallaxSection";
import { claims } from "@/data/claimsData";
```

**ADD this icon map** before the component function:
```ts
const claimIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Leaf, Trees, Sun, Mountain, Users,
};
```

**REPLACE** the hero section with a `ParallaxSection` wrapper:
```tsx
<ParallaxSection
  imageUrl="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&h=900&fit=crop"
  height="80vh"
>
  <div className="text-center px-6">
    <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-4 animate-fade-in">
      {heroContent.heading}
    </h1>
    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
      {heroContent.subheading}
    </p>
    <a
      href={heroContent.ctaLink}
      className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover-pop text-lg"
    >
      {heroContent.ctaText}
    </a>
  </div>
</ParallaxSection>
```

**In the claims cards**, each card links to its page:
```tsx
<a href={`/page-${i + 1}`} className="block">
```

**ADD a second parallax section** at the bottom (before closing `</Layout>`):
```tsx
<ParallaxSection
  imageUrl="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&h=900&fit=crop"
  height="50vh"
>
  <div className="text-center px-6">
    <h2 className="text-4xl font-display font-bold text-foreground mb-4">
      Join the Movement
    </h2>
    <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">
      Together we can make a difference for our planet.
    </p>
    <a href="/credits" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover-pop">
      Get Involved
    </a>
  </div>
</ParallaxSection>
```

---

### 18. `src/data/homeContent.ts`

**What changed**: Removed the `claims` array (moved to `claimsData.ts`).

If your version has a `claims` export in this file, **delete** the entire `claims` array. Only `heroContent` and `homeContentBlocks` should remain.

---

### 19. All Page files (`src/pages/Page1.tsx` through `Page5.tsx`)

**What changed**: Each page now uses `PageHeader` with a parallax background image.

**ADD this import** at the top of each page:
```ts
import PageHeader from "@/components/PageHeader";
```

**ADD a `PageHeader`** as the first child inside `<Layout>`:
```tsx
<PageHeader
  imageUrl="YOUR_IMAGE_URL_HERE"
  title="Your Page Title"
  description="Your page description."
/>
```

Each page uses a different image — check the current project files for the specific URLs used per page.

---

## SUMMARY TABLE

| Change | Files |
|---|---|
| Claims page (quiz + timeline + cards) | `ClaimsPage.tsx`, `claimsData.ts` |
| Claims dropdown in sidebar | `navigation.ts`, `AppSidebar.tsx` |
| Interactive timeline | `InteractiveTimeline.tsx`, `timelineData.ts` |
| Darwin quiz | `DarwinQuiz.tsx`, `quizData.ts` |
| Page navigation arrows | `PageNavigation.tsx`, `Layout.tsx` |
| Random popups | `RandomPopup.tsx`, `popupMessages.ts`, `Layout.tsx` |
| Parallax backgrounds | `ParallaxSection.tsx`, `PageHeader.tsx`, `Index.tsx`, `Page1-5.tsx` |
| Home page claim cards → page links | `Index.tsx`, `claimsData.ts` |
| Claims route | `App.tsx` |

---

## HOW TO ADD MORE PAGES

1. Create a new page file in `src/pages/` (e.g., `Page6.tsx`)
2. Add a route in `src/App.tsx`:
   ```tsx
   import Page6 from "./pages/Page6";
   // Inside <Routes>:
   <Route path="/page-6" element={<Page6 />} />
   ```
3. Add it to `src/data/navigation.ts` — either as a standalone item or as a child under Claims:
   ```ts
   { title: "New Topic", href: "/page-6", icon: "Leaf" },
   ```
4. The PageNavigation arrows will automatically pick up the new page from the navigation array.

---

## PAGE NAVIGATION BUTTONS (Bottom of every page)

**File**: `src/components/PageNavigation.tsx`
**Action**: Create this file and paste the entire contents from the project.

**What it does**: Shows Previous / Home / Next buttons at the bottom of every page. Previous and Next are styled as rounded cards with labels; the Home button is a circular icon.

**Integration** (already done in `Layout.tsx` — see section 15 above):
Place `<PageNavigation />` between `</main>` and `<Footer />` in `src/components/Layout.tsx`.

The component auto-detects the current page from the URL and finds neighbors using the `navigationItems` array in `src/data/navigation.ts`. No props needed — just add/remove pages in the navigation array and the buttons update automatically.
