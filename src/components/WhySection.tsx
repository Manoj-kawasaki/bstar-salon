import React from "react";
import Image from "next/image";
import { Sparkles, ShieldCheck, Tag, MapPin, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function WhySection() {
  const proofPillars = [
    {
      icon: Sparkles,
      number: "01",
      title: "18+ Years of Master Styling in TC Palya (Since 2007)",
      description:
        "Over a decade of trusted hair coloring, foilayage, rebonding, and bridal transformations for men and women on TC Palya Main Road.",
    },
    {
      icon: ShieldCheck,
      number: "02",
      title: "Dermatologist-Tested & Ethically Sourced Formulations",
      description:
        "Clinical-grade skin care including Luxury O3+ Facials (₹1,356), Luxury Lotus Facials (₹1,356), HydraFacials, pore cleansing, and acne treatments.",
    },
    {
      icon: Tag,
      number: "03",
      title: "100% Transparent Luxury Pricing",
      description:
        "Upfront menu pricing with no hidden charges—Global Hair Color at ₹5,000, Full Head Highlights at ₹2,288, and easy payment via UPI, Google Pay (Tez), NFC, Credit & Debit Cards.",
    },
    {
      icon: MapPin,
      number: "04",
      title: "Prime Landmark Location & Daily 9 AM – 9 PM Hours",
      description:
        "Conveniently located at Stylo Plaza Building, above Krishna Sagar Hotel and next to Kanti Sweets at Anandapura Bus Stop, TC Palya Main Road, with free Wi-Fi, air conditioning, and convenient WhatsApp & Call assistance.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#1C110C] border-t border-[#F5EDD6]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="font-display tracking-[0.25em] text-[11px] sm:text-xs uppercase text-[#C5A059] mb-3 font-medium">
            Proven Trust &amp; Excellence · East Bengaluru
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5EDD6] leading-[1.12] font-light">
            Why 339+ Clients Rate B★Star the{" "}
            <span className="italic font-normal text-[#C5A059]">
              Best Salon in TC Palya &amp; Battarahalli
            </span>
          </h2>
        </div>

        {/* 4 Cards Grid with Espresso Brown and Metallic Gold Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch mb-16">
          {proofPillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="bg-[#241710] p-7 sm:p-9 border border-[#C5A059]/30 hover:border-[#C5A059] transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[#C5A059]">
                      Pillar {pillar.number}
                    </span>
                    <IconComponent className="w-5 h-5 text-[#C5A059] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="font-serif italic text-xl sm:text-2xl text-[#FAF3E3] mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#F5EDD6]/75 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Authentic Salon Atelier Showcase */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#241710] shadow-2xl border border-[#F5EDD6]/10">
          <Image
            src="/images/bstar-salon-interior.jpg"
            alt="Best salon in TC Palya - B-Star Unisex Salon styling stations and modern salon interior at Stylo Plaza"
            fill
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover object-center brightness-[0.95] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C110C]/85 via-[#1C110C]/30 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="inline-block font-display text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#C5A059] bg-[#1C110C]/90 backdrop-blur-md px-3.5 py-1.5 border border-[#C5A059]/30 shadow-lg whitespace-nowrap mb-1">
                Luxury Salon Atelier · TC Palya Main Road
              </span>
              <p className="font-serif italic text-base sm:text-xl text-[#FAF3E3] drop-shadow-md">
                18+ Stations of Couture Hair, Facial &amp; Bridal Artistry
              </p>
            </div>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#D4B97A] text-[#1C110C] font-sans font-bold text-xs uppercase tracking-[0.2em] px-6 py-3 shadow-lg transition-all duration-300 self-start sm:self-auto"
            >
              <span>WhatsApp Us</span>
              <ArrowUpRight className="w-4 h-4 text-[#1C110C]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
