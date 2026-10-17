import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hair, Balayage & Bridal Transformation Gallery | B★Star Battarahalli",
  description:
    "Explore authentic client transformations at B★Star Battarahalli. Real hair color, balayage, keratin, hair botox, hydrafacials, and royal bridal couture.",
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
