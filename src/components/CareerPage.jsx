import React, { useState, useRef, useEffect } from 'react';
import CarrerHero from "../assets/CarrerHero.png";
import AboutBg from "../assets/AboutBg.png";
import aboutLast from "../assets/AboutLast.png";

// ── Custom Dropdown Component ──
const CustomSelect = ({ options, placeholder, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative', marginBottom: '15px', userSelect: 'none' }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', padding: '12px 15px',
          borderRadius: '8px',
          border: open ? '1.5px solid #B83934' : '1px solid #E5E7EB',
          background: '#F3F4F6',
          fontSize: '14px',
          color: value ? '#0A2540' : '#9CA3AF',
          fontWeight: value ? '500' : '400',
          cursor: 'pointer', boxSizing: 'border-box',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          transition: 'border-color 0.2s, background 0.2s',
        }}
      >
        <span>{value || placeholder}</span>
        <svg
          width="12" height="12" viewBox="0 0 12 12" fill="none"
          style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}
        >
          <path d="M2 4L6 8L10 4" stroke="#B83934" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0,
          background: '#fff', border: '1.5px solid #E5C5C4', borderRadius: '10px',
          overflow: 'hidden', zIndex: 999, boxShadow: '0 8px 24px rgba(184,57,52,0.10)',
        }}>
          {options.map((opt, i) => (
            <div
              key={i}
              onClick={() => { onChange(opt); setOpen(false); }}
              style={{
                padding: '11px 16px', fontSize: '14px',
                color: value === opt ? '#B83934' : '#0A2540',
                fontWeight: value === opt ? '600' : '400',
                background: value === opt ? '#FFF0EF' : '#fff',
                cursor: 'pointer', borderBottom: i < options.length - 1 ? '1px solid #FCE8E7' : 'none',
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const CareerPage = () => {
  const navbarHeight = "80px";

  // ── Controlled form state ──
  const [formData, setFormData] = useState({ name: '', email: '', position: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.position) {
      alert('Please fill in all required fields.');
      return;
    }
    setSubmitted(true);
    setFormData({ name: '', email: '', position: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const jobVacancies = [
    { type: "Full Time/Part Time", title: "Operations Executive", desc: "Manage day-to-day operations, ensure smooth service delivery, and coordinate across teams for efficient execution." },
    { type: "Full Time/Part Time", title: "Security Officer", desc: "Monitor Security Operations, Ensure Safety Protocols, And Handle Risk Management Across Facilities." },
    { type: "Part Time", title: "Field Engineer", desc: "Support Installation, Maintenance, And Troubleshooting Of Systems And Infrastructure." },
    { type: "Full Time/Part Time", title: "Security Officer", desc: "Monitor Security Operations, Ensure Safety Protocols, And Handle Risk Management Across Facilities." }
  ];

  const benefits = [
    { title: "Career Growth", desc: "Opportunities For Continuous Learning, Skill Development, And Career Advancement." },
    { title: "Competitive Benefits", desc: "Attractive Compensation Packages And Performance-Based Rewards." },
    { title: "Work-Life Balance", desc: "A Supportive Environment That Values Productivity And Personal Well-Being." },
    { title: "Job Stability", desc: "Be Part Of A Trusted Organization With Long-Term Career Opportunities." }
  ];

  return (
    <div style={{ overflowX: 'hidden', background: '#fff', paddingTop: navbarHeight }}>
      <style>
        {`
          @media (max-width: 1024px) {
            .section-container { padding: 40px 20px !important; }
            .benefit-header { flex-direction: column !important; text-align: center !important; }
            .benefit-header > div { width: 100% !important; max-width: 100% !important; }
            .vacancy-layout { flex-direction: column !important; }
            .application-form { width: 100% !important; }
          }
          @media (max-width: 768px) {
            .hero-text-content { padding: 0 20px !important; }
            .hero-text-content h1 { font-size: 26px !important; line-height: 1.2 !important; margin-bottom: 12px !important; }
            .hero-text-content p { font-size: 14px !important; line-height: 1.5 !important; }
            .career-sub-text { font-size: 14px !important; line-height: 1.5 !important; max-width: 100% !important; }
          }
          .input-field {
            width: 100%; padding: 12px 15px; border-radius: 8px; border: 1px solid #E5E7EB;
            background: #F3F4F6; margin-bottom: 15px; font-size: 14px; box-sizing: border-box;
            outline: none;
          }
          .input-field:focus {
            border-color: #B83934;
          }
        `}
      </style>

      {/* ── Career Hero Section ── */}
      <div style={{
        width: '100%', minHeight: '600px',
        backgroundImage: `linear-gradient(rgba(10, 37, 64, 0.75), rgba(10, 37, 64, 0.75)), url(${CarrerHero})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center'
      }}>
        <div className="hero-text-content" style={{ maxWidth: '850px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: '700', marginBottom: '20px' }}>
            Build Your Future With Kavach Global
          </h1>
        </div>
      </div>

      {/* ── Vacancies & Form Section ── */}
      <div className="section-container" style={{ padding: '80px 100px', backgroundImage: `url(${AboutBg})`, backgroundSize: 'cover' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ color: '#B42A26', fontSize: '14px', fontWeight: '600', letterSpacing: '1px' }}>VACANCY / CAREER</div>
          <h2 style={{ fontSize: '38px', color: '#0A2540', marginBottom: '15px' }}>Join Our <span style={{ color: '#B83934' }}>Team!</span></h2>
          <p className="career-sub-text" style={{ maxWidth: '800px', margin: '0 auto', color: '#494B4D', fontSize: '16px', lineHeight: '1.6' }}>
            We're here to help you find the right solutions for your business. Whether you have a question, need support, or want to discuss a project, our team is ready to assist you. Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="vacancy-layout" style={{ display: 'flex', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {/* Job List */}
          <div style={{ flex: '2', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {jobVacancies.map((job, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(`job-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  padding: '25px', background: 'white', borderRadius: '15px',
                  borderBottom: '3px solid #B83934',
                  boxShadow: hoveredCard === `job-${index}`
                    ? '0 12px 30px rgba(184,57,52,0.18)' : '0 4px 10px rgba(0,0,0,0.05)',
                  transform: hoveredCard === `job-${index}` ? 'translateY(-6px)' : 'translateY(0)',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                  cursor: 'pointer',
                }}
              >
                <div style={{ color: '#6B7280', fontSize: '13px', marginBottom: '5px' }}>{job.type}</div>
                <div style={{ color: '#B83934', fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>{job.title}</div>
                <p style={{ color: '#494B4D', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>{job.desc}</p>
                <div style={{ color: '#B83934', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  Apply Now
                </div>
              </div>
            ))}
          </div>

          {/* Application Form */}
          <div className="application-form" style={{ flex: '1', background: '#FFF1F0', padding: '30px', borderRadius: '20px', height: 'fit-content' }}>
            <h3 style={{ textAlign: 'center', color: '#0A2540', marginBottom: '25px' }}>Join Our Team</h3>

            {submitted && (
              <div style={{
                background: '#d4edda', color: '#155724', border: '1px solid #c3e6cb',
                borderRadius: '8px', padding: '12px 16px', marginBottom: '16px',
                fontSize: '14px', textAlign: 'center'
              }}>
                ✅ Application submitted successfully!
              </div>
            )}

            <input
              type="text"
              placeholder="Your Name*"
              className="input-field"
              value={formData.name}
              maxLength={100}
              onChange={e => {
                const value = e.target.value;
                if (/^[a-zA-Z\s]*$/.test(value)) {
                  setFormData({ ...formData, name: value });
                }
              }}
            />
            <input
              type="email"
              placeholder="Your Email*"
              className="input-field"
              value={formData.email}
              onChange={e => {
                const value = e.target.value;
                if (/^[a-zA-Z0-9@._+-]*$/.test(value)) {
                  setFormData({ ...formData, email: value });
                }
              }}
            />
            <CustomSelect
              placeholder="Position Applied For*"
              options={['Operations Executive', 'Security Officer', 'Field Engineer']}
              value={formData.position}
              onChange={val => setFormData({ ...formData, position: val })}
            />
            <textarea
              placeholder="Your Message"
              className="input-field"
              style={{ height: '100px', resize: 'none' }}
              value={formData.message}
              maxLength={250}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
            />
            <div style={{ textAlign: 'right', fontSize: '12px', color: '#6B7280', marginTop: '-10px', marginBottom: '10px' }}>
              {formData.message.length}/250
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              style={{
                width: '100%', padding: '15px', background: '#FFD128', color: '#0A2540',
                border: 'none', borderRadius: '10px', fontWeight: '700', cursor: 'pointer', fontSize: '16px'
              }}
            >
              Send Application
            </button>
          </div>
        </div>
      </div>

      {/* ── Why Work With Us Section ── */}
      <div className="section-container" style={{ padding: '80px 100px', background: 'linear-gradient(180deg, #fff 0%, #FFF1F0 100%)' }}>
        <div className="benefit-header" style={{ display: 'flex', justifyContent: 'space-between', gap: '40px', marginBottom: '50px' }}>
          <div style={{ flex: '1' }}>
            <div style={{ color: '#B42A26', fontSize: '16px', fontWeight: '600', marginBottom: '10px' }}>Our Benefit</div>
            <h2 style={{ fontSize: '38px', color: '#0A2540', margin: 0 }}>Why Work <span style={{ color: '#B83934' }}>With</span> Us</h2>
          </div>
          <div style={{ flex: '1.2', color: '#494B4D', fontSize: '16px', lineHeight: '1.8' }}>
            We Believe In Creating A Workplace That Supports Growth, Innovation, And Employee Well-Being. Our Team Members Are Empowered With Opportunities To Learn, Grow, And Succeed In A Collaborative Environment.
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {benefits.map((b, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredCard(`benefit-${i}`)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                padding: '30px 20px', background: 'white', borderRadius: '15px',
                borderBottom: '4px solid #B83934',
                boxShadow: hoveredCard === `benefit-${i}`
                  ? '0 12px 30px rgba(184,57,52,0.18)' : '0 4px 15px rgba(0,0,0,0.05)',
                transform: hoveredCard === `benefit-${i}` ? 'translateY(-6px)' : 'translateY(0)',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                cursor: 'pointer',
              }}
            >
              <div style={{ color: '#B42A26', fontWeight: '700', fontSize: '18px', marginBottom: '10px' }}>{b.title}</div>
              <div style={{ color: '#494B4D', fontSize: '14px', lineHeight: '1.6' }}>{b.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <section
        className="w-full relative overflow-hidden"
        style={{ backgroundImage: `url(${aboutLast})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(5, 15, 40, 0.85)', zIndex: 1 }} />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-[60px] relative flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-10" style={{ zIndex: 2 }}>
          <div className="flex flex-col gap-3 w-full lg:max-w-[480px]">
            <h2 style={{ margin: 0, lineHeight: 1.3 }}>
              <span style={{ color: '#FFFFFF', fontSize: '32px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.76px' }}>READY TO PARTNER <br /> WITH </span>
              <span style={{ color: '#FA221C', fontSize: '32px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.76px' }}>KAVACH</span>
              <span style={{ color: '#FFFFFF', fontSize: '32px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.76px' }}> GLOBAL!</span>
            </h2>
            <p style={{ margin: 0, color: '#FFFFFF', fontSize: '16px', fontWeight: 400, textTransform: 'capitalize', lineHeight: '1.6', letterSpacing: '0.36px' }}>
              Let's Build Something Extraordinary Together. Our Experts Are Ready To Craft Tailored Solutions That Drive Real Results For Your Organization.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto flex-shrink-0">
            <a href="/new/contact" className="btn-yellow-hover flex items-center justify-center gap-2 rounded-[10px] w-full sm:w-auto" style={{ backgroundColor: '#FFD128', padding: '14px 32px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              <span style={{ color: '#0A2540', fontSize: '18px', fontWeight: 600, textTransform: 'capitalize', letterSpacing: '0.42px' }}>Get In Touch</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="7" y1="17" x2="17" y2="7" stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" />
                <polyline points="7 7 17 7 17 17" stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </a>
            <a href="/new/services" className="btn-outline-hover flex items-center justify-center gap-2 rounded-[10px] w-full sm:w-auto" style={{ backgroundColor: 'transparent', padding: '14px 32px', textDecoration: 'none', outline: '2px solid #FFD128', whiteSpace: 'nowrap' }}>
              <span style={{ color: '#FFD128', fontSize: '18px', fontWeight: 600, textTransform: 'capitalize', letterSpacing: '0.42px' }}>Explore Solutions</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="7" y1="17" x2="17" y2="7" stroke="#FFD128" strokeWidth="2.5" strokeLinecap="round" />
                <polyline points="7 7 17 7 17 17" stroke="#FFD128" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;