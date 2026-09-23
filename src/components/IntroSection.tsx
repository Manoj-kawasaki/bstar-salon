import React from "react";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-[#1C110C] text-[#F5EDD6] py-24 sm:py-32 px-6 md:px-12 lg:px-20 border-t border-[#F5EDD6]/10">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16 md:gap-24">
        
        {/* Large Editorial Headline */}
        <div className="w-full max-w-4xl">
          <span className="font-display tracking-[0.25em] text-xs uppercase text-[#C5A059] block mb-3 font-medium">
            Philosophy & Purpose
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[1.04] font-normal text-[#F5EDD6]">
            Ethically Sourced Formulations, <br className="hidden sm:inline" />
            <span className="italic font-normal">Exceptional Care</span>
          </h2>
        </div>

        {/* Two Column Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 pt-10 border-t border-[#F5EDD6]/15">
          <div className="md:col-span-3">
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="font-serif italic text-xl sm:text-2xl text-[#C5A059] tracking-wide">
                About Us
              </span>
              <span className="text-[#C5A059]/40 text-sm">·</span>
            </div>
            <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#F5EDD6]/50 block">
              Battarahalli, Bengaluru
            </span>
          </div>

          <div className="md:col-span-9 max-w-3xl">
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-[1.4] text-[#F5EDD6]/90 font-light">
              We believe that bespoke styling and beauty rituals should be an empowering experience. At B<span className="brand-star">★</span>Star, we combine dermatologist-tested formulations and master techniques to create looks that are as healthy as they are head-turning — ensuring your transformation is as effortless as it is stunning.
            </p>
          </div>
        </div>

        {/* Full-width Editorial Salon Image */}
        <div className="w-full flex justify-end">
          <div className="relative w-full md:w-[88%] aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-[#241710]">
            <Image
              src="/images/s2-bg1.jpg"
              alt="B★Star Luxury Salon Experience"
              fill
              className="object-cover object-center brightness-[0.85] hover:scale-102 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 85vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C110C]/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
