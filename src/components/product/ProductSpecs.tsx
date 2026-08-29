'use client';

import React, { useState } from 'react';
import { Product } from '@/types/product';
import { Ruler, Sparkles, Truck, RotateCcw, Star, ChevronDown } from 'lucide-react';

interface ProductSpecsProps {
  product: Product;
}

export default function ProductSpecs({ product }: ProductSpecsProps) {
  const [openSection, setOpenSection] = useState<string>('dimensions');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? '' : section);
  };

  const sections = [
    {
      id: 'dimensions',
      title: 'Dimensions & Space Planning',
      icon: Ruler,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-espresso">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3 bg-warm-ivory rounded-xl border border-warm-sand/50">
              <p className="text-soft-taupe text-xs">Width</p>
              <p className="font-bold text-sm text-espresso mt-0.5">
                {product.dimensions.width.cm} cm <span className="font-normal text-xs text-soft-taupe">({product.dimensions.width.ft})</span>
              </p>
            </div>
            <div className="p-3 bg-warm-ivory rounded-xl border border-warm-sand/50">
              <p className="text-soft-taupe text-xs">Depth</p>
              <p className="font-bold text-sm text-espresso mt-0.5">
                {product.dimensions.depth.cm} cm <span className="font-normal text-xs text-soft-taupe">({product.dimensions.depth.ft})</span>
              </p>
            </div>
            <div className="p-3 bg-warm-ivory rounded-xl border border-warm-sand/50">
              <p className="text-soft-taupe text-xs">Height</p>
              <p className="font-bold text-sm text-espresso mt-0.5">
                {product.dimensions.height.cm} cm <span className="font-normal text-xs text-soft-taupe">({product.dimensions.height.ft})</span>
              </p>
            </div>
            {product.dimensions.seatHeight && (
              <div className="p-3 bg-warm-ivory rounded-xl border border-warm-sand/50">
                <p className="text-soft-taupe text-xs">Seat Height</p>
                <p className="font-bold text-sm text-espresso mt-0.5">
                  {product.dimensions.seatHeight.cm} cm <span className="font-normal text-xs text-soft-taupe">({product.dimensions.seatHeight.ft})</span>
                </p>
              </div>
            )}
            <div className="p-3 bg-warm-ivory rounded-xl border border-warm-sand/50">
              <p className="text-soft-taupe text-xs">Product Weight</p>
              <p className="font-bold text-sm text-espresso mt-0.5">
                {product.dimensions.weight} kg
              </p>
            </div>
            <div className="p-3 bg-warm-ivory rounded-xl border border-warm-sand/50">
              <p className="text-soft-taupe text-xs">Assembly</p>
              <p className="font-bold text-sm text-espresso mt-0.5">
                {product.dimensions.assemblyRequired ? 'Easy Assembly' : 'Pre-Assembled'}
              </p>
            </div>
          </div>

          {product.dimensions.recommendedRoomSize && (
            <div className="p-3 bg-white border border-warm-sand/40 rounded-xl text-xs text-soft-taupe">
              <strong className="text-espresso">Room Planning:</strong> {product.dimensions.recommendedRoomSize}
            </div>
          )}
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
            <div className="p-3 bg-warm-ivory rounded-xl border border-warm-sand/50">
              <p className="text-soft-taupe text-xs">Primary Timber</p>
              <p className="font-semibold mt-0.5">{product.materials.frame}</p>
            </div>
            {product.materials.upholstery && (
              <div className="p-3 bg-warm-ivory rounded-xl border border-warm-sand/50">
                <p className="text-soft-taupe text-xs">Upholstery</p>
                <p className="font-semibold mt-0.5">{product.materials.upholstery}</p>
              </div>
            )}
            <div className="p-3 bg-warm-ivory rounded-xl border border-warm-sand/50">
              <p className="text-soft-taupe text-xs">Wood Joinery</p>
              <p className="font-semibold mt-0.5">{product.materials.joinery || 'Mortise & Tenon with Dowel Reinforcement'}</p>
            </div>
            <div className="p-3 bg-warm-ivory rounded-xl border border-warm-sand/50">
              <p className="text-soft-taupe text-xs">Protective Finish</p>
              <p className="font-semibold mt-0.5">{product.materials.coating || 'Moisture & UV Resistant Polyurethane'}</p>
            </div>
          </div>

          <div className="pt-2">
            <p className="font-semibold text-xs text-espresso mb-2">Key Engineering Features:</p>
            <ul className="space-y-1.5 list-disc pl-4 text-xs text-soft-taupe">
              {product.features.map((feature, idx) => (
                <li key={idx} className="leading-relaxed">
                  <span className="text-espresso">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'delivery',
      title: 'Delivery, Assembly & Care',
      icon: Truck,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-soft-taupe leading-relaxed">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-espresso">
            <div className="p-3 bg-warm-ivory rounded-xl border border-warm-sand/50">
              <p className="text-xs text-soft-taupe">Metro Cities</p>
              <p className="font-bold text-sm">{product.conversion.deliveryDays.metro}</p>
            </div>
            <div className="p-3 bg-warm-ivory rounded-xl border border-warm-sand/50">
              <p className="text-xs text-soft-taupe">Tier 2 Cities</p>
              <p className="font-bold text-sm">{product.conversion.deliveryDays.tier2}</p>
            </div>
            <div className="p-3 bg-warm-ivory rounded-xl border border-warm-sand/50">
              <p className="text-xs text-soft-taupe">Tier 3 / Rest of India</p>
              <p className="font-bold text-sm">{product.conversion.deliveryDays.tier3}</p>
            </div>
          </div>
          <p>
            • <strong>Packaging:</strong> Multi-layer corrugated heavy-duty box with corner edge protectors.
          </p>
          <p>
            • <strong>Assembly:</strong> Comes with easy visual manual & all necessary Allen key hardware. Assembly service is available in 50+ Indian cities.
          </p>
          <p>
            • <strong>Care:</strong> Wipe clean with a soft dry cloth. Avoid abrasive cleaners and direct continuous rain exposure for indoor wood pieces.
          </p>
        </div>
      ),
    },
    {
      id: 'warranty',
      title: '5-Year Warranty & 30-Day Returns',
      icon: RotateCcw,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-soft-taupe leading-relaxed">
          <div className="p-4 bg-muted-olive/10 border border-muted-olive/30 rounded-2xl">
            <p className="font-display font-bold text-sm text-espresso mb-1">
              🛡️ The Rumea 5-Year Structural Guarantee
            </p>
            <p className="text-xs text-espresso/80">
              We stand behind every joint and frame. All solid wood structures are warrantied against manufacturing defects, termite infestation, and warping for 5 full years from purchase date.
            </p>
          </div>
          <p>
            • <strong>30-Day Returns:</strong> If you notice any defect or damage upon delivery, we will replace or refund promptly with zero hassle.
          </p>
          <p>
            • <strong>Dedicated Support:</strong> Connect directly with our team on WhatsApp for instant claim assistance.
          </p>
        </div>
      ),
    },
    {
      id: 'reviews',
      title: `Verified Customer Reviews (${product.seo.reviewCount})`,
      icon: Star,
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-warm-ivory rounded-2xl border border-warm-sand/50">
            <div className="text-center pr-4 border-r border-warm-sand">
              <p className="font-display font-extrabold text-3xl text-espresso">{product.seo.rating}</p>
              <div className="flex text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-[10px] text-soft-taupe mt-1">{product.seo.reviewCount} Reviews</p>
            </div>
            <div className="text-xs text-soft-taupe space-y-1">
              <p className="font-semibold text-espresso">100% Verified Amazon & WhatsApp Customers</p>
              <p>Top feedback highlights solid wood weight, precise dimensions, and fast doorstep delivery.</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-3 pt-6 border-t border-warm-sand/60">
      {sections.map((section) => {
        const Icon = section.icon;
        const isOpen = openSection === section.id;
        return (
          <div
            key={section.id}
            className="border border-warm-sand/60 rounded-2xl bg-white overflow-hidden shadow-xs"
          >
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-warm-ivory/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-warm-sand/20 text-muted-olive">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="font-display font-bold text-sm sm:text-base text-espresso">
                  {section.title}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-soft-taupe transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-espresso' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-4 pb-5 pt-1 sm:px-6 sm:pb-6 border-t border-warm-sand/30 animate-in fade-in duration-200">
                {section.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
