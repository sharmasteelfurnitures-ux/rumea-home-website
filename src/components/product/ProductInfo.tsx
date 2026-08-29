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
  const [selectedFinish, setSelectedFinish] = useState<string>(
    product.materials.selectedFinish || product.materials.finish[0] || 'Natural Teak'
  );
  const [pincode, setPincode] = useState<string>('');
  const [deliveryResult, setDeliveryResult] = useState<string | null>(null);
  const [isCheckingPincode, setIsCheckingPincode] = useState(false);
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

  const amazonUrl = buildAmazonUrl(product.conversion.amazonAsin, product.name);
  const productWhatsAppUrl = buildProductWhatsAppUrl({
    name: `${product.name} (${selectedFinish} Finish)`,
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
      
      {/* Category Tag & Rating Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-border-sand/60">
        <span className="text-xs uppercase tracking-widest font-bold text-antique-gold">
          {product.category.replace('-', ' ')} • {product.room.join(' & ')}
        </span>

        {/* Star Rating - Scroll to Reviews */}
        <button
          onClick={scrollToReviews}
          className="flex items-center gap-1.5 text-xs font-semibold text-espresso hover:text-antique-gold transition-colors bg-white px-2.5 py-1 rounded-btn border border-border-sand shadow-xs"
        >
          <div className="flex text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span>{product.seo.rating}</span>
          <span className="text-soft-taupe font-normal underline">({product.seo.reviewCount} reviews)</span>
        </button>
      </div>

      {/* Product Name (H1 in Serif) */}
      <div>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-espresso tracking-tight leading-tight">
          {product.name}
        </h1>
        {product.tagline && (
          <p className="text-soft-taupe text-sm sm:text-base mt-1.5 leading-relaxed">
            {product.tagline}
          </p>
        )}
      </div>

      {/* Pricing Block with MRP, Sale Price & % Savings */}
      <div className="p-4 sm:p-5 bg-white rounded-card border border-border-sand shadow-card space-y-2.5">
        <div className="flex items-baseline gap-3">
          <span className="font-serif font-bold text-3xl sm:text-4xl text-espresso tracking-tight">
            ₹{product.pricing.offer.toLocaleString('en-IN')}
          </span>
          <span className="text-sm text-soft-taupe line-through font-normal">
            ₹{product.pricing.mrp.toLocaleString('en-IN')}
          </span>
          <span className="text-xs font-bold text-antique-gold bg-warm-sand/30 px-2 py-0.5 rounded-btn">
            {product.pricing.discount}% OFF
          </span>
        </div>

        <div className="flex items-center justify-between text-xs text-soft-taupe">
          <span className="text-antique-gold font-bold">
            You Save: ₹{savings.toLocaleString('en-IN')}
          </span>
          <span>Inclusive of all GST taxes</span>
        </div>

        {/* No-Cost EMI Section */}
        <div className="pt-2.5 border-t border-border-sand/60 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-espresso font-medium">
            <CreditCard className="w-3.5 h-3.5 text-antique-gold" />
            <span>From <strong>₹{emiPerMonth.toLocaleString('en-IN')}/month</strong> with No Cost EMI</span>
          </div>
          <button
            onClick={() => setShowEMIInfo(!showEMIInfo)}
            className="text-antique-gold hover:text-espresso font-bold underline text-[11px]"
          >
            {showEMIInfo ? 'Hide EMI' : 'View Plans'}
          </button>
        </div>

        {showEMIInfo && (
          <div className="mt-2 p-3 bg-warm-ivory rounded-btn text-xs space-y-1.5 text-espresso animate-in fade-in duration-150 border border-border-sand">
            <p className="font-bold text-[11px] uppercase text-antique-gold">Zero Down Payment EMI Plans:</p>
            <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
              <div className="p-2 bg-white rounded-btn border border-border-sand">
                <span className="block font-bold">3 Months</span>
                <span>₹{Math.round(product.pricing.offer / 3).toLocaleString('en-IN')}/mo</span>
              </div>
              <div className="p-2 bg-white rounded-btn border border-border-sand">
                <span className="block font-bold">6 Months</span>
                <span>₹{emiPerMonth.toLocaleString('en-IN')}/mo</span>
              </div>
              <div className="p-2 bg-white rounded-btn border border-border-sand">
                <span className="block font-bold">9 Months</span>
                <span>₹{Math.round(product.pricing.offer / 9).toLocaleString('en-IN')}/mo</span>
              </div>
            </div>
            <p className="text-[10px] text-soft-taupe mt-1">
              *Available on credit cards, debit cards, and Amazon Pay Later at checkout.
            </p>
          </div>
        )}
      </div>

      {/* Timber Finish Swatches */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-espresso">
            Timber Finish: <strong className="text-antique-gold">{selectedFinish}</strong>
          </span>
          <span className="text-soft-taupe text-[11px]">100% Kiln-Dried Sheesham</span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {product.materials.finish.map((f) => {
            const isSel = selectedFinish === f;
            const hex = finishColorMap[f] || '#C19A6B';
            return (
              <button
                key={f}
                onClick={() => setSelectedFinish(f)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-btn text-xs border transition-all ${
                  isSel
                    ? 'border-espresso bg-white font-bold text-espresso shadow-xs ring-1 ring-espresso'
                    : 'border-border-sand bg-warm-ivory/60 text-soft-taupe hover:border-espresso/40'
                }`}
              >
                <span
                  className="w-3.5 h-3.5 rounded-full border border-black/20"
                  style={{ backgroundColor: hex }}
                />
                <span>{f}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Pincode Delivery Estimator */}
      <div className="bg-white rounded-card p-4 border border-border-sand shadow-card">
        <span className="text-xs font-bold uppercase tracking-wider text-espresso block mb-2">
          Check Delivery Timeline &amp; Free Assembly
        </span>
        <form onSubmit={handlePincodeCheck} className="flex gap-2">
          <input
            type="text"
            maxLength={6}
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            placeholder="Enter 6-digit Pincode (e.g. 560038)"
            className="flex-1 px-3 py-2 bg-warm-ivory border border-border-sand text-xs text-espresso rounded-btn focus:outline-none focus:ring-1 focus:ring-espresso"
          />
          <button
            type="submit"
            disabled={isCheckingPincode}
            className="px-5 py-2 bg-espresso text-warm-ivory font-bold text-xs rounded-btn hover:bg-espresso/90 transition-colors shadow-xs"
          >
            {isCheckingPincode ? 'Checking...' : 'Check'}
          </button>
        </form>

        {deliveryResult && (
          <p className="mt-2.5 text-xs font-semibold text-antique-gold animate-in fade-in duration-150">
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
          className="w-full flex items-center justify-center gap-2.5 py-4 px-6 bg-espresso text-warm-ivory font-sans font-bold text-sm sm:text-base rounded-btn shadow-warm hover:bg-espresso/90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
        >
          <ShoppingCart className="w-5 h-5 text-warm-sand" />
          <span>Add to Cart / Buy Now on Amazon</span>
        </a>

        <a
          href={productWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick({ source: 'pdp', product_id: product.id, product_name: product.name })}
          className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 bg-white text-espresso border border-border-sand hover:border-espresso/40 font-sans font-semibold text-sm rounded-btn hover:bg-warm-sand/20 transition-all duration-200"
        >
          <MessageCircle className="w-4 h-4 text-antique-gold" />
          <span>Chat on WhatsApp (Custom Sizing &amp; Queries)</span>
        </a>
      </div>

      {/* Trust Icons Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-border-sand text-center">
        <div className="p-3 bg-warm-ivory rounded-card border border-border-sand">
          <Truck className="w-4 h-4 text-antique-gold mx-auto mb-1" />
          <p className="text-[11px] font-bold text-espresso">Free Delivery</p>
          <p className="text-[9px] text-soft-taupe">Above ₹15,000</p>
        </div>
        <div className="p-3 bg-warm-ivory rounded-card border border-border-sand">
          <RotateCcw className="w-4 h-4 text-antique-gold mx-auto mb-1" />
          <p className="text-[11px] font-bold text-espresso">30-Day Returns</p>
          <p className="text-[9px] text-soft-taupe">Hassle-Free</p>
        </div>
        <div className="p-3 bg-warm-ivory rounded-card border border-border-sand">
          <ShieldCheck className="w-4 h-4 text-antique-gold mx-auto mb-1" />
          <p className="text-[11px] font-bold text-espresso">5-Yr Warranty</p>
          <p className="text-[9px] text-soft-taupe">Structural Frame</p>
        </div>
        <div className="p-3 bg-warm-ivory rounded-card border border-border-sand">
          <Lock className="w-4 h-4 text-antique-gold mx-auto mb-1" />
          <p className="text-[11px] font-bold text-espresso">Secure Payment</p>
          <p className="text-[9px] text-soft-taupe">Amazon Guaranteed</p>
        </div>
      </div>

    </div>
  );
}
