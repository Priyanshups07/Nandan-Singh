import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import CountdownTimer from '../components/CountdownTimer';

// ── Animated word-by-word title ──────────────────────────────────────────────
const AnimatedTitle: React.FC<{ text: string; className?: string; style?: React.CSSProperties; delay?: number }> = ({ text, className, style, delay = 0 }) => {
  const words = text.split(' ');
  return (
    <span className={className} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.25em', ...style }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 60, rotateX: -30 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.7, delay: delay + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'inline-block' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

// ── Typewriter for label line ────────────────────────────────────────────────
const Typewriter: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && <span style={{ opacity: Math.sin(Date.now() / 300) > 0 ? 1 : 0, borderRight: '2px solid currentColor' }}>&nbsp;</span>}
    </span>
  );
};

// ── Floating particle dot ────────────────────────────────────────────────────
const Particle: React.FC<{ x: string; y: string; size: number; delay: number; duration: number }> = ({ x, y, size, delay, duration }) => (
  <motion.div
    style={{ position: 'absolute', left: x, top: y, width: size, height: size, borderRadius: '50%', background: 'rgba(0,143,76,0.2)' }}
    animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
    transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
);

const particles = [
  { x: '10%', y: '20%', size: 6, delay: 0, duration: 4 },
  { x: '85%', y: '15%', size: 4, delay: 1, duration: 5 },
  { x: '70%', y: '70%', size: 8, delay: 0.5, duration: 3.5 },
  { x: '25%', y: '75%', size: 5, delay: 2, duration: 4.5 },
  { x: '55%', y: '10%', size: 3, delay: 1.5, duration: 6 },
  { x: '90%', y: '55%', size: 6, delay: 0.8, duration: 3.8 },
  { x: '5%', y: '55%', size: 4, delay: 2.5, duration: 4.2 },
  { x: '40%', y: '85%', size: 7, delay: 0.3, duration: 5.5 },
];

// ── Scrolling ticker tape ────────────────────────────────────────────────────
const tickerItems = [
  '🏆 Raipur\'s Biggest Wellness Event',
  '💰 ₹1–3 Lakhs/Month Second Income',
  '🌱 14+ Years of Wellness Expertise',
  '🎯 Only 269 Seats Available',
  '📅 13 & 14 June 2026',
  '📍 Pandit Dindayal Upadhyay Auditorium',
];

