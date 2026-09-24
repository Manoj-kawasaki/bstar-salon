import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import BookingCTA from "@/components/BookingCTA";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return siteConfig.categories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const category = siteConfig.categories.find((c) => c.slug === resolvedParams.category);
  
  if (!category) {
    return { title: "Not Found" };
  }

  return {
    title: `${category.title} Services | B★Star Unisex Salon Battarahalli`,
    description: `${category.longDesc || category.shortDesc} Book your appointment at B★Star Unisex Salon, Battarahalli, Bengaluru.`,
    alternates: {
      canonical: `/services/${category.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const category = siteConfig.categories.find((c) => c.slug === resolvedParams.category);

  if (!category) {
    notFound();
  }

  const otherCategories = siteConfig.categories.filter(c => c.id !== category.id).slice(0, 2);

  return (
    <main className="min-h-screen bg-[#F2E8D0] text-[#1C110C]">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={category.image}
            alt={category.title}
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <span className="font-serif italic text-[#C5A059] text-xl md:text-2xl mb-4 block">
            {category.number}
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#F5EDD6] mb-6">
            {category.title}
          </h1>
          <p className="font-sans text-[#F5EDD6]/90 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {category.longDesc || category.shortDesc}
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="space-y-16 md:space-y-24">
          {category.services?.map((service: any, index: number) => (
            <div key={index} className="border-t border-[#1C110C]/20 pt-10 md:pt-14">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                {service.image && (
                  <div className="relative w-full md:w-80 aspect-[4/3] md:aspect-[3/4] overflow-hidden bg-[#1C110C] shrink-0 shadow-xl group">
                    <Image
                      src={service.image}
                      alt={service.name || service.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C110C]/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                )}

                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
                    <h3 className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-[#1C110C]">
                      {service.name || service.title}
                    </h3>
                    {service.duration && (
                      <span className="font-sans text-xs tracking-wider uppercase text-[#C5A059] shrink-0 font-medium">
                        {service.duration}
                      </span>
                    )}
                  </div>

                  <p className="font-sans text-[#1C110C]/80 leading-relaxed mb-6 text-sm sm:text-base font-light">
                    {service.description}
                  </p>
                  
                  {service.benefits && service.benefits.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {service.benefits.map((benefit: string, i: number) => (
                        <li key={i} className="font-sans text-xs sm:text-sm text-[#1C110C]/75 flex items-start gap-2.5">
                          <span className="text-[#C5A059] font-bold">—</span> {benefit}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-[#1C110C]/10">
                    <span className="font-sans text-xs uppercase tracking-widest text-[#1C110C]/60">
                      {service.priceInfo || "Custom consultation"}
                    </span>
                    <a
                      href={siteConfig.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-serif italic text-sm text-[#1C110C] hover:text-[#C5A059] border-b border-current pb-0.5 transition-colors"
                    >
                      <span>Reserve Slot</span>
                      <span className="font-sans not-italic text-xs">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Categories */}
      {otherCategories.length > 0 && (
        <section className="py-20 px-6 md:px-12 bg-[#1C110C] text-[#F5EDD6]">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif italic text-3xl mb-12 text-center">More to Explore</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherCategories.map((cat) => (
                <Link key={cat.id} href={`/services/${cat.slug}`} className="group block relative h-[40vh] overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-50 group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <span className="font-serif italic text-[#C5A059] mb-2">{cat.number}</span>
                    <h3 className="font-serif text-3xl">{cat.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs and CTA */}
      <div className="bg-[#1C110C]">
        {category.faqs && category.faqs.length > 0 && (
          <FAQSection faqs={category.faqs} />
        )}
        <BookingCTA />
      </div>
    </main>
  );
}
