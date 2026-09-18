import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
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
    default: 'Rumea Home | Practical Furniture for Everyday Indian Homes',
    template: '%s | Rumea Home',
  },
  description:
    'Made to Belong — Practical, well-built furniture for everyday Indian homes. Shoe racks, folding tables, coat stands, and chairs available on Amazon India with direct WhatsApp sizing support.',
  keywords: [
    'furniture India',
    'metal shoe rack',
    'wall mounted shoe rack',
    'folding table India',
    'folding metal chair',
    'metal coat stand',
    'space saving furniture',
    'practical furniture India',
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
    title: 'Rumea Home | Made to Belong — Practical Furniture for Indian Homes',
    description:
      'Practical, well-built furniture designed for real Indian homes and apartments — shoe racks, folding tables, coat stands, and chairs. Available on Amazon India.',
    images: [
      {
        url: '/images/brand/logo.png',
        width: 1200,
        height: 630,
        alt: 'Rumea Home - Practical Furniture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rumea Home | Practical Furniture for Everyday Indian Homes',
    description:
      'Practical furniture designed for real Indian homes — shoe racks, folding tables, coat stands, and chairs that fit your space and your budget.',
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
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&family=Manrope:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-17YPJ1GZHS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-17YPJ1GZHS');
          `}
        </Script>
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
