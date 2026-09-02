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
      {/* 1. Hero Showcase Carousel + Quick Category Bar + Trust Strip */}
      <Hero />

      {/* 2. Shop by Category (12 Categories with 3D Motion Physics) */}
      <ShopByCategory />

      {/* 2.5 Bespoke Workshop Ad Banner (Customized Furniture Solutions) */}
      <CustomFurnitureBanner />

      {/* 3. New Arrivals & Best Sellers (Interactive Tabs & Filters) */}
      <NewArrivalsAndBestSellers />

      {/* 4. Shop The Complete Room Look (IKEA Style Hotspot Pins) */}
      <ShopTheLook />

      {/* 4.5 Interactive 360° Studio Spin & Inspect Viewer */}
      <Product360Viewer />

      {/* 5. WhatsApp Concierge Room Sizing Consultation */}
      <WhatsAppConcierge />
    </>
  );
}
