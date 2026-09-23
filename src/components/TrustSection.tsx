import { siteConfig } from "@/config/site";
import { Star } from "lucide-react";
import Link from "next/link";

export default function TrustSection() {
  return (
    <section className="bg-[#F2E8D0] text-[#1C110C] py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <div className="mb-16">
          <div className="flex items-baseline justify-center gap-2 mb-4">
            <span className="font-serif text-7xl font-light">4.3</span>
            <span className="font-serif text-2xl text-[#1C110C]/70">/ 5</span>
          </div>
          <div className="flex justify-center gap-1 mb-4 text-[#C5A059]">
            {[1, 2, 3, 4, 5].map((star, i) => (
              <Star
                key={i}
                className={`w-6 h-6 ${
                  i < 4 ? "fill-current" : i === 4 ? "fill-current opacity-50" : ""
                }`}
                strokeWidth={1}
              />
            ))}
          </div>
          <p className="font-sans text-sm tracking-widest uppercase mb-6 text-[#1C110C]/80 font-medium">
            339+ Google Reviews
          </p>
          <Link
            href={siteConfig.googleReviewStats.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif italic text-lg border-b border-[#1C110C]/30 hover:border-[#1C110C] transition-colors pb-1"
          >
            View on Google &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
