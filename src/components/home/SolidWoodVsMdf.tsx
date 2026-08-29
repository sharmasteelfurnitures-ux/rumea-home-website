'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ShieldAlert, Sparkles, Trees, Droplets, Hammer, HeartHandshake } from 'lucide-react';
import Link from 'next/link';

export default function SolidWoodVsMdf() {
  const comparisonData = [
    {
      feature: 'Lifespan & Durability',
      solid: '25+ Years (Generational heirlooms)',
      mdf: '2–4 Years (Breaks & sags easily)',
      solidHighlight: true,
    },
    {
      feature: 'Indian Monsoon & Humidity',
      solid: '100% Kiln-Dried (8–10% moisture, zero swelling)',
      mdf: 'Absorbs humidity & swells permanently',
      solidHighlight: true,
    },
    {
      feature: 'Joinery & Structure',
      solid: 'Master Mortise & Tenon Interlocking Wood Joinery',
      mdf: 'Cheap metal cam locks & glue screws',
      solidHighlight: true,
    },
    {
      feature: 'Chemicals & Health',
      solid: 'Zero Formaldehyde, Food-Safe Non-Toxic Finishes',
      mdf: 'Toxic synthetic resins & chemical glues',
      solidHighlight: true,
    },
    {
      feature: 'Repairability & Refinishing',
      solid: 'Can be sanded, polished & restored anytime',
      mdf: 'Cannot be repaired if chipped or peeled',
      solidHighlight: true,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-warm-alabaster border-t border-border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-charcoal text-white text-[11px] font-bold uppercase tracking-widest rounded-btn"
          >
            <Trees className="w-3.5 h-3.5 text-amber-300" /> THE HONEST TIMBER TRUTH
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight"
          >
            Solid Sheesham vs. Cheap MDF &amp; Particle Board
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-mid-gray text-sm sm:text-base leading-relaxed"
          >
            Most modern furniture brands sell compressed sawdust covered with thin paper veneer that sags within 2 years. Here is why Rumea Home crafts only 100% solid seasoned hardwood.
          </motion.p>
        </div>

        {/* 2-Column Visual Cards & Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Hero Card: Rumea Solid Sheesham Advantage (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-card p-6 sm:p-8 border-2 border-terracotta/30 shadow-card flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-terracotta text-white font-bold text-[11px] uppercase tracking-wider px-4 py-1.5 rounded-bl-card shadow-sm flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> 100% Guaranteed Hardwood
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-terracotta">
                  RUMEA HOME CRAFTSMANSHIP
                </span>
                <h3 className="font-serif font-bold text-2xl text-charcoal mt-1">
                  100% Kiln-Dried Solid Sheesham
                </h3>
                <p className="text-mid-gray text-xs sm:text-sm mt-1">
                  Natural timber grain, seasoned for 21 days in industrial kilns to withstand changing Indian seasons.
                </p>
              </div>

              {/* Feature Points */}
              <div className="space-y-4 pt-2">
                {comparisonData.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-warm-offwhite rounded-btn border border-border-sand/70">
                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-700 flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-charcoal">{item.feature}</p>
                      <p className="text-xs text-charcoal/80 font-medium mt-0.5">{item.solid}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-border-sand flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
                <HeartHandshake className="w-4 h-4 text-terracotta" />
                <span>Zero MDF. Zero Particle Board. Zero Shortcuts.</span>
              </div>

              <Link
                href="/about"
                className="text-xs font-bold text-terracotta hover:underline inline-flex items-center gap-1"
              >
                <span>Read Our Woodcraft Story &rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right Card: Cheap Engineered Wood / MDF Reality (5 cols) */}
          <div className="lg:col-span-5 bg-charcoal/5 rounded-card p-6 sm:p-8 border border-border-sand flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5" /> What Competitors Hide
                </span>
                <h3 className="font-serif font-bold text-2xl text-charcoal/80 mt-1">
                  MDF, HDF &amp; Particle Board
                </h3>
                <p className="text-mid-gray text-xs sm:text-sm mt-1">
                  Compressed wood dust &amp; paper glue sold under marketing buzzwords like &ldquo;Engineered Wood&rdquo;.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {comparisonData.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-white/60 rounded-btn border border-border-sand/40">
                    <div className="p-1 rounded-full bg-red-100 text-red-600 flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-charcoal/70">{item.feature}</p>
                      <p className="text-xs text-mid-gray mt-0.5">{item.mdf}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-border-sand/60">
              <p className="text-[11px] text-mid-gray italic">
                * Note: Standard MDF furniture cannot be disassembled and moved without the screw holes stripping permanently.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
