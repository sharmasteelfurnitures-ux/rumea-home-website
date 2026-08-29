import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Award } from 'lucide-react';

export default function TrustBar() {
  const trustPoints = [
    {
      icon: Truck,
      title: 'Free Delivery',
      subtitle: 'On all orders above ₹15,000 across India',
    },
    {
      icon: RotateCcw,
      title: '30-Day Returns',
      subtitle: 'Hassle-free doorstep pickup & replacement',
    },
    {
      icon: ShieldCheck,
      title: '5-Year Warranty',
      subtitle: 'Comprehensive structural frame guarantee',
    },
    {
      icon: Award,
      title: 'Made in India',
      subtitle: 'Kiln-dried Sheesham & master artisanship',
    },
  ];

  return (
    <section className="bg-espresso text-warm-ivory py-8 sm:py-10 border-y border-warm-sand/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trustPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-4 group">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-warm-ivory/10 text-warm-sand flex items-center justify-center group-hover:bg-warm-sand group-hover:text-espresso transition-colors duration-200">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-warm-ivory tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs text-soft-taupe mt-0.5 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
