'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#1C110C]/95 backdrop-blur-xl border-t border-[#F5EDD6]/15 pb-safe shadow-[0_-8px_25px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-3 px-5 py-3">
        {/* Quick Call Button with 48px minimum touch target */}
        <a 
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex items-center justify-center w-12 h-12 bg-[#2A1A12] border border-[#C5A059]/40 text-[#C5A059] active:bg-[#3D2A1E] transition-colors shrink-0 shadow-md rounded-none"
          aria-label="Call Salon"
        >
          <Phone size={19} strokeWidth={1.5} />
        </a>

        {/* Primary WhatsApp Action */}
        <a 
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 h-12 bg-[#C5A059] active:bg-[#D4B97A] text-[#1C110C] font-sans font-bold text-xs uppercase tracking-[0.2em] shadow-lg transition-transform active:scale-[0.98] cursor-pointer"
        >
          <MessageCircle size={17} />
          <span>WhatsApp Us (099029 49549)</span>
        </a>
      </div>
    </div>
  );
}
