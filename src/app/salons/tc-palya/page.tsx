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
  title: "Best Unisex Salon in TC Palya Main Road, Bengaluru | B★Star Salon (4.4★)",
  description:
    "Rated 4.4★ by 350+ clients. Looking for the best salon in TC Palya? Visit B★Star at Stylo Plaza, TC Palya Main Rd for precision haircuts, balayage, keratin smoothening, hydrafacials & bridal rituals. Book online today.",
  alternates: {
    canonical: "https://bstarsalon.com/salons/tc-palya",
  },
  openGraph: {
    title: "Best Unisex Salon in TC Palya Main Road, Bengaluru | B★Star Salon (4.4★)",
    description:
      "Rated 4.4★ by 350+ clients. Visit B★Star Unisex Salon at Stylo Plaza, TC Palya Main Rd for haircuts, balayage, keratin, hydrafacials & bridal styling.",
    url: "https://bstarsalon.com/salons/tc-palya",
    type: "website",
    images: [
      {
        url: "https://bstarsalon.com/images/bstar-hero-crop1.jpg",
        width: 1200,
        height: 630,
        alt: "Best Salon in TC Palya Main Road Bengaluru - B★Star Unisex Salon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Unisex Salon in TC Palya Main Road, Bengaluru | B★Star Salon (4.4★)",
    description:
      "Rated 4.4★ by 350+ clients. Stylo Plaza, TC Palya Main Rd, Bengaluru. Master balayage, keratin, hydrafacials, and bridal styling.",
    images: ["https://bstarsalon.com/images/bstar-hero-crop1.jpg"],
  },
};

export default function TCPalyaSalonPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://bstarsalon.com/salons/tc-palya#webpage",
        url: "https://bstarsalon.com/salons/tc-palya",
        name: "Best Unisex Salon in TC Palya Main Road, Bengaluru | B★Star Salon (4.4★)",
        description:
          "Rated 4.4★ by 350+ clients. B★Star Unisex Salon is located at Stylo Plaza, TC Palya Main Road, Battarahalli, Bengaluru.",
        about: {
          "@id": "https://bstarsalon.com/#salon",
        },
        isPartOf: {
          "@id": "https://bstarsalon.com/",
        },
      },
      {
        "@type": ["HairSalon", "BeautySalon"],
        "@id": "https://bstarsalon.com/#salon",
        hasMap: "https://www.google.com/maps?cid=16646599397714059580",
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
            name: "TC Palya Main Road",
            item: "https://bstarsalon.com/salons/tc-palya",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Where is B★Star Unisex Salon located on TC Palya Main Road?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "B★Star Unisex Salon is located at No. 140, Stylo Plaza Building, directly above Krishna Sagar Hotel and next to Kanti Sweets, right at Anandapura Bus Stop on TC Palya Main Road, Battarahalli, Bengaluru 560036.",
            },
          },
          {
            "@type": "Question",
            name: "Why is B★Star rated the best salon in TC Palya?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "With a 4.4★ rating backed by over 350 verified Google reviews, B★Star is recognized as the top unisex salon on TC Palya Main Road for precision haircuts, master balayage, formaldehyde-free keratin & hair botox, dermatological HydraFacials, luxury bridal packages, and precision men's grooming.",
            },
          },
          {
            "@type": "Question",
            name: "What are the salon opening hours on TC Palya Main Road?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "B★Star Unisex Salon is open 7 days a week, Monday through Sunday, from 9:00 AM to 9:00 PM.",
            },
          },
          {
            "@type": "Question",
            name: "What services and prices are offered at B★Star TC Palya?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer 45+ luxury services including Global Hair Color (₹5,000), Full Head Highlights (₹2,288), Luxury Lotus Facial (₹1,356), Luxury O3+ Facial (₹1,356), HydraFacials, Keratin Smoothening, Hair Botox, Nanoplastia, Men's Grooming, and Bridal Packages.",
            },
          },
          {
            "@type": "Question",
            name: "Is parking available at B★Star Salon on TC Palya Main Road?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, convenient parking for both two-wheelers and cars is available at the Stylo Plaza Building premises for all B★Star clients.",
            },
          },
        ],
      },
    ],
  };

  const landmarkDistances = [
    {
      landmark: "Anandapura Bus Stop",
      distance: "0 mins",
      note: "Directly opposite Stylo Plaza",
    },
    {
      landmark: "Krishna Sagar & Kanti Sweets",
      distance: "0 mins",
      note: "Ground floor of our building",
    },
    {
      landmark: "Battarahalli Junction (Old Madras Rd)",
      distance: "2 mins",
      note: "600 meters straight down TC Palya Main Rd",
    },
    {
      landmark: "Ramamurthy Nagar Ring Road",
      distance: "3 mins",
      note: "Quick drive via Anandapura link",
    },
    {
      landmark: "NRI Layout & Kalkere",
      distance: "4 mins",
      note: "Direct route via TC Palya Main Road",
    },
    {
      landmark: "KR Puram Railway Station & Market",
      distance: "6 mins",
      note: "Easy access via Battarahalli flyover",
    },
  ];

  const pricingHighlights = [
    {
      service: "Global Hair Color (Full Coverage)",
      price: "₹5,000",
      category: "Hair Artistry",
      desc: "Zero-ammonia rich global shade formulation tailored to your skin undertone.",
    },
    {
      service: "Highlights (Full Head Foilayage)",
      price: "₹2,288",
      category: "Hair Artistry",
      desc: "Multidimensional French balayage or micro-fine foil highlights with seamless blend.",
    },
    {
      service: "Luxury Lotus Facial",
      price: "₹1,356",
      category: "Skin Aesthetics",
      desc: "Botanical active radiant treatment for deep hydration and youthful skin barrier restoration.",
    },
    {
      service: "Luxury O3+ Bridal Glow Facial",
      price: "₹1,356",
      category: "Skin Aesthetics",
      desc: "Medical-grade hyper-pigmentation correction and instant camera-ready radiance.",
    },
    {
      service: "Keratin Smoothening & Nanoplastia",
      price: "Starts from ₹3,499",
      category: "Hair Artistry",
      desc: "Formaldehyde-free frizz elimination, thermal realignment, and intense gloss lock.",
    },
    {
      service: "Advanced HydraFacial & Deep Pore Detox",
      price: "Starts from ₹1,999",
      category: "Skin Aesthetics",
      desc: "Vortex vacuum pore extraction, AHA/BHA chemical exfoliation, and antioxidant infusion.",
    },
    {
      service: "Men's Designer Fade & Beard Sculpting",
      price: "Starts from ₹250",
      category: "Men's Grooming",
      desc: "Razor skin fade, scissor silhouette tapering, hot towel beard contouring and styling.",
    },
    {
      service: "Bridal Makeup & Pre-Bridal Rituals",
      price: "Custom Packages",
      category: "Bridal Couture",
      desc: "HD airbrush bridal makeup, luxury pre-bridal glow regimens, saree draping & hairstyling.",
    },
  ];

  const neighborhoodList = [
    "TC Palya Main Road",
    "Battarahalli",
    "Anandapura",
    "Ramamurthy Nagar (560016)",
    "NRI Layout",
    "KR Puram (Krishnarajapura)",
    "Hoysala Nagar",
    "Kalkere",
    "Kithaganur",
    "Seegehalli",
    "Medahalli",
    "East Bengaluru",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      <article className="min-h-screen bg-[#1C110C] text-[#F5EDD6] selection:bg-[#C5A059] selection:text-[#1C110C]">
        {/* 1. Hero Section: Rich Local Search Dominance */}
        <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 px-6 md:px-12 overflow-hidden border-b border-[#F5EDD6]/10">
          <div className="absolute inset-0 z-0 opacity-25">
            <Image
              src="/images/bstar-hero-crop1.jpg"
              alt="Best Unisex Salon in TC Palya Main Road Bengaluru - B★Star Unisex Salon"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C110C] via-[#1C110C]/80 to-[#1C110C]/90" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto">
            {/* Breadcrumb Navigation */}
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
              <span className="text-[#FAF3E3]">TC Palya Main Road</span>
            </nav>

            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#241710] border border-[#C5A059]/30 text-xs font-sans text-[#FAF3E3] mb-5">
              <div className="flex text-[#C5A059]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="font-semibold">4.4★ Rating</span>
              <span className="text-[#F5EDD6]/60">·</span>
              <span className="text-[#F5EDD6]/80">350+ Verified Google Reviews</span>
            </div>

            {/* Primary H1 */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FAF3E3] leading-[1.15] mb-6 font-light">
              Best Unisex Salon in{" "}
              <span className="font-normal italic text-[#C5A059] block sm:inline">
                TC Palya Main Road, Bengaluru
              </span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#F5EDD6]/85 max-w-3xl leading-relaxed mb-8 font-light">
              Welcome to <strong>B★Star Unisex Salon</strong> at Stylo Plaza, Anandapura Bus Stop, TC Palya Main Road. Experience master hair coloring, French balayage, formaldehyde-free keratin smoothening, medical-grade HydraFacials, and royal bridal couture right in your neighborhood.
            </p>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#D4B97A] text-[#1C110C] font-sans font-bold text-xs uppercase tracking-[0.2em] px-7 py-4 shadow-xl transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: 099029 49549</span>
              </a>

              <a
                href="tel:09902949549"
                className="inline-flex items-center gap-2 bg-[#241710] hover:bg-[#2F1F17] text-[#FAF3E3] border border-[#C5A059]/40 font-sans font-semibold text-xs uppercase tracking-[0.18em] px-6 py-4 transition-all"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call: 099029 49549</span>
              </a>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1A3828] hover:bg-[#204933] text-[#FAF3E3] border border-emerald-500/30 font-sans font-semibold text-xs uppercase tracking-[0.18em] px-6 py-4 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Instant Inquiry</span>
              </a>

              <a
                href={siteConfig.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.18em] text-[#C5A059] hover:text-[#FAF3E3] py-4 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Open Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* 2. Physical Location, Landmarks & Distance Guide */}
        <section className="py-20 px-6 md:px-12 bg-[#170E0A] border-b border-[#F5EDD6]/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="font-serif italic text-base text-[#C5A059] tracking-wider block mb-2">
                Prime Location on TC Palya Main Road
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#FAF3E3] font-light">
                Convenient, Landmark Accessibility for East Bengaluru
              </h2>
              <p className="font-sans text-sm text-[#F5EDD6]/75 mt-3 leading-relaxed">
                Situated at the bustling intersection of TC Palya Main Road and Anandapura, B★Star Unisex Salon is easily reachable within minutes from anywhere in Battarahalli, KR Puram, NRI Layout, and Ramamurthy Nagar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* Address Card */}
              <div className="bg-[#241710] p-8 border border-[#F5EDD6]/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[#C5A059] mb-4">
                    <MapPin className="w-6 h-6" />
                    <span className="font-sans font-bold text-xs uppercase tracking-[0.2em]">
                      Salon Physical Address
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#FAF3E3] mb-3">
                    B★Star Unisex Salon
                  </h3>
                  <p className="font-sans text-sm text-[#F5EDD6]/85 leading-relaxed mb-6">
                    <strong>No. 140, Stylo Plaza Building</strong>
                    <br />
                    Above Krishna Sagar Hotel, Next to Kanti Sweets
                    <br />
                    Right at Anandapura Bus Stop, TC Palya Main Road
                    <br />
                    Battarahalli, Bengaluru, Karnataka 560036
                  </p>

                  <div className="space-y-2 border-t border-[#F5EDD6]/10 pt-4 text-xs font-sans text-[#F5EDD6]/80">
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#C5A059]" />
                      <span><strong>Hours:</strong> Open Every Day (Mon–Sun), 9:00 AM – 9:00 PM</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                      <span><strong>Parking:</strong> Dedicated 2-Wheeler &amp; 4-Wheeler Parking at Stylo Plaza</span>
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
                    <span>Get Directions</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center gap-2 border border-[#F5EDD6]/30 hover:border-[#C5A059] font-sans text-xs uppercase tracking-[0.16em] px-5 py-3 text-[#FAF3E3] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>099029 49549</span>
                </a>
                <Link
                  href="/salons/battarahalli"
                  className="inline-flex items-center gap-2 border border-[#F5EDD6]/30 hover:border-[#C5A059] font-sans text-xs uppercase tracking-[0.16em] px-5 py-3 text-[#FAF3E3] transition-colors"
                >
                  <span>Battarahalli 560036 Guide</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                </div>
              </div>

              {/* Landmark Distance Matrix */}
              <div className="bg-[#1C110C] p-8 border border-[#F5EDD6]/10">
                <div className="flex items-center gap-3 text-[#C5A059] mb-4">
                  <Navigation className="w-6 h-6" />
                  <span className="font-sans font-bold text-xs uppercase tracking-[0.2em]">
                    Neighborhood Distance Matrix
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-[#FAF3E3] mb-4">
                  How Fast Can You Reach Us?
                </h3>
                <ul className="divide-y divide-[#F5EDD6]/10">
                  {landmarkDistances.map((item) => (
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
          </div>
        </section>

        {/* 3. Signature Treatments & Transparent Pricing */}
        <section className="py-24 px-6 md:px-12 bg-[#1C110C] border-b border-[#F5EDD6]/10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="font-serif italic text-base text-[#C5A059] tracking-wider block mb-2">
                  Transparent Local Pricing
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF3E3] font-light">
                  Signature Salon Services in TC Palya
                </h2>
              </div>
              <Link
                href="/services"
                className="font-sans text-xs uppercase tracking-[0.2em] text-[#C5A059] hover:text-[#FAF3E3] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>View Complete 45+ Service Menu</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingHighlights.map((item) => (
                <div
                  key={item.service}
                  className="bg-[#241710] p-6 border border-[#F5EDD6]/10 flex flex-col justify-between hover:border-[#C5A059]/40 transition-all duration-300"
                >
                  <div>
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#C5A059] block mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg text-[#FAF3E3] mb-2 leading-snug">
                      {item.service}
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
                    <a
                      href={siteConfig.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[11px] uppercase tracking-wider text-[#FAF3E3] hover:text-[#C5A059] font-medium"
                    >
                      Inquire ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Why TC Palya Rates B★Star #1 */}
        <section className="py-24 px-6 md:px-12 bg-[#170E0A] border-b border-[#F5EDD6]/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-serif italic text-base text-[#C5A059] tracking-wider block mb-2">
                The B★Star Difference
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF3E3] font-light">
                Why TC Palya &amp; Battarahalli Choose Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#1C110C] p-8 border border-[#F5EDD6]/10">
                <Sparkles className="w-8 h-8 text-[#C5A059] mb-4" />
                <h3 className="font-serif text-xl text-[#FAF3E3] mb-3">
                  17+ Years of Hair Mastery
                </h3>
                <p className="font-sans text-xs text-[#F5EDD6]/75 leading-relaxed">
                  Established in 2007, our master stylists bring decades of expertise in precision scissor cuts, balayage contouring, keratin smoothening, and botanical scalp rejuvenation.
                </p>
              </div>

              <div className="bg-[#1C110C] p-8 border border-[#F5EDD6]/10">
                <ShieldCheck className="w-8 h-8 text-[#C5A059] mb-4" />
                <h3 className="font-serif text-xl text-[#FAF3E3] mb-3">
                  Zero-Ammonia &amp; Premium Products
                </h3>
                <p className="font-sans text-xs text-[#F5EDD6]/75 leading-relaxed">
                  We formulate exclusively with internationally certified, damage-free brands including L&apos;Oréal Professionnel, Lotus Herbals, and O3+ to guarantee healthy hair integrity.
                </p>
              </div>

              <div className="bg-[#1C110C] p-8 border border-[#F5EDD6]/10">
                <CheckCircle2 className="w-8 h-8 text-[#C5A059] mb-4" />
                <h3 className="font-serif text-xl text-[#FAF3E3] mb-3">
                  Hospital-Grade Hygiene &amp; Luxury Comfort
                </h3>
                <p className="font-sans text-xs text-[#F5EDD6]/75 leading-relaxed">
                  Every styling station, brush, and extraction tool undergoes rigorous UV sterilization. Enjoy a quiet, air-conditioned sanctuary away from traffic noise on TC Palya Main Rd.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Areas We Serve Cluster */}
        <section className="py-16 px-6 md:px-12 bg-[#1C110C] border-b border-[#F5EDD6]/10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-serif text-xl sm:text-2xl text-[#FAF3E3] mb-4">
              Local Neighborhoods We Serve Across East Bengaluru
            </h2>
            <p className="font-sans text-xs text-[#F5EDD6]/70 max-w-2xl mx-auto mb-6">
              Our central position at Stylo Plaza makes us the top choice for residents across all neighboring communities:
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs font-sans">
              {neighborhoodList.map((area) => (
                <span
                  key={area}
                  className="bg-[#241710] border border-[#F5EDD6]/10 px-3.5 py-1.5 text-[#FAF3E3]/85 rounded-sm"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Local FAQ Accordion */}
        <section className="py-24 px-6 md:px-12 bg-[#170E0A] border-b border-[#F5EDD6]/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="font-serif italic text-base text-[#C5A059] tracking-wider block mb-2">
                Have Questions?
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF3E3] font-light">
                TC Palya Salon FAQs
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-[#1C110C] p-6 border border-[#F5EDD6]/10">
                <h3 className="font-serif text-lg text-[#FAF3E3] mb-2">
                  Where is B★Star Unisex Salon located on TC Palya Main Road?
                </h3>
                <p className="font-sans text-xs text-[#F5EDD6]/80 leading-relaxed font-light">
                  B★Star Unisex Salon is located at No. 140, Stylo Plaza Building, directly above Krishna Sagar Hotel and next to Kanti Sweets, right at Anandapura Bus Stop on TC Palya Main Road, Battarahalli, Bengaluru 560036.
                </p>
              </div>

              <div className="bg-[#1C110C] p-6 border border-[#F5EDD6]/10">
                <h3 className="font-serif text-lg text-[#FAF3E3] mb-2">
                  Why is B★Star rated the best salon in TC Palya?
                </h3>
                <p className="font-sans text-xs text-[#F5EDD6]/80 leading-relaxed font-light">
                  With a 4.4★ rating backed by over 350 verified Google reviews, B★Star is recognized for its master colorists, zero-ammonia treatments, formaldehyde-free keratin &amp; hair botox, dermatological HydraFacials, and transparent pricing.
                </p>
              </div>

              <div className="bg-[#1C110C] p-6 border border-[#F5EDD6]/10">
                <h3 className="font-serif text-lg text-[#FAF3E3] mb-2">
                  What are your opening hours on TC Palya Main Road?
                </h3>
                <p className="font-sans text-xs text-[#F5EDD6]/80 leading-relaxed font-light">
                  We are open 7 days a week, Monday through Sunday, from 9:00 AM to 9:00 PM. Walk-ins are always welcomed, though advance booking is recommended on weekends.
                </p>
              </div>

              <div className="bg-[#1C110C] p-6 border border-[#F5EDD6]/10">
                <h3 className="font-serif text-lg text-[#FAF3E3] mb-2">
                  How do I book an appointment or check price quotes?
                </h3>
                <p className="font-sans text-xs text-[#F5EDD6]/80 leading-relaxed font-light">
                  You can book online 24/7 via our appointment portal, call us at{" "}
                  <a href="tel:09902949549" className="text-[#C5A059] underline">
                    099029 49549
                  </a>
                  , or message us on WhatsApp for a custom consultation.
                </p>
              </div>

              <div className="bg-[#1C110C] p-6 border border-[#F5EDD6]/10">
                <h3 className="font-serif text-lg text-[#FAF3E3] mb-2">
                  Is parking available at the salon?
                </h3>
                <p className="font-sans text-xs text-[#F5EDD6]/80 leading-relaxed font-light">
                  Yes, dedicated parking for both two-wheelers and cars is available at the Stylo Plaza Building premises for all B★Star clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Final High-Intent CTA */}
        <section className="py-24 px-6 md:px-12 bg-[#1C110C] text-center">
          <div className="max-w-3xl mx-auto">
            <span className="font-serif italic text-base text-[#C5A059] tracking-wider block mb-3">
              Visit Us Today on TC Palya Main Road
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#FAF3E3] mb-6 font-light">
              Experience the Best Salon in TC Palya
            </h2>
            <p className="font-sans text-sm text-[#F5EDD6]/80 leading-relaxed mb-8 max-w-xl mx-auto font-light">
              Transform your look with East Bengaluru&apos;s most trusted team of hair and skin artisans. Book your consultation today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C5A059] hover:bg-[#D4B97A] text-[#1C110C] font-sans font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 transition-all duration-300 hover:scale-105"
              >
                WhatsApp: 099029 49549
              </a>
              <a
                href="tel:09902949549"
                className="border border-[#F5EDD6]/30 hover:border-[#C5A059] text-[#FAF3E3] font-sans font-semibold text-xs uppercase tracking-[0.18em] px-7 py-4 transition-colors"
              >
                Call: 099029 49549
              </a>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
