'use client';

import React from 'react';
import { Sparkles, Sun, Droplets, Shield, HeartHandshake } from 'lucide-react';

export default function WoodCareGuide() {
  const tips = [
    {
      icon: Sparkles,
      title: 'Regular Microfiber Dusting',
      description: 'Wipe down surfaces weekly with a dry, lint-free microfiber cloth along the natural grain of the Sheesham wood.',
    },
    {
      icon: Droplets,
      title: 'Immediate Spill Protection',
      description: 'Blot water and tea spills immediately with a dry cotton cloth. Always use felt coasters under hot dishes and beverage mugs.',
    },
    {
      icon: Sun,
      title: 'Sunlight & AC Ventilation',
      description: 'Position furniture away from direct intense outdoor UV sunlight or direct blowing drafts from air conditioner louvers.',
    },
    {
      icon: Shield,
      title: 'Natural Nourishment',
      description: 'Apply natural beeswax or organic teak furniture oil once every 12 to 18 months to preserve the organic satin wood luster.',
    },
  ];

  return (
    <div className="bg-white rounded-card p-6 sm:p-8 border border-border-sand shadow-card my-12">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-antique-gold flex items-center gap-1.5">
          <HeartHandshake className="w-3.5 h-3.5" /> GENERATIONAL CARE
        </span>
        <h3 className="font-serif font-bold text-xl sm:text-2xl text-espresso mt-1">
          Solid Hardwood Care &amp; Longevity Guide
        </h3>
        <p className="text-xs text-soft-taupe mt-1">
          Genuine solid timber matures and deepens in rich character over decades. Follow these 4 principles to preserve your investment.
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
