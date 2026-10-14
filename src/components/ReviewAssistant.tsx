"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import {
  Sparkles,
  Star,
  Check,
  ExternalLink,
  Copy,
  ArrowRight,
  Send,
} from "lucide-react";

const GOOGLE_DIRECT_REVIEW_URL =
  siteConfig.googleReviewStats.googleWriteReviewUrl ||
  "https://search.google.com/local/writereview?placeid=ChIJQwX9_hQRrjsRPGH6avSZBOc";

interface ServiceCard {
  id: string;
  icon: string;
  title: string;
  hint: string;
  fallbackReview: string;
}

const SERVICE_CARDS: ServiceCard[] = [
  {
    id: "mens",
    icon: "💈",
    title: "Men's Grooming",
    hint: "Haircut, Fade, Beard Shaping",
    fallbackReview:
      "Got my fade haircut and beard trimming done at B★STAR Unisex Salon. Super neat styling, clean tools, and very reasonable pricing in Battarahalli.",
  },
  {
    id: "womens",
    icon: "💇‍♀️",
    title: "Women's Haircut",
    hint: "Layers, Styling, Blow Dry",
    fallbackReview:
      "Had a wonderful layered haircut and blow dry at B★STAR Unisex Salon. The stylist listened carefully to my length preference and my hair feels bouncy and smooth.",
  },
  {
    id: "facial",
    icon: "🧖‍♀️",
    title: "Facial & Cleanup",
    hint: "O3+, Fruit, Hydra Glow",
    fallbackReview:
      "Took the facial and cleanup treatment today at B★STAR Salon. The face massage was deeply relaxing and gave my skin an instant, fresh glow without irritation.",
  },
  {
    id: "detan",
    icon: "☀️",
    title: "Detan & Bleach",
    hint: "Face, Arms, Skin Brightening",
    fallbackReview:
      "Got the de-tan treatment done at B★STAR Unisex Salon. It cleared my sun tan noticeably in a single session with gentle, high-quality products.",
  },
  {
    id: "waxing",
    icon: "🍯",
    title: "Waxing Service",
    hint: "Rica, Honey, Full Body",
    fallbackReview:
      "Very comfortable and hygienic waxing experience at B★STAR Salon. The room was private, staff was gentle, and there was zero sticky residue.",
  },
  {
    id: "threading",
    icon: "🪡",
    title: "Threading",
    hint: "Eyebrows, Upper Lip, Forehead",
    fallbackReview:
      "Got my eyebrow threading and shaping done here. She has a very light hand, kept my natural arch intact, and applied soothing lotion after.",
  },
  {
    id: "manipedi",
    icon: "💅",
    title: "Mani & Pedicure",
    hint: "Spa Soak, Scrub, Nail Care",
    fallbackReview:
      "Tried their spa pedicure and foot massage at B★STAR Unisex Salon. Clean instruments, thorough heel care, and an extremely relaxing experience.",
  },
  {
    id: "hairspa",
    icon: "🌿",
    title: "Hair Spa & Massage",
    hint: "Keratin, Moisture, Deep Steam",
    fallbackReview:
      "The hair spa and head massage at B★STAR Unisex Salon relieved all my stress. My dry hair feels completely nourished, soft, and glossy.",
  },
  {
    id: "makeup",
    icon: "💄",
    title: "Bridal & Makeup",
    hint: "Party Glam, Saree Draping",
    fallbackReview:
      "Booked party makeup and saree draping at B★STAR Salon. The base matched my skin tone naturally without looking cakey, and stayed fresh all evening.",
  },
  {
    id: "colour",
    icon: "🎨",
    title: "Global Colour & Roots",
    hint: "Root Touch-up, Highlights",
    fallbackReview:
      "Got ammonia-free root touch up and hair colour done. Perfectly covered my greys with zero scalp irritation, and my hair looks rich and shiny.",
  },
];