// ════════════════════════════════════════════════════════════════════════════
const Home: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div className="home-page" style={{ position: 'relative', overflow: 'hidden', background: '#f8fafc' }}>

      {/* ════ NEW HERO SECTION — Full-screen animated text-only ════ */}
      <section ref={heroRef} style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)', overflow: 'hidden' }}>

        {/* Animated gradient orbs */}
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', top: '-15%', left: '-10%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(0,232,122,0.15) 0%, transparent 65%)', borderRadius: '50%', zIndex: 0 }} />
        <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }} style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(0,66,37,0.1) 0%, transparent 65%)', borderRadius: '50%', zIndex: 0 }} />

        {/* Grid overlay texture */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px', zIndex: 0 }} />

        {/* Floating particles */}
        {particles.map((p, i) => <Particle key={i} {...p} />)}

        {/* Hero text content */}
        <motion.div style={{ y: heroY, opacity: heroOpacity, position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 clamp(20px, 5vw, 80px)', maxWidth: '1100px', width: '100%' }}>

          {/* Live badge */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(0,232,122,0.15)', border: '1px solid rgba(0,232,122,0.3)', padding: '10px 24px', borderRadius: '100px', marginBottom: '40px' }}>
            <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1.2, repeat: Infinity }} style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--secondary)' }} />
            <span style={{ color: 'var(--secondary)', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>
              <Typewriter text="Live Event Registration Open" delay={0.5} />
            </span>
          </motion.div>

          {/* Eyebrow label */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} style={{ marginBottom: '24px' }}>
            <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Presented by Nandan Singh · 14+ Years in Wellness Industry
            </span>
          </motion.div>

          {/* Main headline — word by word */}
          <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(2.8rem, 7vw, 6rem)', lineHeight: 1.05, marginBottom: '12px', letterSpacing: '-0.02em', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.25em' }}>
            <AnimatedTitle text="Raipur's" delay={0.6} style={{ color: 'var(--secondary)' }} />
            <AnimatedTitle text="Biggest" delay={0.7} style={{ color: 'var(--primary)' }} />
          </h1>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(2.8rem, 7vw, 6rem)', lineHeight: 1.05, marginBottom: '12px', letterSpacing: '-0.02em', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.25em' }}>
            <AnimatedTitle text="Wellness Business" delay={0.9} style={{ color: 'var(--primary)' }} />
          </h1>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(2.8rem, 7vw, 6rem)', lineHeight: 1.05, color: 'var(--primary)', marginBottom: '40px', letterSpacing: '-0.02em', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.25em' }}>
            <AnimatedTitle text="Event of 2026." delay={1.2} />
          </h1>

          {/* Subtitle */}
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.8 }} style={{ color: 'var(--text-muted)', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', lineHeight: 1.7, maxWidth: '680px', margin: '0 auto 56px auto', fontFamily: 'var(--font-body)' }}>
            The biggest wellness business opportunity of the year. Learn how to build a <strong style={{ color: 'var(--primary)' }}>₹1–3 lakh/month second income</strong> in the $7 Trillion global wellness economy — in just 2 days.
          </motion.p>

          {/* Stats row */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2.1 }} style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(24px, 5vw, 64px)', marginBottom: '64px', flexWrap: 'wrap' }}>
            {[
              { value: '14+', label: 'Years Experience' },
              { value: '300', label: 'Seats Only' },
              { value: '2', label: 'Power-Packed Days' },
              { value: '$7T', label: 'Wellness Economy' },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, color: 'var(--secondary)', fontFamily: 'var(--font-body)', lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '8px' }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Scroll arrow */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', cursor: 'pointer' }} onClick={() => document.getElementById('event-details')?.scrollIntoView({ behavior: 'smooth' })}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', fontWeight: 600, textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>Scroll to Explore</span>
              <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ════ TICKER TAPE ════ */}
      <div style={{ background: '#00e87a', padding: '14px 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'inline-flex', gap: '80px' }}
        >
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.95rem', fontFamily: 'var(--font-body)', letterSpacing: '0.05em' }}>{item}</span>
          ))}
        </motion.div>
      </div>

      {/* ════ EVENT DETAILS BLOCK — timer + badges + CTAs ════ */}
      <section id="event-details" style={{ padding: '80px 0', background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 800, margin: 0, letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>
              Raipur's Biggest Wellness Business Event
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ background: 'rgba(0,0,0,0.25)', padding: '40px 56px', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '36px', width: '100%', maxWidth: '760px' }}>

            {/* Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,59,48,0.2)', color: '#ff8a80', padding: '10px 20px', borderRadius: '100px', fontWeight: 700, fontFamily: 'var(--font-body)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>local_fire_department</span>
                Only 269 Seats Available
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(0,232,122,0.15)', color: '#00e87a', padding: '10px 20px', borderRadius: '100px', fontWeight: 700, fontFamily: 'var(--font-body)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>calendar_month</span>
                13 &amp; 14 June 2026
              </div>
            </div>

            {/* Timer */}
            <div>
              <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '20px', fontFamily: 'var(--font-body)' }}>
                Registrations Closing Soon
              </span>
              <CountdownTimer targetDate="2026-06-13T09:00:00" />
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link to="/booking" className="btn" style={{ padding: '18px 40px', background: '#00e87a', color: 'var(--primary)', fontWeight: 800, fontSize: '1rem', fontFamily: 'var(--font-body)', borderRadius: '100px' }}>
                BOOK YOUR SEAT
              </Link>
              <a href="#overview" className="btn" style={{ padding: '18px 40px', background: 'transparent', border: '2px solid rgba(255,255,255,0.3)', color: 'white', fontWeight: 700, fontSize: '1rem', fontFamily: 'var(--font-body)', borderRadius: '100px' }}>
                EXPLORE EVENT
              </a>
            </div>
          </motion.div>
        </div>
      </section>



      {/* ════ OVERVIEW & PILLARS ════ */}
      <section id="overview" style={{ padding: '120px 0', background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '800px', margin: '0 auto 80px auto' }}>
            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-label" style={{ color: 'var(--secondary)', marginBottom: '16px', display: 'block' }}>THE OPPORTUNITY</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-h2" style={{ marginBottom: '24px' }}>We are witnessing a monumental shift in the global economy.</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              Wellness Club Academy is a 2-day transformative summit designed to help individuals tap into the global $7 Trillion wellness economy. Build a profitable coaching career, protect your family's health, and establish a recurring second income stream.
            </motion.p>
          </div>
          <div className="grid-responsive-3" style={{ gap: '32px' }}>
            {[
              { title: 'HEALTH', desc: 'Learn wellness coaching to protect and optimize your personal and family\'s health.', icon: 'favorite' },
              { title: 'WEALTH', desc: 'Build a certified coaching business earning ₹1–3 lakhs per month in 6–12 months.', icon: 'account_balance_wallet' },
              { title: 'FREEDOM', desc: 'Establish your secondary stream of income without leaving your current job.', icon: 'public' },
            ].map((pillar, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -10 }} className="glass-card" style={{ padding: '48px 32px', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(0,66,37,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', margin: '0 auto 24px auto' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>{pillar.icon}</span>
                </div>
                <h3 className="text-h3" style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{pillar.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ SPEAKERS SECTION ════ */}
      <section style={{ padding: '120px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="text-label" style={{ color: 'var(--secondary)', marginBottom: '16px', display: 'block' }}>LEARN FROM EXPERTS</span>
            <h2 className="text-h2">The Wellness Leaders.</h2>
          </div>
          <div className="grid-responsive-3" style={{ gap: '40px', alignItems: 'start' }}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card" style={{ overflow: 'hidden', padding: 0 }}>
              <div style={{ height: '300px', width: '100%' }}><img src="/assets/img/speaker-vinod-savita.jpg" alt="Vinod Kumar & Savita" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} /></div>
              <div style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Vinod Kumar &amp; Savita</h3>
                <span className="text-label" style={{ color: 'var(--secondary)', display: 'block', marginBottom: '16px' }}>Guest Speakers</span>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Specializing in modern health coaching models and family wellness systems.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass-card" style={{ overflow: 'hidden', padding: 0, border: '2px solid var(--primary)' }}>
              <div style={{ height: '350px', width: '100%' }}><img src="/assets/img/nandan.jpg" alt="Nandan Singh" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
              <div style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Nandan Singh</h3>
                <span className="text-label" style={{ color: 'var(--primary)', display: 'block', marginBottom: '16px' }}>Host &amp; Lead Organizer</span>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>A visionary leader in the wellness business sector, guiding thousands to build recurring second incomes over 14+ years.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="glass-card" style={{ overflow: 'hidden', padding: 0 }}>
              <div style={{ height: '300px', width: '100%' }}><img src="/assets/img/speaker-imran.jpg" alt="Md Imran Uddin Khan" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} /></div>
              <div style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Md Imran Uddin Khan</h3>
                <span className="text-label" style={{ color: 'var(--secondary)', display: 'block', marginBottom: '16px' }}>Guest Speaker</span>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Mastering second income scaling and digital systems in the wellness space.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════ VENUE SECTION ════ */}
      <section style={{ padding: '120px 0', background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="text-label" style={{ color: 'var(--secondary)', marginBottom: '16px', display: 'block' }}>THE VENUE</span>
            <h2 className="text-h2">Pandit Dindayal Upadhyay Auditorium</h2>
          </div>
          <div className="glass-card" style={{ padding: 0, overflow: 'hidden', position: 'relative', borderRadius: '40px' }}>
            <img src="/assets/img/venue.jpg" alt="Pandit Dindayal Upadhyay Auditorium Raipur" style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '40px', background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
              <div>
                <h3 style={{ fontSize: '2rem', marginBottom: '8px' }}>Join Us In Raipur</h3>
                <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Pandit Dindayal Upadhyay Auditorium, Raipur</p>
              </div>
              <a href="https://maps.google.com/?q=Pandit+Dindayal+Upadhyay+Auditorium+Raipur" target="_blank" rel="noreferrer" className="btn" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'white', color: 'var(--primary)' }}>
                <span className="material-symbols-outlined">location_on</span>
                VIEW ON GOOGLE MAPS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════ AGENDA SECTION ════ */}
      <section style={{ padding: '120px 0', background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="text-label" style={{ color: 'var(--secondary)', marginBottom: '16px', display: 'block' }}>EVENT AGENDA</span>
            <h2 className="text-h2">The Summit Blueprint.</h2>
          </div>
          <div className="grid-responsive-2" style={{ gap: '60px' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '32px', color: 'var(--primary)', borderBottom: '2px solid rgba(0,66,37,0.1)', paddingBottom: '16px' }}>Day 1: Saturday, 13 June 2026</h3>
              <div style={{ position: 'relative', paddingLeft: '40px' }}>
                <div style={{ position: 'absolute', left: '11px', top: '0', bottom: '0', width: '2px', background: 'rgba(0,0,0,0.1)' }} />
                {[
                  { time: '09:00 AM – 01:00 PM', title: 'Health Optimization & Industry Overview', items: ['Tapping into the global $7 trillion wellness economy', 'How to protect and improve your family\'s health'] },
                  { time: '02:00 PM – 05:00 PM', title: 'Business Model & Income Systems', items: ['Blueprint to build a Wellness Club for recurring income', 'Earning ₹1–3 lakhs/month in 6–12 months'] },
                ].map((session, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} style={{ position: 'relative', marginBottom: '40px' }}>
                    <div style={{ position: 'absolute', left: '-40px', top: '8px', width: '24px', height: '24px', borderRadius: '50%', background: 'var(--primary)', border: '4px solid var(--bg)' }} />
                    <div className="glass-card" style={{ padding: '28px' }}>
                      <span className="text-label" style={{ color: 'var(--secondary)', display: 'block', marginBottom: '8px' }}>{session.time}</span>
                      <h4 style={{ fontSize: '1.05rem', marginBottom: '14px' }}>{session.title}</h4>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {session.items.map((item, j) => (
                          <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--secondary)', flexShrink: 0 }}>check_circle</span>{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '32px', color: 'var(--primary)', borderBottom: '2px solid rgba(0,66,37,0.1)', paddingBottom: '16px' }}>Day 2: Sunday, 14 June 2026</h3>
              <div style={{ position: 'relative', paddingLeft: '40px' }}>
                <div style={{ position: 'absolute', left: '11px', top: '0', bottom: '0', width: '2px', background: 'rgba(0,0,0,0.1)' }} />
                {[
                  { time: '09:00 AM – 01:00 PM', title: 'Client Traffic & Action Roadmap', items: ['Paid advertising strategy: Facebook & Instagram Ads', 'Audience targeting & client conversion framework'] },
                  { time: '02:00 PM – 05:00 PM', title: 'Graduation & VIP Networking', items: ['Interactive Q&A with industry experts', 'Official certificate distribution and closing ceremony'] },
                ].map((session, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} style={{ position: 'relative', marginBottom: '40px' }}>
                    <div style={{ position: 'absolute', left: '-40px', top: '8px', width: '24px', height: '24px', borderRadius: '50%', background: 'var(--primary)', border: '4px solid var(--bg)' }} />
                    <div className="glass-card" style={{ padding: '28px' }}>
                      <span className="text-label" style={{ color: 'var(--secondary)', display: 'block', marginBottom: '8px' }}>{session.time}</span>
                      <h4 style={{ fontSize: '1.05rem', marginBottom: '14px' }}>{session.title}</h4>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {session.items.map((item, j) => (
                          <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--secondary)', flexShrink: 0 }}>check_circle</span>{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ TESTIMONIALS ════ */}
      <section style={{ padding: '120px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="text-label" style={{ color: 'var(--secondary)', marginBottom: '16px', display: 'block' }}>SUCCESS STORIES</span>
            <h2 className="text-h2">Transformations That Speak.</h2>
          </div>
          <div className="grid-responsive-3" style={{ gap: '32px' }}>
            {[
              { name: 'Rahul Sharma', role: 'Corporate Professional', text: 'This academy changed my life. I learned how to balance my health while building a second income stream that now surpasses my corporate salary.' },
              { name: 'Priya Verma', role: 'Fitness Trainer', text: 'The systems taught by Nandan Singh are foolproof. Within 6 months, I scaled my online coaching to multiple lakhs per month.' },
              { name: 'Amit Desai', role: 'Entrepreneur', text: 'A completely premium experience. The knowledge shared on digital systems and family health protection is worth 10x the ticket price.' },
            ].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card" style={{ padding: '40px 32px', position: 'relative' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '48px', color: 'rgba(0,66,37,0.05)', position: 'absolute', top: '24px', right: '24px' }}>format_quote</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 600 }}>{t.name.charAt(0)}</div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', margin: 0 }}>{t.name}</h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--secondary)' }}>{t.role}</span>
                  </div>
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontStyle: 'italic' }}>"{t.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ FAQ ════ */}
      <section style={{ padding: '120px 0', background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="text-label" style={{ color: 'var(--secondary)', marginBottom: '16px', display: 'block' }}>GOT QUESTIONS?</span>
            <h2 className="text-h2">Frequently Asked Questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { q: 'Who can attend the Wellness Club Academy?', a: 'This event is for anyone looking to build a second income, improve their family\'s health, or start a career in the wellness coaching industry. No prior experience required.' },
              { q: 'Is the ticket refundable?', a: 'Due to the limited availability of 300 seats and high demand, tickets are non-refundable but can be transferred to another individual with prior notice.' },
              { q: 'Will food and accommodation be provided?', a: 'Lunch and high-tea will be provided during the event hours. Attendees are required to manage their own accommodation.' },
              { q: 'What should I bring?', a: 'Bring a notebook, pen, and an open mind ready to learn. VIP access attendees will receive special materials at the venue.' },
            ].map((faq, i) => (
              <details key={i} style={{ background: '#fff', padding: '24px 32px', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.05)', cursor: 'pointer' }}>
                <summary style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--primary)', outline: 'none' }}>{faq.q}</summary>
                <p style={{ marginTop: '16px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ════ FINAL CTA ════ */}
      <section style={{ padding: '120px 0', background: '#fff' }}>
        <div className="container">
          <div className="glass-card" style={{ background: 'var(--primary)', color: 'white', padding: '80px 40px', borderRadius: '40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at center, rgba(0,232,122,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
              <span className="text-label" style={{ color: '#00e87a', display: 'block', marginBottom: '16px' }}>WARNING: SEATS FILLING FAST</span>
              <h2 className="text-h2" style={{ color: 'white', marginBottom: '16px' }}>Only 269 Seats Available.</h2>
              <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '40px' }}>Join the most exclusive wellness business event of the year.</p>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '48px' }}>
                <CountdownTimer targetDate="2026-06-13T09:00:00" />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '40px' }}>
                <span style={{ fontSize: '2rem', textDecoration: 'line-through', opacity: 0.4 }}>₹4,999</span>
                <span style={{ fontSize: '3.5rem', fontWeight: 800, color: '#00e87a' }}>₹1,500</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center', marginBottom: '48px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.8)' }}>
                  <span className="material-symbols-outlined" style={{ color: '#00e87a' }}>calendar_month</span>
                  <span>13 &amp; 14 June 2026</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.8)' }}>
                  <span className="material-symbols-outlined" style={{ color: '#00e87a' }}>location_on</span>
                  <span>Pandit Dindayal Upadhyay Auditorium, Raipur</span>
                </div>
              </div>
              <Link to="/booking" className="btn" style={{ background: '#00e87a', color: 'var(--primary)', padding: '20px 56px', fontSize: '1.1rem', fontWeight: 800, width: '100%', maxWidth: '360px', borderRadius: '100px' }}>
                RESERVE MY SPOT NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
