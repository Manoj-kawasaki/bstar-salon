import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import BookingCTA from "@/components/BookingCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | " + siteConfig.name,
  description: "Discover our signature luxury salon treatments.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#1C110C] text-[#F5EDD6]">
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <span className="font-serif italic text-[#C5A059] text-sm md:text-base mb-4 block">
          Our Services
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-[#F5EDD6] mb-6 leading-tight">
          Discover Your Signature <br className="hidden md:block" /> Treatment
        </h1>
        <p className="font-sans text-[#F5EDD6]/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          From precise cuts and transformative color to restorative spa therapies, our expert stylists and technicians tailor every service to elevate your natural beauty.
        </p>
      </section>

      <div className="bg-[#F2E8D0] text-[#1C110C]">
        {siteConfig.categories.map((category, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={category.id}
              className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} min-h-[70vh] border-b border-[#1C110C]/10 last:border-b-0`}
            >
              <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-full">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24">
                <div className="max-w-xl w-full">
                  <span className="font-serif text-[#C5A059] text-xl mb-4 block">
                    {category.number}
                  </span>
                  <h2 className="font-serif text-3xl md:text-5xl mb-6">
                    {category.title}
                  </h2>
                  <p className="font-sans text-[#1C110C]/80 mb-8 leading-relaxed text-sm md:text-base">
                    {category.shortDesc}
                  </p>
                  
                  <div className="space-y-4 mb-10">
                    {category.services.slice(0, 4).map((service: any, i: number) => (
                      <div key={i} className="flex justify-between items-end border-b border-[#1C110C]/10 pb-2">
                        <span className="font-serif italic text-lg">{service.name || service.title}</span>
                        {service.price && (
                          <span className="font-sans text-xs tracking-wider uppercase">{service.price}</span>
                        )}
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/services/${category.slug}`}
                    className="inline-flex items-center gap-2 font-serif italic text-[#1C110C] hover:text-[#C5A059] transition-colors border-b border-current pb-1"
                  >
                    Explore {category.title} <span className="font-sans not-italic text-sm">→</span>
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <div className="bg-[#1C110C]">
        <FAQSection faqs={siteConfig.generalFaqs || []} />
        <BookingCTA />
      </div>
    </main>
  );
}
