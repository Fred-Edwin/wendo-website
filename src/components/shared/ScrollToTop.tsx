"use client";

import { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 400px
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 w-12 h-12 bg-accent text-white rounded-full shadow-lg hover:bg-accent/90 transition-all hover:scale-110 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ChevronUpIcon className="w-6 h-6" />
        </button>
      )}
    </>
  );
}
