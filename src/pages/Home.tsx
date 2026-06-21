import React from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../lib/useReveal';
import heroImage from '../assets/nandan-hero.png';

/* ── Data ── */

const SUCCESS_STORIES = [
  { badge: 'TRANSFORMED', title: 'Corporate Vitality', subtitle: 'Tech Executive, 45', gradient: 'from-primary/20 to-surface-container' },
  { badge: 'LEADERSHIP SHIFT', title: 'Empowered Leadership', subtitle: 'Founder & CEO', gradient: 'from-secondary-container/20 to-surface-container' },
  { badge: 'TOTAL GROWTH', title: 'Sustainable Growth', subtitle: 'Global Director', gradient: 'from-primary/10 to-surface-container' },
];

const TESTIMONIALS = [
  { initials: 'JD', name: 'James Dalton', role: 'VP of Sales, TechCorp', text: "Nandan's approach to executive health changed my life. I've never felt more energized or focused in the boardroom." },
  { initials: 'SA', name: 'Sarah Ahmed', role: 'Managing Partner, Nexus Law', text: "A unique blend of empathy and rigorous business strategy. The 15 years of experience really show in every session." },
  { initials: 'MK', name: 'Marcus Knight', role: 'COO, Energy Systems', text: "I was skeptical of health coaching for leaders, but the data-driven systems Nandan uses are undeniable." },
];

const EVENTS = [
  { date: 'JUL 24\u201326, 2025 \u2022 VIRTUAL', title: 'High-Performance Summit' },
  { date: 'AUG 12, 2025 \u2022 VIRTUAL MASTERCLASS', title: 'Vitality & Vision Workshop' },
];

