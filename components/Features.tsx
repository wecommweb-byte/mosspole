"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FEATURES } from "@/lib/constants";

export default function Features() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="features" className="py-24 lg:py-32 bg-cream text-forest overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Core Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-earth text-sm uppercase tracking-widest font-semibold block mb-3"
          >
            Crafted for Excellence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-4xl lg:text-6xl mb-6 font-serif"
          >
            Built for Nature. <i>Designed</i> for Homes.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="text-lg lg:text-xl text-forest/80 leading-relaxed"
          >
            BlushEase pairs premium botanical engineering with high-end aesthetic details. Explore the materials and see how simple it is to elevate your green space.
          </motion.p>
        </div>

        {/* Section 1: Materials (Split Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-24 lg:mb-36">
          {/* Infographic Image */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative group"
          >
            <div className="absolute inset-0 bg-sage/5 rounded-[2.5rem] transform rotate-2 -z-10 group-hover:rotate-1 transition-transform duration-500"></div>
            <div className="relative w-full aspect-square rounded-[2.5rem] overflow-hidden shadow-xl border border-[#ece5da] bg-white">
              <Image 
                src="/images/features_materials.jpg" 
                alt="Premium Coir Moss Pole Infographic showing callouts for Jute Twine, 100% Natural Coir Fiber, Flexible Aluminum Core, and Rust-Free stability" 
                fill 
                className="object-cover group-hover:scale-102 transition-transform duration-700" 
              />
            </div>
            {/* Ambient indicator */}
            <div className="absolute -bottom-4 right-6 bg-forest text-cream text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-lg border border-cream/10 z-20">
              Hover to zoom
            </div>
          </motion.div>

          {/* Core Feature Text List */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-serif mb-8 border-b border-[#ece5da] pb-4"
            >
              Premium Material <i>Craftsmanship</i>
            </motion.h3>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-6"
            >
              {FEATURES.map((feat, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className="flex gap-4 items-start group"
                >
                  <div className="w-8 h-8 rounded-full bg-sage/10 text-sage font-semibold flex items-center justify-center text-sm flex-shrink-0 group-hover:bg-sage group-hover:text-cream transition-colors duration-300">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-forest mb-1 transition-colors group-hover:text-earth">{feat.title}</h4>
                    <p className="text-forest/70 text-sm leading-relaxed">{feat.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Section 2: Installation Guide (Split Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Detailed Step List */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-earth text-sm uppercase tracking-widest font-semibold block mb-2"
            >
              Step-by-Step Tutorial
            </motion.span>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-serif mb-8 border-b border-[#ece5da] pb-4"
            >
              Quick & Easy <i>Installation</i>
            </motion.h3>
            
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-2xl bg-earth/10 text-earth font-serif text-xl font-bold flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Set the Perfect Shape</h4>
                  <p className="text-forest/70 text-sm leading-relaxed">
                    Unbox the two poles. Bend them smoothly into the shape your plant desires—like a cozy Arch, Pretzel, romantic Heart, or whimsical Spiral.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-2xl bg-earth/10 text-earth font-serif text-xl font-bold flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Anchor in Potting Soil</h4>
                  <p className="text-forest/70 text-sm leading-relaxed">
                    Insert the tapered wood stake end deeply and securely into the soil close to the center of your pot, taking care not to disturb major roots.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-2xl bg-earth/10 text-earth font-serif text-xl font-bold flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Secure & Style Stems</h4>
                  <p className="text-forest/70 text-sm leading-relaxed">
                    Wrap your plant's climbing stems gently along the coir pole. Secure them snugly using our included natural jute twine, plant ties, or soft velcro.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-2xl bg-earth/10 text-earth font-serif text-xl font-bold flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Mist and Let Thrive</h4>
                  <p className="text-forest/70 text-sm leading-relaxed">
                    Regularly mist the coconut fiber to maintain moisture. This mimics tropical humidity and encourages aerial roots to lock onto the coir fiber naturally.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Steps Image */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 order-1 lg:order-2 relative group"
          >
            <div className="absolute inset-0 bg-earth/5 rounded-[2.5rem] transform -rotate-2 -z-10 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-xl border border-[#ece5da] bg-white">
              <Image 
                src="/images/features_installation.jpg" 
                alt="Quick & Easy Installation Steps infographic: 1. Shape the Moss Pole, 2. Tie the Plant with Moss Pole, 3. Insert Moss Pole into Plant, 4. Put in Anywhere You Want" 
                fill 
                className="object-cover group-hover:scale-102 transition-transform duration-700" 
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
