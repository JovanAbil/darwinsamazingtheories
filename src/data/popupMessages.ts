/**
 * RANDOM POP-UP MESSAGES
 * =====================
 * These pop-ups appear randomly every 5–10 minutes while browsing.
 *
 * HOW TO ADD A NEW POP-UP:
 *   1. Copy an existing object in the array below
 *   2. Give it a unique `id`
 *   3. Set `title` (the heading shown in the pop-up)
 *   4. Set `content` — this is JSX-compatible HTML as a string
 *      • Use <strong> or <b> to bold words
 *      • Use <em> or <i> for italics
 *      • Use <br/> for line breaks
 *   5. Save the file — the pop-up will automatically be included
 *
 * HOW TO REMOVE A POP-UP:
 *   Delete the entire { id, title, content } object from the array.
 *
 * TIMING:
 *   Pop-ups appear every 5–10 minutes (random interval).
 *   Change MIN_DELAY_MS and MAX_DELAY_MS in RandomPopup.tsx to adjust.
 */

export interface PopupMessage {
  id: string;
  title: string;
  /** HTML string — use <strong> for bold, <em> for italic, <br/> for line breaks */
  content: string;
}

/**
 * PAGE-BOTTOM POP-UPS
 * Map a route (e.g. "/page-1") to a popup that fires when the user
 * scrolls to the bottom of that page. Shows every time without fail.
 */
export const pageBottomPopups: Record<string, PopupMessage> = {
  "/page-1": {
    id: "darkmode",
    title: "Dark Mode",
    content: `Please set the website to dark mode as it was <strong>MADE</strong> for dark mode by checking the 'sun/moon' icon at the bottom of the navigation tab on the left side!`,
  },
  "/page-2": {
    id: "luca-joke",
    title: "LUCA - Claim 2",
    content: `<strong>Lucas:</strong> What do you get when you have multiple LUCAs<br/><strong>Jovan:</strong> You shouldn’t because there needs to be a last one, there could’ve been a community of the same species if that is what you're referring to.<br/><strong>Lucas:</strong> No, I was going to say me because <strong>LUCAs</strong> like <em>Lucas</em>, but it's not funny anymore.<br/>`,
  },
};

export const popupMessages: PopupMessage[] = [
  {
    id: "natural-selection-joke",
    title: "A corny joke to get a good grade",
    content: `Just like a better adapted organism to its environment, we have adapted to the requirements for our project. That 100% almost seems like the <strong>natural selection</strong> to make at this point, doesn't it?<br/><br/><em>*Note: Joke crafted at 12:15 am, not guaranteed to make the viewer laugh, chuckle, or feel happy in any way. If the joke didn't land, kindly erase it from your memory and <strong>naturally select</strong> a better interactive aspect on our site because this one clearly isn't <strong>fit</strong> enough to make you laugh (see what I did there).</em>`,
  },

  /* --- ADD MORE POP-UPS BELOW — copy this template: ---
  {
    id: "my-unique-id",
    title: "Pop-up Title Here",
    content: "Your message here. Use <strong>bold</strong> and <em>italic</em> as needed.",
  },
  */
];
