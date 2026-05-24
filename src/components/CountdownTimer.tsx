import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      {Object.entries(timeLeft).map(([interval, value]) => (
        <div key={interval} style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          background: 'var(--primary)', 
          padding: '12px 16px', 
          borderRadius: '12px', 
          minWidth: '80px',
          boxShadow: '0 10px 30px rgba(0,66,37,0.1)'
        }}>
          <span style={{ fontSize: '2rem', fontWeight: 800, color: 'white', lineHeight: 1 }}>
            {String(value).padStart(2, '0')}
          </span>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>
            {interval}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
