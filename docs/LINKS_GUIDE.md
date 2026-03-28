# Links Guide — BioSphere

## Link Styles Available

All links use `<a>` tags for proper navigation (not SPA routing).

### 1. Bio Link (Default Styled Link)
Green underline that thickens on hover. Best for inline text links.

```tsx
<a href="https://example.com" className="bio-link" target="_blank" rel="noopener noreferrer">
  External Link
</a>

<a href="/page-1" className="bio-link">
  Internal Link
</a>
```

### 2. Button Link
Looks like a button. Great for CTAs.

```tsx
{/* Primary (green background) */}
<a href="/page-1" className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover-pop">
  Primary Button
</a>

{/* Secondary (subtle background) */}
<a href="/page-2" className="inline-block bg-secondary text-secondary-foreground px-6 py-2 rounded-lg font-medium hover-pop">
  Secondary Button
</a>

{/* Outline */}
<a href="/page-3" className="inline-block border border-primary text-primary px-6 py-2 rounded-lg font-medium hover-pop">
  Outline Button
</a>
```

### 3. Ghost Link
Subtle color change on hover. Good for navigation.

```tsx
<a href="/credits" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
  Subtle Link
</a>
```

### 4. Card Link
Entire card is clickable with hover pop effect.

```tsx
<a href="/page-1" className="block bg-card border border-border rounded-lg p-6 hover-pop">
  <h3 className="font-display font-bold text-foreground">Card Title</h3>
  <p className="text-muted-foreground">Card description...</p>
</a>
```

### 5. Icon Link
Link with an icon.

```tsx
import { ExternalLink } from "lucide-react";

<a href="https://example.com" className="bio-link inline-flex items-center gap-1" target="_blank" rel="noopener noreferrer">
  Visit Site <ExternalLink className="h-4 w-4" />
</a>
```

## Important Notes

- **Always use `<a>` tags** — not `<Link>` from react-router — for proper page navigation
- **External links**: Add `target="_blank" rel="noopener noreferrer"`
- **Internal links**: Just use the path like `href="/page-1"`
- **Hover pop effect**: Add `hover-pop` class to any link for scale-up on hover
- **All colors come from the design system** — they adapt to dark mode automatically
