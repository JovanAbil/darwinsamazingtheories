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
    title: "Sustainable Living",
    description: "Promoting eco-friendly practices for a healthier planet.",
    icon: "Leaf",
    image: "https://images.unsplash.com/photo-1518173946687-a53e16966f10?w=600&h=300&fit=crop",
    longDescription: "Sustainable living involves adopting practices that reduce our environmental footprint while improving quality of life. From reducing waste to choosing renewable energy sources, every small action contributes to a healthier planet.",
  },
  {
    id: "claim-2",
    title: "Biodiversity",
    description: "Protecting the rich tapestry of life on Earth.",
    icon: "Trees",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=300&fit=crop",
    longDescription: "Biodiversity is the variety of life on Earth at all levels, from genes to ecosystems. It encompasses the evolutionary, ecological, and cultural processes that sustain life. Protecting biodiversity ensures resilient ecosystems.",
  },
  {
    id: "claim-3",
    title: "Clean Energy",
    description: "Harnessing renewable resources for a brighter future.",
    icon: "Sun",
    image: "/images/gradual-speciation.png",
    longDescription: "Clean energy comes from renewable, zero-emission sources that do not pollute the atmosphere. Solar, wind, and hydroelectric power are transforming how we generate electricity and reducing our dependence on fossil fuels.",
  },
  {
    id: "claim-4",
    title: "Conservation",
    description: "Preserving natural habitats for generations to come.",
    icon: "Mountain",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=300&fit=crop",
    longDescription: "Conservation is the careful management of natural resources and habitats to prevent exploitation, destruction, or neglect. It ensures that the beauty and diversity of nature is preserved for future generations.",
  },
  {
    id: "claim-5",
    title: "Community",
    description: "Building connections through shared environmental values.",
    icon: "Users",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=300&fit=crop",
    longDescription: "Strong communities are the backbone of environmental change. By fostering connections, sharing knowledge, and working together, we can amplify our impact and create lasting positive change for our planet.",
  },
];
