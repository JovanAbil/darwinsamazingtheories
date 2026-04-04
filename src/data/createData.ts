/**
 * =============================================
 * CLAIMS DATA
 * =============================================
 * Central data for claims displayed on the home page cards
 * and the dedicated Claims page.
 *
 * Each claim has:
 *   - id: unique identifier
 *   - title: short claim name
 *   - description: brief summary shown on cards
 *   - icon: lucide-react icon name
 *   - image: optional image URL for the card
 *   - longDescription: detailed text for the claims page
 *
 * To ADD a claim: copy an object below and fill in fields.
 * To REMOVE: delete the object from the array.
 * To REORDER: move objects up/down in the array.
 *
 * See /docs/MANAGEMENT.md for details.
 */

export interface Claim {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  longDescription?: string;
}

export const claims: Claim[] = [
  {
    id: "claim-1",
    title: "Nonconstancy of species",
    description: "Text goes here",
    icon: "Leaf",
    image: "https://images.unsplash.com/photo-1518173946687-a53e16966f10?w=600&h=300&fit=crop",
    longDescription: "Species are not fixed but can adapt and evolve over time",
  },
  {
    id: "claim-2",
    title: "Descent from a common ancestor",
    description: "Text goes here",
    icon: "Trees",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=300&fit=crop",
    longDescription: "All life descends from a common ancestor",
  },
  {
    id: "claim-3",
    title: "Gradual evolution",
    description: "Harnessing renewable resources for a brighter future.",
    icon: "Sun",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=300&fit=crop",
    longDescription: "Species evolve slowly and steadily over time",
  },
  {
    id: "claim-4",
    title: "Multiplication of species",
    description: "Text goes here",
    icon: "Mountain",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=300&fit=crop",
    longDescription: "New species are formed from a common ancestor",
  },
  {
    id: "claim-5",
    title: "Natural Selection",
    description: "Text goes here",
    icon: "Users",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=300&fit=crop",
    longDescription: "The process through which populations of organisms adapt and change to reproduce better fit organisms for the environment",
  },
];
