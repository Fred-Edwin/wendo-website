import Image from "next/image";
import { Coffee, Leaf, Users, Wifi } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the story behind Wendo Coffee & Bistro. Learn about our commitment to quality coffee, fresh food, and community in Nyeri, Kenya.",
  keywords: [
    "about Wendo",
    "coffee shop story",
    "cafe Nyeri",
    "community bistro",
  ],
  openGraph: {
    title: "About Us | Wendo Coffee & Bistro",
    description:
      "Discover the story behind Wendo Coffee & Bistro and our commitment to quality, community, and sustainability.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
        width: 1200,
        height: 630,
        alt: "About Wendo Coffee & Bistro",
      },
    ],
  },
};

export default function AboutPage() {
  const features = [
    {
      icon: Coffee,
      title: "Quality Coffee",
      description:
        "We source premium, locally-roasted Arabica beans from Kenya's finest estates, ensuring every cup delivers exceptional flavor and aroma.",
    },
    {
      icon: Leaf,
      title: "Fresh Food",
      description:
        "All our meals are prepared daily from scratch using fresh, locally-sourced ingredients. No preservatives, just pure, delicious food.",
    },
    {
      icon: Users,
      title: "Green Space",
      description:
        "Surrounded by lush indoor plants and natural light, our bistro offers a tranquil escape where you can relax and recharge.",
    },
    {
      icon: Wifi,
      title: "Community Hub",
      description:
        "More than just a cafe - we're a workspace, meeting spot, and gathering place for Nyeri's creative and professional community.",
    },
  ];

  const values = [
    {
      title: "Quality",
      description:
        "We never compromise on quality. From our coffee beans to our ingredients, we source only the best and prepare everything with care and expertise.",
    },
    {
      title: "Community",
      description:
        "Wendo is built on relationships. We're proud to be a gathering place where friendships form, ideas flourish, and memories are made.",
    },
    {
      title: "Sustainability",
      description:
        "We're committed to sustainable practices - from supporting local farmers to reducing waste and using eco-friendly packaging wherever possible.",
    },
  ];

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24"
            alt="About Wendo Coffee & Bistro"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-primary/60" />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="font-[family-name:var(--font-playfair)] font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-4">
            About Wendo
          </h1>
          <p className="text-cream text-lg md:text-xl max-w-2xl mx-auto">
            Where coffee meets community in the heart of Nyeri
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb"
                alt="Wendo Coffee & Bistro Interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Text */}
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="font-[family-name:var(--font-playfair)] font-bold text-3xl sm:text-4xl lg:text-5xl text-primary">
                Our Story
              </h2>

              <div className="space-y-4 text-secondary leading-relaxed">
                <p>
                  Wendo Coffee & Bistro was born from a simple vision: to create
                  a space where exceptional coffee, delicious food, and genuine
                  community come together. Nestled in the vibrant heart of
                  Nyeri, we opened our doors with a commitment to serving not
                  just great coffee, but creating memorable experiences.
                </p>

                <p>
                  What started as a small coffee shop has blossomed into a
                  beloved community hub. We've watched entrepreneurs build their
                  businesses from our corner tables, seen friendships form over
                  shared meals, and witnessed countless celebrations and quiet
                  moments of reflection within our walls.
                </p>

                <p>
                  Our name, &quot;Wendo,&quot; means &quot;love&quot; in Kikuyu - and that&apos;s exactly
                  what we pour into everything we do. From carefully selecting
                  our coffee beans from local Kenyan estates to hand-crafting
                  each menu item, every detail reflects our love for great food,
                  great coffee, and the amazing people who walk through our
                  doors.
                </p>

                <p>
                  Surrounded by lush greenery and filled with natural light,
                  Wendo is more than a bistro - it&apos;s a sanctuary from the hustle
                  of daily life, a workspace for dreamers and doers, and a
                  gathering place for those who appreciate the finer things in
                  life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] font-bold text-3xl sm:text-4xl lg:text-5xl text-primary mb-4">
              What Makes Us Special
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Four pillars that define the Wendo experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-cream rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] font-bold text-xl text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-beige py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] font-bold text-3xl sm:text-4xl lg:text-5xl text-primary mb-4">
              Our Values
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] font-bold text-2xl text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] font-bold text-3xl md:text-4xl text-primary mb-6">
            Experience Wendo Today
          </h2>
          <p className="text-secondary text-lg mb-8">
            Join us for exceptional coffee, delicious food, and warm hospitality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="inline-block bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-all hover:shadow-lg"
            >
              View Our Menu
            </a>
            <a
              href="/reservations"
              className="inline-block bg-transparent border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-white transition-all hover:shadow-lg"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
