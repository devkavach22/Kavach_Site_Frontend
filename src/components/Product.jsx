// /* eslint-disable no-undef */
// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';

// const products = [
//     {
//         id: 'konvert-hr',
//         name: 'Konvert HR',
//         tagline: 'Revolutionizing HR & Payroll',
//         description: 'A state-of-the-art payroll processing and HR platform that is user-friendly, highly secure, and compliant with legal and statutory norms. Designed to minimize manual intervention and streamline processes for businesses of all sizes.',
//         badge: 'HR Suite',
//         accentColor: '#f97316',
//         gradientFrom: '#f97316',
//         gradientTo: '#ef4444',
//         bgGlow: 'rgba(249,115,22,0.15)',
//         siteLink: 'https://marketing.konverthr.com/',
//         icon: (
//             <svg viewBox="0 0 48 48" fill="none" width="28" height="28">
//                 <circle cx="18" cy="14" r="7" fill="currentColor" />
//                 <path d="M6 36c0-7 5-11 12-11s12 4 12 11" fill="currentColor" />
//                 <circle cx="34" cy="18" r="5" fill="currentColor" opacity="0.6" />
//                 <path d="M28 30c0-4 2.5-6 6-6s6 2 6 6" fill="currentColor" opacity="0.4" />
//             </svg>
//         ),
//         features: [
//             { icon: '⚡', label: 'Smart Hiring', desc: 'AI-powered candidate screening & ranking that finds the perfect fit 10x faster.' },
//             { icon: '📋', label: 'Auto Onboarding', desc: 'Paperless, seamless employee onboarding with automated workflows.' },
//             { icon: '💰', label: 'Payroll Engine', desc: 'Automated salary processing with built-in compliance, TDS, PF, ESI & tax calculations.' },
//             { icon: '📊', label: 'Performance AI', desc: 'Real-time analytics and 360° reviews to boost team productivity.' },
//             { icon: '🕐', label: 'Time & Attendance', desc: 'Track leaves, working hours effortlessly with biometric and digital integration.' },
//             { icon: '⚙️', label: 'Custom HR Settings', desc: 'Configure company policies, salary structures and approval workflows.' },
//         ],
//         stats: [{ v: '10x', l: 'Faster Hiring' }, { v: '80%', l: 'Admin Saved' }, { v: '99.9%', l: 'Accuracy' }],
//         highlights: ['Employee Portal', 'Leave Tracking', 'Tax Management', 'Multi-branch', 'Payroll Automation', 'Statutory Reports'],
//     },
//     {
//         id: 'kavach-ai',
//         name: 'Kavach AI',
//         tagline: 'Intelligent Security Shield',
//         description: 'Enterprise-grade AI security platform providing real-time threat detection and predictive cyber defense for your entire digital infrastructure — protecting every endpoint, every second.',
//         badge: 'AI Security',
//         accentColor: '#dc2626',
//         gradientFrom: '#dc2626',
//         gradientTo: '#7f1d1d',
//         bgGlow: 'rgba(220,38,38,0.15)',
//         siteLink: 'https://marketing.konverthr.com/',
//         icon: (
//             <svg viewBox="0 0 48 48" fill="none" width="28" height="28">
//                 <path d="M24 4L8 11v12c0 10.5 6.8 19.8 16 22 9.2-2.2 16-11.5 16-22V11L24 4z" fill="currentColor" />
//                 <path d="M18 24l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//         ),
//         features: [
//             { icon: '🔍', label: 'Threat Detection', desc: 'Real-time AI-powered threat identification with millisecond response times.' },
//             { icon: '📡', label: 'Deep Monitoring', desc: '360° infrastructure surveillance with intelligent anomaly detection.' },
//             { icon: '🤖', label: 'Predictive Defense', desc: 'Machine learning models predict threats before they cause damage.' },
//             { icon: '🔐', label: 'Zero Trust', desc: 'Identity-first security architecture ensuring every access is verified.' },
//             { icon: '☁️', label: 'Cloud Protection', desc: 'End-to-end protection across all cloud platforms and hybrid environments.' },
//             { icon: '📄', label: 'Compliance Reports', desc: 'Automated compliance documentation and audit-ready security reports.' },
//         ],
//         stats: [{ v: '0.1ms', l: 'Response' }, { v: '99.99%', l: 'Uptime' }, { v: '24/7', l: 'Monitoring' }],
//         highlights: ['Threat Intel', 'Auto Response', 'Compliance Reports', 'Cloud Protection', 'Zero Trust', 'Incident Response'],
//     },
// ];

// // ── TYPEWRITER COMPONENT (loops forever, alternates color) ──
// const TYPEWRITER_COLORS = [
//     { color: '#374151', gradient: false },
//     { color: null, gradient: true },
// ];

// const TypewriterText = ({ text }) => {
//     const [tw, setTw] = useState({ displayed: '', index: 0, deleting: false, colorIndex: 0 });

//     useEffect(() => {
//         const { displayed, index, deleting, colorIndex } = tw;
//         let delay;
//         if (!deleting && index < text.length) {
//             delay = setTimeout(() => setTw(prev => ({
//                 ...prev, displayed: prev.displayed + text[prev.index], index: prev.index + 1
//             })), 30);
//         } else if (!deleting && index === text.length) {
//             delay = setTimeout(() => setTw(prev => ({ ...prev, deleting: true })), 1800);
//         } else if (deleting && displayed.length > 0) {
//             delay = setTimeout(() => setTw(prev => ({
//                 ...prev, displayed: prev.displayed.slice(0, -1)
//             })), 18);
//         } else if (deleting && displayed.length === 0) {
//             delay = setTimeout(() => setTw(prev => ({
//                 displayed: '', index: 0, deleting: false,
//                 colorIndex: (prev.colorIndex + 1) % TYPEWRITER_COLORS.length
//             })), 30);
//         }
//         return () => clearTimeout(delay);
//     }, [tw, text]);

