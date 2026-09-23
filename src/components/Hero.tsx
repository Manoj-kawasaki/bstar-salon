import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[100svh] min-h-[640px] max-h-[1100px] flex flex-col justify-between items-center overflow-hidden bg-[#1C110C]">
      {/* Background Image: Editorial 3-model hair couture showcase */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bstar-hero-crop1.jpg"
          alt="B★STAR Unisex Saloon Bengaluru Haute Coiffure"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_20%] sm:object-center brightness-[0.92] contrast-[1.04]"
        />
        {/* Soft editorial vignette overlays */}
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#1C110C]/85 via-[#1C110C]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-[68%] sm:h-[56%] bg-gradient-to-t from-[#1C110C] via-[#1C110C]/80 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_40%,_rgba(28,17,12,0.45)_100%] pointer-events-none" />
      </div>

      {/* Top Brand Kicker with Editorial Gold Hairlines */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-24 sm:pt-32 flex justify-center animate-in fade-in duration-700">
        <div className="inline-flex items-center gap-3 sm:gap-5 px-4 py-1">
          <span className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent via-[#C5A059] to-[#C5A059]" />
          <span className="font-display font-bold tracking-[0.34em] sm:tracking-[0.44em] uppercase text-[#C5A059] text-[10.5px] sm:text-[13px] drop-shadow-md whitespace-nowrap">
            B<span className="text-[#FAF3E3] font-normal mx-0.5">★</span>STAR UNISEX SALOON · BENGALURU
          </span>
          <span className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent via-[#C5A059] to-[#C5A059]" />
        </div>
      </div>

      {/* Lower Editorial Stage: Sits gracefully below models' eye levels */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-12 sm:pb-16 flex flex-col items-center text-center mt-auto animate-in fade-in slide-in-from-bottom-6 duration-1000">
        {/* Poetic Lead-in */}
        <p className="font-serif italic text-base sm:text-xl md:text-2xl text-[#C5A059] mb-2 sm:mb-3 tracking-wide drop-shadow-md">
          Couture Hair Artistry & High-Performance Aesthetics
        </p>

        {/* Editorial Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[70px] text-[#FAF3E3] font-light leading-[1.08] tracking-tight drop-shadow-2xl max-w-3xl">
          The Art of <span className="font-normal italic text-[#C5A059] drop-shadow-lg">Bespoke Luxury</span>
        </h1>

        {/* Concise Luxury Description */}
        <p className="font-sans text-xs sm:text-sm md:text-[15px] text-[#F5EDD6]/85 font-light leading-relaxed max-w-xl mx-auto mt-3 sm:mt-4 drop-shadow-md">
          Bengaluru&apos;s premier atelier for couture balayage, botanical skin revitalisation, royal bridal artistry, and precision grooming.
        </p>

        {/* High-Cachet CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto">
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-[#C5A059] hover:bg-[#D4B97A] text-[#1C110C] font-sans font-bold text-xs uppercase tracking-[0.25em] shadow-[0_12px_30px_rgba(197,160,89,0.25)] hover:shadow-[0_16px_36px_rgba(197,160,89,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]"
          >
            <span>Reserve Your Experience</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#1C110C]" />
          </a>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 border border-[#F5EDD6]/20 hover:border-[#C5A059] text-[#F5EDD6] hover:text-[#C5A059] font-sans text-xs uppercase tracking-[0.2em] backdrop-blur-sm transition-all duration-300"
          >
            <span>Call +91 99029 49549</span>
          </a>
        </div>

        {/* Trust Meta Line */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-5 text-[11px] sm:text-xs text-[#F5EDD6]/65 font-sans tracking-wider">
          <span className="text-[#C5A059] font-semibold">★ 4.3 Google Rating</span>
          <span>·</span>
          <span>339+ Verified Reviews</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">Stylo Plaza, Battarahalli</span>
          <span>·</span>
          <span>Daily 9 AM – 9 PM</span>
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
