"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const LIFESTYLE_IMAGES = [
  { src: "/images/lifestyle_1.jpg", alt: "Double monstera plants with straight and snake moss poles in white pots", className: "md:col-span-2 md:row-span-2" },
  { src: "/images/lifestyle_2.jpg", alt: "Monstera with a wavy snake moss pole in a cozy room next to a green armchair", className: "md:col-span-1 md:row-span-1" },
  { src: "/images/lifestyle_3.jpg", alt: "Two monsteras with straight and wavy moss poles in a concrete pot and wicker basket", className: "md:col-span-1 md:row-span-1" },
  { src: "/images/lifestyle_4.jpg", alt: "Monsteras climbing straight and wavy moss poles in a beautiful sunlit room", className: "md:col-span-3 md:row-span-1" },
];

export default function Lifestyle() {
  return (
    <section id="lifestyle" className="py-24 lg:py-32 bg-[#F6F1EA] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-4xl lg:text-5xl mb-4 text-[#2C4135]"
          >
            Bring Nature <i>Indoors</i>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#2C4135]/80"
          >
            See how BlushEase transforms any space into a lush, thriving indoor jungle.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {LIFESTYLE_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative rounded-3xl overflow-hidden group shadow-sm hover:shadow-xl transition-shadow ${img.className}`}
            >
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-[#2C4135]/0 group-hover:bg-[#2C4135]/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
