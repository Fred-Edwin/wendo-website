import Image from "next/image";
import type { MenuItem as MenuItemType } from "@/lib/constants";

interface MenuItemProps {
  item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
  const getDietaryBadge = (dietary?: string) => {
    switch (dietary) {
      case "vegetarian":
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-natural/10 text-natural">
            V
          </span>
        );
      case "vegan":
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-natural/10 text-natural">
            VG
          </span>
        );
      case "gluten-free":
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-natural/10 text-natural">
            GF
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <div className="relative h-48 sm:h-auto sm:w-48 flex-shrink-0 overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, 192px"
          />
        </div>

        {/* Details */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            {/* Name and Dietary Badge */}
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-[family-name:var(--font-playfair)] font-bold text-xl text-primary">
                {item.name}
              </h3>
              {getDietaryBadge(item.dietary)}
            </div>

            {/* Description */}
            {item.description && (
              <p className="text-secondary text-sm leading-relaxed mb-4">
                {item.description}
              </p>
            )}

            {/* Note */}
            {item.note && (
              <p className="text-accent text-xs italic mb-3">
                * {item.note}
              </p>
            )}
          </div>

          {/* Pricing */}
          <div className="flex flex-wrap items-center gap-4">
            {item.prices.map((price, index) => (
              <div key={index} className="flex items-baseline gap-2">
                {item.prices.length > 1 && price.label && (
                  <span className="text-xs text-secondary font-medium">
                    {price.label}:
                  </span>
                )}
                <span className="font-bold text-accent text-lg">
                  KES {price.amount.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
