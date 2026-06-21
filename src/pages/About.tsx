import React from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../lib/useReveal';

/* ── Data ── */
const TIMELINE = [
  { year: '2024', title: 'Global Expansion', desc: 'Launched the "Vital Leader" retreat series across Europe and Asia, coaching 500+ Fortune 500 executives in sustainable performance.' },
  { year: '2018', title: 'The Pivot', desc: 'Transitioned from Senior VP of Operations to full-time Performance Coaching, founding Singh Executive Consulting.' },
  { year: '2012', title: 'Strategy Mastery', desc: 'Led a $200M organizational transformation for a global tech firm, refining the "Human Capital First" framework.' },
  { year: '2008', title: 'The Beginning', desc: 'Founded first venture while confronting the physical toll of entrepreneurial burnout — the catalyst for everything that followed.' },
];

const VALUES = [
  { icon: 'target', title: 'Mission', text: 'To equip leaders with the physiological and psychological tools needed to lead with clarity, compassion, and uncompromising energy.' },
  { icon: 'visibility', title: 'Vision', text: 'A corporate world where human vitality is recognized as the ultimate competitive advantage and the foundation of ethical leadership.' },
  { icon: 'verified_user', title: 'Core Values', text: 'Scientific Rigor · Radical Transparency · Holistic Balance' },
];

const STATS = [
  { num: '15+', label: 'Years Experience' },
  { num: '500+', label: 'Leaders Coached' },
  { num: '98%', label: 'Retention Rate' },
  { num: '12', label: 'Industry Awards' },
];

const CERTIFICATIONS = [
  { icon: 'workspace_premium', title: 'ICF Master Certified Coach', sub: 'Executive Leadership Focus' },
  { icon: 'psychology', title: 'Stanford Psychology', sub: 'Behavioral Science Graduate' },
  { icon: 'health_and_safety', title: 'National Board Health Coach', sub: 'NBC-HWC Certified' },
];

