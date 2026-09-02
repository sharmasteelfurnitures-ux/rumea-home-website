'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Timber Guides', 'Interior Styling', 'Wood Care & Seasoning'];

  const posts: BlogPost[] = [
    {
      id: '1',
      slug: 'solid-sheesham-vs-mdf-furniture',
      title: 'Solid Sheesham vs. Engineered Wood: What Truly Lasts 25+ Years in Indian Climates',
      excerpt: 'Most modern furniture brands sell compressed sawdust covered with paper veneers that sag within 24 months. Here is why kiln-dried solid hardwood is the only generational investment.',
      category: 'Timber Guides',
      date: 'August 28, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
      featured: true,
    },
    {
      id: '2',
      slug: 'sizing-furniture-for-indian-apartments',
      title: 'The Living Room Proportions Guide: Sizing Sofas & Tables for 2BHK and 3BHK Spaces',
      excerpt: 'How to calculate walking clearance around your coffee table, choosing between 3-seater sofas and L-sectionals, and avoiding common sizing mistakes in compact layouts.',
      category: 'Interior Styling',
      date: 'August 19, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '3',
      slug: 'teak-vs-walnut-wood-stains',
      title: 'Natural Teak, Honey & Dark Espresso: Choosing the Right Timber Palette for Your Floors',
      excerpt: 'A comprehensive visual guide to matching solid Sheesham wood stains with Italian marble, warm vitrified tiles, and neutral linen upholstery.',
      category: 'Timber Guides',
      date: 'August 12, 2026',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '4',
      slug: 'monsoon-hardwood-care-guide',
      title: 'Monsoon Hardwood Care: Why Computerized Kiln Seasoning Prevents Swelling & Cracking',
      excerpt: 'Indian humidity changes drastically between dry summers and wet monsoons. Learn how our 21-day industrial kiln drying cycles lock wood moisture to an exact 8–10% equilibrium.',
      category: 'Wood Care & Seasoning',
      date: 'August 04, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '5',
      slug: 'mortise-and-tenon-woodcraft',
      title: 'The Art of Mortise & Tenon: Why We Reject Metal Cam-Locks and Cheap Glue Screws',
      excerpt: 'Generational interlocking wood joints distribute weight across the timber grain. Explore the joinery tradition that allows our platform beds and dining tables to bear 400+ kg without squeaks.',
      category: 'Timber Guides',
      date: 'July 26, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(p => p.category === selectedCategory);

  const featuredPost = posts.find(p => p.featured) || posts[0];
  const standardPosts = filteredPosts.filter(p => p.id !== featuredPost.id || selectedCategory !== 'All');

  return (
    <div className="min-h-screen bg-[#F7F4EE] pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-[#A69B8C] mb-8">
          <Link href="/" className="hover:text-[#2C2926] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[#2C2926] font-medium">Design Journal &amp; Blog</span>
        </nav>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#48563A]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#48563A] flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#48563A]" /> THE RUMEA JOURNAL
            </span>
            <span className="w-6 h-[2px] bg-[#48563A]" />
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#2C2926] font-normal tracking-tight">
            Timber Craft, Architecture &amp; Living
          </h1>
          <p className="text-[#A69B8C] text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            Honest architectural guides on solid wood furniture, room proportioning, timber seasoning, and interior craftsmanship for Indian homes.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#2C2926] text-[#F7F4EE] shadow-sm'
                  : 'bg-white text-[#2C2926] border border-[#D8C9B5] hover:border-[#2C2926]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Article Card (Shown when 'All' selected) */}
        {selectedCategory === 'All' && (
          <div className="mb-14">
            <div className="bg-white rounded-3xl border border-[#D8C9B5] overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full lg:col-span-7 bg-[#EAE5DC]">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#2C2926]/90 backdrop-blur-md text-[#F7F4EE] text-[10px] font-semibold uppercase px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#D8C9B5]" />
                  <span>Featured Editorial</span>
                </div>
              </div>

              <div className="p-6 sm:p-10 lg:p-12 lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#A69B8C] mb-3">
                    <span className="font-semibold uppercase tracking-wider text-[#48563A]">{featuredPost.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}</span>
                  </div>

                  <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#2C2926] font-normal leading-snug">
                    {featuredPost.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#A69B8C] mt-3 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D8C9B5]/60 flex items-center justify-between">
                  <span className="text-xs text-[#A69B8C] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {featuredPost.date}
                  </span>

                  <span className="text-xs font-semibold text-[#2C2926] hover:text-[#48563A] flex items-center gap-1.5 transition-colors">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {standardPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#D8C9B5] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] w-full bg-[#EAE5DC] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#2C2926]/90 backdrop-blur-md text-[#F7F4EE] text-[10px] font-semibold uppercase px-2.5 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] text-[#A69B8C] mb-2">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>

                  <h3 className="font-serif font-medium text-lg text-[#2C2926] group-hover:text-[#48563A] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#A69B8C] mt-2.5 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <span className="text-xs font-semibold text-[#2C2926] group-hover:text-[#48563A] flex items-center gap-1.5 transition-colors">
                  Read Guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter / Custom Advice Box */}
        <div className="mt-20 bg-[#2C2926] text-[#F7F4EE] rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-lg">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D8C9B5] block mb-2">
            TIMBER WISDOM DIRECT TO YOUR INBOX
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-white">
            Have a Specific Furniture Question?
          </h2>
          <p className="text-xs sm:text-sm text-[#D8C9B5] mt-2 max-w-xl mx-auto">
            Our woodcraft designers are always happy to advise on room layout clearances, timber seasoning standards, and custom finishes.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#D8C9B5] hover:bg-[#C9B9A3] text-[#2C2926] text-xs font-semibold rounded-btn transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <span>Connect with Our Designers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

