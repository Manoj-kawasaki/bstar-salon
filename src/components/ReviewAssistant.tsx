"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Star, Check, ExternalLink } from "lucide-react";

const GOOGLE_DIRECT_REVIEW_URL =
  siteConfig.googleReviewStats.googleWriteReviewUrl ||
  "https://search.google.com/local/writereview?placeid=ChIJQwX9_hQRrjsRPGH6avSZBOc";

interface ServiceCard {
  id: string;
  icon: string;
  title: string;
  hint: string;
  fallbackReviews: string[];
}

const SERVICE_CARDS: ServiceCard[] = [
  {
    id: "mens",
    icon: "💈",
    title: "Men's Haircut & Grooming",
    hint: "Fade, Classic Cut, Beard Shaping",
    fallbackReviews: [
      "I came in for a haircut and beard trim at B★STAR Unisex Salon. The stylist listened carefully to how I wanted my fade, the salon was very clean, and the pricing was very reasonable.",
      "Got my hair cut and beard shaped here today. Really polite staff, clean tools, and great attention to detail. Definitely my go-to salon in Battarahalli.",
      "Came for a quick haircut before work and had a great experience. The stylist was skilled and the head massage after hair wash was so relaxing.",
    ],
  },
  {
    id: "womens",
    icon: "💇‍♀️",
    title: "Women's Haircut & Styling",
    hint: "Layers, Bob, Trim, Blow Dry",
    fallbackReviews: [
      "I came in for a layered haircut and blow dry, and I absolutely loved the finish! The stylist respected my desired length and my hair feels super bouncy and healthy.",
      "Had a wonderful haircut and hair wash here. The team is very patient, listens to what you want, and gives genuine styling advice without pushing products.",
      "Got a split-ends trim and styling done at B★STAR Salon. My hair feels so smooth and frizz-free. Really happy with the results!",
    ],
  },
  {
    id: "facial",
    icon: "🧖‍♀️",
    title: "Facial & Skin Cleanup",
    hint: "O3+, Fruit, Hydra Glow",
    fallbackReviews: [
      "I got a facial and cleanup treatment here today. The face massage was so relaxing and my skin had an instant natural glow with zero redness or irritation.",
      "Visited for a fruit cleanup and blackhead removal. Very gentle hands, clean towels, and a peaceful environment. Left feeling completely refreshed.",
      "The aesthetician at B★STAR Salon was very skilled and attentive during my facial. High quality products and genuine care throughout.",
    ],
  },
  {
    id: "detan",
    icon: "☀️",
    title: "De-tan & Bleach Treatment",
    hint: "Face, Arms, Skin Brightening",
    fallbackReviews: [
      "Got face and neck de-tan done after riding in the Bangalore sun. Cleared up my harsh sun tan noticeably in one sitting with no burning sensation.",
      "Tried their skin brightening de-tan pack. Very neat application, gentle on sensitive skin, and the results were honestly worth it.",
      "Great de-tan service at B★STAR Unisex Salon. Cooling finish, polite staff, and clear improvement in my skin tone.",
    ],
  },
  {
    id: "waxing",
    icon: "🍯",
    title: "Waxing Service",
    hint: "Rica, Honey, Full Body",
    fallbackReviews: [
      "I had full arms and legs waxing done at B★STAR Salon. The staff was super quick and gentle, clean single-use strips, and no sticky residue after.",
      "Very comfortable and private setup for waxing. Temperature was checked carefully and soothing lotion was applied after. Highly recommended!",
      "Super hygienic waxing service. The staff made me feel completely at ease and worked with great care and precision.",
    ],
  },
  {
    id: "threading",
    icon: "🪡",
    title: "Eyebrow Threading & Shaping",
    hint: "Eyebrows, Upper Lip, Forehead",
    fallbackReviews: [
      "Got my eyebrows threaded here and she kept my natural arch perfectly intact without making them too thin. Barely felt any pain!",
      "Quick and gentle eyebrow and upper lip threading. Applied cooling rose water after, very neat work and fair pricing.",
      "Finally found a salon in Battarahalli that gets my eyebrow shape right every single time. Clean thread and gentle technique.",
    ],
  },
  {
    id: "manipedi",
    icon: "💅",
    title: "Manicure & Pedicure Spa",
    hint: "Warm Soak, Scrub, Heel Care",
    fallbackReviews: [
      "I took the spa pedicure and manicure combo today. The warm water soak and foot massage were so therapeutic, and my heels feel brand new.",
      "Very hygienic pedicure tub and sanitized instruments. The staff took their time scrubbing dead skin and gave a wonderful foot massage.",
      "A truly relaxing pedicure experience at B★STAR Salon. Neat cuticle work, beautiful nail finish, and warm hospitality.",
    ],
  },
  {
    id: "hairspa",
    icon: "🌿",
    title: "Hair Spa & Head Massage",
    hint: "Keratin, Moisture, Deep Steam",
    fallbackReviews: [
      "I got a deep conditioning hair spa and head massage. The massage pressure relieved all my week's stress and my dry hair feels glossy and soft.",
      "Wonderful hair spa experience at B★STAR Unisex Salon. Relaxing steam, pleasant product scent, and my hair feels so lightweight and nourished.",
      "The head massage was pure bliss. My hair texture feels noticeably smoother and healthier after the treatment.",
    ],
  },
  {
    id: "makeup",
    icon: "💄",
    title: "Bridal & Party Makeup",
    hint: "Party Glam, Saree Draping",
    fallbackReviews: [
      "Booked party makeup and saree draping for a family function. The makeup base matched my skin tone naturally without feeling cakey, and stayed intact all evening.",
      "Very talented makeup artists at B★STAR Salon. They listened to my style preference, kept it elegant and chic, and draped my heavy saree neatly.",
      "Had light makeup and hair curls done for an event. Received so many compliments on the natural finish. Thank you B★STAR team!",
    ],
  },
  {
    id: "colour",
    icon: "🎨",
    title: "Global Hair Colour & Roots",
    hint: "Root Touch-up, Highlights",
    fallbackReviews: [
      "I got ammonia-free root touch up and hair colour done here. Completely covered all my greys without any chemical smell or scalp itching.",
      "Tried global hair colour and crown highlights. The shade looks rich and vibrant in sunlight, and my hair remained silky and soft after washing.",
      "Precise hair colour application with zero forehead staining. The stylist gave honest advice on which tone suited my face best.",
    ],
  },
];

