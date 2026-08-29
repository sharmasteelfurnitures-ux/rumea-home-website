'use client';

import React, { useState } from 'react';
import { Product } from '@/types/product';
import Badge from '@/components/ui/Badge';
import AmazonCTA from '@/components/product/AmazonCTA';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import DeliveryChecker from '@/components/product/DeliveryChecker';
import { buildProductWhatsAppUrl } from '@/lib/whatsapp';
import { 
  Star, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  CreditCard, 
  Check, 
  Sparkles,
  Info
} from 'lucide-react';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [selectedFinish, setSelectedFinish] = useState(
    product.materials.selectedFinish || product.materials.finish[0] || 'Natural Teak'
  );
  const [showEMIInfo, setShowEMIInfo] = useState(false);

  const savings = product.pricing.mrp - product.pricing.offer;
  const emiPerMonth = Math.round(product.pricing.offer / 6);

  const finishColorMap: Record<string, string> = {
    'Natural Teak': '#C19A6B',
    'Walnut': '#5C4033',
    'Honey Oak': '#D2A054',
    'Warm Teak': '#B87333',
    'Mahogany': '#4C1F1F',
    'Natural Ash': '#E0D2C1',
  };

  const productWhatsAppUrl = buildProductWhatsAppUrl({
    name: `${product.name} (${selectedFinish} Finish)`,
    price: product.pricing.offer,
    slug: product.slug,
  });

  return (
    <div className="space-y-6">
      
      {/* Category Tag & Rating Bar (Amazon Style) */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-warm-sand/30">
        <span className="text-xs uppercase tracking-widest font-bold text-muted-olive">
          {product.category.replace('-', ' ')} • {product.room.join(' & ')}
        </span>
        <div className="flex items-center gap-2">
          {product.seo.badge && <Badge variant="olive">{product.seo.badge}</Badge>}
          <div className="flex items-center gap-1 text-xs font-semibold text-espresso bg-white border border-warm-sand/70 px-2.5 py-1 rounded-full shadow-xs">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{product.seo.rating}</span>
            <span className="text-soft-taupe font-normal">({product.seo.reviewCount} ratings)</span>
          </div>
        </div>
      </div>

      {/* Product Title */}
      <div>
        <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-espresso tracking-tight leading-tight">
          {product.name}
        </h1>
        {product.tagline && (
          <p className="text-soft-taupe text-sm sm:text-base mt-1.5 leading-relaxed">
            {product.tagline}
          </p>
        )}
      </div>

      {/* Amazon-Style Deal Price Block */}
      <div className="p-4 sm:p-5 bg-white rounded-2xl border border-warm-sand/70 shadow-sm space-y-2">
        <div className="flex items-baseline gap-3">
          <span className="text-sm font-bold uppercase text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">
            {product.pricing.discount}% OFF Deal
          </span>
          <span className="font-display font-extrabold text-3xl sm:text-4xl text-espresso tracking-tight">
            ₹{product.pricing.offer.toLocaleString('en-IN')}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-soft-taupe">
          <span>M.R.P.:</span>
          <span className="line-through">₹{product.pricing.mrp.toLocaleString('en-IN')}</span>
          <span className="text-muted-olive font-semibold">
            (You Save ₹{savings.toLocaleString('en-IN')})
          </span>
        </div>

        <p className="text-[11px] text-soft-taupe pt-1">
          Inclusive of all taxes • 🚚 Free Pan-India Doorstep Shipping
        </p>

        {/* No-Cost EMI callout (Wakefit / Amazon style) */}
        <div className="pt-2 border-t border-warm-sand/30 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-espresso font-medium">
            <CreditCard className="w-3.5 h-3.5 text-muted-olive" />
            <span>No Cost EMI from <strong>₹{emiPerMonth.toLocaleString('en-IN')}/mo</strong></span>
          </div>
          <button
            onClick={() => setShowEMIInfo(!showEMIInfo)}
            className="text-muted-olive hover:text-espresso font-semibold underline text-[11px]"
          >
            {showEMIInfo ? 'Hide plans' : 'View plans'}
          </button>
        </div>

        {showEMIInfo && (
          <div className="mt-2 p-3 bg-warm-ivory rounded-xl text-xs space-y-1.5 text-espresso animate-in fade-in duration-150">
            <p className="font-bold text-[11px] uppercase text-muted-olive">Available EMI Options:</p>
            <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
              <div className="p-2 bg-white rounded border border-warm-sand">
                <span className="block font-bold">3 Months</span>
                <span>₹{Math.round(product.pricing.offer / 3).toLocaleString('en-IN')}/mo</span>
              </div>
              <div className="p-2 bg-white rounded border border-warm-sand">
                <span className="block font-bold">6 Months</span>
                <span>₹{emiPerMonth.toLocaleString('en-IN')}/mo</span>
              </div>
              <div className="p-2 bg-white rounded border border-warm-sand">
                <span className="block font-bold">9 Months</span>
                <span>₹{Math.round(product.pricing.offer / 9).toLocaleString('en-IN')}/mo</span>
              </div>
            </div>
            <p className="text-[10px] text-soft-taupe mt-1">
              *Available on Major Credit Cards, Debit Cards, and Amazon Pay Later at checkout.
            </p>
          </div>
        )}
      </div>

      {/* Timber Finish Selector (with real wood color swatches) */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-espresso">
            Timber Finish: <strong className="text-muted-olive">{selectedFinish}</strong>
          </span>
          <span className="text-soft-taupe text-[11px]">100% Solid Sheesham</span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {product.materials.finish.map((finishName) => {
            const isSelected = selectedFinish === finishName;
            const colorHex = finishColorMap[finishName] || '#C19A6B';
            return (
              <button
                key={finishName}
                onClick={() => setSelectedFinish(finishName)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border-2 transition-all duration-150 ${
                  isSelected
                    ? 'border-espresso bg-white shadow-sm ring-1 ring-warm-sand text-espresso'
                    : 'border-warm-sand/50 bg-warm-ivory/60 hover:border-espresso/40 text-soft-taupe'
                }`}
              >
                <span
                  className="w-4 h-4 rounded-full border border-black/20 flex-shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: colorHex }}
                >
                  {isSelected && <Check className="w-2.5 h-2.5 text-white" />}
                </span>
                <span>{finishName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Pincode & Regional Delivery Estimator */}
      <DeliveryChecker />

      {/* Primary Buy Action Box (Amazon CTA + WhatsApp Concierge) */}
      <div className="space-y-3 pt-2">
        <AmazonCTA product={product} />

        <div className="flex items-center justify-center gap-2">
          <a
            href={productWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-warm-sand text-espresso font-display font-bold text-xs sm:text-sm rounded-xl hover:bg-warm-sand/80 transition-colors shadow-xs"
          >
            <span>💬 Custom Size / Finish Inquiry on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* 4-Pillar Trust Ribbon (Wakefit & Amazon style) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-warm-sand/40 text-center">
        <div className="p-2.5 bg-white rounded-xl border border-warm-sand/40">
          <Sparkles className="w-4 h-4 text-muted-olive mx-auto mb-1" />
          <p className="text-[11px] font-bold text-espresso">100% Solid Wood</p>
          <p className="text-[9px] text-soft-taupe">Zero MDF/Veneer</p>
        </div>
        <div className="p-2.5 bg-white rounded-xl border border-warm-sand/40">
          <ShieldCheck className="w-4 h-4 text-muted-olive mx-auto mb-1" />
          <p className="text-[11px] font-bold text-espresso">5-Yr Warranty</p>
          <p className="text-[9px] text-soft-taupe">Frame & Timber</p>
        </div>
        <div className="p-2.5 bg-white rounded-xl border border-warm-sand/40">
          <Truck className="w-4 h-4 text-muted-olive mx-auto mb-1" />
          <p className="text-[11px] font-bold text-espresso">Free Delivery</p>
          <p className="text-[9px] text-soft-taupe">Pan-India Doorstep</p>
        </div>
        <div className="p-2.5 bg-white rounded-xl border border-warm-sand/40">
          <RotateCcw className="w-4 h-4 text-muted-olive mx-auto mb-1" />
          <p className="text-[11px] font-bold text-espresso">30-Day Returns</p>
          <p className="text-[9px] text-soft-taupe">Hassle-Free Pickup</p>
        </div>
      </div>

    </div>
  );
}