//     const isGradient = TYPEWRITER_COLORS[tw.colorIndex].gradient;

//     return (
//         <span style={isGradient ? {
//             background: 'linear-gradient(135deg, #f97316, #ef4444)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             backgroundClip: 'text',
//             fontWeight: 600,
//         } : { color: TYPEWRITER_COLORS[tw.colorIndex].color, fontWeight: 600 }}>
//             {tw.displayed}
//             <span style={{
//                 display: 'inline-block',
//                 width: '2px',
//                 height: '1em',
//                 background: isGradient ? '#f97316' : '#374151',
//                 marginLeft: '2px',
//                 verticalAlign: 'text-bottom',
//                 animation: 'blink 0.8s step-end infinite',
//                 WebkitTextFillColor: 'initial',
//             }} />
//         </span>
//     );
// };

// const Product = () => {
//     const [active, setActive] = useState(0);
//     const [animating, setAnimating] = useState(false);
//     const [activeFeature, setActiveFeature] = useState(null);
//     const [counters, setCounters] = useState([0, 0, 0]);
//     const navigate = useNavigate();
//     const p = products[active];

//     const switchProduct = (i) => {
//         if (i === active) return;
//         setAnimating(true);
//         setTimeout(() => {
//             setActive(i);
//             setAnimating(false);
//             setActiveFeature(null);
//         }, 250);
//     };

//     // Subtle floating orb animation state
//     const [orbPos, setOrbPos] = useState({ x: 0, y: 0 });
//     const heroRef = useRef(null);

//     const handleMouseMove = (e) => {
//         if (!heroRef.current) return;
//         const rect = heroRef.current.getBoundingClientRect();
//         setOrbPos({
//             x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
//             y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
//         });
//     };

//     return (
//         <div style={{ background: '#fafafa', fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif", overflowX: 'hidden' }}>

//             {/* ── HERO ── */}
//             <section
//                 ref={heroRef}
//                 onMouseMove={handleMouseMove}
//                 style={{
//                     padding: '100px 20px 30px',
//                     textAlign: 'center',
//                     background: 'white',
//                     position: 'relative',
//                     overflow: 'hidden',
//                 }}
//             >
//                 {/* Decorative orbs */}
//                 <div style={{
//                     position: 'absolute', top: '-60px', right: '-60px',
//                     width: '300px', height: '300px', borderRadius: '50%',
//                     background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)',
//                     transform: `translate(${orbPos.x}px, ${orbPos.y}px)`,
//                     transition: 'transform 0.4s ease',
//                     pointerEvents: 'none',
//                 }} />
//                 <div style={{
//                     position: 'absolute', bottom: '-40px', left: '-40px',
//                     width: '250px', height: '250px', borderRadius: '50%',
//                     background: 'radial-gradient(circle, rgba(239,68,68,0.1) 0%, transparent 70%)',
//                     transform: `translate(${-orbPos.x}px, ${-orbPos.y}px)`,
//                     transition: 'transform 0.4s ease',
//                     pointerEvents: 'none',
//                 }} />

//                 {/* ── REDUCED HEADING SIZE ── */}
//                 <h1 style={{
//                     fontSize: 'clamp(1.8rem, 4vw, 3rem)',
//                     fontWeight: 900, color: '#111',
//                     letterSpacing: '-0.03em', lineHeight: 1.05,
//                     marginBottom: '20px',
//                 }}>
//                     Kavach{' '}
//                     <span style={{
//                         background: 'linear-gradient(135deg, #f97316, #ef4444)',
//                         WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
//                         backgroundClip: 'text',
//                     }}>
//                         Digital Solutions
//                     </span>
//                 </h1>

//                 {/* ── TYPEWRITER SUBTITLE ── */}
//                 <p style={{ fontSize: '1.15rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.7 }}>
//                     <TypewriterText text="Empowering modern enterprises with automated HR management and elite AI-driven security — built for scale, speed, and compliance." />
//                 </p>

//                 {/* Mini stat bar */}
//                 <div style={{
//                     display: 'inline-flex', gap: '0', borderRadius: '16px',
//                     overflow: 'hidden', border: '1px solid #e5e7eb',
//                     background: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
//                 }}>
//                     {[['500+', 'Enterprises'], ['99.9%', 'Accuracy'], ['24/7', 'Support']].map(([v, l], i) => (
//                         <div key={i} style={{
//                             padding: '14px 28px',
//                             borderRight: i < 2 ? '1px solid #e5e7eb' : 'none',
//                             textAlign: 'center',
//                         }}>
//                             <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#f97316' }}>{v}</div>
//                             <div style={{ fontSize: '0.7rem', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{l}</div>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* ── PRODUCT SELECTOR TABS ── */}
//             <div style={{ background: 'white', borderBottom: '1px solid #f3f4f6', padding: '0 20px', display: 'flex', justifyContent: 'center' }}>
//                 <div style={{ display: 'flex', gap: '4px', padding: '8px', background: '#f9fafb', borderRadius: '14px', margin: '20px 0' }}>
//                     {products.map((prod, i) => (
//                         <button
//                             key={prod.id}
//                             onClick={() => switchProduct(i)}
//                             style={{
//                                 display: 'flex', alignItems: 'center', gap: '10px',
//                                 padding: '8px 16px', borderRadius: '10px', border: 'none',
//                                 cursor: 'pointer', transition: 'all 0.25s ease', fontWeight: 600,
//                                 fontSize: '0.82rem',
//                                 background: active === i
//                                     ? `linear-gradient(135deg, ${prod.gradientFrom}, ${prod.gradientTo})`
//                                     : 'transparent',
//                                 color: active === i ? 'white' : '#6b7280',
//                                 boxShadow: active === i ? `0 4px 15px ${prod.bgGlow}` : 'none',
//                                 transform: active === i ? 'scale(1.02)' : 'scale(1)',
//                             }}
//                         >
//                             <span style={{ color: active === i ? 'white' : prod.accentColor }}>{prod.icon}</span>
//                             {prod.name}
//                         </button>
//                     ))}
//                 </div>
//             </div>

