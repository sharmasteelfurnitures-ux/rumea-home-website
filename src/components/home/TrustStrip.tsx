'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Wrench, Shield, Truck } from 'lucide-react';

export default function TrustStrip() {
  const points = [
    {
      icon: Home,
      label: 'Sized for Indian homes',
    },
    {
      icon: Wrench,
      label: 'Easy to assemble',
    },
    {
      icon: Shield,
      label: 'Built for everyday use',
    },
    {
      icon: Truck,
      label: 'Ships via Amazon India',
    },
  ];

  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section aria-label="Key Commitments" className="w-full border-y border-[#DEDAD1] bg-white py-4 sm:py-5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-center">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: smoothEase }}
                className="flex items-center justify-center gap-2.5 text-center sm:text-left"
              >
                <Icon className="w-4 h-4 text-[#8A684A] flex-shrink-0" strokeWidth={1.75} />
                <span className="text-xs sm:text-sm font-sans font-medium text-[#1E1E1B] tracking-tight">
                  {pt.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
