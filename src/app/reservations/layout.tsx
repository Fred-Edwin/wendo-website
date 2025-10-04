import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reserve a Table",
  description:
    "Book your table at Wendo Coffee & Bistro in Nyeri. Make a reservation online and secure your spot for an exceptional dining experience.",
  keywords: [
    "reserve table Nyeri",
    "book table Wendo",
    "restaurant reservation",
    "cafe booking",
  ],
  openGraph: {
    title: "Reserve a Table | Wendo Coffee & Bistro",
    description:
      "Book your table at Wendo Coffee & Bistro and secure your spot for an exceptional dining experience.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
        width: 1200,
        height: 630,
        alt: "Reserve a Table at Wendo Coffee & Bistro",
      },
    ],
  },
};

export default function ReservationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
