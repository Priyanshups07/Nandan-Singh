import React from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../lib/useReveal';

/* ── Data ── */
const SERVICES = [
  { icon: 'monitor_weight', title: 'Weight Management', desc: 'Meal replacement shakes, specialized programs, and protein supplements for sustainable weight goals.', color: 'brand-green' },
  { icon: 'fitness_center', title: 'Fitness & Sports', desc: 'Pre and post-workout products, sports hydration, and endurance nutrition for active individuals.', color: 'brand-yellow' },
  { icon: 'favorite', title: 'Daily Nutrition', desc: 'Multivitamins, digestive/immune support, heart health, and supplements for all ages and genders.', color: 'brand-black' },
  { icon: 'bolt', title: 'Energy & Hydration', desc: 'Metabolism-support beverages, energy drinks, and teas for sustained daily vitality.', color: 'brand-green' },
  { icon: 'spa', title: 'Skin, Hair & Body', desc: 'Aloe-based personal care, skincare, and body care products for external radiance.', color: 'brand-yellow' },
  { icon: 'school', title: 'Education & Support', desc: 'Personalized nutrition recommendations, goal-setting support, articles, and wellness recipes.', color: 'brand-black' },
  { icon: 'work', title: 'Business Opportunity', desc: 'Direct-selling business opportunity with training, resources, and structured compensation.', color: 'brand-green' },
  { icon: 'verified', title: 'Quality Assurance', desc: 'Scientific research, multi-level quality testing, and strict ingredient traceability.', color: 'brand-yellow' },
];

const PROTOCOL = [
  { step: 1, title: 'Consult', desc: 'Deep-dive into your history, goals, and current performance metrics.' },
  { step: 2, title: 'Assess', desc: 'Comprehensive bio-analysis and lifestyle audit to find performance gaps.' },
  { step: 3, title: 'Design', desc: 'Custom-tailored protocol including nutrition, movement, and recovery.' },
  { step: 4, title: 'Transform', desc: 'Guided execution with continuous feedback and metric tracking.' },
];

const AUDIENCES = [
  { icon: 'corporate_fare', title: 'The C-Suite Executive', desc: 'Minimize decision fatigue and optimize mental clarity for high-stakes leadership.' },
  { icon: 'rocket_launch', title: 'The High-Growth Entrepreneur', desc: 'Build the stamina required to scale businesses without compromising personal health.' },
  { icon: 'gavel', title: 'The Senior Partner', desc: 'Sustain peak cognitive performance through demanding travel and client schedules.' },
];

const PROGRAMS = [
  { level: 'LEVEL 01', name: 'The Foundation', desc: 'A 12-week intensive designed to reset your metabolic baseline and establish core high-performance habits.', features: ['Personalized Meal Plans', 'Weekly Strategy Calls', 'Foundation Movement Protocol'], cta: 'Learn More', featured: false },
  { level: 'LEVEL 02', name: 'The Performance Peak', desc: 'Our flagship 6-month concierge program. Full biological optimization for the modern leader.', features: ['Everything in Foundation', 'Bloodwork Analysis & Bio-hacking', 'Unlimited Text/Email Access'], cta: 'Secure Your Spot', featured: true },
  { level: 'LEVEL 03', name: 'The Legacy Program', desc: 'Year-long maintenance and peak-performance partnership for sustained excellence.', features: ['Quarterly In-Person Intensives', 'Executive Health Concierge', 'Travel Nutrition Protocols'], cta: 'Apply Now', featured: false },
];

const RESULTS = [
  { name: 'Marcus Thorne', role: 'CEO, Thorne Ventures', quote: "Nandan's framework completely changed my approach to energy management. I've lost 22lbs and my afternoon cognitive slump is gone." },
  { name: 'Sarah Chen', role: 'Tech Founder', quote: "The sustainable habits I built here are the first ones that actually stuck during travel. The ROI on my health has been immeasurable." },
];

