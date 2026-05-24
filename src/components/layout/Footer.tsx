import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--primary)',
      color: 'white',
      padding: '100px 0 60px 0',
      marginTop: '100px',
    }}>
      <div className="container">
        <div 
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
            gap: 'var(--grid-gap)',
            marginBottom: '80px',
          }}
        >
          <div className="footer-col">
            <Link to="/" className="logo" style={{ color: 'white', marginBottom: '32px', display: 'block', fontSize: '1.5rem', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '0.1em' }}>
              NANDAN SINGH
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '300px' }}>
              Elite performance architecture and biological optimization. Designing legacy through natural health and strategic business growth.
            </p>
          </div>
          
          <div className="footer-col">
            <h4 style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--secondary-light)', marginBottom: '32px' }}>EXPERIENCE</h4>
            <div className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Home</Link>
              <Link to="/about" style={{ color: 'rgba(255,255,255,0.6)' }}>About Us</Link>
              <Link to="/testimonials" style={{ color: 'rgba(255,255,255,0.6)' }}>Testimonials</Link>
              <Link to="/connect" style={{ color: 'rgba(255,255,255,0.6)' }}>Connect</Link>
            </div>
          </div>
          
          <div className="footer-col">
            <h4 style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--secondary-light)', marginBottom: '32px' }}>SUPPORT</h4>
            <div className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Link to="/connect" style={{ color: 'rgba(255,255,255,0.6)' }}>Contact</Link>
              <a href="#" style={{ color: 'rgba(255,255,255,0.6)' }}>Privacy Policy</a>
              <a href="#" style={{ color: 'rgba(255,255,255,0.6)' }}>Terms of Service</a>
              <a href="#" style={{ color: 'rgba(255,255,255,0.6)' }}>Concierge</a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4 style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--secondary-light)', marginBottom: '32px' }}>CONNECT</h4>
            <div className="social-links" style={{ display: 'flex', gap: '20px' }}>
              <a href="#" aria-label="Instagram" style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" aria-label="Facebook" style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p className="text-label" style={{ fontSize: '0.65rem', opacity: 0.3, color: 'white' }}>&copy; 2024 NANDAN SINGH. ALL RIGHTS RESERVED.</p>
          <p className="text-label" style={{ fontSize: '0.65rem', opacity: 0.3, color: 'white' }}>DESIGNED FOR LEGACY.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
