# BioSphere — Management Guide

## Table of Contents
1. [Project Structure](#project-structure)
2. [Adding & Removing Text](#adding--removing-text)
3. [Adding & Removing Images](#adding--removing-images)
4. [Adding & Removing Videos](#adding--removing-videos)
5. [Changing Height & Width](#changing-height--width)
6. [Wrapping Text & Images](#wrapping-text--images)
7. [Adding Clickable Links](#adding-clickable-links)
8. [Adding Pop-ups to Pages](#adding-pop-ups-to-pages)
9. [Adding & Removing Pages](#adding--removing-pages)
10. [Moving from Lovable to GitHub](#moving-from-lovable-to-github)
11. [Running the Website Locally](#running-the-website-locally)
12. [Counter.dev Analytics](#counterdev-analytics)
13. [Dark Mode](#dark-mode)

---

## Project Structure

```
src/
├── data/                    ← EDIT THESE for content changes
│   ├── siteConfig.ts        ← Site name, author, counter.dev ID
│   ├── navigation.ts        ← Sidebar links
│   ├── homeContent.ts       ← Home page content blocks & claims
│   └── footerContent.ts     ← Footer info
├── components/              ← Reusable components
│   ├── Layout.tsx           ← Main layout wrapper
│   ├── AppSidebar.tsx       ← Sidebar navigation
│   ├── Footer.tsx           ← Site footer
│   ├── ScrollReveal.tsx     ← Scroll animation wrapper
│   ├── ContentBlock.tsx     ← Renders text/image/video blocks
│   ├── ParallaxSection.tsx  ← Parallax background sections
│   ├── ThemeToggle.tsx      ← Dark mode toggle
│   └── CounterDev.tsx       ← Analytics
├── pages/                   ← Page components
│   ├── Index.tsx            ← Home page
│   ├── Credits.tsx          ← Credits page
│   ├── Page1-5.tsx          ← Template pages (ready to edit)
│   └── NotFound.tsx         ← 404 page
public/
├── images/                  ← Put your images here
└── videos/                  ← Put your videos here
docs/
├── MANAGEMENT.md            ← This file
├── LINKS_GUIDE.md           ← How to add styled links
└── POPUPS_GUIDE.md          ← How to add pop-ups
```

---

## Adding & Removing Text

### Via Data File (Recommended for Home page)
Edit `src/data/homeContent.ts`. Add a new block to the `homeContentBlocks` array:

```ts
{
  id: "block-new",
  type: "text",
  direction: "left",        // "left", "right", or "full"
  heading: "My Heading",
  content: "Your text here.",
}
```

**Remove text**: Delete the block object from the array.

### In Any Page (Pages 1–5)
Each page file has commented-out examples. Uncomment and edit:

```tsx
<ScrollReveal direction="left">
  <h2 className="text-2xl font-display font-bold text-foreground mb-3">My Title</h2>
  <p className="text-muted-foreground">My paragraph text.</p>
</ScrollReveal>
```

---

## Adding & Removing Images

### Local Images
1. Place image in `public/images/` folder
2. Reference as `/images/your-image.jpg`

### With Scroll Animation
Wrap in ScrollReveal for slide-in or fade effects:

```tsx
{/* Slides from left */}
<ScrollReveal direction="left">
  <img src="/images/photo.jpg" alt="Description" className="rounded-lg hover-pop w-full" style={{ height: "400px", objectFit: "cover" }} />
</ScrollReveal>

{/* Fades in (best for full-width images) */}
<ScrollReveal direction="full">
  <img src="/images/wide-photo.jpg" alt="Description" className="w-full rounded-lg hover-pop" style={{ height: "500px", objectFit: "cover" }} />
</ScrollReveal>
```

**Remove**: Delete the `<ScrollReveal>` block containing the `<img>`.

---

## Adding & Removing Videos

### Local Videos
1. Place video in `public/videos/` folder
2. Reference as `/videos/your-video.mp4`

```tsx
<ScrollReveal direction="right">
  <video src="/videos/my-video.mp4" controls className="rounded-lg w-full hover-pop" style={{ maxHeight: "500px" }}>
    Your browser does not support the video tag.
  </video>
</ScrollReveal>
```

### YouTube / Embedded Videos
```tsx
<ScrollReveal direction="full">
  <iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    className="w-full rounded-lg hover-pop"
    style={{ height: "400px" }}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media"
    allowFullScreen
  />
</ScrollReveal>
```

**Remove**: Delete the `<ScrollReveal>` block.

---

## Changing Height & Width

### Inline Styles
```tsx
<img style={{ width: "600px", height: "300px", objectFit: "cover" }} />
```

### Tailwind Classes
```tsx
<img className="w-full h-64" />  {/* h-64 = 256px */}
```

### Tailwind Size Reference
- `w-full` = 100%, `w-1/2` = 50%, `w-96` = 384px
- `h-auto`, `h-64` = 256px, `h-96` = 384px, `h-screen` = 100vh

---

## Wrapping Text & Images

### Side by Side (with scroll animations)
```tsx
<div className="flex flex-col md:flex-row gap-8 items-center">
  <ScrollReveal direction="left" className="flex-1">
    <p className="text-muted-foreground">Your text here...</p>
  </ScrollReveal>
  <ScrollReveal direction="right" className="flex-1">
    <img src="/images/photo.jpg" alt="..." className="rounded-lg hover-pop" />
  </ScrollReveal>
</div>
```

### Text Wrapping Around Image
```tsx
<div>
  <img src="/images/photo.jpg" alt="..." className="float-left mr-6 mb-4 w-64 rounded-lg hover-pop" />
  <p className="text-muted-foreground">Your text wraps around the image...</p>
</div>
```

---

## Adding Clickable Links

See `docs/LINKS_GUIDE.md` for full details. Quick reference:

```tsx
{/* Bio-styled link (green underline) */}
<a href="https://example.com" className="bio-link" target="_blank" rel="noopener noreferrer">
  Click here
</a>

{/* Button-styled link */}
<a href="/page-1" className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg hover-pop">
  Go to Page 1
</a>
```

---

## Adding Pop-ups to Pages

See `docs/POPUPS_GUIDE.md` for full details. Uses the built-in Dialog component.

---

## Adding & Removing Pages

### Add a New Page
1. **Create the file** — Copy any existing page template (e.g., `src/pages/Page1.tsx`) and rename it:
   ```tsx
   // src/pages/MyNewPage.tsx
   import Layout from "@/components/Layout";
   import ScrollReveal from "@/components/ScrollReveal";

   const MyNewPage = () => (
     <Layout>
       <div className="container mx-auto px-6 py-20 space-y-16">
         <ScrollReveal direction="full">
           <h1 className="text-4xl font-display font-bold text-foreground">My New Page</h1>
         </ScrollReveal>
       </div>
     </Layout>
   );
   export default MyNewPage;
   ```

2. **Add the route** in `src/App.tsx`:
   ```tsx
   import MyNewPage from "./pages/MyNewPage";
   // Inside <Routes>:
   <Route path="/my-new-page" element={<MyNewPage />} />
   ```

3. **Add to sidebar** in `src/data/navigation.ts`:
   ```ts
   { title: "My New Page", href: "/my-new-page", icon: "FileText" },
   ```

### Remove a Page
1. Delete the page file from `src/pages/`
2. Remove its `<Route>` from `src/App.tsx`
3. Remove its entry from `src/data/navigation.ts`

---

## Moving from Lovable to GitHub

1. **In Lovable**: Go to Project Settings → GitHub → Connect project
2. **Authorize**: Allow Lovable's GitHub App access
3. **Create repo**: Click "Create Repository" — your code pushes automatically
4. **Two-way sync**: Changes in Lovable push to GitHub; pushes to GitHub sync to Lovable

### After Connecting
- Clone the repo: `git clone https://github.com/your-user/your-repo.git`
- Make changes locally, push to GitHub → Lovable updates
- Or continue editing in Lovable → GitHub updates

---

## Running the Website Locally

### Prerequisites
- Node.js 18+ installed
- npm or bun installed

### Steps
```bash
# 1. Clone from GitHub
git clone https://github.com/your-user/your-repo.git
cd your-repo

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open in browser → http://localhost:5173
```

### Build for Production
```bash
npm run build       # Creates optimized build in /dist
npm run preview     # Preview production build locally
```

---

## Counter.dev Analytics

1. Go to [counter.dev](https://counter.dev) and sign up
2. Get your site ID
3. Edit `src/data/siteConfig.ts`:
   ```ts
   counterDevId: "your-id-here",
   ```
4. Analytics will load automatically on all pages

---

## Dark Mode

- Toggle is in the sidebar footer (moon/sun icon)
- Persists via localStorage
- All colors adapt automatically via CSS variables
- To customize dark mode colors, edit the `.dark` section in `src/index.css`
