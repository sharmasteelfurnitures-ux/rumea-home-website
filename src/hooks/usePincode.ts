'use client';

import { useState } from 'react';
import { trackPincodeCheck } from '@/lib/analytics';

export interface PincodeResult {
  pincode: string;
  city?: string;
  tier: 'metro' | 'tier2' | 'tier3' | 'invalid';
  deliveryDays: string;
  estimatedDate: string;
  isDeliverable: boolean;
}

const METRO_PREFIXES: Record<string, string> = {
  '110': 'Delhi NCR',
  '121': 'Faridabad',
  '122': 'Gurugram',
  '201': 'Noida / Ghaziabad',
  '400': 'Mumbai',
  '401': 'Thane / Navi Mumbai',
  '411': 'Pune',
  '560': 'Bengaluru',
  '500': 'Hyderabad',
  '600': 'Chennai',
  '700': 'Kolkata',
  '380': 'Ahmedabad',
};

const TIER2_PREFIXES = [
  '302', // Jaipur
  '226', // Lucknow
  '452', // Indore
  '462', // Bhopal
  '682', // Kochi
  '641', // Coimbatore
  '530', // Visakhapatnam
  '141', // Ludhiana
  '160', // Chandigarh
  '751', // Bhubaneswar
  '800', // Patna
];

export function usePincode() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PincodeResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const checkPincode = (pincode: string): PincodeResult => {
    setLoading(true);
    setError(null);

    const cleanPin = pincode.trim();
    if (!/^\d{6}$/.test(cleanPin)) {
      setLoading(false);
      setError('Please enter a valid 6-digit Indian pincode.');
      const res: PincodeResult = {
        pincode: cleanPin,
        tier: 'invalid',
        deliveryDays: 'Invalid Pincode',
        estimatedDate: '',
        isDeliverable: false,
      };
      setResult(res);
      return res;
    }

    const prefix3 = cleanPin.substring(0, 3);
    let tier: 'metro' | 'tier2' | 'tier3' = 'tier3';
    let city = 'Your Area';
    let daysNum = 7;

    if (METRO_PREFIXES[prefix3]) {
      tier = 'metro';
      city = METRO_PREFIXES[prefix3];
      daysNum = 3;
    } else if (TIER2_PREFIXES.includes(prefix3)) {
      tier = 'tier2';
      city = 'Major City / Tier 2 Hub';
      daysNum = 5;
    }

    // Calculate future estimated delivery date
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + daysNum);

    const dateFormatted = deliveryDate.toLocaleDateString('en-IN', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });

    const res: PincodeResult = {
      pincode: cleanPin,
      city,
      tier,
      deliveryDays: tier === 'metro' ? '3–5 working days' : tier === 'tier2' ? '5–7 working days' : '7–10 working days',
      estimatedDate: dateFormatted,
      isDeliverable: true,
    };

    setLoading(false);
    setResult(res);
    trackPincodeCheck(cleanPin, 'deliverable');
    return res;
  };

  return { checkPincode, result, loading, error, reset: () => setResult(null) };
}
