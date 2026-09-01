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
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F7F4EE] border-t border-[#D8C9B5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#2C2926] text-[#F7F4EE] text-[11px] font-medium uppercase tracking-[0.10em] rounded-btn"
          >
            <Trees className="w-3.5 h-3.5 text-[#D8C9B5]" /> THE HONEST TIMBER TRUTH
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2926] font-medium tracking-tight"
          >
            Solid Sheesham vs. Cheap MDF &amp; Particle Board
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#A69B8C] text-sm sm:text-base leading-relaxed"
          >
            Most modern furniture brands sell compressed sawdust covered with thin paper veneer that sags within 2 years. Here is why Rumea Home crafts only 100% solid seasoned hardwood.
          </motion.p>
        </div>

        {/* 2-Column Visual Cards & Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Hero Card: Rumea Solid Sheesham Advantage (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-card p-6 sm:p-8 border border-[#D8C9B5] shadow-card flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#48563A] text-white font-medium text-[11px] uppercase tracking-wider px-4 py-1.5 rounded-bl-card shadow-xs flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-white" /> 100% Guaranteed Hardwood
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.10em] text-[#48563A]">
                  RUMEA HOME CRAFTSMANSHIP
                </span>
                <h3 className="font-serif font-medium text-2xl text-[#2C2926] mt-1">
                  100% Kiln-Dried Solid Sheesham
                </h3>
                <p className="text-[#A69B8C] text-xs sm:text-sm mt-1">
                  Natural timber grain, seasoned for 21 days in industrial kilns to withstand changing Indian seasons.
                </p>
              </div>

              {/* Feature Points */}
              <div className="space-y-4 pt-2">
                {comparisonData.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-[#F7F4EE] rounded-btn border border-[#D8C9B5]/60">
                    <div className="p-1 rounded-full bg-[#48563A]/15 text-[#48563A] flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#2C2926]">{item.feature}</p>
                      <p className="text-xs text-[#2C2926]/80 font-normal mt-0.5">{item.solid}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#D8C9B5] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-medium text-[#2C2926]">
                <HeartHandshake className="w-4 h-4 text-[#48563A]" />
                <span>Zero MDF. Zero Particle Board. Zero Shortcuts.</span>
              </div>

              <Link
                href="/about"
                className="text-xs font-medium text-[#48563A] hover:text-[#2C2926] hover:underline inline-flex items-center gap-1"
              >
                <span>Read Our Woodcraft Story &rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right Card: Cheap Engineered Wood / MDF Reality (5 cols) */}
          <div className="lg:col-span-5 bg-[#F7F4EE] rounded-card p-6 sm:p-8 border border-[#D8C9B5] flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.10em] text-[#A69B8C] flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5 text-[#A69B8C]" /> What Competitors Hide
                </span>
                <h3 className="font-serif font-medium text-2xl text-[#2C2926]/80 mt-1">
                  MDF, HDF &amp; Particle Board
                </h3>
                <p className="text-[#A69B8C] text-xs sm:text-sm mt-1">
                  Compressed wood dust &amp; paper glue sold under marketing buzzwords like &ldquo;Engineered Wood&rdquo;.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {comparisonData.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-white/70 rounded-btn border border-[#D8C9B5]/50">
                    <div className="p-1 rounded-full bg-[#A69B8C]/15 text-[#A69B8C] flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#2C2926]/70">{item.feature}</p>
                      <p className="text-xs text-[#A69B8C] mt-0.5">{item.mdf}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#D8C9B5]/60">
              <p className="text-[11px] text-[#A69B8C] italic">
                * Note: Standard MDF furniture cannot be disassembled and moved without the screw holes stripping permanently.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
