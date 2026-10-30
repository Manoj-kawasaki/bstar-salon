import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import BookingCTA from "@/components/BookingCTA";
import { Metadata } from "next";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Best Salon in TC Palya Price List | Hair, Facial & Bridal Menu | B★Star Salon",
  description:
    "View transparent prices at TC Palya's best unisex salon: Full Head Highlights (₹2,288), Global Color (₹5,000), Luxury O3+ & Lotus Facials (₹1,356), Keratin, Rebonding, Hair Straightening, Acrylic Nails & Bridal Makeup.",
  alternates: {
    canonical: "https://bstarsalon.com/services",
  },
  openGraph: {
    title:
      "Best Salon in TC Palya Price List | Hair, Facial & Bridal Menu | B★Star Salon",
    description:
      "View transparent prices at TC Palya's best unisex salon: Full Head Highlights (₹2,288), Global Color (₹5,000), Luxury O3+ & Lotus Facials (₹1,356), Keratin, Rebonding, Hair Straightening, Acrylic Nails & Bridal Makeup.",
    url: "https://bstarsalon.com/services",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://bstarsalon.com/images/bstar-logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "Best Salon in TC Palya Price List - B★Star Unisex Salon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Salon in TC Palya Price List | Hair, Facial & Bridal Menu | B★Star Salon",
    description:
      "View transparent prices at TC Palya's best unisex salon: Full Head Highlights (₹2,288), Global Color (₹5,000), Luxury O3+ & Lotus Facials (₹1,356), Keratin, Rebonding, Hair Straightening, Acrylic Nails & Bridal Makeup.",
    images: ["https://bstarsalon.com/images/bstar-logo-transparent.png"],
  },
};

