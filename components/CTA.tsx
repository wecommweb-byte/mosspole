"use client";

import { motion } from "framer-motion";
import { AMAZON_URL } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="bg-sage text-cream py-32 relative overflow-hidden text-center">
      {/* Decorative background blob */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cream/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-forest/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl lg:text-7xl mb-6 leading-tight">
            Elevate Your Indoor <i>Jungle</i>
          </h2>
          <p className="text-xl lg:text-2xl text-cream/90 mb-10">
            Join thousands of happy plant parents and transform the way your climbing plants grow today.
          </p>
          
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#ffd814] hover:bg-[#f7ca00] text-[#0f1111] font-semibold px-10 py-5 rounded-full text-lg lg:text-xl transition-transform hover:-translate-y-1 shadow-lg"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.5 17.5C14.5 18.5 12 19 9.5 19C6.5 19 4 18 2 16.5L3.5 14.5C5 16 7 17 9.5 17C12 17 14 16.5 15.5 15.5L16.5 17.5ZM19 19.5C19.5 19 20 18.5 20.5 18L22 19.5C21.5 20 20.5 20.5 20 21L19 19.5Z"/>
              <path d="M12 4C7.5 4 4 7.5 4 12C4 16.5 7.5 20 12 20C16.5 20 20 16.5 20 12C20 7.5 16.5 4 12 4ZM12 18C8.5 18 6 15.5 6 12C6 8.5 8.5 6 12 6C15.5 6 18 8.5 18 12C18 15.5 15.5 18 12 18Z"/>
            </svg>
            Buy on Amazon
          </a>
        </motion.div>
      </div>
    </section>
  );
}
