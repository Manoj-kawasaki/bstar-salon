import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Phone,
  Wifi,
  CreditCard,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

export default function LocationSection() {
  const { location } = siteConfig;

  const nearbyAreas = [
    "KR Puram (Krishnarajapura)",
    "NRI Layout (560016)",
    "Ramamurthy Nagar (560016)",
    "Anandapura",
    "Battarahalli",
    "Hoysala Nagar",
    "Kalkere",
  ];

  return (
    <section className="bg-[#1C110C] text-[#F5EDD6] py-24 px-6 md:px-12 border-t border-[#F5EDD6]/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Landmark & Proximity Details */}
        <div className="lg:col-span-7 flex flex-col space-y-8">
          <div>
            <span className="font-serif italic text-base sm:text-lg text-[#C5A059] block mb-2">
              Hyper-Local Proximity &amp; Directions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FAF3E3] font-light leading-tight">
              Visit B★Star Unisex Salon on{" "}
              <span className="italic font-normal text-[#C5A059] block sm:inline">
                TC Palya Main Road, Bengaluru 560036
              </span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#F5EDD6]/85 leading-relaxed mt-4 max-w-2xl font-light">
              Located at <strong>Stylo Plaza Building</strong>, right above Krishna Sagar Hotel and next to Kanti Sweets at <strong>Anandapura Bus Stop</strong> on TC Palya Main Road, Battarahalli, Bengaluru, Karnataka 560036.
            </p>
          </div>

          {/* Quick Nearby Areas Proximity Badge */}
          <div className="bg-[#241710] p-6 border border-[#C5A059]/30">
            <span className="font-display font-semibold text-xs uppercase tracking-[0.2em] text-[#C5A059] block mb-2">
              Nearby Areas Served (Less Than 10 Mins Away)
            </span>
            <p className="font-sans text-xs sm:text-sm text-[#F5EDD6]/80 leading-relaxed font-light mb-3">
              Fast, direct accessibility from all key East Bengaluru neighborhoods:
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-sans">
              {nearbyAreas.map((area) => (
                <span
                  key={area}
                  className="bg-[#1C110C] border border-[#F5EDD6]/15 px-3 py-1 text-[#FAF3E3] rounded-xs"
                >
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-[#F5EDD6]/10">
              <Link
                href="/salons/tc-palya"
                className="font-sans text-xs uppercase tracking-[0.16em] text-[#C5A059] hover:underline inline-flex items-center gap-1.5"
              >
                <span>Explore Full TC Palya Branch Guide &amp; Landmark Distances</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Amenities & Hours Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#241710]/70 p-5 border border-[#F5EDD6]/10">
              <div className="flex items-center gap-2 text-[#C5A059] mb-1.5">
                <Clock className="w-4 h-4" />
                <h3 className="font-serif text-base text-[#FAF3E3]">Opening Hours</h3>
              </div>
              <p className="font-sans text-xs text-[#F5EDD6]/80 leading-relaxed">
                {location.days}
                <br />
                <strong className="text-[#C5A059]">{location.hours}</strong> (Open Daily)
              </p>
            </div>

            <div className="bg-[#241710]/70 p-5 border border-[#F5EDD6]/10">
              <div className="flex items-center gap-2 text-[#C5A059] mb-1.5">
                <Phone className="w-4 h-4" />
                <h3 className="font-serif text-base text-[#FAF3E3]">Direct Phone</h3>
              </div>
              <p className="font-sans text-xs text-[#F5EDD6]/80 leading-relaxed">
                <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-[#C5A059] underline">
                  {siteConfig.phone}
                </a>
                <br />
                Instant WhatsApp: 099029 49549
              </p>
            </div>

            <div className="bg-[#241710]/70 p-5 border border-[#F5EDD6]/10">
              <div className="flex items-center gap-2 text-[#C5A059] mb-1.5">
                <CreditCard className="w-4 h-4" />
                <h3 className="font-serif text-base text-[#FAF3E3]">Payments Accepted</h3>
              </div>
              <p className="font-sans text-xs text-[#F5EDD6]/80 leading-relaxed">
                UPI, Google Pay (Tez), PhonePe, NFC Mobile, Credit &amp; Debit Cards, Cash.
              </p>
            </div>

            <div className="bg-[#241710]/70 p-5 border border-[#F5EDD6]/10">
              <div className="flex items-center gap-2 text-[#C5A059] mb-1.5">
                <Wifi className="w-4 h-4" />
                <h3 className="font-serif text-base text-[#FAF3E3]">Guest Amenities</h3>
              </div>
              <p className="font-sans text-xs text-[#F5EDD6]/80 leading-relaxed">
                Free High-Speed Wi-Fi, Restroom, Air Conditioned Atelier, Dedicated Parking.
              </p>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="https://book.zuyyu.com/b-star-unisex-saloon"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C5A059] hover:bg-[#D4B97A] text-[#1C110C] font-sans font-bold text-xs uppercase tracking-[0.2em] px-6 py-3.5 shadow-lg transition-all"
            >
              Book Online ↗
            </a>
            <a
              href={location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#C5A059]/40 hover:border-[#C5A059] text-[#FAF3E3] font-sans text-xs uppercase tracking-[0.16em] px-5 py-3.5 transition-colors inline-flex items-center gap-1.5"
            >
              <span>Get Directions</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="border border-[#F5EDD6]/20 hover:border-[#F5EDD6] text-[#F5EDD6] font-sans text-xs uppercase tracking-[0.16em] px-5 py-3.5 transition-colors"
            >
              Call 099029 49549
            </a>
          </div>
        </div>

        {/* Right Column: Visual Showcase */}
        <div className="lg:col-span-5 relative h-[480px] sm:h-[580px] w-full overflow-hidden bg-[#241710] shadow-2xl border border-[#F5EDD6]/10">
          <Image
            src="/images/bstar-salon-interior.jpg"
            alt="Best salon in TC Palya - B-Star Unisex Salon interior styling stations at Stylo Plaza Bengaluru"
            fill
            loading="lazy"
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C110C]/85 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <span className="inline-block font-display text-[10px] tracking-[0.2em] uppercase text-[#C5A059] bg-[#1C110C]/90 px-3 py-1 border border-[#C5A059]/30 mb-2">
              Stylo Plaza · TC Palya Main Road
            </span>
            <p className="font-serif italic text-lg text-[#FAF3E3]">
              Luxury Aesthetics &amp; Certified Master Colorists
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
