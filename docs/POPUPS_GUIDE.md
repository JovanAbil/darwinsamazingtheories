# Pop-ups Guide — BioSphere

## Using the Built-in Dialog Component

This project includes shadcn's Dialog component. Here's how to add pop-ups to any page.

### Basic Pop-up

```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Inside your page component:
<Dialog>
  <DialogTrigger asChild>
    <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover-pop">
      Open Pop-up
    </button>
  </DialogTrigger>
  <DialogContent className="bg-card border-border">
    <DialogHeader>
      <DialogTitle className="font-display text-foreground">Pop-up Title</DialogTitle>
      <DialogDescription className="text-muted-foreground">
        Your pop-up content goes here. You can add text, images, videos, or any JSX.
      </DialogDescription>
    </DialogHeader>
    <div>
      {/* Add any content here */}
      <p className="text-foreground">More content...</p>
      <img src="/images/photo.jpg" alt="..." className="rounded-lg mt-4" />
    </div>
  </DialogContent>
</Dialog>
```

### Pop-up with Image

```tsx
<Dialog>
  <DialogTrigger asChild>
    <img
      src="/images/thumbnail.jpg"
      alt="Click to enlarge"
      className="rounded-lg cursor-pointer hover-pop w-64"
    />
  </DialogTrigger>
  <DialogContent className="bg-card border-border max-w-3xl">
    <img src="/images/full-size.jpg" alt="Full size" className="rounded-lg w-full" />
  </DialogContent>
</Dialog>
```

### Pop-up with Form

```tsx
<Dialog>
  <DialogTrigger asChild>
    <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover-pop">
      Contact Us
    </button>
  </DialogTrigger>
  <DialogContent className="bg-card border-border">
    <DialogHeader>
      <DialogTitle className="font-display text-foreground">Get in Touch</DialogTitle>
    </DialogHeader>
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Your name"
        className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground"
      />
      <textarea
        placeholder="Your message"
        className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground h-32"
      />
      <button type="submit" className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover-pop">
        Send
      </button>
    </form>
  </DialogContent>
</Dialog>
```

### Pop-up Triggered by Scroll or Timer

```tsx
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const MyPage = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show pop-up after 5 seconds
    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-card border-border">
          <DialogHeader>
            <DialogTitle className="font-display text-foreground">Welcome!</DialogTitle>
          </DialogHeader>
          <p className="text-muted-foreground">This pop-up appeared automatically.</p>
        </DialogContent>
      </Dialog>
      {/* Rest of page */}
    </>
  );
};
```

## Notes

- All pop-ups use the design system colors — they adapt to dark mode
- Add `hover-pop` to trigger elements for the scale-up hover effect
- The Dialog component handles accessibility (focus trap, escape to close, click outside to close)
