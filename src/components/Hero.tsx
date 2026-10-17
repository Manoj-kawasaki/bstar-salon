import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      itemScope
      itemType="https://schema.org/HairSalon"
      className="relative w-full h-[100svh] min-h-[640px] max-h-[1100px] flex flex-col justify-between items-center overflow-hidden bg-[#1C110C]"
    >
      {/* Schema.org Microdata Hidden Meta tags for Instant Search Engine Rich Snippet Signals */}
      <meta itemProp="name" content="B★Star Unisex Salon" />
      <meta itemProp="alternateName" content="B-Star Unisex Salon Battarahalli" />
      <meta itemProp="url" content="https://bstarsalon.com" />
      <meta itemProp="telephone" content="+919902949549" />
      <meta itemProp="priceRange" content="₹₹" />
      <meta itemProp="image" content="https://bstarsalon.com/images/bstar-hero-crop1.jpg" />
      <div
        itemProp="address"
        itemScope
        itemType="https://schema.org/PostalAddress"
        className="hidden"
      >
        <span itemProp="streetAddress">No. 140, Stylo Plaza Building, TC Palya Main Rd</span>
        <span itemProp="addressLocality">Battarahalli</span>
        <span itemProp="addressRegion">Karnataka</span>
        <span itemProp="postalCode">560036</span>
        <span itemProp="addressCountry">IN</span>
      </div>
      <div
        itemProp="aggregateRating"
        itemScope
        itemType="https://schema.org/AggregateRating"
        className="hidden"
      >
        <span itemProp="ratingValue">4.3</span>
        <span itemProp="reviewCount">339</span>
        <span itemProp="bestRating">5</span>
      </div>

      {/* Background Image: Editorial 3-model hair couture showcase with keyword-rich alt text */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bstar-hero-crop1.jpg"
          alt="B★Star Unisex Salon Battarahalli - Best Haircut, Balayage, Keratin, HydraFacial and Bridal Salon in TC Palya Bengaluru"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_20%] sm:object-center brightness-[1.08] contrast-[1.02]"
        />
        {/* Soft editorial vignette overlays */}
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#1C110C]/70 via-[#1C110C]/25 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-[68%] sm:h-[56%] bg-gradient-to-t from-[#1C110C]/90 via-[#1C110C]/60 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_40%,_rgba(28,17,12,0.28)_100%] pointer-events-none" />
      </div>

      {/* Top Brand Kicker with Editorial Gold Hairlines */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-24 sm:pt-32 flex justify-center animate-in fade-in duration-700">
        <div className="inline-flex items-center gap-3 sm:gap-5 px-4 py-1">
          <span className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent via-[#C5A059] to-[#C5A059]" />
          <span className="font-display font-bold tracking-[0.34em] sm:tracking-[0.44em] uppercase text-[#C5A059] text-[10.5px] sm:text-[13px] drop-shadow-md whitespace-nowrap">
            B<span className="brand-star text-[#FAF3E3]">★</span>STAR UNISEX SALON · BENGALURU
          </span>
          <span className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent via-[#C5A059] to-[#C5A059]" />
        </div>
      </div>

      {/* Lower Editorial Stage: Sits gracefully below models' eye levels */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-12 sm:pb-16 flex flex-col items-center text-center mt-auto animate-in fade-in slide-in-from-bottom-6 duration-1000">
        {/* Semantic H1 with High-Intent Local Keywords & Editorial Sub-lines */}
        <h1 className="flex flex-col items-center text-center">
          <span className="font-display font-medium text-[10.5px] sm:text-xs uppercase tracking-[0.24em] sm:tracking-[0.30em] text-[#C5A059] mb-2 sm:mb-2.5 drop-shadow-sm">
            Best Unisex Hair, Skin &amp; Bridal Salon in Battarahalli, TC Palya Main Rd
          </span>
          <span className="font-serif italic text-base sm:text-xl md:text-2xl text-[#C5A059] mb-2 sm:mb-2.5 tracking-wide drop-shadow-md block">
            Couture Hair Artistry &amp; High-Performance Aesthetics
          </span>
          <span className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[70px] text-[#FAF3E3] font-light leading-[1.08] tracking-tight drop-shadow-2xl max-w-3xl block">
            The Art of <span className="font-normal italic text-[#C5A059] drop-shadow-lg">Bespoke Luxury</span>
          </span>
        </h1>

        {/* High-Intent Local SEO Description */}
        <p
          itemProp="description"
          className="font-sans text-xs sm:text-sm md:text-[15px] text-[#F5EDD6]/85 font-light leading-relaxed max-w-xl mx-auto mt-3 sm:mt-3.5 drop-shadow-md"
        >
          Rated 4.3★ by 339+ clients at Stylo Plaza, TC Palya Main Rd. East Bengaluru&apos;s premier salon for precision haircuts, keratin smoothening, hair botox, balayage, HydraFacials, and royal bridal couture.
        </p>

        {/* High-Intent Internal Service Anchor Links (PageRank & Semantic Relevancy Boost) */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mt-3 sm:mt-3.5 text-[11px] sm:text-xs font-sans text-[#F5EDD6]/70">
          <Link
            href="/services/hair"
            className="hover:text-[#C5A059] transition-colors underline-offset-4 hover:underline"
          >
            Haircut &amp; Balayage
          </Link>
          <span className="text-[#C5A059]/40 select-none">·</span>
          <Link
            href="/services/hair"
            className="hover:text-[#C5A059] transition-colors underline-offset-4 hover:underline"
          >
            Keratin &amp; Botox
          </Link>
          <span className="text-[#C5A059]/40 select-none">·</span>
          <Link
            href="/services/skin"
            className="hover:text-[#C5A059] transition-colors underline-offset-4 hover:underline"
          >
            HydraFacials
          </Link>
          <span className="text-[#C5A059]/40 select-none">·</span>
          <Link
            href="/services/grooming"
            className="hover:text-[#C5A059] transition-colors underline-offset-4 hover:underline"
          >
            Men&apos;s Styling (₹200)
          </Link>
          <span className="text-[#C5A059]/40 select-none">·</span>
          <Link
            href="/services/bridal"
            className="hover:text-[#C5A059] transition-colors underline-offset-4 hover:underline"
          >
            Bridal Makeup (₹6,000)
          </Link>
        </div>

        {/* High-Cachet CTAs with Crawlable Internal /book Links */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 mt-6 sm:mt-7 w-full sm:w-auto">
          <Link
            href="/book"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-[#C5A059] hover:bg-[#D4B97A] text-[#1C110C] font-sans font-bold text-xs uppercase tracking-[0.25em] shadow-[0_12px_30px_rgba(197,160,89,0.25)] hover:shadow-[0_16px_36px_rgba(197,160,89,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] trigger-booking-modal cursor-pointer"
          >
            <span>Book an Appointment</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#1C110C]" />
          </Link>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            itemProp="telephone"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 border border-[#F5EDD6]/20 hover:border-[#C5A059] text-[#F5EDD6] hover:text-[#C5A059] font-sans text-xs uppercase tracking-[0.2em] backdrop-blur-sm transition-all duration-300"
          >
            <span>Call +91 99029 49549</span>
          </a>
        </div>

        {/* Crawlable Local Trust Meta Line with Internal Links */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-5 text-[11px] sm:text-xs text-[#F5EDD6]/65 font-sans tracking-wider">
          <Link
            href="/reviews"
            className="text-[#C5A059] font-semibold hover:underline underline-offset-4 transition-colors"
          >
            ★ 4.3 Google Rating
          </Link>
          <span>·</span>
          <Link
            href="/reviews"
            className="hover:text-[#FAF3E3] transition-colors underline-offset-4 hover:underline"
          >
            339+ Google Reviews
          </Link>
          <span className="hidden sm:inline">·</span>
          <Link
            href="/contact"
            className="hidden sm:inline hover:text-[#C5A059] transition-colors underline-offset-4 hover:underline"
          >
            Stylo Plaza, Battarahalli
          </Link>
          <span>·</span>
          <span>Daily 9:00 AM–9:00 PM</span>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#F5EDD6]/35 pointer-events-none hidden md:flex">
        <span className="text-[8.5px] font-sans uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-5 bg-gradient-to-b from-[#F5EDD6]/35 to-transparent" />
      </div>
    </section>
  );
}
