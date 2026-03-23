import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, Globe2, Building2 } from 'lucide-react';
import map from "../assets/map.png";

const MARKERS = [
  { name: "USA",       cx: 162, cy: 158, region: "Americas",    description: "North America Hub" },
  { name: "Ireland",   cx: 424, cy: 124, region: "Europe",      description: "European Gateway",  labelAnchor: "end",   labelDx: -4 },
  { name: "UK",        cx: 440, cy: 118, region: "Europe",      description: "United Kingdom",     labelAnchor: "start", labelDx: 4  },
  { name: "Dubai",     cx: 604, cy: 199, region: "Middle East", description: "Middle East Office" },
  { name: "India",     cx: 648, cy: 182, region: "Asia",        description: "Headquarters", isHQ: true },
  { name: "Singapore", cx: 716, cy: 244, region: "Asia",        description: "Asia Pacific Hub" },
  { name: "Australia", cx: 762, cy: 330, region: "Oceania",     description: "Oceania Office" },
];

// ─── World Map using PNG image + SVG markers overlay ─────────────────────────
function WorldMap({ activeLocation, onHover }) {
  return (
    <div style={{ position: "relative", width: "100%", background: "#f5f5f5", borderRadius: 16, overflow: "hidden" }}>
      <svg viewBox="0 0 960 500" width="100%" height="450" style={{ display: "block" }}>
        {/* Map image fills the entire SVG canvas */}
        <image
          href={map}
          x="0" y="0"
          width="960" height="500"
          preserveAspectRatio="xMidYMid slice"
        />

        {/* Markers only — no arcs, no tooltip */}
        {MARKERS.map(loc => {
          const isActive = activeLocation === loc.name;
          const isHQ = loc.isHQ;
          const r = isHQ ? 7 : 6;
          return (
            <g key={loc.name}
              style={{ cursor: "pointer" }}
              onMouseEnter={() => onHover(loc.name)}
              onMouseLeave={() => onHover(null)}
            >
              {/* Soft glow halo */}
              <circle cx={loc.cx} cy={loc.cy}
                r={isActive ? r + 12 : r + 7}
                fill={isActive ? "rgba(239,68,68,0.20)" : "rgba(239,68,68,0.12)"}
                style={{ transition: "all 0.3s" }}
              />
              {/* Pulse ring animation */}
              <circle cx={loc.cx} cy={loc.cy} r={r} fill="none"
                stroke="#ef4444" strokeWidth="1" opacity="0">
                <animate attributeName="r" values={`${r};${r + 14};${r}`} dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0;0.5" dur="2.4s" repeatCount="indefinite" />
              </circle>
              {/* Core dot */}
              <circle cx={loc.cx} cy={loc.cy}
                r={isActive ? r + 1.5 : r}
                fill="#ef4444"
                stroke="white"
                strokeWidth={isHQ ? 2 : 1.5}
                style={{ transition: "all 0.25s" }}
              />
              {/* Label */}
              <text
                x={loc.cx + (loc.labelDx || 0)}
                y={loc.cy - r - 8}
                textAnchor={loc.labelAnchor || "middle"}
                fill={isActive ? "#111" : "#1f2937"}
                fontSize={isActive ? 11 : 10}
                fontWeight={isActive ? "800" : "600"}
                fontFamily="system-ui, -apple-system, sans-serif"
                style={{ pointerEvents: "none", userSelect: "none" }}
              >
                {loc.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// ─── Main ContactPage ─────────────────────────────────────────────────────────
function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [activeLocation, setActiveLocation] = useState(null);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); console.log('Form submitted:', formData); };

  const offices = [
    {
      title: 'Ahmedabad',
      address: 'A/53, 5th floor, New York Tower, Thaltej, S G Highway, Ahmedabad - 380015.',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=New+York+Tower+Thaltej+SG+Highway+Ahmedabad+380015'
    },
    {
      title: 'Himachal Pradesh',
      address: '29, First Floor, Block1, Dev Bhoomi Apartments, Khasra no- 9,10,11,12,13,20,21, kitas-7, mauza jadhog, deonghat, Tehsil & District Solan - 173211',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Dev+Bhoomi+Apartments+Deonghat+Solan+Himachal+Pradesh+173211'
    },
    {
      title: 'Ayodhya',
      address: '4th Floor, Arundhati Bhawan West, Multilevel Parking, Tedhi Bajar, Dist.- Ayodhya, State:- Uttar Pradesh India, Pin- 224123',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Arundhati+Bhawan+Tedhi+Bajar+Ayodhya+Uttar+Pradesh+224123'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-[76px]">

      {/* ── Hero + Form ── */}
      <div className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 py-20 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6">
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                  <span className="text-sm uppercase tracking-widest text-gray-700 font-bold">Contact with Kavach Technology</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                <span className="text-gray-900">Feel free to </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 animate-gradient">get in touch</span>
                <span className="text-gray-900"> with us</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We're here to help and answer any question you might have. We look forward to hearing from you.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-10 blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-red-400 to-orange-400 rounded-full opacity-10 blur-3xl" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-gray-100 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500" />
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-3 shadow-lg transform hover:scale-110 transition-transform duration-300">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">Send Us a Message</h2>
                  <p className="text-sm text-gray-600">Fill out the form below and we'll get back to you shortly</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative group">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name *</label>
                      <input type="text" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:bg-white outline-none transition-all duration-300 group-hover:border-orange-300 text-gray-900 placeholder-gray-400 text-sm" required />
                    </div>
                    <div className="relative group">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address *</label>
                      <input type="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:bg-white outline-none transition-all duration-300 group-hover:border-orange-300 text-gray-900 placeholder-gray-400 text-sm" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative group">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number *</label>
                      <input type="tel" name="phone" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:bg-white outline-none transition-all duration-300 group-hover:border-orange-300 text-gray-900 placeholder-gray-400 text-sm" required />
                    </div>
                    <div className="relative group">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Service Required</label>
                      <input type="text" name="service" placeholder="e.g., Web Development" value={formData.service} onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:bg-white outline-none transition-all duration-300 group-hover:border-orange-300 text-gray-900 placeholder-gray-400 text-sm" />
                    </div>
                  </div>
                  <div className="relative group">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Your Message</label>
                    <textarea name="message" placeholder="Tell us about your project or inquiry..." value={formData.message} onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:bg-white outline-none transition-all duration-300 resize-none group-hover:border-orange-300 text-gray-900 placeholder-gray-400 text-sm" />
                  </div>
                  <div className="text-center pt-2">
                    <button type="submit"
                      className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 hover:from-orange-600 hover:via-red-600 hover:to-orange-600 text-white font-bold text-base rounded-full transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl active:scale-95">
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Contact Info Cards ── */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mail className="w-8 h-8 text-white" />,
                title: 'Email Us',
                content: (
                  <a href="mailto:info@kavachglobal.com" className="flex items-center gap-3 text-gray-600 hover:text-orange-500 transition-colors group/link">
                    <span className="w-2 h-2 bg-orange-500 rounded-full group-hover/link:scale-150 transition-transform" />
                    <span className="font-medium">info@kavachglobal.com</span>
                  </a>
                )
              },
              {
                icon: <Phone className="w-8 h-8 text-white" />,
                title: 'Call Us',
                content: (
                  <a href="tel:+917228888904" className="flex items-center gap-3 text-gray-600 hover:text-orange-500 transition-colors group/link">
                    <span className="w-2 h-2 bg-orange-500 rounded-full group-hover/link:scale-150 transition-transform" />
                    <span className="font-medium">+91 72288 88904</span>
                  </a>
                )
              },
              {
                icon: <Clock className="w-8 h-8 text-white" />,
                title: 'Working Hours',
                content: (
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                      <div><p className="font-bold text-gray-900">Mon - Sat</p><p className="text-gray-600">8:00 AM - 6:00 PM</p></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                      <div><p className="font-bold text-gray-900">Sunday</p><p className="text-gray-600">CLOSED</p></div>
                    </div>
                  </div>
                )
              }
            ].map((card, i) => (
              <div key={i} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-200 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-5 transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{card.title}</h3>
                  <div className="space-y-4">{card.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Office Locations ── */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 px-6 py-3 rounded-full mb-6">
              <Building2 className="w-5 h-5 text-orange-600" />
              <span className="text-orange-600 font-bold text-sm uppercase tracking-wide">Our Locations</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Visit <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Our Offices</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">We have offices across India to serve you better</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {offices.map((office, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-orange-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 opacity-10 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">{office.title}</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6 group-hover:w-24 transition-all duration-300" />
                  <p className="text-gray-600 leading-relaxed mb-6">{office.address}</p>
                  <a href={office.mapUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all duration-300 group/btn">
                    <span>View on Map</span>
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl transform rotate-1" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4158384567896!2d72.50633031496285!3d23.04503258491966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b3c6b6b6b6b%3A0x6b6b6b6b6b6b6b6b!2sThaltej%2C%20Ahmedabad%2C%20Gujarat%20380054!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%" height="500"
                style={{ border: 0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Global Presence ── */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-6 bg-orange-50 border border-orange-200">
              <Globe2 className="w-4 h-4 text-orange-500" />
              <span style={{ color: '#f97316', fontWeight: 700, fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase' }}>Global Network</span>
            </div>
            <h2 className="font-black mb-4 leading-tight text-gray-900" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)' }}>
              Our Global{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Presence</span>
            </h2>
            <p className="text-gray-500 max-w-md mx-auto" style={{ fontSize: 16, lineHeight: 1.7 }}>
              Serving clients worldwide with offices and partners across multiple continents
            </p>
          </div>

          {/* Stats row */}
          <div className="flex justify-center gap-10 mb-8">
            {[["7", "Countries"], ["3", "Continents"], ["500+", "Clients"]].map(([n, l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{
                  fontWeight: 900, fontSize: 22, lineHeight: 1,
                  background: "linear-gradient(135deg,#f97316,#ef4444)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>{n}</div>
                <div style={{ color: "#9ca3af", fontSize: 10, fontWeight: 700, letterSpacing: "0.8px", marginTop: 3, textTransform: "uppercase" }}>{l}</div>
              </div>
            ))}
          </div>

          {/* Map Box */}
          <div style={{
            borderRadius: 20, overflow: "hidden",
            boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
            border: "1px solid #e5e7eb",
          }}>
            <WorldMap activeLocation={activeLocation} onHover={setActiveLocation} />
          </div>

          {/* Location Tags */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {MARKERS.map(loc => {
              const isActive = activeLocation === loc.name;
              return (
                <button key={loc.name}
                  onMouseEnter={() => setActiveLocation(loc.name)}
                  onMouseLeave={() => setActiveLocation(null)}
                  style={{
                    padding: '8px 18px', borderRadius: 999,
                    fontWeight: 600, fontSize: 13, cursor: 'pointer',
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: isActive ? 'linear-gradient(135deg,#f97316,#ef4444)' : '#f9fafb',
                    color: isActive ? 'white' : '#374151',
                    border: `1.5px solid ${isActive ? 'transparent' : '#e5e7eb'}`,
                    boxShadow: isActive ? '0 4px 16px rgba(249,115,22,0.35)' : 'none',
                    transform: isActive ? 'translateY(-2px)' : 'none',
                    transition: 'all 0.2s ease', outline: 'none',
                  }}
                >
                  <span style={{
                    width: 7, height: 7, borderRadius: '50%', display: 'inline-block',
                    background: isActive ? 'white' : '#ef4444', transition: 'all 0.2s',
                  }} />
                  {loc.name}
                  {loc.isHQ && (
                    <span style={{
                      fontSize: 9, fontWeight: 800,
                      background: isActive ? 'rgba(255,255,255,0.25)' : 'rgba(249,115,22,0.12)',
                      padding: '2px 7px', borderRadius: 6,
                      color: isActive ? 'white' : '#f97316', letterSpacing: '0.8px',
                    }}>HQ</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Animations ── */}
      <style>{`
        @keyframes blob {
          0%,100% { transform: translate(0,0) scale(1); }
          25%      { transform: translate(20px,-20px) scale(1.1); }
          50%      { transform: translate(-20px,20px) scale(0.9); }
          75%      { transform: translate(20px,20px) scale(1.05); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        @keyframes gradient {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        .animate-gradient { background-size:200% 200%; animation: gradient 3s ease infinite; }
      `}</style>
    </div>
  );
}

export default ContactPage;