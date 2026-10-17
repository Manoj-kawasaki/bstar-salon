import { Metadata } from "next";
import BookingPortal from "@/components/BookingPortal";
import FAQSection from "@/components/FAQSection";
import BookingCTA from "@/components/BookingCTA";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Book Salon Appointment Online | B★Star Unisex Salon Battarahalli",
  description:
    "Book your salon appointment online at B★Star Unisex Salon, Battarahalli. Instant WhatsApp confirmation, transparent price menu, haircuts from ₹200/₹550, HydraFacials, and bridal packages.",
  alternates: {
    canonical: "/book",
  },
  openGraph: {
    title: "Book Salon Appointment Online | B★Star Unisex Salon Battarahalli",
    description:
      "Reserve your chair at B★Star Unisex Salon at Stylo Plaza, TC Palya Main Rd, Battarahalli. Instant online & WhatsApp booking for haircuts, hair color, keratin, facials, and bridal rituals.",
    url: `${siteConfig.url}/book`,
  },
};

const bookingFaqs = [
  {
    question: "Do I need to pay an advance booking fee online?",
    answer:
      "No advance payment is needed. You can book your appointment online or via WhatsApp with 100% confidence and pay directly at our salon reception after your treatment is finished via UPI (GPay, PhonePe), Credit/Debit card, or Cash.",
  },
  {
    question: "How do I know if my appointment is confirmed?",
    answer:
      "Once you submit your booking on bstarsalon.com/book, you will immediately receive a digital confirmation on screen with your unique Booking ID, and our team will dispatch your booking confirmation directly to your WhatsApp number.",
  },
  {
    question: "What if I need to reschedule or cancel my appointment?",
    answer:
      "Rescheduling is completely free and effortless. Simply message us on WhatsApp (+91 99029 49549) or call us, and our desk will move your chair reservation to your preferred date and time.",
  },
  {
    question: "Are walk-in appointments available without booking?",
    answer:
      "Yes, walk-ins are always welcomed based on chair availability. However, for specialized treatments like Keratin, Hair Botox, Balayage, HydraFacials, and Bridal Makeup, booking in advance guarantees priority attention from our senior master stylists without waiting.",
  },
  {
    question: "Where is B★Star Unisex Salon located in Battarahalli?",
    answer:
      "We are located at No. 140, Stylo Plaza Building, TC Palya Main Road, Battarahalli, Bengaluru 560036 — conveniently situated above Krishna Sagar Hotel and next to Kanti Sweets, with convenient customer parking.",
  },
];

export default function BookPage() {
  return (
    <main className="min-h-screen bg-[#1C110C] text-[#F5EDD6]">
      <BookingPortal />
      <FAQSection faqs={bookingFaqs} />
      <BookingCTA />
    </main>
  );
}
