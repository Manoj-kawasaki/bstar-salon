import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import BookingCTA from "@/components/BookingCTA";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const categorySeoData: Record<
  string,
  {
    title: string;
    description: string;
    h1Title: string;
    h1Eyebrow: string;
  }
> = {
  hair: {
    title: "Haircut, Balayage, Keratin & Hair Botox in Battarahalli | B★Star Salon",
    description:
      "Transform your hair at B★Star Battarahalli. Expert designer haircuts, ammonia-free global color, French balayage, keratin smoothening, nanoplastia, and hair botox near TC Palya.",
    h1Title: "Haircut, Balayage, Keratin & Hair Botox",
    h1Eyebrow: "Couture Hair Artistry & Texture Reformation",
  },
  skin: {
    title: "HydraFacial, De-Tan & Bridal Glow Facials in Battarahalli | B★Star Salon",
    description:
      "Revitalize your skin at B★Star Battarahalli. Premium HydraFacial, O3+ bridal glow facials, ultrasonic de-tan packs, and pore purification near TC Palya.",
    h1Title: "HydraFacial, De-Tan & Bridal Glow Facials",
    h1Eyebrow: "Advanced Clinical Skin Therapies & Glow Rituals",
  },
  bridal: {
    title: "Royal Bridal Makeup & Pre-Bridal Packages in Battarahalli | B★Star Salon",
    description:
      "Exquisite bridal makeup artistry at B★Star Battarahalli. Royal Muhurtham makeup, couture reception styling, jewel placement, and pre-bridal packages near TC Palya.",
    h1Title: "Royal Bridal Makeup & Pre-Bridal Artistry",
    h1Eyebrow: "Haute Bridal Couture & Muhurtham Elegance",
  },
  grooming: {
    title: "Men's Haircut, Taper Fade & Beard Styling in Battarahalli | B★Star Salon",
    description:
      "Sharp men's grooming at B★Star Battarahalli. Precision scissor haircuts, modern skin fades, taper fades, beard styling, head massage, and men's de-tan.",
    h1Title: "Men's Haircut, Taper Fade & Beard Styling",
    h1Eyebrow: "Precision Scissor Craft & Executive Grooming",
  },
  nails: {
    title: "Gel Nail Extensions, Nail Art & Spa Pedicure in Battarahalli | B★Star Salon",
    description:
      "Luxury nail studio at B★Star Battarahalli. Long-lasting gel nail extensions, bespoke nail art, chrome finishes, candle spa manicures, and pedicures.",
    h1Title: "Gel Nail Extensions, Nail Art & Spa Pedicure",
    h1Eyebrow: "Sculpted Gel Extensions & Therapeutic Nail Care",
  },
  makeup: {
    title: "HD Party & Occasion Makeup in Battarahalli | B★Star Salon",
    description:
      "Flawless HD occasion and party makeup at B★Star Unisex Salon, Battarahalli. Camera-ready looks, engagement glam, and bespoke hair styling near TC Palya.",
    h1Title: "HD Party & Occasion Glamour Makeup",
    h1Eyebrow: "High-Definition Red Carpet & Celebration Aesthetics",
  },
};

export function generateStaticParams() {
  return siteConfig.categories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const seo = categorySeoData[resolvedParams.category];
  const category = siteConfig.categories.find((c) => c.slug === resolvedParams.category);
  
  if (!category) {
    return { title: "Not Found" };
  }

  const title = seo?.title || `${category.title} Services | B★Star Unisex Salon Battarahalli`;
  const description =
    seo?.description ||
    `${category.longDesc || category.shortDesc} Book your appointment at B★Star Unisex Salon, Battarahalli, Bengaluru.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/services/${category.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/services/${category.slug}`,
      images: [
        {
          url: category.image.startsWith("http") ? category.image : `${siteConfig.url}${category.image}`,
          width: 1200,
          height: 630,
          alt: `${category.title} at B★Star Unisex Salon Battarahalli`,
        },
      ],
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const category = siteConfig.categories.find((c) => c.slug === resolvedParams.category);

  if (!category) {
    notFound();
  }

  const seo = categorySeoData[resolvedParams.category];
  const otherCategories = siteConfig.categories.filter((c) => c.id !== category.id).slice(0, 2);

  return (
    <main className="min-h-screen bg-[#F2E8D0] text-[#1C110C]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[75vh] w-full flex items-center justify-center py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={category.image}
            alt={`${category.title} services at B★Star Salon Battarahalli`}
            fill
            className="object-cover brightness-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F2E8D0] via-transparent to-[#1C110C]/60" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <span className="font-serif italic text-[#C5A059] text-base md:text-lg mb-3 block">
            {category.number} · {seo?.h1Eyebrow || category.title}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F5EDD6] mb-6 leading-tight drop-shadow-xl">
            {seo?.h1Title || category.title} <br className="hidden sm:inline" />
            <span className="italic text-[#C5A059] text-2xl sm:text-4xl block mt-2">
              in Battarahalli, Bengaluru
            </span>
          </h1>
          <p className="font-sans text-[#F5EDD6]/90 max-w-2xl mx-auto text-sm md:text-base leading-relaxed drop-shadow-md">
            {category.longDesc || category.shortDesc}
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="space-y-16 md:space-y-24">
          {category.services?.map((service, index: number) => (
            <div key={index} className="border-t border-[#1C110C]/20 pt-10 md:pt-14">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                {service.image && (
                  <div className="relative w-full md:w-80 aspect-[4/3] md:aspect-[3/4] overflow-hidden bg-[#1C110C] shrink-0 shadow-xl group">
                    <Image
                      src={service.image}
                      alt={`${service.name} at B★Star Unisex Salon`}
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
                      {service.name}
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
                    <span className="font-sans text-xs uppercase tracking-widest text-[#1C110C]/70 font-semibold">
                      {service.priceInfo || "Starts from ₹399"}
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
                    alt={`${cat.title} services at B★Star Unisex Salon`}
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
