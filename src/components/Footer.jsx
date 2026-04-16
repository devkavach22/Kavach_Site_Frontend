import React from 'react';
import KavachLogo2 from '../assets/KavachLogo2.png';
import { MapPin, Mail, Phone } from 'lucide-react';

function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #FFFDF5 0%, #FFF1F0 100%)',
        width: '100%',
      }}
    >
      {/* ── HOVER STYLES ── */}
      <style>{`
        .social-hover {
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
        }
        .social-hover:hover {
          transform: translateY(-3px);
          box-shadow: 0px 6px 16px rgba(180, 42, 38, 0.18);
          border-color: rgba(180, 42, 38, 0.40) !important;
          background-color: #FFF1F0 !important;
        }
        .footer-link-hover {
          transition: color 0.2s ease, letter-spacing 0.2s ease, padding-left 0.2s ease;
        }
        .footer-link-hover:hover {
          color: #B42A26 !important;
          padding-left: 4px;
        }
        .contact-link-hover {
          transition: color 0.2s ease;
        }
        .contact-link-hover:hover {
          color: #B42A26 !important;
        }
        .bottom-link-hover {
          transition: color 0.2s ease;
        }
        .bottom-link-hover:hover {
          color: #B42A26 !important;
        }
      `}</style>

      {/* ── Main Footer Content ── */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 pt-12 pb-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* ── Col 1: Logo + About + Social ── */}
          <div className="flex flex-col gap-4">

            <img
              src={KavachLogo2}
              alt="Kavach Logo"
              className="w-[140px] object-contain"
            />

            <p
              style={{
                margin: 0,
                color: '#494B4D',
                fontSize: '14px',
                fontWeight: 400,
                textTransform: 'capitalize',
                lineHeight: '26px',
                letterSpacing: '0.28px',
              }}
            >
              The Kavach Group Is A Leading Conglomerate Providing Comprehensive, Integrated Solutions. We Specialize In Facility Management, ICT Infrastructure, And Data-Driven Analytics.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2 items-center">
              {[
                {
                  href: 'https://x.com/Kavach_Security',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#494B4D">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  href: 'https://www.facebook.com/kavachglobal/',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#494B4D">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="#494B4D" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                },
                {
                  href: 'https://in.linkedin.com/company/kavach-security-services',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#494B4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                },
                {
                  href: 'https://www.instagram.com/kavachglobal/',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#494B4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="social-hover flex items-center justify-center flex-shrink-0 bg-white rounded-[8px]"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '36px',
                    height: '36px',
                    border: '1px solid rgba(10, 37, 64, 0.20)',
                    textDecoration: 'none',
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Our Services ── */}
          <div className="flex flex-col gap-4">
            <h3
              style={{
                margin: 0,
                color: '#0A2540',
                fontSize: '18px',
                fontWeight: 700,
                textTransform: 'capitalize',
                letterSpacing: '0.36px',
              }}
            >
              Services
            </h3>
            <ul className="m-0 p-0 list-none flex flex-col gap-[10px]">
              {[
                'Facilities Management Services',
                'CT Infra - Solutions & Services',
                'Energy And Utilities',
                'Healthcare',
                'Solutions For Urban Development',
                'Telecom Network Solutions',
                'System Integration',
                'Managed Services',
                'Smart And Safe Cities',
              ].map((service, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span style={{ color: '#B42A26', fontSize: '16px', lineHeight: 1 }}>•</span>
                  <a
                    href="#"
                    className="footer-link-hover"
                    style={{
                      color: '#494B4D',
                      fontSize: '14px',
                      fontWeight: 400,
                      textTransform: 'capitalize',
                      letterSpacing: '0.28px',
                      textDecoration: 'none',
                    }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Quick Links ── */}
          <div className="flex flex-col gap-4">
            <h3
              style={{
                margin: 0,
                color: '#0A2540',
                fontSize: '18px',
                fontWeight: 700,
                textTransform: 'capitalize',
                letterSpacing: '0.36px',
              }}
            >
              Quick Links
            </h3>
            <ul className="m-0 p-0 list-none flex flex-col gap-[10px]">
              {[
                { label: 'Home',       href: '/' },
                { label: 'About Us',   href: '/about' },
                { label: 'Services',   href: '/services' },
                { label: 'Awards',     href: '/awards' },
                { label: 'Contact Us', href: '/contact' },
              ].map((link, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span style={{ color: '#B42A26', fontSize: '16px', lineHeight: 1 }}>•</span>
                  <a
                    href={link.href}
                    className="footer-link-hover"
                    style={{
                      color: '#494B4D',
                      fontSize: '14px',
                      fontWeight: 400,
                      textTransform: 'capitalize',
                      letterSpacing: '0.28px',
                      textDecoration: 'none',
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact Info ── */}
          <div className="flex flex-col gap-4">
            <h3
              style={{
                margin: 0,
                color: '#0A2540',
                fontSize: '18px',
                fontWeight: 700,
                textTransform: 'capitalize',
                letterSpacing: '0.36px',
              }}
            >
              Contact Info
            </h3>

            <div className="flex flex-col gap-3">

              {/* Address */}
              <div className="flex items-start gap-[10px]">
                <MapPin size={18} color="#B42A26" className="flex-shrink-0 mt-[2px]" />
                <span
                  style={{
                    color: '#494B4D',
                    fontSize: '14px',
                    fontWeight: 400,
                    textTransform: 'capitalize',
                    lineHeight: '24px',
                    letterSpacing: '0.28px',
                  }}
                >
                  A/53, 5th Floor, New York Tower, Thaltej, Ahmedabad – 380015.
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-[10px]">
                <Mail size={18} color="#B42A26" className="flex-shrink-0" />
                <a
                  href="mailto:Info@Kavachglobal.Com"
                  className="contact-link-hover"
                  style={{
                    color: '#494B4D',
                    fontSize: '14px',
                    fontWeight: 400,
                    textTransform: 'lowercase',
                    letterSpacing: '0.28px',
                    textDecoration: 'none',
                  }}
                >
                  Info@Kavachglobal.Com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-[10px]">
                <Phone size={18} color="#B42A26" className="flex-shrink-0" />
                <a
                  href="tel:+917228888904"
                  className="contact-link-hover"
                  style={{
                    color: '#494B4D',
                    fontSize: '14px',
                    fontWeight: 400,
                    letterSpacing: '0.28px',
                    textDecoration: 'none',
                  }}
                >
                  +91 72288 88904
                </a>
              </div>

              {/* Map */}
              <div
                className="w-full rounded-[12px] overflow-hidden mt-1"
                style={{
                  height: '140px',
                  border: '1px solid rgba(10, 37, 64, 0.15)',
                  position: 'relative',
                }}
              >
                <iframe
                  title="Kavach Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.1815971668984!2d72.50992547507385!3d23.056464279160928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b2889d1a7e7%3A0x5c5b5b5b5b5b5b5b!2sNew%20York%20Tower%2C%20Thaltej%2C%20Ahmedabad%2C%20Gujarat%20380054!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="180"
                  style={{
                    border: 0,
                    borderRadius: '12px',
                    marginTop: '-40px',
                    display: 'block',
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div
        style={{
          borderTop: '1px solid rgba(10, 37, 64, 0.12)',
          backgroundColor: 'rgba(255,255,255,0.4)',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-center">
          <span
            style={{
              color: '#494B4D',
              fontSize: '14px',
              fontWeight: 400,
              letterSpacing: '0.28px',
            }}
          >
            © 2026{' '}
            <span style={{ color: '#B42A26', fontWeight: 600 }}>Kavach Global.</span>
            {' '}All Rights Reserved.
          </span>

          <div className="flex gap-4 items-center">
            <a
              href="/privacy-policy"
              className="bottom-link-hover"
              style={{
                color: '#494B4D',
                fontSize: '14px',
                fontWeight: 400,
                textDecoration: 'none',
                letterSpacing: '0.28px',
              }}
            >
              Privacy Policy
            </a>
            <span style={{ color: '#494B4D' }}>|</span>
            <a
              href="/terms"
              className="bottom-link-hover"
              style={{
                color: '#494B4D',
                fontSize: '14px',
                fontWeight: 400,
                textDecoration: 'none',
                letterSpacing: '0.28px',
              }}
            >
              Terms Of Use
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;