"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    alt: "Artisan coffee being prepared",
    aspectRatio: "aspect-square",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    alt: "Cozy cafe interior",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    alt: "Fresh pastries and coffee",
    aspectRatio: "aspect-square",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    alt: "Delicious gourmet pizza",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e",
    alt: "Latte art and ambiance",
    aspectRatio: "aspect-square",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
    alt: "Green plants in bistro",
    aspectRatio: "aspect-[4/3]",
  },
];

export default function GalleryPreview() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] font-bold text-3xl sm:text-4xl lg:text-5xl text-primary mb-4">
            A Glimpse Inside
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Step into our world of coffee, community, and culinary delights
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`relative ${image.aspectRatio} overflow-hidden rounded-xl group cursor-pointer`}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`object-cover transition-all duration-500 ${
                  hoveredId === image.id ? "scale-110" : "scale-100"
                }`}
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 bg-primary/60 transition-opacity duration-300 flex items-center justify-center ${
                  hoveredId === image.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="text-white font-semibold text-lg">
                  View Gallery
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-block bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-all hover:shadow-xl transform hover:-translate-y-1"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
