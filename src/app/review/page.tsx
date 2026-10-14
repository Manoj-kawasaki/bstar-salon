import { Metadata } from "next";
import ReviewAssistant from "@/components/ReviewAssistant";

export const metadata: Metadata = {
  title: "Review B★Star Unisex Salon | Share Your Authentic Experience",
  description:
    "Share your genuine feedback for B★Star Unisex Salon, Battarahalli, Bengaluru. Craft your review in seconds and publish directly on Google.",
  alternates: {
    canonical: "/review",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ReviewPage() {
  return (
    <main className="min-h-screen bg-[#1C110C] text-[#F5EDD6] pt-24 pb-16 px-2 sm:px-4 flex flex-col justify-start items-center">
      <ReviewAssistant />
    </main>
  );
}
