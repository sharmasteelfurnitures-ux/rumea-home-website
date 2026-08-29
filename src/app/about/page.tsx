import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import WhatsAppFloatingButton from '@/components/layout/WhatsAppFloatingButton';
import { 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Flame, 
  Hammer, 
  Scale, 
  FileText,
  MessageCircle
} from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Our Story, Woodcraft & Values | Rumea Home',
  description:
    'Handcrafted solid Sheesham wood furniture for modern Indian homes. Discover our 100% kiln-dried timber, mortise & tenon joinery, and honest direct pricing.',
  openGraph: {
    title: 'Our Story & Craftsmanship | Rumea Home',
    description: '100% Solid Sheesham Wood Furniture Handcrafted for Indian Homes.',
    url: 'https://rumeahome.com/about',
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Warmth',
      description: 'Furniture designed to make a house feel like a home. Natural wood grains, soothing tones, and tactile finishes.',
    },
    {
      icon: Sparkles,
      title: 'Modern Living',
      description: 'Proportions calculated for 2BHK and 3BHK Indian floor plans with generous seating and uncluttered lines.',
    },
    {
      icon: ShieldCheck,
      title: 'Structural Honesty',
      description: 'Kiln-dried hardwoods, mortise & tenon joinery, and a 5-year structural warranty with zero MDF shortcuts.',
    },
    {
      icon: Compass,
      title: 'Thoughtful Design',
      description: 'Wire management channels, rounded kid-safe corners, and elevated legs for robotic vacuum access.',
    },
    {
      icon: Award,
      title: 'Accessible Luxury',
      description: 'Workshop-to-doorstep direct pricing with zero retail showroom middlemen or excessive brand markups.',
    },
  ];

  const legalPolicies = [
    {
      title: 'Privacy Policy & Data Security',
      content:
        'We respect your privacy. Any contact information, pincode, or inquiry details shared on WhatsApp or through our website are strictly used to fulfill your furniture orders and delivery coordination. We never sell, rent, or trade your personal data to third parties. All connections use 256-bit SSL encryption.',
    },
    {
      title: 'Terms of Service & Warranty',
      content:
        'All Rumea Home solid wood furniture frames are backed by a 5-Year Structural Frame Warranty against manufacturing defects, wood borer/termite infestation, and joint separation. Natural wood grain variations, knot patterns, and seasonal micro-movement due to extreme climate changes are organic characteristics of authentic solid wood.',
    },
    {
      title: 'Shipping, Delivery & Assembly Policy',
      content:
        'We provide Free Doorstep Delivery across India on all orders exceeding ₹15,000. All items are packed in heavy-duty 5-ply corrugated cartons with corner foam edge guards. Our logistics partner provides free professional assembly in 50+ metro cities within 24–48 hours of product arrival.',
    },
    {
      title: '30-Day Doorstep Return Policy',
      content:
        'If your furniture arrives with transit damage or fails to meet your expectations, notify our WhatsApp concierge within 30 days of delivery. We will arrange a free reverse pickup and prompt replacement or full refund.',
    },
  ];

  return (
    <div className="bg-warm-ivory min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Our Story & Values' }]} className="mb-6" />

        {/* 1. Hero Brand Statement */}
        <section className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-espresso text-warm-ivory text-[11px] font-bold uppercase tracking-widest rounded-btn mb-4">
            <Sparkles className="w-3.5 h-3.5 text-antique-gold" /> OUR STORY &amp; PHILOSOPHY
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-espresso tracking-tight leading-tight">
            Furniture that earns its place in your home.
          </h1>
          <p className="text-soft-taupe text-base sm:text-lg mt-5 leading-relaxed max-w-2xl mx-auto">
            Rumea Home was born to solve a real dilemma: why should Indian homeowners have to choose between fragile particle-board furniture or exorbitant showroom markups?
          </p>
        </section>

        {/* 2. Narrative & Workshop Photography Split */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20 sm:mb-24 bg-white rounded-card p-6 sm:p-10 border border-border-sand shadow-card">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-card overflow-hidden border border-border-sand bg-ivory-dark">
              <Image
                src="https://images.unsplash.com/photo-1540518614846-7ede433c4ef2?auto=format&fit=crop&w=1000&q=85"
                alt="Rumea Home Master Workshop"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-espresso text-warm-ivory p-4 rounded-card shadow-lg max-w-xs hidden sm:block border border-border-sand/30">
              <p className="font-serif font-bold text-xs uppercase text-warm-sand">Authentic Sheesham</p>
              <p className="text-[11px] text-warm-ivory/90 mt-0.5">
                100% government-certified kiln-dried Indian hardwood.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-soft-taupe leading-relaxed">
            <span className="text-xs font-bold uppercase tracking-widest text-antique-gold">
              THE RUMEA DIFFERENCE
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-espresso">
              Crafted for Real Indian Families
            </h2>
            <p>
              We work with generational master woodworkers who understand the nuances of Indian hardwoods. Every plank of Sheesham is seasoned inside computerized kiln chambers down to 8–10% moisture content. This prevents warping and joint loosening during the Indian monsoon.
            </p>
            <p>
              By bypassing expensive mall showrooms, middleman distributors, and costly celebrity endorsements, we deliver genuine solid wood furniture straight to your home at an honest price range of ₹12,000 to ₹55,000.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-espresso font-semibold">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-antique-gold" /> Zero MDF Fillers
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-antique-gold" /> Mortise &amp; Tenon Joinery
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-antique-gold" /> Non-Toxic Sealants
              </span>
            </div>
          </div>
        </section>

        {/* 3. Five Brand Pillars */}
        <section className="mb-20 sm:mb-24">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-antique-gold">
              OUR GUIDING PRINCIPLES
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-4xl text-espresso mt-1">
              The Five Pillars of Rumea Home
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="bg-white p-6 rounded-card border border-border-sand shadow-card flex flex-col justify-between card-hover"
                >
                  <div>
                    <div className="w-10 h-10 rounded-btn bg-espresso text-warm-ivory flex items-center justify-center mb-4 shadow-xs">
                      <Icon className="w-5 h-5 text-warm-sand" />
                    </div>
                    <h3 className="font-serif font-bold text-base text-espresso mb-1.5">
                      {val.title}
                    </h3>
                    <p className="text-xs text-soft-taupe leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Trust, Policies & Consumer Transparency */}
        <section className="bg-white rounded-card p-6 sm:p-10 border border-border-sand shadow-card mb-20 sm:mb-24">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-antique-gold flex items-center gap-1.5">
              <FileText className="w-4 h-4" /> CONSUMER TRUST &amp; LEGAL POLICIES
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-espresso mt-1">
              Honest Guarantees &amp; Policy Details
            </h2>
            <p className="text-xs sm:text-sm text-soft-taupe mt-1">
              Compliant with the Consumer Protection Act (E-Commerce) and IT Act 2000.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legalPolicies.map((pol, idx) => (
              <div key={idx} className="p-5 bg-warm-ivory rounded-card border border-border-sand space-y-2">
                <h3 className="font-serif font-bold text-sm text-espresso flex items-center gap-2">
                  <Scale className="w-4 h-4 text-antique-gold flex-shrink-0" />
                  <span>{pol.title}</span>
                </h3>
                <p className="text-xs text-soft-taupe leading-relaxed">
                  {pol.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Direct CTA Banner */}
        <section className="bg-espresso text-warm-ivory rounded-card p-8 sm:p-12 text-center border border-border-sand shadow-warm">
          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-warm-ivory mb-3">
            Ready to Furnish Your Space?
          </h2>
          <p className="text-warm-sand text-xs sm:text-sm max-w-lg mx-auto mb-8">
            Browse our full 20+ piece solid Sheesham collection or chat directly with our furniture designers on WhatsApp for room planning.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              className="px-8 py-3.5 bg-white text-espresso text-xs font-bold rounded-btn shadow-warm hover:bg-warm-sand transition-colors"
            >
              Explore the Collection &rarr;
            </Link>
            <a
              href={buildWhatsAppUrl("Hi Rumea Home! I just read your story and would love advice for my home.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-btn shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </section>

      </div>

      {/* Floating Bottom-Right WhatsApp Trigger */}
      <WhatsAppFloatingButton />
    </div>
  );
}
