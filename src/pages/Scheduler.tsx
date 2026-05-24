import React from 'react';

const Scheduler: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = React.useState<string | null>(null);
  const [meetingReason, setMeetingReason] = React.useState<string>('health');
  const [meetingMode, setMeetingMode] = React.useState<'online' | 'offline'>('online');
  const [currentMonth, setCurrentMonth] = React.useState(new Date());
  
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const daysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const handlePrevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  const handleNextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));

  const handleBooking = async () => {
    if (!selectedDate || !selectedSlot) {
      alert('Please select a date and time slot first.');
      return;
    }
    if (!name || !phone) {
      alert('Please enter your full name and phone number.');
      return;
    }

    try {
      // In a real application, this would post to a Supabase or Node.js endpoint
      /*
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          date: selectedDate.toISOString(),
          slot: selectedSlot,
          mode: meetingMode,
          focus: meetingReason
        })
      });
      */
      
      // Simulating backend call and WhatsApp trigger
      console.log('Booking payload:', { name, phone, date: selectedDate, slot: selectedSlot, mode: meetingMode, focus: meetingReason });
      
      alert(`Strategy Session (${meetingMode.toUpperCase()}) scheduled for ${selectedDate.toDateString()} at ${selectedSlot}. We will contact you via WhatsApp to confirm.`);
      
      // Optional: Reset form after successful mock submission
      setSelectedDate(null);
      setSelectedSlot(null);
      setName('');
      setPhone('');
    } catch (error) {
      console.error('Error saving booking:', error);
      alert('An error occurred while booking. Please try again.');
    }
  };

  const renderCalendar = () => {
    const totalDays = daysInMonth(currentMonth);
    const startDay = firstDayOfMonth(currentMonth);
    const days = [];

    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} style={{ padding: '15px' }}></div>);
    }

    for (let d = 1; d <= totalDays; d++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), d);
      const isSelected = selectedDate?.toDateString() === date.toDateString();
      const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));

      days.push(
        <button
          key={d}
          onClick={() => !isPast && setSelectedDate(date)}
          disabled={isPast}
          style={{
            padding: '15px',
            borderRadius: '12px',
            border: 'none',
            background: isSelected ? 'var(--primary)' : 'transparent',
            color: isSelected ? 'white' : (isPast ? '#ccc' : 'var(--text)'),
            cursor: isPast ? 'not-allowed' : 'pointer',
            fontSize: '0.9rem',
            fontWeight: isSelected ? 700 : 400,
            transition: 'all 0.3s ease',
          }}
          className={!isPast && !isSelected ? 'hover-bg' : ''}
        >
          {d}
        </button>
      );
    }
    return days;
  };

  return (
    <div className="scheduler-page animate-fade-in-up">
      {/* Industry Standard Header */}
      <section style={{ padding: '160px 0 60px 0', textAlign: 'center' }}>
        <div className="container">
          <span className="text-label" style={{ color: 'var(--secondary)', marginBottom: '24px', display: 'block', fontSize: '0.65rem' }}>STRATEGIC ADVISORY</span>
          <h1 className="text-h1" style={{ marginBottom: '32px' }}>The Architecture of <br /><span className="italic">Performance.</span></h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 300, lineHeight: 1.8 }}>
            Reserve a 30-minute high-impact session to diagnose your current performance bottlenecks and map out your biological and professional scale.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '60px 0 120px 0' }}>
        <div className="container">
          <div className="grid-responsive-2" style={{ gap: '80px', alignItems: 'start' }}>
            {/* Left side: Why Schedule? */}
            <div>
              <h2 className="text-h2" style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Why Schedule?</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {[
                  { title: 'Biometric Alignment', desc: 'Understanding your unique biological blueprint and how it impacts your decision-making capacity.', icon: 'biotech' },
                  { title: 'Revenue Mapping', desc: 'Identifying hidden growth levers in your business that can be scaled without increasing burnout.', icon: 'account_balance_wallet' },
                  { title: 'Metabolic Stability', desc: 'Ensuring your health fuels your wealth, rather than draining your executive energy.', icon: 'health_and_safety' },
                  { title: 'Strategic Clarity', desc: 'A focused deep-dive to eliminate decision fatigue and establish your top 3 growth priorities.', icon: 'psychology' }
                ].map((point, i) => (
                  <div key={i} style={{ display: 'flex', gap: '24px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '16px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>{point.icon}</span>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{point.title}</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '60px', padding: '40px', background: 'var(--bg)', borderRadius: '32px', borderLeft: '4px solid var(--secondary)' }}>
                <p className="italic" style={{ color: 'var(--primary)', lineHeight: 1.7 }}>
                  "One 30-minute session with Nandan did more for my clarity than six months of traditional business consulting."
                </p>
                <p className="text-label" style={{ fontSize: '0.55rem', marginTop: '20px', opacity: 0.5 }}>— DAVID CHEN, GLOBAL LOGISTICS DIRECTOR</p>
              </div>
            </div>

            {/* Right side: Scheduler */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div className="glass-card" style={{ padding: '40px', borderRadius: '40px', background: 'white', boxShadow: '0 40px 100px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>
                    {currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}
                  </h3>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={handlePrevMonth} style={{ background: 'none', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>west</span>
                    </button>
                    <button onClick={handleNextMonth} style={{ background: 'none', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>east</span>
                    </button>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', marginBottom: '16px' }}>
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                    <div key={day} className="text-label" style={{ fontSize: '0.55rem', opacity: 0.5 }}>{day}</div>
                  ))}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px' }}>
                  {renderCalendar()}
                </div>
              </div>

              <div className="glass-card" style={{ padding: '40px', background: 'white', borderRadius: '40px', border: '1px solid rgba(0,66,37,0.1)' }}>
                {selectedDate ? (
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '24px' }}>
                      {selectedDate.toLocaleDateString('default', { weekday: 'long', month: 'long', day: 'numeric' })}
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                      {[
                        { id: 'morning', label: 'Morning Session', time: '09:00 — 12:00', icon: 'light_mode' },
                        { id: 'afternoon', label: 'Afternoon Session', time: '12:00 — 16:00', icon: 'sunny' },
                        { id: 'evening', label: 'Evening Session', time: '16:00 — 20:00', icon: 'dark_mode' },
                      ].map(slot => (
                        <button
                          key={slot.id}
                          onClick={() => setSelectedSlot(slot.id)}
                          style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', borderRadius: '16px', border: selectedSlot === slot.id ? '2px solid var(--secondary)' : '1px solid rgba(0,0,0,0.05)', background: selectedSlot === slot.id ? 'rgba(0,66,37,0.03)' : 'var(--bg)', cursor: 'pointer', textAlign: 'left', transition: 'all 0.3s ease' }}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--secondary)' }}>{slot.icon}</span>
                          <div style={{ flexGrow: 1 }}>
                            <p style={{ fontWeight: 700, fontSize: '0.85rem' }}>{slot.label}</p>
                            <p style={{ fontSize: '0.7rem', opacity: 0.5 }}>{slot.time}</p>
                          </div>
                          {selectedSlot === slot.id && <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--secondary)' }}>check_circle</span>}
                        </button>
                      ))}
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                      <label className="text-label" style={{ fontSize: '0.55rem', opacity: 0.5, marginBottom: '12px', display: 'block' }}>MEETING MODE</label>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <button
                          onClick={() => setMeetingMode('online')}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            padding: '16px',
                            borderRadius: '12px',
                            border: 'none',
                            background: meetingMode === 'online' ? 'var(--primary)' : '#f0f4f2',
                            color: meetingMode === 'online' ? 'white' : 'var(--text)',
                            fontWeight: 700,
                            fontSize: '0.7rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>videocam</span>
                          ONLINE
                        </button>
                        <button
                          onClick={() => setMeetingMode('offline')}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            padding: '16px',
                            borderRadius: '12px',
                            border: 'none',
                            background: meetingMode === 'offline' ? 'var(--primary)' : '#f0f4f2',
                            color: meetingMode === 'offline' ? 'white' : 'var(--text)',
                            fontWeight: 700,
                            fontSize: '0.7rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>location_on</span>
                          OFFLINE
                        </button>
                      </div>
                    </div>

                    <div style={{ marginBottom: '32px' }}>
                      <label className="text-label" style={{ fontSize: '0.55rem', opacity: 0.5, marginBottom: '12px', display: 'block' }}>STRATEGY FOCUS</label>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <button
                          onClick={() => setMeetingReason('health')}
                          style={{
                            padding: '16px',
                            borderRadius: '12px',
                            border: 'none',
                            background: meetingReason === 'health' ? 'var(--primary)' : '#f0f4f2',
                            color: meetingReason === 'health' ? 'white' : 'var(--text)',
                            fontWeight: 700,
                            fontSize: '0.7rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          HEALTH
                        </button>
                        <button
                          onClick={() => setMeetingReason('business')}
                          style={{
                            padding: '16px',
                            borderRadius: '12px',
                            border: 'none',
                            background: meetingReason === 'business' ? 'var(--primary)' : '#f0f4f2',
                            color: meetingReason === 'business' ? 'white' : 'var(--text)',
                            fontWeight: 700,
                            fontSize: '0.7rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          BUSINESS
                        </button>
                      </div>
                    </div>

                    <div style={{ marginBottom: '32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div>
                        <label className="text-label" style={{ fontSize: '0.55rem', opacity: 0.5, marginBottom: '12px', display: 'block' }}>FULL NAME</label>
                        <input 
                          type="text" 
                          required
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', background: 'var(--bg)', outline: 'none' }}
                        />
                      </div>
                      <div>
                        <label className="text-label" style={{ fontSize: '0.55rem', opacity: 0.5, marginBottom: '12px', display: 'block' }}>PHONE NUMBER</label>
                        <input 
                          type="tel" 
                          required
                          placeholder="+91"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', background: 'var(--bg)', outline: 'none' }}
                        />
                      </div>
                    </div>

                    <button onClick={handleBooking} className="btn btn-primary" style={{ width: '100%', padding: '20px' }}>BOOK YOUR APPOINTMENT</button>
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <div style={{ width: '64px', height: '64px', background: 'var(--bg)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '24px', opacity: 0.3 }}>calendar_today</span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 300 }}>Please select a date on the <br />calendar to begin.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Physical HQ / Map Section */}
      <section style={{ padding: '0 0 120px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="text-label" style={{ color: 'var(--secondary)', marginBottom: '16px', display: 'block', fontSize: '0.6rem' }}>LOCATION</span>
            <h2 className="text-h2">The Strategic Hub</h2>
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

export default Scheduler;
