import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

export default function LocationSection() {
  const { location } = siteConfig;

  return (
    <section className="bg-[#1C110C] text-[#F5EDD6] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col space-y-12">
          <div>
            <span className="font-serif italic text-2xl text-[#C5A059]">
              Visit Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6">
              {location.name}
            </h2>
            <p className="font-sans text-lg leading-relaxed text-[#F5EDD6]/80 max-w-md">
              {location.fullAddress}
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-xl mb-2">Hours</h3>
              <p className="font-sans text-[#F5EDD6]/80">
                {location.days}
                <br />
                {location.hours}
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl mb-2">Contact</h3>
              <p className="font-sans text-[#F5EDD6]/80">
                {siteConfig.phone}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-8 pt-8 border-t border-[#F5EDD6]/20">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="font-serif italic text-lg border-b border-[#F5EDD6]/30 hover:border-[#F5EDD6] transition-colors pb-1"
            >
              Call
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif italic text-lg border-b border-[#F5EDD6]/30 hover:border-[#F5EDD6] transition-colors pb-1"
            >
              WhatsApp
            </a>
            <a
              href={location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif italic text-lg border-b border-[#F5EDD6]/30 hover:border-[#F5EDD6] transition-colors pb-1"
            >
              Directions
            </a>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif italic text-lg border-b border-[#F5EDD6]/30 hover:border-[#F5EDD6] transition-colors pb-1 text-[#C5A059]"
            >
              Book Appointment
            </a>
          </div>
        </div>

        <div className="relative h-[600px] w-full overflow-hidden">
          <Image
            src="/images/bstar-salon-interior.jpg"
            alt="B★Star Unisex Saloon Floor at Stylo Plaza, Battarahalli"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
