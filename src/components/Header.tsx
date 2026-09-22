"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#1C110C]/95 backdrop-blur-md py-4 border-b border-[#F5EDD6]/10 shadow-xl"
            : "bg-gradient-to-b from-[#1C110C]/80 via-[#1C110C]/30 to-transparent py-5 md:py-7"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center group">
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[34px] tracking-[0.14em] text-[#F5EDD6] group-hover:text-[#C5A059] transition-colors leading-none">
                B<span className="text-[#C5A059] mx-0.5 text-xl sm:text-2xl font-normal">★</span>STAR
              </span>
              <span className="font-sans text-[8.5px] sm:text-[9.5px] tracking-[0.34em] uppercase text-[#C5A059] font-semibold mt-1.5 block">
                UNISEX SALOON · BENGALURU
              </span>
            </div>
          </Link>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {siteConfig.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`font-serif italic text-sm lg:text-base tracking-wide transition-all ${
                    isActive
                      ? "text-[#C5A059] border-b border-[#C5A059] pb-0.5"
                      : "text-[#F5EDD6]/90 hover:text-[#C5A059]"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Phone + Book Online CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#F5EDD6]/80 hover:text-[#C5A059] transition-colors"
            >
              <Phone size={13} strokeWidth={1.5} className="text-[#C5A059]" />
              <span className="font-sans">{siteConfig.phone}</span>
            </a>

            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-[#1C110C] bg-[#F5EDD6] hover:bg-[#C5A059] px-5 py-2.5 transition-all duration-300 flex items-center gap-1.5 shadow-md hover:shadow-lg active:scale-98"
            >
              <span>Book Online</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="font-sans text-[10px] uppercase tracking-widest text-[#1C110C] bg-[#C5A059] px-3 py-1.5 font-bold"
            >
              Book
            </a>
            <button
              className="text-[#F5EDD6] hover:text-[#C5A059] transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center -mr-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={26} strokeWidth={1.5} />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Overlay with 100dvh and Safe Areas for iOS & Android */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#1C110C] h-[100dvh] flex flex-col justify-between px-7 sm:px-8 pt-safe pb-safe animate-in fade-in duration-300">
          <div className="flex justify-between items-center border-b border-[#F5EDD6]/10 pb-5 pt-4">
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-2xl tracking-[0.14em] text-[#F5EDD6]">
                B<span className="text-[#C5A059] mx-0.5 text-xl font-normal">★</span>STAR
              </span>
              <span className="font-sans text-[8.5px] tracking-[0.34em] uppercase text-[#C5A059] font-semibold mt-0.5 block">
                UNISEX SALOON · BENGALURU
              </span>
            </div>
            <button
              className="text-[#F5EDD6] hover:text-[#C5A059] transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center -mr-2"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 my-auto overflow-y-auto py-6">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif italic text-[#F5EDD6] text-3xl sm:text-4xl tracking-wide flex items-center justify-between border-b border-[#F5EDD6]/10 pb-4 group"
              >
                <span className="group-hover:text-[#C5A059] transition-colors">
                  {item.title}
                </span>
                <ArrowUpRight
                  size={22}
                  className="text-[#F5EDD6]/30 group-hover:text-[#C5A059] transition-colors"
                />
              </Link>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#F5EDD6]/10 flex flex-col gap-4">
            <div className="flex items-center justify-between text-xs text-[#F5EDD6]/70">
              <span className="font-sans uppercase tracking-widest">Inquiries:</span>
              <a href={`tel:${siteConfig.phoneRaw}`} className="text-[#F5EDD6] font-medium hover:text-[#C5A059]">
                {siteConfig.phone}
              </a>
            </div>

            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full text-center font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#1C110C] bg-[#F5EDD6] py-3.5 hover:bg-[#C5A059] transition-colors"
            >
              Book Appointment Online ↗
            </a>
          </div>
        </div>
      )}
    </>
  );
}
