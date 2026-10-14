"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import {
  Sparkles,
  RefreshCw,
  Star,
  Check,
  ExternalLink,
} from "lucide-react";

const GOOGLE_DIRECT_REVIEW_URL =
  siteConfig.googleReviewStats.googleWriteReviewUrl ||
  "https://search.google.com/local/writereview?placeid=ChIJQwX9_hQRrjsRPGH6avSZBOc";

interface ServiceCategoryCard {
  id: string;
  icon: string;
  title: string;
  reviews: string[];
}

const SERVICE_CATEGORIES_DATA: ServiceCategoryCard[] = [
  {
    id: "mens",
    icon: "💈",
    title: "Men's Grooming",
    reviews: [
      "got my fade haircut and beard trimming done here today.. super neat work and very reasonable pricing on tc palya road",
      "came in for a quick haircut and shave before heading to office. no waiting time and the guy did a clean job",
      "best salon around battarahalli for men's styling. tools are clean and the head massage after hair wash was awesome",
      "had a haircut and grey coverage coloring done. looks very natural and pocket friendly compared to other places",
      "regular customer here for hair cut and beard setting. polite staff and always consistent with the styling",
      "loved the precision fade and beard alignment. the stylist took time to understand exactly the cut I wanted",
    ],
  },
  {
    id: "womens",
    icon: "💇‍♀️",
    title: "Women's Haircut",
    reviews: [
      "got a stylish layer cut and blow dry done today. my hair has so much bounce now and feels amazing",
      "went for a hair trim and wash. the stylist actually listened to my length preference instead of cutting too short",
      "did keratin treatment and split-end trim here. all my frizz is completely gone and hair is super smooth",
      "brought my daughter for a kid's haircut and got a face-framing layer for myself. very patient staff",
      "had hair smoothening and setting done. really clean finish and the team took great care throughout",
      "great experience with the layered haircut and styling. my hair looks voluminous and healthy",
    ],
  },
  {
    id: "facial",
    icon: "🧖‍♀️",
    title: "Facial & Cleanup",
    reviews: [
      "took the o3+ facial today and it was so relaxing. my skin got an instant natural glow right after",
      "went in for a fruit cleanup. the face massage was incredible and there was zero pushy upselling",
      "got the hydra facial done before a family function. everyone complimented how fresh my face looked",
      "did a red wine facial and eye rejuvenation. very calm atmosphere, clean towels, and gentle hands",
      "had a classic cleanup done after a tiring week. blackheads were extracted gently without any redness",
      "skin feels deeply cleansed and hydrated after the facial. very soothing technique by the aesthetician",
    ],
  },
  {
    id: "detan",
    icon: "☀️",
    title: "Detan & Bleach",
    reviews: [
      "got face and neck o3 detan done. cleared up my harsh two-wheeler sun tan in a single sitting",
      "went for full arms and face bleach. very neat application and you can clearly see the tan is gone",
      "did oxy bleach here. didn't burn or itch my skin at all, used very good quality products",
      "took the body brightening detan pack. staff is polite and the results are honestly worth the money",
      "quick and effective detan service. perfect if you ride daily in the bangalore sun",
      "immediate brightening effect from the de-tan treatment. gentle on sensitive skin with no irritation",
    ],
  },
  {
    id: "waxing",
    icon: "🍯",
    title: "Waxing Service",
    reviews: [
      "got full arms and legs waxing done. the lady was super quick and made it as painless as possible",
      "went for flavour waxing today. hygiene is well maintained with clean strips and no sticky residue",
      "very comfortable experience for intimate waxing. the room is private and staff makes you feel at ease",
      "did honey waxing for hands and underarms. temperature was checked properly and zero skin irritation",
      "tried their full body waxing. super fast, hygienic, and very professional staff all around",
      "clean private room and thorough waxing. handled very gently with soothing lotion applied after",
    ],
  },
  {
    id: "threading",
    icon: "🪡",
    title: "Threading",
    reviews: [
      "got my eyebrows and upper lip threading done. she has a very light hand and kept my natural arch intact",
      "finally found someone around battarahalli who does eyebrow threading without making them pencil thin",
      "quick forehead and eyebrow shaping. barely felt any pain and applied soothing rose water after",
      "came in for full face threading. very gentle work, clean thread, and sanitized setup",
      "neat eyebrow shaping for just 50 rupees. didn't get a single cut, extremely happy with the finish",
      "perfect symmetry on my brows. quick, gentle, and very well done",
    ],
  },
  {
    id: "manipedi",
    icon: "💅",
    title: "Mani & Pedicure",
    reviews: [
      "took the spa pedicure and manicure combo. the foot massage and warm water soak were so relaxing",
      "tried their chocolate pedicure today. my heels feel super soft and clean, totally worth trying",
      "got a crystal spa pedicure and nail polish done. the staff took their time scrubbing properly",
      "went for paraffin pedi-mani combo and foot massage. best way to unwind on a weekend evening",
      "very hygienic pedicure tub setup. dead skin was cleared out thoroughly and hand massage was great",
      "foot massage was so therapeutic and my feet feel brand new. clean instruments and warm service",
    ],
  },
  {
    id: "hairspa",
    icon: "🌿",
    title: "Hair Spa & Massage",
    reviews: [
      "took the keratin hair spa and head massage. my dry hair feels glossy now and the massage cured my headache",
      "went for the dandruff scalp treatment and classic hair spa. very relaxing steam and oil application",
      "did a moisture hair spa and deep conditioning. hair feels light, bouncy, and smells amazing",
      "had a 20-minute head massage and hair wash. pressure was spot on, walked out feeling refreshed",
      "trying their hair fall treatment spa. good products used and the stylist gave genuine hair care tips",
      "the head massage was pure relaxation. my dry hair texture feels noticeably smoother and nourished",
    ],
  },
  {
    id: "makeup",
    icon: "💄",
    title: "Bridal & Makeup",
    reviews: [
      "booked party makeup and saree draping here. the base matched my skin tone naturally and wasn't cakey",
      "took their bridal pre-grooming package. everything from facial to waxing was handled smoothly without rush",
      "got light makeup and hair styling done for an event. stayed fresh the whole evening with zero touch-ups",
      "very happy with the bridal makeup team. they arrived right on time and draped the heavy saree neatly",
      "great place for party makeup and soft curls. natural finish and very reasonable compared to big city chains",
      "loved the elegant makeup look. they listened to my style preference and kept it understated and chic",
    ],
  },
  {
    id: "colour",
    icon: "🎨",
    title: "Global Colour & Roots",
    reviews: [
      "got ammonia-free root touch up done. covered all my greys evenly without any chemical smell",
      "did global hair colour and crown highlights here. the shade looks super rich in sunlight and hair is soft",
      "came in for a root touch up and blow dry. color matched my existing hair roots seamlessly",
      "tried fashion streaks and global highlights. the stylist helped me pick a tone that suits my face",
      "good place for ammonia-free global hair color. neat application, no forehead stains, and fair pricing",
      "subtle and sophisticated hair highlights. condition of my hair remained silky even after coloring",
    ],
  },
];

