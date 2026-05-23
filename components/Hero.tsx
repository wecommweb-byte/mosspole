"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AMAZON_URL, STATS } from "@/lib/constants";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] } },
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-forest text-cream min-h-[95vh] flex items-center">
      {/* Premium ambient light spots */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sage/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-earth/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="z-10"
          >
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl mb-6 leading-[1.1]">
              Shape your plant&apos;s <i>future</i>.
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg lg:text-xl text-cream/80 max-w-lg mb-10 leading-relaxed">
              The BlushEase bendable moss pole provides natural, sturdy support that adapts to any climbing plant. Aluminum core, real coco coir.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
              <a 
                href={AMAZON_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#ffd814] hover:bg-[#f7ca00] text-[#0f1111] font-semibold px-8 py-4 rounded-full transition-transform hover:-translate-y-1 flex items-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.5 17.5C14.5 18.5 12 19 9.5 19C6.5 19 4 18 2 16.5L3.5 14.5C5 16 7 17 9.5 17C12 17 14 16.5 15.5 15.5L16.5 17.5ZM19 19.5C19.5 19 20 18.5 20.5 18L22 19.5C21.5 20 20.5 20.5 20 21L19 19.5Z"/>
                  <path d="M12 4C7.5 4 4 7.5 4 12C4 16.5 7.5 20 12 20C16.5 20 20 16.5 20 12C20 7.5 16.5 4 12 4ZM12 18C8.5 18 6 15.5 6 12C6 8.5 8.5 6 12 6C15.5 6 18 8.5 18 12C18 15.5 15.5 18 12 18Z"/>
                </svg>
                Get the 2-Pack
              </a>
              <a 
                href="#shapes" 
                className="border border-earth text-cream hover:bg-earth/10 font-medium px-8 py-4 rounded-full transition-all hover:-translate-y-1"
              >
                Explore Shapes
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-8 lg:gap-12 pt-8 border-t border-cream/20">
              {STATS.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-serif text-3xl lg:text-4xl text-earth leading-none mb-2">{stat.value}</span>
                  <span className="text-xs uppercase tracking-widest text-cream/60">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual - Premium High-Res Image Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-[620px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-cream/20 bg-forest/40 group">
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
              <Image 
                src="/images/hero_shelf.jpg" 
                alt="BlushEase Premium Bendable Moss Poles shaped into Circular/Wreath, Snake/Wavy, Pretzel/Clover-loop, and Spiral configurations displaying healthy climbing foliage in white pots on a wooden shelf" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
                priority
              />
            </div>
            
            {/* Interactive Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute bottom-6 -left-4 lg:-left-8 bg-cream text-forest px-6 py-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col gap-1 z-20 border border-cream/10"
            >
              <span className="font-serif font-semibold text-2xl leading-none text-earth">2-Pack Kit</span>
              <span className="text-forest/70 text-xs font-medium tracking-wider uppercase">Complete Accessories</span>
            </motion.div>

            {/* Premium details bubble */}
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 5, delay: 0.5, ease: "easeInOut" }}
              className="absolute top-10 -right-4 bg-forest/80 backdrop-blur-md border border-cream/20 text-cream px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-20"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-earth animate-pulse"></div>
              <span className="text-xs uppercase tracking-widest font-medium">100% Natural Coir</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
