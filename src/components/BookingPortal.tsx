"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Sparkles,
  CheckCircle2,
  MessageCircle,
  MapPin,
  ChevronRight,
  ShieldCheck,
  CreditCard,
  Gift,
  Eye,
  X,
  Scissors,
  Sparkle,
  HeartHandshake,
} from "lucide-react";
import { siteConfig } from "@/config/site";

interface ServiceItem {
  name: string;
  category: string;
  price: string;
  duration?: string;
  desc?: string;
}

const CATEGORIES = [
  { id: "all", label: "All Services" },
  { id: "hair", label: "Hair Artistry" },
  { id: "skin", label: "Skin & Facials" },
  { id: "grooming", label: "Men's Grooming" },
  { id: "pedi-mani", label: "Hands & Feet" },
  { id: "waxing", label: "Waxing & Detan" },
  { id: "bridal", label: "Bridal & Makeup" },
];

const VERIFIED_SERVICES: ServiceItem[] = [
  // Hair - Women & Men
  { name: "Precision Haircut & Styling (Men)", category: "grooming", price: "₹200", duration: "30 mins", desc: "Expert scissor work, taper/fade, wash & styling" },
  { name: "Change of Style Haircut (Men)", category: "grooming", price: "₹250–₹300", duration: "40 mins", desc: "Complete style revamp and textured finishing" },
  { name: "Designer Haircut & Styling (Women)", category: "hair", price: "₹550", duration: "45 mins", desc: "Face-framing haircut, hair wash, and blow-dry finish" },
  { name: "Layer Trim & Blow-Dry (Women)", category: "hair", price: "₹600", duration: "45 mins", desc: "Precision layer maintenance with bouncy blowout" },
  { name: "Change of Style Haircut (Women)", category: "hair", price: "₹800", duration: "60 mins", desc: "Full structural transformation with bespoke styling" },
  { name: "Kids Haircut", category: "hair", price: "₹250", duration: "30 mins", desc: "Gentle, patient styling for young ones" },
  { name: "Root Touch-Up (L'Oréal / Matrix)", category: "hair", price: "₹1,000", duration: "60 mins", desc: "100% grey coverage with high shine" },
  { name: "Root Touch-Up (Ammonia-Free Inoa)", category: "hair", price: "₹1,200", duration: "60 mins", desc: "Gentle oil-delivery ammonia-free root color" },
  { name: "Global Hair Color (Classic)", category: "hair", price: "₹2,600", duration: "90–120 mins", desc: "Rich all-over dimensional coloration" },
  { name: "Global Hair Color (Ammonia-Free)", category: "hair", price: "₹3,000", duration: "90–120 mins", desc: "Gentle odorless luxury global coverage" },
  { name: "Fashion Streaks / Global Highlights", category: "hair", price: "₹1,600–₹3,300", duration: "120–180 mins", desc: "Balayage, foil highlights, and custom toning" },
  { name: "Keratin Protein Smoothening", category: "hair", price: "₹5,000 / ₹6,000", duration: "180 mins", desc: "Zero-frizz restorative protein treatment (Medium/Long)" },
  { name: "Smooth Shine Treatment", category: "hair", price: "₹5,000", duration: "150 mins", desc: "Silky luminous manageable hair texture" },
  { name: "Smooth Straight / Permanent Straightening", category: "hair", price: "₹6,000 / ₹7,000", duration: "210 mins", desc: "Sleek straight hair with deep bond protection" },
  { name: "Hair Rebonding Treatment", category: "hair", price: "₹7,000 / ₹8,000", duration: "240 mins", desc: "Ultra-straight high-sheen hair restructuring" },
  { name: "L'Oréal Deep Nourishing Hair Spa", category: "hair", price: "₹750", duration: "45 mins", desc: "Intensive moisture and anti-dryness massage" },
  { name: "Dandruff Clear / SP Luxury Hair Spa", category: "hair", price: "₹1,000–₹1,500", duration: "60 mins", desc: "Scalp purification and premium fiber replenishment" },
  
  // Skin & Facials
  { name: "Fruit Nourishing Cleanup", category: "skin", price: "₹550", duration: "35 mins", desc: "Natural fruit enzyme pore cleansing" },
  { name: "Detan Tan-Removal Cleanup", category: "skin", price: "₹900", duration: "45 mins", desc: "Instant sun damage and dullness reversal" },
  { name: "O3+ Deep Pore Glow Cleanup", category: "skin", price: "₹1,000", duration: "45 mins", desc: "Medical brightening and blackhead extraction" },
  { name: "Gold Radiant Glow Facial", category: "skin", price: "₹1,800", duration: "60 mins", desc: "24K bio-gold radiance infusion" },
  { name: "Detan Radiance Facial", category: "skin", price: "₹1,400", duration: "60 mins", desc: "Full pigmentation correction and glow massage" },
  { name: "HydraFacial 7-Step Medical Grade", category: "skin", price: "₹4,000", duration: "75 mins", desc: "Deep vortex vacuum, salicylic/glycolic infusion & LED" },
  { name: "O3+ Bridal Glow Luxury Facial", category: "skin", price: "₹4,000", duration: "90 mins", desc: "High-concentration whitening and dermal firming" },
  { name: "O3+ Whitening & Brightening Facial", category: "skin", price: "₹3,000", duration: "75 mins", desc: "Pigment clearance and porcelain radiance" },
  { name: "4-Layer Signature Rejuvenation Facial", category: "skin", price: "₹3,800", duration: "80 mins", desc: "Mineral seaweed and multi-layer moisture lock" },
  
  // Grooming - Men
  { name: "Executive Beard Designing & Styling", category: "grooming", price: "₹150", duration: "20 mins", desc: "Sharp scissor & trimmer contouring with aftershave balm" },
  { name: "Classic Shave & Hot Towel Ritual", category: "grooming", price: "₹100", duration: "20 mins", desc: "Traditional smooth shave with hot towel prep" },
  { name: "Men's Relaxing Head Massage (Oil/Cream)", category: "grooming", price: "₹400", duration: "30 mins", desc: "Acupressure relief for stress and hair stimulation" },
  { name: "Men's Detan Face & Neck Pack", category: "grooming", price: "₹650", duration: "30 mins", desc: "Sun tan removal and active skin refreshment" },
  { name: "Men's Global Color / Beard Color", category: "grooming", price: "₹650 / ₹350", duration: "45 mins", desc: "Natural looking ammonia-free hair and beard touch-up" },

  // Hands & Feet
  { name: "Classic Manicure & Pedicure Duo", category: "pedi-mani", price: "₹850", duration: "60 mins", desc: "Cuticle care, dead skin exfoliation, and nail shape" },
  { name: "Spa Pedicure & Manicure Combo", category: "pedi-mani", price: "₹1,050", duration: "75 mins", desc: "Aromatherapy bath, massage cream, and scrub" },
  { name: "Chocolate Luxury Pedicure & Manicure", category: "pedi-mani", price: "₹1,150", duration: "75 mins", desc: "Antioxidant cocoa mask and deep softening" },
  { name: "Paraffin Smoothing Combo", category: "pedi-mani", price: "₹1,150", duration: "80 mins", desc: "Warm therapeutic wax bath for cracked heels and dry hands" },
  { name: "Crystal Spa Luxury Foot & Hand Ritual", category: "pedi-mani", price: "₹1,350", duration: "90 mins", desc: "Crystal jelly soak, volcanic scrub, and intense massage" },

  // Waxing & Detan
  { name: "Full Body Honey Waxing", category: "waxing", price: "₹1,800", duration: "60 mins", desc: "Gentle natural honey wax for smooth silky skin" },
  { name: "Full Body Flavour / Rica Waxing", category: "waxing", price: "₹2,500", duration: "75 mins", desc: "Colophony-free Italian Rica wax with minimal discomfort" },
  { name: "Full Arms + Full Legs + Underarms (Rica)", category: "waxing", price: "₹1,500", duration: "45 mins", desc: "Popular combo waxing package" },
  { name: "O3+ Full Body Detan Therapy", category: "waxing", price: "₹3,000", duration: "90 mins", desc: "Complete body brightening and pigment lift" },
  { name: "Eyebrows & Upper Lip Threading", category: "waxing", price: "₹80", duration: "15 mins", desc: "Clean geometric threading shaping" },

  // Bridal & Makeup
  { name: "Bridal Premium Package (7 Head-to-Toe Rituals)", category: "bridal", price: "₹6,000", duration: "240 mins", desc: "Full Body Wax, Body Detan/Bleach, Hair Spa, Deluxe Pedi-Mani, O3+ Facial, Threading" },
  { name: "Royal Bridal Makeup & Saree Draping", category: "bridal", price: "₹8,000", duration: "180 mins", desc: "HD bridal makeup, traditional hair ornamentation, jewel fixing & master saree draping" },
  { name: "High-Definition Party & Cocktail Glam", category: "bridal", price: "₹2,500", duration: "60 mins", desc: "Sculpted base, false lashes, eye glam, and long-wear setting" },
  { name: "Light Occasion / Day Makeup", category: "bridal", price: "₹1,500", duration: "45 mins", desc: "Fresh dewy daytime makeup with subtle contour" },
];

