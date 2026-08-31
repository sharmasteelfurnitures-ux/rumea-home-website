'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera, ArrowRight, MapPin } from 'lucide-react';

export default function CustomerHomesGallery() {
  const customerSpaces = [
    {
      id: 'space-1',
      title: 'Living Room Setup',
      roomType: 'Living Suite',
      productName: 'Oslo 3-Seater Sofa in Natural Teak',
      slug: 'sofa-oslo-3seater',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 'space-2',
      title: 'Bedroom Inspiration',
      roomType: 'Master Bedroom',
      productName: 'Kyoto Platform Bed',
      slug: 'bed-kyoto-king',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 'space-3',
      title: 'Dining Space Setup',
      roomType: '6-Seater Dining',
      productName: 'Artisan Solid Dining Set',
      slug: 'dining-table-artisan-6s',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 'space-4',
      title: 'Study & WFH Setup',
      roomType: 'Work From Home',
      productName: 'Oslo Study Desk',
      slug: 'desk-oslo-study',
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=85',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-warm-offwhite border-t border-border-sand overflow-hidden">
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
              <Camera className="w-3.5 h-3.5" /> ROOM INSPIRATION
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-charcoal mt-1">
              Styled for Real Indian Homes
            </h2>
            <p className="text-mid-gray text-sm sm:text-base mt-1.5 max-w-xl">
              Layout ideas and proportions tailored for modern 2BHK and 3BHK Indian apartment spaces.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-charcoal hover:text-terracotta transition-colors self-start md:self-auto group"
          >
            <span>Explore All 20+ Designs</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* 4-Column Visual Photography Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {customerSpaces.map((space, idx) => (
            <motion.div
              key={space.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col bg-white rounded-card overflow-hidden border border-border-sand shadow-card card-hover"
            >
              {/* 4/3 Aspect Ratio Image Viewport */}
              <div className="relative aspect-[4/3] overflow-hidden bg-warm-alabaster">
                <Image
                  src={space.image}
                  alt={`${space.productName} - ${space.title}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                
                {/* Room Setup Badge */}
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 bg-charcoal/85 backdrop-blur-xs text-white text-[10px] font-semibold rounded-btn shadow-xs">
                  <span>{space.title}</span>
                </div>
              </div>

              {/* Card Footer with Direct Product Link */}
              <div className="p-3.5 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <span className="text-[10px] uppercase font-bold text-mid-gray tracking-wider block">
                    {space.roomType}
                  </span>
                  <h3 className="font-serif font-semibold text-xs sm:text-sm text-charcoal mt-0.5 truncate">
                    {space.productName}
                  </h3>
                </div>

                <div className="mt-3 pt-2.5 border-t border-border-sand/60 flex items-center justify-between">
                  <Link
                    href={`/products/${space.slug}`}
                    className="text-[11px] font-bold text-terracotta hover:text-charcoal flex items-center gap-1 transition-colors group/link"
                  >
                    <span>Shop Look</span>
                    <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
