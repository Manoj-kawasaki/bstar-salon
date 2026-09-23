import React from "react";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, Phone, Calendar, Sparkles } from "lucide-react";
import Image from "next/image";

export default function BookingCTA() {
  return (
    <section className="relative bg-[#1C110C] text-[#F5EDD6] py-32 sm:py-44 px-6 overflow-hidden flex items-center justify-center min-h-[75vh]">
      {/* Background Image: Authentic Salon Floor Artistry (Fresh Haircut in Session) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bstar-craft-floor.jpg"
          alt="B★Star Unisex Salon Bespoke Haircut Artistry in Session"
          fill
          priority
          className="object-cover object-center brightness-[0.68] contrast-[1.12] saturate-[1.15]"
          sizes="100vw"
        />
        {/* Editorial gradient vignettes for maximum text legibility & rich mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C110C] via-[#1C110C]/50 to-[#1C110C] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C110C]/90 via-transparent to-[#1C110C]/95 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-[circle_at_center,_rgba(197,160,89,0.12)_0%,_transparent_65%,_#1C110C_100%] pointer-events-none" />
      </div>

      {/* Center Stage Box */}
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        
        {/* Brand Kicker with Craft Tag */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#1C110C]/85 backdrop-blur-md border border-[#C5A059]/40 mb-6 shadow-xl animate-in fade-in duration-700">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span className="font-display tracking-[0.3em] uppercase text-[#C5A059] text-[11px] font-semibold">
            B★STAR UNISEX SALON · THE ART OF TRANSFORMATION
          </span>
        </div>

        {/* Artisanal Craft Statement */}
        <span className="font-serif italic text-lg sm:text-2xl text-[#E2C785] mb-4 block drop-shadow-md">
          “Hair on the floor. Confidence in every step.”
        </span>

        {/* Grand Headline */}
        <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#F5EDD6] mb-6 tracking-tight leading-[1.05] drop-shadow-2xl">
          Every Masterpiece <br />
          <span className="text-[#FAF3E3] italic font-serif">Starts in the Chair</span>
        </h2>

        {/* Editorial Subtitle */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#F5EDD6]/90 mb-8 max-w-xl leading-relaxed font-light drop-shadow-md">
          Step into our chair and let our master stylists craft the look you’ve dreamed of. From precision scissor cuts and couture balayage to revitalizing facials and royal bridal pampering.
        </p>

        {/* Google Rating Pill */}
        <div className="mb-10 inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1C110C]/75 backdrop-blur-md border border-[#C5A059]/30 text-xs font-sans text-[#F5EDD6]/90 shadow-lg">
          <span className="text-[#C5A059] font-bold">★ 4.3</span>
          <span className="text-[#C5A059]">•</span>
          <span>339+ Google Reviews</span>
          <span className="text-[#C5A059]">•</span>
          <span className="text-[#C5A059] font-medium">Battarahalli</span>
        </div>

        {/* High-Cachet Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-10">
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-[#C5A059] hover:bg-[#D4B97A] text-[#1C110C] font-sans font-bold text-xs uppercase tracking-[0.25em] px-9 py-4 shadow-2xl transition-all duration-300 hover:scale-105 active:scale-98"
          >
            <Calendar className="w-4 h-4 text-[#1C110C]" />
            <span>Book a Consultation</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#1C110C]" />
          </a>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-2.5 bg-[#1C110C]/80 hover:bg-[#1C110C] text-[#F5EDD6] hover:text-[#C5A059] border border-[#F5EDD6]/30 hover:border-[#C5A059] font-sans text-xs uppercase tracking-[0.2em] px-7 py-4 backdrop-blur-md transition-all duration-300"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Call {siteConfig.phone}</span>
          </a>
        </div>

        {/* Location & Hours Note */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#F5EDD6]/70 font-sans tracking-wide">
          <span>Stylo Plaza Building, TC Palya Main Rd, Battarahalli</span>
          <span>•</span>
          <span>Monday–Sunday, 9:00 AM–9:00 PM</span>
        </div>

      </div>
    </section>
  );
}
