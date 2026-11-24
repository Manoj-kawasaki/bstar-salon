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
        "@type": [
          "HairSalon",
          "BeautySalon",
          "DaySpa",
          "HealthAndBeautyBusiness",
        ],
        "@id": "https://bstarsalon.com/#salon",
        name: "B★Star Unisex Salon",
        legalName: "B★STAR UNISEX SALON",
        alternateName: [
          "B-Star Unisex Salon",
          "B★Star Unisex Salon",
          "B-Star Unisex Saloon",
          "B Star Salon Battarahalli",
          "B Star Unisex Salon TC Palya",
        ],
        url: "https://bstarsalon.com/",
        logo: {
          "@type": "ImageObject",
          "@id": "https://bstarsalon.com/#logo",
          url: "https://bstarsalon.com/favicon.png",
          caption: "B★STAR Unisex Salon Logo",
          width: 512,
          height: 512,
        },
        image: [
          "https://bstarsalon.com/images/bstar-logo-transparent.png",
          "https://bstarsalon.com/images/bstar-hero-crop1.jpg",
          "https://bstarsalon.com/images/bstar-salon-interior.jpg",
          "https://bstarsalon.com/images/atelier-split-hair.jpg",
          "https://bstarsalon.com/images/bstar-curly-brunette.jpg",
        ],
        description:
          "Established in 2007, B★STAR Unisex Salon is the premier luxury hair, skin, bridal and beauty care destination in Battarahalli, TC Palya Main Road, Bengaluru. Renowned for 100% transparent pricing, precision styling, Balayage, Keratin treatments, HydraFacials, and bridal makeovers.",
        telephone: "+91-9902949549",
        email: "contact@bstarsalon.com",
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted:
          "Cash, UPI, Google Pay (Tez), Credit Card, Debit Card, Net Banking, NFC Mobile Payments",
        foundingDate: "2007",
        hasMenu: "https://bstarsalon.com/services",
        hasMap:
          "https://www.google.com/maps/search/?api=1&query=B-Star+Unisex+Saloon+TC+Palya+Main+Road+Bengaluru",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.3",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "339",
          reviewCount: "339",
        },
        address: {
          "@type": "PostalAddress",
          "@id": "https://bstarsalon.com/#address",
          streetAddress:
            "No. 140, Stylo Plaza Building, 1st Floor, Above Krishna Sagar Hotel, Next to Kanti Sweets, Anandapura Bus Stop, TC Palya Main Road",
          addressLocality: "Battarahalli, TC Palya, KR Puram, Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560036",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          "@id": "https://bstarsalon.com/#geo",
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
            closes: "21:30",
          },
        ],
        areaServed: [
          { "@type": "AdministrativeArea", name: "TC Palya" },
          { "@type": "AdministrativeArea", name: "Battarahalli" },
          { "@type": "AdministrativeArea", name: "Anandapura" },
          { "@type": "AdministrativeArea", name: "KR Puram" },
          { "@type": "AdministrativeArea", name: "Kalkere" },
          { "@type": "AdministrativeArea", name: "Ramamurthy Nagar" },
          { "@type": "AdministrativeArea", name: "Seegehalli" },
          { "@type": "AdministrativeArea", name: "East Bengaluru" },
        ],
        sameAs: [
          "https://search.google.com/local/writereview?placeid=ChIJQwX9_hQRrjsRPGH6avSZBOc",
          "https://maps.google.com/?q=B-Star+Unisex+Saloon+Stylo+Plaza+Building+TC+Palya+Main+Rd+Battarahalli+Bengaluru",
          "https://book.zuyyu.com/b-star-unisex-saloon",
          "https://www.justdial.com/Bangalore/B-Star-Unisex-Saloon-Above-Krishna-Sagar-Hotel-Anandapura-TC-Palya-Main-Road/080PXX80-XX80-180424161517-D3Y7_BZDET",
        ],
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Balayage Hair Colouring",
              url: "https://bstarsalon.com/services/hair",
              description:
                "Couture hand-painted French balayage with seamless color gradation and dual-tone foilayage.",
            },
            price: "5000",
            priceCurrency: "INR",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Keratin Hair Smoothing Treatment",
              url: "https://bstarsalon.com/services/hair",
              description:
                "Intensive protein and keratin infusion eliminating 100% frizz for 3 to 5 months.",
            },
            price: "5000",
            priceCurrency: "INR",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Hair Botox Treatment",
              url: "https://bstarsalon.com/services/hair",
              description:
                "Deep restorative hair botox therapy infusing hyaluronic acid, caviar oil, and amino acids.",
            },
            price: "5000",
            priceCurrency: "INR",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "HydraFacial Deep Pore Infusion",
              url: "https://bstarsalon.com/services/skin",
              description:
                "Medical-grade 7-step vortex vacuum exfoliation and hyaluronic acid hydration plump.",
            },
            price: "4000",
            priceCurrency: "INR",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "O3+ Luxury Radiance Bridal Facial",
              url: "https://bstarsalon.com/services/skin",
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
              name: "Men's Precision Haircut & Styling",
              url: "https://bstarsalon.com/services/grooming",
              description:
                "Precision fade haircut, executive beard styling, hot towel shave, and de-tan.",
            },
            price: "200",
            priceCurrency: "INR",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Royal Bridal Makeup Package",
              url: "https://bstarsalon.com/services/bridal",
              description:
                "Royal Muhurtham and reception HD bridal makeup with flower setting and master saree draping.",
            },
            price: "6000",
            priceCurrency: "INR",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Gel Nail Extensions & Art",
              url: "https://bstarsalon.com/services/nails",
              description:
                "Custom sculpted acrylic nail extensions, French tips, chrome art, and gel overlays.",
            },
            price: "2000",
            priceCurrency: "INR",
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