//             {/* ── MAIN CONTENT ── */}
//             <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px 80px' }}>
//                 <div style={{
//                     display: 'grid',
//                     gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
//                     gap: '32px',
//                     opacity: animating ? 0 : 1,
//                     transform: animating ? 'translateY(10px)' : 'translateY(0)',
//                     transition: 'all 0.25s ease',
//                 }}>

//                     {/* LEFT: Info card */}
//                     <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

//                         {/* Product Identity Card */}
//                         <div style={{
//                             background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})`,
//                             borderRadius: '24px', padding: '32px',
//                             color: 'white', position: 'relative', overflow: 'hidden',
//                         }}>
//                             {/* Decorative bg circles */}
//                             <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
//                             <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />

//                             {/* Badge row with View Site button */}
//                             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
//                                 <div style={{
//                                     display: 'inline-flex', alignItems: 'center', gap: '8px',
//                                     background: 'rgba(255,255,255,0.2)', borderRadius: '8px',
//                                     padding: '4px 12px',
//                                 }}>
//                                     <span style={{ color: 'white', opacity: 0.9 }}>{p.icon}</span>
//                                     <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{p.badge}</span>
//                                 </div>

//                                 {/* View Site Button */}
//                                 <a
//                                     href={p.siteLink}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     style={{
//                                         display: 'inline-flex', alignItems: 'center', gap: '6px',
//                                         padding: '7px 16px', borderRadius: '8px',
//                                         background: 'rgba(255,255,255,0.18)',
//                                         border: '1px solid rgba(255,255,255,0.35)',
//                                         color: 'white', fontWeight: 700,
//                                         fontSize: '0.78rem', textDecoration: 'none',
//                                         letterSpacing: '0.03em',
//                                         transition: 'all 0.2s ease',
//                                         backdropFilter: 'blur(4px)',
//                                         position: 'relative', zIndex: 2,
//                                     }}
//                                     onMouseEnter={e => {
//                                         e.currentTarget.style.background = 'rgba(255,255,255,0.30)';
//                                         e.currentTarget.style.transform = 'translateY(-1px)';
//                                     }}
//                                     onMouseLeave={e => {
//                                         e.currentTarget.style.background = 'rgba(255,255,255,0.18)';
//                                         e.currentTarget.style.transform = 'translateY(0)';
//                                     }}
//                                 >
//                                     <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13">
//                                         <path d="M10 1a9 9 0 100 18A9 9 0 0010 1zm0 1.8a7.2 7.2 0 110 14.4A7.2 7.2 0 0110 2.8zm0 1.2c-.6 0-1.5.8-2.1 2.4H12c-.5-1.6-1.4-2.4-2-2.4zm-2.5.4A7.3 7.3 0 006 8h2.2c.1-.6.2-1.2.4-1.7l-.9-.9-.2.1zm5 0l-.2-.1-.9.9c.2.5.3 1.1.4 1.7H14a7.3 7.3 0 00-1.5-2.5zM5.8 8H4.1a5.5 5.5 0 000 4h1.7A13.5 13.5 0 015.8 8zm8.4 0a13.5 13.5 0 010 4h1.7a5.5 5.5 0 000-4h-1.7zM6.2 13H4.5a7.3 7.3 0 001.5 2.5l.2.1.9-.9c-.2-.5-.3-1.1-.4-1.7zm7.6 0c-.1.6-.2 1.2-.4 1.7l.9.9.2-.1A7.3 7.3 0 0015.9 13h-1.7-.4zm-5.4 0h3.2c-.5 1.6-1.4 2.4-2 2.4-.6 0-1.5-.8-2.1-2.4h.9z" />
//                                     </svg>
//                                     View Site ↗
//                                 </a>
//                             </div>

//                             <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '12px', position: 'relative', zIndex: 1 }}>
//                                 {p.tagline}
//                             </h2>
//                             <p style={{ fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.9, position: 'relative', zIndex: 1 }}>
//                                 {p.description}
//                             </p>
//                         </div>

