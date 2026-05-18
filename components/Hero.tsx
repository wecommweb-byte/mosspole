"use client";

import { motion } from "framer-motion";
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
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-forest text-cream min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
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
              The BendGrow bendable moss pole provides natural, sturdy support that adapts to any climbing plant. Aluminum core, real coco coir.
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

          {/* Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex justify-center items-center min-h-[400px]"
          >
            <motion.svg 
              animate={{ y: [0, -12, 0] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="w-full max-w-[500px]" 
              viewBox="0 0 400 500" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                  <radialGradient id="glowHero" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#5a7a5c" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="#1e3a2f" stopOpacity="0"/>
                  </radialGradient>
                  <pattern id="coirPattern" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M0,5 Q2.5,0 5,5 T10,5" fill="none" stroke="#8b5a2b" strokeWidth="0.8" opacity="0.4"/>
                      <path d="M0,10 Q2.5,5 5,10 T10,10" fill="none" stroke="#a0522d" strokeWidth="0.8" opacity="0.4"/>
                  </pattern>
                  <filter id="shadowGlow">
                      <feDropShadow dx="0" dy="15" stdDeviation="15" floodColor="#000" floodOpacity="0.4"/>
                  </filter>
              </defs>
              
              <circle cx="200" cy="250" r="180" fill="url(#glowHero)" />
              
              <path d="M120,300 C80,220 130,120 200,160 C250,180 230,280 180,320 C150,340 140,320 120,300 Z" fill="#48634a" filter="url(#shadowGlow)"/>
              
              <path d="M150,450 L150,220 C150,100 280,100 280,220" fill="none" stroke="url(#coirPattern)" strokeWidth="36" strokeLinecap="round" filter="url(#shadowGlow)"/>
              <path d="M150,450 L150,220 C150,100 280,100 280,220" fill="none" stroke="#5c3a21" strokeWidth="32" strokeLinecap="round" opacity="0.8"/>
              <path d="M150,450 L150,220 C150,100 280,100 280,220" fill="none" stroke="url(#coirPattern)" strokeWidth="32" strokeLinecap="round" opacity="0.9"/>
              
              <path d="M150,450 L150,470" fill="none" stroke="#d1d5db" strokeWidth="8" strokeLinecap="round" />
              
              <path d="M180,350 C120,300 150,180 230,220 C290,250 280,350 220,380 C190,400 200,370 180,350 Z" fill="#5a7a5c" filter="url(#shadowGlow)"/>
              
              <circle cx="280" cy="180" r="6" fill="#c49a6c" />
              <circle cx="295" cy="195" r="4" fill="#c49a6c" opacity="0.6"/>
              <circle cx="120" cy="200" r="8" fill="#f6f1ea" opacity="0.2"/>
            </motion.svg>
            
            <motion.div 
              animate={{ y: [0, 12, 0] }} 
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute bottom-10 left-0 lg:-left-10 bg-cream text-forest p-4 rounded-2xl shadow-2xl flex flex-col gap-1"
            >
              <span className="font-serif font-semibold text-xl leading-none">2-Pack</span>
              <span className="text-sage text-sm font-medium">Includes accessories</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
