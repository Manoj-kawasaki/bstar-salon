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
  bookingUrl:
    "https://wa.me/919902949549?text=Hi%20B%E2%98%85Star%20Unisex%20Salon%2C%20I'd%20like%20to%20book%20an%20appointment.%20Please%20share%20available%20timings.",
  phone: "+91 99029 49549",
  phoneRaw: "+919902949549",
  whatsappUrl:
    "https://wa.me/919902949549?text=Hello%20B-Star%20Unisex%20Salon%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment.",
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
      shortDesc: "Bespoke cuts, French balayage, keratin smoothening, nanoplastia, and L'Oréal hair spa rituals.",
      longDesc:
        "From precision architecture cuts to French balayage, nanoplastia, hair botox, and deep scalp restoration, our master stylists elevate your hair's natural strength, texture, and movement.",
      image: "/images/ylg-sample-1.jpg",
      pinterestSearchPrompt: "luxury editorial hair photography dark background",
      services: [
        {
          id: "hair-cut-style",
          name: "Signature Designer Haircut & Blow-Dry",
          category: "hair",
          description: "Personalized consultation, scalp detox shampoo, tailored precision cut, split-end repair, and editorial blow-dry finish.",
          priceInfo: "Starts from ₹399",
          duration: "45–60 mins",
          benefits: ["Personalized facial contour analysis", "Premium nourishing wash & split-end repair", "Volume blow-dry & styling finish"],
          image: "/images/ylg-sample-2.jpg",
        },
        {
          id: "hair-color-balayage",
          name: "Couture Balayage, Global Color & Root Touch-Up",
          category: "hair",
          description: "Dimensional French balayage, seamless root touch-up, ammonia-free global color, customized toners, and bond-protecting formulation.",
          priceInfo: "Starts from ₹1,499",
          duration: "120–180 mins",
          benefits: ["French balayage & seamless color melting", "Ammonia-free global color & root touch-up", "Long-lasting luminous gloss & bond repair"],
          image: "/images/ylg-sample-1.jpg",
        },
        {
          id: "hair-keratin-botox",
          name: "Keratin Smoothening, Nanoplastia & Hair Botox",
          category: "hair",
          description: "Advanced hair smoothening, formaldehyde-free nanoplastia, and restorative hair botox therapy that eliminates frizz, repairs split ends, and delivers permanent straightening or silky manageable texture.",
          priceInfo: "Starts from ₹3,999",
          duration: "120–180 mins",
          benefits: ["Up to 3–5 months frizz control & split-end repair", "Formaldehyde-free Nanoplastia & Hair Botox", "Permanent straightening & hair smoothening options"],
          image: "/images/ylg-sample-5.jpg",
        },
        {
          id: "hair-scalp-spa",
          name: "Deep Restorative L'Oréal Hair Spa & Scalp Detox",
          category: "hair",
          description: "Intensive L'Oréal hair spa ritual, deep scalp detox clay, therapeutic ozone steam, and micro-circulation pressure point massage.",
          priceInfo: "Starts from ₹999",
          duration: "60 mins",
          benefits: ["L'Oréal professional deep conditioning", "Roots strengthening & anti-dandruff detox", "Follicle oxygenation & stress relief massage"],
          image: "/images/ylg-curl-1.jpg",
        },
      ],
      faqs: [
        {
          question: "What is the difference between Keratin, Hair Botox, and Nanoplastia?",
          answer:
            "Keratin gives smooth, frizz-free hair for 3–5 months. Hair Botox deeply restores damaged and brittle hair with intensive moisture and anti-aging peptides without flattening natural volume. Nanoplastia is an advanced organic, formaldehyde-free straightening treatment that provides maximum sleekness and mirror-like gloss for up to 6–8 months.",
        },
        {
          question: "How long does a balayage or global hair color session take?",
          answer:
            "A full couture balayage or dimensional coloring session takes approximately 2.5 to 3.5 hours, including personalized consultation, foil placement, bond-building toner, nourishing wash, and final blowout styling.",
        },
        {
          question: "What are the starting prices for hair treatments at B★Star Battarahalli?",
          answer:
            "Designer haircuts start from ₹399, L'Oréal hair spas start from ₹999, root touch-ups start from ₹1,499, balayage starts from ₹2,999, and keratin, nanoplastia or hair botox treatments start from ₹3,999 depending on hair length and density.",
        },
      ],
    },
    {
      id: "skin",
      slug: "skin",
      number: "02",
      title: "Skin / Beauty",
      shortDesc: "Advanced HydraFacials, O3+ bridal glow facials, ultrasonic de-tan packs, and Rica waxing.",
      longDesc:
        "Indulge in holistic skin wellness crafted to purify, brighten, and rehydrate your complexion under the care of certified aesthetic therapists in Battarahalli.",
      image: "/images/s2-bg1.jpg",
      pinterestSearchPrompt: "luxury facial skincare aesthetic therapy",
      services: [
        {
          id: "skin-gold-radiance",
          name: "Illuminating O3+ Bridal Glow & Radiance Facial",
          category: "skin",
          description: "Clinical O3+ bridal facial, botanical gold infusion, lymphatic facial sculpting, and deep cellular hydration for luminous glass-skin radiance.",
          priceInfo: "Starts from ₹1,499",
          duration: "60–75 mins",
          benefits: ["Immediate glass-skin bridal glow", "Deep pore declogging & lymphatic drainage", "High-performance O3+ botanical serums"],
          image: "/images/s2-bg1.jpg",
        },
        {
          id: "skin-hydra-therapy",
          name: "Advanced 7-Step HydraFacial & Deep Hydration",
          category: "skin",
          description: "Medical-grade HydraFacial therapy utilizing vortex suction, ultrasonic pore purification, pure hyaluronic acid infusion, and antioxidant barrier repair.",
          priceInfo: "Starts from ₹1,999",
          duration: "60 mins",
          benefits: ["Deep vortex blackhead extraction", "Intense hyaluronic acid hydration plump", "Zero downtime with immediate visible glow"],
          image: "/images/bstar-hydrafacial.jpg",
        },
        {
          id: "skin-detox-cleanse",
          name: "Deep Pore Cleanup & Ultrasonic De-Tan Pack",
          category: "skin",
          description: "Clarifying deep cleanup ritual with herbal de-tan pack, ultrasonic blackhead extraction, and soothing botanical tonics to eliminate sun damage.",
          priceInfo: "Starts from ₹799",
          duration: "45 mins",
          benefits: ["Removes stubborn tan & sun pigmentation", "Ultrasonic blackhead & whitehead extraction", "Balances sebum & calms active blemishes"],
          image: "/images/bstar-detox-facial.jpg",
        },
        {
          id: "skin-waxing-threading",
          name: "Rica Waxing & Precision Eyebrow Threading",
          category: "skin",
          description: "Gentle Italian Rica waxing for sensitive skin and precision eyebrow threading and facial arch contouring.",
          priceInfo: "Starts from ₹99",
          duration: "15–45 mins",
          benefits: ["Gentle Italian Rica lipophilic waxing", "Painless hair removal for sensitive skin", "Precision threading & arch contouring"],
          image: "/images/s2-bg1.jpg",
        },
      ],
      faqs: [
        {
          question: "How often should I get a facial or cleanup at B★Star?",
          answer:
            "For optimal cellular renewal and lasting radiance, we recommend scheduling professional skin treatments like HydraFacials or O3+ facials every 3 to 4 weeks.",
        },
        {
          question: "Do you have options for sensitive or acne-prone skin?",
          answer:
            "Yes. Our therapists assess your skin barrier before every treatment and utilize dermatologically tested, non-comedogenic formulations and painless Italian Rica waxing.",
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
          priceInfo: "Starts from ₹2,499",
          duration: "60–90 mins",
          benefits: ["12-hour camera longevity", "Customized false lash application", "Luminous skin finish"],
          image: "/images/ylg-diva-2.jpg",
        },
        {
          id: "makeup-engagement-reception",
          name: "Engagement & Sangeet Occasion Makeup",
          category: "makeup",
          description: "Elevated statement looks designed for dramatic evening lighting and celebratory high movement.",
          priceInfo: "Starts from ₹3,999",
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
          priceInfo: "Starts from ₹1,499",
          duration: "75–90 mins",
          benefits: ["3–4 weeks durability", "Protects natural nail bed", "Unlimited customized shapes"],
          image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1200&auto=format&fit=crop",
        },
        {
          id: "nail-luxury-pedicure",
          name: "Therapeutic Candle Spa Manicure & Pedicure",
          category: "nails",
          description: "Warm mineral foot soak, dead skin buffing, nourishing botanical scrub, and warm candle oil massage.",
          priceInfo: "Starts from ₹799",
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
      shortDesc: "Executive haircuts, skin fade haircuts, beard styling & shaping, and men's de-tan.",
      longDesc:
        "Engineered for gentlemen who value impeccable sharpness, refined silhouettes, and bespoke haircut architecture.",
      image: "/images/bstar-mens-textured-cut.jpg",
      pinterestSearchPrompt: "men luxury haircut editorial photography",
      services: [
        {
          id: "grooming-executive-cut",
          name: "Precision Scissor Haircut & Head Massage",
          category: "grooming",
          description: "Tailored aesthetic consultation, bespoke scissor detailing, relaxing cooling head massage, refreshing wash, and matte paste finish.",
          priceInfo: "Starts from ₹299",
          duration: "40–50 mins",
          benefits: ["Sharp tailored silhouettes", "Therapeutic relaxing head massage", "Matte pomade styling finish"],
          image: "/images/bstar-precision-shears.jpg",
        },
        {
          id: "grooming-textured-fade",
          name: "Skin Fade Haircut & Modern Taper Crop",
          category: "grooming",
          description: "Contemporary layered texture sculpting, crisp skin fade haircut, clean temple and neck taper, styled for effortless everyday volume.",
          priceInfo: "Starts from ₹349",
          duration: "35–45 mins",
          benefits: ["Textured dimensional crown", "Crisp skin fade & zero taper lines", "Effortless styling hold"],
          image: "/images/bstar-mens-textured-cut.jpg",
        },
        {
          id: "grooming-classic-barber",
          name: "Beard Styling & Shaping with Men's De-Tan",
          category: "grooming",
          description: "Sharp razor edge detailing, beard trimming & shaping, hot towel treatment, followed by an invigorating men's de-tan face pack.",
          priceInfo: "Starts from ₹249",
          duration: "45 mins",
          benefits: ["Beard styling, shaping & razor alignment", "Deep cleansing men's de-tan pack", "Hot towel beard conditioning"],
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
          priceInfo: "Starts from ₹7,999",
          duration: "180–240 mins",
          benefits: ["Tear-proof, humidity-resistant base", "Complete hair ornamentation & flower setting", "Master saree draping"],
          image: "/images/bstar-bridal-makeup.jpg",
        },
        {
          id: "bridal-reception-veil",
          name: "Couture Reception & Veil Artistry",
          category: "bridal",
          description: "Graceful contemporary reception glamour, veil & hair adornment, radiant skin prep, and luxury crystal detailing.",
          priceInfo: "Starts from ₹5,999",
          duration: "120–150 mins",
          benefits: ["Luminous glass skin finish", "Delicate veil & jewel pinning", "Camera-ready contour sculpting"],
          image: "/images/bstar-couture-bride.jpg",
        },
        {
          id: "bridal-pre-package",
          name: "Complete Pre-Bridal Glow Package",
          category: "bridal",
          description: "Full head-to-toe bridal preparation including HydraFacial glow therapy, full body polishing, Italian Rica waxing, and luxury spa manicure & pedicure.",
          priceInfo: "Starts from ₹4,999",
          duration: "180–240 mins",
          benefits: ["Comprehensive head-to-toe bridal rejuvenation", "Advanced skin glow & dead cell exfoliation", "Customized scheduling ahead of wedding date"],
          image: "/images/bstar-bridal-makeup.jpg",
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
        "Our service menu features transparent starting prices across all categories (Haircuts from ₹399, HydraFacials from ₹1,999, Keratin from ₹3,999). Exact pricing varies based on hair length and customized requirements, confirmed during your consultation.",
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
        "At B★Star Unisex Salon Battarahalli, our advanced 7-step HydraFacial treatments start from ₹1,999, while specialized O3+ and Gold bridal glow facials start from ₹1,499. Deep pore cleanups with de-tan packs start from ₹799. All treatments include customized skin analysis by certified aesthetic therapists.",
    },
    {
      question: "Do I need an appointment for balayage, hair botox, or bridal makeup, or are walk-ins accepted?",
      answer:
        "While we gladly accept walk-ins based on chair availability, chemical and artisanal services like balayage, hair botox, nanoplastia, and bridal makeup require 2 to 4 hours of dedicated stylist attention. We strongly recommend booking in advance via WhatsApp (+91 99029 49549) or online to secure your preferred senior stylist and avoid waiting.",
    },
    {
      question: "How long do Nanoplastia and permanent hair smoothening treatments last?",
      answer:
        "Nanoplastia and permanent hair smoothening at B★Star typically last between 4 to 8 months depending on your natural hair growth cycle and aftercare routine. We use premium formaldehyde-free botanical formulations and provide complimentary post-treatment guidance including sulfate-free shampoo recommendations to maximize longevity.",
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
