'use client';

import React, { useState } from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import WhatsAppFloatingButton from '@/components/layout/WhatsAppFloatingButton';
import { buildWhatsAppUrl, getWhatsAppDisplayNumber } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';
import { MessageCircle, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck, Phone, Truck } from 'lucide-react';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Furniture Consultation',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      // Fallback: Open WhatsApp with pre-filled enquiry details
      const msg = `Hi Rumea Home! My name is ${formData.name}. Subject: ${formData.subject}. Message: ${formData.message}`;
      window.open(buildWhatsAppUrl(msg), '_blank');
      trackWhatsAppClick({ source: 'contact' });
    }
  };

  return (
    <div className="bg-warm-ivory min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Contact & Support' }]} className="mb-6" />

        {/* Header Intro */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-antique-gold block mb-2">
            CUSTOMER CARE &amp; EXPERIENCE STORE
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-espresso tracking-tight">
            Visit Our Experience Store &amp; Connect With Us
          </h1>
          <p className="text-soft-taupe text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            Our woodcraft designers and store team personally attend to every customer enquiry. Visit our Vasant Kunj Experience Store or reach us directly on WhatsApp &amp; Phone.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Left Column: Store Details & WhatsApp (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary WhatsApp & Phone Card */}
            <div className="bg-white rounded-card p-6 sm:p-8 border border-border-sand shadow-card space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-btn bg-[#25D366] text-white flex items-center justify-center shadow-md">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-espresso">
                    WhatsApp &amp; Phone Support
                  </h3>
                  <p className="text-xs text-soft-taupe">Fastest response channel (&lt; 15 mins)</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-soft-taupe leading-relaxed">
                Connect with our furniture design specialists for custom sizing, wood finish previews, order tracking, and Experience Store visit appointments.
              </p>

              <div>
                <a
                  href={buildWhatsAppUrl("Hi Rumea Home! I'd like help with a furniture enquiry.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick({ source: 'contact' })}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs rounded-btn shadow-md transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Start WhatsApp Conversation &rarr;</span>
                </a>
              </div>

              <div className="pt-4 border-t border-border-sand/60 space-y-3 text-xs text-soft-taupe font-medium">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-antique-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-espresso block mb-0.5">Experience Store Address:</span>
                    <span>F/F, 80, Masoodpur Dairy Farm, Masoodpur, Vasant Kunj, New Delhi - 110070, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-antique-gold flex-shrink-0" />
                  <span>Experience Store Hours: 10:00 AM – 9:00 PM (All Days)</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-antique-gold flex-shrink-0" />
                  <a href="tel:+917291962356" className="text-espresso font-bold hover:underline">
                    +91 72919 62356
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-antique-gold flex-shrink-0" />
                  <a href="mailto:rumeahome@gmail.com" className="text-espresso font-bold hover:underline">
                    rumeahome@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <Truck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="font-bold text-emerald-700">Free PAN India Delivery on All Orders</span>
                </div>
              </div>
            </div>

            {/* Reassurance Guarantee Box */}
            <div className="p-5 bg-warm-ivory rounded-card border border-border-sand space-y-2">
              <div className="flex items-center gap-2 text-espresso font-bold text-xs">
                <ShieldCheck className="w-4 h-4 text-antique-gold" />
                <span>Zero Pressure Woodcraft Guidance</span>
              </div>
              <p className="text-xs text-soft-taupe leading-relaxed">
                Whether you have questions on room floor plans or solid wood vs veneer differences, our team is here to help without sales pressure.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-card p-6 sm:p-8 border border-border-sand shadow-card">
            <h3 className="font-serif font-bold text-xl text-espresso mb-1">
              Send an Email Message
            </h3>
            <p className="text-xs text-soft-taupe mb-6">
              Fill out your details below and we will respond via email and WhatsApp within 24 hours.
            </p>

            {formSubmitted ? (
              <div className="p-8 text-center bg-warm-ivory rounded-card border border-border-sand space-y-3">
                <CheckCircle2 className="w-10 h-10 text-antique-gold mx-auto" />
                <h4 className="font-serif font-bold text-lg text-espresso">Thank you, {formData.name}!</h4>
                <p className="text-xs text-soft-taupe max-w-sm mx-auto">
                  Your message has been received. Our team has also initiated a WhatsApp chat to assist you promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-espresso mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 bg-warm-ivory border border-border-sand text-xs text-espresso rounded-btn focus:outline-none focus:ring-1 focus:ring-espresso"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-espresso mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rahul@gmail.com"
                      className="w-full px-3.5 py-2.5 bg-warm-ivory border border-border-sand text-xs text-espresso rounded-btn focus:outline-none focus:ring-1 focus:ring-espresso"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-espresso mb-1.5">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 7291962356"
                      className="w-full px-3.5 py-2.5 bg-warm-ivory border border-border-sand text-xs text-espresso rounded-btn focus:outline-none focus:ring-1 focus:ring-espresso"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-espresso mb-1.5">
                      Topic
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-warm-ivory border border-border-sand text-xs text-espresso rounded-btn focus:outline-none focus:ring-1 focus:ring-espresso cursor-pointer"
                    >
                      <option value="Furniture Consultation">Furniture Sizing Consultation</option>
                      <option value="Experience Store Visit">Vasant Kunj Experience Store Visit</option>
                      <option value="Delivery Timeline">Free PAN India Delivery Enquiry</option>
                      <option value="Custom Finish">Timber Finish Swatches</option>
                      <option value="Bulk Order">Commercial / Bulk Order</option>
                      <option value="Warranty Claim">5-Year Warranty Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-espresso mb-1.5">
                    Message Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the room, preferred timber finish, or dimensions you are considering..."
                    className="w-full px-3.5 py-2.5 bg-warm-ivory border border-border-sand text-xs text-espresso rounded-btn focus:outline-none focus:ring-1 focus:ring-espresso"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-espresso text-warm-ivory font-bold text-xs rounded-btn shadow-warm hover:bg-espresso/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-warm-sand" />
                  <span>Submit Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

      <WhatsAppFloatingButton />
    </div>
  );
}
