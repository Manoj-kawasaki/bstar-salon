"use client";

import React, { useState, useCallback, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { X, ChevronLeft, ChevronRight, Sparkles, ArrowUpRight } from "lucide-react";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(siteConfig.gallery.map((item) => item.category)));
    return ["All", ...cats];
  }, []);

  const filteredImages = useMemo(() => {
    if (selectedCategory === "All") return siteConfig.gallery;
    return siteConfig.gallery.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  }, [filteredImages.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  }, [filteredImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, nextImage, prevImage]);

  const currentItem = filteredImages[currentIndex] || filteredImages[0];

  return (
    <main className="min-h-screen bg-[#1C110C] text-[#F5EDD6] pt-28 md:pt-36 pb-32 font-sans selection:bg-[#C5A059] selection:text-[#1C110C]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Editorial Header */}
        <header className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#F5EDD6]/10 pb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-display tracking-[0.25em] text-xs uppercase text-[#C5A059]">
                Visual Portfolio & Couture Archive
              </span>
              <span className="h-[1px] w-12 bg-[#C5A059]/40" />
            </div>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight">
              Curated <span className="italic font-normal">Creations</span>
            </h1>
            <p className="font-sans text-sm sm:text-base text-[#F5EDD6]/70 mt-6 leading-relaxed max-w-xl">
              From signature balayage transformations and precision bob cuts to luxury bridal looks and clinical skin rituals, explore our live portfolio crafted in Bengaluru.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <span className="font-serif italic text-3xl sm:text-4xl text-[#C5A059]">
              {String(filteredImages.length).padStart(2, "0")} <span className="text-sm font-sans tracking-widest uppercase text-[#F5EDD6]/50">Showcases</span>
            </span>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-serif italic text-base text-[#F5EDD6] hover:text-[#C5A059] border-b border-[#F5EDD6]/30 hover:border-[#C5A059] pb-1 transition-colors"
            >
              <span>Book Your Transformation</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </header>

        {/* Minimal Editorial Category Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-14 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentIndex(0);
              }}
              className={`px-5 py-2 text-xs uppercase tracking-[0.18em] transition-all duration-300 font-sans ${
                selectedCategory === cat
                  ? "bg-[#F5EDD6] text-[#1C110C] font-semibold shadow-lg"
                  : "bg-transparent text-[#F5EDD6]/60 hover:text-[#F5EDD6] border border-[#F5EDD6]/15 hover:border-[#F5EDD6]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Masonry / Dynamic Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredImages.map((item, index) => {
            const isWide = item.aspect === "wide";
            const isTall = item.aspect === "tall";

            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden bg-[#241710] cursor-pointer transition-all duration-500 hover:-translate-y-1 ${
                  isWide ? "sm:col-span-2 aspect-[16/10]" : isTall ? "aspect-[3/4]" : "aspect-square"
                }`}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 brightness-95 group-hover:brightness-100"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C110C]/90 via-[#1C110C]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Number Badge Top Left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="font-display text-xs tracking-widest text-[#F5EDD6]/80 bg-[#1C110C]/70 backdrop-blur-md px-2.5 py-1 border border-[#F5EDD6]/10">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Category Pill Top Right */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C5A059] bg-[#1C110C]/80 backdrop-blur-md px-2.5 py-1">
                    {item.category}
                  </span>
                </div>

                {/* Title & Reveal Bottom */}
                <div className="absolute bottom-0 inset-x-0 p-5 z-10 flex flex-col justify-end transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-serif italic text-lg sm:text-xl text-[#F5EDD6] leading-snug drop-shadow-md">
                    {item.title}
                  </p>
                  <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#C5A059] mt-1.5 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View Showcase</span>
                    <ArrowUpRight size={12} />
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-24 pt-16 border-t border-[#F5EDD6]/10 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
          <div>
            <h3 className="font-serif italic text-2xl sm:text-3xl text-[#F5EDD6]">
              Desire a Bespoke Look?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#F5EDD6]/65 mt-2">
              Book a 1-on-1 aesthetic styling consultation with our master stylists at Battarahalli.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="px-6 py-3 border border-[#F5EDD6]/20 hover:border-[#F5EDD6] text-xs uppercase tracking-[0.2em] text-[#F5EDD6] transition-colors"
            >
              Call Salon
            </a>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-[#F5EDD6] text-[#1C110C] hover:bg-[#C5A059] text-xs uppercase tracking-[0.2em] font-semibold transition-colors"
            >
              Book Consultation
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && currentItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C110C]/97 backdrop-blur-md p-4 sm:p-8"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-[#F5EDD6] hover:text-[#C5A059] transition-colors z-50 p-2"
            aria-label="Close lightbox"
          >
            <X size={32} strokeWidth={1.2} />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-3 sm:left-8 text-[#F5EDD6] hover:text-[#C5A059] transition-colors z-50 p-3 bg-[#1C110C]/60 backdrop-blur-md rounded-full border border-[#F5EDD6]/10"
            aria-label="Previous image"
          >
            <ChevronLeft size={36} strokeWidth={1.2} />
          </button>

          {/* Centered Image Container */}
          <div 
            className="relative w-full max-w-5xl h-[70vh] sm:h-[78vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1280px) 90vw, 1200px"
              />
            </div>

            {/* Bottom Caption */}
            <div className="w-full mt-4 flex items-center justify-between text-[#F5EDD6] px-4">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#C5A059] block mb-1">
                  {currentItem.category}
                </span>
                <h4 className="font-serif italic text-lg sm:text-2xl text-[#F5EDD6]">
                  {currentItem.title}
                </h4>
              </div>
              <div className="font-display text-sm tracking-widest text-[#F5EDD6]/60">
                {String(currentIndex + 1).padStart(2, "0")} / {String(filteredImages.length).padStart(2, "0")}
              </div>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-3 sm:right-8 text-[#F5EDD6] hover:text-[#C5A059] transition-colors z-50 p-3 bg-[#1C110C]/60 backdrop-blur-md rounded-full border border-[#F5EDD6]/10"
            aria-label="Next image"
          >
            <ChevronRight size={36} strokeWidth={1.2} />
          </button>
        </div>
      )}
    </main>
  );
}