export default function ReviewAssistant() {
  const [userText, setUserText] = useState<string>("");
  const [generatingFor, setGeneratingFor] = useState<string | null>(null);
  const [isGeneratingCustom, setIsGeneratingCustom] = useState<boolean>(false);
  const [generatedDraft, setGeneratedDraft] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
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

  // Launch Google Review directly with copied review
  const launchGoogleReview = (reviewText: string) => {
    copyToClipboard(reviewText);
    setOverlayText(reviewText);
    setOverlayActive(true);

    setTimeout(() => {
      window.location.href = GOOGLE_DIRECT_REVIEW_URL;
    }, 600);
  };

  // Generate review from customer's custom rough thoughts in 1 second
  const handleGenerateCustomText = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const raw = userText.trim();
    if (!raw) return;

    setIsGeneratingCustom(true);

    try {
      const res = await fetch("/api/reviews/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_text: raw }),
      });

      const data = await res.json();
      if (data?.success && data?.draft) {
        setGeneratedDraft(data.draft);
        launchGoogleReview(data.draft);
      } else {
        // Fallback: polish basic words if network/quota
        const fallback = `I visited B★STAR Unisex Salon in Battarahalli. ${raw}. Great service and highly recommended.`;
        setGeneratedDraft(fallback);
        launchGoogleReview(fallback);
      }
    } catch {
      const fallback = `I visited B★STAR Unisex Salon in Battarahalli. ${raw}. Great service and highly recommended.`;
      setGeneratedDraft(fallback);
      launchGoogleReview(fallback);
    } finally {
      setIsGeneratingCustom(false);
    }
  };

  // Generate review for category tap in 1 second
  const handleTapServiceCard = async (card: ServiceCard) => {
    setGeneratingFor(card.id);

    try {
      const res = await fetch("/api/reviews/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: card.title,
          feedback: {
            service_received: card.hint,
            customer_observation: "clean salon, attentive styling, pleasant visit",
          },
        }),
      });

      const data = await res.json();
      const finalReview =
        data?.success && data?.draft ? data.draft : card.fallbackReview;

      setGeneratedDraft(finalReview);
      launchGoogleReview(finalReview);
    } catch {
      setGeneratedDraft(card.fallbackReview);
      launchGoogleReview(card.fallbackReview);
    } finally {
      setGeneratingFor(null);
    }
  };

  // Direct 5★ Only handler
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

        {/* Top Nav (Clean Google Branding - NO AI BADGE) */}
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

        {/* SECTION 1: Type Your Rough Thoughts (Instant 1-Second AI Polish) */}
        <div className="px-4 pb-3">
          <form
            onSubmit={handleGenerateCustomText}
            className="bg-[#1C110C] border border-[#C5A059]/40 rounded-2xl p-3 shadow-md"
          >
            <label className="block text-[11px] uppercase tracking-wider text-[#C5A059] font-bold mb-1.5">
              Type your thoughts (AI writes it in 1 second):
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={userText}
                onChange={(e) => setUserText(e.target.value)}
                placeholder="e.g. fantastic salon good haircut clean place"
                className="flex-1 bg-[#241711] border border-[#F5EDD6]/20 rounded-xl px-3 py-2 text-xs text-[#FAF3E3] placeholder-[#F5EDD6]/40 focus:outline-none focus:border-[#C5A059]"
              />
              <button
                type="submit"
                disabled={isGeneratingCustom || !userText.trim()}
                className="bg-[#C5A059] hover:bg-[#D4B97A] text-[#1C110C] font-bold px-3.5 py-2 rounded-xl text-xs flex items-center gap-1.5 shrink-0 transition-all disabled:opacity-50"
              >
                {isGeneratingCustom ? (
                  <div className="w-3.5 h-3.5 border-2 border-[#1C110C] border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Write</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Fast 2-Second 5-Star Direct Link */}
        <div className="px-4 pb-3">
          <button
            type="button"
            onClick={handleDirectFiveStar}
            className="w-full bg-gradient-to-r from-[#1C110C] to-[#2D1B12] hover:from-[#2D1B12] hover:to-[#3D2518] active:scale-[0.98] border border-[#F5EDD6]/15 hover:border-[#C5A059]/40 rounded-2xl p-2.5 flex items-center justify-between text-left transition-all group"
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
                In a rush? Just open Google directly
              </div>
            </div>
            <span className="text-[11px] font-bold text-[#C5A059] bg-[#C5A059]/10 px-2.5 py-1 rounded-lg">
              5★ Directly →
            </span>
          </button>
        </div>

        {/* SECTION 2: 10 Instant Service Cards (Auto AI Generation on Tap) */}
        <div className="px-4 pt-1 pb-2">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059]">
            Or tap your service (writes &amp; opens in 1 second):
          </h2>
        </div>

        <div className="px-4 pb-4 grid grid-cols-2 gap-2.5">
          {SERVICE_CARDS.map((card) => {
            const isLoadingThis = generatingFor === card.id;
            return (
              <button
                key={card.id}
                type="button"
                disabled={isLoadingThis}
                onClick={() => handleTapServiceCard(card)}
                className="group relative bg-[#1C110C] hover:bg-[#2A1A12] active:scale-[0.97] border border-[#F5EDD6]/15 hover:border-[#C5A059]/60 rounded-2xl p-3 flex flex-col justify-between text-left transition-all duration-150 shadow-sm min-h-[92px]"
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
                  <p className="text-[10.5px] text-[#F5EDD6]/65 line-clamp-1 leading-snug">
                    {card.hint}
                  </p>
                </div>

                <div className="pt-1.5 mt-1 border-t border-[#F5EDD6]/10 flex items-center justify-between text-[10px] font-semibold text-[#C5A059]">
                  <span>{isLoadingThis ? "Writing..." : "Tap to Open"}</span>
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

          <div className="bg-[#C5A059] text-[#1C110C] font-bold text-xs sm:text-sm px-5 py-3 rounded-2xl shadow-xl uppercase tracking-wider flex items-center gap-2">
            <span>1. Tap 5th Star ★ → 2. Paste &amp; Post!</span>
            <ExternalLink className="w-4 h-4" />
          </div>

          <p className="text-[11px] text-[#F5EDD6]/60 mt-4">
            Opening Google Review now...
          </p>
        </div>
      )}
    </div>
  );
}
