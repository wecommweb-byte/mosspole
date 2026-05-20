"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Lifestyle() {
  return (
    <section id="lifestyle" className="py-24 lg:py-32 bg-[#F6F1EA] overflow-hidden text-forest">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <span className="text-earth text-sm uppercase tracking-widest font-semibold block mb-3">Living Inspiration</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-4xl lg:text-6xl mb-4 font-serif"
          >
            Bring Nature <i>Indoors</i>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-forest/80 leading-relaxed"
          >
            See how BlushEase transforms standard indoor living and work spaces into thriving, luxury architectural jungles.
          </motion.p>
        </div>

        {/* Staggered Stretched Stately 2-Column Gallery Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Lobby Scene */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col group cursor-default"
          >
            <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#ece5da] bg-[#e3dacd] mb-6">
              <Image 
                src="/images/lifestyle_lobby.jpg" 
                alt="BlushEase bendable moss pole styled in a luxury modern office lobby reception room next to minimalist furniture" 
                fill 
                className="object-cover group-hover:scale-103 transition-transform duration-[4s]" 
              />
              {/* Subtle hover vignette effect */}
              <div className="absolute inset-0 bg-forest/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
            
            <div className="px-4">
              <span className="text-earth text-xs uppercase tracking-widest font-bold block mb-1">Architectural Placement</span>
              <h3 className="font-serif text-2xl lg:text-3xl text-forest font-semibold mb-2 group-hover:text-sage transition-colors duration-300">Modern Lobby Reception</h3>
              <p className="text-sm text-forest/70 leading-relaxed">
                Add structured height and organic luxury to open-concept spaces. BlushEase acts as a breathing partition, transforming cold walls into warm, vibrant interior statements.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Multi-Scene Grid Collage */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col group lg:mt-16 cursor-default"
          >
            <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#ece5da] bg-[#e3dacd] mb-6">
              <Image 
                src="/images/lifestyle_grid.jpg" 
                alt="Grid collage of multiple BlushEase moss poles showcasing versatility across cozy study desks, greenhouse corners, and bookshelves" 
                fill 
                className="object-cover group-hover:scale-103 transition-transform duration-[4s]" 
              />
              <div className="absolute inset-0 bg-forest/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
            
            <div className="px-4">
              <span className="text-earth text-xs uppercase tracking-widest font-bold block mb-1">Design Versatility</span>
              <h3 className="font-serif text-2xl lg:text-3xl text-forest font-semibold mb-2 group-hover:text-sage transition-colors duration-300">Cozy Home Aesthetics</h3>
              <p className="text-sm text-forest/70 leading-relaxed">
                Whether placed on sunlit study desks, layered inside compact greenhouse cabinets, or cascading down bookshelves, BlushEase anchors beautifully in any room configuration.
              </p>
            </div>
          </motion.div>

        </div>
        
      </div>
    </section>
  );
}
