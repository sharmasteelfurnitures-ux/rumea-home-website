import React from 'react';
import Hero from '@/components/home/Hero';
import TrustStrip from '@/components/home/TrustStrip';
import ShopByCategory from '@/components/home/ShopByCategory';
import ValueProposition from '@/components/home/ValueProposition';
import BestSellers from '@/components/home/BestSellers';
import FitAssistance from '@/components/home/FitAssistance';
import CustomerProof from '@/components/home/CustomerProof';
import FinalCta from '@/components/home/FinalCta';

export default function HomePage() {
  return (
    <>
      {/* 3. Hero Section */}
      <Hero />

      {/* 4. Trust Strip */}
      <TrustStrip />

      {/* 5. Shop by Need */}
      <ShopByCategory />

      {/* 6. Value Proposition Section */}
      <ValueProposition />

      {/* 7. Best Sellers Shopping Section */}
      <BestSellers />

      {/* 8. Fit Assistance Section */}
      <FitAssistance />

      {/* 9. Customer Proof Section */}
      <CustomerProof />

      {/* 10. Final CTA Section */}
      <FinalCta />
    </>
  );
}
