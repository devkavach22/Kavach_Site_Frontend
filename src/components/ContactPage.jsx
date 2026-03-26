import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Clock, ArrowRight } from 'lucide-react';
import map from "../assets/map.png";

const MARKERS = [
  { name: "USA", cx: 180, cy: 165, region: "Americas" },
  { name: "Ireland", cx: 445, cy: 115, region: "Europe", labelAnchor: "end", labelDx: -8 },
  { name: "UK", cx: 458, cy: 110, region: "Europe", labelAnchor: "start", labelDx: 8 },
  { name: "Dubai", cx: 595, cy: 215, region: "Middle East" },
  { name: "India", cx: 655, cy: 235, region: "Asia", isHQ: true },
  { name: "Singapore", cx: 735, cy: 305, region: "Asia" },
  { name: "Australia", cx: 810, cy: 385, region: "Oceania" },
];

function WorldMap({ activeLocation, onHover }) {
  return (
    <div style={{ position: "relative", width: "100%", background: "#f9fafb", borderRadius: 16, overflow: "hidden" }}>
      <svg viewBox="0 0 960 500" width="100%" height="450" style={{ display: "block" }}>
        <image href={map} x="0" y="0" width="960" height="500" preserveAspectRatio="xMidYMid slice" />
        {MARKERS.map(loc => {
          const isActive = activeLocation === loc.name;
          const r = loc.isHQ ? 7 : 6;
          return (
            <g key={loc.name} style={{ cursor: "pointer" }} onMouseEnter={() => onHover(loc.name)} onMouseLeave={() => onHover(null)}>
              <circle cx={loc.cx} cy={loc.cy} r={isActive ? r + 12 : r + 7} fill={isActive ? "rgba(239,68,68,0.20)" : "rgba(239,68,68,0.12)"} style={{ transition: "all 0.3s" }} />
              <circle cx={loc.cx} cy={loc.cy} r={r} fill="none" stroke="#ef4444" strokeWidth="1" opacity="0">
                <animate attributeName="r" values={`${r};${r + 14};${r}`} dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0;0.5" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <circle cx={loc.cx} cy={loc.cy} r={isActive ? r + 1.5 : r} fill="#ef4444" stroke="white" strokeWidth={loc.isHQ ? 2 : 1.5} style={{ transition: "all 0.25s" }} />
              <text x={loc.cx + (loc.labelDx || 0)} y={loc.cy - r - 8} textAnchor={loc.labelAnchor || "middle"} fill={isActive ? "#111" : "#1f2937"} fontSize={isActive ? 11 : 10} fontWeight={isActive ? "800" : "600"} style={{ pointerEvents: "none", userSelect: "none", fontFamily: 'Barlow, sans-serif' }}>
                {loc.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function ContactPage() {
  const [formData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [activeLocation, setActiveLocation] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    }, { threshold: 0.1 });
    document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = e => { e.preventDefault(); console.log('Form submitted:', formData); };

  const offices = [
    { title: 'Ahmedabad', address: 'A/53, 5th floor, New York Tower, Thaltej, S G Highway, Ahmedabad - 380015.', mapUrl: '#' },
    { title: 'Himachal Pradesh', address: '29, First Floor, Block1, Dev Bhoomi Apartments, Deonghat, Solan - 173211', mapUrl: '#' },
    { title: 'Ayodhya', address: '4th Floor, Arundhati Bhawan West, Tedhi Bajar, Ayodhya, UP - 224123', mapUrl: '#' }
  ];

  return (
    <div className="min-h-screen bg-white pt-[76px]" style={{ fontFamily: "'Barlow', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;0,900;1,800&family=Barlow:wght@400;500;600&display=swap');
        :root { --org: #e05a00; --org2: #f97316; --dark: #1a2332; }
        .kv-h { font-family:'Barlow Condensed',sans-serif; font-weight:800; text-transform:uppercase; letter-spacing:0.02em; line-height:1.05; }
        .kv-label { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:0.72rem; letter-spacing:0.28em; text-transform:uppercase; color:var(--org); display:flex; align-items:center; gap:6px; }
        .kv-label::before { content:''; width:8px; height:8px; border-radius:50%; background:var(--org); }
        .scroll-reveal { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1); }
        .scroll-reveal.is-visible { opacity: 1; transform: translateY(0); }
        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
        .dot-bg-dark { background-color: #1a2332; background-image:radial-gradient(rgba(255,255,255,0.03) 1px,transparent 1px); background-size:28px 28px; }
        .dot-bg-light { background-image:radial-gradient(rgba(0,0,0,0.04) 1px,transparent 1px); background-size:28px 28px; }

        /* ── Desktop-only: tighten Global Presence section ── */
        @media (min-width: 1024px) {
          .gp-section {
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }
          .gp-header {
            margin-bottom: 16px !important;
          }
          .gp-header h2 {
            margin-bottom: 0 !important;
          }
          .gp-header .kv-label {
            margin-bottom: 8px !important;
          }
          .gp-stats {
            margin-bottom: 16px !important;
          }
          .gp-map {
            margin-bottom: 0 !important;
          }
          .gp-pills {
            margin-top: 16px !important;
          }
        }
      `}</style>

      {/* 1. HERO + FORM */}
      <section className="relative py-24 px-4 overflow-hidden dot-bg-dark text-white">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <div className="kv-label mb-6">Contact Us</div>
              <h1 className="kv-h text-white mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
                FEEL FREE TO <span style={{ color: 'var(--org2)' }}>GET IN TOUCH</span> WITH US
              </h1>
              <p className="text-gray-400 text-xl leading-relaxed mb-8">
                We're here to help and answer any question you might have. We look forward to hearing from you.
              </p>
            </div>

            <div className="scroll-reveal stagger-2">
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border-t-4 border-orange-500">
                <h2 className="kv-h text-gray-900 text-2xl mb-6 text-center">Send Us a <span className="text-orange-500">Message</span></h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-gray-100 rounded-xl border-none focus:ring-2 focus:ring-orange-500 text-gray-900" />
                    <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-gray-100 rounded-xl border-none focus:ring-2 focus:ring-orange-500 text-gray-900" />
                  </div>
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 bg-gray-100 rounded-xl border-none focus:ring-2 focus:ring-orange-500 text-gray-900" />
                  <textarea rows="4" placeholder="Your Message" className="w-full px-4 py-3 bg-gray-100 rounded-xl border-none focus:ring-2 focus:ring-orange-500 text-gray-900 resize-none" />
                  <button type="submit" className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl uppercase tracking-widest hover:shadow-lg transition-all">Send Inquiry</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT INFO CARDS */}
      <section className="py-20 px-4 bg-gray-50 dot-bg-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Mail className="text-white" />, title: 'Email Us', text: 'info@kavachglobal.com' },
              { icon: <Phone className="text-white" />, title: 'Call Us', text: '+91 72288 88904' },
              { icon: <Clock className="text-white" />, title: 'Working Hours', text: 'Mon - Sat: 8 AM - 6 PM' }
            ].map((card, i) => (
              <div key={i} className={`scroll-reveal stagger-${i+1} bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-orange-500 transition-all`}>
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-orange-200 shadow-lg">{card.icon}</div>
                <h3 className="kv-h text-gray-900 text-xl mb-2">{card.title}</h3>
                <p className="text-gray-500 font-medium">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OFFICE LOCATIONS + IFRAME */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <div className="kv-label justify-center mb-4">Our Offices</div>
            <h2 className="kv-h text-gray-900" style={{ fontSize: '2.8rem' }}>VISIT <span className="text-orange-500">OUR LOCATIONS</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {offices.map((office, idx) => (
              <div key={idx} className={`scroll-reveal stagger-${idx+1} group bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-orange-500 transition-all`}>
                <MapPin className="text-orange-600 mb-6" size={32} />
                <h3 className="kv-h text-xl mb-4 text-gray-900">{office.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{office.address}</p>
                <a href={office.mapUrl} className="text-orange-600 font-bold text-xs uppercase flex items-center gap-2">View on Map <ArrowRight size={14}/></a>
              </div>
            ))}
          </div>

          <div className="scroll-reveal rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-50">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4158384567896!2d72.50633031496285!3d23.04503258491966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b3c6b6b6b6b%3A0x6b6b6b6b6b6b6b6b!2sThaltej%2C%20Ahmedabad%2C%20Gujarat%20380054!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} loading="lazy" title="Office Location" />
          </div>
        </div>
      </section>

      {/* 4. GLOBAL PRESENCE — desktop padding tightened via .gp-* classes */}
      <section className="py-24 px-4 dot-bg-dark gp-section" style={{ background: '#1a2332' }}>
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-10 scroll-reveal gp-header">
            <div className="kv-label justify-center mb-6">Global Network</div>
            <h2 className="kv-h text-white mb-4" style={{ fontSize: '3rem' }}>
              OUR GLOBAL <span className="text-orange-500">PRESENCE</span>
            </h2>
          </div>

          <div className="flex justify-center gap-12 mb-12 scroll-reveal stagger-2 gp-stats">
            {[["7", "Countries"], ["3", "Continents"], ["500+", "Clients"]].map(([n, l]) => (
              <div key={l} className="text-center">
                <div className="text-3xl font-black text-orange-500">{n}</div>
                <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{l}</div>
              </div>
            ))}
          </div>

          <div className="scroll-reveal p-2 rounded-3xl shadow-xl border border-white/10 gp-map" style={{ background: '#242f42' }}>
            <WorldMap activeLocation={activeLocation} onHover={setActiveLocation} />
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-10 scroll-reveal stagger-3 gp-pills">
            {MARKERS.map(loc => (
              <button key={loc.name}
                onMouseEnter={() => setActiveLocation(loc.name)}
                onMouseLeave={() => setActiveLocation(null)}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all border ${activeLocation === loc.name ? 'bg-orange-600 text-white border-orange-600' : 'border-white/20 text-gray-300'}`}
                style={activeLocation !== loc.name ? { background: 'rgba(255,255,255,0.05)' } : {}}
              >
                {loc.name} {loc.isHQ && <span className="ml-2 opacity-60 text-[8px] bg-white/10 px-1 rounded">HQ</span>}
              </button>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

export default ContactPage;