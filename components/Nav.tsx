"use client";

import { useState, useEffect } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { NAV_LINKS, AMAZON_URL } from "@/lib/constants";

export default function Nav() {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // We use standard state for the class toggle because backdrop-blur needs a solid background to look best,
  // but framer-motion can also animate the background color. We'll stick to a simple class toggle for the glass effect.
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-forest/90 backdrop-blur-md border-b border-cream/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        <div className="font-serif text-2xl font-semibold tracking-tight text-cream">
          BendGrow
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-earth text-cream/80"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sage hover:bg-sage-light text-cream px-6 py-2.5 rounded-full font-medium transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md"
          >
            Buy on Amazon
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-cream"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-forest text-cream border-t border-cream/10 p-4 flex flex-col gap-4 md:hidden shadow-xl"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg font-medium p-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-earth text-forest text-center px-6 py-3 rounded-full font-semibold mt-2"
            onClick={() => setIsOpen(false)}
          >
            Buy on Amazon
          </a>
        </motion.div>
      )}
    </nav>
  );
}
