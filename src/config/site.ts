export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  description: string;
  priceInfo: string;
  duration?: string;
  benefits?: string[];
  image: string;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  pinterestSearchPrompt: string;
  services: ServiceItem[];
  faqs: { question: string; answer: string }[];
}

export const siteConfig = {
  name: "B★STAR UNISEX SALON",
  shortName: "B★Star Unisex Salon",
  tagline: "Bengaluru’s Premier Luxury Unisex Beauty & Hair Destination",
  description:
    "Rated 4.3★ (339+ reviews). Visit B★Star Unisex Salon at Stylo Plaza, TC Palya Main Rd, Battarahalli for precision haircuts, keratin, hair botox, balayage, hydrafacials, and bridal makeup.",
  url: "https://bstarsalon.com",
  bookingUrl: "/book",
  phone: "+91 99029 49549",
  phoneRaw: "+919902949549",
  whatsappUrl:
    "https://wa.me/919902949549?text=Hello%20B-Star%20Unisex%20Salon%2C%20I%20would%20like%20to%20book%20an%20appointment.",
  googleReviewStats: {
    rating: 4.3,
    reviewCount: 339,
    ratingMax: 5.0,
    googleReviewUrl: "https://www.google.com/search?q=B-Star+Unisex+Saloon+Battarahalli+Bengaluru+reviews",
    googleWriteReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJQwX9_hQRrjsRPGH6avSZBOc",
    reviewAssistantUrl: "/review",
  },
  location: {
    name: "B★Star Unisex Salon",
    building: "No. 140, Stylo Plaza Building",
    landmark: "Bus Stop, above Krishna Sagar Hotel, next to Kanti Sweets",
    street: "TC Palya Main Rd",
    area: "Anandapura, Battarahalli",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560036",
    fullAddress:
      "No. 140, Stylo Plaza Building, Bus Stop, TC Palya Main Rd, above Krishna Sagar Hotel, next to Kanti Sweets, Anandapura, Battarahalli, Bengaluru, Karnataka 560036",
    hours: "9:00 AM–9:00 PM daily",
    days: "Monday–Sunday",
    mapsUrl:
      "https://maps.google.com/?q=B-Star+Unisex+Saloon+Stylo+Plaza+Building+TC+Palya+Main+Rd+Battarahalli+Bengaluru",
  },
  membership: {
    title: "Privilege Membership & Prepaid Cards",
    description: "Enjoy exclusive VIP pricing and celebratory privileges with our salon membership program.",
    prepaid: [
      { pay: "₹5,000", get: "₹7,000 worth of services" },
      { pay: "₹10,000", get: "₹15,000 worth of services" },
    ],
    privileges: [
      "15% Discount across all regular salon services",
      "50% Special Discount during Birthday Month",
      "50% Special Discount during Wedding Anniversary Month",
    ],
  },
  areasServed: [
    "Battarahalli",
    "Bhattarahalli",
    "TC Palya (Thambuchetty Palya)",
    "KR Puram (Krishnarajapuram)",
    "Medahalli",
    "Ramamurthy Nagar",
    "Anandapura",
    "Hoysala Nagar",
    "Horamavu",
    "East Bengaluru",
  ],
  navigation: [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Book", href: "/book" },
    { title: "About", href: "/about" },
    { title: "Gallery", href: "/gallery" },
    { title: "Reviews", href: "/reviews" },
    { title: "Contact", href: "/contact" },
  ],
  categories: [
    {
      id: "hair",
      slug: "hair",
      number: "01",
      title: "Hair",
      shortDesc: "Bespoke cuts from ₹550, French balayage, keratin smoothening, and deep scalp spa rituals.",
      longDesc:
        "From designer precision cuts to French balayage, permanent smoothening, keratin treatments, and intensive scalp repair, our master stylists tailor every touch to elevate your hair's natural strength, texture, and movement.",
      image: "/images/ylg-sample-1.jpg",
      pinterestSearchPrompt: "luxury editorial hair photography dark background",
      services: [
        {
          id: "hair-cut-style",
          name: "Signature Designer Haircut & Styling",
          category: "hair",
          description: "Tailored aesthetic consultation, hair wash, split-end trim, and blow-dry finish. (Kids cut ₹250, Basic ₹550, Layer Cut ₹600, Style Change ₹800).",
          priceInfo: "Starts from ₹550",
          duration: "45–60 mins",
          benefits: ["Personalized facial contour analysis", "Deep nourishing wash & split-end trim", "Editorial volume blow-dry finish"],
          image: "/images/ylg-sample-2.jpg",
        },
        {
          id: "hair-color-balayage",
          name: "Root Touch-Up, Global Color & Balayage",
          category: "hair",
          description: "Root touch-up (₹1,000 / Ammonia-free ₹1,200), Global coloring (₹2,600 / Ammonia-free ₹3,000), Fashion colors (₹2,800), and Global highlights (₹3,300).",
          priceInfo: "Starts from ₹1,000",
          duration: "90–180 mins",
          benefits: ["Zero-ammonia gentle formulations", "Dimensional highlights & French balayage", "Long-lasting luminous gloss & tone protection"],
          image: "/images/ylg-sample-1.jpg",
        },
        {
          id: "hair-keratin-botox",
          name: "Keratin Treatment, Smooth Shine & Rebonding",
          category: "hair",
          description: "Keratin Treatment (Medium ₹5,000 / Long ₹6,000), Smooth Shine (₹5,000), Smooth Straight permanent smoothening (₹6,000), and Rebonding (₹7,000).",
          priceInfo: "Starts from ₹5,000",
          duration: "120–210 mins",
          benefits: ["Eliminates 100% of frizz for 4–6 months", "Deep restorative protein & keratin infusion", "Silky manageable mirror-like shine"],
          image: "/images/ylg-sample-5.jpg",
        },
        {
          id: "hair-scalp-spa",
          name: "Hair Spa, Dandruff Detox & Scalp Therapy",
          category: "hair",
          description: "Classic Hair Spa (₹750), Keratin Hair Spa (₹1,500), Hair Fall Treatment (₹1,000), Dandruff Treatment Spa (₹1,000), and Relaxing Head Massage (₹500).",
          priceInfo: "Starts from ₹500",
          duration: "45–75 mins",
          benefits: ["Follicle oxygenation & root strengthening", "Intensive anti-dandruff clay & steam", "Deep therapeutic pressure point massage"],
          image: "/images/ylg-curl-1.jpg",
        },
      ],
      faqs: [
        {
          question: "What is the difference between Keratin and Smooth Straight treatments?",
          answer:
            "Keratin Treatment (starting from ₹5,000) eliminates frizz, repairs split ends, and leaves hair silky and smooth with natural movement for 3 to 5 months. Smooth Straight and Rebonding (starting from ₹6,000 to ₹7,000) permanently restructure curls for a sleek, pin-straight finish.",
        },
        {
          question: "What are your haircut and styling prices?",
          answer:
            "At B★Star Battarahalli, Kids Haircuts are ₹250, Basic Women's Designer Haircuts start at ₹550, Layer Cut Trims are ₹600, Change of Hairstyle is ₹800, and Blow-Dry Styling is ₹650. Men's Haircuts start at ₹200.",
        },
        {
          question: "Do you offer ammonia-free hair color options?",
          answer:
            "Yes, we provide premium ammonia-free root touch-up (₹1,200) and ammonia-free global color (₹3,000) alongside couture fashion shades and highlights.",
        },
      ],
    },
    {
      id: "skin",
      slug: "skin",
      number: "02",
      title: "Skin / Beauty",
      shortDesc: "HydraFacials (₹4,000), O3+ bridal glow facials, cleanups from ₹450, and Rica waxing.",
      longDesc:
        "Indulge in holistic skin wellness crafted to purify, brighten, and rehydrate your complexion under the care of certified aesthetic therapists in Battarahalli.",
      image: "/images/s2-bg1.jpg",
      pinterestSearchPrompt: "luxury facial skincare aesthetic therapy",
      services: [
        {
          id: "skin-hydra-advance",
          name: "Medical-Grade HydraFacial & O3+ Bridal Facial",
          category: "skin",
          description: "HydraFacial 7-step vortex therapy (₹4,000), O3+ Bridal Glow Facial (₹4,000), 4-Layer Facial (₹3,800), O3+ Whitening (₹3,000), and Lotus Gold Sheen (₹2,300).",
          priceInfo: "Starts from ₹2,300",
          duration: "60–90 mins",
          benefits: ["Vortex blackhead extraction & pore purification", "Instant glass-skin hydration plump", "Zero downtime with long-lasting cellular glow"],
          image: "/images/bstar-hydrafacial.jpg",
        },
        {
          id: "skin-signature-facials",
          name: "Radiance, Gold & Skin Brightening Facials",
          category: "skin",
          description: "Gold Facial (₹1,800), Skin Whitening Facial (₹2,500), Anti-Aging Facial (₹2,500), Anti-Pigmentation (₹2,800), Detan Facial (₹1,400), Chocolate Facial (₹1,200), and Classic Facial (₹850).",
          priceInfo: "Starts from ₹850",
          duration: "60–75 mins",
          benefits: ["Deep cellular nourishment & dead skin removal", "Targeted pigment & sun-tan correction", "Lymphatic drainage and facial sculpting massage"],
          image: "/images/s2-bg1.jpg",
        },
        {
          id: "skin-cleanups",
          name: "Deep Pore Cleanups & Fruit Infusions",
          category: "skin",
          description: "Classic Clean Up (₹450), Fruit Clean Up (₹550), Chocolate Clean Up (₹600), Red Wine Clean Up (₹700), Lotus Whitening Clean Up (₹800), and O3+ Clean Up (₹1,000).",
          priceInfo: "Starts from ₹450",
          duration: "35–45 mins",
          benefits: ["Ultrasonic blackhead & whitehead extraction", "Sebum balancing & pore refinement", "Fresh herbal botanicals suitable for sensitive skin"],
          image: "/images/bstar-detox-facial.jpg",
        },
        {
          id: "skin-waxing-threading",
          name: "Waxing, Threading & Body Detan Therapy",
          category: "skin",
          description: "Eyebrow Threading (₹50), Honey Waxing (Full Body ₹1,800 / Arms ₹300 / Legs ₹500), Flavour Waxing (Full Body ₹2,500), Brazilian Waxing (Bikini ₹2,500), and O3 Detan (Full Body ₹3,000).",
          priceInfo: "Starts from ₹50",
          duration: "15–90 mins",
          benefits: ["Gentle hygienic lipophilic waxing", "Precise brow shaping & facial threading", "Body brightening detan & oxy bleach options"],
          image: "/images/menu/ratecard-waxing.jpg",
        },
      ],
      faqs: [
        {
          question: "What is the price of a HydraFacial at B★Star?",
          answer:
            "Our medical-grade HydraFacial is priced at ₹4,000. It features a complete 7-step ritual including vortex pore extraction, hyaluronic acid infusion, ultrasonic skin tightening, and antioxidant barrier protection.",
        },
        {
          question: "How much are cleanups and waxing services?",
          answer:
            "Basic cleanups start at ₹450, Fruit Cleanups are ₹550, and O3+ Cleanups are ₹1,000. Eyebrow threading is ₹50, Full Arms Honey Waxing is ₹300, Full Legs is ₹500, and Full Body Waxing is ₹1,800.",
        },
      ],
    },
    {
      id: "grooming",
      slug: "grooming",
      number: "03",
      title: "Grooming",
      shortDesc: "Men's haircuts (₹200), beard designing (₹150), hair coloring, and executive head spa.",
      longDesc:
        "Engineered for gentlemen who value sharp silhouettes, refined fades, clean beard architecture, and revitalizing grooming therapies.",
      image: "/images/bstar-mens-textured-cut.jpg",
      pinterestSearchPrompt: "men luxury haircut editorial photography",
      services: [
        {
          id: "grooming-executive-cut",
          name: "Men's Haircut, Styling & Beard Designing",
          category: "grooming",
          description: "Men's Haircut (₹200), Change of Hair Style / Restyle (₹250–₹300), Beard Designing (₹150), Traditional Shave (₹100), and Hair Wash & Conditioning (₹100).",
          priceInfo: "Starts from ₹200",
          duration: "30–45 mins",
          benefits: ["Sharp tailored scissor & clipper architecture", "Beard alignment, shaping & hot towel comfort", "Matte pomade styling finish"],
          image: "/images/bstar-precision-shears.jpg",
        },
        {
          id: "grooming-hair-color",
          name: "Men's Hair Coloring & Highlights",
          category: "grooming",
          description: "Global Hair Color (₹650), Ammonia-Free Coloring (₹750), Fashion Hair Color (₹800), and Crown / Streak Highlights (₹1,000 / ₹150 per strike).",
          priceInfo: "Starts from ₹650",
          duration: "45–60 mins",
          benefits: ["100% natural grey coverage", "Zero-ammonia scalp protection", "Modern textured highlights"],
          image: "/images/bstar-mens-classic-cut.jpg",
        },
        {
          id: "grooming-spa-massage",
          name: "Head Massage & Restorative Hair Spa",
          category: "grooming",
          description: "Cooling Head Massage (₹400), Classic Hair Spa (₹750), Hair Fall Treatment (₹1,000), Dandruff Treatment Spa (₹1,200), and Keratin Hair Spa (₹1,200).",
          priceInfo: "Starts from ₹400",
          duration: "40–60 mins",
          benefits: ["Stress-relief acupressure scalp massage", "Anti-dandruff detox clay & therapeutic steam", "Strengthens follicles against premature thinning"],
          image: "/images/bstar-mens-textured-cut.jpg",
        },
        {
          id: "grooming-face-care",
          name: "Men's Clean Up, Detan & HydraFacial",
          category: "grooming",
          description: "Men's Classic Clean Up (₹500), Detan Clean Up (₹900), O3+ Clean Up (₹1,000), Detan Facial (₹1,400), and Advance HydraFacial (₹4,000).",
          priceInfo: "Starts from ₹500",
          duration: "35–60 mins",
          benefits: ["Clears sun tan & pollution congestion", "Blackhead extraction & skin rehydration", "Deep exfoliation customized for men's skin"],
          image: "/images/menu/ratecard-men-facial.jpg",
        },
      ],
      faqs: [
        {
          question: "What is the cost of a men's haircut and beard styling?",
          answer:
            "A standard men's haircut is ₹200, hair restyling is ₹250 to ₹300, and professional beard designing is ₹150.",
        },
        {
          question: "Do you offer hair spa and scalp treatments for men?",
          answer:
            "Yes. We offer relaxing head massages for ₹400, classic hair spas for ₹750, dandruff treatments for ₹1,200, and keratin hair spas for ₹1,200.",
        },
      ],
    },
    {
      id: "nails",
      slug: "nails",
      number: "04",
      title: "Nails & Spa",
      shortDesc: "Spa pedicures (₹700), classic manicures (₹400), paraffin rituals, and gel extensions.",
      longDesc:
        "Transform your hands and feet with therapeutic pedicures, nourishing manicures, restorative foot massages, and long-lasting nail care.",
      image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1600&auto=format&fit=crop",
      pinterestSearchPrompt: "luxury nail editorial photography",
      services: [
        {
          id: "nail-manicure-pedicure",
          name: "Classic & Spa Manicure-Pedicure Combos",
          category: "nails",
          description: "Classic Mani (₹400) & Pedi (₹600) Combo (₹850), Spa Mani (₹500) & Pedi (₹700) Combo (₹1,050), and Cut & File with Polish (₹75–₹100).",
          priceInfo: "Starts from ₹400",
          duration: "45–75 mins",
          benefits: ["Dead skin buffing & heel crack repair", "Herbal mineral soak & exfoliating scrub", "Nourishing cuticle oil & neat polish finish"],
          image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop",
        },
        {
          id: "nail-luxury-pedicure",
          name: "Chocolate, Paraffin & Crystal Spa Pedi-Mani",
          category: "nails",
          description: "Chocolate Combo (₹1,150), Paraffin Wax Softening Combo (₹1,150), and Crystal Spa Pedicure & Manicure Combo (₹1,350 / Pedi alone ₹1,000).",
          priceInfo: "Starts from ₹1,000",
          duration: "60–90 mins",
          benefits: ["Warm paraffin wax seals deep moisture", "Crystal gel soak relieves foot aches & fatigue", "Long-lasting silky smooth touch"],
          image: "/images/menu/ratecard-pedi-mani.jpg",
        },
        {
          id: "nail-massage-art",
          name: "Hand & Foot Massage & Gel Extensions",
          category: "nails",
          description: "Therapeutic Hand Massage (₹400), Foot Reflexology Massage (₹500), and Couture Gel Nail Extensions & Nail Art (Starts from ₹1,499).",
          priceInfo: "Starts from ₹400",
          duration: "30–90 mins",
          benefits: ["Relieves muscle fatigue & stimulates circulation", "Custom nail shaping & chip-resistant extensions", "Wide spectrum of glazed, chrome & velvet finishes"],
          image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1200&auto=format&fit=crop",
        },
      ],
      faqs: [
        {
          question: "How much are manicures and pedicures at B★Star?",
          answer:
            "A Classic Manicure is ₹400, Classic Pedicure is ₹600 (Combo: ₹850). Spa Pedicure is ₹700 (Combo: ₹1,050). Premium Paraffin and Chocolate Combos are ₹1,150, and our Crystal Spa Combo is ₹1,350.",
        },
      ],
    },
    {
      id: "bridal",
      slug: "bridal",
      number: "05",
      title: "Bridal",
      shortDesc: "Complete 7-ritual bridal packages (₹6,000), bridal makeup & saree draping (₹8,000).",
      longDesc:
        "Every bride deserves unforgettable elegance. Our master artists curate complete bridal aesthetics — from head-to-toe pre-bridal rejuvenation to high-definition Muhurtham and reception glam, saree draping, and flower setting.",
      image: "/images/bstar-bridal-makeup.jpg",
      pinterestSearchPrompt: "Indian luxury bridal beauty editorial photography",
      services: [
        {
          id: "bridal-premium-package",
          name: "Bridal Premium Package (Complete Head-to-Toe)",
          category: "bridal",
          description: "All-inclusive pre-bridal ritual (₹6,000): Skin Brightening Facial, Full Waxing, Restorative Hair Spa, Full Body Brightening Detan, Spa Manicure, Spa Pedicure, and Hair Wash & Blow Dry.",
          priceInfo: "₹6,000 all-inclusive",
          duration: "210–270 mins",
          benefits: ["Complete 7-ritual head-to-toe bridal preparation", "Full body brightening & skin exfoliation", "Signature hair spa and luxury mani-pedi"],
          image: "/images/bstar-bridal-makeup.jpg",
        },
        {
          id: "bridal-makeup-package",
          name: "Bridal Make Up & Draping Package",
          category: "bridal",
          description: "Comprehensive wedding day artistry (₹8,000): High-definition bridal makeup, traditional or contemporary hair styling, and professional saree draping with jewel pinning.",
          priceInfo: "₹8,000 all-inclusive",
          duration: "180–240 mins",
          benefits: ["Waterproof, tear-resistant, camera-ready HD base", "Intricate hair styling & fresh flower ornament placement", "Master royal saree draping & jewel fixing"],
          image: "/images/bstar-couture-bride.jpg",
        },
        {
          id: "bridal-party-light",
          name: "Party & Light Occasion Makeup",
          category: "bridal",
          description: "Party Glam Makeup (₹2,500) and Light Day Makeup (₹1,500) for bridesmaids, family members, or festive celebrations.",
          priceInfo: "Starts from ₹1,500",
          duration: "60–90 mins",
          benefits: ["Luminous glass skin finish", "Eye artistry & lash enhancement", "Long-lasting 12-hour camera hold"],
          image: "/images/ylg-diva-2.jpg",
        },
      ],
      faqs: [
        {
          question: "What is included in the B★Star Bridal Packages?",
          answer:
            "Our Bridal Premium Package (₹6,000) includes Skin Brightening, Full Waxing, Hair Spa, Body Brightening, Spa Manicure, Spa Pedicure, and Hair Wash & Blow Dry. Our Bridal Make Up Package (₹8,000) includes complete HD Bridal Makeup, Hair Styling, and Saree Draping.",
        },
        {
          question: "How much is party makeup for relatives and bridesmaids?",
          answer:
            "Party Makeup is ₹2,500 and Light / Day Occasion Makeup is ₹1,500.",
        },
      ],
    },
    {
      id: "makeup",
      slug: "makeup",
      number: "06",
      title: "Makeup",
      shortDesc: "Party makeup (₹2,500), light occasion glam (₹1,500), and reception aesthetics.",
      longDesc:
        "Whether attending an intimate gala, high-profile reception, or celebration, our artists craft flawless looks that accentuate your best features with luminous longevity.",
      image: "/images/ylg-diva-2.jpg",
      pinterestSearchPrompt: "luxury editorial makeup photography",
      services: [
        {
          id: "makeup-party-glam",
          name: "High-Definition Party & Cocktail Glam",
          category: "makeup",
          description: "Sculpted base, signature eye artistry, soft-focus contouring, and transfer-resistant setting (₹2,500).",
          priceInfo: "₹2,500",
          duration: "60–90 mins",
          benefits: ["12-hour camera longevity", "Customized false lash application", "Luminous waterproof skin finish"],
          image: "/images/ylg-diva-2.jpg",
        },
        {
          id: "makeup-light-occasion",
          name: "Light Occasion & Day Makeup",
          category: "makeup",
          description: "Minimalist glowing daytime glam, subtle skin tint, tinted brows, and soft natural lip contour (₹1,500).",
          priceInfo: "₹1,500",
          duration: "45–60 mins",
          benefits: ["Fresh lightweight dewy finish", "Daylight-optimized natural tones", "Fast 45-minute styling session"],
          image: "/images/ylg-bean-sheen.jpg",
        },
      ],
      faqs: [
        {
          question: "Should I bring reference pictures to my makeup appointment?",
          answer:
            "Yes, bringing references along with photos of your outfit helps our artists coordinate colors, undertones, and intensity perfectly.",
        },
      ],
    },
  ],
  gallery: [
    {
      id: "gal-1",
      title: "B★Star Signature Salon Floor & Styling Atelier",
      category: "Salon Atelier",
      image: "/images/bstar-salon-interior.jpg",
      aspect: "tall",
    },
    {
      id: "gal-2",
      title: "Bespoke Caramel Balayage & Silk Movement",
      category: "Hair Artistry",
      image: "/images/bstar-balayage-waves.jpg",
      aspect: "wide",
    },
    {
      id: "gal-3",
      title: "Signature B★Star Chair Transformation & Couture Waves",
      category: "Hair Artistry",
      image: "/images/bstar-chair-styling.jpg",
      aspect: "tall",
    },
    {
      id: "gal-4",
      title: "Feathered Caramel Layers & Volume Blowout",
      category: "Hair Artistry",
      image: "/images/ylg-sample-2.jpg",
      aspect: "wide",
    },
    {
      id: "gal-5",
      title: "Architectural Precision Sleek Bob",
      category: "Hair Artistry",
      image: "/images/ylg-sample-5.jpg",
      aspect: "tall",
    },
    {
      id: "gal-6",
      title: "Royal Muhurtham Bridal Artistry",
      category: "Bridal Couture",
      image: "/images/bstar-bridal-makeup.jpg",
      aspect: "wide",
    },
    {
      id: "gal-7",
      title: "Defined Honey-Glazed Voluminous Curls",
      category: "Hair Artistry",
      image: "/images/ylg-curl-1.jpg",
      aspect: "square",
    },
    {
      id: "gal-8",
      title: "Deep Cellular Hydra-Infusion Treatment",
      category: "Skin & Beauty",
      image: "/images/bstar-hydrafacial.jpg",
      aspect: "wide",
    },
    {
      id: "gal-9",
      title: "Contemporary Textured Wolf Cut & Razor Taper",
      category: "Men's Grooming",
      image: "/images/bstar-mens-textured-cut.jpg",
      aspect: "tall",
    },
    {
      id: "gal-10",
      title: "Master Precision Scissor & Fringe Artistry",
      category: "Men's Grooming",
      image: "/images/bstar-precision-shears.jpg",
      aspect: "tall",
    },
    {
      id: "gal-11",
      title: "Bespoke Dual-Tone Silver Ash & Copper",
      category: "Hair Artistry",
      image: "/images/atelier-split-hair.jpg",
      aspect: "tall",
    },
    {
      id: "gal-12",
      title: "Serene Botanical Facial Therapy",
      category: "Skin & Beauty",
      image: "/images/s2-bg1.jpg",
      aspect: "tall",
    },
    {
      id: "gal-13",
      title: "High-Definition Red Carpet Lip & Velvet Base",
      category: "Makeup Artistry",
      image: "/images/ylg-bean-sheen.jpg",
      aspect: "square",
    },
    {
      id: "gal-14",
      title: "Couture Side-Braid & Smokey Eye Glam",
      category: "Makeup Artistry",
      image: "/images/ylg-bean-sheen.jpg",
      aspect: "tall",
    },
    {
      id: "gal-15",
      title: "Retro Hollywood Volume Silk Blowout",
      category: "Hair Styling",
      image: "/images/ylg-diva-2.jpg",
      aspect: "wide",
    },
    {
      id: "gal-16",
      title: "Sleek Precision Chestnut Bob & Fringe",
      category: "Hair Artistry",
      image: "/images/ylg-sample-3.jpg",
      aspect: "tall",
    },
    {
      id: "gal-17",
      title: "Feathered Caramel Layers & Volume Blowout",
      category: "Hair Styling",
      image: "/images/ylg-sample-2.jpg",
      aspect: "tall",
    },
    {
      id: "gal-18",
      title: "Artisanal Silk Strands & Stylist Comb Technique",
      category: "Hair Artistry",
      image: "/images/bstar-silk-comb.jpg",
      aspect: "square",
    },
    {
      id: "gal-19",
      title: "Dimensional Fluid Silk Hair Texture & Waves",
      category: "Hair Artistry",
      image: "/images/bstar-hair-texture.jpg",
      aspect: "square",
    },
    {
      id: "gal-20",
      title: "Luminous Sunlight Bridal Radiance & Veil",
      category: "Bridal Couture",
      image: "/images/bstar-couture-bride.jpg",
      aspect: "tall",
    },
  ],
  generalFaqs: [
    {
      question: "How do I book an appointment at B★Star?",
      answer:
        "You can book appointments 24/7 directly on our website at bstarsalon.com/book (or click 'Book Appointment'), call us at +91 99029 49549, or drop us a message on WhatsApp for instant confirmation.",
    },
    {
      question: "What are the salon hours?",
      answer:
        "B★Star Unisex Salon is open every day from 9:00 AM–9:00 PM, Monday–Sunday.",
    },
    {
      question: "Where is B★Star located?",
      answer:
        "We are conveniently located at No. 140, Stylo Plaza Building, TC Palya Main Rd (above Krishna Sagar Hotel and next to Kanti Sweets), Anandapura, Battarahalli, Bengaluru, Karnataka 560036.",
    },
    {
      question: "Do you accept walk-ins?",
      answer:
        "Yes, walk-in clients are always welcome based on staff availability. However, to guarantee your preferred timing and avoid wait times, booking in advance on bstarsalon.com/book or WhatsApp is recommended.",
    },
    {
      question: "How can I find the prices for specific services?",
      answer:
        "Our complete service menu features transparent prices: Men's Haircuts from ₹200, Women's Designer Haircuts from ₹550, Cleanups from ₹450, HydraFacials at ₹4,000, Keratin Treatments from ₹5,000, and Complete Bridal Packages from ₹6,000. All prices are verified and available on our Services page.",
    },
    {
      question: "What safety and hygiene standards do you follow?",
      answer:
        "At B★Star, hygiene is paramount. We use sanitized tools, single-use disposable essentials where applicable, premium international product lines, and maintain pristine styling stations.",
    },
  ],
  serviceFaqs: [
    {
      question: "What is the difference between Keratin and Hair Botox, and which is better for frizzy hair in Bengaluru's climate?",
      answer:
        "Keratin treatment focuses on straightening, smoothing, and eliminating stubborn frizz by coating the hair shaft with a protective protein barrier, lasting 3–5 months. Hair Botox is a deep conditioning, restorative treatment that repairs damaged, brittle fibers, restores elasticity, and softens curls without altering your natural wave pattern. In Bengaluru's fluctuating humidity and hard water conditions, Keratin is ideal if you want sleek, straight hair, while Hair Botox is best if you want deep cellular repair, moisture, and natural volume.",
    },
    {
      question: "How much do HydraFacials and bridal glow facials cost at B★Star Battarahalli?",
      answer:
        "At B★Star Unisex Salon Battarahalli, our medical-grade 7-step HydraFacial is ₹4,000, while specialized O3+ Bridal Glow facials are ₹4,000 and O3+ Whitening facials are ₹3,000. Cleanups start from ₹450 to ₹1,000. All treatments include customized skin analysis by certified aesthetic therapists.",
    },
    {
      question: "Do I need an appointment for balayage, hair botox, or bridal makeup, or are walk-ins accepted?",
      answer:
        "While we gladly accept walk-ins based on chair availability, chemical and artisanal services like balayage, hair botox, nanoplastia, and bridal makeup require 2 to 4 hours of dedicated stylist attention. We strongly recommend booking in advance via our website at bstarsalon.com/book or WhatsApp (+91 99029 49549) to secure your preferred senior stylist and avoid waiting.",
    },
    {
      question: "How long do Nanoplastia and permanent hair smoothening treatments last?",
      answer:
        "Permanent hair smoothening and straightening (Smooth Straight / Rebonding) at B★Star typically last between 4 to 8 months depending on your natural hair growth cycle and aftercare routine. We use premium formaldehyde-free botanical formulations and provide complimentary post-treatment guidance including sulfate-free shampoo recommendations to maximize longevity.",
    },
  ],
  whyChooseUs: [
    {
      title: "Bespoke Artistry",
      description:
        "Every client is unique. Our experienced stylists and therapists customize cuts, colors, and treatments to complement your natural beauty and lifestyle.",
      icon: "Sparkles",
    },
    {
      title: "Rigorous Hygiene",
      description:
        "Hospital-grade tool sterilization, sanitized stations, and single-use essentials ensure a clean, comfortable, and worry-free experience.",
      icon: "ShieldCheck",
    },
    {
      title: "Warm Luxury Atmosphere",
      description:
        "Relax in an intimate, editorial ambiance appointed with comfortable seating, ambient lighting, and welcoming hospitality.",
      icon: "Coffee",
    },
    {
      title: "4.3★ Google-Rated Excellence",
      description:
        "Rated 4.3★ on Google, with 339+ customer reviews praising our attentive styling, relaxing ambiance, and flawless results.",
      icon: "Star",
    },
  ],
};
