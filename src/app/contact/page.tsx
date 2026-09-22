import { Metadata } from 'next'
import Image from 'next/image'
import { siteConfig } from '@/config/site'
import LocationSection from '@/components/LocationSection'
import FAQSection from '@/components/FAQSection'
import BookingCTA from '@/components/BookingCTA'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
  description: `Contact ${siteConfig.name} to book an appointment or inquire about our services in ${siteConfig.location.area}.`,
}

export default function ContactPage() {
  const { location, phone, whatsappUrl, bookingUrl } = siteConfig

  return (
    <main className="min-h-screen bg-[#1C110C] text-[#F5EDD6] pt-24 md:pt-32 pb-16 font-sans">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <header className="mb-20 md:mb-32">
          <h1 className="font-serif text-6xl md:text-8xl italic mb-6 leading-none tracking-tight">
            Get in Touch
          </h1>
          <p className="font-serif text-xl md:text-2xl text-[#C5A059] max-w-xl">
            We look forward to welcoming you.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* Details Column */}
          <div className="space-y-16">
            
            <div className="space-y-6">
              <h2 className="font-display uppercase tracking-widest text-sm text-[#F5EDD6]/50">Visit Us</h2>
              <p className="font-serif text-2xl md:text-3xl leading-relaxed">
                {location.fullAddress || `${location.building}, ${location.street}, ${location.area}, ${location.city}`}
              </p>
              {location.mapsUrl && (
                <a 
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-serif italic text-lg border-b border-[#F5EDD6]/30 pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors w-fit mt-2"
                >
                  Get Directions <ArrowUpRight size={16} strokeWidth={1} />
                </a>
              )}
            </div>

            <div className="space-y-6">
              <h2 className="font-display uppercase tracking-widest text-sm text-[#F5EDD6]/50">Hours</h2>
              <p className="font-serif text-2xl md:text-3xl leading-relaxed">
                {location.days}<br />
                {location.hours}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-display uppercase tracking-widest text-sm text-[#F5EDD6]/50">Connect</h2>
              <div className="flex flex-col gap-6">
                <a 
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center gap-2 font-serif italic text-2xl md:text-3xl hover:text-[#C5A059] transition-colors w-fit border-b border-transparent hover:border-[#C5A059]"
                >
                  Call {phone}
                </a>
                
                {whatsappUrl && (
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-serif italic text-2xl md:text-3xl hover:text-[#C5A059] transition-colors w-fit border-b border-transparent hover:border-[#C5A059]"
                  >
                    Message on WhatsApp <ArrowUpRight size={24} strokeWidth={1} />
                  </a>
                )}
                
                {bookingUrl && (
                  <a 
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-serif italic text-2xl md:text-3xl hover:text-[#C5A059] transition-colors w-fit mt-4 border-b border-[#F5EDD6]/30 pb-1 hover:border-[#C5A059]"
                  >
                    Book an Appointment <ArrowUpRight size={24} strokeWidth={1} />
                  </a>
                )}
              </div>
              <p className="text-sm font-light text-[#F5EDD6]/60 mt-8 max-w-sm">
                *For special inquiries or bridal bookings, please reach out via WhatsApp.
              </p>
            </div>

          </div>

          {/* Image Column */}
          <div className="relative aspect-[3/4] w-full overflow-hidden hidden lg:block grayscale hover:grayscale-0 transition-all duration-700">
            <Image
              src="/images/bstar-hero-crop1.jpg"
              alt="B★Star Unisex Saloon Reception & Styling Atelier"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>

        <div className="space-y-32">
          {siteConfig.generalFaqs && siteConfig.generalFaqs.length > 0 && (
            <section className="border-t border-[#F5EDD6]/10 pt-16">
              <h2 className="font-serif text-4xl italic mb-12 text-center">Frequent Questions</h2>
              <FAQSection faqs={siteConfig.generalFaqs} />
            </section>
          )}
          
          <BookingCTA />
        </div>
      </div>
    </main>
  )
}
