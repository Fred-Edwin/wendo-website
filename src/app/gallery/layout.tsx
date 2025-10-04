import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our gallery showcasing Wendo Coffee & Bistro&apos;s cozy interior, delicious food, specialty coffee, and community events. See what makes us special.",
  keywords: [
    "cafe photos Nyeri",
    "bistro gallery",
    "coffee shop interior",
    "food photography",
  ],
  openGraph: {
    title: "Gallery | Wendo Coffee & Bistro",
    description:
      "Browse our gallery showcasing our cozy interior, delicious food, and community events.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e",
        width: 1200,
        height: 630,
        alt: "Wendo Coffee & Bistro Gallery",
      },
    ],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
