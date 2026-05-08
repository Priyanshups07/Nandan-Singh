import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="home-page" style={{ position: 'relative', overflow: 'hidden', background: '#f8fafc' }}>
      {/* Background Decorative Elements */}
      <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(0,66,37,0.03) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0 }}></div>
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: '40px', height: '40px', background: 'rgba(0,0,0,0.05)', borderRadius: '50%', zIndex: 0 }}></div>
      <div style={{ position: 'absolute', bottom: '20%', right: '15%', width: '60px', height: '60px', background: 'rgba(0,0,0,0.03)', borderRadius: '50%', zIndex: 0 }}></div>

      {/* Industry Standard Hero Section */}
      <section className="hero" style={{ padding: '80px 0', minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 1fr', alignItems: 'center', gap: 'var(--grid-gap)' }}>
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: '16px', color: 'var(--text)' }}>Hello, I'm</h3>
              <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.9, letterSpacing: '-0.02em', marginBottom: '32px', color: 'var(--primary)' }}>
                NANDAN
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '48px', maxWidth: '320px' }}>
                High-performance architect with 14 years experience optimizing human potential and business ecosystems.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ padding: '12px 24px', background: 'white', borderRadius: '100px', display: 'inline-block', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', fontSize: '0.9rem', width: 'fit-content' }}>
                  nandan@elevate.com
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  {['mail', 'public', 'share'].map((icon, i) => (
                    <motion.button 
                      key={i}
                      whileHover={{ scale: 1.1, background: 'var(--primary)', color: 'white' }}
                      style={{ width: '48px', height: '48px', borderRadius: '50%', border: 'none', background: 'white', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s ease' }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>{icon}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Center Image */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
            >
              <div style={{ width: '100%', maxWidth: '500px', position: 'relative', zIndex: 2 }}>
                <img src="/assets/img/nandan.jpg" alt="Nandan" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '0 0 300px 300px' }} />
              </div>
            </motion.div>

            {/* Right Content - Service Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
            >
              {[
                { title: 'Bio-Optimizer', icon: 'biotech', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=200' },
                { title: 'Revenue Architect', icon: 'account_balance', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=200' },
                { title: 'Legacy Strategist', icon: 'workspace_premium', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=200' }
              ].map((card, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: -10, scale: 1.02 }}
                  style={{ 
                    padding: '16px', 
                    background: 'white', 
                    borderRadius: '24px', 
                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    gap: '12px',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ width: '100%', height: '80px', borderRadius: '16px', overflow: 'hidden' }}>
                    <img src={card.img} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '0 8px 8px 8px' }}>
                    <span className="text-label" style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--primary)' }}>{card.title}</span>
                    <div style={{ width: '20px', height: '2px', background: 'var(--primary)', margin: '8px auto' }}></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: '120px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '100px' }}>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-label" 
              style={{ color: 'var(--secondary)', marginBottom: '16px', display: 'block', fontSize: '0.65rem' }}
            >
              OUR METHODOLOGY
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-h2"
            >
              Comprehensive Services for <br /><span className="italic">Visionary Leaders.</span>
            </motion.h2>
          </div>

          <div className="grid-responsive-2" style={{ gap: '32px' }}>
            {[
              { title: 'Executive Bio-Optimization', desc: 'Biological engineering for peak performance.', icon: 'biotech' },
              { title: 'Revenue Architecture', desc: 'Scaling business systems with surgical precision.', icon: 'account_balance' },
              { title: 'Legacy Mentorship', desc: '1-on-1 private advisory for sustainable impact.', icon: 'workspace_premium' },
              { title: 'Global Retreats', desc: 'Immersive deep-dive strategic experiences.', icon: 'travel_explore' }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card"
                style={{ padding: '48px', background: 'var(--bg)', borderRadius: '32px' }}
              >
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '32px' }}>
                  <span className="material-symbols-outlined">{service.icon}</span>
                </div>
                <h3 className="text-h3" style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '32px' }}>{service.desc}</p>
                <Link to="/services" className="text-label" style={{ fontSize: '0.6rem', color: 'var(--primary)', borderBottom: '1px solid var(--primary)' }}>VIEW DETAILS ↗</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section style={{ padding: '120px 0', background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ marginBottom: '80px' }}>
            <span className="text-label" style={{ color: 'var(--secondary)', marginBottom: '16px', display: 'block', fontSize: '0.65rem' }}>CURATED SOLUTIONS</span>
            <h2 className="text-h2">The Pillars of Your <br />Personal Evolution.</h2>
          </div>

          <div className="grid-responsive-2" style={{ gap: '60px' }}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="animate-fade-in-up"
            >
              <div style={{ borderRadius: '40px', overflow: 'hidden', aspectRatio: '16/10', marginBottom: '32px' }}>
                <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200" alt="Holistic Wellness" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="text-h3" style={{ fontSize: '1.2rem', color: 'var(--secondary)', opacity: 0.5, marginBottom: '16px', display: 'block' }}>01</span>
              <h3 className="text-h3" style={{ marginBottom: '24px' }}>Holistic Wellness</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '32px', maxWidth: '400px' }}>
                Precision biological engineering for the high-capacity leader. We optimize your sleep, nutrition, and neural clarity.
              </p>
              <Link to="/about" className="text-label" style={{ fontSize: '0.6rem', color: 'var(--primary)', borderBottom: '1px solid var(--primary)', paddingBottom: '4px' }}>EXPLORE THE BIOLOGY ↗</Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="animate-fade-in-up"
            >
              <div style={{ borderRadius: '40px', overflow: 'hidden', aspectRatio: '16/10', marginBottom: '32px' }}>
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" alt="Strategic Growth" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="text-h3" style={{ fontSize: '1.2rem', color: 'var(--secondary)', opacity: 0.5, marginBottom: '16px', display: 'block' }}>02</span>
              <h3 className="text-h3" style={{ marginBottom: '24px' }}>Strategic Growth</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '32px', maxWidth: '400px' }}>
                Revenue architecture and leadership mastery designed to build legacy without burnout.
              </p>
              <Link to="/connect" className="text-label" style={{ fontSize: '0.6rem', color: 'var(--primary)', borderBottom: '1px solid var(--primary)', paddingBottom: '4px' }}>EXPLORE THE STRATEGY ↗</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Large Quote */}
      <section style={{ padding: '160px 0', textAlign: 'center', background: '#fff' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span style={{ fontSize: '5rem', color: 'var(--secondary)', opacity: 0.2, fontFamily: 'var(--font-heading)', display: 'block', marginBottom: '-20px' }}>"</span>
            <h2 className="italic" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', maxWidth: '900px', margin: '0 auto 56px auto', lineHeight: 1.3, fontWeight: 400 }}>
              "The ROI wasn't just in the numbers. It was in the silence of my mind and the newfound strength of my physical state. <span className="font-light">Truly exceptional.</span>"
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" alt="Client" style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <p className="text-label" style={{ fontSize: '0.65rem' }}>JULIAN REED</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>CEO, VANTAGE MEDIA</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Card */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ padding: '0 24px 120px 24px' }}
      >
        <div className="container" style={{ 
          background: 'linear-gradient(rgba(0,31,17,0.8), rgba(0,31,17,0.8)), url("https://images.unsplash.com/photo-1449156001931-82830029951d?auto=format&fit=crop&q=80&w=2000") center/cover no-repeat', 
          borderRadius: '80px', 
          padding: '100px 80px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'white',
          flexWrap: 'wrap',
          gap: '40px'
        }}>
          <div style={{ maxWidth: '500px' }}>
            <p className="text-label" style={{ color: 'var(--secondary-light)', marginBottom: '16px' }}>BEGIN YOUR</p>
            <h2 className="text-h2" style={{ color: 'white', marginBottom: '24px' }}>Final Transformation.</h2>
            <p style={{ opacity: 0.6, fontSize: '1.1rem', fontWeight: 300 }}>
              Limited capacity for Q3. We accept clients based on vision and commitment to the process.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/scheduler" className="btn" style={{ background: 'var(--secondary-light)', color: 'white', padding: '24px 48px' }}>
              APPLY FOR CONSULTATION
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
