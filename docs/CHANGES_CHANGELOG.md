# Changes Changelog — Copy-Paste Guide

This file documents **every change** made to existing files, with the exact code to copy-paste and where to place it. New files are listed first — just create them and paste the entire contents.

---

## NEW FILES (create these files and paste entire contents)

### 1. `src/data/claimsData.ts`
**What**: Central claims data (title, description, icon, image, longDescription).
**Action**: Create this file at `src/data/claimsData.ts` and paste the entire contents from the project.

### 2. `src/data/timelineData.ts`
**What**: Timeline entries for the interactive timeline.
**Action**: Create this file and paste the entire contents.

### 3. `src/data/quizData.ts`
**What**: Quiz questions for the Darwin quiz.
**Action**: Create this file and paste the entire contents.

### 4. `src/data/popupMessages.ts`
**What**: Random popup messages shown every 5–10 minutes.
**Action**: Create this file and paste the entire contents.

### 5. `src/components/InteractiveTimeline.tsx`
**What**: Interactive timeline with clickable circles and sidebar panel.
**Action**: Create this file and paste the entire contents.

### 6. `src/components/DarwinQuiz.tsx`
**What**: Quiz component with multiple-choice questions.
**Action**: Create this file and paste the entire contents.

### 7. `src/components/PageNavigation.tsx`
**What**: Prev/Home/Next navigation arrows at the bottom of every page.
**Action**: Create this file and paste the entire contents.

### 8. `src/components/RandomPopup.tsx`
**What**: Random popup dialog triggered by timer or comma key.
**Action**: Create this file and paste the entire contents.

### 9. `src/components/ParallaxSection.tsx`
**What**: Parallax background image section with scroll effect.
**Action**: Create this file and paste the entire contents.

### 10. `src/components/PageHeader.tsx`
**What**: Reusable page header with parallax background image.
**Action**: Create this file and paste the entire contents.

### 11. `src/pages/ClaimsPage.tsx`
**What**: The dedicated Claims page (used if you want a separate claims page — currently not routed but available).
**Action**: Create this file if you want it available for future use.

### 12. Documentation files
Create these in your `docs/` folder:
- `docs/TIMELINE_GUIDE.md`
- `docs/QUIZ_GUIDE.md`
- `docs/POPUPS_RANDOM_GUIDE.md`
- `docs/PARALLAX_GUIDE.md`

---

## MODIFIED FILES (exact snippets with placement)

Each section below shows the **exact code to add/change** and **where** in the original unmodified file.

---

### 13. `src/data/navigation.ts`

**What changed**: Pages 1–5 are now children of a "Claims" dropdown. Standalone Page 1–5 entries removed.

**REPLACE** the entire `navigationItems` array (starting at `export const navigationItems`) with:

```ts
export const navigationItems: NavItem[] = [
  { title: "Home", href: "/", icon: "Home", description: "Main landing page" },
  {
    title: "Claims",
    href: "/page-1",
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

**ALSO** add `children` to the `NavItem` interface if not already present. The interface should be:

```ts
export interface NavItem {
  title: string;
  href: string;
  icon: string;
  description?: string;
  children?: NavItem[];
}
```

---

### 14. `src/components/AppSidebar.tsx`

**What changed**: Complete rewrite to support collapsible dropdown navigation with chevron toggles and nested children.

**Action**: **Replace the entire file** with the version from the project. This is a full rewrite because the dropdown logic is deeply integrated — patching individual lines would be error-prone.

---

### 15. `src/components/Layout.tsx`

**What changed**: Added 3 new imports and 2 new components in the JSX.

**ADD these imports** at the top of the file (after the existing imports):

```ts
import PageNavigation from "./PageNavigation";
import CounterDev from "./CounterDev";
import RandomPopup from "./RandomPopup";
```

**ADD these two lines** inside the JSX, right before the closing `</SidebarProvider>` tag:

```tsx
      <CounterDev />
      <RandomPopup />
```

**ADD this line** between `</main>` and `<Footer />`:

```tsx
          <PageNavigation />
```

So the JSX structure becomes:
```tsx
          <main className="flex-1">{children}</main>
          <PageNavigation />       {/* ← ADD THIS LINE */}
          <Footer />
```

---

### 16. `src/App.tsx`

**What changed**: Removed the `/claims` route (Pages 1–5 are the claims now).

**REMOVE** this import line:
```ts
import ClaimsPage from "./pages/ClaimsPage";
```

**REMOVE** this route line:
```tsx
<Route path="/claims" element={<ClaimsPage />} />
```

---

### 17. `src/pages/Index.tsx`

**What changed**: Claims section now links to individual pages instead of anchors. Added parallax sections.

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

**In the claims cards**, change the link from `/claims#${claim.id}` to page links:
```tsx
{/* OLD: */}
<a href={`/claims#${claim.id}`} className="block">

{/* NEW: */}
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
    <a
      href="/credits"
      className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover-pop"
    >
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

**What changed**: Each page now uses `PageHeader` with a parallax background image instead of a plain header.

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
| Claims dropdown in sidebar | `navigation.ts`, `AppSidebar.tsx` |
| Page navigation arrows | `PageNavigation.tsx`, `Layout.tsx` |
| Random popups | `RandomPopup.tsx`, `popupMessages.ts`, `Layout.tsx` |
| Parallax backgrounds | `ParallaxSection.tsx`, `PageHeader.tsx`, `Index.tsx`, `Page1-5.tsx` |
| Interactive timeline | `InteractiveTimeline.tsx`, `timelineData.ts` |
| Darwin quiz | `DarwinQuiz.tsx`, `quizData.ts` |
| Home page claim cards → page links | `Index.tsx`, `claimsData.ts` |
| Remove /claims route | `App.tsx` |

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
