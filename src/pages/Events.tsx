import React from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../lib/useReveal';

/* ── Data ── */
const MODALITIES = [
  {
    badge: 'SEMINARS',
    title: 'Strategic Leadership Seminars',
    desc: 'Intensive half-day sessions focused on organizational psychology, team dynamics, and high-impact decision making in uncertain environments.',
    cta: 'Explore Curriculum',
    span: 'md:col-span-8',
    bg: 'bg-white',
    icon: 'groups',
    dark: false,
  },
  {
    badge: 'WORKSHOPS',
    title: 'Focus & Flow',
    desc: 'Hands-on technical workshops teaching the art of deep work and mental stamina for executives.',
    cta: 'Learn More',
    span: 'md:col-span-4',
    bg: 'bg-surface-container-low',
    dark: false,
  },
  {
    badge: 'LEADERSHIP',
    title: 'Annual Summits',
    desc: 'Exclusive networking and growth events for the top 1% of visionaries in our coaching ecosystem.',
    cta: 'Request Invite',
    span: 'md:col-span-4',
    bg: 'bg-surface-container-low',
    dark: false,
  },
  {
    badge: 'WELLNESS',
    title: 'The Zen CEO Series',
    desc: 'Integrating holistic health practices into the corporate routine. Meditation, stress-response training, and physical vitality protocols.',
    cta: 'View Series',
    span: 'md:col-span-8',
    bg: 'bg-brand-black',
    icon: 'self_improvement',
    dark: true,
  },
];

const UPCOMING = [
  {
    day: '24', month: 'OCT',
    title: 'High-Performance Lab',
    location: 'New York City, NY',
    locationIcon: 'location_on',
    desc: 'A one-day masterclass on neuroscience-backed productivity hacks for executive-level management.',
    price: '$1,250',
  },
  {
    day: '08', month: 'NOV',
    title: 'Mindful Leadership Retreat',
    location: 'Zurich, Switzerland',
    locationIcon: 'location_on',
    desc: 'Join Nandan for a 3-day immersive retreat focusing on emotional intelligence and stress-resilience.',
    price: '$3,500',
  },
  {
    day: '15', month: 'DEC',
    title: 'Global Vision Webinar',
    location: 'Virtual Experience',
    locationIcon: 'videocam',
    desc: 'A digital keynote session for international leaders on the future of holistic organizational growth.',
    price: 'Free',
  },
];

const HIGHLIGHTS = [
  { title: 'London Keynote 2024', gradient: 'from-brand-green/20 to-brand-yellow/10', icon: 'forum', tall: true, wide: false },
  { title: 'Singapore Summit', gradient: 'from-brand-yellow/20 to-brand-green/10', icon: 'podium', tall: false, wide: true },
  { title: 'NYC Workshop Series', gradient: 'from-brand-green/10 to-surface-container', icon: 'groups', tall: false, wide: false },
  { title: 'Dubai Executive Retreat', gradient: 'from-brand-black/10 to-brand-green/10', icon: 'self_improvement', tall: true, wide: false },
  { title: 'Virtual Masterclass', gradient: 'from-brand-yellow/10 to-brand-green/20', icon: 'videocam', tall: false, wide: true },
];

