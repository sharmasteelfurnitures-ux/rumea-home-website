'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import { ArrowRight } from 'lucide-react';

interface CategoryItem {
  id: string;
  name: string;
  image: string;
  href: string;
}

function InteractiveCategoryCard({ cat, idx }: { cat: CategoryItem; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position coordinates relative to card
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth spring physics for 3D tilt
  const springConfig = { stiffness: 300, damping: 25 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-6, 6]), springConfig);

  // Spotlight coordinates (in percentage)
  const spotlightX = useTransform(mouseX, [0, 1], [0, 100]);
  const spotlightY = useTransform(mouseY, [0, 1], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.5, delay: (idx % 6) * 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={cat.href}
        className="group flex flex-col items-center text-center focus:outline-none block"
      >
        {/* 3D Perspective Card Container */}
        <div
          ref={cardRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: 800 }}
          className="relative w-full aspect-[4/3] sm:aspect-square"
        >
          <motion.div
            style={{
              rotateX: isHovered ? rotateX : 0,
              rotateY: isHovered ? rotateY : 0,
              transformStyle: 'preserve-3d',
            }}
            animate={{
              y: isHovered ? -6 : 0,
              scale: isHovered ? 1.02 : 1,
            }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            className="relative w-full h-full rounded-2xl overflow-hidden bg-[#F7F4EE] border border-[#D8C9B5] shadow-xs group-hover:border-[#2C2926]/40 group-hover:shadow-xl transition-all duration-300"
          >
            {/* Product Image with smooth spring scaling */}
            <motion.div
              animate={{ scale: isHovered ? 1.08 : 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover object-center"
              />
            </motion.div>

            {/* Specular Radial Spotlight Glow following the cursor */}
            {isHovered && (
              <motion.div
                className="absolute inset-0 pointer-events-none z-10 opacity-75 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at ${spotlightX.get()}% ${spotlightY.get()}%, rgba(255, 255, 255, 0.45) 0%, rgba(216, 201, 181, 0.25) 40%, transparent 70%)`,
                }}
              />
            )}

            {/* Soft Ambient Bottom Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

            {/* Floating Corner Indicator on Hover */}
            <div className="absolute bottom-2.5 right-2.5 w-6 h-6 rounded-full bg-white/90 backdrop-blur-xs text-[#2C2926] flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-200 shadow-xs z-20">
              <ArrowRight className="w-3.5 h-3.5 text-[#48563A]" />
            </div>
          </motion.div>
        </div>

        {/* Category Name & Micro Accent Underline */}
        <div className="pt-2.5 pb-1 flex flex-col items-center">
          <motion.h3 
            animate={{ y: isHovered ? -1 : 0 }}
            className="font-serif sm:font-sans font-medium text-xs sm:text-sm text-[#2C2926] group-hover:text-[#48563A] transition-colors leading-tight"
          >
            {cat.name}
          </motion.h3>
          <motion.span
            animate={{ width: isHovered ? 28 : 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="h-0.5 bg-[#48563A] rounded-full mt-1"
          />
        </div>
      </Link>
    </motion.div>
  );
}

export default function ShopByCategory() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    }
  };

  const categories: CategoryItem[] = [
    {
      id: 'sofas',
      name: 'Sofas',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
      href: '/products?category=sofa',
    },
    {
      id: 'beds',
      name: 'Beds',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
      href: '/products?category=bed',
    },
    {
      id: 'dining',
      name: 'Dining',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80',
      href: '/products?category=dining-table',
    },
    {
      id: 'coffee-tables',
      name: 'Coffee Tables',
      image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80',
      href: '/products?category=coffee-table',
    },
    {
      id: 'tv-units',
      name: 'TV Units',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',
      href: '/products?category=tv-unit',
    },
    {
      id: 'chairs',
      name: 'Chairs',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
      href: '/products?category=accent-chair',
    },
    {
      id: 'desks',
      name: 'Study Tables',
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80',
      href: '/products?category=desk',
    },
    {
      id: 'bookshelves',
      name: 'Bookshelves',
      image: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=800&q=80',
      href: '/products?category=bookshelf',
    },
    {
      id: 'wardrobes',
      name: 'Wardrobes',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
      href: '/products?category=wardrobe',
    },
    {
      id: 'storage',
      name: 'Sideboards',
      image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
      href: '/products?category=storage-cabinet',
    },
    {
      id: 'shoe-racks',
      name: 'Shoe Racks',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',
      href: '/products?category=shoe-rack',
    },
    {
      id: 'nightstands',
      name: 'Bedside Tables',
      image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80',
      href: '/products?category=nightstand',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F7F4EE] subtle-grain-texture border-t border-[#D8C9B5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean, Minimal Section Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <AnimatedHeading 
            text="Shop by category"
            className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2C2926] font-medium tracking-tight"
          />

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#2C2926] hover:text-[#48563A] transition-colors group"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#48563A] transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 12-Category Grid with Mobile Horizontal Scroll Snap (3.5 items visible) & Desktop 6-Col Grid */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-5 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory sm:snap-none mobile-swipe-rail pb-2 sm:pb-0 -mx-4 sm:mx-0 px-4 sm:px-0"
        >
          {categories.map((cat, idx) => (
            <div key={cat.id} className="w-[26vw] min-w-[96px] sm:w-auto shrink-0 snap-start mobile-swipe-item">
              <InteractiveCategoryCard cat={cat} idx={idx} />
            </div>
          ))}
        </div>

        {/* Mobile Scroll Progress Bar Indicator */}
        <div className="sm:hidden mt-4 flex items-center justify-center">
          <div className="w-24 h-1 bg-[#D8C9B5]/40 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#48563A] rounded-full transition-all duration-150"
              style={{ width: `${Math.max(15, scrollProgress)}%` }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
