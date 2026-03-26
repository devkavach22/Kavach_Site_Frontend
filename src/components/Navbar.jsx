import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import KavachLogo2 from "../assets/KavachLogo2.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Our Services' },
    { path: '/product', label: 'Our Products' },
    { path: '/awards', label: 'Awards' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&display=swap');

        .fg-nav {
          font-family: 'Barlow', sans-serif;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 100;
          background: #ffffff;
          transition: all 0.3s ease;
        }
        .fg-nav.scrolled { box-shadow: 0 4px 20px rgba(0,0,0,0.08); }

        .fg-topbar {
          height: 3px;
          background: #ea580c; 
        }

        .fg-link {
          font-weight: 500;
          font-size: 0.95rem;
          color: #1a2332;
          padding: 8px 16px;
          position: relative;
          transition: color 0.2s;
          text-decoration: none;
        }

        @media (min-width: 768px) {
          .fg-link {
            font-size: 1.08rem;
          }
        }
        
        @media (min-width: 768px) {
          .fg-link::after {
            content: '';
            position: absolute;
            bottom: -2px; left: 16px; right: 16px;
            height: 2px;
            background: #ea580c;
            transform: scaleX(0);
            transition: transform 0.25s ease;
          }
          .fg-link:hover::after, .fg-link.active::after { transform: scaleX(1); }
        }
        
        .fg-link:hover, .fg-link.active { color: #ea580c; }

        .fg-cta {
          position: relative;
          font-family: 'Barlow', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          color: #ffffff;
          padding: 12px 28px;
          background: linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%);
          border-radius: 20px 0px 20px 0px; 
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          overflow: hidden;
          transition: all 0.3s ease;
          border: none;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: 0 4px 15px rgba(234, 88, 12, 0.3);
        }

        .fg-cta::before {
          content: "";
          position: absolute;
          top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.4), transparent);
          transform: skewX(-25deg);
          transition: 0.6s ease-in-out;
        }

        .fg-cta:hover::before { left: 150%; }

        @media (max-width: 767px) {
          .fg-cta.desktop-only {
            display: none !important;
          }
        }

        /* Hamburger — mobile only */
        .hb { 
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px; 
          cursor: pointer;
          border: none;
          background: #f8f9fa;
          width: 40px;
          height: 40px;
          border-radius: 8px;
        }
        .hb span { width: 22px; height: 2px; background: #1a2332; transition: 0.3s; }
        .hb.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hb.open span:nth-child(2) { opacity: 0; }
        .hb.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Force hide hamburger on desktop */
        @media (min-width: 768px) {
          .hb {
            display: none !important;
          }
        }

        @media (max-width: 767px) {
          .mobile-menu-container {
            position: absolute; top: 100%; left: 0; width: 100%;
            background: #ffffff; border-bottom: 1px solid #f1f5f9;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          }
        }
      `}</style>

      <nav className={`fg-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="fg-topbar"></div>

        <div className="w-full px-6 sm:px-10 lg:px-16">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={KavachLogo2}
                alt="KAVACH Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`fg-link ${isActive(item.path) ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">

              {/* Desktop CTA — hidden on mobile */}
              <Link to="/contact" className="fg-cta desktop-only">
                <span>Get Started</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>

              {/* Hamburger — mobile only (hidden on desktop via CSS) */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`hb ${menuOpen ? 'open' : ''}`}
              >
                <span></span><span></span><span></span>
              </button>
            </div>
          </div>

          {/* Mobile Expanded Menu */}
          <div className={`md:hidden mobile-menu-container overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="flex flex-col p-4 space-y-1">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 text-base font-semibold rounded-xl transition-all ${isActive(item.path) ? 'bg-orange-50 text-orange-600' : 'text-slate-700 hover:bg-slate-50'}`}
                >
                  {item.label}
                </Link>
              ))}

              {/* GET STARTED inside mobile menu only */}
              <div className="pt-4 pb-2">
                <Link
                  to="/contact"
                  className="fg-cta w-full py-4 text-center text-base"
                  onClick={() => setMenuOpen(false)}
                  style={{ borderRadius: '12px' }}
                >
                  <span>Get Started</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;