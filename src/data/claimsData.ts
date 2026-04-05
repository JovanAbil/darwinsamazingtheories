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
    image: "https://www.openaccessgovernment.org/wp-content/uploads/2021/08/Fig.-3-phenotypic-plasticity-locusts-permission-not-yet-received_no-text.jpg?w=600&h=300&fit=crop",
    longDescription: "Species are not fixed but can adapt and evolve over time",
  },
  {
    id: "claim-2",
    title: "Descent from a common ancestor",
    description: "Text goes here",
    icon: "Trees",
    image: "https://evolution.berkeley.edu/wp-content/uploads/2021/08/limbs_phylongeny_2020.png?w=600&h=300&fit=crop",
    longDescription: "All life descends from a common ancestor",
  },
  {
    id: "claim-3",
    title: "Gradual evolution",
    description: "Harnessing renewable resources for a brighter future.",
    icon: "Sun",
    image: "/images/gradual.png",
    longDescription: "Species evolve slowly and steadily over time",
  },
  {
    id: "claim-4",
    title: "Multiplication of species",
    description: "Text goes here",
    icon: "Mountain",
    image: "https://www.allaboutbirds.org/news/wp-content/uploads/2018/12/AdaptiveRadiationGraphic-e1545161936415-1280x675.jpg?w=300&h=300&fit=crop",
    longDescription: "New species are formed from a common ancestor",
  },
  {
    id: "claim-5",
    title: "Natural Selection",
    description: "Text goes here",
    icon: "Users",
    image: "https://dr282zn36sxxg.cloudfront.net/datastreams/f-d%3A05e1465a992f7f2754fb257864af8398f6e7ae94ecc4af9ffebf00fa%2BIMAGE_THUMB_POSTCARD_TINY%2BIMAGE_THUMB_POSTCARD_TINY.1?w=600&h=300&fit=crop",
    longDescription: "The process through which populations of organisms adapt and change to reproduce better fit organisms for the environment",
  },
];
