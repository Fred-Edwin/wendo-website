import Image from "next/image";

export default function GalleryHero() {
  return (
    <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e"
          alt="Wendo Coffee & Bistro Gallery"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="font-[family-name:var(--font-playfair)] font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-4">
          Our Gallery
        </h1>
        <p className="text-cream text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">
          A visual journey through Wendo
        </p>
      </div>
    </section>
  );
}
