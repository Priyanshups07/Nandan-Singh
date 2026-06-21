import React from 'react';
import { Link } from 'react-router-dom';

const COACHING = [
  { name: 'About', path: '/about', desc: "Nandan's 15-year coaching journey" },
  { name: 'Health Coaching', path: '/health-coaching', desc: 'Physical vitality & mental clarity' },
  { name: 'Business Coaching', path: '/business-coaching', desc: 'Scalable leadership strategies' },
];

const EXPLORE = [
  { name: 'Events', path: '/events' },
  { name: 'Success Stories', path: '/#stories' },
  { name: 'Testimonials', path: '/#testimonials' },
  { name: 'Featured Insights', path: '/' },
];

const SUPPORT = [
  { name: 'Contact', path: '/contact' },
  { name: 'Book Appointment', path: '/booking' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Terms of Service', path: '/terms-of-service' },
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-brand-black text-white">
      {/* Main Grid */}
      <div className="max-w-container-max mx-auto px-8 pt-24 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-7">
            <Link
              to="/"
              className="font-headline-lg text-headline-lg text-white block"
            >
              Nandan Kumar Singh
            </Link>
            <p className="font-body-md text-body-md text-outline-variant max-w-sm leading-relaxed">
              Pioneering the intersection of leadership excellence and sustainable well-being. 15+ years of transforming high-performers.
            </p>
            {/* CTA */}
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 bg-brand-green text-white pl-6 pr-5 py-3 rounded-xl font-label-lg text-label-lg transition-all duration-500 hover:bg-brand-green/80 hover:gap-3 active:scale-95"
            >
              Book Appointment
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>

          {/* Coaching */}
          <div className="md:col-span-3">
            <h4 className="font-label-lg text-label-lg text-brand-yellow uppercase tracking-widest mb-7">Coaching</h4>
            <div className="flex flex-col gap-5">
              {COACHING.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group"
                >
                  <span className="font-body-md text-body-md text-white group-hover:text-brand-green transition-colors duration-500">
                    {link.name}
                  </span>
                  <p className="font-caption text-caption text-outline-variant mt-1">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-2">
            <h4 className="font-label-lg text-label-lg text-brand-yellow uppercase tracking-widest mb-7">Explore</h4>
            <div className="flex flex-col gap-4">
              {EXPLORE.map((link) => {
                const isAnchor = link.path.includes('#');
                return isAnchor ? (
                  <a
                    key={link.name}
                    href={link.path}
                    className="font-body-md text-body-md text-white hover:text-brand-green transition-colors duration-500"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="font-body-md text-body-md text-white hover:text-brand-green transition-colors duration-500"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Support */}
          <div className="md:col-span-3">
            <h4 className="font-label-lg text-label-lg text-brand-yellow uppercase tracking-widest mb-7">Support</h4>
            <div className="flex flex-col gap-4">
              {SUPPORT.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-body-md text-body-md text-white hover:text-brand-green transition-colors duration-500"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social */}
            <h4 className="font-label-lg text-label-lg text-brand-yellow uppercase tracking-widest mt-10 mb-5">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: 'link', label: 'LinkedIn' },
                { icon: 'photo_camera', label: 'Instagram' },
                { icon: 'play_circle', label: 'YouTube' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-brand-green hover:text-white transition-all duration-500"
                >
                  <span className="material-symbols-outlined text-xl">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-container-max mx-auto px-8 py-7 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-caption text-caption text-outline-variant">
            &copy; {new Date().getFullYear()} Nandan Kumar Singh. All rights reserved.
          </p>
          <p className="font-caption text-caption text-outline-variant">
            High-Performance Coaching for Leaders.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
