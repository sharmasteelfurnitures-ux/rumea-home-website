'use client';

import React, { useState } from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { buildWhatsAppUrl, getWhatsAppDisplayNumber } from '@/lib/whatsapp';
import { MessageCircle, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Product Enquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="bg-warm-ivory min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Contact Support' }]} className="mb-6" />

        {/* Header Intro */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-muted-olive/10 text-muted-olive text-xs font-bold uppercase tracking-widest rounded-full mb-3">
            CUSTOMER CARE & CONCIERGE
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-espresso tracking-tight">
            Same Values, A Better Tomorrow
          </h1>
          <p className="text-soft-taupe text-sm sm:text-base lg:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            We are a focused design and woodworking team and we personally attend to every customer message. Reach us on WhatsApp for real-time guidance.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Left Column: WhatsApp Concierge & Support Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary WhatsApp Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-sand shadow-warm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-muted-olive text-warm-ivory flex items-center justify-center shadow-md">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-espresso">
                    WhatsApp Concierge
                  </h3>
                  <p className="text-xs text-soft-taupe">Fastest response channel (under 2 hours)</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-soft-taupe leading-relaxed">
                Connect with our furniture design team for sizing recommendations, finish swatches, delivery timelines, or order tracking.
              </p>

              <div>
                <a
                  href={buildWhatsAppUrl("Hi Rumea Home! I'd like help with a furniture enquiry.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 bg-espresso text-warm-ivory font-semibold text-sm rounded-xl shadow hover:bg-espresso/90 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-warm-sand" />
                  <span>Start WhatsApp Chat &rarr;</span>
                </a>
                <p className="text-center text-[11px] text-soft-taupe mt-2">
                  Direct Line: {getWhatsAppDisplayNumber()}
                </p>
              </div>

              <div className="pt-4 border-t border-warm-sand/40 space-y-2.5 text-xs text-soft-taupe">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-olive" />
                  <span>Monday – Saturday: 9:00 AM – 8:00 PM IST</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-olive" />
                  <span>hello@rumeahome.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-olive" />
                  <span>Design Studios: Bengaluru & New Delhi, India</span>
                </div>
              </div>
            </div>

            {/* Guarantee Box */}
            <div className="bg-muted-olive/10 border border-muted-olive/20 rounded-2xl p-5 text-xs text-espresso/90 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-muted-olive flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold font-display text-sm text-espresso mb-0.5">
                  Direct Manufacturer Support
                </p>
                <p className="text-soft-taupe leading-relaxed">
                  Every product is fulfilled and backed directly by Rumea Home with genuine 5-year structural warranty documentation.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Email Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-warm-sand shadow-card">
            <h3 className="font-display font-bold text-xl text-espresso mb-2">
              Send Us an Email Message
            </h3>
            <p className="text-xs sm:text-sm text-soft-taupe mb-6">
              Prefer email? Fill in the details below and our team will get back to you within 1 business day.
            </p>

            {formSubmitted ? (
              <div className="p-8 bg-warm-ivory rounded-2xl border border-muted-olive/30 text-center space-y-3 animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-muted-olive mx-auto" />
                <h4 className="font-display font-bold text-lg text-espresso">
                  Thank You, {formData.name}!
                </h4>
                <p className="text-xs text-soft-taupe max-w-sm mx-auto">
                  Your message regarding &quot;{formData.subject}&quot; has been received. Our team will email you at {formData.email} shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-espresso text-warm-ivory text-xs font-semibold rounded-xl"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-espresso mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      className="w-full px-4 py-3 bg-warm-ivory/50 border border-warm-sand rounded-xl text-xs sm:text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-espresso focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-espresso mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. priya@example.com"
                      className="w-full px-4 py-3 bg-warm-ivory/50 border border-warm-sand rounded-xl text-xs sm:text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-espresso focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-espresso mb-1">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-warm-ivory/50 border border-warm-sand rounded-xl text-xs sm:text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-espresso focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-espresso mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-warm-ivory/50 border border-warm-sand rounded-xl text-xs sm:text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-espresso focus:bg-white"
                    >
                      <option value="Product Sizing Enquiry">Product Sizing Enquiry</option>
                      <option value="Custom Order / Bulk">Custom Order / Bulk Furniture</option>
                      <option value="Delivery Timeline Query">Delivery Timeline Query</option>
                      <option value="Warranty / Service">Warranty or Service Support</option>
                      <option value="General Feedback">General Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-espresso mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you are looking for (room dimensions, product names, or queries)..."
                    className="w-full px-4 py-3 bg-warm-ivory/50 border border-warm-sand rounded-xl text-xs sm:text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-espresso focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-espresso text-warm-ivory text-xs sm:text-sm font-semibold rounded-xl shadow-warm hover:bg-espresso/90 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
