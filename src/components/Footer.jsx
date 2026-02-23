import React from 'react';
import { Link } from 'react-router-dom';
import KavachLogo2 from '../assets/KavachLogo2.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Facilities Management Services',
    'ICT Infra – Solutions & Services',
    'Energy and Utilities',
    'Healthcare',
    'Solutions For Urban Development',
    'Telecom Network Solutions',
    'System Integration',
    'Managed Services',
    'Smart and Safe Cities',
  ];

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Awards', path: '/awards' },
    { label: 'Career', path: '/career' },
    { label: 'Contact us', path: '/contact' },
  ];

  const socials = [
    { label: 'Twitter', href: '#', icon: '𝕏' },
    { label: 'Facebook', href: '#', icon: 'f' },
    { label: 'LinkedIn', href: '#', icon: 'in' },
    { label: 'Instagram', href: '#', icon: 'ig' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-orange-950 via-[#2d0a0a] to-black text-white overflow-hidden border-t border-white/10">
      
      {/* ── Background Decorative Elements ── */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-600/10 rounded-full blur-[100px] -z-0"></div>

      {/* ── Top Wave Border ── */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none rotate-180 z-10">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-16">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ── Column 1: Brand & Identity ── */}
          <div className="space-y-6">
            <Link to="/" className="inline-block group">
              <img
                src={KavachLogo2}
                alt="Kavach Logo"
                className="h-16 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform duration-500"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed text-justify border-l-2 border-orange-500/50 pl-4">
              The Kavach Group is a leading conglomerate providing comprehensive, integrated
              solutions. We specialize in Facility Management, ICT Infrastructure, and Data-Driven Analytics.
            </p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-orange-500 hover:to-red-600 hover:border-transparent transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <span className="font-bold text-sm italic">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* ── Column 2: Services (with custom bullets) ── */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-orange-600 rounded-full"></span>
              Our Services
            </h3>
            <ul className="grid grid-cols-1 gap-3">
              {services.map((service) => (
                <li key={service} className="group">
                  <Link
                    to="/services"
                    className="text-gray-400 text-sm group-hover:text-orange-400 flex items-center gap-2 transition-all duration-300"
                  >
                    <span className="h-[1px] w-0 group-hover:w-4 bg-orange-500 transition-all duration-300"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Quick Navigation ── */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-orange-600 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-white flex items-center gap-3 group transition-all"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-600 group-hover:scale-150 transition-transform"></div>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4: Reach Us (Glass Card) ── */}
          <div className="lg:mt-0">
             <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-orange-600 rounded-full"></span>
              Contact Info
            </h3>
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-md space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-orange-500">📍</span>
                <p className="text-gray-400 text-xs leading-relaxed">
                  A/53, 5th floor, New York Tower, Thaltej, Ahmedabad – 380015.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-500">✉️</span>
                <a href="mailto:info@kavachglobal.com" className="text-gray-400 text-xs hover:text-white">
                  info@kavachglobal.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-500">📞</span>
                <a href="tel:+917228888904" className="text-gray-400 text-xs hover:text-white">
                  +91 72288 88904
                </a>
              </div>
              
              {/* Map Thumbnail with Glow */}
              <div className="mt-4 rounded-xl overflow-hidden border border-white/20 group relative">
                 <div className="absolute inset-0 bg-orange-600/20 group-hover:opacity-0 transition-opacity"></div>
                 <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.196!2d72.51!3d23.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzI0LjAiTiA3MsKwMzAnMzYuMCJF!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100"
                    className="grayscale hover:grayscale-0 transition-all duration-700"
                    style={{ border: 0 }}
                 ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Section ── */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-gray-500 text-xs tracking-wide">
            © {currentYear} <span className="text-orange-500 font-bold uppercase tracking-tighter">Kavach Global</span>. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-500 text-xs hover:text-orange-500 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 text-xs hover:text-orange-500 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;