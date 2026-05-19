"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FEATURES } from "@/lib/constants";

export default function Features() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="features" className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-4xl lg:text-5xl mb-4 text-forest"
          >
            Premium <i>Quality</i>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-forest/80"
          >
            Designed for the ultimate plant care experience. Superior materials for superior growth.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {FEATURES.map((feature, i) => (
            <motion.div 
              key={i} 
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-cream-alt flex flex-col"
            >
              <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden bg-cream-alt/30">
                <Image src={feature.image} alt={feature.title} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-forest">{feature.title}</h3>
              <p className="text-forest/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
