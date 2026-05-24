import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const professions = [
  'Student', 'Entrepreneur', 'Business Owner', 'Corporate Employee',
  'Coach', 'Fitness Trainer', 'Wellness Expert', 'Doctor',
  'Therapist', 'Homemaker', 'Freelancer', 'Influencer',
  'Consultant', 'Teacher', 'Other'
];

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', whatsapp: '', gender: '', age: '',
    country: 'India', state: '', city: '', profession: '',
    goals: '', challenges: '', motivation: '', attendedBefore: '',
    source: '', transformation: '', futurePrograms: '', contactMethod: 'WhatsApp', vipAccess: 'No'
  });

  const updateForm = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStep(4);
    }, 1500);
  };

  const inputStyle = {
    width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)',
    background: '#f8fafc', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s ease'
  };
  const labelStyle = { display: 'block', marginBottom: '8px', fontWeight: 600, color: 'var(--text)', fontSize: '0.9rem' };
  const fieldGroupStyle = { marginBottom: '24px' };

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#f8fafc', paddingBottom: '100px' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '40px', alignItems: 'start' }}>
          
          {/* Left Column: Form */}
          <div className="glass-card" style={{ padding: '48px', background: '#fff', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            
            {/* Progress Bar */}
            {step < 4 && (
              <div style={{ marginBottom: '48px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>
                  <span style={{ color: step >= 1 ? 'var(--primary)' : 'inherit' }}>1. Personal Details</span>
                  <span style={{ color: step >= 2 ? 'var(--primary)' : 'inherit' }}>2. Background</span>
                  <span style={{ color: step >= 3 ? 'var(--primary)' : 'inherit' }}>3. Event Goals</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: 'rgba(0,0,0,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                  <motion.div 
                    initial={{ width: '33%' }}
                    animate={{ width: `${(step / 3) * 100}%` }}
                    style={{ height: '100%', background: 'var(--primary)', borderRadius: '4px' }}
                  />
                </div>
              </div>
            )}

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="text-h2" style={{ marginBottom: '8px' }}>Personal Information</h2>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Please provide your accurate details to secure your ticket.</p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                    <div style={fieldGroupStyle}>
                      <label style={labelStyle}>Full Name *</label>
                      <input type="text" style={inputStyle} value={formData.fullName} onChange={e => updateForm('fullName', e.target.value)} placeholder="John Doe" required />
                    </div>
                    <div style={fieldGroupStyle}>
                      <label style={labelStyle}>Email Address *</label>
                      <input type="email" style={inputStyle} value={formData.email} onChange={e => updateForm('email', e.target.value)} placeholder="john@example.com" required />
                    </div>
                    <div style={fieldGroupStyle}>
                      <label style={labelStyle}>Phone Number *</label>
                      <input type="tel" style={inputStyle} value={formData.phone} onChange={e => updateForm('phone', e.target.value)} placeholder="+91 98765 43210" required />
                    </div>
                    <div style={fieldGroupStyle}>
                      <label style={labelStyle}>WhatsApp Number *</label>
                      <input type="tel" style={inputStyle} value={formData.whatsapp} onChange={e => updateForm('whatsapp', e.target.value)} placeholder="+91 98765 43210" required />
                    </div>
                    <div style={fieldGroupStyle}>
                      <label style={labelStyle}>Gender</label>
                      <select style={inputStyle} value={formData.gender} onChange={e => updateForm('gender', e.target.value)}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div style={fieldGroupStyle}>
                      <label style={labelStyle}>Age</label>
                      <input type="number" style={inputStyle} value={formData.age} onChange={e => updateForm('age', e.target.value)} placeholder="e.g., 28" />
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
                    <button type="button" onClick={nextStep} className="btn btn-primary" style={{ padding: '16px 40px' }}>
                      Next Step <span className="material-symbols-outlined" style={{ marginLeft: '8px' }}>arrow_forward</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="text-h2" style={{ marginBottom: '8px' }}>Background & Profession</h2>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Help us understand your current situation to tailor the experience.</p>
                  
                  <div style={fieldGroupStyle}>
                    <label style={labelStyle}>Country</label>
                    <input type="text" style={inputStyle} value={formData.country} onChange={e => updateForm('country', e.target.value)} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                    <div style={fieldGroupStyle}>
                      <label style={labelStyle}>State / Province</label>
                      <input type="text" style={inputStyle} value={formData.state} onChange={e => updateForm('state', e.target.value)} placeholder="e.g., Maharashtra" />
                    </div>
                    <div style={fieldGroupStyle}>
                      <label style={labelStyle}>City</label>
                      <input type="text" style={inputStyle} value={formData.city} onChange={e => updateForm('city', e.target.value)} placeholder="e.g., Mumbai" />
                    </div>
                  </div>
                  <div style={fieldGroupStyle}>
                    <label style={labelStyle}>Current Profession *</label>
                    <select style={inputStyle} value={formData.profession} onChange={e => updateForm('profession', e.target.value)} required>
                      <option value="">Select your profession</option>
                      {professions.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px' }}>
                    <button type="button" onClick={prevStep} className="btn btn-outline" style={{ padding: '16px 32px' }}>Back</button>
                    <button type="button" onClick={nextStep} className="btn btn-primary" style={{ padding: '16px 40px' }}>
                      Next Step <span className="material-symbols-outlined" style={{ marginLeft: '8px' }}>arrow_forward</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.form key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} onSubmit={submitForm}>
                  <h2 className="text-h2" style={{ marginBottom: '8px' }}>Your Event Goals</h2>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Last step! Tell us what you want to achieve at the academy.</p>
                  
                  <div style={fieldGroupStyle}>
                    <label style={labelStyle}>What are your biggest wellness/business goals?</label>
                    <textarea style={{ ...inputStyle, minHeight: '100px' }} value={formData.goals} onChange={e => updateForm('goals', e.target.value)} placeholder="E.g., I want to build a second income stream..." />
                  </div>
                  <div style={fieldGroupStyle}>
                    <label style={labelStyle}>What challenges are you currently facing?</label>
                    <textarea style={{ ...inputStyle, minHeight: '100px' }} value={formData.challenges} onChange={e => updateForm('challenges', e.target.value)} placeholder="E.g., Lack of time, not knowing where to start..." />
                  </div>
                  
                  <div style={fieldGroupStyle}>
                    <label style={labelStyle}>Interested in VIP Access? (Exclusive networking & materials)</label>
                    <div style={{ display: 'flex', gap: '24px', marginTop: '12px' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                        <input type="radio" name="vip" value="Yes" checked={formData.vipAccess === 'Yes'} onChange={e => updateForm('vipAccess', e.target.value)} style={{ width: '20px', height: '20px', accentColor: 'var(--primary)' }} />
                        <span style={{ fontWeight: 600 }}>Yes, upgrade me</span>
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                        <input type="radio" name="vip" value="No" checked={formData.vipAccess === 'No'} onChange={e => updateForm('vipAccess', e.target.value)} style={{ width: '20px', height: '20px', accentColor: 'var(--primary)' }} />
                        <span style={{ fontWeight: 600 }}>No, standard access</span>
                      </label>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '48px' }}>
                    <button type="button" onClick={prevStep} className="btn btn-outline" style={{ padding: '16px 32px' }}>Back</button>
                    <button type="submit" className="btn btn-primary" style={{ padding: '16px 48px', fontSize: '1.1rem' }}>
                      COMPLETE BOOKING
                    </button>
                  </div>
                </motion.form>
              )}

              {step === 4 && (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ width: '96px', height: '96px', borderRadius: '50%', background: 'rgba(0,143,76,0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px auto' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '48px' }}>check_circle</span>
                  </div>
                  <h2 className="text-h2" style={{ marginBottom: '16px' }}>Registration Successful!</h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '40px', maxWidth: '400px', margin: '0 auto 40px auto', lineHeight: 1.6 }}>
                    Your seat at the Wellness Club Academy has been reserved. We've sent a confirmation email to <strong>{formData.email}</strong>.
                  </p>
                  <Link to="/" className="btn btn-primary" style={{ padding: '16px 40px' }}>
                    RETURN TO HOMEPAGE
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Right Column: Summary Sidebar */}
          <div style={{ position: 'sticky', top: '120px' }}>
            <div className="glass-card" style={{ background: 'var(--primary)', color: 'white', padding: '32px', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
               <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)', borderRadius: '50%' }}></div>
               
               <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Order Summary</h3>
               
               <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'center', background: 'rgba(255,255,255,0.1)', padding: '16px', borderRadius: '12px' }}>
                 <div style={{ width: '60px', height: '60px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0 }}>
                    <img src="/assets/hero.jpg" alt="Event Cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>
                 <div>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '1rem' }}>Wellness Club Academy</h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--secondary-light)' }}>1x Standard Access</span>
                 </div>
               </div>

               <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '24px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.95rem', opacity: 0.9 }}>
                    <span>Ticket Price</span>
                    <span style={{ textDecoration: 'line-through' }}>₹4,999</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.95rem', color: 'var(--secondary-light)' }}>
                    <span>Early Bird Discount</span>
                    <span>- ₹3,499</span>
                  </div>
                  {formData.vipAccess === 'Yes' && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.95rem', color: '#ffd700' }}>
                      <span>VIP Upgrade</span>
                      <span>+ ₹999</span>
                    </div>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px', fontSize: '1.25rem', fontWeight: 800 }}>
                    <span>Total Due</span>
                    <span>₹{formData.vipAccess === 'Yes' ? '2,499' : '1,500'}</span>
                  </div>
               </div>

               <div style={{ background: 'rgba(0,0,0,0.2)', padding: '16px', borderRadius: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--secondary-light)', fontSize: '24px' }}>lock</span>
                  <p style={{ fontSize: '0.85rem', margin: 0, opacity: 0.8, lineHeight: 1.5 }}>
                    Your registration information is securely encrypted and never shared. By continuing, you agree to our terms.
                  </p>
               </div>
            </div>

            <div style={{ marginTop: '24px', textAlign: 'center' }}>
               <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,59,48,0.1)', color: '#ff3b30', padding: '8px 16px', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 600 }}>
                 <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>local_fire_department</span>
                 Seats Filling Fast — Reserve Now
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Booking;
