"use client";

import { motion } from "framer-motion";
import { BOX_ITEMS } from "@/lib/constants";

// Custom, hand-crafted inline SVG icons for each accessory item in the kit
const AccessoryIcon = ({ type }: { type: string }) => {
  const baseClass = "w-full h-full text-sage group-hover:text-earth transition-colors duration-300";

  switch (type) {
    case "pole":
      return (
        <svg className={baseClass} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Wooden stake base */}
          <path d="M50,75 L50,90 L46,90 L50,95 L54,90 L50,90" fill="currentColor" opacity="0.3" />
          <path d="M50,75 L50,95" />
          {/* Main moss pole cylinder */}
          <rect x="42" y="15" width="16" height="60" rx="8" fill="currentColor" fillOpacity="0.1" />
          <rect x="42" y="15" width="16" height="60" rx="8" />
          {/* Coco coir net texture */}
          <path d="M42,25 C47,30 53,20 58,25" />
          <path d="M42,35 C47,40 53,30 58,35" />
          <path d="M42,45 C47,50 53,40 58,45" />
          <path d="M42,55 C47,60 53,50 58,55" />
          <path d="M42,65 C47,70 53,60 58,65" />
          <path d="M48,15 L48,75" strokeDasharray="3 3" opacity="0.5" />
          <path d="M52,15 L52,75" strokeDasharray="3 3" opacity="0.5" />
        </svg>
      );
    case "rope":
      return (
        <svg className={baseClass} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Coiled Jute Rope rope icon */}
          <circle cx="50" cy="50" r="28" strokeDasharray="4 2" />
          <circle cx="50" cy="50" r="20" strokeDasharray="3 2" />
          <circle cx="50" cy="50" r="12" />
          {/* Rope loose ends */}
          <path d="M22,50 C15,50 15,65 25,65 C35,65 40,80 50,80 C60,80 78,75 78,50" />
          <path d="M78,50 C78,35 65,22 50,22" />
        </svg>
      );
    case "ties":
      return (
        <svg className={baseClass} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Flexible Twist Ties */}
          <path d="M20,50 Q35,25 50,50 T80,50" />
          <path d="M20,53 Q35,28 50,53 T80,53" opacity="0.5" />
          {/* Looped twist detail */}
          <circle cx="50" cy="50" r="6" fill="currentColor" fillOpacity="0.2" />
          <circle cx="35" cy="38" r="4" />
          <circle cx="65" cy="62" r="4" />
          <path d="M47,45 L53,55" />
          <path d="M53,45 L47,55" />
        </svg>
      );
    case "velcro":
      return (
        <svg className={baseClass} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Velcro tape strap roll */}
          <path d="M30,30 H70 C75,30 75,40 70,40 H30 C25,40 25,50 30,50 H70 C75,50 75,60 70,60 H30 C25,60 25,70 30,70 H60" />
          {/* Fine velcro fibers teeth representation */}
          <path d="M35,30 V35" strokeWidth="1.5" />
          <path d="M45,30 V35" strokeWidth="1.5" />
          <path d="M55,30 V35" strokeWidth="1.5" />
          <path d="M65,30 V35" strokeWidth="1.5" />
          <path d="M35,50 V55" strokeWidth="1.5" />
          <path d="M45,50 V55" strokeWidth="1.5" />
          <path d="M55,50 V55" strokeWidth="1.5" />
          <path d="M65,50 V55" strokeWidth="1.5" />
          {/* Scissor icon cut point */}
          <path d="M68,66 A3,3 0 1,0 68,72 A3,3 0 1,0 68,66 Z" />
          <path d="M78,66 A3,3 0 1,0 78,72 A3,3 0 1,0 78,66 Z" />
          <path d="M71,69 L78,73 M71,72 L78,68" strokeWidth="1.5" />
        </svg>
      );
    case "clips":
      return (
        <svg className={baseClass} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Leaf Clip - plant aesthetic */}
          <path d="M50,85 C25,70 25,40 50,15 C75,40 75,70 50,85 Z" fill="currentColor" fillOpacity="0.1" />
          <path d="M50,15 V85" />
          <path d="M50,35 Q65,40 70,35" />
          <path d="M50,48 Q68,55 72,48" />
          <path d="M50,60 Q65,70 68,62" />
          <path d="M50,35 Q35,40 30,35" />
          <path d="M50,48 Q32,55 28,48" />
          <path d="M50,60 Q35,70 32,62" />
          {/* Clip hinge mechanism */}
          <circle cx="50" cy="85" r="4" fill="currentColor" />
        </svg>
      );
    case "labels":
      return (
        <svg className={baseClass} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Plant Label Stake */}
          <path d="M50,45 L50,90 M46,90 L50,95 L54,90" />
          <rect x="30" y="15" width="40" height="30" rx="4" fill="currentColor" fillOpacity="0.1" />
          <rect x="30" y="15" width="40" height="30" rx="4" />
          {/* Writing on the label */}
          <path d="M38,25 H62" strokeWidth="1.5" opacity="0.6" />
          <path d="M38,32 H54" strokeWidth="1.5" opacity="0.6" />
          {/* Tiny flower doodle */}
          <circle cx="58" cy="32" r="2" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
};

export default function InTheBox() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="in-the-box" className="py-24 lg:py-32 bg-cream text-forest overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="text-earth text-sm uppercase tracking-widest font-semibold block mb-3">Complete Kit</span>
          <h2 className="text-4xl lg:text-6xl mb-4 font-serif text-forest">
            Everything You <i>Need</i>
          </h2>
          <p className="text-lg text-forest/80 leading-relaxed">
            Unbox an all-inclusive premium plant training system. We have enclosed all core accessories so you can bend, shape, stake, and secure immediately.
          </p>
        </div>

        {/* 6 Accessories Card Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {BOX_ITEMS.map((item, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(44,65,53,0.08)" }}
              className="bg-white border border-[#ece5da] p-8 lg:p-10 rounded-[2rem] flex flex-col items-center justify-center text-center overflow-hidden group transition-all duration-300 relative"
            >
              {/* Inner claymorphic container */}
              <div className="w-24 h-24 mb-6 rounded-3xl bg-[#f6f1ea] flex items-center justify-center p-5 group-hover:bg-sage/10 transition-colors duration-300 shadow-inner">
                <AccessoryIcon type={item.type || ""} />
              </div>
              <span className="font-serif text-3xl text-earth leading-none mb-2 font-bold">{item.qty}</span>
              <span className="font-semibold text-forest text-sm tracking-wide group-hover:text-sage transition-colors duration-300">{item.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-16 bg-forest text-cream rounded-[2.5rem] p-10 lg:p-16 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-sage/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-earth/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-earth text-xs uppercase tracking-widest font-bold block mb-3">No Extra Purchase Required</span>
            <h3 className="text-3xl lg:text-4xl mb-4 font-serif">Instant botanical styling, out of the box.</h3>
            <p className="text-base text-cream/80 leading-relaxed max-w-xl mx-auto">
              No extra runs to the garden center. Our custom bundles ensure your climbing stems are supported safely and look outstanding immediately.
            </p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
