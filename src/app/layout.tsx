import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileNav from '@/components/layout/MobileNav';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export const viewport: Viewport = {
  themeColor: '#2C2926',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://rumeahome.com'),
  title: {
    default: 'Rumea Home | Thoughtful Furniture for Modern Indian Homes',
    template: '%s | Rumea Home',
  },
  description:
    'Premium furniture for modern Indian homes — solid sheesham wood sofas, beds, dining sets, study desks and storage. Free pan-India delivery, 5-year warranty, easy returns. Shop on Amazon or enquire on WhatsApp.',
  keywords: [
    'furniture India',
    'sofa online India',
    'wooden furniture',
    'sheesham wood furniture',
    'living room furniture',
    'bedroom furniture India',
    'dining table sets',
    'modern furniture India',
    'Rumea Home',
  ],
  authors: [{ name: 'Rumea Home' }],
  creator: 'Rumea Home',
  publisher: 'Rumea Home',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://rumeahome.com',
    siteName: 'Rumea Home',
    title: 'Rumea Home | Thoughtful Furniture for Modern Indian Homes',
    description:
      'Thoughtful furniture designed for real Indian homes. Solid wood craftsmanship, 5-year warranty, and free pan-India delivery.',
    images: [
      {
        url: '/images/brand/logo.png',
        width: 1200,
        height: 630,
        alt: 'Rumea Home - Thoughtful Furniture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rumea Home | Thoughtful Furniture for Modern Indian Homes',
    description:
      'Thoughtful furniture designed for real Indian homes. Solid wood craftsmanship, 5-year warranty, and free pan-India delivery.',
    images: ['/images/brand/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-warm-ivory text-espresso antialiased font-body min-h-screen flex flex-col selection:bg-warm-sand selection:text-espresso">
        <Header />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileNav />
        <WhatsAppButton variant="floating" />
      </body>
    </html>
  );
}
