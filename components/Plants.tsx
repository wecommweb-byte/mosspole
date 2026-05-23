"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PLANTS } from "@/lib/constants";

export default function Plants() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="plants" className="py-24 lg:py-32 bg-[#F6F1EA] overflow-hidden text-forest pb-36">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Premium Infographic Card */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative group"
          >
            <div className="absolute inset-0 bg-sage/5 rounded-[2.5rem] transform rotate-2 -z-10 group-hover:rotate-1 transition-transform duration-500"></div>
            <div className="relative w-full aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#ece5da] bg-white">
              <Image 
                src="/images/climbers_infographic.jpg" 
                alt="Loves All Climbers: Monstera, Delicate Vines, and Pothos climbing bendable coir moss poles styled in white pots" 
                fill 
                className="object-cover group-hover:scale-102 transition-transform duration-700" 
              />
            </div>
            {/* Subtle Zoom helper */}
            <div className="absolute -bottom-4 right-6 bg-forest text-cream text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-lg border border-cream/10 z-20">
              Hover to zoom
            </div>
          </motion.div>

          {/* Right Column: Title + Interactive Tag Cloud */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="mb-8"
            >
              <span className="text-earth text-sm uppercase tracking-widest font-semibold block mb-3">Botanical Support</span>
              <h2 className="text-4xl lg:text-5xl mb-6 font-serif leading-tight">
                Perfect For <i>Climbers</i>
              </h2>
              <p className="text-lg text-forest/80 leading-relaxed mb-6">
                Ideal for a wide variety of vining and climbing houseplants. From delicate, winding ivy to heavy, broad-leaved Monstera stems, BlushEase provides the sturdy structural moisture aerial roots love.
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-3 pt-2">
              {PLANTS.map((plant, i) => (
                <motion.div
                  key={plant}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  onHoverStart={() => setHoveredIndex(i)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className={`
                    px-5 py-2.5 rounded-full font-serif text-lg lg:text-xl cursor-default transition-all duration-300 shadow-sm border border-[#ece5da]
                    ${hoveredIndex === i ? 'bg-sage text-cream shadow-lg -translate-y-0.5' : 'bg-white text-forest'}
                  `}
                >
                  {plant}
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
