import React from 'react';
import Hero from '@/components/home/Hero';
import CategoryGrid from '@/components/home/CategoryGrid';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import CraftStory from '@/components/home/CraftStory';
import CustomerHomesGallery from '@/components/home/CustomerHomesGallery';
import CustomerReviews from '@/components/home/CustomerReviews';
import WhatsAppConcierge from '@/components/home/WhatsAppConcierge';
import WhatsAppFloatingButton from '@/components/layout/WhatsAppFloatingButton';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section + Animated Reassurance Strip */}
      <Hero />

      {/* 2. Shop by Space (6 Rooms with Hover Zoom) */}
      <CategoryGrid />

      {/* 3. Bestsellers (8 Products, 4-Col Desktop / 2-Col Mobile) */}
      <FeaturedProducts />

      {/* 4. Craft Story (Kiln-Dried Hardwood, Mortise & Tenon, Non-Toxic Finish) */}
      <CraftStory />

      {/* 5. Real Homes Across India (UGC Photo Grid with City Tags) */}
      <CustomerHomesGallery />

      {/* 6. Verified Customer Reviews */}
      <CustomerReviews />

      {/* 7. WhatsApp Concierge Consultation (Dark Warm Section) */}
      <WhatsAppConcierge />

      {/* 8. Floating Bottom-Right WhatsApp Trigger */}
      <WhatsAppFloatingButton />
    </>
  );
}