const TIME_SLOTS = [
  "09:30 AM",
  "10:30 AM",
  "11:30 AM",
  "12:30 PM",
  "02:00 PM",
  "03:30 PM",
  "05:00 PM",
  "06:30 PM",
  "07:30 PM",
];

const RATE_CARD_IMAGES = [
  { file: "/images/menu/ratecard-women-hair.jpg", title: "Women's Hair Artistry" },
  { file: "/images/menu/ratecard-hair-advance.jpg", title: "Keratin, Botox & Straightening" },
  { file: "/images/menu/ratecard-men-hair.jpg", title: "Men's Hair & Styling" },
  { file: "/images/menu/ratecard-women-facial.jpg", title: "Facials & Skin Rituals" },
  { file: "/images/menu/ratecard-men-facial.jpg", title: "Men's Skin & Grooming" },
  { file: "/images/menu/ratecard-pedi-mani.jpg", title: "Pedicure & Manicure Spas" },
  { file: "/images/menu/ratecard-waxing.jpg", title: "Waxing & Threading" },
  { file: "/images/menu/ratecard-body-brightening.jpg", title: "Body Detan & Bleach" },
  { file: "/images/menu/ratecard-bridal.jpg", title: "Bridal Packages & Makeup" },
  { file: "/images/menu/ratecard-membership.jpg", title: "Prepaid Membership Cards" },
];

