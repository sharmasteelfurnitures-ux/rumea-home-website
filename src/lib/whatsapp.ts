const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '917291962356';

export function buildWhatsAppUrl(
  message: string = "Hi! I found your website and I'm interested in your furniture. Can you help me?"
): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function buildProductWhatsAppUrl(product: {
  name: string;
  price: number;
  slug: string;
}): string {
  const message = `Hi! I'm interested in the *${product.name}* (₹${product.price.toLocaleString('en-IN')}). Can you share more details and expected delivery timeline?\n\nhttps://rumeahome.com/products/${product.slug}`;
  return buildWhatsAppUrl(message);
}

export function getWhatsAppDisplayNumber(): string {
  const num = WHATSAPP_NUMBER;
  if (num.startsWith('91') && num.length === 12) {
    return `+91 ${num.slice(2, 7)} ${num.slice(7)}`;
  }
  return `+${num}`;
}
