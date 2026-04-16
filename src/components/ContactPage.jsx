import React, { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import map from "../assets/map.png";
import ContactBg from "../assets/ContactBg.png";
import usBg from "../assets/AboutBg.png"; 
import aboutLast from "../assets/AboutLast.png";

// Updated MARKERS with specific offsets to prevent UK/Ireland overlap
const MARKERS = [
  { name: "USA", cx: 180, cy: 165, region: "Americas" },
  { name: "Ireland", cx: 445, cy: 115, region: "Europe", labelAnchor: "end", labelDx: -12, labelDy: 5 },
  { name: "UK", cx: 458, cy: 110, region: "Europe", labelAnchor: "start", labelDx: 12, labelDy: -5 },
  { name: "Dubai", cx: 595, cy: 215, region: "Middle East" },
  { name: "India", cx: 655, cy: 235, region: "Asia", isHQ: true },
  { name: "Singapore", cx: 735, cy: 305, region: "Asia" },
  { name: "Australia", cx: 810, cy: 385, region: "Oceania" },
];

function WorldMap({ activeLocation, onHover }) {
  return (
    <div style={{ position: "relative", width: "100%", background: "#f9fafb", borderRadius: 16, overflow: "hidden" }}>
      <svg viewBox="0 0 960 500" width="100%" height="auto" style={{ display: "block", maxWidth: "100%" }}>
        <image href={map} x="0" y="0" width="960" height="500" preserveAspectRatio="xMidYMid slice" />
        {MARKERS.map(loc => {
          const isActive = activeLocation === loc.name;
          const r = loc.isHQ ? 7 : 6;
          
          // Use specific offsets if provided, otherwise default to center-top
          const textX = loc.cx + (loc.labelDx || 0);
          const textY = loc.cy + (loc.labelDy || -(r + 8));
          const anchor = loc.labelAnchor || "middle";

          return (
            <g key={loc.name} style={{ cursor: "pointer" }} onMouseEnter={() => onHover(loc.name)} onMouseLeave={() => onHover(null)}>
              <circle cx={loc.cx} cy={loc.cy} r={isActive ? r + 12 : r + 7} fill={isActive ? "rgba(184,57,52,0.20)" : "rgba(184,57,52,0.12)"} style={{ transition: "all 0.3s" }} />
              <circle cx={loc.cx} cy={loc.cy} r={isActive ? r + 1.5 : r} fill="#B83934" stroke="white" strokeWidth={loc.isHQ ? 2 : 1.5} style={{ transition: "all 0.25s" }} />
              <text 
                x={textX} 
                y={textY} 
                textAnchor={anchor} 
                fill={isActive ? "#0A2540" : "#494B4D"} 
                fontSize={isActive ? 11 : 10} 
                fontWeight={isActive ? "700" : "500"} 
                style={{ pointerEvents: "none", userSelect: "none", fontFamily: 'Poppins, sans-serif' }}
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

function ContactPage() {
  const [activeLocation, setActiveLocation] = useState(null);

  const offices = [
    { title: 'Ahmedabad', address: 'A/53, 5th floor, New York Tower, Thaltej, S G Highway, Ahmedabad - 380015.' },
    { title: 'Himachal Pradesh', address: '29, First Floor, Block1, Dev Bhoomi Apartments, Deonghat, Solan - 173211' },
    { title: 'Ayodhya', address: '4th Floor, Arundhati Bhawan West, Tedhi Bajar, Ayodhya, UP - 224123' }
  ];

  const stats = [
    { n: "8", l: "Offices In India" },
    { n: "23,000+", l: "Team Members" },
    { n: "50+", l: "Industries Served" },
    { n: "7,500+", l: "Happy Clients" },
    { n: "7+", l: "Global Footprints" }
  ];

  const inputStyle = {
    padding: "18px 15px",
    background: "#F5F5F5",
    borderRadius: 10,
    border: "1px solid rgba(0,0,0,0.1)",
    fontSize: 16,
    fontFamily: "Poppins",
    color: "#494B4D",
    width: "100%",
    boxSizing: "border-box"
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: "#fff", overflowX: "hidden", width: "100%" }}>

      <style>{`
        @media (max-width: 768px) {
          .cp-hero { min-height: 260px !important; padding: 60px 20px !important; margin-top: 60px !important; width: 100% !important; box-sizing: border-box; }
          .cp-hero h1 { font-size: 24px !important; }
          .cp-contact-section { padding: 40px 16px !important; box-sizing: border-box; width: 100% !important; overflow: hidden; }
          .cp-contact-row { flex-direction: column !important; gap: 20px !important; width: 100% !important; margin: 0 !important; }
          .cp-info-card { flex: 1 1 100% !important; padding: 24px !important; width: 100% !important; box-sizing: border-box !important; min-width: 0 !important; }
          .cp-form-card { flex: 1 1 100% !important; padding: 24px !important; width: 100% !important; box-sizing: border-box !important; min-width: 0 !important; }
          .cp-form-grid { grid-template-columns: 1fr !important; }
          .cp-office-section { padding: 50px 16px !important; width: 100% !important; box-sizing: border-box; }
          .cp-office-grid { grid-template-columns: 1fr !important; width: 100% !important; }
          .cp-office-map { min-height: 280px !important; height: 280px !important; width: 100% !important; }
          .cp-global-section { padding: 50px 16px !important; width: 100% !important; box-sizing: border-box; }
          .cp-global-chip { padding: 6px 14px !important; font-size: 13px !important; }
          .cp-world-map svg { height: auto !important; width: 100% !important; }
          .cp-stats-row { gap: 40px 12px !important; width: 100% !important; margin: 0 auto !important; display: flex !important; justify-content: center !important; }
          .cp-stat-card { flex: 1 1 calc(50% - 12px) !important; padding: 40px 10px 24px !important; min-width: 0 !important; box-sizing: border-box !important; }
          .cp-cta-inner { flex-direction: column !important; align-items: flex-start !important; padding: 40px 20px !important; gap: 24px !important; width: 100% !important; box-sizing: border-box; }
          .cp-cta-buttons { flex-direction: column !important; width: 100% !important; }
          .cp-cta-buttons a { width: 100% !important; justify-content: center !important; box-sizing: border-box !important; }
          .cp-cta-title span { font-size: 24px !important; letter-spacing: 0.3px !important; }
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <div className="cp-hero" style={{
        backgroundImage: `url(${ContactBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "100px 40px",
        textAlign: "center",
        minHeight: 600,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        color: "#fff",
        marginTop: "80px",
        width: "100%",
        boxSizing: "border-box"
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(10, 31, 68, 0.75)" }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 42px)", fontWeight: 700, marginBottom: 15 }}>Get In Touch With Our Experts</h1>
        </div>
      </div>

      {/* 2. CONTACT US SECTION */}
      <section className="cp-contact-section" style={{ 
        padding: "80px 20px", 
        backgroundImage: `url(${usBg})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        width: "100%",
        boxSizing: "border-box",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(255, 255, 255, 0.60)", zIndex: 1 }} />
        
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <p style={{ color: "#B42A26", fontSize: 18, fontWeight: 500, letterSpacing: "0.36px" }}>Contact Us</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 700, color: "#0A2540" }}>
              Get In <span style={{ color: "#B83934" }}>Touch</span> With Our Experts
            </h2>
            <p style={{ maxWidth: 850, margin: "20px auto", color: "#494B4D", lineHeight: "33px", fontSize: 18 }}>
              We're here to help you find the right solutions for your business.
            </p>
          </div>

          <div className="cp-contact-row" style={{ display: "flex", flexWrap: "wrap", gap: 30, justifyContent: "center" }}>
            <div className="cp-info-card" style={{ flex: "1 1 350px", padding: "35px", background: "linear-gradient(136deg, #FFF1F0 0%, #FFFAE8 100%)", borderRadius: 24, border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: "#0A2540", borderBottom: "1px solid rgba(0,0,0,0.1)", paddingBottom: 15, marginBottom: 25 }}>Contact Information</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
                {[
                  { label: "Office Address", val: "A-53, New York Tower-A, Cross Road, Sarkhej - Gandhinagar Hwy, Ahmedabad, Gujarat 380054, India" },
                  { label: "Email Us", val: "info@kavachglobal.com" },
                  { label: "Call Us", val: "+91 72288 88904" },
                  { label: "Working Hours", val: "Mon - Sat: 8 AM - 6 PM" }
                ].map((item, i) => (
                  <div key={i} style={{ borderBottom: i === 3 ? "none" : "1px solid rgba(0,0,0,0.1)", paddingBottom: 20 }}>
                    <p style={{ color: "#B83934", fontWeight: 600, fontSize: 16, marginBottom: 8 }}>{item.label}</p>
                    <p style={{ color: "#494B4D", fontSize: 16, lineHeight: "29px" }}>{item.val}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="cp-form-card" style={{ flex: "1.5 1 450px", padding: "35px", background: "#fff", borderRadius: 24, border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: "#0A2540", borderBottom: "1px solid rgba(0,0,0,0.1)", paddingBottom: 15, marginBottom: 25 }}>Send Us A Message</h3>
              <div className="cp-form-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginBottom: 20 }}>
                <input style={inputStyle} placeholder="Your Name*" />
                <input style={inputStyle} placeholder="Your Email*" />
                <input style={inputStyle} placeholder="Phone Number*" />
                <input style={inputStyle} placeholder="Subject" />
              </div>
              <textarea style={{ ...inputStyle, height: 130, width: "100%", marginBottom: 30 }} placeholder="Your Message" />
              <button style={{ width: "100%", padding: "20px", background: "#FFD128", borderRadius: 12, color: "#0A2540", fontSize: 20, fontWeight: 700, border: "none", cursor: "pointer" }}>Send Inquiry</button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORPORATE OFFICE SECTION */}
      <section className="cp-office-section" style={{ padding: "80px 20px", background: "#f9fafb", width: "100%", boxSizing: "border-box" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 700, marginBottom: 50 }}>
          Visit Our <span style={{ color: "#B83934" }}>Corporate</span> Office
        </h2>
        <div className="cp-office-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 30, maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {offices.map((off, i) => (
              <div key={i} style={{ padding: "25px", background: "#fff", borderRadius: 20, boxShadow: "0px 0px 8px rgba(0,0,0,0.1)", borderBottom: "3px solid #B83934" }}>
                <div style={{ width: 50, height: 50, background: "#FFF1F0", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 15 }}>
                  <MapPin size={24} color="#B42A26" />
                </div>
                <h4 style={{ color: "#B42A26", fontSize: 21, fontWeight: 700, marginBottom: 5 }}>{off.title}</h4>
                <p style={{ color: "#494B4D", fontSize: 15, lineHeight: "26px", marginBottom: 15 }}>{off.address}</p>
                <div style={{ color: "#B83934", fontWeight: 500, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>
                  View On Map <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
          <div className="cp-office-map" style={{ borderRadius: 20, overflow: "hidden", border: "1px solid #ddd", minHeight: 400 }}>
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6979267156947!2d72.50604437591632!3d23.03487011589133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b94093c8301%3A0xc3f1a2384a8677a2!2sNew%20York%20Tower!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0, minHeight: 400 }} allowFullScreen="" loading="lazy"></iframe>
          </div>
        </div>
      </section>

      {/* 4. GLOBAL PRESENCE SECTION */}
      <section className="cp-global-section" style={{ padding: "80px 20px", textAlign: "center", backgroundColor: "#fff", width: "100%", boxSizing: "border-box" }}>
        <p style={{ color: "#B42A26", fontSize: 16, fontWeight: 500 }}>Global Network</p>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 700, color: "#0A2540", marginBottom: 30 }}>
          OUR <span style={{ color: "#B83934" }}>GLOBAL</span> PRESENCE
        </h2>
        
        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 40, flexWrap: "wrap" }}>
          {MARKERS.map(m => (
            <div key={m.name} 
              className="cp-global-chip"
              onMouseEnter={() => setActiveLocation(m.name)}
              onMouseLeave={() => setActiveLocation(null)}
              style={{
                padding: "8px 25px", borderRadius: 30, fontSize: 15, fontWeight: 500, cursor: "pointer",
                backgroundColor: activeLocation === m.name ? "#B83934" : "#FFF1F0",
                color: activeLocation === m.name ? "#fff" : "#B83934",
                transition: "0.3s"
              }}>
              {m.name} {m.isHQ && <small style={{ fontSize: 10 }}>HQ</small>}
            </div>
          ))}
        </div>

        <div className="cp-world-map" style={{ maxWidth: 1200, margin: "0 auto 80px", padding: 10, background: "#fdfdfd", borderRadius: 20, boxShadow: "0 10px 30px rgba(0,0,0,0.05)", overflow: "hidden" }}>
          <WorldMap activeLocation={activeLocation} onHover={setActiveLocation} />
        </div>

        <div className="cp-stats-row" style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", maxWidth: "1400px", margin: "0 auto", width: "100%" }}>
          {stats.map((s, i) => (
            <div className="cp-stat-card" key={i} style={{ flex: "1 1 220px", padding: "45px 15px 35px", background: "white", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.06)", position: "relative", border: "1px solid #f0f0f0" }}>
              <div style={{ position: "absolute", top: "-25px", left: "50%", transform: "translateX(-50%)", width: "55px", height: "55px", borderRadius: "50%", border: "1.5px solid #B83934", background: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
                 <MapPin size={22} color="#B83934" />
              </div>
              <div style={{ fontSize: "36px", fontWeight: "800", color: "#0A2540", marginBottom: "8px" }}>{s.n}</div>
              <div style={{ color: "#494B4D", fontSize: "16px", fontWeight: "400" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="w-full relative overflow-hidden" style={{ backgroundImage: `url(${aboutLast})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: "100%" }}>
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(5, 15, 40, 0.85)', zIndex: 1 }} />
          <div className="cp-cta-inner max-w-[1280px] mx-auto px-4 py-12 relative flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-10" style={{ zIndex: 2 }}>
            <div className="flex flex-col gap-3 w-full lg:max-w-[480px]">
              <h2 className="cp-cta-title" style={{ margin: 0, lineHeight: 1.3 }}>
                <span style={{ color: '#FFFFFF', fontSize: '38px', fontWeight: 700, textTransform: 'uppercase' }}>READY TO PARTNER <br /> WITH </span>
                <span style={{ color: '#FA221C', fontSize: '38px', fontWeight: 700, textTransform: 'uppercase' }}>KAVACH</span>
                <span style={{ color: '#FFFFFF', fontSize: '38px', fontWeight: 700, textTransform: 'uppercase' }}> GLOBAL!</span>
              </h2>
              <p style={{ margin: 0, color: '#FFFFFF', fontSize: '18px', fontWeight: 400, lineHeight: '33px' }}>
                Let's Build Something Extraordinary Together.
              </p>
            </div>
            <div className="cp-cta-buttons flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
              <a href="/new/contact" style={{ backgroundColor: '#FFD128', padding: '14px 32px', textDecoration: 'none', borderRadius: '10px', color: '#0A2540', fontWeight: 600 }}>Get In Touch</a>
              <a href="/new/services" style={{ border: '2px solid #FFD128', padding: '14px 32px', textDecoration: 'none', borderRadius: '10px', color: '#FFD128', fontWeight: 600 }}>Explore Solutions</a>
            </div>
          </div>
      </section>
    </div>
  );
}

export default ContactPage;

