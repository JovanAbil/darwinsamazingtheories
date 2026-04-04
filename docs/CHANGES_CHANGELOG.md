# Changes Changelog — Copy-Paste Guide

This file documents every file that was created or modified. Each section shows the **file path** and what changed so you can copy-paste into your other website.

---

## NEW FILES (copy entire file)

### 1. `src/data/claimsData.ts`
**What**: Central claims data (title, description, icon, image, longDescription).
**Action**: Create this file and paste the entire contents.

### 2. `src/data/timelineData.ts`
**What**: Timeline entries for the interactive timeline on the Claims page.
**Action**: Create this file and paste the entire contents.

### 3. `src/data/quizData.ts`
**What**: Quiz questions for the Darwin quiz on the Claims page.
**Action**: Create this file and paste the entire contents.

### 4. `src/pages/ClaimsPage.tsx`
**What**: The dedicated Claims page with card layout, quiz, and timeline.
**Action**: Create this file and paste the entire contents.

### 5. `src/components/InteractiveTimeline.tsx`
**What**: Interactive timeline component with clickable circles and sidebar panel.
**Action**: Create this file and paste the entire contents.

### 6. `src/components/DarwinQuiz.tsx`
**What**: Quiz component with multiple-choice questions.
**Action**: Create this file and paste the entire contents.

### 7. `src/components/PageNavigation.tsx`
**What**: Prev/Home/Next navigation arrows at the bottom of every page.
**Action**: Create this file and paste the entire contents.

### 8. `docs/TIMELINE_GUIDE.md`
**What**: Guide for adding/removing timeline entries.
**Action**: Create this file in your docs folder.

### 9. `docs/QUIZ_GUIDE.md`
**What**: Guide for adding/removing quiz questions.
**Action**: Create this file in your docs folder.

---

## MODIFIED FILES (replace entire file)

### 10. `src/data/navigation.ts`
**What changed**: Added `children` support to `NavItem` interface. Added Claims dropdown with 5 child items. Removed pages 6-7 references (if any).
**Action**: Replace the entire file contents.

### 11. `src/components/AppSidebar.tsx`
**What changed**: Complete rewrite to support collapsible dropdown navigation. Added chevron toggle for dropdown items, nested child rendering with indent.
**Action**: Replace the entire file contents.

### 12. `src/components/Layout.tsx`
**What changed**: Added `PageNavigation` component import and placed it between `<main>` and `<Footer>`.
**Action**: Replace the entire file contents. Key addition:
- Line 2: `import PageNavigation from "./PageNavigation";`
- After `</main>` and before `<Footer />`: `<PageNavigation />`

### 13. `src/App.tsx`
**What changed**: Added Claims page route. Import `ClaimsPage` and add `<Route path="/claims" element={<ClaimsPage />} />`.
**Action**: Replace the entire file contents. Key additions:
- Import: `import ClaimsPage from "./pages/ClaimsPage";`
- Route: `<Route path="/claims" element={<ClaimsPage />} />`

### 14. `src/pages/Index.tsx`
**What changed**: Claims now import from `claimsData.ts` instead of `homeContent.ts`. Cards are full-width alternating left/right with images. Each card links to `/claims#claim-id`.
**Action**: Replace the entire file contents.

### 15. `src/data/homeContent.ts`
**What changed**: Removed `claims` array export (moved to `claimsData.ts`). Only exports `heroContent` and `homeContentBlocks` now.
**Action**: Replace the entire file contents.

---

## SUMMARY OF WHAT EACH FEATURE NEEDS

| Feature | Files Needed |
|---|---|
| Claims dropdown sidebar | `navigation.ts`, `AppSidebar.tsx` |
| Claims page | `ClaimsPage.tsx`, `claimsData.ts` |
| Interactive timeline | `InteractiveTimeline.tsx`, `timelineData.ts` |
| Darwin quiz | `DarwinQuiz.tsx`, `quizData.ts` |
| Full-width claim cards on home | `Index.tsx`, `claimsData.ts` |
| Page nav arrows | `PageNavigation.tsx`, `Layout.tsx` |
| Route setup | `App.tsx` |
