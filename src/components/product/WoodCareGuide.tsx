'use client';

import React from 'react';
import { Sparkles, Droplets, Shield, Wrench, HeartHandshake } from 'lucide-react';

export default function WoodCareGuide() {
  const tips = [
    {
      icon: Sparkles,
      title: 'Regular Microfiber Dusting',
      description: 'Wipe down steel frames and laminated surfaces weekly with a soft, dry microfiber cloth to keep your pieces looking fresh.',
    },
    {
      icon: Droplets,
      title: 'Immediate Spill Protection',
      description: 'Blot water, tea, or food spills quickly with a damp cloth followed by a dry wipe to protect laminate finishes and hardware.',
    },
    {
      icon: Shield,
      title: 'Indoor & Balcony Care',
      description: 'While powder-coated frames are rust-resistant against humid monsoon air, avoid continuous direct outdoor rain exposure.',
    },
    {
      icon: Wrench,
      title: 'Periodic Fastener Check',
      description: 'Every 6 months, verify that wall-mount screws and folding hinge rivets remain securely tightened for optimal safety.',
    },
  ];

  return (
    <div className="bg-white rounded-card p-6 sm:p-8 border border-border-sand shadow-card my-12">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-antique-gold flex items-center gap-1.5">
          <HeartHandshake className="w-3.5 h-3.5" /> EVERYDAY MAINTENANCE
        </span>
        <h3 className="font-serif font-bold text-xl sm:text-2xl text-espresso mt-1">
          Product Care &amp; Maintenance Guide
        </h3>
        <p className="text-xs text-soft-taupe mt-1">
          Simple, easy care principles to ensure smooth folding mechanisms, pristine finishes, and long-lasting durability.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tips.map((tip, idx) => {
          const Icon = tip.icon;
          return (
            <div
              key={idx}
              className="p-4 rounded-card bg-warm-ivory/60 border border-border-sand/60 flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-btn bg-espresso text-warm-ivory flex items-center justify-center mb-3 shadow-xs">
                  <Icon className="w-4 h-4 text-warm-sand" />
                </div>
                <h4 className="font-serif font-bold text-xs sm:text-sm text-espresso mb-1">
                  {tip.title}
                </h4>
                <p className="text-[11px] text-soft-taupe leading-relaxed">
                  {tip.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
