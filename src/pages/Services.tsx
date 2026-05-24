import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const wellnessServices = [
  { title: 'Weight Management', desc: 'Sustainable weight loss and muscle gain protocols optimized for your body type.', icon: 'fitness_center', color: '#004225' },
  { title: 'Digestive Health', desc: 'Gut microbiome optimization for enhanced nutrient absorption and energy.', icon: 'nutrition', color: '#004225' },
  { title: 'Stress & State Management', desc: 'Advanced techniques to master your internal state and eliminate burnout.', icon: 'psychology', color: '#004225' },
  { title: 'Mental Vitality', desc: 'Holistic support for mental clarity, focus, and emotional resilience.', icon: 'self_improvement', color: '#004225' },
];

const businessServices = [
  { title: 'The 20s Wealth Blueprint', desc: 'Accelerated financial strategies for ambitious students and young visionaries.', icon: 'rocket_launch', audience: 'Students / Young Adults' },
  { title: 'Second Income Architecture', desc: 'Building diversified revenue streams without compromising your 9-5 career.', icon: 'payments', audience: 'Working Professionals' },
  { title: 'Women in Enterprise', desc: 'Specialized business scaling for female founders and aspiring entrepreneurs.', icon: 'female', audience: 'Women Founders' },
  { title: 'Legacy Business Scale', desc: 'High-level systems for business owners to reclaim time while increasing ROI.', icon: 'account_balance', audience: 'Business Owners' },
];

const Services: React.FC = () => {
  return (
    <div className="services-page">
      {/* Industry Standard Hero */}
      <section style={{ padding: '160px 0 80px 0', textAlign: 'center', background: 'var(--bg)' }}>
        <div className="container">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-label" 
            style={{ color: 'var(--secondary)', marginBottom: '24px', display: 'block', fontSize: '0.65rem' }}
          >
            THE NANDAN SINGH FRAMEWORK
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-h1" 
            style={{ marginBottom: '32px' }}
          >
            Biological Excellence. <br /><span className="italic">Strategic Wealth.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.2rem', fontWeight: 300, lineHeight: 1.8 }}
          >
            A dual-track approach to high performance. We optimize the machine (you) and the mission (your business).
          </motion.p>
        </div>
      </section>

      {/* Wellness Section */}
      <section style={{ padding: '100px 0', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px' }}>
            <div>
              <span className="text-label" style={{ color: 'var(--secondary)', marginBottom: '16px', display: 'block', fontSize: '0.6rem' }}>01 — WELLNESS ECOSYSTEM</span>
              <h2 className="text-h2" style={{ fontSize: '3rem' }}>Biological Optimization</h2>
            </div>
            <p style={{ maxWidth: '400px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Non-medical wellness protocols designed to engineer your peak physical state and neural clarity.
            </p>
          </div>

          <div className="grid-responsive-2" style={{ gap: '32px' }}>
            {wellnessServices.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10, boxShadow: '0 40px 80px rgba(0,0,0,0.05)' }}
                style={{ padding: '48px', borderRadius: '40px', background: 'var(--bg)', position: 'relative', overflow: 'hidden', border: '1px solid rgba(0,66,37,0.05)' }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '32px' }}>
                  <span className="material-symbols-outlined">{service.icon}</span>
                </div>
                <h3 className="text-h3" style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>{service.desc}</p>
                
                {/* Decorative Element */}
                <div style={{ position: 'absolute', top: '32px', right: '32px', opacity: 0.1 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '64px' }}>eco</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section style={{ padding: '100px 0', background: 'var(--primary)', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px' }}>
            <div>
              <span className="text-label" style={{ color: 'var(--secondary-light)', marginBottom: '16px', display: 'block', fontSize: '0.6rem' }}>02 — STRATEGIC WEALTH</span>
              <h2 className="text-h2" style={{ fontSize: '3rem', color: 'white' }}>Revenue Architecture</h2>
            </div>
            <p style={{ maxWidth: '400px', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
              Specialized growth strategies for students, professionals, and owners to build sustainable wealth.
            </p>
          </div>

          <div className="grid-responsive-2" style={{ gap: '32px' }}>
            {businessServices.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02, background: 'rgba(255,255,255,0.05)' }}
                style={{ padding: '48px', borderRadius: '40px', border: '1px solid rgba(255,255,255,0.1)', position: 'relative', overflow: 'hidden' }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--secondary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '32px' }}>
                  <span className="material-symbols-outlined">{service.icon}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                  <h3 className="text-h3" style={{ fontSize: '1.5rem', color: 'white' }}>{service.title}</h3>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '32px' }}>{service.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--secondary-light)', fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.1em' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>group</span>
                  TARGET: {service.audience}
                </div>

                {/* Decorative Element */}
                <div style={{ position: 'absolute', top: '32px', right: '32px', opacity: 0.1, color: 'white' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '64px' }}>trending_up</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '120px 0', textAlign: 'center' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '100px', borderRadius: '80px', background: 'white', boxShadow: '0 50px 100px rgba(0,0,0,0.05)' }}>
            <h2 className="text-h2" style={{ marginBottom: '40px' }}>Join the <span className="italic">Elite Collective.</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '56px', maxWidth: '600px', marginInline: 'auto' }}>
              Whether you are optimizing your health or scaling your income, our professional mentorship provides the surgical precision you need.
            </p>
            <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/connect" className="btn btn-primary" style={{ padding: '20px 48px', display: 'inline-block' }}>APPLY FOR MENTORSHIP</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/about" className="btn btn-outline" style={{ padding: '20px 48px', display: 'inline-block' }}>VIEW METHODOLOGY</Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
