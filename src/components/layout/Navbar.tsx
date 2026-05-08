import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      id="main-nav" 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'all 0.5s ease',
      }}
    >
      <div 
        className="nav-container"
        style={{
          background: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.03)',
          padding: isScrolled ? '16px 0' : '24px 0',
          transition: 'all 0.3s ease',
        }}
      >
        <div className="container">
          <div 
            className="nav-inner"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Link to="/" className="logo" id="site-logo" style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              letterSpacing: '0.1em',
              fontWeight: 700,
              color: 'var(--primary)',
            }}>
              ELEVATE
            </Link>
            
            <div 
              className="nav-links"
              style={{
                display: 'flex',
                gap: 'clamp(20px, 3vw, 48px)',
              }}
            >
              {[
                { name: 'HOME', path: '/' },
                { name: 'ABOUT', path: '/about' },
                { name: 'SERVICES', path: '/services' },
                { name: 'TESTIMONIALS', path: '/testimonials' },
                { name: 'CONNECT', path: '/connect' },
              ].map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-muted)',
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <Link 
              to="/scheduler" 
              className="btn btn-primary" 
              style={{ 
                padding: '12px 32px', 
                fontSize: '0.65rem',
                background: 'var(--secondary)',
                boxShadow: '0 10px 20px rgba(0, 66, 37, 0.2)'
              }}
            >
              JOIN NOW
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
