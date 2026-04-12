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

export const popupMessages: PopupMessage[] = [
  {
    id: "natural-selection-joke",
    title: "A corny joke to get a good grade",
    content: `Just like a better adapted organism to its environment, we have adapted to the requirements for our project. That 100% almost seems like the <strong>natural selection</strong> to make at this point, doesn't it?<br/><br/><em>*Note: Joke crafted at 12:15 am, not guaranteed to make the viewer laugh, chuckle, or feel happy in any way. If the joke didn't land, kindly erase it from your memory and <strong>naturally select</strong> a better interactive aspect on our site because this one clearly isn't <strong>fit</strong> enough to make you laugh (see what I did there).</em>`,
  },
  {
    id: "luca-joke",
    title: "LUCA - Claim 2",
    content: `<strong>Lucas:</strong> What do you get when you have multiple LUCAs<br/><strong>Jovan:</strong> You shouldn’t because there needs to be a last one, there could’ve been a community of the same species if that is what you're referring to.<br/><strong>Lucas:</strong> No, I was going to say me because <strong>LUCAs</strong> like <em>Lucas</em>, but it's not funny anymore.<br/>`,
  },

  /* --- ADD MORE POP-UPS BELOW — copy this template: ---
  {
    id: "my-unique-id",
    title: "Pop-up Title Here",
    content: "Your message here. Use <strong>bold</strong> and <em>italic</em> as needed.",
  },
  */
];
