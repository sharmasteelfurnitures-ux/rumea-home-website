'use client';

import React, { useState } from 'react';
import { Product } from '@/types/product';
import { buildAmazonUrl } from '@/lib/amazon';
import { buildProductWhatsAppUrl } from '@/lib/whatsapp';
import { trackAmazonClick, trackWhatsAppClick } from '@/lib/analytics';
import { 
  Star, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  CreditCard, 
  Check, 
  Sparkles,
  Lock,
  MessageCircle,
  ShoppingCart
} from 'lucide-react';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [pincode, setPincode] = useState<string>('');
  const [deliveryResult, setDeliveryResult] = useState<string | null>(null);
  const [isCheckingPincode, setIsCheckingPincode] = useState(false);
  const [showEMIInfo, setShowEMIInfo] = useState(false);

  const savings = product.pricing.mrp - product.pricing.offer;
  const emiPerMonth = Math.round(product.pricing.offer / 6);

  const amazonUrl = buildAmazonUrl(product.conversion.amazonAsin, product.name);
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
      // Calculate estimated delivery date: 4 to 6 business days from today
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

  const scrollToReviews = () => {
    const el = document.getElementById('customer-reviews');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-6">
      
      {/* Category Tag & Material USP Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#D8C9B5]/60">
        <span className="text-xs uppercase tracking-[0.10em] font-medium text-[#48563A]">
          {product.category.replace('-', ' ')} • {product.room.join(' & ')}
        </span>
        <span className="text-[11px] font-medium text-[#2C2926] bg-[#F7F4EE] px-2.5 py-1 rounded-btn border border-[#D8C9B5]">
          100% Solid Kiln-Dried Sheesham
        </span>
      </div>

      {/* Product Name (H1 in Serif) */}
      <div>
        <h1 className="font-serif font-medium text-2xl sm:text-3xl lg:text-4xl text-[#2C2926] tracking-tight leading-tight">
          {product.name}
        </h1>
        {product.tagline && (
          <p className="text-[#A69B8C] text-sm sm:text-base mt-1.5 leading-relaxed">
            {product.tagline}
          </p>
        )}
      </div>

      {/* Pricing Block with MRP, Sale Price & % Savings */}
      <div className="p-4 sm:p-5 bg-white rounded-card border border-[#D8C9B5] shadow-card space-y-2.5">
        <div className="flex items-baseline gap-3">
          <span className="font-serif font-semibold text-3xl sm:text-4xl text-[#2C2926] tracking-tight">
            ₹{product.pricing.offer.toLocaleString('en-IN')}
          </span>
          <span className="text-sm text-[#A69B8C] line-through font-normal">
            ₹{product.pricing.mrp.toLocaleString('en-IN')}
          </span>
          <span className="text-xs font-medium text-[#48563A] bg-[#48563A]/12 px-2 py-0.5 rounded-btn">
            {product.pricing.discount}% OFF
          </span>
        </div>

        <div className="flex items-center justify-between text-xs text-[#A69B8C]">
          <span className="text-[#48563A] font-medium">
            You Save: ₹{savings.toLocaleString('en-IN')}
          </span>
          <span>Inclusive of all GST taxes</span>
        </div>

        {/* No-Cost EMI Section */}
        <div className="pt-2.5 border-t border-[#D8C9B5]/60 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-[#2C2926] font-normal">
            <CreditCard className="w-3.5 h-3.5 text-[#48563A]" />
            <span>From <strong className="font-semibold">₹{emiPerMonth.toLocaleString('en-IN')}/month</strong> with No Cost EMI</span>
          </div>
          <button
            onClick={() => setShowEMIInfo(!showEMIInfo)}
            className="text-[#48563A] hover:text-[#2C2926] font-medium underline text-[11px]"
          >
            {showEMIInfo ? 'Hide EMI' : 'View Plans'}
          </button>
        </div>

        {showEMIInfo && (
          <div className="mt-2 p-3 bg-[#F7F4EE] rounded-btn text-xs space-y-1.5 text-[#2C2926] animate-in fade-in duration-150 border border-[#D8C9B5]">
            <p className="font-medium text-[11px] uppercase text-[#48563A]">Zero Down Payment EMI Plans:</p>
            <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
              <div className="p-2 bg-white rounded-btn border border-[#D8C9B5]">
                <span className="block font-medium text-[#2C2926]">3 Months</span>
                <span className="text-[#A69B8C]">₹{Math.round(product.pricing.offer / 3).toLocaleString('en-IN')}/mo</span>
              </div>
              <div className="p-2 bg-white rounded-btn border border-[#D8C9B5]">
                <span className="block font-medium text-[#2C2926]">6 Months</span>
                <span className="text-[#A69B8C]">₹{emiPerMonth.toLocaleString('en-IN')}/mo</span>
              </div>
              <div className="p-2 bg-white rounded-btn border border-[#D8C9B5]">
                <span className="block font-medium text-[#2C2926]">9 Months</span>
                <span className="text-[#A69B8C]">₹{Math.round(product.pricing.offer / 9).toLocaleString('en-IN')}/mo</span>
              </div>
            </div>
            <p className="text-[10px] text-[#A69B8C] mt-1">
              *Available on credit cards, debit cards, and Amazon Pay Later at checkout.
            </p>
          </div>
        )}
      </div>

      {/* Pincode Delivery Estimator */}
      <div className="bg-white rounded-card p-4 border border-[#D8C9B5] shadow-card">
        <span className="text-xs font-medium uppercase tracking-[0.05em] text-[#2C2926] block mb-2">
          Check Delivery Timeline &amp; Free Assembly
        </span>
        <form onSubmit={handlePincodeCheck} className="flex gap-2">
          <input
            type="text"
            maxLength={6}
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            placeholder="Enter 6-digit Pincode (e.g. 560038)"
            className="flex-1 px-3 py-2 bg-[#F7F4EE] border border-[#D8C9B5] text-xs text-[#2C2926] rounded-btn focus:outline-none focus:ring-1 focus:ring-[#2C2926]"
          />
          <button
            type="submit"
            disabled={isCheckingPincode}
            className="px-5 py-2 bg-[#2C2926] text-[#F7F4EE] font-medium text-xs rounded-btn hover:bg-[#3D3632] transition-colors shadow-xs"
          >
            {isCheckingPincode ? 'Checking...' : 'Check'}
          </button>
        </form>

        {deliveryResult && (
          <p className="mt-2.5 text-xs font-medium text-[#48563A] animate-in fade-in duration-150">
            {deliveryResult}
          </p>
        )}
      </div>

      {/* CTA Buttons Row: Primary + WhatsApp Ghost */}
      <div className="space-y-3 pt-2">
        <a
          href={amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackAmazonClick({
              id: product.id,
              name: product.name,
              price: product.pricing.offer,
              category: product.category,
            })
          }
          className="w-full flex items-center justify-center gap-2.5 py-4 px-6 bg-[#2C2926] hover:bg-[#3D3632] text-[#F7F4EE] font-sans font-medium text-sm sm:text-base rounded-btn shadow-warm hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
        >
          <ShoppingCart className="w-5 h-5 text-[#D8C9B5]" />
          <span>Add to Cart / Buy Now on Amazon</span>
        </a>

        <a
          href={productWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick({ source: 'pdp', product_id: product.id, product_name: product.name })}
          className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 bg-transparent text-[#2C2926] border-[1.5px] border-[#2C2926] hover:bg-[#2C2926] hover:text-[#F7F4EE] font-sans font-medium text-sm rounded-btn transition-all duration-200 group"
        >
          <MessageCircle className="w-4 h-4 text-[#48563A] group-hover:text-[#F7F4EE]" />
          <span>Chat on WhatsApp (Custom Sizing &amp; Queries)</span>
        </a>
      </div>

      {/* Trust Icons Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-[#D8C9B5] text-center">
        <div className="p-3 bg-[#F7F4EE] rounded-card border border-[#D8C9B5]">
          <Truck className="w-4 h-4 text-[#48563A] mx-auto mb-1" />
          <p className="text-[11px] font-medium text-[#2C2926]">Free Delivery</p>
          <p className="text-[9px] text-[#A69B8C]">PAN India</p>
        </div>
        <div className="p-3 bg-[#F7F4EE] rounded-card border border-[#D8C9B5]">
          <RotateCcw className="w-4 h-4 text-[#48563A] mx-auto mb-1" />
          <p className="text-[11px] font-medium text-[#2C2926]">30-Day Returns</p>
          <p className="text-[9px] text-[#A69B8C]">Hassle-Free</p>
        </div>
        <div className="p-3 bg-[#F7F4EE] rounded-card border border-[#D8C9B5]">
          <ShieldCheck className="w-4 h-4 text-[#48563A] mx-auto mb-1" />
          <p className="text-[11px] font-medium text-[#2C2926]">5-Yr Warranty</p>
          <p className="text-[9px] text-[#A69B8C]">Structural Frame</p>
        </div>
        <div className="p-3 bg-[#F7F4EE] rounded-card border border-[#D8C9B5]">
          <Lock className="w-4 h-4 text-[#48563A] mx-auto mb-1" />
          <p className="text-[11px] font-medium text-[#2C2926]">Secure Payment</p>
          <p className="text-[9px] text-[#A69B8C]">Amazon Guaranteed</p>
        </div>
      </div>

    </div>
  );
}
