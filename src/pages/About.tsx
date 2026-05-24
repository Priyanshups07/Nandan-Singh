import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="about-page">
      {/* Full-Height Editorial Hero Section */}
      <section style={{ 
        minHeight: '100vh', 
        padding: '120px 0', 
        background: 'var(--bg)', 
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ textAlign: 'center', marginBottom: '100px' }}
            >
              <span className="text-label" style={{ color: 'var(--secondary)', marginBottom: '24px', display: 'block', fontSize: '0.65rem' }}>THE VISIONARY ARCHITECT</span>
              <h1 className="text-h1" style={{ marginBottom: '32px', fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', lineHeight: 1.0 }}>
                The Genesis of <br /><span className="italic">Excellence.</span>
              </h1>
              <div style={{ width: '1px', height: '60px', background: 'var(--secondary)', margin: '0 auto' }}></div>
            </motion.div>

            <div className="editorial-grid">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ position: 'relative' }}
              >
                <div style={{ borderRadius: '50px', overflow: 'hidden', boxShadow: '0 50px 100px rgba(0,0,0,0.1)', aspectRatio: '1/1' }}>
                  <img src="/assets/img/nandan.jpg" alt="Coach Nandan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '100px', height: '100px', background: 'var(--secondary-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', zIndex: 1, boxShadow: '0 20px 40px rgba(0,66,37,0.3)' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>history_edu</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-h3" style={{ fontSize: '2rem', marginBottom: '32px', lineHeight: 1.3 }}>A 14-Year Obsession with <br />Human Capacity.</h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.8, fontWeight: 300 }}>
                  My journey didn't begin in a boardroom, but in a laboratory. As a pharmaceutical expert, I became obsessed with the chemistry of energy and the biology of success. 
                </p>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '48px', lineHeight: 1.8, fontWeight: 300 }}>
                  Today, I bridge the gap between high-stakes revenue architecture and biological optimization for the world’s most ambitious leaders.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ width: '40px', height: '1px', background: 'var(--primary)' }}></div>
                  <p className="italic" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: 'var(--primary)' }}>Coach Nandan Singh</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section style={{ padding: '120px 0', background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <span className="material-symbols-outlined" style={{ color: 'var(--secondary-light)', fontSize: '48px', marginBottom: '40px', opacity: 0.5 }}>format_quote</span>
          <h2 className="italic" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', maxWidth: '900px', margin: '0 auto 56px auto', lineHeight: 1.3, fontWeight: 400 }}>
            "We don't just optimize performance; we curate the life that performance was meant to fund."
          </h2>
          <div style={{ width: '1px', height: '60px', background: 'var(--secondary-light)', margin: '0 auto 24px auto' }}></div>
          <p className="text-label" style={{ fontSize: '0.65rem', letterSpacing: '0.3em', opacity: 0.6 }}>MISSION & PHILOSOPHY</p>
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{ padding: '120px 0', background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '100px' }}>
            <span className="text-label" style={{ color: 'var(--secondary)', marginBottom: '16px', display: 'block', fontSize: '0.65rem' }}>OUR GENESIS</span>
            <h2 className="text-h2">The Parallel Journey</h2>
            <div style={{ width: '60px', height: '1px', background: 'var(--secondary)', margin: '24px auto' }}></div>
          </div>

          <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
            {/* Timeline Line */}
            <div style={{ position: 'absolute', left: '50%', top: '0', bottom: '0', width: '1px', background: 'rgba(0,0,0,0.1)', transform: 'translateX(-50%)' }}></div>

            {/* 2009 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center', marginBottom: '120px' }}>
              <div style={{ textAlign: 'right' }}>
                <span className="text-label" style={{ fontSize: '0.6rem', opacity: 0.5, marginBottom: '8px', display: 'block' }}>2009 — THE CRISIS</span>
                <h3 className="text-h3" style={{ fontSize: '1.5rem', marginBottom: '16px' }}>The Breaking Point</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>After three years in corporate consulting, my health collapsed. This was the catalyst for my deep dive into functional medicine and holistic lifestyle design.</p>
              </div>
              <div style={{ position: 'relative' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--secondary)', position: 'absolute', left: '-56px', top: '50%', transform: 'translateY(-50%)', border: '4px solid var(--bg)', zIndex: 10 }}></div>
                <div style={{ borderRadius: '32px', overflow: 'hidden', aspectRatio: '16/10' }}>
                  <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800" alt="Meditation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </div>

            {/* 2018 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center', marginBottom: '120px' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--secondary)', position: 'absolute', right: '-56px', top: '50%', transform: 'translateY(-50%)', border: '4px solid var(--bg)', zIndex: 10 }}></div>
                <div style={{ borderRadius: '32px', overflow: 'hidden', aspectRatio: '16/10' }}>
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" alt="Integration" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              <div style={{ textAlign: 'left' }}>
                <span className="text-label" style={{ fontSize: '0.6rem', opacity: 0.5, marginBottom: '8px', display: 'block' }}>2018 — THE INTEGRATION</span>
                <h3 className="text-h3" style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Merging Two Worlds</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>NANDAN SINGH was born from the realization that high-performance business strategy is hollow without a foundation of optimal health.</p>
              </div>
            </div>

            {/* 2023 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
              <div style={{ textAlign: 'right' }}>
                <span className="text-label" style={{ fontSize: '0.6rem', opacity: 0.5, marginBottom: '8px', display: 'block' }}>2023 — THE IMPACT</span>
                <h3 className="text-h3" style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Global Reach</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>Now serving over 200 high-net-worth individuals annually, our framework has become the gold standard for integrated success coaching.</p>
              </div>
              <div style={{ position: 'relative' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--secondary)', position: 'absolute', left: '-56px', top: '50%', transform: 'translateY(-50%)', border: '4px solid var(--bg)', zIndex: 10 }}></div>
                <div style={{ borderRadius: '32px', overflow: 'hidden', aspectRatio: '16/10' }}>
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Impact" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <div className="grid-responsive-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {[
              { number: '500+', label: 'EXECUTIVES TRANSFORMED', icon: 'groups' },
              { number: '15k+', label: 'HOURS COACHED', icon: 'monitoring' },
              { number: '24', label: 'GLOBAL RETREATS', icon: 'explore' },
              { number: '98%', label: 'SUCCESS RETENTION', icon: 'verified_user' },
            ].map((stat, i) => (
              <div key={i} className="glass-card" style={{ padding: '40px', textAlign: 'center', background: 'white' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', opacity: 0.5, marginBottom: '16px' }}>{stat.icon}</span>
                <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--primary)', marginBottom: '8px' }}>{stat.number}</div>
                <p className="text-label" style={{ fontSize: '0.6rem', opacity: 0.6 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '120px 24px' }}>
        <div className="container" style={{ background: 'white', borderRadius: '64px', padding: '100px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'var(--bg)', borderRadius: '50%', opacity: 0.5 }}></div>
          <h2 className="text-h2" style={{ marginBottom: '40px' }}>Ready to Write Your <br /><span className="italic">Next Chapter?</span></h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '56px', maxWidth: '600px', marginInline: 'auto' }}>
            Our process is exclusive and tailored. We select only 5 new transformation clients each quarter to ensure the depth of focus your journey deserves.
          </p>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
            <Link to="/connect" className="btn btn-primary" style={{ padding: '20px 48px' }}>START YOUR JOURNEY</Link>
            <Link to="/about" className="btn btn-outline" style={{ padding: '20px 48px' }}>VIEW OUR PROGRAMS</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
