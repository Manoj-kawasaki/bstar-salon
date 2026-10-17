'use client';

import React, { useState, useEffect } from "react";
import { X, Calendar, Clock, User, Phone, Sparkles, CheckCircle2, MessageCircle } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SERVICES = [
  // Hair - Women & Men
  { name: "Designer Haircut & Styling (Women)", category: "Hair", price: "₹550" },
  { name: "Precision Haircut & Styling (Men)", category: "Hair", price: "₹200" },
  { name: "Layer Trim & Blow-Dry", category: "Hair", price: "₹600" },
  { name: "Change of Style Haircut", category: "Hair", price: "₹800" },
  { name: "Root Touch-Up (L'Oréal / Matrix)", category: "Hair", price: "₹1,000" },
  { name: "Root Touch-Up Ammonia-Free (Inoa)", category: "Hair", price: "₹1,200" },
  { name: "Global Hair Color (Classic)", category: "Hair", price: "₹2,600" },
  { name: "Global Hair Color (Ammonia-Free)", category: "Hair", price: "₹3,000" },
  { name: "Fashion Streaks / Global Highlights", category: "Hair", price: "₹1,600" },
  { name: "Keratin Protein Smoothening", category: "Hair", price: "₹5,000" },
  { name: "Smooth Straight / Permanent Straightening", category: "Hair", price: "₹6,000" },
  { name: "Rebonding Hair Treatment", category: "Hair", price: "₹7,000" },
  { name: "L'Oréal Deep Nourishing Hair Spa", category: "Hair", price: "₹750" },
  { name: "SP / Moroccanoil Luxe Hair Spa", category: "Hair", price: "₹1,500" },
  // Skin & Facials
  { name: "HydraFacial 7-Step Medical Grade", category: "Skin", price: "₹4,000" },
  { name: "O3+ Bridal Glow Luxury Facial", category: "Skin", price: "₹4,000" },
  { name: "O3+ Whitening / Brightening Facial", category: "Skin", price: "₹3,000" },
  { name: "Gold Radiant Glow Facial", category: "Skin", price: "₹1,800" },
  { name: "Detan Radiance Facial", category: "Skin", price: "₹1,400" },
  { name: "Fruit Nourishing Cleanup", category: "Skin", price: "₹550" },
  { name: "Detan Tan-Removal Cleanup", category: "Skin", price: "₹900" },
  { name: "O3+ Deep Pore Cleanup", category: "Skin", price: "₹1,000" },
  // Grooming - Men
  { name: "Executive Beard Designing & Sculpting", category: "Grooming", price: "₹150" },
  { name: "Classic Shave & Hot Towel", category: "Grooming", price: "₹100" },
  { name: "Relaxing Head Massage (Oil/Cream)", category: "Grooming", price: "₹400" },
  // Nails, Hands & Feet
  { name: "Classic Manicure & Pedicure Combo", category: "Nails", price: "₹850" },
  { name: "Spa Pedicure & Manicure Combo", category: "Nails", price: "₹1,050" },
  { name: "Crystal Spa Pedicure & Manicure Combo", category: "Nails", price: "₹1,350" },
  // Waxing & Body Brightening
  { name: "Full Body Honey Waxing", category: "Waxing", price: "₹1,800" },
  { name: "Full Body Flavour / Rica Waxing", category: "Waxing", price: "₹2,500" },
  // Bridal & Makeup
  { name: "Complete Pre-Bridal Glow Ritual (7 Services)", category: "Bridal", price: "₹6,000" },
  { name: "Royal Bridal Makeup & Saree Draping", category: "Bridal", price: "₹8,000" },
  { name: "HD Party & Occasion Makeup", category: "Makeup", price: "₹2,500" },
  { name: "Light Occasion / Day Makeup", category: "Makeup", price: "₹1,500" },
];

const STYLISTS = [
  "Senior Hair Master Stylist",
  "Skin & Aesthetic Specialist",
  "Bridal & Makeup Artist",
  "Any Available Master Stylist",
];

