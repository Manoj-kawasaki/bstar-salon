"use client";

import { siteConfig } from "@/config/site";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQItem[];
}

export default function FAQSection({ faqs = siteConfig.generalFaqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bg-[#F2E8D0] text-[#1C110C] py-24 px-6 md:px-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">
          Frequently Asked
        </h2>
        
        <div className="flex flex-col border-t border-[#1C110C]/20">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#1C110C]/20">
              <button
                className="w-full py-8 flex items-center justify-between text-left group cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-serif italic text-xl sm:text-2xl group-hover:text-[#C5A059] transition-colors pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  strokeWidth={1}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-[500px] opacity-100 mb-8" : "max-h-0 opacity-0"
                }`}
              >
                <p className="font-sans text-sm sm:text-base leading-relaxed text-[#1C110C]/80 pr-4 sm:pr-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
