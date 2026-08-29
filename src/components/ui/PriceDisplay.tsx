import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface PriceDisplayProps {
  offerPrice: number;
  mrp: number;
  discount?: number;
  size?: 'sm' | 'md' | 'lg' | 'pdp';
  showDiscount?: boolean;
  className?: string;
}

export default function PriceDisplay({
  offerPrice,
  mrp,
  discount,
  size = 'md',
  showDiscount = true,
  className = '',
}: PriceDisplayProps) {
  const calculatedDiscount = discount || Math.round(((mrp - offerPrice) / mrp) * 100);

  const formatINR = (val: number) => {
    return `₹${val.toLocaleString('en-IN')}`;
  };

  const sizes = {
    sm: {
      offer: 'text-sm font-bold',
      mrp: 'text-xs',
      discount: 'text-[10px] px-1 py-0.5',
    },
    md: {
      offer: 'text-lg font-bold font-display',
      mrp: 'text-xs',
      discount: 'text-[11px] px-1.5 py-0.5',
    },
    lg: {
      offer: 'text-xl font-bold font-display',
      mrp: 'text-sm',
      discount: 'text-xs px-2 py-0.5',
    },
    pdp: {
      offer: 'text-2xl md:text-3xl font-bold font-display text-espresso',
      mrp: 'text-sm md:text-base',
      discount: 'text-xs font-semibold px-2 py-1',
    },
  };

  return (
    <div className={twMerge(clsx('flex flex-wrap items-baseline gap-2', className))}>
      <span className={clsx('text-espresso tracking-tight', sizes[size].offer)}>
        {formatINR(offerPrice)}
      </span>
      
      {mrp > offerPrice && (
        <>
          <span className={clsx('text-soft-taupe line-through', sizes[size].mrp)}>
            {formatINR(mrp)}
          </span>
          
          {showDiscount && calculatedDiscount > 0 && (
            <span className={clsx('bg-muted-olive/15 text-muted-olive font-medium rounded', sizes[size].discount)}>
              {calculatedDiscount}% OFF
            </span>
          )}
        </>
      )}
    </div>
  );
}
