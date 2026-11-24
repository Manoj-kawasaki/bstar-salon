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
    default: "Best Salon in TC Palya, Bengaluru | B★Star Unisex Salon (4.3★ Rated)",
    template: "%s",
  },
  description:
    "Looking for the best salon in TC Palya Main Road? Rated 4.3★ by 339+ clients since 2007, B★Star Unisex Salon offers luxury Balayage, Global Hair Color (₹5,000), Keratin, HydraFacial, O3+ Facial (₹1,356) & Bridal Makeup at Stylo Plaza, Battarahalli.",
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
    title: "Best Salon in TC Palya, Bengaluru | B★Star Unisex Salon (4.3★ Rated)",
    description:
      "Looking for the best salon in TC Palya Main Road? Rated 4.3★ by 339+ clients since 2007, B★Star Unisex Salon offers luxury Balayage, Global Hair Color (₹5,000), Keratin, HydraFacial, O3+ Facial (₹1,356) & Bridal Makeup at Stylo Plaza, Battarahalli.",
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/bstar-logo-transparent.png`,
        width: 1200,
        height: 630,
        alt: "Best Salon in TC Palya - B★Star Unisex Salon Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Salon in TC Palya, Bengaluru | B★Star Unisex Salon (4.3★ Rated)",
    description:
      "Looking for the best salon in TC Palya Main Road? Rated 4.3★ by 339+ clients since 2007, B★Star Unisex Salon offers luxury Balayage, Global Hair Color (₹5,000), Keratin, HydraFacial, O3+ Facial (₹1,356) & Bridal Makeup at Stylo Plaza, Battarahalli.",
    images: [`${siteConfig.url}/images/bstar-logo-transparent.png`],
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru, Battarahalli, TC Palya",
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
    "@graph": [
      {
        "@type": ["HairSalon", "BeautySalon", "DaySpa"],
        "@id": "https://bstarsalon.com/#salon",
        name: "B★Star Unisex Salon",
        legalName: "B★STAR UNISEX SALON",
        alternateName: [
          "B-Star Unisex Saloon",
          "B Star Unisex Salon TC Palya",
          "Best Salon in TC Palya - B★Star",
          "B Star Salon TC Palya",
          "B-Star Beauty Parlour Battarahalli",
        ],
        description:
          "Since 2007, B★Star Unisex Salon has served Battarahalli, TC Palya, KR Puram, NRI Layout, and Ramamurthy Nagar in Bengaluru with precision hair artistry, balayage, keratin treatments, clinical O3+ and HydraFacials, nail care, and bridal couture.",
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
        paymentAccepted:
          "Cash, Credit Card, Debit Card, UPI, Google Pay (Tez), NFC Mobile Payments",
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
        hasMap:
          "https://www.google.com/maps/search/?api=1&query=B-Star+Unisex+Saloon+TC+Palya+Main+Road+Bengaluru",
        sameAs: [
          "https://book.zuyyu.com/b-star-unisex-saloon"
        ],
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
                name: "Balayage & Foilayage",
                description:
                  "Couture hand-painted French balayage with seamless color gradation and dual-tone foilayage.",
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
                name: "Hair Rebonding",
                description:
                  "High-gloss thermal reconditioning and sleek pin-straight hair rebonding.",
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
                name: "HydraFacial",
                description:
                  "Medical-grade 7-step vortex vacuum exfoliation and hyaluronic acid hydration plump.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Acne & Pore Cleansing",
                description:
                  "Deep clinical extraction, sebum regulation, and soothing botanical skin therapy.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Bridal Makeup & Saree Draping",
                description:
                  "Royal Muhurtham and reception HD bridal makeup with flower setting and master saree draping.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Acrylic Nails & Extensions",
                description:
                  "Custom sculpted acrylic nail extensions, French tips, chrome art, and gel overlays.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Manicure & Pedicure",
                description:
                  "Therapeutic candle spa manicure and crystal pedicure foot relaxation rituals.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Brazilian & Body Waxing",
                description:
                  "Painless Rica wax hair removal, full body waxing, and permanent hair reduction.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Men's Haircut & Grooming",
                description:
                  "Precision fade haircuts, executive beard styling, hot towel shave, and de-tan.",
              },
            },
          ],
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "TC Palya", postalCode: "560036" },
          { "@type": "AdministrativeArea", name: "Battarahalli", postalCode: "560036" },
          { "@type": "AdministrativeArea", name: "Krishnarajapura (KR Puram)", postalCode: "560036" },
          { "@type": "AdministrativeArea", name: "NRI Layout (560016)", postalCode: "560016" },
          { "@type": "AdministrativeArea", name: "Ramamurthy Nagar (560016)", postalCode: "560016" },
          { "@type": "AdministrativeArea", name: "Anandapura", postalCode: "560036" },
          { "@type": "AdministrativeArea", name: "Bengaluru", postalCode: "560036" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://bstarsalon.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Which is the best unisex salon near me in TC Palya Main Road and Anandapura?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "B★Star Unisex Salon (B-Star Unisex Saloon) at Stylo Plaza Building, next to Kanti Sweets and Above Krishna Sagar Hotel at Anandapura Bus Stop, is rated the best salon in TC Palya Main Road (4.3★ by 339+ clients) for haircuts, balayage, keratin, O3+ facials, and bridal makeup.",
            },
          },
          {
            "@type": "Question",
            name: "Which is the best salon in TC Palya for haircuts, balayage, and facials?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "B★Star Unisex Salon (rated 4.3★ by 339+ clients) is recognized as the best salon in TC Palya Main Road, Battarahalli. Established in 2007, our master stylists specialize in precision haircuts, French balayage, keratin treatments, hair botox, clinical HydraFacials, and luxury O3+ facials.",
            },
          },
          {
            "@type": "Question",
            name: "What is the price of Global Hair Color, Highlights, and O3+ Facial at B★Star Salon TC Palya?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "At B★Star Unisex Salon, we offer 100% transparent pricing: Global Hair Color is ₹5,000, Full Head Highlights are ₹2,288, Luxury O3+ Bridal Radiance Facial is ₹1,356, and Luxury Lotus Facial is ₹1,356. We accept UPI, Google Pay (Tez), NFC, Credit & Debit Cards, and cash with no hidden charges.",
            },
          },
          {
            "@type": "Question",
            name: "Where exactly is B★Star Unisex Salon located on TC Palya Main Road?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "B★Star Unisex Salon is located at No. 140, Stylo Plaza Building, directly above Krishna Sagar Hotel and next to Kanti Sweets, right opposite Anandapura Bus Stop on TC Palya Main Road, Battarahalli, Bengaluru 560036.",
            },
          },
          {
            "@type": "Question",
            name: "Does B★Star Salon offer bridal makeup and home salon services in TC Palya and Ramamurthy Nagar?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we provide luxury HD & Airbrush bridal makeup, pre-bridal packages, saree draping, and wedding event preparation, including mobile home salon services across TC Palya, Battarahalli, KR Puram, NRI Layout, and Ramamurthy Nagar.",
            },
          },
          {
            "@type": "Question",
            name: "What are the timings and contact options for B★Star Unisex Salon?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "B★Star Unisex Salon is open 7 days a week from 9:00 AM to 9:00 PM. Walk-ins are always welcomed, or you can call +91 99029 49549 or message us directly on WhatsApp for immediate inquiries.",
            },
          },
        ],
      },
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
