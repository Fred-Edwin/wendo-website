"use client";

import { useState } from "react";
import MenuHero from "@/components/shared/MenuHero";
import MenuItem from "@/components/shared/MenuItem";
import { MENU_CATEGORIES, MENU_ITEMS } from "@/lib/constants";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("coffee");

  // Filter items by active category
  const filteredItems = MENU_ITEMS.filter(
    (item) => item.category === activeCategory
  );

  return (
    <div>
      <MenuHero />

      {/* Menu Content */}
      <section className="bg-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="mb-12">
            {/* Desktop Tabs */}
            <div className="hidden lg:flex justify-center items-center gap-8 border-b border-primary/10 pb-4 overflow-x-auto">
              {MENU_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative px-4 py-2 font-semibold text-base whitespace-nowrap transition-colors ${
                    activeCategory === category.id
                      ? "text-primary"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  {category.name}
                  {activeCategory === category.id && (
                    <span className="absolute bottom-[-17px] left-0 right-0 h-1 bg-accent rounded-t-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Tabs - Scrollable */}
            <div className="lg:hidden overflow-x-auto pb-4 border-b border-primary/10">
              <div className="flex gap-3 min-w-max px-4">
                {MENU_CATEGORIES.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${
                      activeCategory === category.id
                        ? "bg-accent text-white shadow-md"
                        : "bg-white text-secondary hover:bg-primary/5"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Category Title */}
          <div className="mb-8">
            <h2 className="font-[family-name:var(--font-playfair)] font-bold text-3xl sm:text-4xl text-primary text-center">
              {MENU_CATEGORIES.find((cat) => cat.id === activeCategory)?.name}
            </h2>
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-secondary text-lg">
                  No items available in this category yet. Check back soon!
                </p>
              </div>
            )}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-md max-w-2xl mx-auto">
              <h3 className="font-[family-name:var(--font-playfair)] font-bold text-2xl text-primary mb-3">
                Ready to Order?
              </h3>
              <p className="text-secondary mb-6">
                Visit us at our bistro or call ahead to place your order for
                pickup
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:0707242987"
                  className="inline-block bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-all hover:shadow-lg"
                >
                  Call to Order
                </a>
                <a
                  href="https://wa.me/254707242987"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-natural text-white px-8 py-3 rounded-full font-semibold hover:bg-natural/90 transition-all hover:shadow-lg"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
