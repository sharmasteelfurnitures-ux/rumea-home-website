import React from 'react';
import Hero from '@/components/home/Hero';
import ShopByCategory from '@/components/home/ShopByCategory';
import CustomFurnitureBanner from '@/components/home/CustomFurnitureBanner';
import NewArrivalsAndBestSellers from '@/components/home/NewArrivalsAndBestSellers';
import ShopTheLook from '@/components/home/ShopTheLook';
import Product360Viewer from '@/components/product/Product360Viewer';
import WhatsAppConcierge from '@/components/home/WhatsAppConcierge';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Showcase Carousel + Quick Category Bar + Reassurance Strip */}
      <Hero />

      {/* 2. Shop by Category (12 Essential Home Categories) */}
      <ShopByCategory />

      {/* 3. The Rumea Standard: Considered for Real Indian Living */}
      <CustomFurnitureBanner />

      {/* 4. Curated Furniture Collection (Best Sellers & New Arrivals) */}
      <NewArrivalsAndBestSellers />

      {/* 5. Shop The Complete Room Look (Interactive Hotspots) */}
      <ShopTheLook />

      {/* 6. Interactive 360° Studio Spin & Inspect Viewer */}
      <Product360Viewer />

      {/* 7. WhatsApp Room Sizing & Fit Consultation */}
      <WhatsAppConcierge />
    </>
  );
}
