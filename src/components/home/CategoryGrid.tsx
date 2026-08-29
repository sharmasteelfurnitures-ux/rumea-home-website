'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';

export default function CategoryGrid() {
  const rooms = [
    {
      id: 'living-room',
      name: 'Living Room',
      designs: '8 Handcrafted Designs',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
      href: '/rooms/living-room',
    },
    {
      id: 'bedroom',
      name: 'Bedroom',
      designs: '6 Solid Wood Designs',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
      href: '/rooms/bedroom',
    },
    {
      id: 'dining-room',
      name: 'Dining Room',
      designs: '4 Solid Timber Sets',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80',
      href: '/rooms/dining-room',
    },
    {
      id: 'study-room',
      name: 'Study & Work',
      designs: '4 Ergonomic Desks',
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80',
      href: '/rooms/study-room',
    },
    {
      id: 'storage',
      name: 'Storage Solutions',
      designs: '5 Solid Sideboards',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',
      href: '/products?category=storage',
    },
    {
      id: 'outdoor',
      name: 'Outdoor & Balcony',
      designs: '3 Hardwood Benches',
      image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef2?auto=format&fit=crop&w=800&q=80',
      href: '/products?category=outdoor',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-warm-offwhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" /> SHOP BY SPACE
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-charcoal mt-1">
              Curated for Indian Floor Plans
            </h2>
            <p className="text-mid-gray text-sm sm:text-base mt-1.5 max-w-xl">
              Proportions calculated for 2BHK and 3BHK flats with generous seating and zero bulky overhangs.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-charcoal hover:text-terracotta transition-colors self-start md:self-auto group"
          >
            <span>View All Rooms</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* 6-Card Category Grid with Staggered Entrance */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {rooms.map((room, idx) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={room.href}
                className="group relative aspect-[4/3] rounded-card overflow-hidden bg-warm-alabaster border border-border-sand shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1.5 block"
              >
                {/* Full-bleed Photo */}
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Gradient Bottom Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent pointer-events-none transition-opacity duration-300 group-hover:from-charcoal/90" />

                {/* Overlay Content with upward micro-slide on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex items-end justify-between">
                  <div className="transform transition-transform duration-300 group-hover:-translate-y-0.5">
                    <h3 className="font-serif text-base sm:text-xl font-bold text-white group-hover:text-amber-200 transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-white/80 font-medium mt-0.5">
                      {room.designs}
                    </p>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white group-hover:bg-white group-hover:text-charcoal transition-all duration-200 group-hover:scale-110">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
