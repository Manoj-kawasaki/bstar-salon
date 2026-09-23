import React from "react";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import ServicesOverview from "@/components/ServicesOverview";
import WhySection from "@/components/WhySection";
import TrustSection from "@/components/TrustSection";
import GalleryPreview from "@/components/GalleryPreview";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import BookingCTA from "@/components/BookingCTA";

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
