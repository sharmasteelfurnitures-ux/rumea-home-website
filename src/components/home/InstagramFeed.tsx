import React from 'react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

export default function InstagramFeed() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
      handle: '@priya_home_blr',
    },
    {
      src: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef2?auto=format&fit=crop&w=600&q=80',
      handle: '@interior.delhi',
    },
    {
      src: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80',
      handle: '@hyd_spaces',
    },
    {
      src: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80',
      handle: '@mumbai_minimalist',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-ivory-dark/40 border-t border-warm-sand/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-olive mb-2 flex items-center justify-center gap-1.5">
            <Instagram className="w-3.5 h-3.5" /> #RumeaInRealHomes
          </p>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-espresso">
            Follow Our Journey
          </h2>
          <p className="text-soft-taupe text-xs sm:text-sm mt-1">
            Tag @rumeahome to get featured in our community showcase.
          </p>
        </div>

        {/* 4-Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {images.map((item, idx) => (
            <div
              key={idx}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-warm transition-all duration-300"
            >
              <Image
                src={item.src}
                alt="Rumea Home in real homes"
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-espresso/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
                <span className="text-warm-ivory text-xs font-medium">{item.handle}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
