import Link from "next/link";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24"
          alt="Wendo Coffee & Bistro Interior"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6 sm:space-y-8">
          {/* Main Headline */}
          <h1 className="font-[family-name:var(--font-playfair)] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
            Where Coffee Meets
            <br />
            Community in Nyeri
          </h1>

          {/* Subheadline */}
          <p className="text-cream text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed px-4">
            Experience fresh coffee, delicious food, and a cozy atmosphere with
            lush greenery
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 sm:pt-8">
            <Link
              href="/menu"
              className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-accent/90 transition-all hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
            >
              View Our Menu
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-primary transition-all hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/80 text-sm font-medium tracking-wider">
            SCROLL
          </span>
          <ChevronDownIcon className="w-6 h-6 text-white/80" strokeWidth={2} />
        </div>
      </div>
    </section>
  );
}
