'use client';

import React from 'react';
import { Sparkles, Sun, Droplets, Shield, HeartHandshake } from 'lucide-react';

export default function WoodCareGuide() {
  const tips = [
    {
      icon: Sparkles,
      title: 'Regular Dusting',
      description: 'Wipe down surfaces weekly with a dry, lint-free microfiber cloth along the natural grain of the wood.',
    },
    {
      icon: Droplets,
      title: 'Spill Protection',
      description: 'Blot water and beverage spills immediately. Always use coasters under hot cups and coasters under cold glasses.',
    },
    {
      icon: Sun,
      title: 'Sunlight & AC Vents',
      description: 'Position furniture away from direct 24/7 direct outdoor sun or continuous blowing drafts from air conditioners.',
    },
    {
      icon: Shield,
      title: 'Natural Nourishment',
      description: 'Apply natural beeswax or teak furniture oil once every 12 to 18 months to preserve the organic satin luster.',
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-sand/70 shadow-card my-12">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-muted-olive flex items-center gap-1.5">
          <HeartHandshake className="w-3.5 h-3.5" /> GENERATIONAL CARE
        </span>
        <h3 className="font-display font-bold text-xl sm:text-2xl text-espresso mt-1">
          Solid Wood Care & Maintenance Guide
        </h3>
        <p className="text-xs text-soft-taupe mt-1">
          Genuine solid wood matures and deepens in character with age. Follow these simple guidelines to keep your furniture pristine.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tips.map((tip, idx) => {
          const Icon = tip.icon;
          return (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-warm-ivory/40 border border-warm-sand/40 flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-warm-sand/40 text-espresso flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 text-muted-olive" />
                </div>
                <h4 className="font-display font-bold text-xs sm:text-sm text-espresso mb-1">
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