const serviceSilos = [
  {
    id: "hair",
    siloNumber: "Silo 01",
    heading: "Best Hair Salon in TC Palya — Color, Balayage & Keratin Treatments",
    description:
      "Master color formulation, French balayage contouring, formaldehyde-free keratin smoothing, and precision scissor craft for men and women.",
    categoryLink: "/services/hair",
    services: [
      { name: "Global Color", price: "₹5,000", tag: "Full Head Coverage" },
      { name: "Highlights Full Head", price: "₹2,288", tag: "Foilayage / Balayage" },
      { name: "Custom Balayage & Dual-Tone Foilayage", price: "Starts from ₹3,999", tag: "Couture Blend" },
      { name: "Keratin Treatment", price: "Starts from ₹3,499", tag: "Frizz-Free 5 Months" },
      { name: "Hair Rebonding", price: "Starts from ₹4,500", tag: "Pin-Straight Gloss" },
      { name: "Hair Straightening", price: "Starts from ₹4,000", tag: "Thermal Reformation" },
      { name: "Female Hair Cut & Blowdry", price: "Starts from ₹550", tag: "Designer Layers" },
      { name: "Men's Precision Haircut & Shaving", price: "Starts from ₹200", tag: "Executive Grooming" },
      { name: "Hair Extensions", price: "Consultation", tag: "100% Remy Human Hair" },
      { name: "Box Braids & Braids", price: "Starts from ₹1,200", tag: "Protective Styling" },
      { name: "Blow Dry & Easy Hairdos", price: "Starts from ₹399", tag: "Event Glam" },
      { name: "Shampoo & Conditioning Scalp Spa", price: "Starts from ₹299", tag: "Deep Cleansing" },
    ],
  },
  {
    id: "skin",
    siloNumber: "Silo 02",
    heading: "Advanced Skin Care & Best Facial Salon in TC Palya",
    description:
      "Dermatological-grade active facials, ultrasonic de-tan, and pore rejuvenation formulated for East Bengaluru's climate.",
    categoryLink: "/services/skin",
    services: [
      { name: "Luxury O3+ Facial", price: "₹1,356", tag: "Oxygenating Bridal Glow" },
      { name: "Luxury Lotus Facial", price: "₹1,356", tag: "Botanical Radiance" },
      { name: "Clinical HydraFacial", price: "Starts from ₹1,999", tag: "Vortex Vacuum Pore Detox" },
      { name: "Pore Cleansing & Deep Extraction", price: "Starts from ₹799", tag: "Sebum Regulation" },
      { name: "Acne Treatments & Clarifying Peel", price: "Starts from ₹999", tag: "Blemish Control" },
      { name: "Skin Care & Barrier Hydration", price: "Starts from ₹650", tag: "Cellular Nutrition" },
      { name: "Tanning Removal & De-Tan Pack", price: "Starts from ₹450", tag: "Instant Brightening" },
      { name: "Eyebrow Threading & Beautification", price: "Starts from ₹60", tag: "Precision Arching" },
      { name: "Eyelashes & Tinting", price: "Starts from ₹499", tag: "Lash Lifting" },
    ],
  },
  {
    id: "bridal",
    siloNumber: "Silo 03",
    heading: "Bridal Makeup & Event Styling in TC Palya, East Bengaluru",
    description:
      "Haute bridal couture, Muhurtham styling, reception HD airbrush artistry, and on-location mobile wedding services.",
    categoryLink: "/services/bridal",
    services: [
      { name: "Bridal Services & Muhurtham Makeup", price: "Starts from ₹6,000", tag: "HD Airbrush / Traditional" },
      { name: "Wedding & Event Preparation Packages", price: "Custom Packages", tag: "Pre-Bridal Full Glow" },
      { name: "HD Make-up Services (Party & Reception)", price: "Starts from ₹2,500", tag: "Camera-Ready" },
      { name: "Master Saree Draping & Flower Setting", price: "Starts from ₹500", tag: "Silk & Kanjeevaram" },
      { name: "Home Services & Mobile Salon Service", price: "By Appointment", tag: "At-Home Convenience" },
    ],
  },
  {
    id: "nails-spa",
    siloNumber: "Silo 04",
    heading: "Nail Artistry, Waxing & Luxury Spa in TC Palya",
    description:
      "Sculpted acrylic nail extensions, painless body waxing, therapeutic candle spapedicures, and stress-relief massages.",
    categoryLink: "/services/nails",
    services: [
      { name: "Acrylic Nails & Extensions", price: "Starts from ₹1,499", tag: "French Tips & Chrome" },
      { name: "Manicures (Candle & Botanical Spa)", price: "Starts from ₹550", tag: "Cuticle Care & Hydration" },
      { name: "Pedicures (Crystal Reflexology Spa)", price: "Starts from ₹750", tag: "Cracked Heel Healing" },
      { name: "Hand Wash & Hydrating Paraffin", price: "Starts from ₹299", tag: "Velvet Softness" },
      { name: "Brazilian Waxing (Rica Wax)", price: "Starts from ₹999", tag: "Painless Sensitives" },
      { name: "Full Body Waxing (Honey / Rica)", price: "Starts from ₹1,499", tag: "Silky Smooth Finish" },
      { name: "Permanent Hair Removal Consultation", price: "By Appointment", tag: "Advanced Laser Safe" },
      { name: "Massages & Body Spa Therapies", price: "Starts from ₹999", tag: "Deep Tissue & Head Relaxation" },
      { name: "Spa Services (Steam & Detox)", price: "Starts from ₹699", tag: "Full Body Rejuvenation" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#1C110C] text-[#F5EDD6]">
      {/* 1. Header Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto text-center border-b border-[#F5EDD6]/10">
        <span className="font-serif italic text-[#C5A059] text-base md:text-lg mb-3 block">
          Transparent 2026 Price List &amp; Service Menu
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FAF3E3] mb-6 leading-tight max-w-4xl mx-auto font-light">
          Best Salon in TC Palya Price List <br className="hidden md:block" />
          <span className="italic text-[#C5A059] text-2xl sm:text-4xl block mt-2 font-normal">
            Hair, Facial &amp; Bridal Menu · B★Star Salon
          </span>
        </h1>
        <p className="font-sans text-[#F5EDD6]/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-light">
          Experience 100% transparent pricing across 45+ luxury salon services for men and women. Rated <strong>4.3★ by 339+ clients</strong> at Stylo Plaza, TC Palya Main Road, Battarahalli, Bengaluru.
        </p>

        {/* Quick Highlights Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-8 text-xs font-sans text-[#FAF3E3]/90">
          <span className="bg-[#241710] border border-[#C5A059]/30 px-3.5 py-1.5 rounded-sm">
            Global Color: <strong>₹5,000</strong>
          </span>
          <span className="bg-[#241710] border border-[#C5A059]/30 px-3.5 py-1.5 rounded-sm">
            Highlights Full Head: <strong>₹2,288</strong>
          </span>
          <span className="bg-[#241710] border border-[#C5A059]/30 px-3.5 py-1.5 rounded-sm">
            Luxury Lotus Facial: <strong>₹1,356</strong>
          </span>
          <span className="bg-[#241710] border border-[#C5A059]/30 px-3.5 py-1.5 rounded-sm">
            Luxury O3+ Facial: <strong>₹1,356</strong>
          </span>
        </div>
      </section>

      {/* 2. Four Comprehensive Semantic H2 Service Silos */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="space-y-16">
          {serviceSilos.map((silo) => (
            <div
              key={silo.id}
              className="bg-[#241710] border border-[#C5A059]/30 p-8 md:p-12 shadow-2xl"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#F5EDD6]/10 mb-8">
                <div>
                  <span className="font-display font-bold text-xs uppercase tracking-[0.25em] text-[#C5A059] block mb-2">
                    {silo.siloNumber}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FAF3E3] font-light leading-snug">
                    {silo.heading}
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-[#F5EDD6]/70 mt-2 max-w-3xl leading-relaxed font-light">
                    {silo.description}
                  </p>
                </div>
                <Link
                  href={silo.categoryLink}
                  className="font-serif italic text-xs sm:text-sm text-[#C5A059] hover:text-[#FAF3E3] flex items-center gap-1.5 transition-colors shrink-0"
                >
                  <span>Explore Dedicated Category</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {silo.services.map((svc) => (
                  <div
                    key={svc.name}
                    className="bg-[#1C110C] p-5 border border-[#F5EDD6]/10 hover:border-[#C5A059]/40 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-sans text-[10px] uppercase tracking-wider text-[#C5A059] block mb-1.5">
                        {svc.tag}
                      </span>
                      <h3 className="font-serif italic text-lg text-[#FAF3E3] mb-2 leading-snug">
                        {svc.name}
                      </h3>
                    </div>
                    <div className="pt-3 border-t border-[#F5EDD6]/10 flex items-center justify-between mt-3">
                      <span className="font-sans text-xs font-semibold text-[#C5A059]">
                        {svc.price}
                      </span>
                      <a
                        href="https://book.zuyyu.com/b-star-unisex-saloon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-[11px] uppercase tracking-wider text-[#FAF3E3] hover:text-[#C5A059] font-medium"
                      >
                        Book ↗
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Alternating Editorial Visual Showcases */}
      <div className="bg-[#F2E8D0] text-[#1C110C]">
        <div className="py-16 text-center max-w-3xl mx-auto px-6">
          <span className="font-serif italic text-base text-[#1C110C]/70 block mb-2">
            Signature Visual Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C110C]">
            Experience the B★Star Atelier
          </h2>
        </div>
        {siteConfig.categories.map((category, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={category.id}
              className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} min-h-[60vh] border-b border-[#1C110C]/10 last:border-b-0`}
            >
              <div className="w-full lg:w-1/2 relative min-h-[40vh] lg:min-h-full">
                <Image
                  src={category.image}
                  alt={`${category.title} services at B★Star Unisex Salon TC Palya Main Road Battarahalli Bengaluru`}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-14 lg:p-20">
                <div className="max-w-xl w-full">
                  <span className="font-serif text-[#C5A059] text-xl mb-3 block">
                    {category.number}
                  </span>
                  <h3 className="font-serif text-2xl md:text-4xl mb-4 text-[#1C110C]">
                    {category.title}
                  </h3>
                  <p className="font-sans text-[#1C110C]/80 mb-6 leading-relaxed text-sm">
                    {category.shortDesc}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {category.services.slice(0, 3).map((service, i: number) => (
                      <div key={i} className="flex justify-between items-baseline gap-4 border-b border-[#1C110C]/10 pb-2">
                        <span className="font-serif italic text-base">{service.name}</span>
                        <span className="font-sans text-xs tracking-wider uppercase text-[#C5A059] font-medium shrink-0">
                          {service.priceInfo || "Starts from ₹399"}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/services/${category.slug}`}
                    className="inline-flex items-center gap-2 font-serif italic text-[#1C110C] hover:text-[#C5A059] transition-colors border-b border-current pb-1 text-sm"
                  >
                    Explore Detailed {category.title} Guide <span className="font-sans not-italic text-xs">→</span>
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 4. Service FAQs & CTA */}
      <div className="bg-[#1C110C]">
        <FAQSection faqs={siteConfig.serviceFaqs || siteConfig.generalFaqs} />
        <BookingCTA />
      </div>
    </main>
  );
}