const Events: React.FC = () => {
  const [formSent, setFormSent] = React.useState(false);
  useReveal();

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden hero-gradient">
        {/* Decorative shapes */}
        <div className="absolute top-20 right-[15%] w-72 h-72 bg-brand-green/5 rounded-full blur-3xl animate-float-slow pointer-events-none" />
        <div className="absolute bottom-10 left-[10%] w-56 h-56 bg-brand-yellow/5 rounded-full blur-3xl animate-float pointer-events-none" />

        <div className="max-w-container-max mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 items-center min-h-[700px] pt-32 pb-24 gap-12">
          {/* Content */}
          <div className="space-y-8 z-10">
            <span className="reveal-hidden inline-block px-5 py-2 bg-brand-yellow/10 text-brand-black font-label-lg text-label-lg rounded-full border border-brand-yellow/20" data-delay="0">
              LIVE EXPERIENCES
            </span>
            <h1 className="reveal-hidden font-display-lg text-display-lg-mobile md:text-display-lg text-brand-black leading-tight" data-delay="150">
              Events That <span className="text-brand-green">Inspire</span> Growth
            </h1>
            <p className="reveal-hidden font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed" data-delay="300">
              Bridging the gap between corporate excellence and holistic wellness through transformative live experiences.
            </p>
            <div className="reveal-hidden flex flex-col sm:flex-row gap-4 pt-4" data-delay="450">
              <a
                href="#schedule"
                className="min-h-[52px] px-8 bg-brand-black text-white font-label-lg text-label-lg rounded-xl hover:bg-brand-green transition-all duration-500 active:scale-95 flex items-center justify-center gap-2"
              >
                View Upcoming Schedule
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <Link
                to="/contact"
                className="min-h-[52px] px-8 border-2 border-outline-variant text-on-surface font-label-lg text-label-lg rounded-xl hover:border-brand-green hover:text-brand-green transition-all duration-500 flex items-center justify-center"
              >
                Book Nandan
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative mt-12 lg:mt-0 reveal-hidden" data-delay="200">
            <div className="relative aspect-[4/5] max-h-[600px] overflow-hidden rounded-[40px] border border-outline-variant ambient-shadow group">
              <img
                src="/assets/img/nandan.jpg"
                alt="Nandan Kumar Singh - Events & Workshops"
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
              />
              <div className="absolute inset-0 border-[16px] border-surface/20 rounded-[40px] pointer-events-none" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl ambient-shadow border border-outline-variant animate-float-slow">
              <div className="font-headline-lg text-headline-lg text-brand-green">100+</div>
              <div className="font-caption text-caption text-on-surface-variant uppercase tracking-wider">Events Conducted</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MODALITIES (Bento) ═══ */}
      <section className="py-section-padding-desktop max-md:py-section-padding-mobile bg-white">
        <div className="max-w-container-max mx-auto px-8">
          <div className="text-center mb-20 reveal-hidden">
            <h2 className="font-display-lg text-headline-lg text-brand-black mb-4">Transformative Modalities</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Designed for leaders who demand both high performance and deep internal clarity. Every session is a step towards a more integrated professional life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {MODALITIES.map((m, i) => (
              <div
                key={m.title}
                className={`reveal-hidden ${m.span} ${m.bg} p-12 rounded-3xl border border-outline-variant flex flex-col justify-between min-h-[340px] relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 ${m.dark ? 'text-white hover:border-brand-green/50' : 'ambient-shadow hover:shadow-2xl hover:border-brand-green/30'}`}
                data-delay={String(i * 120)}
              >
                {/* Background icon */}
                {m.icon && (
                  <span className={`material-symbols-outlined absolute -right-6 -bottom-6 text-[200px] opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-700 ${m.dark ? 'text-white' : 'text-brand-green'}`}>
                    {m.icon}
                  </span>
                )}
                <div className="relative z-10">
                  <span className={`inline-block px-4 py-1.5 font-label-lg text-label-lg rounded-full mb-6 ${m.dark ? 'bg-brand-green text-white' : 'bg-brand-yellow/15 text-brand-black'}`}>
                    {m.badge}
                  </span>
                  <h3 className={`font-headline-lg text-headline-md mb-4 ${m.dark ? 'text-white' : 'text-brand-black'}`}>{m.title}</h3>
                  <p className={`font-body-md text-body-md max-w-md leading-relaxed ${m.dark ? 'text-outline-variant' : 'text-on-surface-variant'}`}>{m.desc}</p>
                </div>
                <span className={`relative z-10 inline-flex items-center gap-2 font-label-lg text-label-lg group-hover:gap-4 transition-all duration-500 mt-8 ${m.dark ? 'text-primary-fixed' : 'text-brand-green'}`}>
                  {m.cta} <span className="material-symbols-outlined">arrow_forward</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ UPCOMING SCHEDULE ═══ */}
      <section id="schedule" className="py-section-padding-desktop max-md:py-section-padding-mobile bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 reveal-hidden">
            <div className="max-w-2xl">
              <h2 className="font-display-lg text-headline-lg text-brand-black mb-4">Upcoming Experience Schedule</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Limited seats available for all sessions to ensure deep individual engagement and personalized mentorship.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {UPCOMING.map((e, i) => (
              <div
                key={e.title}
                className="reveal-hidden bg-white rounded-3xl border border-outline-variant overflow-hidden group ambient-shadow hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                data-delay={String(i * 150)}
              >
                {/* Image placeholder with date badge */}
                <div className="h-52 overflow-hidden relative">
                  <div className="w-full h-full bg-gradient-to-br from-brand-green/10 to-brand-yellow/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-[1.5s]">
                    <span className="material-symbols-outlined text-brand-green/15 text-[80px]">event</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-white px-4 py-2.5 text-center shadow-lg rounded-2xl">
                    <span className="block font-bold text-headline-md leading-none text-brand-black">{e.day}</span>
                    <span className="block font-caption text-caption uppercase tracking-widest text-on-surface-variant mt-0.5">{e.month}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="font-headline-md text-headline-md text-brand-black mb-2">{e.title}</h4>
                  <p className="font-caption text-caption text-on-surface-variant mb-6 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">{e.locationIcon}</span>
                    {e.location}
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-8 line-clamp-3 leading-relaxed">{e.desc}</p>
                  <div className="flex justify-between items-center border-t border-outline-variant pt-6">
                    <span className="font-headline-md text-brand-green">{e.price}</span>
                    <Link
                      to="/booking"
                      className="bg-brand-black text-white px-6 py-3 font-label-lg text-label-lg rounded-xl hover:bg-brand-green transition-all duration-500 active:scale-95"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HIGHLIGHTS GALLERY ═══ */}
      <section className="py-section-padding-desktop max-md:py-section-padding-mobile bg-white">
        <div className="max-w-container-max mx-auto px-8">
          <div className="text-center mb-16 reveal-hidden">
            <h2 className="font-display-lg text-headline-lg text-brand-black mb-4">Moments of Impact</h2>
            <div className="w-16 h-1 bg-brand-green mx-auto rounded-full" />
          </div>

          {/* Masonry-style gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[220px]">
            {HIGHLIGHTS.map((h, i) => (
              <div
                key={h.title}
                className={`reveal-hidden group relative overflow-hidden rounded-3xl cursor-pointer ${h.tall ? 'row-span-2' : ''} ${h.wide ? 'col-span-2 max-md:col-span-1' : ''}`}
                data-delay={String(i * 100)}
              >
                <div className={`w-full h-full bg-gradient-to-br ${h.gradient} flex items-center justify-center transition-transform duration-[1.5s] group-hover:scale-110`}>
                  <span className="material-symbols-outlined text-brand-green/15 text-[90px]">{h.icon}</span>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-center gap-3">
                  <span className="material-symbols-outlined text-white text-5xl scale-50 group-hover:scale-100 transition-transform duration-700">play_circle</span>
                  <p className="font-label-lg text-label-lg text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-700">{h.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA — SPEAKING INQUIRY ═══ */}
      <section className="bg-brand-black text-white py-section-padding-desktop max-md:py-section-padding-mobile relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-10 right-[10%] w-80 h-80 bg-brand-green/5 rounded-full blur-3xl animate-float-slow pointer-events-none" />
        <div className="absolute bottom-10 left-[5%] w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl animate-float pointer-events-none" />

        <div className="max-w-container-max mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left — benefits */}
            <div className="reveal-hidden">
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-8 leading-tight">
                Invite Nandan <br />to Your Event
              </h2>
              <p className="font-body-lg text-body-lg text-outline-variant mb-14 max-w-lg leading-relaxed">
                Transform your next corporate gathering, summit, or retreat with an authoritative voice on leadership and wellness.
              </p>
              <div className="space-y-8">
                {[
                  { title: 'Customized Keynotes', desc: "Tailored specifically to your organization's current challenges and culture." },
                  { title: 'Interactive Breakouts', desc: 'High-engagement activities that foster real connection and behavioral change.' },
                  { title: 'VIP Networking', desc: 'Curated networking sessions that build lasting professional relationships.' },
                ].map((item, i) => (
                  <div key={item.title} className="flex items-start gap-5 reveal-hidden" data-delay={String(i * 120)}>
                    <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-brand-green">check_circle</span>
                    </div>
                    <div>
                      <h4 className="font-label-lg text-label-lg text-white mb-1">{item.title}</h4>
                      <p className="font-body-md text-body-md text-outline-variant leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — inquiry form */}
            <div className="reveal-hidden bg-white p-12 rounded-3xl text-on-surface" data-delay="150">
              <h3 className="font-headline-lg text-headline-md text-brand-black mb-8">Booking Inquiry</h3>
              {formSent ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-brand-green text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <p className="font-headline-md text-headline-md text-brand-black mb-2">Request Submitted</p>
                  <p className="font-body-md text-body-md text-on-surface-variant">Our team will reach out within 24 hours.</p>
                </div>
              ) : (
                <form
                  className="space-y-8"
                  onSubmit={(e) => { e.preventDefault(); setFormSent(true); }}
                >
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="w-full border-0 border-b-2 border-outline-variant py-3.5 px-0 focus:ring-0 focus:border-brand-green transition-colors duration-500 font-body-md bg-transparent placeholder:text-on-surface-variant/50"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full border-0 border-b-2 border-outline-variant py-3.5 px-0 focus:ring-0 focus:border-brand-green transition-colors duration-500 font-body-md bg-transparent placeholder:text-on-surface-variant/50"
                  />
                  <select
                    className="w-full border-0 border-b-2 border-outline-variant py-3.5 px-0 focus:ring-0 focus:border-brand-green transition-colors duration-500 font-body-md bg-transparent text-on-surface"
                  >
                    <option>Corporate Keynote</option>
                    <option>Workshop Series</option>
                    <option>Executive Retreat</option>
                    <option>Panel Discussion</option>
                  </select>
                  <textarea
                    placeholder="Tell us about your event..."
                    rows={4}
                    className="w-full border-0 border-b-2 border-outline-variant py-3.5 px-0 focus:ring-0 focus:border-brand-green transition-colors duration-500 font-body-md bg-transparent resize-none placeholder:text-on-surface-variant/50"
                  />
                  <button
                    type="submit"
                    className="w-full bg-brand-black text-white py-4 font-label-lg text-label-lg rounded-xl hover:bg-brand-green transition-all duration-500 active:scale-95"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
