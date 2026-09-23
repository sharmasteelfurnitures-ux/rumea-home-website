/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      }
    ],
  },
  async redirects() {
    return [
      { source: '/shop', destination: '/products', permanent: true },
      { source: '/catalog', destination: '/products', permanent: true },
      { source: '/catalogue', destination: '/products', permanent: true },
      { source: '/shoe-rack', destination: '/products?category=shoe-rack', permanent: true },
      { source: '/shoe-racks', destination: '/products?category=shoe-rack', permanent: true },
      { source: '/folding-table', destination: '/products?category=folding-table', permanent: true },
      { source: '/folding-tables', destination: '/products?category=folding-table', permanent: true },
      { source: '/seating', destination: '/products?category=seating', permanent: true },
      { source: '/chairs', destination: '/products?category=seating', permanent: true },
      { source: '/coat-stand', destination: '/products?category=coat-stand', permanent: true },
      { source: '/coat-stands', destination: '/products?category=coat-stand', permanent: true },
      { source: '/desk', destination: '/products?category=folding-table', permanent: true },
      { source: '/desks', destination: '/products?category=folding-table', permanent: true },
      { source: '/product/:slug*', destination: '/products/:slug*', permanent: true },
      { source: '/collections/shoe-rack', destination: '/products?category=shoe-rack', permanent: true },
      { source: '/collections/shoe-racks', destination: '/products?category=shoe-rack', permanent: true },
      { source: '/collections/entryway', destination: '/products?category=shoe-rack', permanent: true },
      { source: '/collections/tables', destination: '/products?category=folding-table', permanent: true },
      { source: '/collections/folding-tables', destination: '/products?category=folding-table', permanent: true },
      { source: '/collections/seating', destination: '/products?category=seating', permanent: true },
      { source: '/collections/chairs', destination: '/products?category=seating', permanent: true },
      { source: '/faq', destination: '/contact', permanent: true },
      { source: '/faqs', destination: '/contact', permanent: true },
      { source: '/shipping', destination: '/terms', permanent: true },
      { source: '/returns', destination: '/terms', permanent: true },
    ];
  },
};

module.exports = nextConfig;
