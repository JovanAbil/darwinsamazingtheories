# Parallax Effect — Complete Setup Guide

> **No coding experience needed.** This guide shows you every file and every line
> you need to copy-paste to add the parallax scrolling effect to your BioSphere
> website. Follow the steps in order.

---

## Table of Contents

1. [How It Works](#how-it-works)
2. [File 1 — ParallaxSection.tsx (the engine)](#file-1--parallaxsectiontsx)
3. [File 2 — PageHeader.tsx (page title parallax)](#file-2--pageheadertsx)
4. [File 3 — Home Page (Index.tsx)](#file-3--home-page-indextsx)
5. [File 4 — Page 1 (Page1.tsx)](#file-4--page-1-page1tsx)
6. [File 5 — Page 2 (Page2.tsx)](#file-5--page-2-page2tsx)
7. [File 6 — Page 3 (Page3.tsx)](#file-6--page-3-page3tsx)
8. [File 7 — Page 4 (Page4.tsx)](#file-7--page-4-page4tsx)
9. [File 8 — Page 5 (Page5.tsx)](#file-8--page-5-page5tsx)
10. [Adding Parallax to a NEW Page](#adding-parallax-to-a-new-page)

---

## How It Works

There are **two parallax components**:

| Component | What it does | Used where |
|---|---|---|
| `ParallaxSection` | Creates a "window" with a background image that scrolls at a slower pace. You put content (text, buttons) on top. | Home page hero, Home page "Join the Movement", Page 3 divider |
| `PageHeader` | Same parallax effect but pre-styled with a title + description. Used at the top of every sub-page. | Pages 1, 2, 3, 4, 5 |

Both work the same way: a background image moves slower than the page when you scroll, creating a depth effect.

---

## File 1 — ParallaxSection.tsx

> **Location:** `src/components/ParallaxSection.tsx`
>
> **What:** The reusable parallax "window" component. You only need ONE copy of
> this file — all pages share it.

### Create or replace the ENTIRE file with this:

```tsx
import { useEffect, useRef, type ReactNode } from "react";

interface ParallaxSectionProps {
  imageUrl: string;
  children?: ReactNode;
  height?: string;
  overlay?: boolean;
  /** Background speed factor: 0 = strongest parallax, 1 = no parallax */
  speed?: number;
}

const ParallaxSection = ({
  imageUrl,
  children,
  height = "60vh",
  overlay = true,
  speed = 0.4,
}: ParallaxSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
    let ticking = false;

    const updateParallax = () => {
      const rect = container.getBoundingClientRect();
      const windowH = window.innerHeight;
      // Only animate when visible
      if (rect.bottom < 0 || rect.top > windowH) {
        ticking = false;
        return;
      }

      const maxOffset = rect.height * 0.2;
      const rawOffset = -rect.top * (1 - speed);
      const offset = clamp(rawOffset, -maxOffset, maxOffset);
      image.style.transform = `translate3d(0, ${offset}px, 0) scale(1.08)`;
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    updateParallax();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: height }}
    >
      {/* Parallax image layer — oversized to allow movement */}
      <div
        ref={imageRef}
        className="absolute inset-0 will-change-transform pointer-events-none"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          top: "-30%",
          bottom: "-30%",
        }}
      />
      {overlay && <div className="absolute inset-0 bg-background/35 backdrop-blur-[1px]" />}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

export default ParallaxSection;
```

---

## File 2 — PageHeader.tsx

> **Location:** `src/components/PageHeader.tsx`
>
> **What:** A pre-styled parallax header with title + description. Used at the
> top of Pages 1–5.

### Create or replace the ENTIRE file with this:

```tsx
import { useEffect, useRef, type ReactNode } from "react";

interface PageHeaderProps {
  imageUrl: string;
  title: string;
  description: string;
  children?: ReactNode;
  speed?: number;
}

const PageHeader = ({ imageUrl, title, description, children, speed = 0.4 }: PageHeaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
    let ticking = false;

    const updateParallax = () => {
      const rect = container.getBoundingClientRect();
      const windowH = window.innerHeight;
      if (rect.bottom < 0 || rect.top > windowH) {
        ticking = false;
        return;
      }

      const maxOffset = rect.height * 0.2;
      const rawOffset = -rect.top * (1 - speed);
      const offset = clamp(rawOffset, -maxOffset, maxOffset);
      image.style.transform = `translate3d(0, ${offset}px, 0) scale(1.08)`;
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    updateParallax();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "45vh" }}
    >
      {/* Parallax image layer */}
      <div
        ref={imageRef}
        className="absolute inset-0 will-change-transform pointer-events-none"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          top: "-30%",
          bottom: "-30%",
        }}
      />
      <div className="absolute inset-0 bg-background/35 backdrop-blur-[1px]" />
      <div className="relative z-10 container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 animate-fade-in">
          {title}
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl animate-fade-in">
          {description}
        </p>
        {children}
      </div>
    </div>
  );
};

export default PageHeader;
```

---

## File 3 — Home Page (Index.tsx)

> **Location:** `src/pages/Index.tsx`
>
> **What:** The home page uses `ParallaxSection` in **two** places:
> 1. The hero at the top (behind "BioSphere")
> 2. The "Join the Movement" section at the bottom

### Lines to add / check:

#### 1. Import at the top of the file

Find this area at the top of `Index.tsx` and make sure this line exists:

```tsx
import ParallaxSection from "@/components/ParallaxSection";
```

#### 2. Hero section (top of page)

This wraps around the BioSphere title. Find the `<Layout>` opening tag and put
this right after it:

```tsx
{/* Hero with parallax */}
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

**EDIT:** Change `imageUrl` to your own image (e.g. `/images/hero.jpg`).
**EDIT:** Change `height` to make the hero taller or shorter (e.g. `"60vh"`, `"100vh"`).

#### 3. "Join the Movement" section (bottom of page)

Place this after the Content Blocks section, before `</Layout>`:

```tsx
{/* Second Parallax */}
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

**EDIT:** Change `imageUrl`, heading text, button text, and `href`.

---

## File 4 — Page 1 (Page1.tsx)

> **Location:** `src/pages/Page1.tsx`

### Lines to add / check:

#### 1. Import at the top

```tsx
import PageHeader from "@/components/PageHeader";
```

#### 2. Right after `<Layout>`, add the header:

```tsx
<PageHeader
  imageUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&h=900&fit=crop"
  title="Exploring Nature"
  description="Discover the wonders of the natural world through images, videos, and stories."
/>
```

**EDIT:** Change `imageUrl` to your own image.
**EDIT:** Change `title` and `description`.

---

## File 5 — Page 2 (Page2.tsx)

> **Location:** `src/pages/Page2.tsx`

### Lines to add / check:

#### 1. Import at the top

```tsx
import PageHeader from "@/components/PageHeader";
```

#### 2. Right after `<Layout>`, add the header:

```tsx
<PageHeader
  imageUrl="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&h=900&fit=crop"
  title="Gallery"
  description="A collection of images showcasing the beauty of our natural world."
/>
```

**EDIT:** Change `imageUrl`, `title`, and `description`.

---

## File 6 — Page 3 (Page3.tsx)

> **Location:** `src/pages/Page3.tsx`
>
> Page 3 uses **both** components: `PageHeader` at the top AND a
> `ParallaxSection` as a divider between content rows.

### Lines to add / check:

#### 1. Imports at the top

```tsx
import ParallaxSection from "@/components/ParallaxSection";
import PageHeader from "@/components/PageHeader";
```

#### 2. Page header (right after `<Layout>`)

```tsx
<PageHeader
  imageUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&h=900&fit=crop"
  title="Our Story"
  description="A journey through the landscapes and ideas that inspire us."
/>
```

#### 3. Parallax divider (between content rows)

Place this between two content sections to create a visual break:

```tsx
<ParallaxSection
  imageUrl="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&h=600&fit=crop"
  height="40vh"
>
  <div className="text-center px-6">
    <h2 className="text-3xl font-display font-bold text-foreground mb-2">
      Nature Speaks
    </h2>
    <p className="text-lg text-muted-foreground max-w-xl mx-auto">
      If we listen closely enough, every ecosystem has a story to tell.
    </p>
  </div>
</ParallaxSection>
```

**EDIT:** Change `imageUrl`, heading, and paragraph text.

---

## File 7 — Page 4 (Page4.tsx)

> **Location:** `src/pages/Page4.tsx`

### Lines to add / check:

#### 1. Import at the top

```tsx
import PageHeader from "@/components/PageHeader";
```

#### 2. Right after `<Layout>`, add the header:

```tsx
<PageHeader
  imageUrl="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&h=900&fit=crop"
  title="Key Features"
  description="Highlighting the initiatives and ideas that drive our mission forward."
/>
```

**EDIT:** Change `imageUrl`, `title`, and `description`.

---

## File 8 — Page 5 (Page5.tsx)

> **Location:** `src/pages/Page5.tsx`

### Lines to add / check:

#### 1. Import at the top

```tsx
import PageHeader from "@/components/PageHeader";
```

#### 2. Right after `<Layout>`, add the header:

```tsx
<PageHeader
  imageUrl="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1600&h=900&fit=crop"
  title="The Process"
  description="Follow our journey step by step, from vision to reality."
/>
```

**EDIT:** Change `imageUrl`, `title`, and `description`.

---

## Adding Parallax to a NEW Page

If you create a brand new page (e.g. `Page6.tsx`), here is the **minimum code**
you need to add parallax to it:

### Step 1: Create the page file

Create `src/pages/Page6.tsx` with this template:

```tsx
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";

const Page6 = () => {
  return (
    <Layout>
      {/* Parallax header — EDIT imageUrl, title, description */}
      <PageHeader
        imageUrl="/images/your-header-image.jpg"
        title="Your Page Title"
        description="A short description of what this page is about."
      />

      <div className="container mx-auto px-6 py-16 space-y-16">
        {/* Your content goes here */}
        <ScrollReveal direction="left">
          <h2 className="text-2xl font-display font-bold text-foreground mb-3">
            Section Title
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Your content...
          </p>
        </ScrollReveal>
      </div>
    </Layout>
  );
};

export default Page6;
```

### Step 2: Add the route

Open `src/App.tsx` and add inside `<Routes>`:

```tsx
import Page6 from "./pages/Page6";

<Route path="/page-6" element={<Page6 />} />
```

### Step 3: Add to sidebar

Open `src/data/navigation.ts` and add:

```ts
{ title: "Page 6", href: "/page-6", icon: "FileText" },
```

### Optional: Add a parallax divider inside the page

If you want a full-width parallax "window" between sections (like Page 3 has),
add this import and block anywhere between your content:

```tsx
import ParallaxSection from "@/components/ParallaxSection";

{/* Place between content sections */}
<ParallaxSection
  imageUrl="/images/your-divider-image.jpg"
  height="40vh"
>
  <div className="text-center px-6">
    <h2 className="text-3xl font-display font-bold text-foreground mb-2">
      Your Divider Title
    </h2>
    <p className="text-lg text-muted-foreground max-w-xl mx-auto">
      Your subtitle text here.
    </p>
  </div>
</ParallaxSection>
```

---

## Quick Reference — Props You Can Change

### ParallaxSection props

| Prop | Default | What it does |
|---|---|---|
| `imageUrl` | (required) | The background image URL |
| `height` | `"60vh"` | How tall the section is (e.g. `"40vh"`, `"80vh"`, `"500px"`) |
| `overlay` | `true` | Adds a semi-transparent tint over the image for readability |
| `speed` | `0.4` | How slow the background moves: `0` = very slow, `1` = same speed as page |

### PageHeader props

| Prop | Default | What it does |
|---|---|---|
| `imageUrl` | (required) | The background image URL |
| `title` | (required) | The big heading text |
| `description` | (required) | The paragraph below the heading |
| `speed` | `0.4` | Parallax speed (same as above) |

---

## Summary of All Parallax Instances

| Page | Component Used | Location in Page |
|---|---|---|
| **Home (Index.tsx)** | `ParallaxSection` | Top hero ("BioSphere" title) |
| **Home (Index.tsx)** | `ParallaxSection` | Bottom ("Join the Movement") |
| **Page 1** | `PageHeader` | Top of page (title + description) |
| **Page 2** | `PageHeader` | Top of page (title + description) |
| **Page 3** | `PageHeader` | Top of page (title + description) |
| **Page 3** | `ParallaxSection` | Middle divider ("Nature Speaks") |
| **Page 4** | `PageHeader` | Top of page (title + description) |
| **Page 5** | `PageHeader` | Top of page (title + description) |
