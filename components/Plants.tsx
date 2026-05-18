"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PLANTS } from "@/lib/constants";

export default function Plants() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="plants" className="py-24 lg:py-32 bg-cream pb-40">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4 text-forest">
            Perfect For <i>Climbers</i>
          </h2>
          <p className="text-lg text-forest/80 max-w-2xl mx-auto">
            Ideal for a wide variety of vining and climbing houseplants that thrive with aerial root support.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6 max-w-4xl mx-auto">
          {PLANTS.map((plant, i) => (
            <motion.div
              key={plant}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`
                px-8 py-4 rounded-full font-serif text-2xl lg:text-3xl cursor-default transition-all duration-300 shadow-sm
                ${hoveredIndex === i ? 'bg-sage text-cream shadow-lg -translate-y-1' : 'bg-white text-forest'}
                ${hoveredIndex === i && i % 2 === 0 ? '-rotate-2' : ''}
                ${hoveredIndex === i && i % 2 !== 0 ? 'rotate-2' : ''}
              `}
            >
              {plant}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
