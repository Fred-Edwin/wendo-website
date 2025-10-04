import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Wendo Coffee & Bistro. Find our location, phone numbers, email, and operating hours. We&apos;re here to help!",
  keywords: [
    "contact Wendo",
    "cafe contact Nyeri",
    "Wendo phone number",
    "Wendo location",
  ],
  openGraph: {
    title: "Contact Us | Wendo Coffee & Bistro",
    description:
      "Get in touch with us. Find our location, phone numbers, and operating hours.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1521017432531-fbd92d768814",
        width: 1200,
        height: 630,
        alt: "Contact Wendo Coffee & Bistro",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