export default function ReviewAssistant() {
  const [activeReviews, setActiveReviews] = useState<Record<string, string>>({});
  const [overlayActive, setOverlayActive] = useState<boolean>(false);
  const [overlayText, setOverlayText] = useState<string>("");
  const [overlayTitle, setOverlayTitle] = useState<string>("Review Copied!");
  const [overlayStepText, setOverlayStepText] = useState<string>(
    "1. Tap 5th Star ★  →  2. Paste & Post!"
  );

  // Initialize random AI review for each card
  const shuffleReviews = () => {
    const map: Record<string, string> = {};
    SERVICE_CATEGORIES_DATA.forEach((cat) => {
      const idx = Math.floor(Math.random() * cat.reviews.length);
      map[cat.id] = cat.reviews[idx];
    });
    setActiveReviews(map);
  };

  useEffect(() => {
    shuffleReviews();
  }, []);

  // Copy helper with fallbacks for all mobile environments
  const copyToClipboard = (text: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
    } catch (e) {
      console.warn("Clipboard copy fallback error:", e);
    }
  };

  // Direct tap handler: Copy AI review context & go directly to Google Review
  const handleSelectService = (catId: string) => {
    const textToCopy = activeReviews[catId] || SERVICE_CATEGORIES_DATA.find((c) => c.id === catId)?.reviews[0] || "";
    copyToClipboard(textToCopy);

    setOverlayTitle("Review Copied!");
    setOverlayText(textToCopy);
    setOverlayStepText("1. Tap 5th Star ★  →  2. Paste & Post!");
    setOverlayActive(true);

    // Redirect directly to Google Review
    setTimeout(() => {
      window.location.href = GOOGLE_DIRECT_REVIEW_URL;
    }, 450);
  };

  // Top 5-Star Only Direct Link
  const handleDirectFiveStar = () => {
    setOverlayTitle("Opening Google Review...");
    setOverlayText("");
    setOverlayStepText("1. Tap 5th Star ★  →  2. Tap Post!");
    setOverlayActive(true);

    setTimeout(() => {
      window.location.href = GOOGLE_DIRECT_REVIEW_URL;
    }, 350);
  };

  return (
    <div className="w-full max-w-md mx-auto px-3 py-4 sm:py-6 font-sans select-none">
      {/* Google-branded Top Bar */}
      <div className="bg-[#241711] border border-[#C5A059]/30 rounded-3xl overflow-hidden shadow-2xl">
        <div className="h-1.5 w-full bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853]" />

        {/* Top bar info */}
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
            <span>Google Review</span>
          </div>
          <span className="bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 font-bold text-[10px] px-2.5 py-0.5 rounded-full flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 text-emerald-400" />
            AI-Crafted Text
          </span>
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

        {/* Option A: Fast 2-Second 5-Star Only Bar */}
        <div className="px-4 pb-3">
          <button
            type="button"
            onClick={handleDirectFiveStar}
            className="w-full bg-gradient-to-r from-[#1C110C] to-[#2D1B12] hover:from-[#2D1B12] hover:to-[#3D2518] active:scale-[0.98] border border-[#C5A059]/40 rounded-2xl p-3 flex items-center justify-between text-left transition-all shadow-md group"
          >
            <div>
              <div className="flex items-center gap-1 text-[#FBBC05] text-lg leading-none">
                <Star className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                <Star className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                <Star className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                <Star className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                <Star className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
              </div>
              <div className="text-[11px] font-medium text-[#FAF3E3]/90 mt-1">
                In a rush? Tap for direct rating (no text)
              </div>
            </div>
            <span className="bg-[#C5A059] group-hover:bg-[#D4B97A] text-[#1C110C] font-bold text-xs px-3 py-2 rounded-xl whitespace-nowrap shadow flex items-center gap-1">
              <span>Direct 5★</span>
              <span>→</span>
            </span>
          </button>
        </div>

        {/* Section Header: Tap Service with Shuffle */}
        <div className="px-4 pt-2 pb-2.5 flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
            Tap your service (auto-copies &amp; opens):
          </h2>
          <button
            type="button"
            onClick={shuffleReviews}
            className="inline-flex items-center gap-1 text-[11px] text-[#F5EDD6]/75 hover:text-[#C5A059] bg-[#1C110C] border border-[#F5EDD6]/15 hover:border-[#C5A059]/40 px-2.5 py-1 rounded-full transition-all"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Change text</span>
          </button>
        </div>

        {/* 10 Service Cards Grid: 2 Columns for Thumb Tapping */}
        <div className="px-4 pb-4 grid grid-cols-2 gap-2.5">
          {SERVICE_CATEGORIES_DATA.map((cat) => {
            const currentQuote = activeReviews[cat.id] || cat.reviews[0];
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleSelectService(cat.id)}
                className="group relative bg-[#1C110C] hover:bg-[#2A1A12] active:scale-[0.97] border border-[#F5EDD6]/15 hover:border-[#C5A059]/60 rounded-2xl p-3 flex flex-col justify-between text-left transition-all duration-150 shadow-sm min-h-[140px]"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-7 h-7 rounded-lg bg-[#241711] border border-[#C5A059]/30 flex items-center justify-center text-sm shrink-0">
                      {cat.icon}
                    </span>
                    <span className="font-serif text-xs font-bold text-[#FAF3E3] group-hover:text-[#C5A059] leading-tight line-clamp-1">
                      {cat.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#F5EDD6]/75 line-clamp-3 leading-relaxed italic mb-2">
                    &ldquo;{currentQuote}&rdquo;
                  </p>
                </div>

                <div className="pt-2 border-t border-[#F5EDD6]/10 flex items-center justify-between text-[10px] font-semibold text-[#C5A059]">
                  <span>Tap to Copy &amp; Open</span>
                  <span>5★ →</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom Tip Banner */}
        <div className="mx-4 mb-4 p-3 bg-[#1C110C] border border-[#C5A059]/25 rounded-2xl text-[11px] text-[#F5EDD6]/80 leading-relaxed">
          <strong className="text-[#C5A059]">💡 2-Second Step:</strong> Tap your service above → on Google, tap your rating (★★★★★), <strong className="text-[#FAF3E3]">Paste</strong>, and tap <strong className="text-[#FAF3E3]">Post</strong>!
        </div>
      </div>

      {/* Instant Launch Overlay */}
      {overlayActive && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-150">
          <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-4 shadow-xl">
            <Check className="w-9 h-9 stroke-[3]" />
          </div>

          <div className="flex items-center gap-1 text-[#FBBC05] text-3xl mb-2">
            <Star className="w-6 h-6 fill-[#FBBC05] text-[#FBBC05]" />
            <Star className="w-6 h-6 fill-[#FBBC05] text-[#FBBC05]" />
            <Star className="w-6 h-6 fill-[#FBBC05] text-[#FBBC05]" />
            <Star className="w-6 h-6 fill-[#FBBC05] text-[#FBBC05]" />
            <Star className="w-6 h-6 fill-[#FBBC05] text-[#FBBC05]" />
          </div>

          <h2 className="font-serif text-2xl text-[#FAF3E3] font-normal mb-2">
            {overlayTitle}
          </h2>

          {overlayText && (
            <div className="max-w-xs bg-[#241711] border border-[#C5A059]/40 rounded-2xl p-3 text-xs text-[#F5EDD6]/90 italic mb-4 line-clamp-3 shadow-inner">
              &ldquo;{overlayText}&rdquo;
            </div>
          )}

          <div className="bg-[#C5A059] text-[#1C110C] font-bold text-xs sm:text-sm px-5 py-3 rounded-2xl shadow-xl uppercase tracking-wider flex items-center gap-2">
            <span>{overlayStepText}</span>
            <ExternalLink className="w-4 h-4" />
          </div>

          <p className="text-[11px] text-[#F5EDD6]/60 mt-4">
            Opening Google Review in a moment...
          </p>
        </div>
      )}
    </div>
  );
}
