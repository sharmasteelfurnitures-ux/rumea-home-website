'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CategoryItem {
  id: string;
  name: string;
  image: string;
  href: string;
}

export default function ShopByCategory() {
  const categories: CategoryItem[] = [
    {
      id: 'entryway',
      name: 'Entryway & shoe storage',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',
      href: '/products?category=shoe-rack',
    },
    {
      id: 'tables',
      name: 'Folding & space-saving tables',
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80',
      href: '/products?category=folding-table',
    },
    {
      id: 'seating',
      name: 'Seating & chairs',
      image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80',
      href: '/products?category=seating',
    },
    {
      id: 'coat-stands',
      name: 'Coat & clothes stands',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
      href: '/products?category=coat-stand',
    },
    {
      id: 'study-tables',
      name: 'Study & work tables',
      image: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=800&q=80',
      href: '/products?category=folding-table',
    },
  ];

  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="mb-10 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#7A6B5D] block mb-2">
              CATALOGUE BY SPACE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2926] font-normal tracking-tight">
              Shop by need
            </h2>
          </div>

          <Link
            href="/products"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#2C2926] hover:text-[#7A6B5D] transition-colors self-start sm:self-auto"
          >
            <span>View all products</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* 5 Equal Visual Category Cards Grid with Staggered Entrance */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: smoothEase }}
            >
              <Link
                href={cat.href}
                className="group block focus:outline-none"
              >
                {/* Image Frame */}
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#EBE7DF] border border-[#DEDAD1] shadow-2xs group-hover:border-[#2C2926]/30 group-hover:shadow-sm transition-all duration-300">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                </div>

                {/* Title & Short Link */}
                <div className="mt-3 text-left">
                  <h3 className="font-sans font-medium text-xs sm:text-sm text-[#2C2926] group-hover:text-[#7A6B5D] transition-colors leading-snug">
                    {cat.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-medium text-[#6B6962] group-hover:text-[#2C2926] transition-colors mt-1">
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
