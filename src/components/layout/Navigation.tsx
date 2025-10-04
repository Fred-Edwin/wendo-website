"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NAVIGATION_LINKS } from "@/lib/constants";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-cream shadow-md"
            : "bg-cream/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 font-[family-name:var(--font-playfair)] font-bold text-xl sm:text-2xl text-primary hover:text-secondary transition-colors"
            >
              Wendo Coffee & Bistro
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative group ${
                    isActiveLink(link.href)
                      ? "text-primary"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-accent transition-transform origin-left ${
                      isActiveLink(link.href)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="bg-accent text-white px-6 py-2.5 rounded-full font-medium hover:bg-accent/90 transition-all hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Reserve Table
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-primary hover:bg-primary/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-primary/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[280px] bg-cream shadow-2xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Close button */}
            <div className="flex justify-end p-4 border-b border-primary/10">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-md text-primary hover:bg-primary/10 transition-colors"
                aria-label="Close menu"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 overflow-y-auto py-6 px-4">
              <div className="space-y-1">
                {NAVIGATION_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActiveLink(link.href)
                        ? "bg-accent text-white"
                        : "text-secondary hover:bg-primary/5 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="mt-8 px-4">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent/90 transition-colors"
                >
                  Reserve Table
                </Link>
              </div>
            </div>

            {/* Mobile Footer */}
            <div className="p-4 border-t border-primary/10">
              <p className="text-sm text-secondary text-center font-[family-name:var(--font-playfair)]">
                Wendo Coffee & Bistro
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
