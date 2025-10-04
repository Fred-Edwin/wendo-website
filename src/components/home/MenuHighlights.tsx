import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const menuCategories = [
  {
    id: 1,
    title: "Coffee & Beverages",
    description:
      "From expertly crafted espresso to refreshing iced drinks, our coffee menu features premium beans roasted to perfection. Start your day right with our signature blends.",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    link: "/menu#beverages",
  },
  {
    id: 2,
    title: "Fresh Meals & Pizza",
    description:
      "Savor our delicious selection of freshly prepared meals, gourmet pizzas with artisan toppings, and hearty dishes made with locally sourced ingredients.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    link: "/menu#meals",
  },
  {
    id: 3,
    title: "Pastries & Smoothies",
    description:
      "Indulge in our freshly baked pastries, wholesome smoothie bowls, and healthy treats. Perfect for a quick breakfast or an afternoon pick-me-up.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    link: "/menu#pastries",
  },
];

export default function MenuHighlights() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] font-bold text-3xl sm:text-4xl lg:text-5xl text-primary mb-4">
            Explore Our Menu
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Discover our carefully curated selection of premium coffee,
            delicious food, and delightful treats
          </p>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {menuCategories.map((category) => (
            <div
              key={category.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Card Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                <h3 className="font-[family-name:var(--font-playfair)] font-bold text-2xl text-primary">
                  {category.title}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {category.description}
                </p>
                <Link
                  href={category.link}
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-all group/link"
                >
                  View Category
                  <ArrowRightIcon className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            href="/menu"
            className="inline-block bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-all hover:shadow-xl transform hover:-translate-y-1"
          >
            See Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
