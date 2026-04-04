# Timeline Guide

## How the Interactive Timeline Works

The timeline at the bottom of the **Claims page** (`/claims`) shows clickable circles along a vertical line. Clicking a circle opens a sidebar panel with detailed content (text, images, or videos).

## How to Add a Timeline Entry

Open `src/data/timelineData.ts` and add an object to the `timelineEntries` array:

```ts
{
  id: "event-5",              // Unique ID
  year: "2030",               // Label shown on the timeline
  heading: "Your Title",      // Title in sidebar panel
  content: "Description.",    // Text paragraph (optional)
  image: "https://...",       // Image URL (optional)
  imageAlt: "Description",   // Alt text for image (optional)
  videoUrl: "https://www.youtube.com/embed/VIDEO_ID", // YouTube (optional)
  videoType: "youtube",       // "youtube" or "local"
}
```

### Adding an Image
Set the `image` field to any URL or local path (`/images/photo.jpg`).

### Adding a Video
- **YouTube**: Set `videoUrl` to `https://www.youtube.com/embed/VIDEO_ID` and `videoType: "youtube"`
- **Local**: Set `videoUrl` to `/videos/your-file.mp4` and `videoType: "local"`

### Adding Text
Set the `content` field to your paragraph text.

### Removing an Entry
Delete the entire `{ ... }` object from the array.

### Reordering
Move objects up or down in the array — order = display order.
