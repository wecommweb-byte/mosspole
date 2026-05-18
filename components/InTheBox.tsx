"use client";

import { motion } from "framer-motion";
import { BOX_ITEMS } from "@/lib/constants";

export default function InTheBox() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="in-the-box" className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-4xl lg:text-5xl mb-4 text-forest"
          >
            Everything You <i>Need</i>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-forest/80"
          >
            Unbox a complete plant support kit. We&apos;ve included all the accessories you need to secure your plants immediately.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6"
        >
          {BOX_ITEMS.map((item, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="bg-[#ece5da] p-8 rounded-3xl flex flex-col items-center justify-center text-center"
            >
              <span className="text-4xl mb-4">{item.icon}</span>
              <span className="font-serif text-3xl text-earth leading-none mb-2">{item.qty}</span>
              <span className="font-medium text-forest">{item.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 bg-forest text-cream rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-sage/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <h3 className="text-3xl lg:text-4xl mb-4 relative z-10">Ready to use out of the box.</h3>
          <p className="text-lg text-cream/80 max-w-xl mx-auto relative z-10">
            No extra tools required. Just bend, insert, and tie your plants securely.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