export default function ReviewAssistant() {
  const [loadingCardId, setLoadingCardId] = useState<string | null>(null);
  const [overlayActive, setOverlayActive] = useState<boolean>(false);
  const [overlayText, setOverlayText] = useState<string>("");

  // Universal clipboard helper
  const copyToClipboard = async (text: string): Promise<boolean> => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        const success = document.execCommand("copy");
        document.body.removeChild(textarea);
        return success;
      }
    } catch {
      return false;
    }
  };

  // Launch Google Review with copied review
  const launchGoogleReview = (reviewText: string) => {
    copyToClipboard(reviewText);
    setOverlayText(reviewText);
    setOverlayActive(true);

    // Automatically navigate to Google Review in 1.4 seconds
    setTimeout(() => {
      window.location.href = GOOGLE_DIRECT_REVIEW_URL;
    }, 1400);
  };

  // Immediate tap handler: AI generation in 1-2 seconds with instant fallback
  const handleTapService = async (card: ServiceCard) => {
    setLoadingCardId(card.id);

    // Pick a random fallback immediately in case of delay
    const randomFallback =
      card.fallbackReviews[
        Math.floor(Math.random() * card.fallbackReviews.length)
      ];

    try {
      // Race the API with a 1.8-second timeout so user is NEVER delayed
      const fetchPromise = fetch("/api/reviews/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: card.title,
          feedback: {
            service_received: card.hint,
            customer_observation: "polite staff, very clean salon, loved the finish",
          },
        }),
      }).then((r) => r.json());

      const timeoutPromise = new Promise<{ success: false }>((resolve) =>
        setTimeout(() => resolve({ success: false }), 1800)
      );

      const result: any = await Promise.race([fetchPromise, timeoutPromise]);

      if (result?.success && result?.draft && result.draft.length > 20) {
        launchGoogleReview(result.draft);
      } else {
        launchGoogleReview(randomFallback);
      }
    } catch {
      launchGoogleReview(randomFallback);
    } finally {
      setLoadingCardId(null);
    }
  };

  // Direct 5★ Only
  const handleDirectFiveStar = () => {
    setOverlayText("");
    setOverlayActive(true);
    setTimeout(() => {
      window.location.href = GOOGLE_DIRECT_REVIEW_URL;
    }, 400);
  };

  return (
    <div className="w-full max-w-md mx-auto px-3 py-4 sm:py-6 font-sans select-none">
      <div className="bg-[#241711] border border-[#C5A059]/30 rounded-3xl overflow-hidden shadow-2xl">
        {/* Google Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853]" />

        {/* Top Bar - Clean Google Review branding */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#F5EDD6]/10 text-xs">
          <div className="flex items-center gap-1.5 text-[#F5EDD6]/80 font-medium">
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
              />
            </svg>
            <span className="font-semibold text-xs text-[#FAF3E3]">Google Review</span>
          </div>

          <a
            href={GOOGLE_DIRECT_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-[#C5A059] hover:underline flex items-center gap-1 font-medium"
          >
            Direct Review <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Profile Header */}
        <div className="flex items-center gap-3.5 p-4 sm:p-5">
          <div className="relative w-14 h-14 shrink-0 rounded-2xl overflow-hidden border-2 border-[#C5A059] bg-black shadow-lg flex items-center justify-center p-1">
            <Image
              src="/images/bstar-logo.png"
              alt="B★STAR Unisex Salon Logo"
              fill
              priority
              className="object-contain"
              sizes="56px"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="font-serif text-lg sm:text-xl text-[#FAF3E3] font-normal leading-tight truncate">
              B<span className="text-[#C5A059]">★</span>Star Unisex Salon
            </h1>
            <p className="text-xs text-[#F5EDD6]/70 truncate mt-0.5">
              Stylo Plaza, TC Palya Main Rd, Battarahalli
            </p>
          </div>
        </div>

        {/* 2-Second Direct 5-Star Link */}
        <div className="px-4 pb-3">
          <button
            type="button"
            onClick={handleDirectFiveStar}
            className="w-full bg-gradient-to-r from-[#1C110C] to-[#2D1B12] hover:from-[#2D1B12] hover:to-[#3D2518] active:scale-[0.98] border border-[#F5EDD6]/15 hover:border-[#C5A059]/40 rounded-2xl p-2.5 flex items-center justify-between text-left transition-all group shadow-sm"
          >
            <div>
              <div className="flex items-center gap-0.5 text-[#FBBC05] text-sm leading-none">
                <Star className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                <Star className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                <Star className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                <Star className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                <Star className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
              </div>
              <div className="text-[11px] text-[#FAF3E3]/80 mt-0.5">
                In a rush? Tap to open Google directly
              </div>
            </div>
            <span className="text-[11px] font-bold text-[#C5A059] bg-[#C5A059]/10 px-2.5 py-1 rounded-lg">
              5★ Directly →
            </span>
          </button>
        </div>

        {/* Instruction Header */}
        <div className="px-4 pt-1 pb-2">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
            Tap your service (writes review &amp; opens Google):
          </h2>
        </div>

        {/* 10 Service Cards Grid: 2 Columns for Thumb Tapping */}
        <div className="px-4 pb-4 grid grid-cols-2 gap-2.5">
          {SERVICE_CARDS.map((card) => {
            const isLoadingThis = loadingCardId === card.id;
            return (
              <button
                key={card.id}
                type="button"
                disabled={isLoadingThis}
                onClick={() => handleTapService(card)}
                className="group relative bg-[#1C110C] hover:bg-[#2A1A12] active:scale-[0.97] border border-[#F5EDD6]/15 hover:border-[#C5A059]/60 rounded-2xl p-3 flex flex-col justify-between text-left transition-all duration-150 shadow-sm min-h-[96px]"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-7 h-7 rounded-lg bg-[#241711] border border-[#C5A059]/30 flex items-center justify-center text-sm shrink-0">
                      {card.icon}
                    </span>
                    <span className="font-serif text-xs font-bold text-[#FAF3E3] group-hover:text-[#C5A059] leading-tight line-clamp-1">
                      {card.title}
                    </span>
                  </div>
                  <p className="text-[10px] text-[#F5EDD6]/65 line-clamp-1 leading-snug">
                    {card.hint}
                  </p>
                </div>

                <div className="pt-1.5 mt-1 border-t border-[#F5EDD6]/10 flex items-center justify-between text-[10px] font-semibold text-[#C5A059]">
                  <span>{isLoadingThis ? "Writing review..." : "Tap to Review"}</span>
                  <span>{isLoadingThis ? "⏳" : "5★ →"}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom Tip Banner */}
        <div className="mx-4 mb-4 p-3 bg-[#1C110C] border border-[#C5A059]/25 rounded-2xl text-[11px] text-[#F5EDD6]/80 leading-relaxed">
          <strong className="text-[#C5A059]">💡 2-Second Step:</strong> Tap your service above → on Google, tap your rating (★★★★★), <strong className="text-[#FAF3E3]">Paste</strong>, and hit <strong className="text-[#FAF3E3]">Post</strong>!
        </div>
      </div>

      {/* Instant Launch Overlay */}
      {overlayActive && (
        <div className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-150">
          <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-3 shadow-xl">
            <Check className="w-9 h-9 stroke-[3]" />
          </div>

          <div className="flex items-center gap-1 text-[#FBBC05] text-2xl mb-2">
            <Star className="w-5 h-5 fill-[#FBBC05] text-[#FBBC05]" />
            <Star className="w-5 h-5 fill-[#FBBC05] text-[#FBBC05]" />
            <Star className="w-5 h-5 fill-[#FBBC05] text-[#FBBC05]" />
            <Star className="w-5 h-5 fill-[#FBBC05] text-[#FBBC05]" />
            <Star className="w-5 h-5 fill-[#FBBC05] text-[#FBBC05]" />
          </div>

          <h2 className="font-serif text-xl sm:text-2xl text-[#FAF3E3] font-normal mb-2">
            Review Copied!
          </h2>

          {overlayText && (
            <div className="max-w-xs bg-[#241711] border border-[#C5A059]/40 rounded-2xl p-3 text-xs text-[#F5EDD6]/90 italic mb-4 line-clamp-3 shadow-inner">
              &ldquo;{overlayText}&rdquo;
            </div>
          )}

          <a
            href={GOOGLE_DIRECT_REVIEW_URL}
            className="bg-[#C5A059] hover:bg-[#D4B97A] text-[#1C110C] font-bold text-xs sm:text-sm px-5 py-3 rounded-2xl shadow-xl uppercase tracking-wider flex items-center gap-2"
          >
            <span>1. Tap 5 Stars ★ → 2. Paste &amp; Post!</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <p className="text-[11px] text-[#F5EDD6]/60 mt-4">
            Opening Google Review in 1 second...
          </p>
        </div>
      )}
    </div>
  );
}
