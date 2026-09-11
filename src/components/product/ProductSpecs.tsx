'use client';

import React, { useState } from 'react';
import { Product } from '@/types/product';
import { Ruler, Sparkles, Truck, RotateCcw, ShieldCheck, ChevronDown, CheckCircle2, Box } from 'lucide-react';

interface ProductSpecsProps {
  product: Product;
}

export default function ProductSpecs({ product }: ProductSpecsProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    description: true,
    dimensions: true,
    materials: false,
    assembly: false,
    shipping: false,
  });

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const sections = [
    {
      id: 'description',
      title: 'Description & Design Story',
      icon: Sparkles,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-espresso leading-relaxed">
          <p>
            {product.meta.description ||
              `The ${product.name} is thoughtfully proportioned for modern Indian living, balancing warm organic aesthetics with enduring daily durability.`}
          </p>
          <div className="space-y-2 pt-2">
            <p className="font-bold text-xs uppercase tracking-wider text-antique-gold">Key Highlights:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {product.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-antique-gold flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'dimensions',
      title: 'Dimensions & Line Diagram',
      icon: Ruler,
      content: (
        <div className="space-y-5 text-xs sm:text-sm text-espresso">
          {/* Visual Line Diagram Box */}
          <div className="p-4 bg-warm-ivory rounded-card border border-border-sand flex flex-col items-center justify-center text-center">
            <div className="relative w-48 h-28 border-2 border-dashed border-espresso/40 rounded-sm flex items-center justify-center bg-white/60 mb-2">
              <Box className="w-8 h-8 text-antique-gold" />
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-warm-ivory px-2 text-[10px] font-bold text-espresso">
                W: {product.dimensions.width.cm} cm ({product.dimensions.width.ft})
              </span>
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-warm-ivory px-2 text-[10px] font-bold text-espresso">
                D: {product.dimensions.depth.cm} cm ({product.dimensions.depth.ft})
              </span>
              <span className="absolute -right-7 top-1/2 -translate-y-1/2 -rotate-90 bg-warm-ivory px-1 text-[10px] font-bold text-espresso">
                H: {product.dimensions.height.cm} cm
              </span>
            </div>
            <p className="text-[11px] text-soft-taupe font-medium">
              Overall Footprint: {product.dimensions.width.cm} × {product.dimensions.depth.cm} × {product.dimensions.height.cm} cm
            </p>
          </div>

          {/* Metric & Imperial Spec Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3 bg-warm-ivory rounded-card border border-border-sand/60">
              <p className="text-soft-taupe text-[11px]">Width (L to R)</p>
              <p className="font-bold text-sm text-espresso mt-0.5">
                {product.dimensions.width.cm} cm <span className="font-normal text-xs text-soft-taupe">({product.dimensions.width.ft})</span>
              </p>
            </div>
            <div className="p-3 bg-warm-ivory rounded-card border border-border-sand/60">
              <p className="text-soft-taupe text-[11px]">Depth (F to B)</p>
              <p className="font-bold text-sm text-espresso mt-0.5">
                {product.dimensions.depth.cm} cm <span className="font-normal text-xs text-soft-taupe">({product.dimensions.depth.ft})</span>
              </p>
            </div>
            <div className="p-3 bg-warm-ivory rounded-card border border-border-sand/60">
              <p className="text-soft-taupe text-[11px]">Height (Floor to Top)</p>
              <p className="font-bold text-sm text-espresso mt-0.5">
                {product.dimensions.height.cm} cm <span className="font-normal text-xs text-soft-taupe">({product.dimensions.height.ft})</span>
              </p>
            </div>
            {product.dimensions.seatHeight && (
              <div className="p-3 bg-warm-ivory rounded-card border border-border-sand/60">
                <p className="text-soft-taupe text-[11px]">Seat Height</p>
                <p className="font-bold text-sm text-espresso mt-0.5">
                  {product.dimensions.seatHeight.cm} cm <span className="font-normal text-xs text-soft-taupe">({product.dimensions.seatHeight.ft})</span>
                </p>
              </div>
            )}
            <div className="p-3 bg-warm-ivory rounded-card border border-border-sand/60">
              <p className="text-soft-taupe text-[11px]">Solid Wood Weight</p>
              <p className="font-bold text-sm text-espresso mt-0.5">
                {product.dimensions.weight} kg
              </p>
            </div>
            <div className="p-3 bg-warm-ivory rounded-card border border-border-sand/60">
              <p className="text-soft-taupe text-[11px]">Assembly Mode</p>
              <p className="font-bold text-sm text-espresso mt-0.5">
                {product.dimensions.assemblyRequired ? 'Knockdown (Easy)' : 'Pre-Assembled'}
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'materials',
      title: 'Materials & Craftsmanship',
      icon: Sparkles,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-espresso">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-warm-ivory rounded-card border border-border-sand/60">
              <p className="text-soft-taupe text-[11px]">Primary Material</p>
              <p className="font-bold text-espresso">{product.materials.frame}</p>
            </div>
            <div className="p-3 bg-warm-ivory rounded-card border border-border-sand/60">
              <p className="text-soft-taupe text-[11px]">Timber Treatment</p>
              <p className="font-bold text-espresso">Seasoned Hardwood</p>
            </div>
            <div className="p-3 bg-warm-ivory rounded-card border border-border-sand/60">
              <p className="text-soft-taupe text-[11px]">Joinery &amp; Build</p>
              <p className="font-bold text-espresso">{product.materials.joinery || 'Precision Interlocking Joints'}</p>
            </div>
            <div className="p-3 bg-warm-ivory rounded-card border border-border-sand/60">
              <p className="text-soft-taupe text-[11px]">Finishing Coat</p>
              <p className="font-bold text-espresso">{product.materials.coating || 'Satin Protective Finish'}</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'assembly',
      title: 'Assembly & Care',
      icon: ShieldCheck,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-espresso leading-relaxed">
          <p>
            <strong>Assembly Guidance:</strong> All necessary hardware, Allen keys, and visual step-by-step instructions are included. Most pieces can be assembled within 15–20 minutes.
          </p>
          <p>
            <strong>Daily Care:</strong> Dust regularly with a clean, soft dry cloth. Wipe spills immediately. Avoid placing hot cookware directly on the surface or exposing to prolonged standing moisture.
          </p>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Packaging & Support',
      icon: Truck,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-espresso leading-relaxed">
          <p>
            <strong>🚚 Secure Transit Packaging:</strong> Packed in heavy-duty multi-layer corrugated boxes with high-density corner guards to prevent transit wear.
          </p>
          <p>
            <strong>🛡️ Manufacturing Guarantee:</strong> Every piece is inspected before dispatch. If any transit damage or manufacturing issue occurs, our team assists promptly.
          </p>
          <p>
            <strong>💬 Direct Support:</strong> For sizing verification, replacement parts, or delivery updates, message our team directly on WhatsApp (+91 72919 62356).
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-card border border-[#D8C9B5] shadow-card overflow-hidden my-10">
      <div className="p-5 sm:p-6 border-b border-[#D8C9B5] bg-[#F7F4EE]/50">
        <span className="text-xs font-medium uppercase tracking-[0.10em] text-[#48563A]">
          TECHNICAL SPECIFICATIONS
        </span>
        <h3 className="font-serif font-medium text-xl sm:text-2xl text-[#2C2926] mt-1">
          Product Details &amp; Engineering
        </h3>
      </div>

      <div className="divide-y divide-[#D8C9B5]">
        {sections.map((sec) => {
          const Icon = sec.icon;
          const isOpen = !!openSections[sec.id];
          return (
            <div key={sec.id} className="transition-colors">
              <button
                onClick={() => toggleSection(sec.id)}
                className="w-full flex items-center justify-between p-5 text-left font-serif font-medium text-sm sm:text-base text-[#2C2926] hover:bg-[#F7F4EE]/40 transition-colors"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-[#48563A] flex-shrink-0" />
                  <span>{sec.title}</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-[#A69B8C] transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#2C2926]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-6 pt-1 animate-in fade-in duration-150">
                  {sec.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
