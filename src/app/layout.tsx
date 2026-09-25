import { Playfair_Display, Montserrat, Cinzel } from "next/font/google";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
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
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
  },
  title: {
    default: "B★Star Unisex Salon | Hair & Beauty Salon in Battarahalli, Bengaluru",
    template: `%s | B★Star Unisex Salon Bengaluru`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  alternates: {
    canonical: "https://bstarsalon.com/",
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  openGraph: {
    title: "B★Star Unisex Salon — Luxury Hair & Beauty Salon in Battarahalli, Bengaluru",
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
    logo: `${siteConfig.url}/images/bstar-logo-transparent.png`,
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
    hasMap: "https://maps.google.com/?q=B-Star+Unisex+Saloon+Stylo+Plaza+Building+TC+Palya+Main+Rd+Battarahalli+Bengaluru",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FMWYGMPVWB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FMWYGMPVWB');
          `}
        </Script>
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
