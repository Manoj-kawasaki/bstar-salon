export interface ServiceCategoryDef {
  id: string;
  name: string;
  icon: string;
  services: string[];
  observations: string[];
}

export const REVIEW_CATEGORIES: ServiceCategoryDef[] = [
  {
    id: "mens",
    name: "Men's Grooming",
    icon: "💈",
    services: [
      "Fade Haircut",
      "Beard Trim & Shaping",
      "Classic Haircut",
      "Head Massage & Hair Wash",
      "Grey Coverage / Beard Colour",
      "Styling & Grooming Combo",
    ],
    observations: [
      "Stylist listened to my preferred length",
      "Clean sanitized tools and neat station",
      "No waiting time / seated promptly",
      "Relaxing head massage after wash",
      "Reasonable pricing for TC Palya area",
      "Professional and polite staff",
    ],
  },
  {
    id: "womens",
    name: "Women's Haircut",
    icon: "💇‍♀️",
    services: [
      "Layer Cut & Blow Dry",
      "Hair Trim & Split-ends",
      "Bob / Lob Cut",
      "Keratin Treatment / Smoothening",
      "Face Framing Layers",
      "Deep Conditioning Hair Wash",
    ],
    observations: [
      "Stylist respected my desired length",
      "Hair feels smooth and has great bounce",
      "Patient consultation before cutting",
      "Frizz-free blowout finish",
      "Gentle and attentive hair handling",
      "Clean and welcoming salon atmosphere",
    ],
  },
  {
    id: "facial",
    name: "Facial & Cleanup",
    icon: "🧖‍♀️",
    services: [
      "O3+ Brightening Facial",
      "Hydrating Fruit Cleanup",
      "Hydra Facial Treatment",
      "Red Wine Anti-Ageing Facial",
      "Deep Pore De-tan Cleanup",
      "Acne Soothing Treatment",
    ],
    observations: [
      "Gentle blackhead extraction with no redness",
      "Very relaxing face and neck massage",
      "Noticeable natural glow immediately after",
      "Clean towels and hygienic setup",
      "Zero aggressive upselling or pressure",
      "High quality products used",
    ],
  },
  {
    id: "detan",
    name: "Detan & Bleach",
    icon: "☀️",
    services: [
      "Face & Neck O3 De-tan",
      "Full Arms & Legs De-tan",
      "Oxy Bleach Treatment",
      "Body Brightening De-tan Pack",
      "Back & Shoulders De-tan",
    ],
    observations: [
      "Noticeable reduction in sun tan",
      "No burning or itching on sensitive skin",
      "Even and meticulous application",
      "Soothing post-treatment finish",
      "Great for regular Bangalore sun exposure",
      "Helpful aftercare guidance provided",
    ],
  },
  {
    id: "waxing",
    name: "Waxing Service",
    icon: "🍯",
    services: [
      "Full Arms & Legs Waxing",
      "Honey Waxing",
      "Rica / Flavour Waxing",
      "Underarms Waxing",
      "Full Body Waxing Package",
    ],
    observations: [
      "Quick and skilled technique",
      "Temperature checked before applying",
      "Clean single-use strips and hygienic room",
      "No sticky residue left behind",
      "Polite staff made me feel comfortable",
      "Minimal skin redness or irritation",
    ],
  },
  {
    id: "threading",
    name: "Threading",
    icon: "🪡",
    services: [
      "Eyebrow Shaping",
      "Upper Lip Threading",
      "Forehead Threading",
      "Chin Threading",
      "Full Face Threading",
    ],
    observations: [
      "Preserved my natural eyebrow arch",
      "Very light hand with minimal discomfort",
      "Quick and efficient service",
      "Soothing rose water or gel applied after",
      "Clean thread and sanitized setup",
      "Fair and transparent pricing",
    ],
  },
  {
    id: "manipedi",
    name: "Mani & Pedicure",
    icon: "💅",
    services: [
      "Spa Pedicure with Warm Soak",
      "Express Manicure & Nail Polish",
      "Crystal Spa Pedicure",
      "Paraffin Wax Mani-Pedi Combo",
      "Deep Foot Scrub & Heel Care",
    ],
    observations: [
      "Thorough scrubbing and heel smoothing",
      "Sanitized tub and clean tools",
      "Relaxing foot and hand massage",
      "Neat nail shaping and clean cuticles",
      "Great way to unwind after a long week",
      "Long-lasting polish application",
    ],
  },
  {
    id: "hairspa",
    name: "Hair Spa & Massage",
    icon: "🌿",
    services: [
      "Keratin Protein Hair Spa",
      "Deep Moisture & Nourish Spa",
      "Anti-Dandruff Scalp Treatment",
      "20-Minute Head Massage",
      "Hair Fall Defence Spa",
    ],
    observations: [
      "Dry hair feels deeply conditioned and soft",
      "Head massage pressure was spot on",
      "Relaxing steam application",
      "Pleasant product scent",
      "Relieved tension and fatigue",
      "Helpful hair care tips from the stylist",
    ],
  },
  {
    id: "makeup",
    name: "Bridal & Makeup",
    icon: "💄",
    services: [
      "Party Makeup & Hair Styling",
      "Traditional Saree Draping",
      "Pre-Bridal Grooming Package",
      "Engagement / Reception Look",
      "Subtle Day Event Makeup",
    ],
    observations: [
      "Lightweight natural base that wasn't cakey",
      "Accurately matched my skin tone",
      "Saree was draped securely and neatly",
      "Arrived on time with clean brushes",
      "Makeup stayed fresh throughout the event",
      "Listened carefully to the look I wanted",
    ],
  },
  {
    id: "colour",
    name: "Global Colour & Roots",
    icon: "🎨",
    services: [
      "Ammonia-Free Root Touch-up",
      "Global Hair Colour",
      "Crown Highlights / Streaks",
      "Balayage / Ombre Colour",
      "Colour Gloss / Toning",
    ],
    observations: [
      "Even and seamless grey coverage",
      "Shade looks vibrant in natural light",
      "No chemical odor or scalp irritation",
      "Hair remained soft and glossy after washing",
      "Precise application without forehead staining",
      "Honest consultation on shade selection",
    ],
  },
];

export function getCategoryById(id: string): ServiceCategoryDef | undefined {
  return REVIEW_CATEGORIES.find((c) => c.id === id || c.name.toLowerCase() === id.toLowerCase());
}

export function isValidCategory(nameOrId: string): boolean {
  return REVIEW_CATEGORIES.some(
    (c) =>
      c.id.toLowerCase() === nameOrId.toLowerCase() ||
      c.name.toLowerCase() === nameOrId.toLowerCase()
  );
}
