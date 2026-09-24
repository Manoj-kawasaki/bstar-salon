import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Couture Hair & Bridal Gallery | B★Star Unisex Salon Battarahalli",
  description: "Browse 20+ authentic client hair transformations, balayage, keratin treatments, bridal couture, and salon floor artistry at B★Star Unisex Salon, Bengaluru.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
