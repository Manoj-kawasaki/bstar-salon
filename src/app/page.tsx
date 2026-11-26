import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import ServicesOverview from "@/components/ServicesOverview";
import WhySection from "@/components/WhySection";
import TrustSection from "@/components/TrustSection";
import GalleryPreview from "@/components/GalleryPreview";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import BookingCTA from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: "Best Salon in TC Palya, Bengaluru | B★Star Unisex Salon (4.4★ Rated)",
  description:
    "Looking for the best salon in TC Palya Main Road? Rated 4.4★ by 350+ clients since 2007, B★Star Unisex Salon offers luxury Balayage, Global Hair Color (₹5,000), Keratin, HydraFacial, O3+ Facial (₹1,356) & Bridal Makeup at Stylo Plaza, Battarahalli.",
  alternates: {
    canonical: "https://bstarsalon.com/",
  },
  openGraph: {
    title: "Best Salon in TC Palya, Bengaluru | B★Star Unisex Salon (4.4★ Rated)",
    description:
      "Looking for the best salon in TC Palya Main Road? Rated 4.4★ by 350+ clients since 2007, B★Star Unisex Salon offers luxury Balayage, Global Hair Color (₹5,000), Keratin, HydraFacial, O3+ Facial (₹1,356) & Bridal Makeup at Stylo Plaza, Battarahalli.",
    url: "https://bstarsalon.com",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://bstarsalon.com/images/bstar-logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "Best Salon in TC Palya - B★Star Unisex Salon Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Salon in TC Palya, Bengaluru | B★Star Unisex Salon (4.4★ Rated)",
    description:
      "Looking for the best salon in TC Palya Main Road? Rated 4.4★ by 350+ clients since 2007, B★Star Unisex Salon offers luxury Balayage, Global Hair Color (₹5,000), Keratin, HydraFacial, O3+ Facial (₹1,356) & Bridal Makeup at Stylo Plaza, Battarahalli.",
    images: ["https://bstarsalon.com/images/bstar-logo-transparent.png"],
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Introduction */}
      <IntroSection />

      {/* 3. Services (01 Hair, 02 Skin, 03 Makeup, 04 Nails, 05 Grooming, 06 Bridal) */}
      <ServicesOverview />

      {/* 4. Why / Experience */}
      <WhySection />

      {/* 5. Trust (4.4★ Google-Rated / 350+ Reviews) */}
      <TrustSection />

      {/* 6. Gallery Preview */}
      <GalleryPreview />

      {/* 7. Location & Contact Experience */}
      <LocationSection />

      {/* 8. FAQ */}
      <FAQSection />

      {/* 9. Final Booking CTA */}
      <BookingCTA />
    </>
  );
}
