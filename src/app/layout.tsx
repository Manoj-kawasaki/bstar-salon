import { Playfair_Display, Montserrat, Cinzel } from "next/font/google";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import { siteConfig } from "@/config/site";

export const viewport: Viewport = {
  themeColor: "#1C110C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: `${siteConfig.name} — Luxury Unisex Salon in Battarahalli, Bengaluru`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/bstar-hero-crop1.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Luxury Haute Coiffure Bengaluru`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Bengaluru`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/bstar-hero-crop1.jpg`],
  },
  keywords: [
    "BStar Salon",
    "B-Star Unisex Salon",
    "B★Star Unisex Salon",
    "salon in Battarahalli",
    "best hair salon in Battarahalli Bengaluru",
    "unisex salon TC Palya Main Road",
    "luxury beauty salon KR Puram",
    "hair botox Bangalore",
    "kerafusion hair treatment Bengaluru",
    "nanoplastia salon Bangalore",
    "couture balayage hair color Bengaluru",
    "hydrafacial clinic Battarahalli",
    "bridal makeup artist Bengaluru",
    "men precision grooming salon TC Palya",
    "Stylo Plaza salon Bengaluru",
  ],
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Battarahalli, Bengaluru",
    "geo.position": "13.0189;77.7028",
    "ICBM": "13.0189, 77.7028",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["HairSalon", "BeautySalon"],
    "@id": "https://bstarsalon.com/#salon",
    name: siteConfig.name,
    legalName: "B★STAR UNISEX SALON",
    alternateName: ["B-Star Unisex Salon", "BStar Salon Battarahalli"],
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/bstar-hero-crop1.jpg`,
    image: [
      `${siteConfig.url}/images/bstar-hero-crop1.jpg`,
      `${siteConfig.url}/images/bstar-salon-interior.jpg`,
      `${siteConfig.url}/images/atelier-split-hair.jpg`,
      `${siteConfig.url}/images/bstar-curly-brunette.jpg`,
    ],
    telephone: siteConfig.phoneRaw,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, UPI, Google Pay, PhonePe",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.location.building}, ${siteConfig.location.street}`,
      addressLocality: "Battarahalli, Bengaluru",
      addressRegion: "Karnataka",
      postalCode: siteConfig.location.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.0189,
      longitude: 77.7028,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.googleReviewStats.rating,
      reviewCount: siteConfig.googleReviewStats.reviewCount,
      bestRating: siteConfig.googleReviewStats.ratingMax,
      worstRating: 1,
    },
    hasMap: "https://maps.google.com/?q=B-Star+Unisex+Saloon+Stylo+Plaza+Building+TC+Palya+Main+Rd+Battarahalli+Bengaluru",
    sameAs: [
      siteConfig.googleReviewStats.googleReviewUrl,
      siteConfig.bookingUrl,
    ],
    areaServed: [
      { "@type": "AdministrativeArea", name: "Battarahalli" },
      { "@type": "AdministrativeArea", name: "TC Palya" },
      { "@type": "AdministrativeArea", name: "KR Puram" },
      { "@type": "AdministrativeArea", name: "Bengaluru" },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${montserrat.variable} ${cinzel.variable} min-h-screen bg-[#1C110C] text-[#F5EDD6] font-sans antialiased flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
