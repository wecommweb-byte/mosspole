"use client";

import { motion } from "framer-motion";
import { SHAPES } from "@/lib/constants";

export default function Shapes() {
  return (
    <section id="shapes" className="py-24 lg:py-32 bg-forest text-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl mb-6">Any <i>Shape</i> You Need</h2>
            <p className="text-lg text-cream/80 mb-8 leading-relaxed max-w-lg">
              BendGrow adapts to your plant&apos;s unique growth pattern. Train your Monstera to climb a heart, or support a Pothos on a classic arch. Your imagination is the only limit.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {SHAPES.map((shape) => (
                <span 
                  key={shape.label} 
                  className="px-5 py-2 rounded-full border border-cream/20 text-sm tracking-wider uppercase"
                >
                  {shape.label}
                </span>
              ))}
              <span className="px-5 py-2 rounded-full border border-cream/20 text-sm tracking-wider uppercase">Spiral</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {SHAPES.map((shape, i) => (
              <motion.div
                key={shape.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, borderColor: "#c49a6c", backgroundColor: "rgba(246, 241, 234, 0.08)" }}
                className="aspect-square bg-cream/5 border border-cream/10 rounded-3xl flex flex-col items-center justify-center p-6 transition-colors"
              >
                <svg 
                  className="w-20 h-20 mb-4" 
                  viewBox="0 0 100 100" 
                  fill="none" 
                  stroke={i % 2 === 0 ? "#5a7a5c" : "#c49a6c"} 
                  strokeWidth="8" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d={shape.svgPath}></path>
                </svg>
                <span className="font-serif text-lg">{shape.label}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
