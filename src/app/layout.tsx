import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollToTop from "@/components/shared/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Wendo Coffee & Bistro | Where Every Cup Tells a Story",
    template: "%s | Wendo Coffee & Bistro",
  },
  description:
    "A cozy haven for coffee lovers and food enthusiasts in Nyeri, Kenya. Experience premium coffee, delicious bistro fare, and warm hospitality at Wendo Coffee & Bistro.",
  keywords: [
    "coffee shop Nyeri",
    "bistro Nyeri",
    "cafe Kenya",
    "Wendo Coffee",
    "coffee near me",
    "best coffee Nyeri",
    "pizza Nyeri",
    "breakfast Nyeri",
    "workspace cafe",
  ],
  authors: [{ name: "Wendo Coffee & Bistro" }],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://wendocoffee.com",
    siteName: "Wendo Coffee & Bistro",
    title: "Wendo Coffee & Bistro | Where Every Cup Tells a Story",
    description:
      "A cozy haven for coffee lovers and food enthusiasts in Nyeri, Kenya. Experience premium coffee, delicious bistro fare, and warm hospitality.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
        width: 1200,
        height: 630,
        alt: "Wendo Coffee & Bistro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wendo Coffee & Bistro | Where Every Cup Tells a Story",
    description:
      "A cozy haven for coffee lovers and food enthusiasts in Nyeri, Kenya.",
    images: ["https://images.unsplash.com/photo-1554118811-1e0d58224f24"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Wendo Coffee & Bistro",
    description:
      "A cozy haven for coffee lovers and food enthusiasts in Nyeri, Kenya. Experience premium coffee, delicious bistro fare, and warm hospitality.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
    "@id": "https://wendocoffee.com",
    url: "https://wendocoffee.com",
    telephone: "+254707242987",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nyeri Town",
      addressLocality: "Nyeri",
      addressRegion: "Nyeri County",
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -0.4197,
      longitude: 36.9489,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "08:00",
        closes: "19:00",
      },
    ],
    servesCuisine: ["Coffee", "Bistro", "Pizza", "Breakfast", "Lunch"],
    menu: "https://wendocoffee.com/menu",
    acceptsReservations: "True",
    sameAs: [
      "https://facebook.com/wendocoffee",
      "https://instagram.com/wendocoffee",
      "https://twitter.com/wendocoffee",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <Navigation />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}