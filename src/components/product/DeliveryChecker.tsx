'use client';

import React, { useState } from 'react';
import { Truck, CheckCircle, AlertCircle } from 'lucide-react';
import { usePincode } from '@/hooks/usePincode';

export default function DeliveryChecker() {
  const [inputPin, setInputPin] = useState('');
  const { checkPincode, result, error, loading } = usePincode();

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPin.length === 6) {
      checkPincode(inputPin);
    }
  };

  return (
    <div className="bg-warm-ivory/80 border border-warm-sand rounded-2xl p-4 sm:p-5">
      <div className="flex items-center gap-2 mb-2">
        <Truck className="w-4 h-4 text-muted-olive" />
        <h4 className="font-display font-semibold text-xs sm:text-sm text-espresso">
          Check Delivery & Assembly to Your Pincode
        </h4>
      </div>

      <form onSubmit={handleCheck} className="flex gap-2 mt-3">
        <input
          type="text"
          maxLength={6}
          value={inputPin}
          onChange={(e) => setInputPin(e.target.value.replace(/\D/g, ''))}
          placeholder="Enter 6-digit Pincode (e.g. 560001)"
          className="flex-1 px-3.5 py-2.5 bg-white border border-warm-sand rounded-xl text-xs sm:text-sm text-espresso placeholder-soft-taupe focus:outline-none focus:ring-2 focus:ring-espresso"
        />
        <button
          type="submit"
          disabled={loading || inputPin.length !== 6}
          className="px-5 py-2.5 bg-espresso text-warm-ivory text-xs font-semibold rounded-xl hover:bg-espresso/90 disabled:opacity-50 transition-colors shadow-sm whitespace-nowrap"
        >
          Check
        </button>
      </form>

      {error && (
        <div className="mt-3 flex items-center gap-1.5 text-xs text-amber-800">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {result && result.isDeliverable && (
        <div className="mt-3.5 p-3 bg-white rounded-xl border border-muted-olive/30 animate-in fade-in duration-300">
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-muted-olive flex-shrink-0 mt-0.5" />
            <div className="text-xs">
              <p className="font-semibold text-espresso">
                Delivery Available to {result.city} ({result.pincode})
              </p>
              <p className="text-soft-taupe mt-0.5">
                Estimated Delivery: <strong className="text-espresso">{result.estimatedDate}</strong> ({result.deliveryDays})
              </p>
              <p className="text-[11px] text-muted-olive font-medium mt-1">
                ✓ Free Pan-India Doorstep Delivery & Assembly Support Included
              </p>
            </div>
          </div>
        </div>
      )}

      <p className="text-[10px] text-soft-taupe mt-2.5">
        Based on typical courier timelines. Exact dates and delivery slots are confirmed at checkout on Amazon.
      </p>
    </div>
  );
}