const TIME_SLOTS = [
  "10:00 AM (Morning Slot)",
  "11:30 AM (Morning Slot)",
  "01:00 PM (Afternoon Slot)",
  "02:30 PM (Afternoon Slot)",
  "04:00 PM (Evening Slot)",
  "05:30 PM (Evening Slot)",
  "07:00 PM (Night Slot)",
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("+91 ");
  const [service, setService] = useState(SERVICES[0].name);
  const [stylist, setStylist] = useState(STYLISTS[0]);
  const [bookingDate, setBookingDate] = useState(() => {
    const d = new Date();
    return d.toISOString().split("T")[0];
  });
  const [timeSlot, setTimeSlot] = useState(TIME_SLOTS[1]);
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [confirmedData, setConfirmedData] = useState<any>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    setError(null);
    setConfirmed(false);
    setConfirmedData(null);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !phone.trim() || phone.trim() === "+91") {
      setError("Please provide your full name and WhatsApp phone number.");
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
          service,
          stylist,
          date: bookingDate,
          time: timeSlot.split(" ")[0] + " " + timeSlot.split(" ")[1],
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg bg-[#1C110C] border border-[#C5A059]/40 text-[#F5EDD6] shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#C5A059]/25 bg-[#251710]/80">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                B★STAR Unisex Salon
              </span>
            </div>
            <h2 className="font-serif text-2xl text-[#FAF3E3] font-light mt-0.5">
              {confirmed ? "Appointment Confirmed" : "Book Your Experience"}
            </h2>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close booking modal"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-[#F5EDD6]/20 text-[#F5EDD6]/80 hover:text-[#FAF3E3] hover:border-[#C5A059] hover:bg-[#C5A059]/15 transition-all duration-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto">
          {confirmed && confirmedData ? (
            <div className="text-center py-4 space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h3 className="font-serif text-2xl text-[#FAF3E3]">
                  We've Reserved Your Chair, {confirmedData.customerName}!
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#F5EDD6]/80 mt-1">
                  Your appointment is registered in our official salon calendar.
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="bg-[#2A1A12] border border-[#C5A059]/30 p-4 text-left space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-[#F5EDD6]/10">
                  <span className="text-[#F5EDD6]/60">Service</span>
                  <span className="font-medium text-[#FAF3E3]">{confirmedData.service}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#F5EDD6]/10">
                  <span className="text-[#F5EDD6]/60">Date & Slot</span>
                  <span className="font-medium text-[#C5A059]">
                    {confirmedData.date} · {confirmedData.time}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#F5EDD6]/10">
                  <span className="text-[#F5EDD6]/60">Stylist</span>
                  <span className="font-medium text-[#FAF3E3]">{confirmedData.stylist}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#F5EDD6]/60">Booking ID</span>
                  <code className="text-[#C5A059] font-mono font-bold">{confirmedData.bookingId}</code>
                </div>
              </div>

              {/* WhatsApp Notification Indicator */}
              <div className="flex items-start gap-3 p-3.5 bg-[#0F291E] border border-[#25D366]/40 text-left text-xs text-[#DCFCE7]">
                <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#4ADE80] font-medium">
                    WhatsApp Confirmation Dispatched
                  </strong>
                  A booking notification with appointment details has been sent to{" "}
                  <strong>{confirmedData.phone}</strong>.
                </div>
              </div>

              <button
                type="button"
                onClick={handleClose}
                className="w-full py-3.5 bg-[#C5A059] hover:bg-[#D4B97A] text-[#1C110C] font-sans font-bold text-xs uppercase tracking-[0.25em] transition-all"
              >
                Done & Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-950/60 border border-red-500/50 text-red-200 text-xs">
                  ⚠️ {error}
                </div>
              )}

              {/* Client Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-[#F5EDD6]/80 mb-1.5">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-[#C5A059]/70" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Shalini Roy"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-[#2A1A12] border border-[#F5EDD6]/20 focus:border-[#C5A059] text-[#FAF3E3] text-xs sm:text-sm pl-9 pr-3 py-2.5 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-[#F5EDD6]/80 mb-1.5">
                    WhatsApp Mobile *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-[#C5A059]/70" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98450 12345"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#2A1A12] border border-[#F5EDD6]/20 focus:border-[#C5A059] text-[#FAF3E3] text-xs sm:text-sm pl-9 pr-3 py-2.5 outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-wider text-[#F5EDD6]/80 mb-1.5">
                  Select Desired Service *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#2A1A12] border border-[#F5EDD6]/20 focus:border-[#C5A059] text-[#FAF3E3] text-xs sm:text-sm px-3 py-2.5 outline-none transition-colors cursor-pointer"
                >
                  {SERVICES.map((s) => (
                    <option key={s.name} value={s.name} className="bg-[#1C110C] text-[#F5EDD6]">
                      {s.name} ({s.category} · {s.price})
                    </option>
                  ))}
                </select>
              </div>

              {/* Stylist & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-[#F5EDD6]/80 mb-1.5">
                    Stylist Preference
                  </label>
                  <select
                    value={stylist}
                    onChange={(e) => setStylist(e.target.value)}
                    className="w-full bg-[#2A1A12] border border-[#F5EDD6]/20 focus:border-[#C5A059] text-[#FAF3E3] text-xs sm:text-sm px-3 py-2.5 outline-none transition-colors cursor-pointer"
                  >
                    {STYLISTS.map((st) => (
                      <option key={st} value={st} className="bg-[#1C110C] text-[#F5EDD6]">
                        {st}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-[#F5EDD6]/80 mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-[#C5A059]/70" />
                    <input
                      type="date"
                      value={bookingDate}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full bg-[#2A1A12] border border-[#F5EDD6]/20 focus:border-[#C5A059] text-[#FAF3E3] text-xs sm:text-sm pl-9 pr-3 py-2.5 outline-none transition-colors cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Time Slot */}
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-wider text-[#F5EDD6]/80 mb-1.5">
                  Preferred Time Slot
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 w-4 h-4 text-[#C5A059]/70" />
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-[#2A1A12] border border-[#F5EDD6]/20 focus:border-[#C5A059] text-[#FAF3E3] text-xs sm:text-sm pl-9 pr-3 py-2.5 outline-none transition-colors cursor-pointer"
                  >
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot} className="bg-[#1C110C] text-[#F5EDD6]">
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-wider text-[#F5EDD6]/80 mb-1.5">
                  Special Requests / Consultation Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Skin sensitivity, specific balayage tone, bridal event date..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#2A1A12] border border-[#F5EDD6]/20 focus:border-[#C5A059] text-[#FAF3E3] text-xs sm:text-sm px-3 py-2 outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-4 bg-[#C5A059] hover:bg-[#D4B97A] text-[#1C110C] font-sans font-bold text-xs uppercase tracking-[0.25em] shadow-xl hover:shadow-[0_8px_25px_rgba(197,160,89,0.35)] transition-all disabled:opacity-50"
              >
                {loading
                  ? "Reserving Slot & Sending WhatsApp..."
                  : "Confirm Booking & Send WhatsApp →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
