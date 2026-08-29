import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { Heart, Sparkles, Shield, Compass, Gem, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Story & Craftsmanship | Rumea Home®',
  description:
    'Discover the story behind Rumea Home. Handcrafted solid Sheesham wood furniture for modern Indian homes, built with honest materials and master carpentry.',
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Warm',
      description: 'We design furniture that makes a house feel like a home. Natural wood grains, tactile linen weaves, and soothing organic curves.',
    },
    {
      icon: Sparkles,
      title: 'Modern',
      description: 'Clean architectural lines and clutter-free silhouettes designed specifically for urban Indian apartments.',
    },
    {
      icon: Shield,
      title: 'Reliable',
      description: 'Kiln-dried hardwoods, mortise & tenon joinery, and a 5-year structural warranty you can depend on.',
    },
    {
      icon: Compass,
      title: 'Thoughtful',
      description: 'Every detail is intentional — from wire channels to under-bed ventilation and child-safe rounded chamfers.',
    },
    {
      icon: Gem,
      title: 'Accessible Premium',
      description: 'Heirloom-grade solid wood furniture delivered straight from workshop to your home with honest, transparent pricing.',
    },
  ];

  return (
    <div className="bg-warm-ivory min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'About Our Brand' }]} className="mb-6" />

        {/* 1. Hero Section */}
        <section className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-muted-olive/10 text-muted-olive text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5" /> OUR BRAND STORY
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-espresso tracking-tight leading-tight">
            We Believe Homes Build Brighter Days.
          </h1>
          <p className="text-soft-taupe text-base sm:text-xl mt-6 leading-relaxed">
            Rumea Home was born from a simple realization: Indian homes deserve furniture that is deeply beautiful, honestly built from solid timber, and priced without middlemen markups.
          </p>
        </section>

        {/* 2. Narrative & Image Split */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20 sm:mb-28">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-warm border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1540518614846-7ede433c4ef2?auto=format&fit=crop&w=1000&q=80"
                alt="Rumea Home Master Workshop"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-espresso text-warm-ivory p-5 rounded-2xl shadow-xl max-w-xs hidden sm:block">
              <p className="font-display font-bold text-xs uppercase text-warm-sand">Ethical Sourcing</p>
              <p className="text-xs text-warm-ivory/90 mt-1">
                100% government-certified kiln-dried Sheesham & Acacia timber.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-soft-taupe leading-relaxed">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-espresso">
              Crafted for Everyday Indian Living
            </h2>
            <p>
              Too often, homeowners are forced to choose between disposable engineered wood furniture that sags within two monsoons, or exorbitant showroom pieces with 300% brand markups.
            </p>
            <p>
              We set out to build the alternative: true hardwood furniture crafted by master artisans who have perfected Indian woodworking over generations. Every sofa frame, dining tabletop, and platform bed is seasoned to withstand humidity variations across Mumbai, Delhi, Bengaluru, and Chennai.
            </p>
            <p>
              When you welcome a Rumea piece into your home, you are investing in furniture that will anchor your celebrations, family dinners, and quiet morning teas for decades.
            </p>
          </div>
        </section>

        {/* 3. Five Core Values */}
        <section className="mb-20 sm:mb-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-olive mb-2">
              OUR GUIDING PRINCIPLES
            </p>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-espresso">
              The Five Pillars of Rumea Home
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="bg-white p-6 rounded-2xl border border-warm-sand/50 shadow-card flex flex-col justify-between hover:border-warm-sand hover:shadow-warm transition-all duration-300"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-warm-sand/25 text-muted-olive flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-base text-espresso mb-2">
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

        {/* 4. Manufacturing & Sustainability Story */}
        <section className="bg-espresso text-warm-ivory rounded-3xl p-8 sm:p-14 lg:p-16 mb-20 sm:mb-28 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-warm-sand">
                WHERE IT IS MADE
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-warm-ivory tracking-tight">
                Rooted in Indian Timber & Artisanship
              </h2>
              <p className="text-soft-taupe text-sm sm:text-base leading-relaxed">
                Our manufacturing facilities bring together computer-aided precision sizing and hand-rubbed oil finishing. We employ seasoned generational woodcarvers who inspect every grain pattern before assembly.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-warm-sand/90 font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-warm-sand" />
                  <span>Kiln-drying down to 8–10% moisture content</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-warm-sand" />
                  <span>3-stage anti-termite and borer chemical immersion</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-warm-sand" />
                  <span>Zero volatile organic compound (VOC) food-grade finishes</span>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-warm-sand/20 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
                alt="Woodcraft inspection"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* 5. CTA Strip */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-warm-sand shadow-warm">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-espresso mb-3">
            Ready to Transform Your Home?
          </h2>
          <p className="text-soft-taupe text-sm max-w-lg mx-auto mb-8">
            Explore our collection of thoughtful solid wood furniture or chat directly with our design consultants on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              className="px-8 py-4 bg-espresso text-warm-ivory text-sm font-semibold rounded-xl shadow-warm hover:bg-espresso/90 transition-colors"
            >
              Explore the Collection &rarr;
            </Link>
            <WhatsAppButton
              variant="inline"
              message="Hi Rumea Home! I just read your brand story and would love to enquire about furniture for my home."
            >
              Chat on WhatsApp
            </WhatsAppButton>
          </div>
        </section>

      </div>
    </div>
  );
}
