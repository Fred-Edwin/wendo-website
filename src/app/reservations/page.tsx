"use client";

import { useState, FormEvent } from "react";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { CONTACT_INFO } from "@/lib/constants";

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    requests: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Generate time slots from 8 AM to 9 PM in 30-min intervals
  const timeSlots = [];
  for (let hour = 8; hour <= 21; hour++) {
    for (const min of [0, 30]) {
      if (hour === 21 && min === 30) break;
      const time = `${hour.toString().padStart(2, "0")}:${min
        .toString()
        .padStart(2, "0")}`;
      const displayTime = new Date(`2000-01-01T${time}`).toLocaleTimeString(
        "en-US",
        { hour: "numeric", minute: "2-digit", hour12: true }
      );
      timeSlots.push({ value: time, label: displayTime });
    }
  }

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^(07|01)\d{8}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid Kenyan phone number (07XX or 01XX)";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.date) {
      newErrors.date = "Date is required";
    }

    if (!formData.time) {
      newErrors.time = "Time is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // In a real app, send data to backend
      console.log("Reservation submitted:", formData);
      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          date: "",
          time: "",
          guests: "2",
          requests: "",
        });
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] font-bold text-4xl sm:text-5xl md:text-6xl mb-4">
            Reserve a Table
          </h1>
          <p className="text-cream text-lg md:text-xl max-w-2xl mx-auto">
            Secure your spot at Wendo Coffee & Bistro
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
                Book Your Table
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-natural/10 border border-natural rounded-lg">
                  <p className="text-natural font-semibold">
                    ✓ Reservation request submitted successfully! We&apos;ll confirm shortly.
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
                    Full Name <span className="text-accent">*</span>
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

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    Phone Number <span className="text-accent">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="0712345678"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
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

                {/* Date and Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-primary mb-2"
                    >
                      Date <span className="text-accent">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      value={formData.date}
                      min={today}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
                        errors.date ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.date && (
                      <p className="mt-1 text-sm text-red-500">{errors.date}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium text-primary mb-2"
                    >
                      Time <span className="text-accent">*</span>
                    </label>
                    <select
                      id="time"
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
                        errors.time ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot.value} value={slot.value}>
                          {slot.label}
                        </option>
                      ))}
                    </select>
                    {errors.time && (
                      <p className="mt-1 text-sm text-red-500">{errors.time}</p>
                    )}
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <label
                    htmlFor="guests"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    value={formData.guests}
                    onChange={(e) =>
                      setFormData({ ...formData, guests: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Special Requests */}
                <div>
                  <label
                    htmlFor="requests"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    Special Requests
                  </label>
                  <textarea
                    id="requests"
                    value={formData.requests}
                    onChange={(e) =>
                      setFormData({ ...formData, requests: e.target.value })
                    }
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Any dietary restrictions, seating preferences, or special occasions?"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-accent text-white py-3 px-6 rounded-lg font-semibold hover:bg-accent/90 transition-all hover:shadow-lg"
                >
                  Reserve Table
                </button>
              </form>
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-6">
              {/* Contact Directly */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <h3 className="font-[family-name:var(--font-playfair)] font-bold text-2xl text-primary mb-6">
                  Or Contact Us Directly
                </h3>

                <div className="space-y-4">
                  {/* Phone Buttons */}
                  <a
                    href={`tel:${CONTACT_INFO.phones.primary}`}
                    className="flex items-center gap-4 p-4 bg-cream rounded-lg hover:bg-primary/5 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <PhoneIcon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-secondary">Call us</p>
                      <p className="font-semibold text-primary">
                        {CONTACT_INFO.phones.primary}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`tel:${CONTACT_INFO.phones.secondary}`}
                    className="flex items-center gap-4 p-4 bg-cream rounded-lg hover:bg-primary/5 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <PhoneIcon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-secondary">Alternate</p>
                      <p className="font-semibold text-primary">
                        {CONTACT_INFO.phones.secondary}
                      </p>
                    </div>
                  </a>

                  {/* WhatsApp Button */}
                  <a
                    href={CONTACT_INFO.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-natural/10 rounded-lg hover:bg-natural/20 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-natural rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-secondary">WhatsApp</p>
                      <p className="font-semibold text-natural">Chat with us</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Reservation Policies */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <h3 className="font-[family-name:var(--font-playfair)] font-bold text-xl text-primary mb-4">
                  Reservation Policies
                </h3>
                <ul className="space-y-3 text-sm text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      Reservations are held for <strong>15 minutes</strong> past the booking time
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      Please call us at least <strong>2 hours in advance</strong> to cancel
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      Large groups (10+) may require a deposit
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      We accommodate dietary restrictions - please mention in special requests
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
