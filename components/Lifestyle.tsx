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

        {/* Placement Scenes Collage */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#ece5da] bg-[#e3dacd] group">
            <Image
              src="/images/Bring Nature Indoor (1).jpg.jpg"
              alt="Bring Nature Indoors — BlushEase moss poles styled across beautiful indoor living spaces"
              width={2400}
              height={900}
              className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-700"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
