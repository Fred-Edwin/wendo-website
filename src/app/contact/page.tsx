"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { CONTACT_INFO, OPERATING_HOURS, SOCIAL_MEDIA } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Contact form submitted:", formData);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814"
            alt="Contact Wendo Coffee & Bistro"
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
            Get In Touch
          </h1>
          <p className="text-cream text-lg md:text-xl max-w-2xl mx-auto">
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="font-[family-name:var(--font-playfair)] font-bold text-2xl md:text-3xl text-primary mb-6">
                Send Us a Message
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-natural/10 border border-natural rounded-lg">
                  <p className="text-natural font-semibold">
                    ✓ Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    Your Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Tell us how we can help you..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-accent text-white py-3 px-6 rounded-lg font-semibold hover:bg-accent/90 transition-all hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-6">
              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Phone</h3>
                    <a
                      href={`tel:${CONTACT_INFO.phones.primary}`}
                      className="block text-secondary hover:text-accent transition-colors"
                    >
                      {CONTACT_INFO.phones.primary}
                    </a>
                    <a
                      href={`tel:${CONTACT_INFO.phones.secondary}`}
                      className="block text-secondary hover:text-accent transition-colors"
                    >
                      {CONTACT_INFO.phones.secondary}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-natural rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">WhatsApp</h3>
                    <a
                      href={CONTACT_INFO.whatsapp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-natural text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-natural/90 transition-colors"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Email</h3>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-secondary hover:text-accent transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Location</h3>
                    <address className="text-secondary not-italic">
                      {CONTACT_INFO.address.full}
                    </address>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-primary mb-3">
                      Operating Hours
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-secondary font-medium">
                          {OPERATING_HOURS.weekdays.days}
                        </span>
                        <span className="text-primary">
                          {OPERATING_HOURS.weekdays.hours}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary font-medium">
                          {OPERATING_HOURS.saturday.days}
                        </span>
                        <span className="text-primary">
                          {OPERATING_HOURS.saturday.hours}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary font-medium">
                          {OPERATING_HOURS.sunday.days}
                        </span>
                        <span className="text-primary">
                          {OPERATING_HOURS.sunday.hours}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-primary mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href={SOCIAL_MEDIA.facebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 hover:bg-accent rounded-full flex items-center justify-center transition-all hover:scale-110"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-5 h-5 text-primary hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href={SOCIAL_MEDIA.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 hover:bg-accent rounded-full flex items-center justify-center transition-all hover:scale-110"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-5 h-5 text-primary hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href={SOCIAL_MEDIA.twitter.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 hover:bg-accent rounded-full flex items-center justify-center transition-all hover:scale-110"
                    aria-label="Twitter"
                  >
                    <svg
                      className="w-5 h-5 text-primary hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href={SOCIAL_MEDIA.tiktok.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 hover:bg-accent rounded-full flex items-center justify-center transition-all hover:scale-110"
                    aria-label="TikTok"
                  >
                    <svg
                      className="w-5 h-5 text-primary hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
