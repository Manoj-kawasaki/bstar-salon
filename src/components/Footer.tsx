import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-[#1C110C] text-[#F5EDD6] py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
        {/* Brand & Address */}
        <div className="max-w-xs">
          <Link href="/" className="inline-flex flex-col mb-6 group">
            <span className="font-display font-extrabold text-3xl sm:text-4xl tracking-[0.14em] text-[#F5EDD6] group-hover:text-[#C5A059] transition-colors leading-none">
              B<span className="brand-star text-[#C5A059]">★</span>STAR
            </span>
            <span className="font-sans text-[8.5px] sm:text-[9.5px] tracking-[0.34em] text-[#C5A059] uppercase mt-1.5 font-semibold block">
              UNISEX SALON · BENGALURU
            </span>
          </Link>
          <div className="font-sans text-sm tracking-wide leading-relaxed opacity-80">
            <p>{siteConfig.location.fullAddress}</p>
          </div>
        </div>

        {/* Contact & Hours */}
        <div className="flex flex-col gap-2 font-serif text-lg md:text-xl">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="hover:text-[#C5A059] transition-colors"
          >
            {siteConfig.phone}
          </a>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#C5A059] transition-colors italic text-base"
          >
            WhatsApp Us
          </a>
          <div className="mt-8 font-sans text-xs uppercase tracking-widest opacity-60">
            {siteConfig.location.hours}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col items-start gap-5">
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="font-serif italic text-xl hover:text-[#C5A059] transition-colors underline underline-offset-[6px] decoration-1 decoration-[#F5EDD6]/30 hover:decoration-[#C5A059]"
          >
            Book Appointment
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

      <div className="container mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-[#F5EDD6]/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-[10px] uppercase tracking-[0.2em] opacity-40">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p>Battarahalli, Bengaluru</p>
        </div>
      </div>
    </footer>
  );
}
