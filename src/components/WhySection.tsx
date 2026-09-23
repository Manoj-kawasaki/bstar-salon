import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function WhySection() {
  const pillars = siteConfig.whyChooseUs;

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#1C110C] border-t border-[#F5EDD6]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="font-display tracking-[0.25em] text-[11px] sm:text-xs uppercase text-[#C5A059] mb-3 font-medium">
            The B<span className="brand-star">★</span>Star Standard
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5EDD6] leading-[1.1] font-light">
            Crafted with Care,{" "}
            <span className="italic font-normal text-[#C5A059]">Delivered with Precision</span>
          </h2>
        </div>

        {/* Two-column on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Pillars */}
          <div className="divide-y divide-[#F5EDD6]/10">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="py-5 sm:py-7 first:pt-0"
              >
                <div className="flex items-baseline gap-3 mb-1.5">
                  <span className="font-display text-[#C5A059] text-xs font-semibold">
                    0{i + 1}
                  </span>
                  <h3 className="font-serif italic text-xl sm:text-2xl text-[#F5EDD6]">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#F5EDD6]/70 leading-relaxed max-w-md pl-6 font-light">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Authentic Salon Atelier Image */}
          <div className="relative aspect-[4/3] sm:aspect-[3/4] w-full overflow-hidden bg-[#241710] shadow-2xl border border-[#F5EDD6]/10">
            <Image
              src="/images/bstar-salon-interior.jpg"
              alt="B★Star Unisex Salon Styling Atelier Floor at Stylo Plaza"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center brightness-[0.92] contrast-[1.05] hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C110C]/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 z-10">
              <span className="inline-block font-display text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#C5A059] bg-[#1C110C]/90 backdrop-blur-md px-3.5 py-1.5 border border-[#C5A059]/30 shadow-lg whitespace-nowrap">
                Salon Atelier · Battarahalli
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
