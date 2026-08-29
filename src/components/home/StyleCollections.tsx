import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function StyleCollections() {
  const collections = [
    {
      id: 'scandinavian',
      name: 'Scandinavian Modern',
      tagline: 'Nordic lightness meets Indian Sheesham craftsmanship',
      desc: 'Clean organic contours, tapered silhouettes, and light warm teak finishes.',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
      href: '/collections/scandinavian',
    },
    {
      id: 'modern',
      name: 'Modern Minimalist',
      tagline: 'Functional simplicity and architectural balance',
      desc: 'Fluted textures, hidden storage, and floating silhouettes for serene living.',
      image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef2?auto=format&fit=crop&w=1000&q=80',
      href: '/collections/modern',
    },
    {
      id: 'traditional',
      name: 'Warm Traditional',
      tagline: 'Rich heritage tones with heirloom longevity',
      desc: 'Deep walnut and mahogany grains, brass hardware, and hand-carved accents.',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80',
      href: '/collections/traditional',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-warm-ivory border-t border-warm-sand/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-olive mb-2">
              CURATED DESIGN PHILOSOPHIES
            </p>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-espresso">
              Shop by Style Collection
            </h2>
            <p className="text-soft-taupe text-sm sm:text-base mt-2 max-w-xl">
              Harmonious furniture suites designed to create cohesive, calming interior palettes.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-espresso hover:text-muted-olive transition-colors group"
          >
            <span>Explore All Designs</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3-Column Collection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((col) => (
            <Link
              key={col.id}
              href={col.href}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 transform hover:-translate-y-1 block"
            >
              <Image
                src={col.image}
                alt={col.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/95 via-espresso/50 to-transparent" />

              {/* Text overlay */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                <span className="text-xs font-semibold uppercase tracking-wider text-warm-sand">
                  Collection
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-warm-ivory mt-1 group-hover:text-warm-sand transition-colors">
                  {col.name}
                </h3>
                <p className="text-xs text-soft-taupe/90 mt-2 line-clamp-2">
                  {col.desc}
                </p>
                <div className="mt-4 pt-3 border-t border-warm-sand/20 flex items-center gap-1.5 text-xs font-medium text-warm-sand">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
