"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  REVIEW_CATEGORIES,
  ServiceCategoryDef,
} from "@/lib/review-categories";
import { siteConfig } from "@/config/site";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Copy,
  Check,
  ExternalLink,
  RotateCcw,
  Star,
  AlertCircle,
  Clock,
} from "lucide-react";

const GOOGLE_WRITE_REVIEW_URL =
  siteConfig.googleReviewStats.googleWriteReviewUrl ||
  "https://search.google.com/local/writereview?placeid=ChIJQwX9_hQRrjsRPGH6avSZBOc";

const SENTIMENT_OPTIONS = [
  { label: "Loved it", stars: "5★", value: "Very Satisfied" },
  { label: "Great experience", stars: "4-5★", value: "Satisfied" },
  { label: "Met expectations", stars: "3-4★", value: "Neutral / Fair" },
  { label: "Room to improve", stars: "Honest feedback", value: "Constructive" },
];

export default function ReviewAssistant() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedCategory, setSelectedCategory] =
    useState<ServiceCategoryDef | null>(null);

  // Step 2 Form States
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedObservations, setSelectedObservations] = useState<string[]>(
    []
  );
  const [selectedSentiment, setSelectedSentiment] =
    useState<string>("Very Satisfied");
  const [customComment, setCustomComment] = useState<string>("");

  // Step 3 Output States
  const [reviewDraft, setReviewDraft] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [cooldownSeconds, setCooldownSeconds] = useState<number>(0);

  // Category Selection
  const handleSelectCategory = (cat: ServiceCategoryDef) => {
    setSelectedCategory(cat);
    setSelectedService(cat.services[0] || "");
    setSelectedObservations([]);
    setErrorMessage(null);
    setStep(2);
    // Smooth scroll to top of card on mobile
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Toggle observation chip
  const toggleObservation = (obs: string) => {
    setSelectedObservations((prev) =>
      prev.includes(obs) ? prev.filter((item) => item !== obs) : [...prev, obs]
    );
  };

  // AI Generation Request
  const handleGenerateReview = async () => {
    if (!selectedCategory) return;

    if (!selectedService && selectedObservations.length === 0 && !customComment.trim()) {
      setErrorMessage("Please select a service or choose at least one detail from your visit.");
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/reviews/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: selectedCategory.name,
          feedback: {
            service_received: selectedService,
            customer_observation: selectedObservations.join(", "),
            additional_comments: customComment.trim(),
            overall_feeling: selectedSentiment,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setErrorMessage(
          data.error ||
            "Unable to generate review draft. You can still write your review directly on Google."
        );
        setIsLoading(false);
        return;
      }

      setReviewDraft(data.draft);
      setStep(3);
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Start a 5-second cooldown on regenerate
      setCooldownSeconds(5);
      const interval = setInterval(() => {
        setCooldownSeconds((sec) => {
          if (sec <= 1) {
            clearInterval(interval);
            return 0;
          }
          return sec - 1;
        });
      }, 1000);
    } catch {
      setErrorMessage(
        "Network connection issue. Please tap below to post your review directly on Google."
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Copy helper
  const copyToClipboard = async (text: string): Promise<boolean> => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
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

  // Copy only
  const handleCopyOnly = async () => {
    const ok = await copyToClipboard(reviewDraft);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Copy and open Google Review
  const handleCopyAndOpenGoogle = async () => {
    await copyToClipboard(reviewDraft);
    setCopied(true);
    // Give visual cue before launching
    setTimeout(() => {
      window.open(GOOGLE_WRITE_REVIEW_URL, "_blank", "noopener,noreferrer");
    }, 350);
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-4 sm:py-8 font-sans">
      {/* Brand Header */}
      <div className="bg-[#241711] border border-[#C5A059]/30 rounded-3xl p-5 sm:p-6 mb-6 shadow-2xl relative overflow-hidden">
        {/* Subtle top gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />

        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-2xl overflow-hidden border border-[#C5A059]/40 bg-[#1C110C] shadow-md flex items-center justify-center p-1">
            <Image
              src="/images/bstar-logo.png"
              alt="B★STAR Unisex Salon"
              fill
              className="object-contain"
              priority
              sizes="64px"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#C5A059] text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-1">
              <Sparkles className="w-3 h-3 text-[#C5A059]" />
              Authentic Review Assistant
            </div>
            <h1 className="font-serif text-xl sm:text-2xl text-[#FAF3E3] font-normal leading-tight truncate">
              B<span className="text-[#C5A059]">★</span>STAR Unisex Salon
            </h1>
            <p className="text-xs text-[#F5EDD6]/70 truncate">
              Stylo Plaza, TC Palya Main Rd, Battarahalli
            </p>
          </div>
        </div>

        {/* Quick Review Direct Option */}
        <div className="mt-4 pt-3.5 border-t border-[#F5EDD6]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs text-[#F5EDD6]/80">
            <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Short on time?</span>
          </div>
          <a
            href={GOOGLE_WRITE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-[#C5A059] hover:text-[#FAF3E3] inline-flex items-center gap-1 underline underline-offset-2 transition-colors"
          >
            Open Google Review Directly
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* STEP 1: Select Service Category */}
      {step === 1 && (
        <div className="animate-in fade-in duration-300">
          <div className="mb-4 text-center sm:text-left">
            <h2 className="font-serif text-2xl text-[#FAF3E3] font-light">
              Which service did you receive today?
            </h2>
            <p className="text-xs sm:text-sm text-[#F5EDD6]/70 mt-1">
              Select your service to generate an authentic, personalized draft for Google.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
            {REVIEW_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleSelectCategory(cat)}
                className="group relative bg-[#241711] hover:bg-[#2F1F17] active:scale-[0.98] border border-[#F5EDD6]/10 hover:border-[#C5A059]/60 rounded-2xl p-4 text-left transition-all duration-200 shadow-md flex flex-col justify-between min-h-[105px]"
              >
                <div className="text-2xl mb-2 sm:text-3xl">{cat.icon}</div>
                <div>
                  <h3 className="font-serif text-sm sm:text-base text-[#FAF3E3] group-hover:text-[#C5A059] transition-colors leading-snug">
                    {cat.name}
                  </h3>
                  <span className="text-[10px] sm:text-xs text-[#C5A059]/80 flex items-center gap-1 mt-1 font-medium">
                    Select <span>→</span>
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="bg-[#1C110C]/80 border border-[#C5A059]/20 rounded-2xl p-4 text-center">
            <p className="text-xs text-[#F5EDD6]/70">
              Your feedback is 100% yours. You can edit every single word and choose your own rating before publishing on Google.
            </p>
          </div>
        </div>
      )}

      {/* STEP 2: Experience Questions */}
      {step === 2 && selectedCategory && (
        <div className="bg-[#241711] border border-[#F5EDD6]/10 rounded-3xl p-5 sm:p-7 shadow-xl animate-in fade-in duration-300">
          {/* Back button & Category badge */}
          <div className="flex items-center justify-between gap-2 mb-5 pb-3 border-b border-[#F5EDD6]/10">
            <button
              type="button"
              onClick={() => {
                setStep(1);
                setErrorMessage(null);
              }}
              className="inline-flex items-center gap-1.5 text-xs text-[#F5EDD6]/80 hover:text-[#C5A059] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Change Category
            </button>
            <span className="text-xs font-semibold text-[#C5A059] bg-[#C5A059]/10 px-3 py-1 rounded-full border border-[#C5A059]/25">
              {selectedCategory.icon} {selectedCategory.name}
            </span>
          </div>

          {/* Question 1: Specific Service Received */}
          <div className="mb-6">
            <label className="block text-xs uppercase tracking-wider text-[#C5A059] font-bold mb-2">
              1. What service did you get?
            </label>
            <div className="flex flex-wrap gap-2">
              {selectedCategory.services.map((svc) => {
                const isSelected = selectedService === svc;
                return (
                  <button
                    key={svc}
                    type="button"
                    onClick={() => setSelectedService(svc)}
                    className={`text-xs px-3 py-2 rounded-xl border transition-all text-left ${
                      isSelected
                        ? "bg-[#C5A059] text-[#1C110C] font-semibold border-[#C5A059] shadow-md"
                        : "bg-[#1C110C]/60 text-[#F5EDD6]/90 border-[#F5EDD6]/15 hover:border-[#C5A059]/50"
                    }`}
                  >
                    {svc}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 2: Observations / Highlights */}
          <div className="mb-6">
            <label className="block text-xs uppercase tracking-wider text-[#C5A059] font-bold mb-1">
              2. What stood out during your visit?
            </label>
            <p className="text-[11px] text-[#F5EDD6]/60 mb-2">
              Select one or more that genuinely describe your experience:
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedCategory.observations.map((obs) => {
                const isChecked = selectedObservations.includes(obs);
                return (
                  <button
                    key={obs}
                    type="button"
                    onClick={() => toggleObservation(obs)}
                    className={`text-xs px-3 py-2 rounded-xl border transition-all text-left flex items-center gap-1.5 ${
                      isChecked
                        ? "bg-[#C5A059]/20 text-[#FAF3E3] font-medium border-[#C5A059] shadow-sm"
                        : "bg-[#1C110C]/60 text-[#F5EDD6]/80 border-[#F5EDD6]/15 hover:border-[#F5EDD6]/40"
                    }`}
                  >
                    <span className="text-[11px]">{isChecked ? "✓" : "+"}</span>
                    {obs}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 3: Overall Impression */}
          <div className="mb-6">
            <label className="block text-xs uppercase tracking-wider text-[#C5A059] font-bold mb-2">
              3. Overall Impression
            </label>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {SENTIMENT_OPTIONS.map((item) => {
                const isSelected = selectedSentiment === item.value;
                return (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setSelectedSentiment(item.value)}
                    className={`text-xs p-2.5 rounded-xl border text-center transition-all ${
                      isSelected
                        ? "bg-[#C5A059] text-[#1C110C] font-semibold border-[#C5A059]"
                        : "bg-[#1C110C]/60 text-[#F5EDD6]/80 border-[#F5EDD6]/15 hover:border-[#C5A059]/50"
                    }`}
                  >
                    <div className="font-medium text-[11px] leading-tight">
                      {item.label}
                    </div>
                    <div className="text-[10px] opacity-80 mt-0.5">
                      {item.stars}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 4: Optional words */}
          <div className="mb-6">
            <label className="block text-xs uppercase tracking-wider text-[#C5A059] font-bold mb-1.5">
              4. In your own words (optional)
            </label>
            <textarea
              value={customComment}
              onChange={(e) => setCustomComment(e.target.value)}
              placeholder="e.g., Stylist gave great advice, very happy with the result..."
              rows={2}
              maxLength={300}
              className="w-full bg-[#1C110C] border border-[#F5EDD6]/20 rounded-xl p-3 text-xs sm:text-sm text-[#F5EDD6] placeholder-[#F5EDD6]/35 focus:outline-none focus:border-[#C5A059] transition-colors resize-none"
            />
          </div>

          {/* Error Banner */}
          {errorMessage && (
            <div className="mb-5 p-3.5 bg-red-950/60 border border-red-500/40 rounded-xl text-red-200 text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400 mt-0.5" />
              <div className="flex-1">
                <p>{errorMessage}</p>
                <a
                  href={GOOGLE_WRITE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 text-red-300 underline font-medium hover:text-white"
                >
                  Write review directly on Google →
                </a>
              </div>
            </div>
          )}

          {/* Submit Action */}
          <button
            type="button"
            disabled={isLoading}
            onClick={handleGenerateReview}
            className="w-full bg-[#C5A059] hover:bg-[#D4B97A] text-[#1C110C] font-bold py-3.5 px-6 rounded-2xl text-xs sm:text-sm uppercase tracking-widest transition-all shadow-lg hover:shadow-[#C5A059]/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-[#1C110C] border-t-transparent rounded-full animate-spin" />
                <span>Crafting Your Review...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Generate My Review Draft</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      )}

      {/* STEP 3: Generated Review Draft */}
      {step === 3 && (
        <div className="bg-[#241711] border border-[#C5A059]/30 rounded-3xl p-5 sm:p-7 shadow-2xl animate-in fade-in duration-300">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#F5EDD6]/10">
            <span className="text-xs font-semibold text-[#C5A059] inline-flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              Your Review Draft
            </span>
            <button
              type="button"
              onClick={() => {
                setStep(2);
                setErrorMessage(null);
              }}
              className="text-xs text-[#F5EDD6]/70 hover:text-[#C5A059] inline-flex items-center gap-1 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Adjust Answers
            </button>
          </div>

          <p className="text-xs text-[#F5EDD6]/80 mb-3">
            Review and edit your draft below. When you&apos;re ready, tap to copy and open Google Review:
          </p>

          {/* Editable Textarea */}
          <div className="relative mb-4">
            <textarea
              value={reviewDraft}
              onChange={(e) => setReviewDraft(e.target.value)}
              rows={4}
              className="w-full bg-[#1C110C] border border-[#C5A059]/40 rounded-2xl p-4 text-xs sm:text-sm text-[#FAF3E3] leading-relaxed focus:outline-none focus:border-[#C5A059] transition-colors resize-y shadow-inner font-sans"
            />
            <div className="text-[10px] text-[#F5EDD6]/50 text-right mt-1">
              {reviewDraft.length} characters • Editable
            </div>
          </div>

          {/* Copied Success Pill */}
          {copied && (
            <div className="mb-4 p-3 bg-emerald-950/70 border border-emerald-500/40 rounded-xl text-emerald-200 text-xs flex items-center justify-center gap-2 animate-in fade-in">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Review copied to your clipboard! Opening Google...</span>
            </div>
          )}

          {/* Primary Action Button */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={handleCopyAndOpenGoogle}
              className="w-full bg-[#C5A059] hover:bg-[#D4B97A] active:scale-[0.99] text-[#1C110C] font-bold py-4 px-6 rounded-2xl text-xs sm:text-sm uppercase tracking-widest transition-all shadow-xl hover:shadow-[#C5A059]/30 flex items-center justify-center gap-2"
            >
              <Copy className="w-4 h-4" />
              <span>Copy &amp; Open Google Review</span>
              <ExternalLink className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleCopyOnly}
                className="bg-[#1C110C] hover:bg-[#2F1F17] text-[#FAF3E3] border border-[#F5EDD6]/20 py-2.5 px-3 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Text Only</span>
                  </>
                )}
              </button>

              <button
                type="button"
                disabled={isLoading || cooldownSeconds > 0}
                onClick={handleGenerateReview}
                className="bg-[#1C110C] hover:bg-[#2F1F17] text-[#FAF3E3] border border-[#F5EDD6]/20 py-2.5 px-3 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>
                  {cooldownSeconds > 0
                    ? `Wait ${cooldownSeconds}s`
                    : "Regenerate Draft"}
                </span>
              </button>
            </div>
          </div>

          {/* How to Post on Google Guide */}
          <div className="mt-5 p-4 bg-[#1C110C]/90 border border-[#F5EDD6]/10 rounded-2xl">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059] mb-2 flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
              How to post your review on Google:
            </h4>
            <ol className="text-[11px] sm:text-xs text-[#F5EDD6]/80 space-y-1.5 list-decimal list-inside leading-relaxed">
              <li>Tap <strong>Copy &amp; Open Google Review</strong> above.</li>
              <li>On Google, tap your honest star rating (1 to 5 stars).</li>
              <li>Long-press the text box and tap <strong>Paste</strong>.</li>
              <li>Hit <strong>Post</strong> to publish your genuine feedback!</li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}