const Home: React.FC = () => {
  useReveal();

  return (
    <>
      {/* ═══ CINEMATIC HERO ═══ */}
      <section className="hero-gradient overflow-hidden relative">
        {/* Decorative floating shapes */}
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-brand-green/[0.03] rounded-full animate-float-slow pointer-events-none" />
        <div className="absolute bottom-32 left-[5%] w-40 h-40 bg-brand-yellow/[0.04] rounded-full animate-float pointer-events-none" />

        <div className="max-w-container-max mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 items-center min-h-[900px] py-32 gap-gutter">
          {/* Content — staggered entrance */}
          <div className="space-y-8 z-10">
            {/* Badge */}
            <div className="reveal-hidden" data-delay="0">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/20">
                <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
                <span className="font-label-lg text-label-lg text-brand-black tracking-wider">EXECUTIVE VITALITY COACHING</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="reveal-hidden font-display-lg text-display-lg-mobile md:text-display-lg text-brand-black leading-tight" data-delay="150">
              Transforming Health and Building <span className="text-brand-green">Success</span> for Over 15 Years.
            </h1>

            {/* Subtitle */}
            <p className="reveal-hidden font-body-lg text-body-lg text-on-surface-variant max-w-xl" data-delay="300">
              Helping individuals achieve better health, stronger leadership, and meaningful growth through proven coaching systems.
            </p>

            {/* CTAs */}
            <div className="reveal-hidden flex flex-col sm:flex-row gap-4 pt-4" data-delay="450">
              <Link
                to="/booking"
                className="group min-h-[56px] px-8 bg-brand-black text-white font-label-lg text-label-lg rounded-xl hover:bg-brand-green transition-all duration-500 active:scale-95 shadow-xl shadow-brand-black/10 text-center flex items-center justify-center gap-2"
              >
                Book Appointment
                <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
              </Link>
              <a
                href="#stories"
                className="min-h-[56px] px-8 border-2 border-brand-black text-brand-black font-label-lg text-label-lg rounded-xl hover:bg-brand-black hover:text-white transition-all duration-500 flex items-center justify-center gap-2 group"
              >
                Watch Success Stories
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform duration-300">play_arrow</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="reveal-hidden grid grid-cols-3 gap-8 pt-12 border-t border-outline-variant" data-delay="600">
              {[
                { num: '15+', label: 'Years Experience' },
                { num: '500+', label: 'Lives Impacted' },
                { num: '100+', label: 'Events Conducted' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display-lg text-[48px] md:text-[56px] text-brand-black leading-none">{s.num}</div>
                  <div className="font-caption text-caption text-on-surface-variant uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image — parallax depth */}
          <div className="relative h-[600px] lg:h-full reveal-scale" data-delay="300">
            <div className="absolute inset-0 bg-brand-green/5 rounded-[48px] translate-x-6 translate-y-6" />
            <div className="relative h-full w-full rounded-[48px] overflow-hidden border border-outline-variant ambient-shadow">
              <img
                src={heroImage}
                alt="Nandan Kumar Singh - High Performance Coach"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOLISTIC WELLNESS SOLUTIONS (INFINITE MARQUEE) ═══ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-brand-green/[0.03] rounded-full -translate-x-1/2 -translate-y-1/2 animate-float-slow pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-yellow/[0.03] rounded-full translate-x-1/3 translate-y-1/3 animate-float pointer-events-none" />

        <div className="relative z-10">
          <div className="max-w-container-max mx-auto px-8 text-center mb-16 reveal-hidden">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-green/10 mb-6">
              <span className="font-label-lg text-label-lg text-brand-green tracking-wider">WHAT WE OFFER</span>
            </div>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-brand-black mb-6">
              Holistic <span className="text-brand-green">Wellness Solutions</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Comprehensive pathways and science-backed support for your daily vitality.
            </p>
          </div>

          {/* Infinite Marquee Container */}
          <div className="w-full overflow-hidden py-4 relative">
            {/* Soft gradient fades on left & right edge for premium look */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

            <div className="animate-marquee flex gap-6">
              {/* Double the array for seamless infinite loop */}
              {[
                { icon: 'monitor_weight', title: 'Weight Management' },
                { icon: 'fitness_center', title: 'Sports Nutrition' },
                { icon: 'favorite', title: 'Daily Health' },
                { icon: 'bolt', title: 'Energy & Hydration' },
                { icon: 'spa', title: 'Body & Skin Care' },
                { icon: 'school', title: 'Nutrition Education' },
                { icon: 'work', title: 'Business Opportunity' },
                { icon: 'verified', title: 'Quality Assurance' },
                // Duplicate for looping
                { icon: 'monitor_weight', title: 'Weight Management' },
                { icon: 'fitness_center', title: 'Sports Nutrition' },
                { icon: 'favorite', title: 'Daily Health' },
                { icon: 'bolt', title: 'Energy & Hydration' },
                { icon: 'spa', title: 'Body & Skin Care' },
                { icon: 'school', title: 'Nutrition Education' },
                { icon: 'work', title: 'Business Opportunity' },
                { icon: 'verified', title: 'Quality Assurance' },
              ].map((card, i) => (
                <Link
                  key={`${card.title}-${i}`}
                  to="/health-coaching"
                  className="flex items-center gap-4 bg-surface-container-lowest py-5 px-8 rounded-2xl border border-outline-variant hover:border-brand-green hover:shadow-lg transition-all duration-300 min-w-[280px]"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                    <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                  </div>
                  <span className="font-display-lg text-[18px] text-brand-black tracking-wide font-semibold whitespace-nowrap">
                    {card.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CORE SERVICES (HEALTH, BUSINESS, EVENTS) ═══ */}
      <section className="py-20 bg-surface-container-low relative overflow-hidden border-b border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-8 relative z-10">
          <div className="text-center mb-16 reveal-hidden">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-yellow/10 mb-6">
              <span className="font-label-lg text-label-lg text-brand-black tracking-wider">CORE PILLARS</span>
            </div>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-brand-black mb-6">
              Pathways to <span className="text-brand-green">Excellence</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Choose your path to optimization, whether through health vitality, business growth, or immersive events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: 'health_and_safety', 
                title: 'Health Coaching', 
                desc: 'Holistic systems for physical vitality, personalized daily nutrition, and sustainable weight management programs.', 
                path: '/health-coaching',
                badge: 'VITALITY',
                color: 'brand-green'
              },
              { 
                icon: 'trending_up', 
                title: 'Business Coaching', 
                desc: 'Scalable leadership strategies, financial growth opportunities, and dedicated mentorship for modern entrepreneurs.', 
                path: '/business-coaching',
                badge: 'GROWTH',
                color: 'brand-yellow'
              },
              { 
                icon: 'event', 
                title: 'Events & Workshops', 
                desc: 'Connect with community, join virtual masterclasses, and participate in life-changing health and business seminars.', 
                path: '/events',
                badge: 'COMMUNITY',
                color: 'brand-black'
              }
            ].map((service, i) => (
              <Link
                key={service.title}
                to={service.path}
                className="reveal-hidden group relative bg-white p-10 rounded-3xl border border-outline-variant overflow-hidden transition-all duration-700 hover:border-brand-green hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-green/10 flex flex-col justify-between h-full animate-fade-in-up"
                data-delay={String(i * 150)}
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <span className="material-symbols-outlined text-4xl">{service.icon}</span>
                    </div>
                    <span className="px-4 py-1.5 bg-surface-container text-on-surface-variant font-label-lg text-label-lg rounded-full uppercase tracking-wider group-hover:bg-brand-green/15 group-hover:text-brand-green transition-colors duration-500">
                      {service.badge}
                    </span>
                  </div>
                  <h3 className="font-display-lg text-[28px] text-brand-black mb-4 group-hover:text-brand-green transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-brand-green font-label-lg tracking-widest">
                  DISCOVER NOW
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform duration-500">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ═══ SUCCESS STORIES ═══ */}
      <section id="stories" className="py-section-padding-desktop max-md:py-section-padding-mobile bg-white">
        <div className="max-w-container-max mx-auto px-8">
          <div className="reveal-hidden flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display-lg text-display-lg-mobile md:text-[52px] text-brand-black mb-6">
                Real <span className="text-brand-green">Transformations</span>
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Leaders who reclaimed their health and optimized their professional trajectory.
              </p>
            </div>
            <Link
              to="/contact"
              className="group px-8 py-4 border-2 border-brand-black font-label-lg text-label-lg rounded-xl hover:bg-brand-black hover:text-white transition-all duration-500 flex items-center gap-2"
            >
              View All Stories
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {SUCCESS_STORIES.map((s, i) => (
              <div key={s.title} className="reveal-hidden group cursor-pointer" data-delay={String(i * 150)}>
                <div className="relative h-[420px] rounded-3xl overflow-hidden mb-8 ambient-shadow transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <div className={`w-full h-full bg-gradient-to-br ${s.gradient} transition-transform duration-[1.5s] group-hover:scale-110`} />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/40 transition-all duration-700 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-5xl opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">play_circle</span>
                  </div>
                  <div className="absolute top-5 left-5">
                    <span className="px-4 py-1.5 bg-brand-yellow text-brand-black font-label-lg text-label-lg rounded-full">{s.badge}</span>
                  </div>
                </div>
                <h4 className="font-display-lg text-[28px] text-brand-black mb-1">{s.title}</h4>
                <p className="text-brand-green font-label-lg uppercase tracking-widest">{s.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section id="testimonials" className="py-section-padding-desktop max-md:py-section-padding-mobile bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-8">
          <div className="reveal-hidden text-center mb-20">
            <h2 className="font-display-lg text-display-lg-mobile md:text-[52px] text-brand-black mb-6">
              What Leaders <span className="text-brand-green">Say</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Global voices on the impact of Nandan's systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.name}
                className="reveal-hidden p-12 bg-white border border-outline-variant rounded-3xl flex flex-col justify-between h-full relative ambient-shadow hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                data-delay={String(i * 150)}
              >
                {/* Quote mark */}
                <span className="material-symbols-outlined text-brand-yellow text-6xl absolute -top-5 left-8 bg-white px-3" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                <p className="font-display-lg text-[22px] text-brand-black mb-10 leading-snug italic mt-4">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center text-white font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <h5 className="font-label-lg text-label-lg text-brand-black">{t.name}</h5>
                    <p className="font-caption text-caption text-on-surface-variant">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal-hidden mt-16 text-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 font-label-lg text-label-lg text-brand-green border-b-2 border-brand-green pb-1 hover:text-brand-black hover:border-brand-black transition-all duration-500"
            >
              Read More Testimonials
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ UPCOMING EVENTS ═══ */}
      <section className="py-section-padding-desktop max-md:py-section-padding-mobile bg-brand-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(46,125,50,0.08),_transparent_60%)]" />
        <div className="max-w-container-max mx-auto px-8 relative z-10">
          <div className="reveal-hidden flex justify-between items-center mb-20">
            <div>
              <h2 className="font-display-lg text-display-lg-mobile md:text-[52px]">
                Upcoming <span className="text-brand-green">Events</span>
              </h2>
            </div>
            <Link to="/events" className="group hidden md:inline-flex items-center gap-2 font-label-lg text-label-lg text-brand-yellow hover:text-white transition-colors duration-300">
              Explore Events
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform duration-300">north_east</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {EVENTS.map((e, i) => (
              <div
                key={e.title}
                className="reveal-hidden group relative aspect-video rounded-3xl overflow-hidden bg-inverse-surface cursor-pointer"
                data-delay={String(i * 150)}
              >
                <div className="w-full h-full bg-gradient-to-br from-brand-black via-inverse-surface to-primary/20 transition-transform duration-[1.5s] group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                <div className="absolute bottom-10 left-10">
                  <p className="text-brand-yellow font-label-lg text-label-lg mb-3 tracking-widest">{e.date}</p>
                  <h3 className="font-display-lg text-[32px]">{e.title}</h3>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/10 transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOME CONTACT ═══ */}
      <section className="py-section-padding-desktop max-md:py-section-padding-mobile bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-8">
          <div className="reveal-hidden flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="font-display-lg text-display-lg-mobile md:text-[52px] text-brand-black mb-6">
                Visit Our <span className="text-brand-green">Office</span>
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
                Located in the heart of Raipur, Chhattisgarh for accessible connectivity. We're open for strategic conversations and high-performance planning.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">
                    <span className="material-symbols-outlined text-xl">location_on</span>
                  </div>
                  <div>
                    <h3 className="font-label-lg text-label-lg text-on-surface-variant mb-1 uppercase tracking-wider">Address</h3>
                    <p className="font-body-lg text-body-lg font-semibold text-brand-black leading-relaxed">
                      LIG 722, DD Nagar Rd, Sector 2<br />
                      DDU Nagar, Amanaka, Raipur, CG 492010
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">
                    <span className="material-symbols-outlined text-xl">call</span>
                  </div>
                  <div>
                    <h3 className="font-label-lg text-label-lg text-on-surface-variant mb-1 uppercase tracking-wider">Phone</h3>
                    <p className="font-body-lg text-body-lg font-semibold text-brand-black">
                      +91 62321 38581
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 h-[400px] relative rounded-3xl overflow-hidden ambient-shadow border border-outline-variant bg-surface-container flex items-center justify-center">
              <iframe 
                src="https://maps.google.com/maps?q=LIG+722,+DD+Nagar+Rd,+Sector+2,+DDU+Nagar,+Amanaka,+Raipur,+CG+492010&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-[160px] max-md:py-[100px] bg-white relative overflow-hidden">
        {/* Soft decorative shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-green/[0.03] -skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-yellow/[0.04] rounded-full -translate-x-1/2 translate-y-1/2 animate-float-slow pointer-events-none" />

        <div className="max-w-container-max mx-auto px-8 relative z-10 text-center">
          <div className="reveal-hidden">
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-brand-black mb-8 leading-tight">
              Your Transformation Starts With <br /> <span className="text-brand-green">One Conversation.</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-14">
              Whether you're looking to optimize your physical health or scale your leadership capabilities, the journey begins today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/booking"
                className="group min-h-[64px] px-12 bg-brand-black text-white font-label-lg text-label-lg rounded-xl hover:bg-brand-green transition-all duration-500 shadow-xl shadow-brand-black/20 flex items-center justify-center gap-2 active:scale-95"
              >
                Book Appointment
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
              </Link>
              <Link
                to="/contact"
                className="min-h-[64px] px-12 border-2 border-brand-black text-brand-black font-label-lg text-label-lg rounded-xl hover:bg-brand-black hover:text-white transition-all duration-500 flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