//                         {/* Stats Grid */}
//                         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
//                             {p.stats.map((s, i) => (
//                                 <div key={i} style={{
//                                     textAlign: 'center', padding: '20px 12px',
//                                     background: 'white', borderRadius: '16px',
//                                     border: '1px solid #f3f4f6',
//                                     boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
//                                     transition: 'all 0.2s',
//                                     cursor: 'default',
//                                 }}
//                                     onMouseEnter={e => {
//                                         e.currentTarget.style.transform = 'translateY(-3px)';
//                                         e.currentTarget.style.boxShadow = `0 8px 24px ${p.bgGlow}`;
//                                         e.currentTarget.style.borderColor = p.accentColor + '40';
//                                     }}
//                                     onMouseLeave={e => {
//                                         e.currentTarget.style.transform = 'translateY(0)';
//                                         e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)';
//                                         e.currentTarget.style.borderColor = '#f3f4f6';
//                                     }}
//                                 >
//                                     <div style={{ fontSize: '1.6rem', fontWeight: 900, color: p.accentColor }}>{s.v}</div>
//                                     <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px' }}>{s.l}</div>
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Highlights Pills */}
//                         <div style={{
//                             background: 'white', borderRadius: '20px', padding: '24px',
//                             border: '1px solid #f3f4f6', boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
//                         }}>
//                             <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>
//                                 Key Capabilities
//                             </div>
//                             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
//                                 {p.highlights.map((h, i) => (
//                                     <span key={i} style={{
//                                         padding: '6px 14px', borderRadius: '100px',
//                                         background: p.bgGlow,
//                                         border: `1px solid ${p.accentColor}25`,
//                                         color: p.accentColor,
//                                         fontSize: '0.8rem', fontWeight: 600,
//                                     }}>
//                                         {h}
//                                     </span>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                     {/* RIGHT: Interactive Features */}
//                     <div style={{
//                         background: 'white', borderRadius: '24px', padding: '32px',
//                         border: '1px solid #f3f4f6',
//                         boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
//                     }}>
//                         <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>
//                             Core Features
//                         </div>
//                         <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
//                             {p.features.map((f, i) => (
//                                 <div
//                                     key={i}
//                                     onClick={() => setActiveFeature(activeFeature === i ? null : i)}
//                                     onMouseEnter={e => {
//                                         if (activeFeature !== i) {
//                                             e.currentTarget.style.background = '#f3f4f6';
//                                             e.currentTarget.style.border = `1.5px solid ${p.accentColor}30`;
//                                             e.currentTarget.style.transform = 'translateX(4px)';
//                                             e.currentTarget.style.boxShadow = `0 4px 16px ${p.bgGlow}`;
//                                         }
//                                     }}
//                                     onMouseLeave={e => {
//                                         if (activeFeature !== i) {
//                                             e.currentTarget.style.background = '#f9fafb';
//                                             e.currentTarget.style.border = '1.5px solid transparent';
//                                             e.currentTarget.style.transform = 'translateX(0)';
//                                             e.currentTarget.style.boxShadow = 'none';
//                                         }
//                                     }}
//                                     style={{
//                                         borderRadius: '16px', cursor: 'pointer',
//                                         transition: 'all 0.25s ease',
//                                         border: activeFeature === i
//                                             ? `1.5px solid ${p.accentColor}50`
//                                             : '1.5px solid transparent',
//                                         background: activeFeature === i ? p.bgGlow : '#f9fafb',
//                                         overflow: 'hidden',
//                                     }}
//                                 >
//                                     <div style={{
//                                         display: 'flex', alignItems: 'center', gap: '16px',
//                                         padding: '16px 18px',
//                                     }}>
//                                         <div style={{
//                                             width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
//                                             background: activeFeature === i
//                                                 ? `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})`
//                                                 : 'white',
//                                             display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                             fontSize: '1.3rem',
//                                             boxShadow: activeFeature === i ? `0 4px 12px ${p.bgGlow}` : '0 2px 8px rgba(0,0,0,0.06)',
//                                             transition: 'all 0.25s',
//                                         }}>
//                                             {f.icon}
//                                         </div>
//                                         <div style={{ flex: 1 }}>
//                                             <div style={{
//                                                 fontWeight: 700, fontSize: '0.95rem',
//                                                 color: activeFeature === i ? p.accentColor : '#111',
//                                                 transition: 'color 0.2s',
//                                             }}>
//                                                 {f.label}
//                                             </div>
//                                             {activeFeature !== i && (
//                                                 <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginTop: '2px' }}>
//                                                     Click to learn more
//                                                 </div>
//                                             )}
//                                         </div>
//                                         <div style={{
//                                             color: activeFeature === i ? p.accentColor : '#d1d5db',
//                                             transition: 'all 0.25s',
//                                             transform: activeFeature === i ? 'rotate(90deg)' : 'rotate(0)',
//                                             fontSize: '1.1rem',
//                                         }}>
//                                             ›
//                                         </div>
//                                     </div>
//                                     {activeFeature === i && (
//                                         <div style={{
//                                             padding: '0 18px 16px 78px',
//                                             fontSize: '0.88rem', lineHeight: 1.65, color: '#4b5563',
//                                         }}>
//                                             {f.desc}
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                 </div>
//             </div>

//             {/* ── CTA SECTION ── */}
//             <section style={{ position: 'relative', overflow: 'hidden', padding: '55px 20px' }}>
//                 {/* Rich background */}
//                 <div style={{
//                     position: 'absolute', inset: 0,
//                     background: 'linear-gradient(135deg, #7c2d12 0%, #991b1b 40%, #92400e 100%)',
//                 }} />
//                 {/* Mesh overlay */}
//                 <div style={{
//                     position: 'absolute', inset: 0,
//                     backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(249,115,22,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(239,68,68,0.2) 0%, transparent 50%)',
//                 }} />
//                 {/* Top wave */}
//                 <div style={{ position: 'absolute', top: 0, left: 0, right: 0, lineHeight: 0, transform: 'rotate(180deg)' }}>
//                     <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '60px', display: 'block' }}>
//                         <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
//                     </svg>
//                 </div>

//                 <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
//                     {/* Badge */}
//                     <div style={{
//                         display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px',
//                     }}>
//                         <div style={{ width: '28px', height: '2px', background: '#fb923c' }} />
//                         <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#fb923c', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
//                             Special Bundle Offer
//                         </span>
//                         <div style={{ width: '28px', height: '2px', background: '#fb923c' }} />
//                     </div>

