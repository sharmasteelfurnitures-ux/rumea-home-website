const AFFILIATE_TAG = process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG || 'rumeahome-21';

export function buildAmazonUrl(asin: string, productName?: string): string {
  const baseUrl = `https://www.amazon.in/dp/${asin}`;
  const params = new URLSearchParams({
    tag: AFFILIATE_TAG,
    linkCode: 'ogi',
    utm_source: 'rumea-home',
    utm_medium: 'website',
    utm_campaign: 'pdp-cta',
  });
  return `${baseUrl}?${params.toString()}`;
}
