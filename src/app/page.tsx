import React from 'react';
import Hero from '@/components/home/Hero';
import BestSellers from '@/components/home/BestSellers';
import ValueProposition from '@/components/home/ValueProposition';
import EnduringMaterials from '@/components/home/EnduringMaterials';
import GoodQuestions from '@/components/home/GoodQuestions';

export default function HomePage() {
  return (
    <>
      {/* 1. unfnshed-style Full-Bleed Hero with Measuring Tape Ruler */}
      <Hero />

      {/* 2. Most Loved Product Showcase (4-Column Minimal Grid) */}
      <BestSellers />

      {/* 3. Made for Your Measurements (Split Architectural Feature Cards) */}
      <ValueProposition />

      {/* 4. Built with Enduring Materials (Craftsmanship & Materials Showcase) */}
      <EnduringMaterials />

      {/* 5. Good Questions. (Minimalist Accordion FAQ) */}
      <GoodQuestions />
    </>
  );
}
