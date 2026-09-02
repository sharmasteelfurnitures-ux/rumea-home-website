declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, any>
    ) => void;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  } else {
    // Development logging
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics] ${eventName}`, params);
    }
  }
}

export function trackAmazonClick(product: {
  id: string;
  name: string;
  price: number;
  category: string;
}) {
  trackEvent('amazon_click', {
    product_id: product.id,
    product_name: product.name,
    product_price: product.price,
    product_category: product.category,
  });
}

export function trackWhatsAppClick(data: {
  source: 'pdp' | 'floating' | 'homepage' | 'contact' | 'nav' | 'footer' | 'customization';
  product_id?: string;
  product_name?: string;
}) {
  trackEvent('whatsapp_click', data);
}

export function trackPincodeCheck(pincode: string, result: 'deliverable' | 'not_deliverable') {
  trackEvent('pincode_check', {
    pincode,
    result,
  });
}

export function trackFilterApplied(filterType: string, filterValue: string) {
  trackEvent('filter_applied', {
    filter_type: filterType,
    filter_value: filterValue,
  });
}
