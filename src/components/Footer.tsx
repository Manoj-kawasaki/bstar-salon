import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-[#1C110C] text-[#F5EDD6] py-16 md:py-24 border-t border-[#F5EDD6]/10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
        {/* Brand & Address */}
        <div className="max-w-xs">
          <Link href="/" className="inline-flex flex-col items-center mb-6 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 drop-shadow-md">
              <Image
                src="/images/bstar-logo-transparent.png"
                alt="B★Star Unisex Salon Logo Battarahalli Bengaluru"
                fill
                loading="lazy"
                className="object-contain group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 48px, 56px"
              />
            </div>
            <div className="mt-2 flex flex-col items-center text-center">
              <span className="font-display font-extrabold text-[14px] sm:text-[18px] tracking-[0.14em] text-[#F5EDD6] group-hover:text-[#C5A059] transition-colors leading-none uppercase">
                B<span className="brand-star text-[#C5A059]">★</span>STAR
              </span>
              <span className="font-sans text-[7px] sm:text-[8px] tracking-[0.12em] text-[#C5A059] uppercase mt-1.5 font-semibold block text-center">
                UNISEX SALON · BENGALURU
              </span>
            </div>
          </Link>
          <div className="font-sans text-sm tracking-wide leading-relaxed opacity-80">
            <p className="font-medium text-[#FAF3E3] mb-1">B★Star Unisex Salon</p>
            <p>{siteConfig.location.fullAddress}</p>
          </div>
        </div>

        {/* Contact & Hours */}
        <div className="flex flex-col gap-2 font-serif text-lg md:text-xl">
          <a
            href="tel:09902949549"
            className="hover:text-[#C5A059] transition-colors font-medium tracking-wide"
          >
            099029 49549
          </a>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#C5A059] transition-colors italic text-base text-[#C5A059]"
          >
            WhatsApp Us
          </a>
          <div className="mt-8 font-sans text-xs uppercase tracking-widest opacity-80 text-[#FAF3E3]">
            Mon–Sun: 9:00 AM – 9:00 PM
          </div>
        </div>

        {/* Links & Prominent Booking CTA */}
        <div className="flex flex-col items-start gap-5">
          <a
            href="https://book.zuyyu.com/b-star-unisex-saloon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#D4B97A] text-[#1C110C] font-sans font-bold text-xs uppercase tracking-[0.2em] px-6 py-3.5 shadow-lg transition-all duration-300 hover:scale-105 active:scale-98"
          >
            <span>Book Appointment</span>
            <span className="text-sm">↗</span>
          </a>
          <div className="flex flex-col gap-3 mt-4">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="font-sans text-[11px] uppercase tracking-[0.15em] opacity-60 hover:opacity-100 hover:text-[#C5A059] transition-all"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Hyper-Local Neighborhoods: Areas We Serve */}
      <div className="container mx-auto px-6 md:px-12 mt-16 pt-10 border-t border-[#F5EDD6]/10">
        <div className="max-w-4xl">
          <span className="font-serif italic text-xs tracking-wider text-[#C5A059] uppercase block mb-3">
            Areas We Serve Near TC Palya Main Road
          </span>
          <p className="font-sans text-xs text-[#F5EDD6]/70 leading-relaxed mb-4">
            Conveniently situated at Stylo Plaza, TC Palya Main Road, B★Star Unisex Salon welcomes clients seeking precision haircuts, keratin smoothening, hair botox, balayage, HydraFacials, and bridal styling from across:
          </p>
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[11px] font-sans tracking-wide text-[#F5EDD6]/60">
            {siteConfig.areasServed.map((area, index) => (
              <React.Fragment key={area}>
                <span>{area}</span>
                {index < siteConfig.areasServed.length - 1 && (
                  <span className="text-[#C5A059]/40 select-none">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="container mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-[#F5EDD6]/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-[10px] uppercase tracking-[0.2em] opacity-40">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Battarahalli · TC Palya · Bengaluru</p>
        </div>
      </div>
    </footer>
  );
}