const FAQS = [
  { q: 'How much time will this require daily?', a: 'We design our protocols to integrate seamlessly with your life, not dominate it. Most clients find that they only need 15–30 minutes of intentional daily action to see significant results, as we prioritize high-leverage activities.' },
  { q: 'Do I need to follow a specific diet like Keto or Vegan?', a: 'No. We are ideology-neutral. We use your bio-markers, preferences, and lifestyle needs to build a nutrition protocol that works for YOU. Sustainability is our primary metric for success.' },
  { q: "How is this different from a personal trainer?", a: 'Personal trainers focus primarily on the hour you spend in the gym. We focus on the other 23 hours — sleep, nutrition, stress management, and hormonal health — which account for 90% of your actual performance results.' },
];

const HealthCoaching: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  useReveal();

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="max-w-container-max mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 items-center min-h-[750px] pt-32 pb-24 gap-gutter">
          {/* Content */}
          <div className="space-y-8 z-10">
            <div className="reveal-hidden" data-delay="0">
              <span className="inline-block px-5 py-2 bg-brand-green/10 text-brand-green font-label-lg text-label-lg rounded-full border border-brand-green/20 tracking-wider">
                ELITE HEALTH PERFORMANCE
              </span>
            </div>
            <h1 className="reveal-hidden font-display-lg text-display-lg-mobile md:text-display-lg text-brand-black leading-tight" data-delay="150">
              Transform Your Health Through <span className="text-brand-green">Sustainable</span> Coaching
            </h1>
            <p className="reveal-hidden font-body-lg text-body-lg text-on-surface-variant max-w-xl" data-delay="300">
              High-performance leadership starts with biological optimization. Bridge the gap between professional success and holistic vitality.
            </p>
            <div className="reveal-hidden flex flex-col sm:flex-row gap-4 pt-4" data-delay="450">
              <Link to="/booking" className="group min-h-[52px] px-8 bg-brand-black text-white font-label-lg text-label-lg rounded-xl hover:bg-brand-green transition-all duration-500 active:scale-95 flex items-center justify-center gap-2">
                Start Transformation
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
              </Link>
              <a href="#protocol" className="min-h-[52px] px-8 border-2 border-outline-variant text-on-surface font-label-lg text-label-lg rounded-xl hover:border-brand-green hover:text-brand-green transition-all duration-500 flex items-center justify-center">
                Our Philosophy
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative mt-12 lg:mt-0 reveal-scale" data-delay="300">
            <div className="relative aspect-[4/5] max-h-[600px] overflow-hidden rounded-[40px] border border-outline-variant ambient-shadow group">
              <img src="/assets/img/nandan.jpg" alt="Nandan Kumar Singh - Health Coaching" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
              <div className="absolute inset-0 border-[20px] border-surface/20 rounded-[40px] pointer-events-none" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl ambient-shadow border border-outline-variant">
              <div className="font-display-lg text-[48px] text-brand-green leading-none">15+</div>
              <div className="font-caption text-caption text-on-surface-variant uppercase tracking-widest mt-1">Years of Impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CORE DISCIPLINES ═══ */}
      <section className="py-section-padding-desktop max-md:py-section-padding-mobile bg-white">
        <div className="max-w-container-max mx-auto px-8">
          <div className="reveal-hidden text-center mb-20">
            <h2 className="font-display-lg text-display-lg-mobile md:text-[52px] text-brand-black mb-4">Wellness Pillars</h2>
            <div className="w-16 h-1 bg-brand-green mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s, i) => (
              <div key={s.title} className="reveal-hidden bg-white p-10 rounded-3xl border border-outline-variant ambient-shadow hover:shadow-2xl hover:-translate-y-2 hover:border-brand-green/30 transition-all duration-500 group flex flex-col" data-delay={String((i % 4) * 100)}>
                <div className={`mb-8 inline-flex p-4 rounded-2xl bg-${s.color}/10 text-${s.color} group-hover:bg-${s.color} group-hover:text-white transition-all duration-500 group-hover:scale-110 self-start`}>
                  <span className="material-symbols-outlined text-3xl">{s.icon}</span>
                </div>
                <h3 className="font-display-lg text-[26px] text-brand-black mb-4 group-hover:text-brand-green transition-colors duration-500">{s.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PERFORMANCE PROTOCOL ═══ */}
      <section id="protocol" className="bg-surface-container-low py-section-padding-desktop max-md:py-section-padding-mobile">
        <div className="max-w-container-max mx-auto px-8">
          <div className="reveal-hidden text-center mb-20">
            <h2 className="font-display-lg text-display-lg-mobile md:text-[52px] text-brand-black mb-6">The Performance Protocol</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto">
              A data-driven 4-step framework for lasting biological change.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-outline-variant -translate-y-1/2" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {PROTOCOL.map((p, i) => (
                <div key={p.step} className="reveal-hidden bg-white border border-outline-variant p-10 rounded-3xl text-center group hover:bg-brand-green hover:border-brand-green transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl" data-delay={String(i * 150)}>
                  <div className="w-14 h-14 bg-brand-green text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-8 group-hover:bg-white group-hover:text-brand-green transition-all duration-700">
                    {p.step}
                  </div>
                  <h4 className="font-display-lg text-[26px] text-brand-black mb-4 group-hover:text-white transition-colors duration-500">{p.title}</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant group-hover:text-white/80 transition-colors duration-500">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHO THIS IS FOR ═══ */}
      <section className="py-section-padding-desktop max-md:py-section-padding-mobile bg-white">
        <div className="max-w-container-max mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="reveal-hidden font-display-lg text-display-lg-mobile md:text-[48px] text-brand-black mb-8 leading-tight">
                Designed for Those Who <br />Demand <span className="text-brand-green">Excellence</span>
              </h2>
              <p className="reveal-hidden font-body-lg text-body-lg text-on-surface-variant mb-14" data-delay="100">
                I specialize in working with high-impact individuals whose time is their most valuable asset. My coaching isn't just about fitness — it's about ensuring your body can support the weight of your ambitions.
              </p>
              <div className="space-y-10">
                {AUDIENCES.map((a, i) => (
                  <div key={a.title} className="reveal-hidden flex gap-6 items-start" data-delay={String((i + 2) * 100)}>
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-brand-yellow/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-brand-black text-2xl">{a.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-display-lg text-[24px] text-brand-black mb-2">{a.title}</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-scale relative mt-12 lg:mt-0" data-delay="200">
              <div className="relative aspect-[4/5] max-h-[600px] overflow-hidden rounded-[40px] border border-outline-variant ambient-shadow group">
                <img src="/assets/img/nandan.jpg" alt="Executive health coaching" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
              </div>
              <div className="absolute -bottom-5 -right-5 w-full h-full border-2 border-brand-green rounded-[40px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ELITE COACHING TIERS ═══ */}
      <section className="bg-surface-container-low py-section-padding-desktop max-md:py-section-padding-mobile">
        <div className="max-w-container-max mx-auto px-8">
          <div className="reveal-hidden text-center mb-20">
            <h2 className="font-display-lg text-display-lg-mobile md:text-[52px] text-brand-black mb-6">Elite Coaching Tiers</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Selection-based programs for dedicated transformation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROGRAMS.map((p, i) => (
              <div key={p.name} className={`reveal-hidden relative bg-white p-12 rounded-3xl flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${p.featured ? 'border-2 border-brand-green shadow-2xl lg:scale-105 z-10' : 'border border-outline-variant ambient-shadow'}`} data-delay={String(i * 150)}>
                {p.featured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-green text-white px-6 py-2 font-label-lg text-label-lg rounded-full uppercase tracking-widest">Most Popular</div>
                )}
                <span className="font-label-lg text-label-lg text-brand-green tracking-widest mb-6 block">{p.level}</span>
                <h3 className="font-display-lg text-[28px] text-brand-black mb-4">{p.name}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-10">{p.desc}</p>
                <ul className="text-left space-y-4 mb-12 w-full font-body-md">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-brand-green text-xl">check</span>{f}
                    </li>
                  ))}
                </ul>
                <Link to="/booking" className={`w-full py-4 font-label-lg text-label-lg rounded-xl transition-all duration-500 mt-auto ${p.featured ? 'bg-brand-black text-white hover:bg-brand-green' : 'border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white'}`}>
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RESULTS ═══ */}
      <section className="py-section-padding-desktop max-md:py-section-padding-mobile bg-white">
        <div className="max-w-container-max mx-auto px-8">
          <div className="reveal-hidden flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display-lg text-display-lg-mobile md:text-[52px] text-brand-black mb-4">Quantifiable <span className="text-brand-green">Results</span></h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Real transformations from leaders who prioritized their health.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESULTS.map((r, i) => (
              <div key={r.name} className="reveal-hidden flex flex-col sm:flex-row gap-8 bg-surface-container-low p-10 rounded-3xl items-center hover:shadow-xl transition-all duration-500" data-delay={String(i * 150)}>
                <div className="w-full sm:w-1/3 aspect-square rounded-3xl bg-gradient-to-br from-brand-green/10 to-brand-yellow/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-brand-green text-6xl opacity-30">person</span>
                </div>
                <div className="w-full sm:w-2/3">
                  <div className="flex gap-0.5 mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className="material-symbols-outlined text-brand-yellow text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <blockquote className="font-display-lg text-[20px] text-brand-black mb-6 italic leading-snug">"{r.quote}"</blockquote>
                  <p className="font-label-lg text-label-lg text-brand-black">{r.name}</p>
                  <p className="font-caption text-caption text-on-surface-variant">{r.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DISCLAIMER ═══ */}
      <section className="py-16 bg-brand-yellow/10 border-y border-brand-yellow/20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <span className="material-symbols-outlined text-brand-yellow text-4xl mb-4">info</span>
          <h3 className="font-display-lg text-[24px] text-brand-black mb-4">Important Notice</h3>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            Our services are focused strictly on nutrition, fitness, and holistic wellness education. We do <strong>not</strong> provide medical diagnosis, treatment, or cures for diseases. None of our products or programs are intended to prescribe medicines or replace the advice of a licensed doctor or registered dietitian.
          </p>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-section-padding-desktop max-md:py-section-padding-mobile bg-surface">
        <div className="max-w-3xl mx-auto px-8">
          <div className="reveal-hidden text-center mb-20">
            <h2 className="font-display-lg text-display-lg-mobile md:text-[52px] text-brand-black mb-6">Common Questions</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Everything you need to know about starting your journey.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((f, i) => (
              <div key={i} className="reveal-hidden border border-outline-variant rounded-2xl overflow-hidden bg-white transition-all duration-500 hover:shadow-lg" data-delay={String(i * 100)}>
                <button className="w-full flex justify-between items-center px-8 py-7 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <h4 className="font-display-lg text-[22px] text-brand-black pr-4">{f.q}</h4>
                  <span className="material-symbols-outlined text-brand-green flex-shrink-0 transition-transform duration-500" style={{ transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>add</span>
                </button>
                <div className={`faq-content ${openFaq === i ? 'open' : ''} px-8`}>
                  <p className="pb-7 text-on-surface-variant font-body-md leading-relaxed">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="py-section-padding-desktop max-md:py-section-padding-mobile">
        <div className="max-w-container-max mx-auto px-8">
          <div className="reveal-hidden bg-brand-black text-white p-16 md:p-24 text-center relative overflow-hidden rounded-[40px] group">
            <div className="absolute inset-0 bg-brand-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-[1.5s]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(46,125,50,0.1),_transparent_70%)]" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-display-lg text-display-lg-mobile md:text-[52px] mb-8">Ready to Optimize Your <span className="text-brand-green">Biology</span>?</h2>
              <p className="font-body-lg text-body-lg text-white/70 mb-14">Stop guessing. Start measuring. Your elite health journey begins with a single conversation.</p>
              <Link to="/booking" className="group/btn inline-flex items-center gap-2 bg-brand-green text-white px-12 py-5 font-label-lg text-label-lg rounded-xl hover:bg-primary-container transition-all duration-500 active:scale-95">
                Book Your Strategy Call
                <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-1 transition-transform duration-300">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthCoaching;
