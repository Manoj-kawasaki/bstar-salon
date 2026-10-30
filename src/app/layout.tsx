import { Playfair_Display, Montserrat, Cinzel } from "next/font/google";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import BookingProvider from "@/components/BookingProvider";
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
        sizes: "512x512",
      },
    ],
  },
  title: {
    default: "B★Star Unisex Salon | Luxury Hair, Balayage, Bridal & HydraFacial in TC Palya, KR Puram, Bengaluru",
    template: "%s",
  },
  description:
    "Rated 4.3★ by 339+ clients. Experience bespoke hair coloring, balayage, keratin treatments, O3+ & HydraFacials, and bridal couture at B★Star Unisex Salon on TC Palya Main Rd, Battarahalli, Bengaluru. Book online today.",
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
    title: "B★Star Unisex Salon | Luxury Hair, Balayage, Bridal & HydraFacial in TC Palya, KR Puram, Bengaluru",
    description:
      "Rated 4.3★ by 339+ clients. Experience bespoke hair coloring, balayage, keratin treatments, O3+ & HydraFacials, and bridal couture at B★Star Unisex Salon on TC Palya Main Rd, Battarahalli, Bengaluru. Book online today.",
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/bstar-logo-transparent.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Unisex Salon Battarahalli Bengaluru`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B★Star Unisex Salon | Luxury Hair, Balayage, Bridal & HydraFacial in TC Palya, KR Puram, Bengaluru",
    description:
      "Rated 4.3★ by 339+ clients. Experience bespoke hair coloring, balayage, keratin treatments, O3+ & HydraFacials, and bridal couture at B★Star Unisex Salon on TC Palya Main Rd, Battarahalli, Bengaluru. Book online today.",
    images: [`${siteConfig.url}/images/bstar-logo-transparent.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["BeautySalon", "HairSalon"],
    "@id": "https://bstarsalon.com/#salon",
    name: "B★Star Unisex Salon",
    legalName: "B★STAR UNISEX SALON",
    alternateName: "B-Star Unisex Saloon",
    url: "https://bstarsalon.com",
    logo: "https://bstarsalon.com/images/bstar-logo-transparent.png",
    image: [
      "https://bstarsalon.com/images/bstar-logo-transparent.png",
      "https://bstarsalon.com/images/bstar-hero-crop1.jpg",
      "https://bstarsalon.com/images/bstar-salon-interior.jpg",
      "https://bstarsalon.com/images/atelier-split-hair.jpg",
      "https://bstarsalon.com/images/bstar-curly-brunette.jpg",
    ],
    telephone: "+91-9902949549",
    priceRange: "₹₹",
    foundingDate: "2007",
    hasMenu: "https://bstarsalon.com/services",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, UPI, Google Pay, PhonePe",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.3",
      reviewCount: "339",
      bestRating: "5",
      worstRating: "1",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "No. 140, Stylo Plaza Building, Above Krishna Sagar Hotel, Next to Kanti Sweets, Anandapura Bus Stop, TC Palya Main Road, Battarahalli",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560036",
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
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://book.zuyyu.com/b-star-unisex-saloon",
        inLanguage: "en-IN",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform",
        ],
      },
      result: {
        "@type": "Reservation",
        name: "Book Salon Appointment",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "B★Star Unisex Salon Signature Services & Price Menu",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Global Color",
            description:
              "Full coverage rich hair coloring using premium zero-ammonia formulations.",
          },
          price: "5000",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Highlights Full Head",
            description:
              "Dimensional foil highlights and French balayage for full head volume.",
          },
          price: "2288",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Luxury Lotus Facial",
            description:
              "Herbal Lotus botanical radiance facial for deep cellular rejuvenation.",
          },
          price: "1356",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Luxury O3 Facial",
            description:
              "Professional O3+ deep skin oxygenating and brightening bridal glow facial.",
          },
          price: "1356",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Balayage",
            description:
              "Couture hand-painted French balayage with seamless color gradation.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Keratin Treatment",
            description:
              "Intensive protein and keratin infusion eliminating 100% frizz for 3 to 5 months.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bridal Makeup",
            description:
              "Royal Muhurtham and reception HD bridal makeup with flower setting and saree draping.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "HydraFacial",
            description:
              "Medical-grade 7-step vortex vacuum exfoliation and hyaluronic acid hydration plump.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hair Straightening",
            description:
              "Permanent hair straightening and restructuring with botanical bond protection.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Rebonding",
            description:
              "High-gloss thermal reconditioning and sleek pin-straight hair rebonding.",
          },
        },
      ],
    },
    hasMap:
      "https://maps.google.com/?q=B-Star+Unisex+Saloon+Stylo+Plaza+Building+TC+Palya+Main+Rd+Battarahalli+Bengaluru",
    areaServed: [
      { "@type": "AdministrativeArea", name: "Krishnarajapura (KR Puram)" },
      { "@type": "AdministrativeArea", name: "Battarahalli" },
      { "@type": "AdministrativeArea", name: "TC Palya" },
      { "@type": "AdministrativeArea", name: "NRI Layout (560016)" },
      { "@type": "AdministrativeArea", name: "Ramamurthy Nagar (560016)" },
      { "@type": "AdministrativeArea", name: "Anandapura" },
      { "@type": "AdministrativeArea", name: "Medahalli" },
      { "@type": "AdministrativeArea", name: "Hoysala Nagar" },
      { "@type": "AdministrativeArea", name: "Horamavu" },
      { "@type": "AdministrativeArea", name: "East Bengaluru" },
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
        <BookingProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileStickyBar />
        </BookingProvider>
      </body>
    </html>
  );
}
