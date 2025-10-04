import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Menu",
  description:
    "Explore Wendo Coffee & Bistro's menu featuring premium coffee, fresh meals, gourmet pizza, pastries, and more. From espresso to smoothies, discover our complete offerings.",
  keywords: [
    "coffee menu Nyeri",
    "bistro menu",
    "pizza Nyeri",
    "breakfast menu",
    "lunch menu Nyeri",
  ],
  openGraph: {
    title: "Our Menu | Wendo Coffee & Bistro",
    description:
      "Explore our menu featuring premium coffee, fresh meals, gourmet pizza, and more.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        width: 1200,
        height: 630,
        alt: "Wendo Coffee & Bistro Menu",
      },
    ],
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
