"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SHAPES } from "@/lib/constants";

const SLIDER_IMAGES = [
  "/images/Slider/slide_1.jpg.jpg",
  "/images/Slider/slide_2.jpg.jpg",
  "/images/Slider/slide_3.jpg.jpg",
  "/images/Slider/slide_4.jpg.jpg",
  "/images/Slider/slide_5.jpg.jpg",
];

export default function Shapes() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((next: number) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  }, [current]);

  const prev = useCallback(() => {
    go(current === 0 ? SLIDER_IMAGES.length - 1 : current - 1);
  }, [current, go]);

  const next = useCallback(() => {
    go(current === SLIDER_IMAGES.length - 1 ? 0 : current + 1);
  }, [current, go]);

  // Auto-play every 3s
  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <section id="shapes" className="py-24 lg:py-32 bg-forest text-cream overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="text-earth text-sm uppercase tracking-widest font-semibold block mb-3">Infinite Creativity</span>
            <h2 className="text-4xl lg:text-6xl mb-6 font-serif">Any <i>Shape</i> Your Plants Imagine</h2>
            <p className="text-lg text-cream/80 leading-relaxed mb-6">
              BlushEase adapts smoothly to your houseplant&apos;s natural climbing instinct. Train your Monstera to climb a romantic heart, form a gorgeous lush arch, double loop into a pretzel, or wind up a study spiral hook.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Arch", "Pretzel", "Heart", "Spiral"].map((shape) => (
                <span
                  key={shape}
                  className="px-4 py-1.5 rounded-full border border-cream/20 text-xs tracking-wider uppercase bg-cream/5"
                >
                  {shape}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-2xl border border-cream/10 bg-[#1e2a1f]"
          >
            <Image
              src="/images/shapes_hero.jpeg"
              alt="Four moss pole shapes — arch, heart, pretzel, and spiral — with lush climbing plants in white pots"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Shapes Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24 lg:mb-32">
          {SHAPES.map((shape, i) => (
            <motion.div
              key={shape.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border border-cream/10 relative bg-[#1e2a1f]"
            >
              <Image
                src={shape.image}
                alt={`${shape.label} shaped moss pole supporting plant growth`}
                fill
                className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12241d]/90 via-[#12241d]/30 to-transparent z-10" />
              <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex flex-col justify-end">
                <span className="text-earth text-xs font-semibold tracking-widest uppercase mb-1">BlushEase Shape</span>
                <h3 className="font-serif text-3xl text-white font-bold leading-tight">{shape.label}</h3>
                <p className="text-xs text-cream/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to explore matching design guides for {shape.label} setups.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Image Slider ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Label */}
          <div className="text-center mb-10">
            <span className="text-earth text-sm uppercase tracking-widest font-semibold">Gallery</span>
            <h3 className="text-3xl lg:text-4xl font-serif mt-2">See It In Every <i>Style</i></h3>
          </div>

          {/* Slider container */}
          <div className="relative w-full aspect-[16/9] max-h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border border-cream/10 bg-[#1e2a1f] group">

            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={SLIDER_IMAGES[current]}
                  alt={`BlushEase moss pole gallery image ${current + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradient overlays for arrows */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/30 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/30 to-transparent z-10 pointer-events-none" />

            {/* Prev Arrow */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-forest/70 border border-cream/20 backdrop-blur-sm flex items-center justify-center text-cream hover:bg-earth hover:text-forest hover:border-earth transition-all duration-200 shadow-lg"
              aria-label="Previous"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Next Arrow */}
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-forest/70 border border-cream/20 backdrop-blur-sm flex items-center justify-center text-cream hover:bg-earth hover:text-forest hover:border-earth transition-all duration-200 shadow-lg"
              aria-label="Next"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* Counter badge */}
            <div className="absolute bottom-4 right-5 z-20 bg-forest/70 backdrop-blur-sm border border-cream/20 text-cream text-xs px-3 py-1.5 rounded-full">
              {current + 1} / {SLIDER_IMAGES.length}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6 flex-wrap">
            {SLIDER_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-earth w-6 h-2"
                    : "bg-cream/30 hover:bg-cream/60 w-2 h-2"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
