'use client';

import React, { useState, useRef } from 'react';
import { Product } from '@/types/product';
import { buildProductWhatsAppUrl } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';
import { 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  CreditCard, 
  Award,
  MessageCircle,
  Phone
} from 'lucide-react';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [pincode, setPincode] = useState<string>('');
  const [deliveryResult, setDeliveryResult] = useState<string | null>(null);
  const [isCheckingPincode, setIsCheckingPincode] = useState(false);
  const [showEMIInfo, setShowEMIInfo] = useState(false);
  const pincodeContainerRef = useRef<HTMLDivElement>(null);

  const savings = product.pricing.mrp - product.pricing.offer;
  const emiPerMonth = Math.round(product.pricing.offer / 6);

  const productWhatsAppUrl = buildProductWhatsAppUrl({
    name: product.name,
    price: product.pricing.offer,
    slug: product.slug,
  });

  const handlePincodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\d{6}$/.test(pincode.trim())) {
      setDeliveryResult('Please enter a valid 6-digit Indian pincode.');
      return;
    }

    setIsCheckingPincode(true);
    setTimeout(() => {
      setIsCheckingPincode(false);
      const today = new Date();
      const deliveryDate = new Date(today.setDate(today.getDate() + 5));
      const dateStr = deliveryDate.toLocaleDateString('en-IN', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      });
      setDeliveryResult(`✓ Free Doorstep Delivery by ${dateStr} to ${pincode}`);
    }, 400);
  };

  return (
    <div className="space-y-6">
      
      {/* Category Tag + In-Stock Badge */}
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.1em] font-semibold text-accent">
          {product.category.replace('-', ' ')}
        </span>

        {product.seo?.badge === 'Coming Soon' ? (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-accent-subtle text-accent text-xs font-semibold rounded-btn">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Coming Soon · Launching Shortly
          </span>
        ) : product.conversion.inStock ? (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-accent-subtle text-accent text-xs font-semibold rounded-btn">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            In Stock · Dispatch in 24–48 Hrs
          </span>
        ) : (
          <span className="text-xs font-medium text-accent bg-accent-subtle px-2 py-0.5 rounded-btn">
            Made to Order
          </span>
        )}
      </div>

      {/* Main H1 Title */}
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl text-primary font-medium tracking-tight leading-tight">
          {product.name}
        </h1>
        <p className="text-xs sm:text-sm text-content-muted mt-1.5 leading-relaxed">
          {product.tagline}
        </p>
      </div>

      {/* Pricing Block with Inclusive GST, Savings, & No-Cost EMI */}
      <div className="bg-surface rounded-card p-4 sm:p-5 border border-border space-y-3">
        <div className="flex items-baseline gap-3">
          <span className="font-sans font-bold text-2xl sm:text-3xl text-primary tracking-tight">
            ₹{product.pricing.offer.toLocaleString('en-IN')}
          </span>
          <span className="text-sm text-content-muted line-through font-normal">
            ₹{product.pricing.mrp.toLocaleString('en-IN')}
          </span>
          <span className="text-xs font-medium text-accent bg-accent-subtle px-2 py-0.5 rounded-btn">
            {product.pricing.discount}% OFF
          </span>
        </div>

        <div className="flex items-center justify-between text-xs text-content-muted">
          <span className="text-accent font-medium">
            You Save: ₹{savings.toLocaleString('en-IN')}
          </span>
          <span>Inclusive of all GST taxes</span>
        </div>

        {/* No-Cost EMI Section */}
        <div className="pt-2.5 border-t border-border/60 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-primary font-normal">
            <CreditCard className="w-3.5 h-3.5 text-accent" />
            <span>From <strong className="font-semibold">₹{emiPerMonth.toLocaleString('en-IN')}/month</strong> with No Cost EMI</span>
          </div>
          <button
            type="button"
            onClick={() => setShowEMIInfo(!showEMIInfo)}
            className="text-accent hover:text-primary font-medium underline text-[11px] cursor-pointer"
          >
            {showEMIInfo ? 'Hide Plans' : 'View Plans'}
          </button>
        </div>

        {showEMIInfo && (
          <div className="mt-2 p-3 bg-surface-page rounded-btn text-xs space-y-1.5 text-primary animate-in fade-in duration-150 border border-border">
            <p className="font-medium text-[11px] uppercase text-accent">Zero Down Payment EMI Plans:</p>
            <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
              <div className="p-2 bg-surface rounded-btn border border-border">
                <span className="block font-medium text-primary">3 Months</span>
                <span className="text-content-muted">₹{Math.round(product.pricing.offer / 3).toLocaleString('en-IN')}/mo</span>
              </div>
              <div className="p-2 bg-surface rounded-btn border border-border">
                <span className="block font-medium text-primary">6 Months</span>
                <span className="text-content-muted">₹{emiPerMonth.toLocaleString('en-IN')}/mo</span>
              </div>
              <div className="p-2 bg-surface rounded-btn border border-border">
                <span className="block font-medium text-primary">9 Months</span>
                <span className="text-content-muted">₹{Math.round(product.pricing.offer / 9).toLocaleString('en-IN')}/mo</span>
              </div>
            </div>
            <p className="text-[10px] text-content-muted mt-1">
              *Available on major credit and debit cards at final invoice checkout.
            </p>
          </div>
        )}
      </div>

      {/* Pincode Delivery Estimator */}
      <div ref={pincodeContainerRef} className="bg-surface rounded-card p-4 border border-border shadow-card">
        <span className="text-xs font-medium uppercase tracking-[0.05em] text-primary block mb-2">
          Check Delivery Timeline &amp; Assembly Details
        </span>
        <form onSubmit={handlePincodeCheck} className="flex gap-2">
          <input
            type="text"
            maxLength={6}
            value={pincode}
            onFocus={() => {
              setTimeout(() => {
                pincodeContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }, 300);
            }}
            onChange={(e) => setPincode(e.target.value)}
            placeholder="Enter 6-digit Pincode (e.g. 560038)"
            className="flex-1 px-3 py-2 bg-surface-page border border-border text-xs text-primary rounded-btn focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button
            type="submit"
            disabled={isCheckingPincode}
            className="px-5 py-2 bg-primary text-primary-text font-medium text-xs rounded-btn hover:bg-primary-hover transition-colors shadow-xs"
          >
            {isCheckingPincode ? 'Checking...' : 'Check'}
          </button>
        </form>

        {deliveryResult && (
          <p className="mt-2.5 text-xs font-medium text-accent animate-in fade-in duration-150">
            {deliveryResult}
          </p>
        )}
      </div>

      {/* CTA Buttons Row: Primary WhatsApp Order/Enquire + Direct Phone Consultation */}
      <div className="flex flex-col gap-3 pt-2">
        <a
          href={productWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick({ source: 'pdp', product_id: product.id, product_name: product.name })}
          className="relative group w-full min-h-[48px] flex items-center justify-center gap-2.5 py-3.5 px-6 bg-accent hover:bg-accent-hover text-accent-text font-sans font-semibold text-sm sm:text-base rounded-btn shadow-warm hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 overflow-hidden cursor-pointer"
        >
          {/* Shimmer sweep */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />

          {/* Pulsing beacon */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sand opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sand" />
          </span>

          <MessageCircle className="w-5 h-5 text-accent-text" />
          <span>{product.seo?.badge === 'Coming Soon' ? 'Inquire on WhatsApp (Coming Soon)' : 'Enquire & Order on WhatsApp'}</span>
        </a>

        <a
          href="tel:+917291962356"
          className="w-full min-h-[48px] flex items-center justify-center gap-2.5 py-3 px-6 bg-transparent text-primary border-[1.5px] border-primary hover:bg-primary hover:text-primary-text font-sans font-medium text-sm rounded-btn transition-all duration-200 group"
        >
          <Phone className="w-4 h-4 text-accent group-hover:text-primary-text" />
          <span>Call +91 72919 62356 for Sizing &amp; Space Guidance</span>
        </a>
      </div>

      {/* Trust Icons Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-border text-center">
        <div className="p-3 bg-surface-page rounded-card border border-border">
          <ShieldCheck className="w-4 h-4 text-accent mx-auto mb-1" />
          <p className="text-[11px] font-medium text-primary">Rust-Resistant</p>
          <p className="text-[9px] text-content-muted">Powder-Coated Steel</p>
        </div>
        <div className="p-3 bg-surface-page rounded-card border border-border">
          <Award className="w-4 h-4 text-accent mx-auto mb-1" />
          <p className="text-[11px] font-medium text-primary">Easy Assembly</p>
          <p className="text-[9px] text-content-muted">Hardware Included</p>
        </div>
        <div className="p-3 bg-surface-page rounded-card border border-border">
          <RotateCcw className="w-4 h-4 text-accent mx-auto mb-1" />
          <p className="text-[11px] font-medium text-primary">Sized for Homes</p>
          <p className="text-[9px] text-content-muted">2BHK &amp; 3BHK Friendly</p>
        </div>
        <div className="p-3 bg-surface-page rounded-card border border-border">
          <Truck className="w-4 h-4 text-accent mx-auto mb-1" />
          <p className="text-[11px] font-medium text-primary">Amazon India</p>
          <p className="text-[9px] text-content-muted">Doorstep Delivery</p>
        </div>
      </div>

    </div>
  );
}
