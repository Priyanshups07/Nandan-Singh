import React from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../lib/useReveal';

/* ── Data ── */
const PILLARS = [
  { icon: 'person_search', title: 'Personalized Wellness Guidance', desc: 'Understand clients\' specific wellness goals, match them with optimal daily nutrition products, and support sustainable lifestyle habit routines.', span: 'md:col-span-4', bg: 'bg-white' },
  { icon: 'monitor_weight', title: 'Weight Management Coaching', desc: 'Guide customers through structured weight programs, track progress with metrics, and provide the motivation and accountability required to succeed.', span: 'md:col-span-4', bg: 'bg-surface-container-low' },
  { icon: 'directions_run', title: 'Active Lifestyle Support', desc: 'Promote active living, educate clients on balanced nutrition principles, and support sustainable fitness journeys.', span: 'md:col-span-4', bg: 'bg-white' },
  { icon: 'groups', title: 'Community Wellness Activities', desc: 'Organize interactive wellness challenges, host educational workshops, and build high-trust supportive communities where members grow together.', span: 'md:col-span-6', bg: 'bg-surface-container-low' },
  { icon: 'rate_review', title: 'Customer Care & Follow-Up', desc: 'Conduct regular check-ins, monitor satisfaction levels, and dynamically adjust product recommendations as needs evolve.', span: 'md:col-span-6', bg: 'bg-white' },
  { icon: 'school', title: 'Nutrition Education', desc: 'Teach foundational healthy eating principles, proper hydration habits, and share actionable recipes and wellness tips for daily vitality.', span: 'md:col-span-4', bg: 'bg-surface-container-low' },
  { icon: 'corporate_fare', title: 'Entrepreneurship & Opportunity', desc: 'Start your own independent wellness business, earn retail profit through product sales, build and lead teams of associates, and develop vital leadership, communication, and business management capabilities.', span: 'md:col-span-8', bg: 'bg-white', highlight: true },
];

const FRAMEWORK = [
  { step: 1, title: 'Personal Mentorship', desc: 'One-on-one strategy to align your business goals with structured wellness systems.' },
  { step: 2, title: 'Team Building', desc: 'Learn how to support, train, and scale an active community of independent associates.' },
  { step: 3, title: 'Sustainable Systems', desc: 'Establish long-term business habits that avoid burnout and prioritize group vitality.' },
];

const CASE_STUDIES = [
  { badge: 'GROWTH', subtitle: 'Independent Practice', title: 'Scaling Wellness Outreach', desc: 'Expanded community challenges to over 200 active participants while building a network of 15+ sub-coaches in 12 months.', gradient: 'from-brand-green/15 to-brand-yellow/10' },
  { badge: 'LEADERSHIP', subtitle: 'Regional Team', title: 'Active Lifestyle Expansion', desc: 'Conducted corporate wellness workshops and community fitness programs reaching 500+ lives.', gradient: 'from-brand-yellow/15 to-brand-green/10' },
];

const FAQS = [
  { q: 'How does the independent wellness business work?', a: 'You start as an Independent Associate, helping customers achieve their wellness goals through nutrition coaching, lifestyle support, and product guidance. You earn income by selling products directly to customers and can also build a team of fellow coaches.' },
  { q: 'What training is provided to new associates?', a: 'We provide comprehensive mentorship covering nutrition education, client care, community building, and leadership skills. You get access to proven systems and resources to help you launch and manage your coaching practice.' },
  { q: 'Can I do this part-time alongside a full-time job?', a: 'Yes! The independent business opportunity is highly flexible. Many coaches start part-time, dedicating a few hours a week to build their client base and community before scaling further.' },
];

