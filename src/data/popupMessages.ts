/**
 * POP-UP MESSAGES
 * ===============
 *
 * TWO TYPES OF POP-UPS:
 *
 * 1. RANDOM POP-UPS (popupMessages array)
 *    Appear every 5–10 minutes while browsing. Never repeat twice in a row.
 *
 * 2. PAGE-SPECIFIC POP-UPS (pagePopups array)
 *    Appear EVERY TIME a user scrolls to the bottom of a specific page.
 *    Set `triggerPage` to the route path (e.g. "/page-1").
 *
 * FORMATTING:
 *   • Use <strong> or <b> to bold words
 *   • Use <em> or <i> for italics
 *   • Use <br/> for line breaks
 */

export interface PopupMessage {
  id: string;
  title: string;
  /** HTML string — use <strong> for bold, <em> for italic, <br/> for line breaks */
  content: string;
}

/**
 * PAGE-SPECIFIC POP-UPS
 * =====================
 * These appear EVERY TIME a user scrolls to the bottom of the matching page.
 *
 * HOW TO ADD:
 *   1. Add an entry to `pagePopups` below
 *   2. Set `triggerPage` to the page route (e.g. "/page-3")
 *   3. Set `title` and `content` as usual
 */
export interface PagePopup extends PopupMessage {
  /** Route path that triggers this popup, e.g. "/page-1" */
  triggerPage: string;
}

export const pagePopups: PagePopup[] = [
  {
    id: "claim-1-bottom",
    triggerPage: "/page-1",
    title: "🌱 You Made It!",
    content: `Congrats on reaching the bottom of Claim 1! Looks like you've <strong>adapted</strong> well to scrolling through our content. Darwin would be proud — you're clearly the <strong>fittest</strong> reader in this environment.<br/><br/><em>Survival of the scrolliest.</em>`,
  },
  {
    id: "claim-2-bottom",
    triggerPage: "/page-2",
    title: "🌳 Biodiversity Champion!",
    content: `You scrolled through ALL of Claim 2! That's more commitment than most species show to a single habitat. Your dedication to biodiversity knowledge is truly <strong>naturally selected</strong>.<br/><br/><em>Fun fact: You've now read more about biodiversity than 99% of internet users. Probably.</em>`,
  },
  {
    id: "claim-3-bottom",
    triggerPage: "/page-3",
    title: "☀️ Energized Reader!",
    content: `You've reached the bottom of Claim 3! If only we could harness the <strong>energy</strong> you put into reading this page — we'd have a truly <strong>renewable</strong> source of curiosity.<br/><br/><em>Clean energy, clean conscience, clean scroll history.</em>`,
  },
  {
    id: "claim-4-bottom",
    triggerPage: "/page-4",
    title: "🏔️ Peak Performance!",
    content: `You've conquered Claim 4 like a mountain goat conquering a cliff face. Your ability to <strong>conserve</strong> your attention span through this entire page is nothing short of <strong>evolutionary</strong>.<br/><br/><em>Please don't go extinct on us — there's still one more claim!</em>`,
  },
  {
    id: "claim-5-bottom",
    triggerPage: "/page-5",
    title: "👥 Community Hero!",
    content: `You finished ALL five claims! You're officially part of our <strong>community</strong> of dedicated readers. In ecological terms, you've reached the top of the <strong>food chain</strong> of knowledge.<br/><br/><em>Go forth and spread the word — like a well-adapted species colonizing new territory!</em>`,
  },

  /* --- ADD MORE PAGE POP-UPS — copy this template: ---
  {
    id: "my-page-popup",
    triggerPage: "/page-X",
    title: "Pop-up Title",
    content: "Message shown at bottom of the page.",
  },
  */
];

export const popupMessages: PopupMessage[] = [
  {
    id: "natural-selection-joke",
    title: "🧬 A Natural Observation",
    content: `Just like a better adapted organism to its environment, we have adapted to the requirements for our project. That 100% almost seems like the <strong>naturally select</strong>ion to make at this point, doesn't it?<br/><br/><em>*Note: Joke crafted at 12:15 am, not guaranteed to make the viewer laugh, chuckle, or feel happy in any way. If the joke didn't land, kindly erase it from your memory and <strong>naturally select</strong> a better interactive aspect on our site because this one clearly isn't <strong>fit</strong> enough to make you laugh (see what I did there).</em>`,
  },

  /* --- ADD MORE RANDOM POP-UPS BELOW — copy this template: ---
  {
    id: "my-unique-id",
    title: "Pop-up Title Here",
    content: "Your message here. Use <strong>bold</strong> and <em>italic</em> as needed.",
  },
  */
];
