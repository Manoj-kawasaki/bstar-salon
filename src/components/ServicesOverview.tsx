import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

export default function ServicesOverview() {
  const categories = siteConfig.categories;

  return (
    <section className="w-full bg-[#1C110C] py-24 sm:py-32 px-4 sm:px-8 lg:px-16 overflow-hidden border-t border-[#F5EDD6]/10">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Editorial Heading with B★STAR branding */}
        <div className="text-center mb-16 md:mb-24 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="font-display tracking-[0.25em] text-xs uppercase text-[#C5A059] font-medium">
              B★STAR UNISEX SALOON DISCIPLINES
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F5EDD6] leading-[1.08] font-normal tracking-tight">
            Discover Your <br />
            <span className="italic font-normal">Signature Ritual</span>
          </h2>
        </div>

        {/* 3-Column Balanced Editorial Layout (12 cols: 4 + 4 + 4) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-stretch">
          
          {/* Left Column: Atelier 01 with Split Ash/Copper Transformation Photo */}
          <div className="lg:col-span-4 relative min-h-[480px] lg:h-[640px] w-full overflow-hidden bg-[#241710] shadow-2xl">
            <Image
              src="/images/atelier-split-hair.jpg"
              alt="B★Star Atelier 01 Bespoke Color & Half-Split Transformation"
              fill
              className="object-cover object-center brightness-100 hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C110C]/85 via-[#1C110C]/35 to-transparent pointer-events-none" />
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-block font-display text-[10px] uppercase tracking-[0.2em] text-[#F5EDD6] bg-[#1C110C]/90 backdrop-blur-md px-3 py-1 border border-[#C5A059]/30 whitespace-nowrap shadow-md">
                Atelier 01
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <span className="font-serif italic text-base sm:text-lg text-[#F5EDD6] block drop-shadow-md">
                Bespoke Dual-Tone Color
              </span>
              <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#C5A059] block mt-0.5">
                Silver Ash & Honey Copper Foilayage
              </span>
            </div>
          </div>

          {/* Center Column: Elevated Cream Editorial Card */}
          <div className="lg:col-span-4 relative z-20 bg-[#F2E8D0] text-[#1C110C] p-7 sm:p-10 lg:p-10 shadow-2xl border border-[#1C110C]/10 flex flex-col justify-between">
            <div className="text-center mb-8 pb-5 border-b border-[#1C110C]/15">
              <span className="font-serif italic text-base text-[#1C110C]/70 block mb-1.5">
                Featured Disciplines
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1C110C] font-normal tracking-tight">
                Crafted for Elegance
              </h3>
            </div>

            {/* List of Featured Services */}
            <div className="divide-y divide-[#1C110C]/15">
              {categories.slice(0, 4).map((cat) => (
                <Link
                  key={cat.id}
                  href={`/services/${cat.slug}`}
                  className="group py-4 block text-center transition-all duration-300 hover:opacity-85"
                >
                  <h4 className="font-serif italic text-xl text-[#1C110C] group-hover:text-[#A8833E] transition-colors">
                    {cat.title}
                  </h4>
                  <p className="font-sans text-xs text-[#1C110C]/70 mt-1 font-light leading-relaxed max-w-xs mx-auto">
                    {cat.shortDesc}
                  </p>
                </Link>
              ))}
            </div>

            {/* View Full Menu CTA */}
            <div className="mt-6 pt-5 border-t border-[#1C110C]/15 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-serif italic text-sm sm:text-base text-[#1C110C] hover:text-[#A8833E] border-b border-[#1C110C]/40 hover:border-[#A8833E] pb-0.5 transition-colors"
              >
                <span>Explore Complete 6 Disciplines</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          {/* Right Column: Matched to user mockup (media_1790114118450.png) - Comb on left, Square Swatch top-right, Editorial card bottom-right */}
          <div className="lg:col-span-4 relative min-h-[480px] lg:h-[640px] w-full overflow-hidden bg-[#1C110C] shadow-2xl border border-[#F5EDD6]/10 flex flex-row">
            
            {/* Left: Full-Height Model with Comb (Uncompressed) */}
            <div className="relative w-[54%] h-full overflow-hidden border-r border-[#C5A059]/25 group">
              <Image
                src="/images/bstar-silk-comb.jpg"
                alt="Mirror Silk Combing Artistry at B★Star"
                fill
                className="object-cover object-[center_left] brightness-[1.02] contrast-[1.04] group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 55vw, 18vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C110C]/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-3 left-3 z-10">
                <span className="inline-block font-display text-[9px] uppercase tracking-[0.18em] text-[#F5EDD6] bg-[#1C110C]/90 backdrop-blur-md px-2.5 py-1 border border-[#C5A059]/30 whitespace-nowrap shadow-md">
                  Lustre 02
                </span>
              </div>
            </div>

            {/* Right: Square Swatch Top + Editorial Details Bottom */}
            <div className="w-[46%] h-full flex flex-col justify-between bg-[#1C110C] overflow-hidden">
              
              {/* Top: Square Hair Texture Swatch (Aspect Square, zero compression) */}
              <div className="relative w-full aspect-square overflow-hidden border-b border-[#C5A059]/25 group">
                <Image
                  src="/images/bstar-hair-texture.jpg"
                  alt="Chestnut Fluid Silk Swatch at B★Star"
                  fill
                  className="object-cover object-center brightness-105 contrast-[1.05] group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 1024px) 45vw, 15vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C110C]/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-2.5 right-2.5 z-10">
                  <span className="inline-block font-display text-[8.5px] uppercase tracking-[0.16em] text-[#C5A059] bg-[#1C110C]/90 backdrop-blur-md px-2 py-0.5 border border-[#C5A059]/30 whitespace-nowrap shadow-sm">
                    Texture
                  </span>
                </div>
              </div>

              {/* Bottom: Editorial Details */}
              <div className="p-3.5 sm:p-4 flex flex-col justify-center flex-1 bg-gradient-to-b from-[#1C110C] to-[#241710]">
                <span className="font-display text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-[#C5A059] font-medium block mb-1">
                  Lustre Finish
                </span>
                <h4 className="font-serif italic text-sm sm:text-base text-[#F5EDD6] leading-tight mb-2">
                  Mirror Silk Gloss Therapy
                </h4>
                <p className="font-sans text-[10px] sm:text-[11px] text-[#F5EDD6]/75 font-light leading-relaxed mb-3">
                  Our Kerafusion and Botoplexx protein infusion seals in mirror-like silk shine with long-lasting humidity protection.
                </p>
                <Link
                  href="/services/hair"
                  className="inline-flex items-center gap-1 font-serif italic text-xs text-[#C5A059] hover:text-[#D4B97A] border-b border-[#C5A059]/40 hover:border-[#D4B97A] pb-0.5 self-start transition-colors"
                >
                  <span>Explore Ritual</span>
                  <ArrowUpRight size={12} />
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