//                     <h2 style={{
//                         fontSize: 'clamp(1.6rem, 4vw, 2.6rem)',
//                         fontWeight: 900, color: 'white',
//                         letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '14px',
//                     }}>
//                         Ready to transform{' '}
//                         <span style={{
//                             background: 'linear-gradient(135deg, #fb923c, #fbbf24)',
//                             WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
//                         }}>
//                             your business?
//                         </span>
//                     </h2>

//                     <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 28px', lineHeight: 1.7 }}>
//                         Get both products at special bundle pricing —{' '}
//                         <span style={{ color: 'white', fontWeight: 600 }}>Konvert HR + Kavach AI</span>{' '}
//                         — and supercharge your entire enterprise.
//                     </p>

//                     {/* Buttons */}
//                     <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
//                         <button
//                             onClick={() => navigate('/contact')}
//                             style={{
//                                 padding: '16px 36px', borderRadius: '14px', border: 'none',
//                                 background: 'linear-gradient(135deg, #f97316, #ef4444)',
//                                 color: 'white', fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
//                                 boxShadow: '0 8px 30px rgba(249,115,22,0.4)',
//                                 transition: 'all 0.2s',
//                                 letterSpacing: '-0.01em',
//                             }}
//                             onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(249,115,22,0.5)'; }}
//                             onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(249,115,22,0.4)'; }}
//                         >
//                             Talk to Sales →
//                         </button>
//                     </div>

//                     {/* Trust indicators */}
//                     <div style={{
//                         display: 'flex', justifyContent: 'center', gap: '28px',
//                         marginTop: '28px', flexWrap: 'wrap',
//                     }}>
//                         {['No Credit Card', 'Free Onboarding', '24/7 Support'].map((t, i) => (
//                             <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
//                                 <span style={{ color: '#fb923c' }}>✓</span> {t}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             <style>{`
//                 @keyframes pulse {
//                     0%, 100% { opacity: 1; transform: scale(1); }
//                     50% { opacity: 0.6; transform: scale(0.8); }
//                 }
//                 @keyframes blink {
//                     0%, 100% { opacity: 1; }
//                     50% { opacity: 0; }
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default Product;


/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
    {
        id: 'konvert-hr',
        name: 'Konvert HR',
        tagline: 'Revolutionizing HR & Payroll',
        description: 'A state-of-the-art payroll processing and HR platform that is user-friendly, highly secure, and compliant with legal and statutory norms. Designed to minimize manual intervention and streamline processes for businesses of all sizes.',
        badge: 'HR Suite',
        accentColor: '#f97316',
        gradientFrom: '#f97316',
        gradientTo: '#ef4444',
        bgGlow: 'rgba(249,115,22,0.15)',
        siteLink: 'https://marketing.konverthr.com/',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" width="28" height="28">
                <circle cx="18" cy="14" r="7" fill="currentColor" />
                <path d="M6 36c0-7 5-11 12-11s12 4 12 11" fill="currentColor" />
                <circle cx="34" cy="18" r="5" fill="currentColor" opacity="0.6" />
                <path d="M28 30c0-4 2.5-6 6-6s6 2 6 6" fill="currentColor" opacity="0.4" />
            </svg>
        ),
        features: [
            { icon: '⚡', label: 'Smart Hiring', desc: 'AI-powered candidate screening & ranking that finds the perfect fit 10x faster.' },
            { icon: '📋', label: 'Auto Onboarding', desc: 'Paperless, seamless employee onboarding with automated workflows.' },
            { icon: '💰', label: 'Payroll Engine', desc: 'Automated salary processing with built-in compliance, TDS, PF, ESI & tax calculations.' },
            { icon: '📊', label: 'Performance AI', desc: 'Real-time analytics and 360° reviews to boost team productivity.' },
            { icon: '🕐', label: 'Time & Attendance', desc: 'Track leaves, working hours effortlessly with biometric and digital integration.' },
            { icon: '⚙️', label: 'Custom HR Settings', desc: 'Configure company policies, salary structures and approval workflows.' },
        ],
        stats: [{ v: '10x', l: 'Faster Hiring' }, { v: '80%', l: 'Admin Saved' }, { v: '99.9%', l: 'Accuracy' }],
        highlights: ['Employee Portal', 'Leave Tracking', 'Tax Management', 'Multi-branch', 'Payroll Automation', 'Statutory Reports'],
    },
    {
        id: 'kavach-ai',
        name: 'Kavach AI',
        tagline: 'Intelligent Security Shield',
        description: 'Enterprise-grade AI security platform providing real-time threat detection and predictive cyber defense for your entire digital infrastructure — protecting every endpoint, every second.',
        badge: 'AI Security',
        accentColor: '#dc2626',
        gradientFrom: '#dc2626',
        gradientTo: '#7f1d1d',
        bgGlow: 'rgba(220,38,38,0.15)',
        siteLink: 'https://marketing.konverthr.com/',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" width="28" height="28">
                <path d="M24 4L8 11v12c0 10.5 6.8 19.8 16 22 9.2-2.2 16-11.5 16-22V11L24 4z" fill="currentColor" />
                <path d="M18 24l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        features: [
            { icon: '🔍', label: 'Threat Detection', desc: 'Real-time AI-powered threat identification with millisecond response times.' },
            { icon: '📡', label: 'Deep Monitoring', desc: '360° infrastructure surveillance with intelligent anomaly detection.' },
            { icon: '🤖', label: 'Predictive Defense', desc: 'Machine learning models predict threats before they cause damage.' },
            { icon: '🔐', label: 'Zero Trust', desc: 'Identity-first security architecture ensuring every access is verified.' },
            { icon: '☁️', label: 'Cloud Protection', desc: 'End-to-end protection across all cloud platforms and hybrid environments.' },
            { icon: '📄', label: 'Compliance Reports', desc: 'Automated compliance documentation and audit-ready security reports.' },
        ],
        stats: [{ v: '0.1ms', l: 'Response' }, { v: '99.99%', l: 'Uptime' }, { v: '24/7', l: 'Monitoring' }],
        highlights: ['Threat Intel', 'Auto Response', 'Compliance Reports', 'Cloud Protection', 'Zero Trust', 'Incident Response'],
    },
];

