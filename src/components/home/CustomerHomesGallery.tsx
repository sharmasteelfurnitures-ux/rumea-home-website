'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, ArrowRight, MapPin } from 'lucide-react';

export default function CustomerHomesGallery() {
  const customerStories = [
    {
      id: 'story-1',
      title: 'Scandinavian Living Room',
      location: 'Indiranagar, Bengaluru',
      customer: 'Pooja & Karan M.',
      product: 'Oslo 3-Seater Sofa & Kyoto Coffee Table',
      slug: 'sofa-oslo-3seater',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
      comment: 'The Sheesham grain has such warmth in natural sunlight. Transformed our apartment living room completely!',
    },
    {
      id: 'story-2',
      title: 'Minimalist Master Bedroom',
      location: 'Bandra West, Mumbai',
      customer: 'Aditya & Neha S.',
      product: 'Kyoto King Size Platform Bed',
      slug: 'bed-kyoto-king',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
      comment: 'Zero squeaks, rock solid build, and the low-profile headboard makes our bedroom look twice as spacious.',
    },
    {
      id: 'story-3',
      title: 'Family Dining Space',
      location: 'Vasant Vihar, New Delhi',
      customer: 'The Malhotra Family',
      product: 'Artisan 6-Seater Solid Dining Set',
      slug: 'dining-table-artisan-6s',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80',
      comment: 'Heavy solid wood with a silky satin finish. Our family dinners feel like a 5-star experience every single night.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-t border-warm-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-muted-olive flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5" /> REAL HOMES ACROSS INDIA
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-espresso mt-1">
              See How Rumea Home Looks in Real Spaces
            </h2>
            <p className="text-soft-taupe text-sm sm:text-base mt-2 max-w-xl">
              Authentic customer apartments styled with 100% solid wood furniture built for everyday living.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-espresso hover:text-muted-olive transition-colors self-start md:self-auto"
          >
            <span>Explore Complete Collection</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3-Column Visual Grid (Wooden Street Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {customerStories.map((story) => (
            <div
              key={story.id}
              className="group flex flex-col bg-warm-ivory/50 rounded-3xl overflow-hidden border border-warm-sand/60 hover:border-warm-sand shadow-card hover:shadow-warm transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-ivory-dark">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-espresso/80 backdrop-blur-md text-warm-ivory text-[10px] font-semibold rounded-full flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-warm-sand" />
                  <span>{story.location}</span>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-espresso mb-1">
                    {story.title}
                  </h3>
                  <p className="text-xs text-soft-taupe font-medium mb-3">
                    Home of {story.customer}
                  </p>
                  <p className="text-xs text-espresso leading-relaxed italic mb-4">
                    &ldquo;{story.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-warm-sand/40 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-muted-olive truncate max-w-[180px]">
                    {story.product}
                  </span>
                  <Link
                    href={`/products/${story.slug}`}
                    className="text-xs font-bold text-espresso group-hover:text-muted-olive flex items-center gap-1 transition-colors"
                  >
                    <span>Shop Look</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
