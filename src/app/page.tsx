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
  title:
    "B★Star Unisex Salon | Luxury Hair, Balayage, Bridal & HydraFacial in TC Palya, KR Puram, Bengaluru",
  description:
    "Rated 4.3★ by 339+ clients. Experience bespoke hair coloring, balayage, keratin treatments, O3+ & HydraFacials, and bridal couture at B★Star Unisex Salon on TC Palya Main Rd, Battarahalli, Bengaluru. Book online today.",
  alternates: {
    canonical: "https://bstarsalon.com",
  },
  openGraph: {
    title:
      "B★Star Unisex Salon | Luxury Hair, Balayage, Bridal & HydraFacial in TC Palya, KR Puram, Bengaluru",
    description:
      "Rated 4.3★ by 339+ clients. Experience bespoke hair coloring, balayage, keratin treatments, O3+ & HydraFacials, and bridal couture at B★Star Unisex Salon on TC Palya Main Rd, Battarahalli, Bengaluru. Book online today.",
    url: "https://bstarsalon.com",
    type: "website",
    images: [
      {
        url: "https://bstarsalon.com/images/bstar-logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "B★Star Unisex Salon Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "B★Star Unisex Salon | Luxury Hair, Balayage, Bridal & HydraFacial in TC Palya, KR Puram, Bengaluru",
    description:
      "Rated 4.3★ by 339+ clients. Experience bespoke hair coloring, balayage, keratin treatments, O3+ & HydraFacials, and bridal couture at B★Star Unisex Salon on TC Palya Main Rd, Battarahalli, Bengaluru. Book online today.",
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

      {/* 5. Trust (4.3★ Google-Rated / 339+ Reviews) */}
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
