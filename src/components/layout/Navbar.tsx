import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'Contact', path: '/contact' },
];

const MOBILE_LINKS = [
  ...NAV_LINKS,
  { name: 'Health Coaching', path: '/health-coaching' },
  { name: 'Business Coaching', path: '/business-coaching' },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const closeMenu = () => {
    setMenuClosing(true);
    setTimeout(() => {
      setMobileOpen(false);
      setMenuClosing(false);
    }, 300);
  };

  /* Scroll-aware: solid background after 50px */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  /* Close menu on route change */
  useEffect(() => {
    if (mobileOpen) closeMenu();
  }, [location.pathname, mobileOpen]);

  const headerBg = scrolled
    ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-outline-variant/50'
    : 'bg-transparent border-b border-white/10';

  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
      <nav className="flex justify-end items-center h-20 px-8 max-w-container-max mx-auto">
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-label-lg text-label-lg transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'text-brand-green'
                  : 'text-on-surface-variant hover:text-brand-green'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Book Appointment */}
          <Link
            to="/booking"
            className="group relative inline-flex items-center gap-2 bg-brand-green/15 text-brand-green pl-6 pr-5 py-3 rounded-lg font-label-lg text-label-lg transition-all duration-300 hover:bg-brand-black hover:text-white active:scale-95"
          >
            <span>Book Appointment</span>
            <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>

        {/* Mobile: Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            className={`transition-colors duration-300 ${scrolled ? 'text-brand-black' : 'text-brand-green'}`}
            onClick={() => mobileOpen ? closeMenu() : setMobileOpen(true)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 28 }}>
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Overlay */}
      {mobileOpen && (
        <div className={`md:hidden fixed inset-0 bg-white z-40 flex flex-col ${menuClosing ? 'menu-overlay-exit' : 'menu-overlay-enter'}`}>
          {/* Top bar with close */}
          <div className="flex justify-end items-center h-20 px-8">
            <button
              className="text-brand-black"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined" style={{ fontSize: 28 }}>close</span>
            </button>
          </div>

          {/* Links — large typography */}
          <div className="flex-1 flex flex-col justify-center px-8 gap-2">
            {MOBILE_LINKS.map((link, i) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={`text-[28px] font-body-md font-semibold py-4 border-b border-outline-variant/30 transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-brand-green'
                    : 'text-brand-black hover:text-brand-green'
                }`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Bottom-fixed CTA */}
          <div className="px-8 pb-10 pt-6">
            <Link
              to="/booking"
              onClick={closeMenu}
              className="w-full inline-flex items-center justify-center gap-2 bg-brand-green text-white px-8 py-5 rounded-xl font-label-lg text-[16px] transition-all duration-300 hover:bg-brand-black active:scale-95"
            >
              Book Appointment
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