// ── TYPEWRITER COMPONENT (loops forever, alternates color) ──
const TYPEWRITER_COLORS = [
    { color: '#374151', gradient: false },
    { color: null, gradient: true },
];

const TypewriterText = ({ text }) => {
    const [tw, setTw] = useState({ displayed: '', index: 0, deleting: false, colorIndex: 0 });

    useEffect(() => {
        const { displayed, index, deleting, colorIndex } = tw;
        let delay;
        if (!deleting && index < text.length) {
            delay = setTimeout(() => setTw(prev => ({
                ...prev, displayed: prev.displayed + text[prev.index], index: prev.index + 1
            })), 30);
        } else if (!deleting && index === text.length) {
            delay = setTimeout(() => setTw(prev => ({ ...prev, deleting: true })), 1800);
        } else if (deleting && displayed.length > 0) {
            delay = setTimeout(() => setTw(prev => ({
                ...prev, displayed: prev.displayed.slice(0, -1)
            })), 18);
        } else if (deleting && displayed.length === 0) {
            delay = setTimeout(() => setTw(prev => ({
                displayed: '', index: 0, deleting: false,
                colorIndex: (prev.colorIndex + 1) % TYPEWRITER_COLORS.length
            })), 30);
        }
        return () => clearTimeout(delay);
    }, [tw, text]);

    const isGradient = TYPEWRITER_COLORS[tw.colorIndex].gradient;

    return (
        <span style={isGradient ? {
            background: 'linear-gradient(135deg, #f97316, #ef4444)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: 600,
        } : { color: TYPEWRITER_COLORS[tw.colorIndex].color, fontWeight: 600 }}>
            {tw.displayed}
            <span style={{
                display: 'inline-block',
                width: '2px',
                height: '1em',
                background: isGradient ? '#f97316' : '#374151',
                marginLeft: '2px',
                verticalAlign: 'text-bottom',
                animation: 'blink 0.8s step-end infinite',
                WebkitTextFillColor: 'initial',
            }} />
        </span>
    );
};

