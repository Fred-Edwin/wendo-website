"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryHero from "@/components/shared/GalleryHero";
import Lightbox from "@/components/shared/Lightbox";
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from "@/lib/constants";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter images based on active category
  const filteredImages =
    activeFilter === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  // Open lightbox with clicked image
  const openLightbox = (imageId: string) => {
    const index = filteredImages.findIndex((img) => img.id === imageId);
    if (index !== -1) {
      setCurrentImageIndex(index);
      setLightboxOpen(true);
    }
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Navigate to previous image
  const previousImage = () => {
    setCurrentImageIndex((prev) =>
      prev > 0 ? prev - 1 : filteredImages.length - 1
    );
  };

  // Navigate to next image
  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev < filteredImages.length - 1 ? prev + 1 : 0
    );
  };

  // Get category name for display
  const getCategoryName = (category: string) => {
    switch (category) {
      case "food-drinks":
        return "Food & Drinks";
      case "interior":
        return "Interior";
      case "events":
        return "Events";
      default:
        return "";
    }
  };

  return (
    <div>
      <GalleryHero />

      {/* Gallery Content */}
      <section className="bg-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {GALLERY_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                  activeFilter === category.id
                    ? "bg-accent text-white shadow-lg"
                    : "bg-white text-secondary hover:bg-primary/5"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Images Count */}
          <div className="text-center mb-8">
            <p className="text-secondary">
              Showing {filteredImages.length} image
              {filteredImages.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                  index % 7 === 0 || index % 7 === 4
                    ? "row-span-2"
                    : "row-span-1"
                }`}
                onClick={() => openLightbox(image.id)}
              >
                {/* Image */}
                <div className="relative w-full h-full min-h-[200px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading="lazy"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center px-4">
                    <span className="inline-block px-4 py-2 bg-accent text-white text-sm font-semibold rounded-full mb-2">
                      {getCategoryName(image.category)}
                    </span>
                    <p className="text-white text-sm font-medium">
                      Click to view
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-secondary text-lg">
                No images found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={filteredImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onPrevious={previousImage}
          onNext={nextImage}
        />
      )}
    </div>
  );
}
