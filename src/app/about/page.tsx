import { Metadata } from 'next'
import Image from 'next/image'
import { siteConfig } from '@/config/site'
import LocationSection from '@/components/LocationSection'
import BookingCTA from '@/components/BookingCTA'

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description: `Learn more about ${siteConfig.name}, a luxury salon in ${siteConfig.location.area}, ${siteConfig.location.city}.`,
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#1C110C] text-[#F5EDD6] pt-24 md:pt-32 pb-16 font-sans">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <section className="mb-24 md:mb-32">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl italic mb-6 leading-tight tracking-tight">
            About B★Star
          </h1>
          <p className="text-xl md:text-2xl font-serif text-[#C5A059] max-w-2xl">
            {siteConfig.tagline || 'Elevating beauty through precision and artistry.'}
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-24 md:mb-32 items-center">
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src="/images/bstar-salon-interior.jpg"
              alt="B★Star Unisex Saloon Interior at Stylo Plaza"
              fill
              className="object-cover hover:scale-102 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col gap-8">
            <p className="font-serif text-2xl md:text-3xl leading-relaxed">
              Located in the heart of {siteConfig.location.area}, {siteConfig.name} is a sanctuary for those who appreciate the finer aspects of grooming and styling.
            </p>
            <p className="text-[#F5EDD6]/80 text-lg md:text-xl font-light leading-relaxed">
              We believe that every appointment is more than just a service; it's a personalized experience. With a commitment to excellence, our expert stylists and therapists craft bespoke looks that reflect your unique personality.
            </p>
            <div className="flex items-center gap-4 mt-4 border-t border-[#F5EDD6]/20 pt-8 w-fit">
              <span className="font-serif text-3xl text-[#C5A059]">{siteConfig.googleReviewStats.rating}★</span>
              <span className="text-sm font-display uppercase tracking-widest text-[#F5EDD6]/60">
                {siteConfig.googleReviewStats.reviewCount} Google Reviews
              </span>
            </div>
          </div>
        </section>

        <section className="mb-24 md:mb-32">
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-widest mb-16 text-center">
            Our Pillars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            {siteConfig.whyChooseUs?.map((pillar, index) => (
              <div key={index} className="border-t border-[#F5EDD6]/20 pt-8">
                <span className="font-serif italic text-xl text-[#C5A059] mb-4 block">0{index + 1}</span>
                <h3 className="font-serif text-2xl mb-4">{pillar.title}</h3>
                <p className="text-[#F5EDD6]/70 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            )) || (
              <>
                <div className="border-t border-[#F5EDD6]/20 pt-8">
                  <span className="font-serif italic text-xl text-[#C5A059] mb-4 block">01</span>
                  <h3 className="font-serif text-2xl mb-4">Mastery</h3>
                  <p className="text-[#F5EDD6]/70 leading-relaxed font-light">
                    Our team consists of highly trained professionals who stay ahead of industry trends, ensuring precision in every cut, color, and treatment.
                  </p>
                </div>
                <div className="border-t border-[#F5EDD6]/20 pt-8">
                  <span className="font-serif italic text-xl text-[#C5A059] mb-4 block">02</span>
                  <h3 className="font-serif text-2xl mb-4">Ambiance</h3>
                  <p className="text-[#F5EDD6]/70 leading-relaxed font-light">
                    Step into an environment designed for relaxation. From the lighting to the seating, every detail is curated for your comfort.
                  </p>
                </div>
                <div className="border-t border-[#F5EDD6]/20 pt-8">
                  <span className="font-serif italic text-xl text-[#C5A059] mb-4 block">03</span>
                  <h3 className="font-serif text-2xl mb-4">Premium Products</h3>
                  <p className="text-[#F5EDD6]/70 leading-relaxed font-light">
                    We use only the finest, carefully selected products that nourish your hair and skin, delivering lasting, radiant results.
                  </p>
                </div>
              </>
            )}
          </div>
        </section>

        <LocationSection />
        <div className="mt-24">
          <BookingCTA />
        </div>
      </div>
    </main>
  )
}
