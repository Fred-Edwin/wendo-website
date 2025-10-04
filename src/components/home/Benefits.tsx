import { Sofa, Wifi, Leaf } from "lucide-react";

const benefits = [
  {
    id: 1,
    icon: Sofa,
    title: "Cozy Atmosphere",
    description:
      "Relax in our comfortable seating surrounded by natural greenery. The perfect ambiance for conversations, work, or quiet reflection.",
  },
  {
    id: 2,
    icon: Wifi,
    title: "Free WiFi",
    description:
      "Stay connected with high-speed internet throughout our bistro. An ideal workspace for remote workers, students, and digital nomads.",
  },
  {
    id: 3,
    icon: Leaf,
    title: "Fresh Daily",
    description:
      "We use locally sourced, organic ingredients and bake fresh every morning. Taste the difference that quality and care make.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-beige py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] font-bold text-3xl sm:text-4xl lg:text-5xl text-primary mb-4">
            Why Choose Wendo
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Experience the difference that quality, comfort, and community make
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={benefit.id}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <IconComponent className="w-8 h-8 text-accent" />
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-playfair)] font-bold text-2xl text-primary mb-4">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
