import React from 'react';
import { ShieldCheck, Lock, CreditCard, RefreshCw } from 'lucide-react';

interface CheckoutBadgeProps {
  forceVisible?: boolean;
}

export default function CheckoutBadge({ forceVisible = false }: CheckoutBadgeProps) {
  return (
    <div className={forceVisible ? 'block' : 'hidden'}>
      <div className="p-4 bg-warm-ivory border border-warm-sand rounded-xl">
        <div className="flex items-center gap-2 mb-2 text-espresso font-display font-semibold text-sm">
          <ShieldCheck className="w-4 h-4 text-muted-olive" />
          <span>100% Safe & Secure Checkout (Razorpay)</span>
        </div>
        <p className="text-xs text-soft-taupe mb-3">
          UPI, Credit/Debit Cards, NetBanking, and No-Cost EMI supported with 256-bit encryption.
        </p>
        <div className="flex flex-wrap gap-2 text-[11px] text-espresso/80 font-medium">
          <span className="px-2 py-1 bg-white border border-warm-sand/50 rounded flex items-center gap-1">
            <Lock className="w-3 h-3 text-muted-olive" /> 256-bit SSL
          </span>
          <span className="px-2 py-1 bg-white border border-warm-sand/50 rounded flex items-center gap-1">
            <CreditCard className="w-3 h-3 text-muted-olive" /> All Major Cards & UPI
          </span>
          <span className="px-2 py-1 bg-white border border-warm-sand/50 rounded flex items-center gap-1">
            <RefreshCw className="w-3 h-3 text-muted-olive" /> 30-Day Easy Returns
          </span>
        </div>
      </div>
    </div>
  );
}
