# Rumea Home — Phase 2 D2C Activation Checklist

When ready to transition from Amazon referral to direct checkout:

1. **Activate Cart & State**
   - Connect `src/hooks/useCartStore.ts` to `src/components/dormant/CartSlot.tsx`
   - Build `/cart` page with quantity adjustment and coupon codes

2. **Activate Razorpay Checkout**
   - Add `NEXT_PUBLIC_RAZORPAY_KEY` and `RAZORPAY_KEY_SECRET` in `.env.local`
   - Build `/checkout` route with UPI, Credit/Debit card, and No-Cost EMI modal
   - Display `src/components/dormant/CheckoutBadge.tsx`

3. **Live Logistics & Shiprocket API**
   - Connect Shiprocket API in `src/hooks/usePincode.ts` for real-time live courier SLA

4. **Algolia Instant Search**
   - Index `src/data/products.json` into Algolia index
   - Connect Algolia autocomplete to `src/components/dormant/SearchBar.tsx`
