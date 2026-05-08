import React from 'react';
import { Link } from 'react-router-dom';

const Testimonials: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState('ALL RESULTS');

  return (
    <div className="testimonials-page">
      {/* Industry Standard Header Section */}
      <section style={{ padding: '160px 0 60px 0', textAlign: 'center' }}>
        <div className="container">
          <span className="text-label" style={{ color: 'var(--secondary)', marginBottom: '24px', display: 'block', fontSize: '0.65rem' }}>THE SUCCESS ARCHIVE</span>
          <h1 className="text-h1" style={{ marginBottom: '32px' }}>Transformation in <span className="italic">Real Time.</span></h1>
          <p style={{ maxWidth: '600px', margin: '0 auto 48px auto', color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 300 }}>
            Discover how our high-performance ecosystem bridges the gap between professional excellence and holistic vitality through the stories of our global collective.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            {['ALL RESULTS', 'BUSINESS', 'WELLNESS', 'LIFESTYLE'].map((filter) => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '100px',
                  border: 'none',
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                  backgroundColor: activeFilter === filter ? 'var(--primary)' : 'transparent',
                  color: activeFilter === filter ? 'white' : 'var(--text-muted)',
                  transition: 'all 0.3s ease'
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Aggregate Performance Cards */}
      <section style={{ padding: '40px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div className="glass-card" style={{ padding: '60px', background: 'white' }}>
              <span className="text-label" style={{ fontSize: '0.6rem', opacity: 0.5, marginBottom: '24px', display: 'block' }}>AGGREGATE PERFORMANCE</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '24px' }}>
                <span style={{ fontSize: '4rem', fontWeight: 500, fontFamily: 'var(--font-heading)', color: 'var(--primary)' }}>+142%</span>
                <span className="text-label" style={{ fontSize: '0.65rem' }}>EFFICIENCY GAIN</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '400px' }}>
                Average increase in measurable executive focus and energy levels within the first 6 months of the ELEVATE program.
              </p>
            </div>
            
            <div className="glass-card" style={{ padding: '60px', background: 'var(--primary)', color: 'white' }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--secondary-light)', fontSize: '32px', marginBottom: '24px' }}>verified_user</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '24px' }}>
                <span style={{ fontSize: '4rem', fontWeight: 500, fontFamily: 'var(--font-heading)' }}>94%</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', maxWidth: '400px' }}>
                Client retention rate over 24 months, indicating long-term sustainable growth and metabolic stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
            <div>
              <span className="text-label" style={{ color: 'var(--secondary)', marginBottom: '16px', display: 'block', fontSize: '0.6rem' }}>VOICE OF THE COLLECTIVE</span>
              <h2 className="text-h2">Mastery in Motion</h2>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.1)', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <span className="material-symbols-outlined">west</span>
              </button>
              <button style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.1)', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <span className="material-symbols-outlined">east</span>
              </button>
            </div>
          </div>

          <div className="grid-responsive-3">
            {[
              { name: 'SARAH H.', role: 'CEO AT LUMINA', quote: 'A complete pivot in my perspective.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800' },
              { name: 'MARCUS T.', role: 'TECH FOUNDER', quote: 'Found the focus I never knew I lacked.', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800' },
              { name: 'ELENA R.', role: 'CREATIVE DIRECTOR', quote: 'Health and business finally aligned.', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800' }
            ].map((v, i) => (
              <div key={i} style={{ borderRadius: '40px', overflow: 'hidden', position: 'relative', aspectRatio: '3/4' }}>
                <img src={v.img} alt={v.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '40px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', cursor: 'pointer' }}>
                    <span className="material-symbols-outlined">play_arrow</span>
                  </div>
                  <h3 className="italic" style={{ color: 'white', fontSize: '1.5rem', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>"{v.quote}"</h3>
                  <div style={{ height: '1px', background: 'rgba(255,255,255,0.2)', marginBottom: '16px' }}></div>
                  <p className="text-label" style={{ color: 'white', fontSize: '0.6rem' }}>{v.name}, {v.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Studies */}
      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="text-label" style={{ color: 'var(--secondary)', marginBottom: '16px', display: 'block', fontSize: '0.6rem' }}>CASE STUDIES</span>
            <h2 className="text-h2">The Tangible Shift</h2>
          </div>

          {/* David Chen */}
          <div className="grid-responsive-2" style={{ alignItems: 'center', marginBottom: '160px' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '60px', overflow: 'hidden', aspectRatio: '1/1' }}>
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200" alt="David Chen" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', bottom: '-40px', right: '-40px', background: 'var(--primary)', padding: '40px', borderRadius: '32px', color: 'white', maxWidth: '300px' }}>
                <span className="text-label" style={{ fontSize: '0.55rem', opacity: 0.6, marginBottom: '12px', display: 'block' }}>QUARTERLY ROI</span>
                <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--secondary-light)', marginBottom: '8px' }}>+30%</div>
                <p style={{ fontSize: '0.8rem', opacity: 0.8, lineHeight: 1.6 }}>Sustainable revenue growth while reducing work hours by 28%.</p>
              </div>
            </div>
            <div>
              <h3 className="text-h2" style={{ fontSize: '3rem', marginBottom: '8px' }}>David Chen</h3>
              <p className="italic" style={{ color: 'var(--text-muted)', marginBottom: '48px', fontSize: '1.1rem' }}>Global Logistics Director</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '48px' }}>
                <div>
                  <span className="text-label" style={{ fontSize: '0.6rem', opacity: 0.5, marginBottom: '24px', display: 'block' }}>PRE-PROGRAM</span>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    <li>• Chronic fatigue & burnout</li>
                    <li>• 22% Body fat / Low energy</li>
                    <li>• Reactive leadership style</li>
                  </ul>
                </div>
                <div>
                  <span className="text-label" style={{ fontSize: '0.6rem', opacity: 0.5, marginBottom: '24px', display: 'block' }}>POST-PROGRAM</span>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 600 }}>
                    <li>• High sustained energy</li>
                    <li>• 14% Body fat / Peak fitness</li>
                    <li>• Strategic visionary focus</li>
                  </ul>
                </div>
              </div>
              
              <div style={{ padding: '32px', background: 'var(--bg)', borderRadius: '24px', borderLeft: '4px solid var(--secondary)' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: '24px', marginBottom: '16px' }}>format_quote</span>
                <p className="italic" style={{ color: 'var(--primary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                  "The metrics don't lie, but the feeling of waking up with clarity is the real win. I didn't just fix my health—I rebuilt my capacity for leadership."
                </p>
              </div>
            </div>
          </div>

          {/* Ananya Patel */}
          <div className="grid-responsive-2" style={{ alignItems: 'center' }}>
            <div>
              <h3 className="text-h2" style={{ fontSize: '3rem', marginBottom: '8px' }}>Ananya Patel</h3>
              <p className="italic" style={{ color: 'var(--text-muted)', marginBottom: '48px', fontSize: '1.1rem' }}>Investment Strategy Consultant</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '48px' }}>
                <div>
                  <span className="text-label" style={{ fontSize: '0.6rem', opacity: 0.5, marginBottom: '24px', display: 'block' }}>PRE-PROGRAM</span>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    <li>• 70hr work weeks / No balance</li>
                    <li>• Chronic high cortisol levels</li>
                    <li>• Blurred decision making</li>
                  </ul>
                </div>
                <div>
                  <span className="text-label" style={{ fontSize: '0.6rem', opacity: 0.5, marginBottom: '24px', display: 'block' }}>POST-PROGRAM</span>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 600 }}>
                    <li>• 35hr high-impact work weeks</li>
                    <li>• Daily meditation & presence</li>
                    <li>• 2x Client Portfolio ROI</li>
                  </ul>
                </div>
              </div>
              
              <div style={{ padding: '32px', background: 'var(--bg)', borderRadius: '24px', borderLeft: '4px solid var(--secondary)' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: '24px', marginBottom: '16px' }}>format_quote</span>
                <p className="italic" style={{ color: 'var(--primary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                  "ELEVATE taught me that performance isn't about hours; it's about state. I'm making double the impact in half the time, and my family has their mother back."
                </p>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '60px', overflow: 'hidden', aspectRatio: '1/1' }}>
                <img src="https://images.unsplash.com/photo-1598550874175-4d0fe4a2c90d?auto=format&fit=crop&q=80&w=1200" alt="Ananya Patel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', background: 'var(--primary)', padding: '40px', borderRadius: '32px', color: 'white', maxWidth: '300px' }}>
                <span className="text-label" style={{ fontSize: '0.55rem', opacity: 0.6, marginBottom: '12px', display: 'block' }}>LIFESTYLE SHIFT</span>
                <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--secondary-light)', marginBottom: '8px' }}>2X</div>
                <p style={{ fontSize: '0.8rem', opacity: 0.8, lineHeight: 1.6 }}>Personal time increased by 100% without compromising portfolio performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ padding: '100px 0', background: 'var(--primary)', color: 'white', marginTop: '100px' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '80px', 
            textAlign: 'center' 
          }}>
            <div>
              <div style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-heading)', color: 'var(--secondary-light)', marginBottom: '16px' }}>500+</div>
              <p className="text-label" style={{ fontSize: '0.65rem', opacity: 0.6 }}>EXECUTIVES TRANSFORMED</p>
            </div>
            <div>
              <div style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-heading)', color: 'var(--secondary-light)', marginBottom: '16px' }}>$250M+</div>
              <p className="text-label" style={{ fontSize: '0.65rem', opacity: 0.6 }}>CLIENT REVENUE GROWTH</p>
            </div>
            <div>
              <div style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-heading)', color: 'var(--secondary-light)', marginBottom: '16px' }}>15k+</div>
              <p className="text-label" style={{ fontSize: '0.65rem', opacity: 0.6 }}>HOURS OF COACHING</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collective Experience Gallery Section */}
      <section style={{ padding: '120px 0', background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="text-label" style={{ color: 'var(--secondary)', marginBottom: '16px', display: 'block', fontSize: '0.65rem' }}>BEYOND THE NUMBERS</span>
            <h2 className="text-h2">The Collective Experience</h2>
            <p style={{ maxWidth: '600px', margin: '24px auto 0 auto', color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 300 }}>
              Step inside our world. From high-stakes boardroom strategy to secluded mountain retreats—this is where transformation happens.
            </p>
          </div>

          {/* Experience Grid */}
          <div className="experience-grid">
            {/* Large Event Card */}
            <div style={{ gridColumn: 'span 2', gridRow: 'span 2', borderRadius: '40px', overflow: 'hidden', position: 'relative' }}>
              <img src="https://images.unsplash.com/photo-1540575861501-7c0f110f6f39?auto=format&fit=crop&q=80&w=1200" alt="Main Event" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,31,17,0.7), transparent)', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <span className="text-label" style={{ color: 'white', opacity: 0.7, marginBottom: '12px' }}>ANNUAL SUMMIT 2023</span>
                <h3 style={{ color: 'white', fontSize: '2rem', fontFamily: 'var(--font-heading)' }}>Surgical Leadership</h3>
              </div>
            </div>

            {/* Retreat Photo */}
            <div style={{ borderRadius: '40px', overflow: 'hidden', position: 'relative' }}>
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600" alt="Retreat" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: '24px', right: '24px', width: '40px', height: '40px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>photo_camera</span>
              </div>
            </div>

            {/* Workshop Video Placeholder */}
            <div style={{ borderRadius: '40px', overflow: 'hidden', position: 'relative' }}>
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600" alt="Workshop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,31,17,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--secondary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>play_arrow</span>
                </div>
              </div>
            </div>

            {/* Strategy Session */}
            <div style={{ gridColumn: 'span 2', borderRadius: '40px', overflow: 'hidden', position: 'relative' }}>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" alt="Strategy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: '24px', left: '24px', background: 'rgba(255,255,255,0.9)', padding: '12px 24px', borderRadius: '100px' }}>
                <p className="text-label" style={{ fontSize: '0.6rem', color: 'var(--primary)' }}>PRIVATE STRATEGY SESSIONS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '160px 0', textAlign: 'center' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '100px', background: 'white', borderRadius: '100px' }}>
            <h2 className="text-h2" style={{ marginBottom: '40px' }}>Ready to Author Your <span className="italic">Own Success Story?</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '56px', maxWidth: '600px', marginInline: 'auto' }}>
              Applications for our next cohort are now open. Experience the elite standard of transformation.
            </p>
            <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
              <Link to="/connect" className="btn btn-primary" style={{ padding: '24px 60px' }}>APPLY FOR COACHING</Link>
              <Link to="/about" className="btn btn-outline" style={{ padding: '24px 60px' }}>VIEW METHODOLOGY</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
