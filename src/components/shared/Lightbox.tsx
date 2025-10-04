"use client";

import { useEffect } from "react";
import Image from "next/image";
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import type { GalleryImage } from "@/lib/constants";

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
}: LightboxProps) {
  const currentImage = images[currentIndex];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onPrevious();
      } else if (e.key === "ArrowRight") {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrevious, onNext]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
      {/* Backdrop - click to close */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Close lightbox"
      />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
        aria-label="Close"
      >
        <XMarkIcon className="w-8 h-8" />
      </button>

      {/* Image Counter */}
      <div className="absolute top-4 left-4 z-50 px-4 py-2 rounded-full bg-white/10 text-white font-medium">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Previous Button */}
      <button
        onClick={onPrevious}
        className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentIndex === 0}
        aria-label="Previous image"
      >
        <ChevronLeftIcon className="w-8 h-8" />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentIndex === images.length - 1}
        aria-label="Next image"
      >
        <ChevronRightIcon className="w-8 h-8" />
      </button>

      {/* Image Container */}
      <div className="relative z-40 max-w-7xl max-h-[90vh] w-full h-full mx-4 flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className="object-contain"
            sizes="100vw"
            quality={95}
            priority
          />
        </div>
      </div>

      {/* Image Caption */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-white/10 text-white text-center max-w-xl">
        <p className="font-medium">{currentImage.alt}</p>
      </div>
    </div>
  );
}
