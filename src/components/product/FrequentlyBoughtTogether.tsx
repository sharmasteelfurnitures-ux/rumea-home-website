'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';
import { getRelatedProducts } from '@/lib/products';
import { Plus, ShoppingCart, MessageCircle } from 'lucide-react';
import { buildAmazonUrl } from '@/lib/amazon';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { trackAmazonClick, trackWhatsAppClick } from '@/lib/analytics';

interface FrequentlyBoughtTogetherProps {
  product: Product;
}

export default function FrequentlyBoughtTogether({ product }: FrequentlyBoughtTogetherProps) {
  const related = getRelatedProducts(product, 2);

  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>({
    [product.id]: true,
    ...(related[0] ? { [related[0].id]: true } : {}),
    ...(related[1] ? { [related[1].id]: true } : {}),
  });

  if (related.length === 0) return null;

  const allItems = [product, ...related];
  const activeItems = allItems.filter((item) => selectedItems[item.id]);

  const totalPrice = activeItems.reduce((sum, item) => sum + item.pricing.offer, 0);
  const totalMrp = activeItems.reduce((sum, item) => sum + item.pricing.mrp, 0);
  const totalSavings = totalMrp - totalPrice;

  const toggleItem = (id: string) => {
    if (id === product.id) return; // Keep main product always selected
    setSelectedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleBundleWhatsApp = () => {
    const itemNames = activeItems.map((i) => `${i.name} (₹${i.pricing.offer.toLocaleString('en-IN')})`).join(', ');
    const msg = `Hi Rumea Home! I'm interested in ordering the complete room look: ${itemNames}. Total: ₹${totalPrice.toLocaleString('en-IN')}. Can you confirm delivery and bundle pricing?`;
    window.open(buildWhatsAppUrl(msg), '_blank');
    trackWhatsAppClick({ source: 'pdp', product_id: product.id, product_name: product.name });
  };

  const handleBundleAmazon = () => {
    window.open(buildAmazonUrl(product.conversion.amazonAsin, product.name), '_blank');
    trackAmazonClick({
      id: product.id,
      name: `Bundle: ${product.name}`,
      price: totalPrice,
      category: product.category,
    });
  };

  return (
    <div className="bg-white rounded-card p-6 sm:p-8 border border-border-sand shadow-card my-12">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-antique-gold">
          COMPLETE THE ROOM LOOK
        </span>
        <h3 className="font-serif font-bold text-xl sm:text-2xl text-espresso mt-1">
          Frequently Paired Together
        </h3>
        <p className="text-xs text-soft-taupe mt-1">
          Coordinating solid Sheesham wood pieces designed to harmonize in finish, proportions, and height.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: Interactive Multi-Card Bundle Strip */}
        <div className="lg:col-span-8 flex flex-wrap items-center gap-3 sm:gap-4">
          {allItems.map((item, idx) => (
            <React.Fragment key={item.id}>
              {idx > 0 && (
                <div className="w-7 h-7 rounded-full bg-warm-ivory text-antique-gold flex items-center justify-center flex-shrink-0 font-bold border border-border-sand">
                  <Plus className="w-3.5 h-3.5" />
                </div>
              )}

              <div
                className={`relative w-28 sm:w-36 rounded-card overflow-hidden border transition-all p-2 bg-warm-ivory/50 ${
                  selectedItems[item.id]
                    ? 'border-espresso shadow-xs ring-1 ring-espresso'
                    : 'border-border-sand opacity-50'
                }`}
              >
                <div className="relative aspect-[4/3] rounded-btn overflow-hidden bg-white mb-2 border border-border-sand">
                  <Image
                    src={item.images.primary}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-serif font-semibold text-[11px] text-espresso line-clamp-1">
                  {item.name}
                </p>
                <p className="text-xs font-bold text-espresso mt-0.5">
                  ₹{item.pricing.offer.toLocaleString('en-IN')}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Right: Price Total & Action Buttons */}
        <div className="lg:col-span-4 bg-warm-ivory p-5 rounded-card border border-border-sand space-y-4">
          <div>
            <span className="text-xs text-soft-taupe">Total Price for ({activeItems.length} pieces):</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-serif font-bold text-2xl text-espresso">
                ₹{totalPrice.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-soft-taupe line-through">
                ₹{totalMrp.toLocaleString('en-IN')}
              </span>
            </div>
            {totalSavings > 0 && (
              <p className="text-xs font-bold text-antique-gold mt-0.5">
                Save ₹{totalSavings.toLocaleString('en-IN')} with this room bundle
              </p>
            )}
          </div>

          {/* Checkboxes List */}
          <div className="space-y-2 text-xs">
            {allItems.map((item) => (
              <label
                key={item.id}
                className="flex items-start gap-2 cursor-pointer select-none text-espresso"
              >
                <input
                  type="checkbox"
                  checked={!!selectedItems[item.id]}
                  disabled={item.id === product.id}
                  onChange={() => toggleItem(item.id)}
                  className="mt-0.5 rounded-btn text-espresso focus:ring-espresso"
                />
                <span className="leading-tight">
                  <strong>{item.id === product.id ? 'This piece: ' : ''}</strong>
                  {item.name} (₹{item.pricing.offer.toLocaleString('en-IN')})
                </span>
              </label>
            ))}
          </div>

          <div className="space-y-2 pt-2">
            <button
              onClick={handleBundleAmazon}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-espresso text-warm-ivory font-bold text-xs rounded-btn shadow-warm hover:bg-espresso/90 active:scale-95 transition-all"
            >
              <ShoppingCart className="w-4 h-4 text-warm-sand" />
              <span>Buy Set on Amazon</span>
            </button>

            <button
              onClick={handleBundleWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white text-espresso border border-border-sand font-semibold text-xs rounded-btn hover:bg-warm-sand/20 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-antique-gold" />
              <span>Enquire Set on WhatsApp</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
