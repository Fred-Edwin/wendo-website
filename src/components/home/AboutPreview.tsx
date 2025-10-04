import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function AboutPreview() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Column */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
              alt="Coffee preparation at Wendo"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text Column */}
          <div className="space-y-6">
            {/* Eyebrow */}
            <p className="text-accent font-semibold text-sm uppercase tracking-wider">
              Welcome to Wendo
            </p>

            {/* Heading */}
            <h2 className="font-[family-name:var(--font-playfair)] font-bold text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight">
              Fresh Coffee, Fresh Food, Fresh Vibes
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-secondary leading-relaxed">
              <p>
                At Wendo Coffee & Bistro, we believe that great coffee is more
                than just a drink—it's an experience. Nestled in the heart of
                Nyeri, our cozy space combines the warmth of community with the
                excellence of expertly crafted beverages and fresh, delicious
                food.
              </p>
              <p>
                Surrounded by lush greenery, our bistro offers a tranquil
                escape from the everyday hustle. Whether you're catching up
                with friends, working remotely, or simply savoring a quiet
                moment with your favorite brew, Wendo is your home away from
                home.
              </p>
              <p>
                We source the finest local ingredients and prepare everything
                fresh daily, ensuring that every cup and every bite reflects
                our commitment to quality and authenticity. Come for the
                coffee, stay for the community.
              </p>
            </div>

            {/* CTA Link */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold text-lg transition-all group"
              >
                Learn More About Us
                <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
