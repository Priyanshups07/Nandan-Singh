import React from 'react';

const Connect: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    interest: 'health',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your application. Our concierge team will review your profile and reach out within 48 hours.');
  };

  return (
    <div className="connect-page">
      {/* Industry Standard Header */}
      <section style={{ padding: '160px 0 80px 0', textAlign: 'center' }}>
        <div className="container">
          <span className="text-label" style={{ color: 'var(--secondary)', marginBottom: '24px', display: 'block', fontSize: '0.65rem' }}>APPLICATION PORTAL</span>
          <h1 className="text-h1" style={{ marginBottom: '32px' }}>The Gateway to <br /><span className="italic">Elite Performance.</span></h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 300, lineHeight: 1.8 }}>
            For corporate inquiries, partnership discussions, or high-stakes mentorship applications, please utilize the formal channel below.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="animate-fade-in-up" style={{ padding: '0 0 120px 0' }}>
        <div className="container">
          <div className="grid-responsive-2" style={{ gap: '80px', alignItems: 'start' }}>
            <div>
              <div style={{ marginBottom: '60px' }}>
                <h2 className="text-h2" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Concierge Desk</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '48px', lineHeight: 1.8, fontSize: '1.1rem' }}>
                  Direct access for visionaries. Our concierge desk handles all corporate inquiries and partnership developments.
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
                  {[
                    { label: 'DIRECT EMAIL', value: 'concierge@elevate.com', icon: 'alternate_email' },
                    { label: 'HQ LOCATION', value: 'Raipur, Chhattisgarh, India', icon: 'map' },
                    { label: 'OPERATING HOURS', value: '10:00 AM — 08:00 PM IST', icon: 'schedule' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '24px', alignItems: 'center', padding: '32px', background: 'white', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                      <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)' }}>
                        <span className="material-symbols-outlined">{item.icon}</span>
                      </div>
                      <div>
                        <p className="text-label" style={{ fontSize: '0.55rem', opacity: 0.5, marginBottom: '4px' }}>{item.label}</p>
                        <p style={{ fontWeight: 700, fontSize: '1rem' }}>{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '60px', background: 'white', borderRadius: '48px', boxShadow: '0 40px 100px rgba(0,0,0,0.05)' }}>
              <h3 className="text-h3" style={{ marginBottom: '40px', fontSize: '1.75rem' }}>Mentorship Application</h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div className="grid-responsive-2" style={{ gap: '24px' }}>
                  <div>
                    <label className="text-label" style={{ fontSize: '0.55rem', opacity: 0.5, marginBottom: '12px', display: 'block' }}>FULL NAME</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Your full name"
                      style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', background: 'var(--bg)', outline: 'none' }}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-label" style={{ fontSize: '0.55rem', opacity: 0.5, marginBottom: '12px', display: 'block' }}>ROLE</label>
                    <input 
                      type="text" 
                      required
                      placeholder="CEO / Founder"
                      style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', background: 'var(--bg)', outline: 'none' }}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-label" style={{ fontSize: '0.55rem', opacity: 0.5, marginBottom: '12px', display: 'block' }}>EMAIL ADDRESS</label>
                  <input 
                    type="email" 
                    required
                    placeholder="email@company.com"
                    style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', background: 'var(--bg)', outline: 'none' }}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-label" style={{ fontSize: '0.55rem', opacity: 0.5, marginBottom: '12px', display: 'block' }}>VISION STATEMENT</label>
                  <textarea 
                    rows={5}
                    placeholder="Describe your current status and future vision..."
                    style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', background: 'var(--bg)', outline: 'none', resize: 'none' }}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '24px' }}>SEND APPLICATION</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ padding: '0 0 120px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="text-label" style={{ color: 'var(--secondary)', marginBottom: '16px', display: 'block', fontSize: '0.6rem' }}>LOCATION</span>
            <h2 className="text-h2" style={{ fontSize: '2.5rem' }}>Global Headquarters</h2>
          </div>
          <div style={{ borderRadius: '60px', overflow: 'hidden', height: '500px', width: '100%', boxShadow: '0 40px 100px rgba(0,0,0,0.1)' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d118983.844394931!2d81.5471394!3d21.2508903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda2395c08bb%3A0x38e6406c60f5edad!2sRaipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1715185000000!5m2!1sen!2sin" 
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Physical HQ / Map Section */}
      <section style={{ padding: '0 0 120px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="text-label" style={{ color: 'var(--secondary)', marginBottom: '16px', display: 'block', fontSize: '0.6rem' }}>OUR HEADQUARTERS</span>
            <h2 className="text-h2">Visit the Advisory Lab</h2>
          </div>
          <div style={{ 
            width: '100%', 
            height: '450px', 
            borderRadius: 'var(--radius-lg)', 
            overflow: 'hidden', 
            boxShadow: '0 40px 80px rgba(0,0,0,0.05)',
            border: '1px solid rgba(0,66,37,0.1)'
          }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.914389445101!2d81.5947321115858!3d21.235235880388487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd1765c40001%3A0xc31248083a2164f9!2sLIG%20722%2C%20DD%20Nagar%20Rd%2C%20Sector%202%2C%20DDU%20Nagar%2C%20Amanaka%2C%20Raipur%2C%20Chhattisgarh%20492010!5e0!3m2!1sen!2sin!4v1715189000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 300 }}>
              LIG 722, DD Nagar Rd, Sector 2, DDU Nagar, Amanaka, <br />Raipur, Chhattisgarh 492010
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Connect;
