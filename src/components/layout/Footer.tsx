import Link from "next/link";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import {
  BUSINESS_INFO,
  CONTACT_INFO,
  OPERATING_HOURS,
  SOCIAL_MEDIA,
  NAVIGATION_LINKS,
} from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-cream">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-playfair)] font-bold text-2xl text-cream">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-cream/80 text-sm leading-relaxed">
              {BUSINESS_INFO.description}. We blend passion with perfection to
              create memorable dining experiences.
            </p>
            <p className="text-accent font-medium italic text-sm">
              {BUSINESS_INFO.tagline}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-[family-name:var(--font-playfair)] font-semibold text-lg text-cream">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/80 hover:text-accent transition-colors text-sm inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all mr-0 group-hover:mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="font-[family-name:var(--font-playfair)] font-semibold text-lg text-cream">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <PhoneIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a
                    href={`tel:${CONTACT_INFO.phones.primary}`}
                    className="text-cream/80 hover:text-accent transition-colors block"
                  >
                    {CONTACT_INFO.phones.primary}
                  </a>
                  <a
                    href={`tel:${CONTACT_INFO.phones.secondary}`}
                    className="text-cream/80 hover:text-accent transition-colors block"
                  >
                    {CONTACT_INFO.phones.secondary}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <EnvelopeIcon className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-cream/80 hover:text-accent transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPinIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <address className="text-cream/80 not-italic">
                  {CONTACT_INFO.address.full}
                </address>
              </li>
              <li className="flex items-start gap-3 text-sm pt-2">
                <ClockIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-cream/80">
                    <span className="font-medium text-cream">
                      {OPERATING_HOURS.weekdays.days}:
                    </span>{" "}
                    {OPERATING_HOURS.weekdays.hours}
                  </p>
                  <p className="text-cream/80">
                    <span className="font-medium text-cream">
                      {OPERATING_HOURS.saturday.days}:
                    </span>{" "}
                    {OPERATING_HOURS.saturday.hours}
                  </p>
                  <p className="text-cream/80">
                    <span className="font-medium text-cream">
                      {OPERATING_HOURS.sunday.days}:
                    </span>{" "}
                    {OPERATING_HOURS.sunday.hours}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div className="space-y-4">
            <h4 className="font-[family-name:var(--font-playfair)] font-semibold text-lg text-cream">
              Follow Us
            </h4>
            <p className="text-cream/80 text-sm">
              Stay connected for updates, offers, and behind-the-scenes moments.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={SOCIAL_MEDIA.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cream/10 hover:bg-accent rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 text-cream"
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
                className="w-10 h-10 bg-cream/10 hover:bg-accent rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 text-cream"
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
                className="w-10 h-10 bg-cream/10 hover:bg-accent rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5 text-cream"
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
                className="w-10 h-10 bg-cream/10 hover:bg-accent rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="TikTok"
              >
                <svg
                  className="w-5 h-5 text-cream"
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

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/60 text-sm text-center md:text-left">
              &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-cream/60 hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-cream/60 hover:text-accent transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
