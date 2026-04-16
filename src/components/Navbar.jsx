import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import KavachLogo from "../assets/KavachLogo2.png";

const NAVBAR_HEIGHT = 82;

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
    { path: '/services', label: ' Services' },
    { path: '/products', label: ' Products' },
    { path: '/awards', label: 'Awards' },
    { path: '/career', label: 'Career' },
    { path: '/contact', label: 'Contact' },
  ];

  const linkStyle = {
    fontSize: '18px',
    fontWeight: 500,
    textTransform: 'capitalize',
    letterSpacing: '0.36px',
    whiteSpace: 'nowrap',
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}
      style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.10)' }}
    >
      {/* ── Main Bar ── */}
      <div
        className="w-full px-4 sm:px-8 lg:px-16"
        style={{ height: `${NAVBAR_HEIGHT}px` }}
      >
        <div className="flex justify-between items-center h-full">

          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src={KavachLogo}
              alt="Kavach Logo"
              className="h-[50px] sm:h-[60px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  ...linkStyle,
                  color: isActive(item.path) ? '#B13E37' : '#0A2540',
                  transition: 'color 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  if (!isActive(item.path)) e.currentTarget.style.color = '#B13E37';
                }}
                onMouseLeave={e => {
                  if (!isActive(item.path)) e.currentTarget.style.color = '#0A2540';
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 focus:outline-none p-2"
          >
            <span className={`block w-6 h-0.5 bg-[#0A2540] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#0A2540] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#0A2540] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden bg-white w-full overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[500px] border-t border-gray-100 shadow-md' : 'max-h-0'}`}
      >
        <div className="flex flex-col px-4 sm:px-8 py-4 gap-4">
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              style={{
                ...linkStyle,
                color: isActive(item.path) ? '#B13E37' : '#0A2540',
                textDecoration: 'none',
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

    </nav>
  );
};

export default Navbar;