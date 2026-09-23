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
    "Experience bespoke hair artistry, advanced skin therapies, luxury bridal couture, and precision grooming at B★Star Unisex Salon, Battarahalli, Bengaluru.",
  url: "https://b-star-saloon.com",
  bookingUrl: "https://book.zuyyu.com/b-star-unisex-saloon",
  phone: "+91 99029 49549",
  phoneRaw: "+919902949549",
  whatsappUrl:
    "https://wa.me/919902949549?text=Hello%20B-Star%20Unisex%20Salon%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment.",
  googleReviewStats: {
    rating: 4.3,
    reviewCount: 339,
    ratingMax: 5.0,
    googleReviewUrl: "https://www.google.com/search?q=B-Star+Unisex+Saloon+Battarahalli+Bengaluru+reviews",
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
  navigation: [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
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
      shortDesc: "Bespoke cuts, couture color, botanical keratin, and deep scalp restoration rituals.",
      longDesc:
        "From precision architecture cuts to radiant balayage and deep restorative treatments, our master stylists tailor every touch to elevate your hair's natural strength, texture, and movement.",
      image: "/images/ylg-sample-1.jpg",
      pinterestSearchPrompt: "luxury editorial hair photography dark background",
      services: [
        {
          id: "hair-cut-style",
          name: "Signature Designer Haircut & Blow-Dry",
          category: "hair",
          description: "Personalized consultation, scalp detox shampoo, tailored precision cut, and editorial styling finish.",
          priceInfo: "Contact for price",
          duration: "45–60 mins",
          benefits: ["Personalized facial contour analysis", "Premium nourishing wash", "Volume blow-dry finish"],
          image: "/images/ylg-sample-2.jpg",
        },
        {
          id: "hair-color-balayage",
          name: "Couture Balayage & Global Color",
          category: "hair",
          description: "Dimensional hand-painted highlights, customized toners, and bond-protecting formulation.",
          priceInfo: "Contact for price",
          duration: "120–180 mins",
          benefits: ["Seamless color gradients", "Zero ammonia options available", "Long-lasting luminous gloss"],
          image: "/images/ylg-sample-1.jpg",
        },
        {
          id: "hair-keratin-botox",
          name: "Keratin Ritual & Hair Botox Therapy",
          category: "hair",
          description: "Deep protein infusion that eliminates frizz, restores split ends, and seals mirror-like silkiness.",
          priceInfo: "Contact for price",
          duration: "120–150 mins",
          benefits: ["Up to 3–5 months frizz control", "Deep cuticle repair", "Silky moisture shield"],
          image: "/images/ylg-sample-5.jpg",
        },
        {
          id: "hair-scalp-spa",
          name: "Intensive Anti-Dandruff & Scalp Detox Spa",
          category: "hair",
          description: "Exfoliating botanical clay treatment, therapeutic steam, and micro-circulation scalp massage.",
          priceInfo: "Contact for price",
          duration: "60 mins",
          benefits: ["Roots strengthening", "Stress relief pressure points", "Follicle oxygenation"],
          image: "/images/ylg-curl-1.jpg",
        },
      ],
      faqs: [
        {
          question: "How do I choose the best haircut or color for my face and hair type?",
          answer:
            "Every hair appointment at B★Star begins with a personalized consultation where our master stylists inspect your hair texture, lifestyle, and facial structure to recommend the most flattering silhouette and shade.",
        },
        {
          question: "How can I get exact pricing for hair treatments?",
          answer:
            "Pricing depends on hair length, density, and customized product formulations. Please contact B★Star directly via Call or WhatsApp, or visit our Stylo Plaza branch for a complimentary hair consultation.",
        },
      ],
    },
    {
      id: "skin",
      slug: "skin",
      number: "02",
      title: "Skin / Beauty",
      shortDesc: "Advanced revitalizing facials, targeted clinical glow treatments, and restorative skin nourishment.",
      longDesc:
        "Indulge in holistic skin wellness crafted to purify, brighten, and rehydrate your complexion under the care of certified aesthetic therapists.",
      image: "/images/s2-bg1.jpg",
      pinterestSearchPrompt: "luxury facial skincare aesthetic therapy",
      services: [
        {
          id: "skin-gold-radiance",
          name: "Illuminating Gold & Vitamin Radiance Facial",
          category: "skin",
          description: "Botanical gold infusion, lymphatic facial sculpting, and deep cellular hydration for radiant luminosity.",
          priceInfo: "Contact for price",
          duration: "60–75 mins",
          benefits: ["Immediate glass-skin radiance", "Deep pore declogging", "Lymphatic drainage massage"],
          image: "/images/s2-bg1.jpg",
        },
        {
          id: "skin-hydra-therapy",
          name: "Deep Moisture Infusion & Hydration Therapy",
          category: "skin",
          description: "Targeted hydration for stressed, dehydrated, or sun-exposed skin using pure hyaluronic serums.",
          priceInfo: "Contact for price",
          duration: "60 mins",
          benefits: ["Restores lipid barrier", "Plumps fine lines", "Soothes sensitive skin"],
          image: "/images/bstar-hydrafacial.jpg",
        },
        {
          id: "skin-detox-cleanse",
          name: "Ultrasonic Blackhead & Pore Purification",
          category: "skin",
          description: "Clarifying ritual combining ultrasonic extraction with calming herbal tonics to refine texture.",
          priceInfo: "Contact for price",
          duration: "45 mins",
          benefits: ["Eliminates congestion", "Balances sebum production", "Antimicrobial calm"],
          image: "/images/bstar-detox-facial.jpg",
        },
      ],
      faqs: [
        {
          question: "How often should I get a facial at B★Star?",
          answer:
            "For optimal cellular renewal and lasting radiance, we recommend scheduling professional skin treatments every 3 to 4 weeks.",
        },
        {
          question: "Do you have options for sensitive or acne-prone skin?",
          answer:
            "Yes. Our therapists assess your skin barrier before every treatment and utilize dermatologically tested, non-comedogenic formulations.",
        },
      ],
    },
    {
      id: "makeup",
      slug: "makeup",
      number: "03",
      title: "Makeup",
      shortDesc: "High-definition occasion makeup, glamorous party aesthetics, and camera-ready editorial beauty.",
      longDesc:
        "Whether attending an intimate gala, high-profile reception, or celebration, our artists craft flawless looks that accentuate your best features with luminous longevity.",
      image: "/images/ylg-diva-2.jpg",
      pinterestSearchPrompt: "luxury editorial makeup photography",
      services: [
        {
          id: "makeup-hd-party",
          name: "High-Definition Party & Cocktail Glam",
          category: "makeup",
          description: "Air-light base sculpting, signature eye artistry, soft focus contouring, and transfer-resistant setting.",
          priceInfo: "Contact for price",
          duration: "60–90 mins",
          benefits: ["12-hour camera longevity", "Customized false lash application", "Luminous skin finish"],
          image: "/images/ylg-diva-2.jpg",
        },
        {
          id: "makeup-engagement-reception",
          name: "Engagement & Sangeet Occasion Makeup",
          category: "makeup",
          description: "Elevated statement looks designed for dramatic evening lighting and celebratory high movement.",
          priceInfo: "Contact for price",
          duration: "90–120 mins",
          benefits: ["Waterproof tear-resistant formulation", "Full hair styling coordination", "Draping assistance"],
          image: "/images/ylg-bean-sheen.jpg",
        },
      ],
      faqs: [
        {
          question: "Should I bring reference pictures to my makeup appointment?",
          answer:
            "Yes, bringing references of looks you love along with photos of your outfit helps our artists coordinate colors, undertones, and intensity perfectly.",
        },
      ],
    },
    {
      id: "nails",
      slug: "nails",
      number: "04",
      title: "Nails",
      shortDesc: "Sculpted gel extensions, bespoke nail art, luxury manicures, and indulgent spa pedicures.",
      longDesc:
        "Transform your hands and feet into works of art with precision cuticle detailing, durable chip-free extensions, and relaxing therapeutic massage.",
      image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1600&auto=format&fit=crop",
      pinterestSearchPrompt: "luxury nail editorial photography",
      services: [
        {
          id: "nail-gel-extensions",
          name: "Couture Gel Extensions & Chrome Finishes",
          category: "nails",
          description: "Custom nail tip sculpting, premium hypoallergenic gel overlay, and high-shine glazed or velvet finishes.",
          priceInfo: "Contact for price",
          duration: "75–90 mins",
          benefits: ["3–4 weeks durability", "Protects natural nail bed", "Unlimited customized shapes"],
          image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1200&auto=format&fit=crop",
        },
        {
          id: "nail-luxury-pedicure",
          name: "Therapeutic Candle Spa Manicure & Pedicure",
          category: "nails",
          description: "Warm mineral foot soak, dead skin buffing, nourishing botanical scrub, and warm candle oil massage.",
          priceInfo: "Contact for price",
          duration: "60 mins",
          benefits: ["Relieves heel cracks & fatigue", "Deep cuticle nourishment", "Long-lasting gel polish"],
          image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop",
        },
      ],
      faqs: [
        {
          question: "How long do gel nail extensions last?",
          answer:
            "With proper care, our gel extensions last between 3 to 4 weeks. We recommend a refill every 21 days to maintain nail health and balance.",
        },
      ],
    },
    {
      id: "grooming",
      slug: "grooming",
      number: "05",
      title: "Grooming",
      shortDesc: "Executive haircuts, textured taper crops, precision fades, and master barbering.",
      longDesc:
        "Engineered for gentlemen who value impeccable sharpness, refined silhouettes, and bespoke haircut architecture.",
      image: "/images/bstar-mens-textured-cut.jpg",
      pinterestSearchPrompt: "men luxury haircut editorial photography",
      services: [
        {
          id: "grooming-executive-cut",
          name: "Executive Scissor Cut & Styling",
          category: "grooming",
          description: "Tailored aesthetic consultation, bespoke scissor and clipper detailing, neck shave, refreshing wash, and matte paste finish.",
          priceInfo: "Contact for price",
          duration: "40–50 mins",
          benefits: ["Sharp tailored silhouettes", "Precision scissor blending", "Matte pomade finish"],
          image: "/images/bstar-precision-shears.jpg",
        },
        {
          id: "grooming-textured-fade",
          name: "Modern Textured Crop & Taper Fade",
          category: "grooming",
          description: "Contemporary layered texture sculpting, clean temple and neck taper, styled for effortless everyday volume.",
          priceInfo: "Contact for price",
          duration: "35–45 mins",
          benefits: ["Textured dimensional crown", "Crisp skin taper lines", "Effortless styling hold"],
          image: "/images/bstar-mens-textured-cut.jpg",
        },
        {
          id: "grooming-classic-barber",
          name: "Classic Shear-Over-Comb Taper & Styling",
          category: "grooming",
          description: "Traditional shear-over-comb architecture, perimeter refinement, refreshing wash, and tailored blow-dry styling.",
          priceInfo: "Contact for price",
          duration: "45 mins",
          benefits: ["Timeless gentlemans silhouette", "Clean perimeter architecture", "Invigorating scalp wash"],
          image: "/images/bstar-mens-classic-cut.jpg",
        },
      ],
      faqs: [
        {
          question: "Do you offer walk-in grooming appointments?",
          answer:
            "Yes, walk-ins are welcome based on immediate chair availability. However, we strongly recommend reserving your slot online or via WhatsApp to eliminate wait times.",
        },
      ],
    },
    {
      id: "bridal",
      slug: "bridal",
      number: "06",
      title: "Bridal",
      shortDesc: "Royal Indian bridal makeup, couture reception styling, jewellery placement, and bespoke saree draping.",
      longDesc:
        "Every bride deserves unforgettable elegance. Our master artists curate complete bridal aesthetics — from high-definition camera-ready makeup to traditional hair ornamentation, jewel placement, and majestic saree draping.",
      image: "/images/bstar-bridal-makeup.jpg",
      pinterestSearchPrompt: "Indian luxury bridal beauty editorial photography",
      services: [
        {
          id: "bridal-muhurtham-glam",
          name: "Royal Muhurtham & Wedding Day Artistry",
          category: "bridal",
          description: "High-definition long-wear bridal makeup, traditional flower & hair ornamentation, intricate jewellery fixing, and royal saree draping.",
          priceInfo: "Contact for price",
          duration: "180–240 mins",
          benefits: ["Tear-proof, humidity-resistant base", "Complete hair ornamentation & flower setting", "Master saree draping"],
          image: "/images/bstar-bridal-makeup.jpg",
        },
        {
          id: "bridal-reception-veil",
          name: "Couture Reception & Veil Artistry",
          category: "bridal",
          description: "Graceful contemporary reception glamour, veil & hair adornment, radiant skin prep, and luxury crystal detailing.",
          priceInfo: "Contact for price",
          duration: "120–150 mins",
          benefits: ["Luminous glass skin finish", "Delicate veil & jewel pinning", "Camera-ready contour sculpting"],
          image: "/images/bstar-couture-bride.jpg",
        },
      ],
      faqs: [
        {
          question: "How early in advance should I book my bridal appointment?",
          answer:
            "Wedding dates fill up quickly. We recommend reserving your bridal date at least 2 to 3 months in advance to ensure dedicated artist availability.",
        },
        {
          question: "Do you offer bridal trials?",
          answer:
            "Yes, we conduct personalized consultation and trial sessions where we finalize your hair silhouette, makeup intensity, and jewellery coordination.",
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
      title: "Cascading Ruby Balayage & Silk Waves",
      category: "Hair Artistry",
      image: "/images/ylg-sample-1.jpg",
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
        "You can book directly 24/7 through our official online booking partner at book.zuyyu.com/b-star-unisex-saloon, call us at +91 99029 49549, or drop us a message on WhatsApp.",
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
        "Yes, walk-in clients are always welcome based on staff availability. However, to guarantee your preferred timing and avoid wait times, booking in advance is recommended.",
    },
    {
      question: "How can I find the prices for specific services?",
      answer:
        "Because our hair, skin, and bridal treatments are tailored to individual hair length, texture, and requirements, we provide customized pricing during consultation. Please contact us via phone or WhatsApp for instant pricing details.",
    },
    {
      question: "What safety and hygiene standards do you follow?",
      answer:
        "At B★Star, hygiene is paramount. We use sanitized tools, single-use disposable essentials where applicable, premium international product lines, and maintain pristine styling stations.",
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
