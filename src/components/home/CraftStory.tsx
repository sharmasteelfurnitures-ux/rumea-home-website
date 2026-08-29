'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Hammer, ShieldCheck, Check, Sparkles } from 'lucide-react';

export default function CraftStory() {
  const craftPillars = [
    {
      icon: Flame,
      title: 'Kiln-Dried Hardwood',
      subtitle: '8–10% Moisture Seasoning',
      description:
        'Every plank of Indian Sheesham is seasoned inside computerized kiln chambers down to 8–10% moisture content. This eliminates internal tension and prevents seasonal warping, cracks, and bending during Indian monsoons.',
      highlights: ['No seasonal timber expansion', '3-stage anti-termite immersion', '100% Solid Heartwood'],
    },
    {
      icon: Hammer,
      title: 'Mortise & Tenon Joinery',
      subtitle: 'Generational Interlocking Woodcraft',
      description:
        'We reject fragile staple pins, plastic dowels, and cheap glue. Our master woodworkers hand-cut generational mortise and tenon interlocking joints that distribute weight evenly and last for decades of daily family use.',
      highlights: ['Rock-solid frame integrity', 'Zero squeaks or loosening', 'Engineered for high load-bearing'],
    },
    {
      icon: ShieldCheck,
      title: 'Non-Toxic Protective Finish',
      subtitle: 'Food-Grade, Zero-VOC Sealants',
      description:
        'Finished with child-safe, organic matte and satin sealants that protect the wood from liquid spills while letting the natural, rich Sheesham grain breathe and age gracefully with timeless character.',
      highlights: ['Child & pet safe', 'Spill-resistant topcoat', 'Hand-buffed natural satin sheen'],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-warm-alabaster border-y border-border-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> HONEST WOODCRAFT
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-charcoal mt-1 leading-tight">
            How True Solid Furniture Is Built
          </h2>
          <p className="text-mid-gray text-sm sm:text-base mt-2">
            No MDF fillers. No synthetic veneers. Built above local carpenter shortcuts and priced below showroom markups.
          </p>
        </motion.div>

        {/* 3-Column Craft Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {craftPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-card p-6 sm:p-8 border border-border-sand flex flex-col justify-between hover:border-charcoal/30 shadow-card card-hover group"
              >
                <div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="w-12 h-12 rounded-btn bg-charcoal text-white flex items-center justify-center mb-5 shadow-sm"
                  >
                    <Icon className="w-6 h-6 text-warm-sand" />
                  </motion.div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-antique-gold block">
                    {pillar.subtitle}
                  </span>

                  <h3 className="font-serif font-bold text-lg sm:text-xl text-charcoal mt-1 mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-mid-gray leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-sand/70 space-y-2 text-xs font-medium text-charcoal">
                  {pillar.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