const About: React.FC = () => {
  useReveal();

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="hero-gradient overflow-hidden">
        <div className="max-w-container-max mx-auto px-8 pt-32 pb-section-padding-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            {/* Text */}
            <div className="md:col-span-6 space-y-8">
              <div className="reveal-hidden" data-delay="0">
                <span className="inline-block px-5 py-2 bg-brand-yellow/10 text-brand-black font-label-lg text-label-lg rounded-full border border-brand-yellow/20 tracking-wider">
                  EXECUTIVE PERFORMANCE COACH
                </span>
              </div>
              <h1 className="reveal-hidden font-display-lg text-display-lg-mobile md:text-display-lg text-brand-black leading-tight" data-delay="150">
                Meet Nandan <br className="hidden md:block" />Kumar Singh
              </h1>
              <p className="reveal-hidden font-body-lg text-body-lg text-on-surface-variant max-w-xl" data-delay="300">
                Bridging the gap between relentless corporate ambition and sustainable holistic wellness through 15+ years of strategic leadership and integrative health mastery.
              </p>
              <div className="reveal-hidden flex gap-4 pt-4" data-delay="450">
                <Link
                  to="/booking"
                  className="group min-h-[52px] px-8 bg-brand-black text-white font-label-lg text-label-lg rounded-xl hover:bg-brand-green transition-all duration-500 active:scale-95 flex items-center gap-2"
                >
                  Book a Session
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
                </Link>
                <Link
                  to="/contact"
                  className="min-h-[52px] px-8 border-2 border-outline-variant text-on-surface font-label-lg text-label-lg rounded-xl hover:border-brand-green hover:text-brand-green transition-all duration-500 flex items-center"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="md:col-span-6 mt-12 md:mt-0 reveal-scale" data-delay="300">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] border border-outline-variant ambient-shadow group">
                <img
                  src="/assets/img/nandan.jpg"
                  alt="Nandan Kumar Singh"
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 border-[20px] border-surface/20 rounded-[40px] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STORY ═══ */}
      <section className="tonal-layer py-section-padding-desktop max-md:py-section-padding-mobile">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="reveal-hidden font-display-lg text-display-lg-mobile md:text-[52px] text-brand-black mb-14 text-center">
            A Legacy of High Performance
          </h2>
          <div className="space-y-8 font-body-lg text-body-lg text-on-surface-variant leading-[1.85]">
            <p className="reveal-hidden" data-delay="0">
              With over 15 years at the intersection of corporate leadership and wellness engineering, I have dedicated my career to redefining what it means to be a "high performer." My journey didn't start in a meditation hall, but in the high-stakes boardrooms where decisions impact thousands.
            </p>
            <p className="reveal-hidden" data-delay="150">
              I witnessed firsthand the silent epidemic of burnout among the world's most brilliant minds. This sparked a decade-long quest to synthesize elite corporate strategy with cutting-edge physiological science. Today, I empower executives to reclaim their vitality without sacrificing their professional trajectory.
            </p>
            <p className="reveal-hidden" data-delay="300">
              My methodology is built on the principle of <strong className="text-brand-green">Executive Vitality</strong>: the state where professional excellence is fueled by — not at the expense of — physical and mental flourishing.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <section className="py-section-padding-desktop max-md:py-section-padding-mobile">
        <div className="max-w-container-max mx-auto px-8">
          <h2 className="reveal-hidden font-display-lg text-display-lg-mobile md:text-[52px] text-brand-black mb-20 text-center">
            Milestones & <span className="text-brand-green">Evolution</span>
          </h2>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-outline-variant" />

            <div className="space-y-20">
              {TIMELINE.map((item, i) => {
                const isEven = i % 2 === 0;
                return (
                  <div key={item.year} className="reveal-hidden relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-start" data-delay={String(i * 150)}>
                    {/* Dot */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-1 w-4 h-4 rounded-full bg-brand-green ring-4 ring-surface z-10" />

                    {/* Year */}
                    <div className={`hidden md:block ${isEven ? 'text-right pr-12' : 'order-2 pl-12'}`}>
                      <span className="font-display-lg text-[48px] text-primary/10 leading-none">{item.year}</span>
                    </div>

                    {/* Content */}
                    <div className={`pl-14 md:pl-0 ${isEven ? 'md:pl-12' : 'md:order-1 md:text-right md:pr-12'}`}>
                      <span className="md:hidden font-label-lg text-label-lg text-primary mb-1 block">{item.year}</span>
                      <h3 className="font-display-lg text-[28px] text-brand-black mb-3">{item.title}</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MISSION · VISION · VALUES ═══ */}
      <section className="tonal-layer py-section-padding-desktop max-md:py-section-padding-mobile">
        <div className="max-w-container-max mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="reveal-hidden bg-white p-12 rounded-3xl border border-outline-variant ambient-shadow hover:shadow-2xl hover:-translate-y-2 hover:border-brand-green/30 transition-all duration-500"
                data-delay={String(i * 150)}
              >
                <div className="mb-8 inline-flex items-center justify-center w-14 h-14 bg-brand-green/5 rounded-2xl">
                  <span className="material-symbols-outlined text-brand-green text-3xl">{v.icon}</span>
                </div>
                <h3 className="font-display-lg text-[28px] text-brand-black mb-4">{v.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS & CERTIFICATIONS ═══ */}
      <section className="py-section-padding-desktop max-md:py-section-padding-mobile">
        <div className="max-w-container-max mx-auto px-8">
          <h2 className="reveal-hidden font-display-lg text-display-lg-mobile md:text-[52px] text-brand-black mb-16 text-center">
            Certifications & <span className="text-brand-green">Global Impact</span>
          </h2>

          {/* Stats */}
          <div className="reveal-hidden grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {STATS.map((s, i) => (
              <div key={s.label} className="text-center p-10 bg-white border border-outline-variant rounded-3xl hover:border-brand-green/30 hover:shadow-lg transition-all duration-500" data-delay={String(i * 100)}>
                <div className="font-display-lg text-[48px] text-brand-green mb-2 leading-none">{s.num}</div>
                <p className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((c, i) => (
              <div key={c.title} className="reveal-hidden flex items-center gap-5 p-8 border border-outline-variant rounded-2xl hover:border-brand-green/30 hover:shadow-lg transition-all duration-500 bg-white" data-delay={String(i * 100)}>
                <span className="material-symbols-outlined text-brand-green text-4xl flex-shrink-0">{c.icon}</span>
                <div>
                  <p className="font-label-lg text-label-lg text-brand-black">{c.title}</p>
                  <p className="font-caption text-caption text-on-surface-variant">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="bg-brand-black text-white py-section-padding-desktop max-md:py-section-padding-mobile relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(46,125,50,0.08),_transparent_60%)]" />
        <div className="max-w-container-max mx-auto px-8 text-center relative z-10">
          <div className="reveal-hidden space-y-8">
            <h2 className="font-display-lg text-display-lg-mobile md:text-[52px] text-white">
              Ready to Elevate Your <span className="text-brand-green">Vitality</span>?
            </h2>
            <p className="font-body-lg text-body-lg text-outline-variant max-w-2xl mx-auto">
              Join an exclusive cohort of high-performing leaders who have redefined their path to success. Limited consultation slots available.
            </p>
            <div className="pt-8">
              <Link
                to="/booking"
                className="group inline-flex items-center gap-2 bg-brand-green text-white px-12 py-5 font-label-lg text-label-lg rounded-xl hover:bg-primary-container transition-all duration-500 shadow-xl active:scale-95"
              >
                Book a Consultation
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
