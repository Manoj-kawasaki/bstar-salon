"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { X, ArrowUpRight } from "lucide-react";

export default function GalleryPreview() {
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string; category: string } | null>(null);

  // We feature 4 distinct signature showcases from the B★Star couture archive
  const images = siteConfig.gallery.slice(0, 4);

  return (
    <section className="w-full bg-[#F2E8D0] py-24 sm:py-32 px-6 md:px-12 lg:px-20 text-[#1C110C]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Editorial Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#1C110C]/15 pb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-display tracking-[0.25em] text-xs uppercase text-[#C5A059] font-medium">
                Couture Visual Archive
              </span>
              <span className="h-[1px] w-12 bg-[#C5A059]" />
            </div>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#1C110C] leading-none tracking-tight font-normal">
              The <span className="italic font-normal">Gallery</span>
            </h2>
          </div>
          
          <Link
            href="/gallery"
            className="font-serif italic text-lg sm:text-xl text-[#1C110C] hover:text-[#C5A059] border-b border-[#1C110C]/40 hover:border-[#C5A059] pb-1 transition-all flex items-center gap-2 group"
          >
            <span>Explore All 20+ Showcases</span>
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Asymmetric Scattered Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Column 1: Large Featured Left */}
          <div className="md:col-span-5 flex flex-col">
            <div 
              className="relative w-full aspect-[3/4] cursor-pointer group overflow-hidden bg-[#1C110C]"
              onClick={() => setSelectedImage({ image: images[0].image, title: images[0].title, category: images[0].category })}
            >
              <Image
                src={images[0].image}
                alt={images[0].title}
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-[#1C110C]/20 group-hover:bg-[#1C110C]/40 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-[#F5EDD6] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C5A059] block">
                  {images[0].category}
                </span>
                <p className="font-serif italic text-lg leading-tight mt-0.5">
                  {images[0].title}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3 text-xs">
              <span className="font-serif italic text-base text-[#1C110C]/80">01 / {images[0].title}</span>
              <span className="font-sans uppercase tracking-widest text-[10px] text-[#1C110C]/50">{images[0].category}</span>
            </div>
          </div>

          {/* Column 2: Top Center + Small Offset */}
          <div className="md:col-span-3 flex flex-col md:mt-16">
            <div 
              className="relative w-full aspect-[4/5] cursor-pointer group overflow-hidden bg-[#1C110C]"
              onClick={() => setSelectedImage({ image: images[1].image, title: images[1].title, category: images[1].category })}
            >
              <Image
                src={images[1].image}
                alt={images[1].title}
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-[#1C110C]/20 group-hover:bg-[#1C110C]/40 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-[#F5EDD6] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C5A059] block">
                  {images[1].category}
                </span>
                <p className="font-serif italic text-base leading-tight mt-0.5">
                  {images[1].title}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3 text-xs">
              <span className="font-serif italic text-base text-[#1C110C]/80">02 / {images[1].title}</span>
              <span className="font-sans uppercase tracking-widest text-[10px] text-[#1C110C]/50">{images[1].category}</span>
            </div>
          </div>

          {/* Column 3: Medium Right & Statement */}
          <div className="md:col-span-4 flex flex-col md:mt-8">
            <div 
              className="relative w-full aspect-[3/4] cursor-pointer group overflow-hidden bg-[#1C110C]"
              onClick={() => setSelectedImage({ image: images[2].image, title: images[2].title, category: images[2].category })}
            >
              <Image
                src={images[2].image}
                alt={images[2].title}
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-[#1C110C]/20 group-hover:bg-[#1C110C]/40 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-[#F5EDD6] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C5A059] block">
                  {images[2].category}
                </span>
                <p className="font-serif italic text-base leading-tight mt-0.5">
                  {images[2].title}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3 text-xs">
              <span className="font-serif italic text-base text-[#1C110C]/80">03 / {images[2].title}</span>
              <span className="font-sans uppercase tracking-widest text-[10px] text-[#1C110C]/50">{images[2].category}</span>
            </div>

            {/* Editorial Quote Box */}
            <div className="mt-10 p-6 border-l-2 border-[#C5A059] bg-[#E8DFC8]/50">
              <p className="font-serif italic text-lg text-[#1C110C] leading-snug">
                "Real client transformations using internationally certified keratin, nanoplastia, and botoplexx rituals."
              </p>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#C5A059] block mt-2 font-medium">
                B★Star Styling Atelier
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-[#1C110C]/97 flex items-center justify-center p-4 sm:p-8 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-[#F5EDD6] hover:text-[#C5A059] transition-colors p-2 z-50"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X size={32} strokeWidth={1.2} />
          </button>
          
          <div 
            className="relative w-full max-w-4xl h-[75vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1024px) 90vw, 1000px"
              />
            </div>
            <div className="w-full text-center mt-4">
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#C5A059] block mb-1">
                {selectedImage.category}
              </span>
              <p className="font-serif italic text-2xl text-[#F5EDD6]">
                {selectedImage.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