const BusinessCoaching: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  useReveal();

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="max-w-container-max mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 items-center min-h-[750px] pt-32 pb-24 gap-gutter">
          <div className="space-y-8 z-10">
            <div className="reveal-hidden" data-delay="0">
              <span className="inline-block px-5 py-2 bg-brand-yellow/10 text-brand-black font-label-lg text-label-lg rounded-full border border-brand-yellow/20 tracking-wider">
                15+ YEARS OF EXPERIENCE
              </span>
            </div>
            <h1 className="reveal-hidden font-display-lg text-display-lg-mobile md:text-display-lg text-brand-black leading-tight" data-delay="150">
              Build a Stronger Business and <span className="text-brand-green">Lead With Confidence.</span>
            </h1>
            <p className="reveal-hidden font-body-lg text-body-lg text-on-surface-variant max-w-xl" data-delay="300">
              High-performance coaching that bridges the gap between corporate leadership and holistic wellness for the modern executive.
            </p>
            <div className="reveal-hidden flex flex-col sm:flex-row gap-4 pt-4" data-delay="450">
              <Link to="/booking" className="group min-h-[56px] px-8 bg-brand-black text-white font-label-lg text-label-lg rounded-xl hover:bg-brand-green transition-all duration-500 active:scale-95 flex items-center justify-center gap-2">
                Book Appointment
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
              </Link>
              <a href="#services" className="min-h-[56px] px-8 border-2 border-outline-variant text-on-surface font-label-lg text-label-lg rounded-xl hover:border-brand-green hover:text-brand-green transition-all duration-500 flex items-center justify-center">
                View Programs
              </a>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0 reveal-scale" data-delay="300">
            <div className="relative aspect-[4/5] max-h-[600px] overflow-hidden rounded-[40px] border border-outline-variant ambient-shadow group">
              <img src="/assets/img/nandan.jpg" alt="Nandan Kumar Singh - Business Coaching" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
              <div className="absolute inset-0 border-[20px] border-surface/20 rounded-[40px] pointer-events-none" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl ambient-shadow border border-outline-variant">
              <div className="font-display-lg text-[48px] text-brand-green leading-none">150+</div>
              <div className="font-caption text-caption text-on-surface-variant uppercase tracking-widest mt-1">Leaders Coached</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WELLNESS COACHING & BUSINESS OPPORTUNITY PILLARS ═══ */}
      <section id="services" className="py-section-padding-desktop max-md:py-section-padding-mobile bg-white">
        <div className="max-w-container-max mx-auto px-8">
          <div className="reveal-hidden text-center mb-20">
            <h2 className="font-display-lg text-display-lg-mobile md:text-[52px] text-brand-black mb-6">Wellness Business Services</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Empowering individuals to adopt healthier lifestyles and build independent coaching practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {PILLARS.map((p, i) => (
              <div 
                key={p.title} 
                className={`reveal-hidden ${p.span} ${p.bg} p-12 rounded-3xl border border-outline-variant ambient-shadow hover:shadow-2xl hover:-translate-y-2 hover:border-brand-green/30 transition-all duration-500 group flex flex-col justify-between`} 
                data-delay={String(i * 100)}
              >
                <div>
                  <div className={`mb-8 inline-flex p-4 rounded-2xl ${p.highlight ? 'bg-brand-yellow/10 text-brand-yellow' : 'bg-brand-green/5 text-brand-green'} group-hover:bg-brand-green group-hover:text-white transition-all duration-500 group-hover:scale-110`}>
                    <span className="material-symbols-outlined text-3xl">{p.icon}</span>
                  </div>
                  <h3 className="font-display-lg text-[28px] text-brand-black mb-4 group-hover:text-brand-green transition-colors duration-500">{p.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">{p.desc}</p>
                </div>
                <div>
                  <span className="inline-flex items-center gap-2 font-label-lg text-label-lg text-brand-green group-hover:gap-3 transition-all duration-500">
                    Learn More <span className="material-symbols-outlined text-sm">north_east</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FRAMEWORK ═══ */}
      <section className="tonal-layer py-section-padding-desktop max-md:py-section-padding-mobile">
        <div className="max-w-container-max mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Visual */}
            <div className="reveal-scale relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-brand-green/20 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-outline-variant" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-28 h-28 bg-brand-black text-white rounded-full flex items-center justify-center mx-auto mb-4 ambient-shadow">
                    <span className="material-symbols-outlined text-5xl">center_focus_strong</span>
                  </div>
                  <p className="font-display-lg text-[24px] text-brand-black">THE CORE</p>
                </div>
              </div>
              {[
                { label: 'ALIGNMENT', pos: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' },
                { label: 'EXECUTION', pos: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2' },
                { label: 'CLARITY', pos: 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2' },
                { label: 'VITALITY', pos: 'right-0 top-1/2 translate-x-1/2 -translate-y-1/2' },
              ].map((node) => (
                <div key={node.label} className={`absolute ${node.pos} bg-white px-4 py-3 border border-outline-variant rounded-xl ambient-shadow z-10`}>
                  <span className="font-label-lg text-label-lg text-brand-black">{node.label}</span>
                </div>
              ))}
            </div>

            {/* Steps */}
            <div>
              <h2 className="reveal-hidden font-display-lg text-display-lg-mobile md:text-[48px] text-brand-black mb-8">
                The High-Performance <span className="text-brand-green">Framework</span>
              </h2>
              <p className="reveal-hidden font-body-lg text-body-lg text-on-surface-variant mb-14" data-delay="100">
                My methodology isn't just about business metrics. It's an architectural approach to your life as a leader, ensuring that as your business scales, your well-being and impact grow in parallel.
              </p>
              <div className="space-y-10">
                {FRAMEWORK.map((f, i) => (
                  <div key={f.step} className="reveal-hidden flex gap-6" data-delay={String((i + 2) * 100)}>
                    <div className="flex-shrink-0 w-14 h-14 bg-brand-green text-white rounded-2xl flex items-center justify-center font-bold text-lg">
                      {f.step}
                    </div>
                    <div>
                      <h4 className="font-display-lg text-[24px] text-brand-black mb-2">{f.title}</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CASE STUDIES ═══ */}
      <section className="py-section-padding-desktop max-md:py-section-padding-mobile bg-white">
        <div className="max-w-container-max mx-auto px-8">
          <div className="reveal-hidden flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display-lg text-display-lg-mobile md:text-[52px] text-brand-black mb-4">Proven <span className="text-brand-green">Results</span></h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Success isn't accidental. It's the result of disciplined focus and strategic coaching.</p>
            </div>
            <div className="text-brand-green font-display-lg text-[52px] leading-none">
              150+
              <span className="text-body-md uppercase block tracking-widest text-on-surface-variant mt-2 font-body-md">Leaders Coached</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {CASE_STUDIES.map((c, i) => (
              <div key={c.title} className="reveal-hidden group rounded-3xl border border-outline-variant overflow-hidden ambient-shadow hover:shadow-2xl hover:-translate-y-2 transition-all duration-500" data-delay={String(i * 150)}>
                <div className="aspect-[16/10] overflow-hidden">
                  <div className={`w-full h-full bg-gradient-to-br ${c.gradient} flex items-center justify-center transition-transform duration-[1.5s] group-hover:scale-110`}>
                    <span className="material-symbols-outlined text-brand-green/15 text-[120px]">trending_up</span>
                  </div>
                </div>
                <div className="p-12 bg-white">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="bg-brand-yellow/15 text-brand-black px-3 py-1 font-label-lg text-label-lg rounded-full">{c.badge}</span>
                    <span className="font-body-md text-body-md text-on-surface-variant">{c.subtitle}</span>
                  </div>
                  <h3 className="font-display-lg text-[28px] text-brand-black mb-4">{c.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-8">{c.desc}</p>
                  <div className="pt-6 border-t border-outline-variant flex justify-between items-center">
                    <span className="font-label-lg text-label-lg text-brand-green tracking-widest">READ CASE STUDY</span>
                    <span className="material-symbols-outlined text-brand-green group-hover:translate-x-2 transition-transform duration-500">arrow_forward</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COMPLIANCE & LEGAL NOTICE ═══ */}
      <section className="py-16 bg-surface-container-low border-y border-outline-variant/30">
        <div className="max-w-3xl mx-auto px-8">
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-amber-500/20 shadow-sm flex flex-col md:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 flex-shrink-0">
              <span className="material-symbols-outlined text-3xl">gavel</span>
            </div>
            <div>
              <h3 className="font-display-lg text-[20px] text-brand-black mb-3">Important Notice & Compliance</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                This independent business and coaching opportunity is focused on wellness education, lifestyle support, personal mentorship, and direct selling entrepreneurship.
              </p>
              <ul className="space-y-3 text-on-surface-variant font-body-sm text-[14px]">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-amber-600 text-sm mt-0.5">warning</span>
                  <span><strong>No Medical Claims:</strong> Wellness coaches do not diagnose medical conditions, treat or cure diseases, or prescribe medical treatments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-amber-600 text-sm mt-0.5">warning</span>
                  <span><strong>No Income Guarantees:</strong> Earnings in this independent direct selling business model depend entirely on the dedication, time, skill, and effort of the individual associate. Typical income details are available in official statements of average compensation.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-section-padding-desktop max-md:py-section-padding-mobile tonal-layer">
        <div className="max-w-3xl mx-auto px-8">
          <div className="reveal-hidden text-center mb-20">
            <h2 className="font-display-lg text-display-lg-mobile md:text-[52px] text-brand-black mb-6">Frequently Asked <span className="text-brand-green">Questions</span></h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Everything you need to know about our coaching engagements.</p>
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

      {/* ═══ CTA ═══ */}
      <section className="py-section-padding-desktop max-md:py-section-padding-mobile">
        <div className="max-w-container-max mx-auto px-8">
          <div className="reveal-hidden bg-brand-black text-white p-16 md:p-24 text-center relative overflow-hidden rounded-[40px] group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(46,125,50,0.1),_transparent_70%)]" />
            <div className="absolute inset-0 bg-brand-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-[1.5s]" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-display-lg text-display-lg-mobile md:text-[52px] mb-8">Accelerate Your <span className="text-brand-green">Growth</span></h2>
              <p className="font-body-lg text-body-lg text-white/70 mb-14">Ready to transform your leadership and scale your impact? Let's discuss your roadmap during a confidential consultation.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/booking" className="group/btn inline-flex items-center gap-2 bg-brand-green text-white px-12 py-5 font-label-lg text-label-lg rounded-xl hover:bg-primary-container transition-all duration-500 active:scale-95">
                  Book Appointment
                  <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-1 transition-transform duration-300">arrow_forward</span>
                </Link>
                <Link to="/contact" className="min-h-[56px] border border-white/30 text-white px-12 py-5 font-label-lg text-label-lg rounded-xl hover:bg-white/10 transition-all duration-500 flex items-center justify-center">
                  Contact Office
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessCoaching;