const Product = () => {
    const [active, setActive] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [activeFeature, setActiveFeature] = useState(null);
    const [counters, setCounters] = useState([0, 0, 0]);
    const navigate = useNavigate();
    const p = products[active];

    const switchProduct = (i) => {
        if (i === active) return;
        setAnimating(true);
        setTimeout(() => {
            setActive(i);
            setAnimating(false);
            setActiveFeature(null);
        }, 250);
    };

    // Subtle floating orb animation state
    const [orbPos, setOrbPos] = useState({ x: 0, y: 0 });
    const heroRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!heroRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();
        setOrbPos({
            x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
            y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
        });
    };

    return (
        <div style={{ background: '#fafafa', fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif", overflowX: 'hidden' }}>

            {/* ── HERO ── */}
            <section
                ref={heroRef}
                onMouseMove={handleMouseMove}
                style={{
                    padding: '100px 20px 30px',
                    textAlign: 'center',
                    background: 'white',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Decorative orbs */}
                <div style={{
                    position: 'absolute', top: '-60px', right: '-60px',
                    width: '300px', height: '300px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)',
                    transform: `translate(${orbPos.x}px, ${orbPos.y}px)`,
                    transition: 'transform 0.4s ease',
                    pointerEvents: 'none',
                }} />
                <div style={{
                    position: 'absolute', bottom: '-40px', left: '-40px',
                    width: '250px', height: '250px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(239,68,68,0.1) 0%, transparent 70%)',
                    transform: `translate(${-orbPos.x}px, ${-orbPos.y}px)`,
                    transition: 'transform 0.4s ease',
                    pointerEvents: 'none',
                }} />

                {/* ── REDUCED HEADING SIZE ── */}
                <h1 style={{
                    fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                    fontWeight: 900, color: '#111',
                    letterSpacing: '-0.03em', lineHeight: 1.05,
                    marginBottom: '20px',
                }}>
                    Kavach{' '}
                    <span style={{
                        background: 'linear-gradient(135deg, #f97316, #ef4444)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>
                        Digital Solutions
                    </span>
                </h1>

                {/* ── TYPEWRITER SUBTITLE ── */}
                <p style={{ fontSize: '1.15rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.7 }}>
                    <TypewriterText text="Empowering modern enterprises with automated HR management and elite AI-driven security — built for scale, speed, and compliance." />
                </p>

                {/* Mini stat bar — REDUCED SIZE */}
                <div style={{
                    display: 'inline-flex', gap: '0', borderRadius: '12px',
                    overflow: 'hidden', border: '1px solid #e5e7eb',
                    background: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                }}>
                    {[['500+', 'Enterprises'], ['99.9%', 'Accuracy'], ['24/7', 'Support']].map(([v, l], i) => (
                        <div key={i} style={{
                            padding: '8px 18px',
                            borderRight: i < 2 ? '1px solid #e5e7eb' : 'none',
                            textAlign: 'center',
                        }}>
                            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#f97316' }}>{v}</div>
                            <div style={{ fontSize: '0.6rem', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{l}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── PRODUCT SELECTOR TABS ── */}
            <div style={{ background: 'white', borderBottom: '1px solid #f3f4f6', padding: '0 20px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'flex', gap: '4px', padding: '8px', background: '#f9fafb', borderRadius: '14px', margin: '20px 0' }}>
                    {products.map((prod, i) => (
                        <button
                            key={prod.id}
                            onClick={() => switchProduct(i)}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '10px',
                                padding: '8px 16px', borderRadius: '10px', border: 'none',
                                cursor: 'pointer', transition: 'all 0.25s ease', fontWeight: 600,
                                fontSize: '0.82rem',
                                background: active === i
                                    ? `linear-gradient(135deg, ${prod.gradientFrom}, ${prod.gradientTo})`
                                    : 'transparent',
                                color: active === i ? 'white' : '#6b7280',
                                boxShadow: active === i ? `0 4px 15px ${prod.bgGlow}` : 'none',
                                transform: active === i ? 'scale(1.02)' : 'scale(1)',
                            }}
                        >
                            <span style={{ color: active === i ? 'white' : prod.accentColor }}>{prod.icon}</span>
                            {prod.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* ── MAIN CONTENT ── */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px 80px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '32px',
                    opacity: animating ? 0 : 1,
                    transform: animating ? 'translateY(10px)' : 'translateY(0)',
                    transition: 'all 0.25s ease',
                }}>

                    {/* LEFT: Info card */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                        {/* Product Identity Card */}
                        <div style={{
                            background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})`,
                            borderRadius: '24px', padding: '32px',
                            color: 'white', position: 'relative', overflow: 'hidden',
                        }}>
                            {/* Decorative bg circles */}
                            <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
                            <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />

                            {/* Badge row with View Site button */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                                <div style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                                    background: 'rgba(255,255,255,0.2)', borderRadius: '8px',
                                    padding: '4px 12px',
                                }}>
                                    <span style={{ color: 'white', opacity: 0.9 }}>{p.icon}</span>
                                    <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{p.badge}</span>
                                </div>

                                {/* View Site Button */}
                                <a
                                    href={p.siteLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                                        padding: '7px 16px', borderRadius: '8px',
                                        background: 'rgba(255,255,255,0.18)',
                                        border: '1px solid rgba(255,255,255,0.35)',
                                        color: 'white', fontWeight: 700,
                                        fontSize: '0.78rem', textDecoration: 'none',
                                        letterSpacing: '0.03em',
                                        transition: 'all 0.2s ease',
                                        backdropFilter: 'blur(4px)',
                                        position: 'relative', zIndex: 2,
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.30)';
                                        e.currentTarget.style.transform = 'translateY(-1px)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.18)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13">
                                        <path d="M10 1a9 9 0 100 18A9 9 0 0010 1zm0 1.8a7.2 7.2 0 110 14.4A7.2 7.2 0 0110 2.8zm0 1.2c-.6 0-1.5.8-2.1 2.4H12c-.5-1.6-1.4-2.4-2-2.4zm-2.5.4A7.3 7.3 0 006 8h2.2c.1-.6.2-1.2.4-1.7l-.9-.9-.2.1zm5 0l-.2-.1-.9.9c.2.5.3 1.1.4 1.7H14a7.3 7.3 0 00-1.5-2.5zM5.8 8H4.1a5.5 5.5 0 000 4h1.7A13.5 13.5 0 015.8 8zm8.4 0a13.5 13.5 0 010 4h1.7a5.5 5.5 0 000-4h-1.7zM6.2 13H4.5a7.3 7.3 0 001.5 2.5l.2.1.9-.9c-.2-.5-.3-1.1-.4-1.7zm7.6 0c-.1.6-.2 1.2-.4 1.7l.9.9.2-.1A7.3 7.3 0 0015.9 13h-1.7-.4zm-5.4 0h3.2c-.5 1.6-1.4 2.4-2 2.4-.6 0-1.5-.8-2.1-2.4h.9z" />
                                    </svg>
                                    View Site ↗
                                </a>
                            </div>

                            <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '12px', position: 'relative', zIndex: 1 }}>
                                {p.tagline}
                            </h2>
                            <p style={{ fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.9, position: 'relative', zIndex: 1 }}>
                                {p.description}
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                            {p.stats.map((s, i) => (
                                <div key={i} style={{
                                    textAlign: 'center', padding: '20px 12px',
                                    background: 'white', borderRadius: '16px',
                                    border: '1px solid #f3f4f6',
                                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                                    transition: 'all 0.2s',
                                    cursor: 'default',
                                }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                        e.currentTarget.style.boxShadow = `0 8px 24px ${p.bgGlow}`;
                                        e.currentTarget.style.borderColor = p.accentColor + '40';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)';
                                        e.currentTarget.style.borderColor = '#f3f4f6';
                                    }}
                                >
                                    <div style={{ fontSize: '1.6rem', fontWeight: 900, color: p.accentColor }}>{s.v}</div>
                                    <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px' }}>{s.l}</div>
                                </div>
                            ))}
                        </div>

                        {/* Highlights Pills */}
                        <div style={{
                            background: 'white', borderRadius: '20px', padding: '24px',
                            border: '1px solid #f3f4f6', boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                        }}>
                            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>
                                Key Capabilities
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {p.highlights.map((h, i) => (
                                    <span key={i} style={{
                                        padding: '6px 14px', borderRadius: '100px',
                                        background: p.bgGlow,
                                        border: `1px solid ${p.accentColor}25`,
                                        color: p.accentColor,
                                        fontSize: '0.8rem', fontWeight: 600,
                                    }}>
                                        {h}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Interactive Features */}
                    <div style={{
                        background: 'white', borderRadius: '24px', padding: '32px',
                        border: '1px solid #f3f4f6',
                        boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
                    }}>
                        <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>
                            Core Features
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {p.features.map((f, i) => (
                                <div
                                    key={i}
                                    onClick={() => setActiveFeature(activeFeature === i ? null : i)}
                                    onMouseEnter={e => {
                                        if (activeFeature !== i) {
                                            e.currentTarget.style.background = '#f3f4f6';
                                            e.currentTarget.style.border = `1.5px solid ${p.accentColor}30`;
                                            e.currentTarget.style.transform = 'translateX(4px)';
                                            e.currentTarget.style.boxShadow = `0 4px 16px ${p.bgGlow}`;
                                        }
                                    }}
                                    onMouseLeave={e => {
                                        if (activeFeature !== i) {
                                            e.currentTarget.style.background = '#f9fafb';
                                            e.currentTarget.style.border = '1.5px solid transparent';
                                            e.currentTarget.style.transform = 'translateX(0)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }
                                    }}
                                    style={{
                                        borderRadius: '16px', cursor: 'pointer',
                                        transition: 'all 0.25s ease',
                                        border: activeFeature === i
                                            ? `1.5px solid ${p.accentColor}50`
                                            : '1.5px solid transparent',
                                        background: activeFeature === i ? p.bgGlow : '#f9fafb',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <div style={{
                                        display: 'flex', alignItems: 'center', gap: '16px',
                                        padding: '16px 18px',
                                    }}>
                                        <div style={{
                                            width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
                                            background: activeFeature === i
                                                ? `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})`
                                                : 'white',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: '1.3rem',
                                            boxShadow: activeFeature === i ? `0 4px 12px ${p.bgGlow}` : '0 2px 8px rgba(0,0,0,0.06)',
                                            transition: 'all 0.25s',
                                        }}>
                                            {f.icon}
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{
                                                fontWeight: 700, fontSize: '0.95rem',
                                                color: activeFeature === i ? p.accentColor : '#111',
                                                transition: 'color 0.2s',
                                            }}>
                                                {f.label}
                                            </div>
                                            {activeFeature !== i && (
                                                <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginTop: '2px' }}>
                                                    Click to learn more
                                                </div>
                                            )}
                                        </div>
                                        <div style={{
                                            color: activeFeature === i ? p.accentColor : '#d1d5db',
                                            transition: 'all 0.25s',
                                            transform: activeFeature === i ? 'rotate(90deg)' : 'rotate(0)',
                                            fontSize: '1.1rem',
                                        }}>
                                            ›
                                        </div>
                                    </div>
                                    {activeFeature === i && (
                                        <div style={{
                                            padding: '0 18px 16px 78px',
                                            fontSize: '0.88rem', lineHeight: 1.65, color: '#4b5563',
                                        }}>
                                            {f.desc}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* ── CTA SECTION ── */}
            <section style={{ position: 'relative', overflow: 'hidden', padding: '55px 20px' }}>
                {/* Rich background */}
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(135deg, #7c2d12 0%, #991b1b 40%, #92400e 100%)',
                }} />
                {/* Mesh overlay */}
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(249,115,22,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(239,68,68,0.2) 0%, transparent 50%)',
                }} />
                {/* Top wave */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, lineHeight: 0, transform: 'rotate(180deg)' }}>
                    <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '60px', display: 'block' }}>
                        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
                    </svg>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    {/* Badge */}
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px',
                    }}>
                        <div style={{ width: '28px', height: '2px', background: '#fb923c' }} />
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#fb923c', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                            Special Bundle Offer
                        </span>
                        <div style={{ width: '28px', height: '2px', background: '#fb923c' }} />
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(1.6rem, 4vw, 2.6rem)',
                        fontWeight: 900, color: 'white',
                        letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '14px',
                    }}>
                        Ready to transform{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #fb923c, #fbbf24)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                        }}>
                            your business?
                        </span>
                    </h2>

                    <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 28px', lineHeight: 1.7 }}>
                        Get both products at special bundle pricing —{' '}
                        <span style={{ color: 'white', fontWeight: 600 }}>Konvert HR + Kavach AI</span>{' '}
                        — and supercharge your entire enterprise.
                    </p>

                    {/* Buttons */}
                    <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button
                            onClick={() => navigate('/contact')}
                            style={{
                                padding: '16px 36px', borderRadius: '14px', border: 'none',
                                background: 'linear-gradient(135deg, #f97316, #ef4444)',
                                color: 'white', fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
                                boxShadow: '0 8px 30px rgba(249,115,22,0.4)',
                                transition: 'all 0.2s',
                                letterSpacing: '-0.01em',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(249,115,22,0.5)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(249,115,22,0.4)'; }}
                        >
                            Talk to Sales →
                        </button>
                    </div>

                    {/* Trust indicators */}
                    <div style={{
                        display: 'flex', justifyContent: 'center', gap: '28px',
                        marginTop: '28px', flexWrap: 'wrap',
                    }}>
                        {['No Credit Card', 'Free Onboarding', '24/7 Support'].map((t, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                                <span style={{ color: '#fb923c' }}>✓</span> {t}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(0.8); }
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default Product;