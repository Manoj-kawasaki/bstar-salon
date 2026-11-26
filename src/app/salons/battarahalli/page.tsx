import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  Star,
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Navigation,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Calendar,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Best Unisex Salon in Battarahalli, Bengaluru | B★STAR Unisex Salon (4.4★)",
  description:
    "Rated 4.4★ by 350+ clients since 2007. Visit B★STAR Unisex Salon at Stylo Plaza Building, TC Palya Main Rd, Battarahalli 560036 for Men's Haircut (₹200), Balayage (₹5,000), Keratin (₹5,000), HydraFacial (₹4,000) & Bridal Makeup (₹6,000).",
  alternates: {
    canonical: "https://bstarsalon.com/salons/battarahalli",
  },
  openGraph: {
    title: "Best Unisex Salon in Battarahalli, Bengaluru | B★STAR Unisex Salon (4.4★)",
    description:
      "Rated 4.4★ by 350+ clients since 2007. Located at Stylo Plaza, above Krishna Sagar Hotel, Battarahalli 560036. Open 9 AM–9 PM daily.",
    url: "https://bstarsalon.com/salons/battarahalli",
    type: "website",
    images: [
      {
        url: "https://bstarsalon.com/images/bstar-salon-interior.jpg",
        width: 1200,
        height: 630,
        alt: "Best Unisex Salon in Battarahalli Bengaluru - B★STAR Unisex Salon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Unisex Salon in Battarahalli, Bengaluru | B★STAR Unisex Salon (4.4★)",
    description:
      "Rated 4.4★ by 350+ clients. Stylo Plaza, TC Palya Main Rd, Battarahalli 560036. Haircuts, Balayage, Keratin, HydraFacial & Bridal Makeup.",
    images: ["https://bstarsalon.com/images/bstar-salon-interior.jpg"],
  },
};

export default function BattarahalliSalonPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://bstarsalon.com/salons/battarahalli#webpage",
        url: "https://bstarsalon.com/salons/battarahalli",
        name: "Best Unisex Salon in Battarahalli, Bengaluru | B★STAR Unisex Salon (4.4★)",
        description:
          "B★STAR Unisex Salon serves Battarahalli (560036) from Stylo Plaza Building above Krishna Sagar Hotel and next to Kanti Sweets at Anandapura Bus Stop on TC Palya Main Road.",
        about: {
          "@id": "https://bstarsalon.com/#salon",
        },
        isPartOf: {
          "@id": "https://bstarsalon.com/",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://bstarsalon.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Salons",
            item: "https://bstarsalon.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Battarahalli",
            item: "https://bstarsalon.com/salons/battarahalli",
          },
        ],
      },
    ],
  };

  const battarahalliHighlights = [
    {
      service: "Men's Precision Haircut & Styling",
      price: "₹200",
      category: "Men's Grooming",
      href: "/services/grooming",
      desc: "Tailored fades, classic scissor tapers, and everyday executive styling.",
    },
    {
      service: "Balayage & Global Hair Color",
      price: "₹5,000",
      category: "Hair Artistry",
      href: "/services/hair",
      desc: "Hand-painted dimensional balayage and full-coverage zero-ammonia rich color.",
    },
    {
      service: "Keratin Hair Smoothing",
      price: "₹5,000",
      category: "Hair Artistry",
      href: "/services/hair",
      desc: "Intensive protein smoothing engineered for frizz control in Bengaluru weather.",
    },
    {
      service: "HydraFacial Deep Pore Infusion",
      price: "₹4,000",
      category: "Skin Aesthetics",
      href: "/services/skin",
      desc: "Multi-step vortex pore cleansing, gentle exfoliation, and hyaluronic hydration.",
    },
    {
      service: "Luxury O3+ Bridal Glow Facial",
      price: "₹1,356",
      category: "Skin Aesthetics",
      href: "/services/skin",
      desc: "Oxygenating brightening facial for uneven tone and event-ready radiance.",
    },
    {
      service: "Highlights Full Head",
      price: "₹2,288",
      category: "Hair Artistry",
      href: "/services/hair",
      desc: "Micro-fine foil highlights blended seamlessly for natural movement and lift.",
    },
    {
      service: "Royal Bridal Makeup Package",
      price: "₹6,000",
      category: "Bridal Couture",
      href: "/services/bridal",
      desc: "HD wedding and reception makeup with saree draping and hair styling.",
    },
    {
      service: "Gel Nail Extensions & Art",
      price: "₹2,000",
      category: "Nail Studio",
      href: "/services/nails",
      desc: "Custom sculpted extensions, French tips, and chip-resistant gel overlays.",
    },
  ];

  const battarahalliLandmarks = [
    {
      landmark: "Krishna Sagar Hotel & Kanti Sweets",
      distance: "Same Building",
      note: "Stylo Plaza Building, 1st Floor directly above Krishna Sagar Hotel",
    },
    {
      landmark: "Anandapura Bus Stop (TC Palya Main Rd)",
      distance: "1 min walk",
      note: "Main road access with dedicated 2-wheeler & car parking",
    },
    {
      landmark: "Battarahalli Signal / Old Madras Road",
      distance: "2 mins",
      note: "Direct connection from Old Madras Road & Medahalli",
    },
    {
      landmark: "KR Puram Flyover & Hanging Bridge",
      distance: "5–7 mins",
      note: "Convenient drive along Old Madras Road towards Battarahalli",
    },
    {
      landmark: "Hoysala Nagar & Ramamurthy Nagar",
      distance: "4–6 mins",
      note: "Accessible via Anandapura Main Road & TC Palya junction",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <article className="min-h-screen bg-[#1C110C] text-[#F5EDD6] selection:bg-[#C5A059] selection:text-[#1C110C]">
        {/* Hero */}
        <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 px-6 md:px-12 overflow-hidden border-b border-[#F5EDD6]/10">
          <div className="absolute inset-0 z-0 opacity-25">
            <Image
              src="/images/bstar-salon-interior.jpg"
              alt="Best Unisex Salon in Battarahalli Bengaluru - B★STAR Unisex Salon at Stylo Plaza"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C110C] via-[#1C110C]/80 to-[#1C110C]/90" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#C5A059] mb-6"
            >
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 opacity-60" />
              <Link href="/services" className="hover:underline">
                Salons
              </Link>
              <ChevronRight className="w-3 h-3 opacity-60" />
              <span className="text-[#FAF3E3]">Battarahalli</span>
            </nav>

            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#241710] border border-[#C5A059]/30 text-xs font-sans text-[#FAF3E3] mb-5 hover:border-[#C5A059] transition-colors"
            >
              <div className="flex text-[#C5A059]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="font-semibold">4.4★ Rating</span>
              <span className="text-[#F5EDD6]/60">·</span>
              <span className="text-[#F5EDD6]/80">350+ Google Reviews</span>
            </Link>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FAF3E3] leading-[1.15] mb-6 font-light">
              Best Unisex Salon in{" "}
              <span className="font-normal italic text-[#C5A059] block sm:inline">
                Battarahalli, Bengaluru (560036)
              </span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#F5EDD6]/85 max-w-3xl leading-relaxed mb-8 font-light">
              Serving Battarahalli since 2007 from <strong>No. 140, Stylo Plaza Building</strong> (above Krishna Sagar Hotel and next to Kanti Sweets, at Anandapura Bus Stop on TC Palya Main Road). Walk in or book online for transparent, itemized hair, skin, grooming, and bridal services from <strong>9:00 AM to 9:00 PM daily</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#D4B97A] text-[#1C110C] font-sans font-bold text-xs uppercase tracking-[0.2em] px-7 py-4 shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </Link>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1A3828] hover:bg-[#204933] text-[#FAF3E3] border border-emerald-500/30 font-sans font-semibold text-xs uppercase tracking-[0.18em] px-6 py-4 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: 099029 49549</span>
              </a>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-[#241710] hover:bg-[#2F1F17] text-[#FAF3E3] border border-[#C5A059]/40 font-sans font-semibold text-xs uppercase tracking-[0.18em] px-6 py-4 transition-all"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call: 099029 49549</span>
              </a>

              <a
                href={siteConfig.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.18em] text-[#C5A059] hover:text-[#FAF3E3] py-4 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Google Maps Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Location & Landmarks */}
        <section className="py-20 px-6 md:px-12 bg-[#170E0A] border-b border-[#F5EDD6]/10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-[#241710] p-8 border border-[#F5EDD6]/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-[#C5A059] mb-4">
                  <MapPin className="w-6 h-6" />
                  <span className="font-sans font-bold text-xs uppercase tracking-[0.2em]">
                    Battarahalli Landmark Address
                  </span>
                </div>
                <h2 className="font-serif text-2xl text-[#FAF3E3] mb-3">
                  B★STAR Unisex Salon — Battarahalli 560036
                </h2>
                <p className="font-sans text-sm text-[#F5EDD6]/85 leading-relaxed mb-6">
                  <strong>No. 140, Stylo Plaza Building</strong>
                  <br />
                  Above Krishna Sagar Hotel, Next to Kanti Sweets
                  <br />
                  Anandapura Bus Stop, TC Palya Main Road
                  <br />
                  Battarahalli, Bengaluru, Karnataka 560036
                </p>

                <div className="space-y-2 border-t border-[#F5EDD6]/10 pt-4 text-xs font-sans text-[#F5EDD6]/80">
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#C5A059]" />
                    <span>
                      <strong>Hours:</strong> 9:00 AM – 9:00 PM Daily (Mon–Sun)
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                    <span>
                      <strong>Pay at Salon:</strong> UPI, GPay, PhonePe, Cards &amp; Cash (No advance required)
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#F5EDD6]/10 flex flex-wrap gap-4">
                <a
                  href={siteConfig.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#D4B97A] text-[#1C110C] font-sans font-bold text-xs uppercase tracking-[0.16em] px-5 py-3 transition-colors"
                >
                  <span>Directions on Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/salons/tc-palya"
                  className="inline-flex items-center gap-2 border border-[#F5EDD6]/30 hover:border-[#C5A059] font-sans text-xs uppercase tracking-[0.16em] px-5 py-3 text-[#FAF3E3] transition-colors"
                >
                  <span>TC Palya Main Road Guide</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-[#1C110C] p-8 border border-[#F5EDD6]/10">
              <div className="flex items-center gap-3 text-[#C5A059] mb-4">
                <Navigation className="w-6 h-6" />
                <span className="font-sans font-bold text-xs uppercase tracking-[0.2em]">
                  Battarahalli Access &amp; Landmarks
                </span>
              </div>
              <h2 className="font-serif text-2xl text-[#FAF3E3] mb-4">
                Reaching Us in Battarahalli
              </h2>
              <ul className="divide-y divide-[#F5EDD6]/10">
                {battarahalliLandmarks.map((item) => (
                  <li
                    key={item.landmark}
                    className="py-3.5 flex items-center justify-between gap-4 text-xs font-sans"
                  >
                    <div>
                      <p className="font-semibold text-[#FAF3E3]">{item.landmark}</p>
                      <p className="text-[#F5EDD6]/60 text-[11px] mt-0.5">{item.note}</p>
                    </div>
                    <span className="font-mono font-bold text-[#C5A059] bg-[#241710] px-2.5 py-1 rounded text-[11px] whitespace-nowrap">
                      {item.distance}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Transparent Prices */}
        <section className="py-24 px-6 md:px-12 bg-[#1C110C] border-b border-[#F5EDD6]/10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="font-serif italic text-base text-[#C5A059] tracking-wider block mb-2">
                  Upfront Menu Rates · No Hidden Charges
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF3E3] font-light">
                  Popular Services at Our Battarahalli Salon
                </h2>
              </div>
              <Link
                href="/services"
                className="font-sans text-xs uppercase tracking-[0.2em] text-[#C5A059] hover:text-[#FAF3E3] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>View Full 45+ Service Menu</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {battarahalliHighlights.map((item) => (
                <div
                  key={item.service}
                  className="bg-[#241710] p-6 border border-[#F5EDD6]/10 flex flex-col justify-between hover:border-[#C5A059]/40 transition-all duration-300"
                >
                  <div>
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#C5A059] block mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg text-[#FAF3E3] mb-2 leading-snug">
                      <Link href={item.href} className="hover:text-[#C5A059] transition-colors">
                        {item.service}
                      </Link>
                    </h3>
                    <p className="font-sans text-xs text-[#F5EDD6]/70 leading-relaxed mb-6 font-light">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#F5EDD6]/10 flex items-center justify-between">
                    <div>
                      <span className="font-sans text-[10px] uppercase tracking-wider text-[#F5EDD6]/50 block">
                        Price
                      </span>
                      <span className="font-serif text-lg font-medium text-[#C5A059]">
                        {item.price}
                      </span>
                    </div>
                    <Link
                      href="/book"
                      className="font-sans text-[11px] uppercase tracking-wider text-[#FAF3E3] hover:text-[#C5A059] font-medium"
                    >
                      Book ↗
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories & Helpful Links */}
        <section className="py-20 px-6 md:px-12 bg-[#170E0A] border-b border-[#F5EDD6]/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="font-serif italic text-base text-[#C5A059] tracking-wider block mb-2">
                Explore Our Departments
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF3E3] font-light">
                Complete Hair, Skin, Grooming &amp; Bridal Care
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteConfig.categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/services/${cat.slug}`}
                  className="bg-[#1C110C] p-6 border border-[#F5EDD6]/10 hover:border-[#C5A059]/50 transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif italic text-[#C5A059] text-sm">{cat.number}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C5A059] opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-serif text-xl text-[#FAF3E3] mb-2 group-hover:text-[#C5A059] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="font-sans text-xs text-[#F5EDD6]/70 leading-relaxed font-light">
                    {cat.shortDesc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews & CTA */}
        <section className="py-24 px-6 md:px-12 bg-[#1C110C] text-center">
          <div className="max-w-3xl mx-auto">
            <Sparkles className="w-6 h-6 text-[#C5A059] mx-auto mb-4" />
            <h2 className="font-serif text-3xl sm:text-5xl text-[#FAF3E3] mb-6 font-light">
              Visit B★STAR Unisex Salon in Battarahalli
            </h2>
            <p className="font-sans text-sm text-[#F5EDD6]/80 leading-relaxed mb-8 max-w-xl mx-auto font-light">
              Read feedback from 350+ Google reviewers or reserve your chair directly at No. 140, Stylo Plaza Building, TC Palya Main Road, Battarahalli.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/book"
                className="bg-[#C5A059] hover:bg-[#D4B97A] text-[#1C110C] font-sans font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 transition-all duration-300"
              >
                Book Chair Online
              </Link>
              <Link
                href="/reviews"
                className="border border-[#C5A059]/40 hover:border-[#C5A059] text-[#FAF3E3] font-sans font-semibold text-xs uppercase tracking-[0.18em] px-7 py-4 transition-colors"
              >
                Read Client Reviews
              </Link>
              <Link
                href="/salons/tc-palya"
                className="border border-[#F5EDD6]/30 hover:border-[#C5A059] text-[#FAF3E3] font-sans font-semibold text-xs uppercase tracking-[0.18em] px-7 py-4 transition-colors"
              >
                TC Palya Main Rd Branch
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
