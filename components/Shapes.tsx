"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SHAPES } from "@/lib/constants";

export default function Shapes() {
  return (
    <section id="shapes" className="py-24 lg:py-32 bg-forest text-cream overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="text-earth text-sm uppercase tracking-widest font-semibold block mb-3">Infinite Creativity</span>
            <h2 className="text-4xl lg:text-6xl mb-6 font-serif">Any <i>Shape</i> Your Plants Imagine</h2>
            <p className="text-lg text-cream/80 leading-relaxed mb-6">
              BlushEase adapts smoothly to your houseplant&apos;s natural climbing instinct. Train your Monstera to climb a romantic heart, form a gorgeous lush arch, double loop into a pretzel, or wind up a study spiral hook.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Arch", "Pretzel", "Heart", "Spiral"].map((shape) => (
                <span 
                  key={shape} 
                  className="px-4 py-1.5 rounded-full border border-cream/20 text-xs tracking-wider uppercase bg-cream/5"
                >
                  {shape}
                </span>
              ))}
            </div>
          </motion.div>

          {/* shapes_collage.jpg leading visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-cream/10 bg-[#1e2a1f]"
          >
            <Image 
              src="/images/shapes_collage.jpg" 
              alt="Set the Shape, Fix the Vibe placement scenes collage: Window, Vanity Table, Bathroom, Work Desk, Corridor, and Book Shelf setups" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent flex items-end p-8">
              <div className="backdrop-blur-md bg-forest/40 border border-cream/10 p-5 rounded-2xl max-w-sm">
                <span className="text-earth text-xs font-semibold uppercase tracking-wider block mb-1">Set the Shape. Fix the Vibe.</span>
                <p className="text-xs text-cream/90 leading-relaxed">
                  Choose from four elegant styles that support healthy, rapid foliage growth while matching your home design aesthetics.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Shapes Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24 lg:mb-32">
          {SHAPES.map((shape, i) => (
            <motion.div
              key={shape.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border border-cream/10 relative bg-[#1e2a1f]"
            >
              <Image 
                src={shape.image} 
                alt={`${shape.label} shaped moss pole supporting plant growth`} 
                fill 
                className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" 
              />
              {/* Soft dark gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12241d]/90 via-[#12241d]/30 to-transparent z-10" />
              
              <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex flex-col justify-end">
                <span className="text-earth text-xs font-semibold tracking-widest uppercase mb-1">BlushEase Shape</span>
                <h3 className="font-serif text-3xl text-white font-bold leading-tight">{shape.label}</h3>
                <p className="text-xs text-cream/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to explore matching design guides for {shape.label} setups.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Immersive Brand Story Banner at Bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[21/9] min-h-[300px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-cream/10 group"
        >
          <Image 
            src="/images/brand_story_banner.jpg" 
            alt="BlushEase Brand Story banner displaying climbing plants inside modern home interiors" 
            fill 
            className="object-cover group-hover:scale-101 transition-transform duration-[10s]" 
          />
          <div className="absolute inset-0 bg-[#12241d]/40 group-hover:bg-[#12241d]/30 transition-colors duration-500 z-10" />
          
          {/* Typographic Overlay Content */}
          <div className="absolute inset-0 z-20 flex items-center justify-start p-8 lg:p-16">
            <div className="backdrop-blur-md bg-forest/70 border border-cream/10 p-8 lg:p-10 rounded-[2rem] max-w-xl text-left shadow-2xl">
              <span className="text-earth text-xs font-bold uppercase tracking-widest block mb-2">Our Brand Story</span>
              <h3 className="font-serif text-3xl lg:text-4xl text-white font-bold mb-4 leading-tight">
                Crafted for Plant <i>Lovers</i>
              </h3>
              <p className="text-sm lg:text-base text-cream/90 leading-relaxed mb-1">
                At BlushEase, we believe that plant care is a form of design. We created a premium, flexible support pole that doesn&apos;t just hold your plants up—it integrates them beautifully into your architectural aesthetic.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
