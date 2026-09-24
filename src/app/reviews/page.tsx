import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import LocationSection from '@/components/LocationSection'
import BookingCTA from '@/components/BookingCTA'
import { Star } from 'lucide-react'

export const metadata: Metadata = {
  title: "Customer Reviews & Google Ratings | B★Star Unisex Salon Bengaluru",
  description: "Read verified customer reviews for B★Star Unisex Salon in Battarahalli, Bengaluru. Rated 4.3★ by 339+ happy customers on Google.",
  alternates: {
    canonical: "/reviews",
  },
};

export default function ReviewsPage() {
  const { rating, reviewCount, googleReviewUrl } = siteConfig.googleReviewStats

  return (
    <main className="min-h-screen bg-[#F2E8D0] text-[#1C110C] pt-24 md:pt-32 pb-16 font-sans selection:bg-[#1C110C] selection:text-[#F2E8D0]">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <header className="mb-20 text-center">
          <h1 className="font-serif text-5xl md:text-7xl italic mb-12 leading-tight">
            What Our Clients Say
          </h1>
          
          <div className="flex flex-col items-center justify-center space-y-4">
            <span className="font-serif text-6xl md:text-8xl text-[#1C110C] leading-none">
              {rating}
            </span>
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={28}
                  fill={i < Math.floor(rating) ? "#1C110C" : "transparent"}
                  className="text-[#1C110C]"
                  strokeWidth={1}
                />
              ))}
            </div>
            <p className="font-display uppercase tracking-[0.2em] text-sm mt-4 text-[#1C110C]/60">
              Based on 339+ Google Reviews
            </p>
            
            {googleReviewUrl && (
              <a 
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 font-serif italic text-xl border-b border-[#1C110C] pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors"
              >
                Leave a Review <span>→</span>
              </a>
            )}
          </div>
        </header>

        <section className="py-16 md:py-24 border-t border-b border-[#1C110C]/10 my-16">
          <h2 className="sr-only">Client Feedback Themes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            
            <div className="flex flex-col gap-6">
              <span className="font-display text-xs uppercase tracking-widest text-[#1C110C]/50">Exceptional Service</span>
              <p className="font-serif text-2xl md:text-3xl italic leading-relaxed text-[#1C110C]/90">
                "Clients consistently praise our attentive staff and the personalized care they receive during every visit."
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              <span className="font-display text-xs uppercase tracking-widest text-[#1C110C]/50">Expert Styling</span>
              <p className="font-serif text-2xl md:text-3xl italic leading-relaxed text-[#1C110C]/90">
                "Our master stylists are frequently highlighted for their precision, artistry, and ability to bring visions to life."
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              <span className="font-display text-xs uppercase tracking-widest text-[#1C110C]/50">Relaxing Ambiance</span>
              <p className="font-serif text-2xl md:text-3xl italic leading-relaxed text-[#1C110C]/90">
                "The serene and luxurious environment of our salon is frequently mentioned as a perfect escape from the city."
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <span className="font-display text-xs uppercase tracking-widest text-[#1C110C]/50">Professionalism</span>
              <p className="font-serif text-2xl md:text-3xl italic leading-relaxed text-[#1C110C]/90">
                "Reviewers appreciate our punctuality, hygiene standards, and the use of premium quality products."
              </p>
            </div>

          </div>
        </section>

        <div className="mt-24 space-y-24">
          <LocationSection />
          <BookingCTA />
        </div>
      </div>
    </main>
  )
}
