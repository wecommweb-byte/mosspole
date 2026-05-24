"use client";

import { useState, useEffect } from "react";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { NAV_LINKS, AMAZON_URL } from "@/lib/constants";

export default function Nav() {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-forest/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.25)] border-b border-cream/10 py-3"
          : "bg-gradient-to-b from-forest/70 via-forest/30 to-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-10 flex items-center justify-between">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center"
        >
          <Image
            src="/images/logo.png"
            alt="BlushEase Logo"
            width={200}
            height={64}
            className="w-auto object-contain drop-shadow-md"
            style={{ height: '54px' }}
            priority
          />
        </motion.div>

        {/* Desktop Links */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:flex items-center gap-10"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium tracking-wide text-cream/80 hover:text-cream transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-earth rounded-full group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </motion.div>

        {/* Desktop CTA */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex items-center gap-5"
        >
          {/* Subtle divider */}
          <div className="h-5 w-px bg-cream/20 rounded-full" />

          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden bg-earth text-forest px-7 py-2.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(188,143,82,0.4)] group"
          >
            <span className="relative z-10 flex items-center gap-2">
              🛒 Buy on Amazon
            </span>
            {/* Shine sweep on hover */}
            <div className="absolute inset-0 bg-white/25 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12 pointer-events-none" />
          </a>
        </motion.div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-cream"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <motion.svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </motion.svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 w-full bg-forest/97 backdrop-blur-xl text-cream border-t border-cream/10 px-6 py-5 flex flex-col gap-1 md:hidden shadow-2xl"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-base font-medium py-3 px-2 border-b border-cream/10 hover:text-earth transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-earth text-forest text-center px-6 py-3 rounded-full font-semibold mt-4 hover:bg-earth/90 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              🛒 Buy on Amazon
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