export default function BookingPortal() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedService, setSelectedService] = useState<ServiceItem>(VERIFIED_SERVICES[2]); // Designer Haircut default
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("+91 ");
  const [bookingDate, setBookingDate] = useState(() => {
    const d = new Date();
    return d.toISOString().split("T")[0];
  });
  const [timeSlot, setTimeSlot] = useState(TIME_SLOTS[2]);
  const [notes, setNotes] = useState("");
  const [stylistPreference, setStylistPreference] = useState("Any Available Master Stylist");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [confirmedData, setConfirmedData] = useState<any>(null);

  // Rate card modal preview
  const [activeRatecard, setActiveRatecard] = useState<string | null>(null);

  const filteredServices =
    selectedCategory === "all"
      ? VERIFIED_SERVICES
      : VERIFIED_SERVICES.filter((s) => s.category === selectedCategory);

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !phone.trim() || phone.trim() === "+91") {
      setError("Please provide your name and WhatsApp phone number.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: customerName.trim(),
          phone: phone.trim(),
          service: `${selectedService.name} (${selectedService.price})`,
          stylist: stylistPreference,
          date: bookingDate,
          time: timeSlot,
          notes: notes.trim(),
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to schedule appointment.");
      }

      setConfirmedData(data);
      setConfirmed(true);
    } catch (err: any) {
      setError(err?.message || "An error occurred while booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const createWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello B★Star Salon! I want to book an appointment:\n\n` +
        `✂️ Service: ${selectedService.name} (${selectedService.price})\n` +
        `📅 Date: ${bookingDate}\n` +
        `⏰ Time: ${timeSlot}\n` +
        `👤 Name: ${customerName.trim() || "Guest"}\n` +
        `Please confirm chair availability.`
    );
    return `https://wa.me/919902949549?text=${text}`;
  };

  return (
    <div className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#2A1A12] border border-[#C5A059]/40 mb-4 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#C5A059]">
            Official Online Appointment Portal
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF3E3] font-light leading-tight mb-4">
          Reserve Your Chair &amp; <br />
          <span className="italic text-[#C5A059]">Begin Your Transformation</span>
        </h1>

        <p className="font-sans text-xs sm:text-sm text-[#F5EDD6]/80 leading-relaxed max-w-xl mx-auto">
          Welcome to B★Star Unisex Salon, Battarahalli. Choose your treatment from our authentic rate card menu below. Book online with instant WhatsApp confirmation or call our desk directly.
        </p>

        {/* Quick Contact & Verified Badge Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-sans text-[#F5EDD6]/90">
          <a
            href="tel:+919902949549"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#2A1A12] hover:bg-[#3D2A1E] border border-[#C5A059]/30 text-[#C5A059] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call: +91 99029 49549</span>
          </a>
          <a
            href={createWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1F3323] hover:bg-[#27422C] border border-[#25D366]/40 text-[#25D366] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>1-Tap WhatsApp Booking</span>
          </a>
          <div className="inline-flex items-center gap-1.5 text-[#C5A059]">
            <ShieldCheck className="w-4 h-4" />
            <span>Pay at Salon · No Advance Required</span>
          </div>
        </div>
      </div>

      {/* Main Booking Interface Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Service Selector & Menu (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Category Filter Pills */}
          <div className="bg-[#2A1A12]/80 border border-[#C5A059]/30 p-4">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#F5EDD6]/10">
              <span className="font-serif italic text-[#C5A059] text-sm">
                Step 1: Select Your Treatment
              </span>
              <span className="text-[11px] font-sans text-[#F5EDD6]/60">
                {filteredServices.length} options available
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-xs font-sans px-3.5 py-2 uppercase tracking-wider transition-all duration-200 ${
                    selectedCategory === cat.id
                      ? "bg-[#C5A059] text-[#1C110C] font-bold shadow-md"
                      : "bg-[#1C110C] text-[#F5EDD6]/80 hover:text-[#FAF3E3] border border-[#F5EDD6]/15 hover:border-[#C5A059]/50"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Service Cards List */}
          <div className="space-y-3 max-h-[560px] overflow-y-auto pr-1">
            {filteredServices.map((item, idx) => {
              const isSelected = selectedService.name === item.name;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedService(item)}
                  className={`p-4 cursor-pointer transition-all duration-200 border text-left flex items-start justify-between gap-4 ${
                    isSelected
                      ? "bg-[#251710] border-[#C5A059] shadow-lg ring-1 ring-[#C5A059]"
                      : "bg-[#2A1A12]/50 border-[#F5EDD6]/10 hover:border-[#C5A059]/40 hover:bg-[#2A1A12]"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-base sm:text-lg text-[#FAF3E3]">
                        {item.name}
                      </span>
                      {isSelected && (
                        <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                      )}
                    </div>
                    {item.desc && (
                      <p className="font-sans text-xs text-[#F5EDD6]/70 leading-relaxed">
                        {item.desc}
                      </p>
                    )}
                    {item.duration && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-sans text-[#C5A059]/80">
                        <Clock className="w-3 h-3" />
                        {item.duration}
                      </span>
                    )}
                  </div>

                  <div className="text-right shrink-0">
                    <span className="font-sans font-bold text-sm sm:text-base text-[#C5A059] block">
                      {item.price}
                    </span>
                    <button
                      type="button"
                      className={`mt-2 text-[10px] uppercase font-sans tracking-wider px-2.5 py-1 transition-colors ${
                        isSelected
                          ? "bg-[#C5A059] text-[#1C110C] font-bold"
                          : "border border-[#F5EDD6]/20 text-[#F5EDD6]/80 hover:border-[#C5A059]"
                      }`}
                    >
                      {isSelected ? "Selected" : "Select"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Rate Card Booklet Preview Bar */}
          <div className="bg-[#2A1A12] border border-[#C5A059]/30 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-[#C5A059]" />
                <h3 className="font-serif text-base text-[#FAF3E3]">
                  View Authentic Printed Rate Card
                </h3>
              </div>
              <span className="text-[11px] font-sans text-[#C5A059] uppercase tracking-wider">
                100% Transparent
              </span>
            </div>
            <p className="font-sans text-xs text-[#F5EDD6]/70">
              Browse the official laminated booklet pages as printed at our Battarahalli salon reception:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1">
              {RATE_CARD_IMAGES.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveRatecard(img.file)}
                  className="group relative h-20 bg-[#1C110C] border border-[#F5EDD6]/15 hover:border-[#C5A059] overflow-hidden text-left p-1.5 flex flex-col justify-end transition-all"
                >
                  <Image
                    src={img.file}
                    alt={img.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <span className="relative z-10 text-[9px] font-sans text-[#FAF3E3] font-medium leading-tight">
                    {img.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Schedule & Details Form (5 cols) */}
        <div className="lg:col-span-5 bg-[#251710] border border-[#C5A059]/40 p-6 sm:p-8 shadow-2xl relative">
          {/* Header */}
          <div className="pb-4 mb-6 border-b border-[#C5A059]/20">
            <span className="font-serif italic text-[#C5A059] text-xs block mb-1">
              Step 2 &amp; 3: Schedule &amp; Client Details
            </span>
            <h2 className="font-serif text-2xl text-[#FAF3E3]">
              Confirm Your Appointment
            </h2>
          </div>

          {confirmed && confirmedData ? (
            <div className="text-center py-6 space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h3 className="font-serif text-2xl text-[#FAF3E3]">
                  Appointment Reserved!
                </h3>
                <p className="font-sans text-xs text-[#F5EDD6]/80 mt-1">
                  Thank you, {confirmedData.customerName}. We have saved your chair.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-[#1C110C] border border-[#C5A059]/40 p-4 text-left space-y-2.5 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-[#F5EDD6]/10">
                  <span className="text-[#F5EDD6]/60">Treatment</span>
                  <span className="font-medium text-[#FAF3E3] text-right">
                    {confirmedData.service}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#F5EDD6]/10">
                  <span className="text-[#F5EDD6]/60">Date &amp; Time</span>
                  <span className="font-medium text-[#C5A059]">
                    {confirmedData.date} · {confirmedData.time}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#F5EDD6]/10">
                  <span className="text-[#F5EDD6]/60">Stylist</span>
                  <span className="font-medium text-[#FAF3E3]">
                    {confirmedData.stylist}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#F5EDD6]/60">Booking ID</span>
                  <span className="font-mono text-[#C5A059]">
                    {confirmedData.bookingId}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={`https://wa.me/919902949549?text=${encodeURIComponent(
                    `Hi B★Star Salon, my booking ID is ${confirmedData.bookingId} for ${confirmedData.service} on ${confirmedData.date} at ${confirmedData.time}. Looking forward to my session!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] text-black font-sans font-bold text-xs uppercase tracking-wider hover:bg-[#20ba59] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp Confirmation</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setConfirmed(false);
                    setConfirmedData(null);
                  }}
                  className="w-full py-2.5 border border-[#F5EDD6]/20 text-[#F5EDD6]/80 hover:text-[#FAF3E3] hover:border-[#C5A059] font-sans text-xs uppercase tracking-wider transition-colors"
                >
                  Book Another Service
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              {/* Selected Service Badge */}
              <div className="bg-[#1C110C] border border-[#C5A059]/30 p-3.5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-widest text-[#C5A059] block">
                    Chosen Treatment
                  </span>
                  <span className="font-serif text-sm sm:text-base text-[#FAF3E3]">
                    {selectedService.name}
                  </span>
                </div>
                <span className="font-sans font-bold text-sm text-[#C5A059] shrink-0">
                  {selectedService.price}
                </span>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-[#F5EDD6]/70 mb-1">
                    Select Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={bookingDate}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setBookingDate(e.target.value)}
                      required
                      className="w-full bg-[#1C110C] border border-[#F5EDD6]/20 px-3 py-2 text-xs text-[#FAF3E3] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-[#F5EDD6]/70 mb-1">
                    Preferred Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-[#1C110C] border border-[#F5EDD6]/20 px-3 py-2 text-xs text-[#FAF3E3] focus:outline-none focus:border-[#C5A059]"
                  >
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Stylist Preference */}
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-wider text-[#F5EDD6]/70 mb-1">
                  Stylist Preference
                </label>
                <select
                  value={stylistPreference}
                  onChange={(e) => setStylistPreference(e.target.value)}
                  className="w-full bg-[#1C110C] border border-[#F5EDD6]/20 px-3 py-2 text-xs text-[#FAF3E3] focus:outline-none focus:border-[#C5A059]"
                >
                  <option value="Any Available Master Stylist">
                    Any Available Master Stylist (Fastest)
                  </option>
                  <option value="Senior Hair Master Stylist">
                    Senior Hair Master Stylist
                  </option>
                  <option value="Skin & Aesthetic Specialist">
                    Skin &amp; Aesthetic Specialist
                  </option>
                  <option value="Bridal & Makeup Artist">
                    Bridal &amp; Makeup Artist
                  </option>
                </select>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-wider text-[#F5EDD6]/70 mb-1">
                  Your Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 w-3.5 h-3.5 text-[#C5A059]" />
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Priya Sharma"
                    required
                    className="w-full bg-[#1C110C] border border-[#F5EDD6]/20 pl-9 pr-3 py-2 text-xs text-[#FAF3E3] placeholder-[#F5EDD6]/30 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              {/* WhatsApp Phone */}
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-wider text-[#F5EDD6]/70 mb-1">
                  WhatsApp Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-2.5 w-3.5 h-3.5 text-[#C5A059]" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 99000 00000"
                    required
                    className="w-full bg-[#1C110C] border border-[#F5EDD6]/20 pl-9 pr-3 py-2 text-xs text-[#FAF3E3] placeholder-[#F5EDD6]/30 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <span className="text-[10px] text-[#F5EDD6]/50 block mt-1">
                  We send instant booking confirmation &amp; reminders via WhatsApp.
                </span>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-wider text-[#F5EDD6]/70 mb-1">
                  Special Notes / Hair Length (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Long hair, sensitive scalp, wedding on weekend"
                  className="w-full bg-[#1C110C] border border-[#F5EDD6]/20 px-3 py-2 text-xs text-[#FAF3E3] placeholder-[#F5EDD6]/30 focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              {error && (
                <div className="p-3 bg-red-950/60 border border-red-500/40 text-red-200 text-xs">
                  {error}
                </div>
              )}

              {/* Submit Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-[#C5A059] hover:bg-[#D4B97A] text-[#1C110C] font-sans font-bold text-xs uppercase tracking-[0.2em] shadow-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Calendar className="w-4 h-4" />
                  <span>
                    {loading ? "Registering Appointment..." : "Confirm & Schedule Online"}
                  </span>
                </button>

                <a
                  href={createWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#1F3323] hover:bg-[#27422C] border border-[#25D366]/40 text-[#25D366] font-sans text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Or Book Via WhatsApp Directly</span>
                </a>
              </div>
            </form>
          )}

          {/* Membership Highlight Box */}
          <div className="mt-6 pt-5 border-t border-[#F5EDD6]/10 flex items-start gap-3">
            <Gift className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-serif text-[#FAF3E3] font-medium block">
                B★Star VIP Membership Program
              </span>
              <p className="font-sans text-[11px] text-[#F5EDD6]/70 mt-0.5">
                Pay ₹5,000 get ₹7,000 value · Pay ₹10,000 get ₹15,000 value. 15% discount on all services &amp; 50% discount in your birthday month!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Salon Details & NAP Guidance */}
      <div className="mt-16 bg-[#2A1A12]/60 border border-[#C5A059]/30 p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-[#C5A059] mb-2">
              <MapPin className="w-4 h-4" />
              <h3 className="font-serif text-lg text-[#FAF3E3]">Salon Location</h3>
            </div>
            <p className="font-sans text-xs text-[#F5EDD6]/80 leading-relaxed">
              {siteConfig.location.fullAddress}
            </p>
            <p className="font-sans text-xs text-[#C5A059] mt-2">
              Landmark: Stylo Plaza Building, Above Krishna Sagar Hotel, next to Kanti Sweets.
            </p>
            <a
              href={siteConfig.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-sans text-[#FAF3E3] hover:text-[#C5A059] underline underline-offset-4 mt-3 transition-colors"
            >
              <span>Get Directions on Google Maps</span>
              <ChevronRight className="w-3 h-3" />
            </a>
          </div>

          <div>
            <div className="flex items-center gap-2 text-[#C5A059] mb-2">
              <Clock className="w-4 h-4" />
              <h3 className="font-serif text-lg text-[#FAF3E3]">Salon Timings</h3>
            </div>
            <p className="font-sans text-xs text-[#FAF3E3] font-medium">
              Monday – Sunday: 9:00 AM – 9:00 PM
            </p>
            <p className="font-sans text-xs text-[#F5EDD6]/70 mt-1">
              Open 7 days a week, including all public holidays.
            </p>
            <div className="mt-3 p-2 bg-[#1C110C] border border-[#F5EDD6]/10 text-[11px] text-[#F5EDD6]/80">
              ⚡ Walk-ins warmly welcomed based on chair availability.
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-[#C5A059] mb-2">
              <CreditCard className="w-4 h-4" />
              <h3 className="font-serif text-lg text-[#FAF3E3]">Payment &amp; Booking</h3>
            </div>
            <p className="font-sans text-xs text-[#F5EDD6]/80 leading-relaxed">
              We accept UPI (GPay, PhonePe, Paytm), Credit/Debit Cards, and Cash at the salon reception.
            </p>
            <p className="font-sans text-xs text-[#F5EDD6]/70 mt-2">
              No online pre-payment required. Pay only after your session is complete and you are 100% satisfied.
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Rate Card Viewer */}
      {activeRatecard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveRatecard(null)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] bg-[#1C110C] border border-[#C5A059] p-2 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 px-2">
              <span className="font-serif italic text-sm text-[#C5A059]">
                Official Rate Card Booklet
              </span>
              <button
                type="button"
                onClick={() => setActiveRatecard(null)}
                className="text-[#FAF3E3] hover:text-[#C5A059] p-1"
                aria-label="Close rate card viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative flex-1 min-h-[60vh] w-full overflow-hidden">
              <Image
                src={activeRatecard}
                alt="B★Star Unisex Salon Official Rate Card"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
