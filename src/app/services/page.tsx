import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import BookingCTA from "@/components/BookingCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salon Services & Price Menu | B★Star Unisex Salon, Battarahalli",
  description:
    "Explore transparent starting prices and luxury treatments for hair, skin, bridal makeup, nail extensions, and men's grooming at B★Star Unisex Salon, Battarahalli.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#1C110C] text-[#F5EDD6]">
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <span className="font-serif italic text-[#C5A059] text-sm md:text-base mb-3 block">
          Hair, Skin, Bridal &amp; Grooming Price Menu
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F5EDD6] mb-6 leading-tight max-w-4xl mx-auto">
          Luxury Salon Services &amp; Treatments <br className="hidden md:block" />
          <span className="italic text-[#C5A059] text-2xl sm:text-4xl block mt-2">
            in Battarahalli, Bengaluru
          </span>
        </h1>
        <p className="font-sans text-[#F5EDD6]/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          From precise designer haircuts, nanoplastia, and French balayage to medical-grade HydraFacials and royal bridal couture, explore our transparent starting prices crafted for East Bengaluru.
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
                  alt={`${category.title} services at B★Star Unisex Salon Battarahalli`}
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
                    {category.services.slice(0, 4).map((service, i: number) => (
                      <div key={i} className="flex justify-between items-baseline gap-4 border-b border-[#1C110C]/10 pb-2.5">
                        <span className="font-serif italic text-base sm:text-lg">{service.name}</span>
                        <span className="font-sans text-xs tracking-wider uppercase text-[#C5A059] font-medium shrink-0">
                          {service.priceInfo || "Starts from ₹399"}
                        </span>
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
        <FAQSection faqs={siteConfig.serviceFaqs || []} />
        <BookingCTA />
      </div>
    </main>
  );
}
