import React, { useState, useRef } from 'react';
import { useReveal } from '../lib/useReveal';
import { supabase } from '../lib/supabase';

const Contact: React.FC = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  useReveal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const service_interest = formData.get('service_interest') as string;
      const message = formData.get('message') as string;
      const subscribe_newsletter = formData.get('subscribe_newsletter') === 'on';

      const { error } = await supabase.from('contacts').insert([
        { name, email, service_interest, message, subscribe_newsletter }
      ]);

      if (error) {
        console.error('Error inserting contact:', error);
        alert('Failed to send message. Please try again later.');
      } else {
        setSent(true);
        formRef.current.reset();
        setTimeout(() => setSent(false), 3000);
      }
    }
    
    setSending(false);
  };

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden pt-32 pb-20 px-8 max-w-container-max mx-auto">
        {/* Decorative */}
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-3xl pointer-events-none animate-float-slow" />

        <div className="md:w-2/3 relative z-10">
          <span className="reveal-hidden font-label-lg text-label-lg text-brand-green uppercase tracking-widest block mb-5" data-delay="0">
            Availability: Open for Q3 2025
          </span>
          <h1 className="reveal-hidden font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-tight text-brand-black" data-delay="100">
            Let's Connect
          </h1>
          <p className="reveal-hidden font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed" data-delay="200">
            Whether you're looking to redefine your leadership style or optimize your team's performance, let's start a conversation that matters.
          </p>
        </div>
      </section>

      {/* ═══ SPLIT LAYOUT: INFO & FORM ═══ */}
      <section className="pb-section-padding-desktop px-8 max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div className="space-y-10">
              {/* Email */}
              <div className="reveal-hidden group flex items-start gap-5" data-delay="0">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-500">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                </div>
                <div>
                  <h3 className="font-label-lg text-label-lg text-on-surface-variant mb-1.5 uppercase tracking-wider">Email Us</h3>
                  <a href="mailto:hello@nandankumar.com" className="font-body-lg text-body-lg font-semibold text-brand-black hover:text-brand-green transition-colors duration-300 cursor-pointer">
                    hello@nandankumar.com
                  </a>
                </div>
              </div>
              {/* Phone */}
              <div className="reveal-hidden group flex items-start gap-5" data-delay="100">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-500">
                  <span className="material-symbols-outlined text-2xl">call</span>
                </div>
                <div>
                  <h3 className="font-label-lg text-label-lg text-on-surface-variant mb-1.5 uppercase tracking-wider">Call Directly</h3>
                  <p className="font-body-lg text-body-lg font-semibold text-brand-black">+91 62321 38581</p>
                </div>
              </div>
              {/* Location */}
              <div className="reveal-hidden group flex items-start gap-5" data-delay="200">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-500">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <div>
                  <h3 className="font-label-lg text-label-lg text-on-surface-variant mb-1.5 uppercase tracking-wider">Visit Office</h3>
                  <p className="font-body-lg text-body-lg font-semibold text-brand-black leading-relaxed">
                    LIG 722, DD Nagar Rd, Sector 2<br />
                    DDU Nagar, Amanaka, Raipur, CG 492010
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="reveal-hidden pt-10 border-t border-outline-variant" data-delay="300">
              <h3 className="font-label-lg text-label-lg text-on-surface-variant mb-5 uppercase tracking-widest">
                Follow Performance Insights
              </h3>
              <div className="flex gap-4">
                {[
                  { icon: 'share', label: 'LinkedIn' },
                  { icon: 'link', label: 'Instagram' },
                  { icon: 'public', label: 'Website' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="w-12 h-12 flex items-center justify-center rounded-2xl border border-outline-variant text-on-surface-variant hover:bg-brand-green hover:border-brand-green hover:text-white transition-all duration-500"
                  >
                    <span className="material-symbols-outlined text-xl">{s.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Accent Card */}
            <div className="reveal-hidden bg-surface-container-high p-10 rounded-3xl mt-auto hidden lg:block" data-delay="400">
              <p className="font-display-lg text-headline-md text-on-surface italic mb-4 leading-snug" style={{ fontFamily: "'DM Serif Display', serif" }}>
                "Clarity is the ultimate sophisticated power."
              </p>
              <p className="font-label-lg text-label-lg text-brand-green">— Leadership Philosophy</p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 reveal-hidden" data-delay="150">
            <div className="bg-surface-container-lowest p-10 md:p-12 rounded-3xl ambient-shadow border border-outline-variant">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative">
                    <label className="block font-label-lg text-label-lg text-on-surface-variant mb-3 uppercase tracking-wider">Full Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full bg-transparent border-0 border-b-2 border-outline-variant py-3.5 px-0 focus:ring-0 focus:border-brand-green text-on-surface font-body-md placeholder:text-outline/50 transition-colors duration-500"
                    />
                  </div>
                  <div className="relative">
                    <label className="block font-label-lg text-label-lg text-on-surface-variant mb-3 uppercase tracking-wider">Corporate Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="w-full bg-transparent border-0 border-b-2 border-outline-variant py-3.5 px-0 focus:ring-0 focus:border-brand-green text-on-surface font-body-md placeholder:text-outline/50 transition-colors duration-500"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block font-label-lg text-label-lg text-on-surface-variant mb-3 uppercase tracking-wider">Service of Interest</label>
                  <select name="service_interest" className="w-full bg-transparent border-0 border-b-2 border-outline-variant py-3.5 px-0 focus:ring-0 focus:border-brand-green text-on-surface font-body-md appearance-none transition-colors duration-500">
                    <option>Executive Leadership Coaching</option>
                    <option>Holistic Team Wellness</option>
                    <option>Strategic Advisory</option>
                    <option>Speaking Engagement</option>
                  </select>
                </div>

                <div className="relative">
                  <label className="block font-label-lg text-label-lg text-on-surface-variant mb-3 uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Briefly describe your objectives..."
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant py-3.5 px-0 focus:ring-0 focus:border-brand-green text-on-surface font-body-md placeholder:text-outline/50 resize-none transition-colors duration-500"
                  />
                </div>

                <div className="pt-4 flex items-center justify-between flex-wrap gap-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input name="subscribe_newsletter" type="checkbox" className="w-5 h-5 rounded-lg border-outline text-brand-green focus:ring-brand-green" />
                    <span className="font-caption text-caption text-on-surface-variant">Sign up for monthly performance insights.</span>
                  </label>
                  <button
                    type="submit"
                    disabled={sending}
                    className="bg-brand-black text-white px-10 py-4 font-label-lg text-label-lg rounded-xl hover:bg-brand-green transition-all duration-500 group flex items-center gap-2 disabled:opacity-60 active:scale-95"
                  >
                    {sending ? (
                      <>
                        <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                        Sending...
                      </>
                    ) : sent ? (
                      <>
                        <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        Message Sent
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MAP SECTION ═══ */}
      <section className="w-full h-[500px] relative bg-surface-container">
        <iframe 
          src="https://maps.google.com/maps?q=LIG+722,+DD+Nagar+Rd,+Sector+2,+DDU+Nagar,+Amanaka,+Raipur,+CG+492010&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
