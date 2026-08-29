'use client';

import React from 'react';
import { Flame, Hammer, ShieldCheck, Check } from 'lucide-react';

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
    <section className="py-16 md:py-24 bg-white border-y border-border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-antique-gold">
            HONEST WOODCRAFT
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-espresso mt-1 leading-tight">
            How True Solid Furniture Is Built
          </h2>
          <p className="text-soft-taupe text-sm sm:text-base mt-2">
            No MDF fillers. No synthetic veneers. Built above local carpenter shortcuts and priced below luxury brand markups.
          </p>
        </div>

        {/* 3-Column Craft Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {craftPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-warm-ivory rounded-card p-6 sm:p-8 border border-border-sand flex flex-col justify-between hover:border-espresso/30 shadow-card card-hover"
              >
                <div>
                  <div className="w-12 h-12 rounded-btn bg-espresso text-warm-ivory flex items-center justify-center mb-5 shadow-sm">
                    <Icon className="w-6 h-6 text-warm-sand" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-antique-gold block">
                    {pillar.subtitle}
                  </span>

                  <h3 className="font-serif font-bold text-lg sm:text-xl text-espresso mt-1 mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-soft-taupe leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-sand/70 space-y-2 text-xs font-medium text-espresso">
                  {pillar.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-antique-gold flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
