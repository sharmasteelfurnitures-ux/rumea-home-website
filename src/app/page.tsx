import React from 'react';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import CategoryGrid from '@/components/home/CategoryGrid';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import BrandStory from '@/components/home/BrandStory';
import CustomerHomesGallery from '@/components/home/CustomerHomesGallery';
import Testimonials from '@/components/home/Testimonials';
import WhatsAppCTA from '@/components/home/WhatsAppCTA';
import StyleCollections from '@/components/home/StyleCollections';
import InstagramFeed from '@/components/home/InstagramFeed';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Shop by Room (Bento Grid) */}
      <CategoryGrid />

      {/* 4. Featured Products Row */}
      <FeaturedProducts />

      {/* 5. Brand Story & Woodcraft Engineering */}
      <BrandStory />

      {/* 6. Real Customer Homes & Apartment Showcases (Wooden Street style) */}
      <CustomerHomesGallery />

      {/* 7. Customer Testimonials */}
      <Testimonials />

      {/* 8. WhatsApp Inline CTA */}
      <WhatsAppCTA />

      {/* 9. Style Collections Teaser */}
      <StyleCollections />

      {/* 10. Instagram UGC */}
      <InstagramFeed />
    </>
  );
}
