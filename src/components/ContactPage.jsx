import React, { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import map from "../assets/map.png";
import ContactBg from "../assets/ContactBg.png";
import usBg from "../assets/AboutBg.png";
import aboutLast from "../assets/AboutLast.png";

const MARKERS = [
  { name: "USA", cx: 210, cy: 185, region: "Americas" },
  { name: "Ireland", cx: 445, cy: 135, region: "Europe", labelAnchor: "end", labelDx: -10, labelDy: 0 },
  { name: "UK", cx: 465, cy: 145, region: "Europe", labelAnchor: "start", labelDx: 10, labelDy: 0 },
  { name: "Dubai", cx: 595, cy: 245, region: "Middle East" },
  { name: "India", cx: 665, cy: 270, region: "Asia", isHQ: true },
  { name: "Singapore", cx: 745, cy: 345, region: "Asia" },
  { name: "Australia", cx: 820, cy: 410, region: "Oceania" },
];

function WorldMap({ activeLocation, onHover }) {
  return (
    <div style={{ position: "relative", width: "100%", background: "#f9fafb", borderRadius: 16, overflow: "hidden" }}>
      <svg viewBox="0 0 960 500" width="100%" height="auto" style={{ display: "block", maxWidth: "100%" }}>
        <image href={map} x="0" y="0" width="960" height="500" preserveAspectRatio="xMidYMid slice" />
        {MARKERS.map((loc) => {
          const isActive = activeLocation === loc.name;
          const r = loc.isHQ ? 7 : 6;
          return (
            <g key={loc.name} style={{ cursor: "pointer" }} onMouseEnter={() => onHover(loc.name)} onMouseLeave={() => onHover(null)}>
              <circle cx={loc.cx} cy={loc.cy} r={isActive ? r + 12 : r + 7} fill={isActive ? "rgba(184,57,52,0.20)" : "rgba(184,57,52,0.12)"} style={{ transition: "all 0.3s" }} />
              <circle cx={loc.cx} cy={loc.cy} r={isActive ? r + 1.5 : r} fill="#B83934" stroke="white" strokeWidth={loc.isHQ ? 2 : 1.5} style={{ transition: "all 0.25s" }} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function ContactPage() {
  const [activeLocation, setActiveLocation] = useState(null);
  const [hoveredOffice, setHoveredOffice] = useState(null);
  const [hoveredStat, setHoveredStat] = useState(null);

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      if (/^[a-zA-Z\s]*$/.test(value) && value.length <= 100) setFormData((prev) => ({ ...prev, [name]: value }));
    } else if (name === "email") {
      if (/^[a-zA-Z0-9@.+]*$/.test(value) && value.length <= 100) setFormData((prev) => ({ ...prev, [name]: value }));
    } else if (name === "phone") {
      const onlyNums = value.replace(/[^0-9]/g, "");
      if (onlyNums.length <= 10) setFormData((prev) => ({ ...prev, [name]: onlyNums }));
    } else if (name === "message") {
      if (value.length <= 250) setFormData((prev) => ({ ...prev, [name]: value }));
      else if (name === "subject") {
        if (value.length <= 100) setFormData((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSendInquiry = () => {
    if (!formData.name || !formData.email || !formData.phone) { alert("Please fill in all required fields."); return; }
    if (formData.phone.length !== 10) { alert("Please enter a valid 10-digit phone number."); return; }
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    alert("Inquiry sent successfully!");
  };

  const offices = [
    { title: "Ahmedabad", address: "A/53, 5th floor, New York Tower, Thaltej, S G Highway, Ahmedabad - 380015.", mapUrl: "https://www.google.com/maps/search/?api=1&query=New+York+Tower+Thaltej+Ahmedabad" },
    { title: "Himachal Pradesh", address: "29, First Floor, Block1, Dev Bhoomi Apartments, Deonghat, Solan - 173211", mapUrl: "https://www.google.com/maps/search/?api=1&query=Dev+Bhoomi+Apartments+Deonghat+Solan" },
    { title: "Ayodhya", address: "4th Floor, Arundhati Bhawan West, Tedhi Bajar, Ayodhya, UP - 224123", mapUrl: "https://www.google.com/maps/search/?api=1&query=Arundhati+Bhawan+West+Ayodhya" },
  ];

  const stats = [
    { n: "8", l: "Offices In India" },
    { n: "23,000+", l: "Team Members" },
    { n: "50+", l: "Industries Served" },
    { n: "7,500+", l: "Happy Clients" },
    { n: "7+", l: "Global Footprints" },
  ];

  const inputStyle = {
    padding: "18px 15px", background: "#F5F5F5", borderRadius: 10,
    border: "1px solid rgba(0,0,0,0.1)", fontSize: 16, color: "#494B4D",
    width: "100%", boxSizing: "border-box",
  };

  return (
    <div style={{ backgroundColor: "#fff", overflowX: "hidden", width: "100%" }}>
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
      <div
        className="cp-hero"
        style={{
          backgroundImage: `url(${ContactBg})`, backgroundSize: "cover", backgroundPosition: "center",
          padding: "100px 40px", textAlign: "center", minHeight: 600,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          position: "relative", color: "#fff", marginTop: "80px", width: "100%", boxSizing: "border-box",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(10, 31, 68, 0.75)" }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 42px)", fontWeight: 700, marginBottom: 15 }}>
            Get In Touch With Our Experts
          </h1>
        </div>
      </div>

      {/* 2. CONTACT US SECTION */}
      <section
        className="cp-contact-section"
        style={{
          padding: "80px 20px", backgroundImage: `url(${usBg})`, backgroundSize: "cover",
          backgroundPosition: "center", backgroundRepeat: "no-repeat",
          position: "relative", width: "100%", boxSizing: "border-box",
        }}
      >
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
            <div
              className="cp-info-card"
              style={{
                flex: "1 1 350px", padding: "35px",
                background: "linear-gradient(136deg, #FFF1F0 0%, #FFFAE8 100%)",
                borderRadius: 24, border: "1px solid rgba(0,0,0,0.05)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              <h3 style={{ fontSize: 24, fontWeight: 700, color: "#0A2540", borderBottom: "1px solid rgba(0,0,0,0.1)", paddingBottom: 15, marginBottom: 25 }}>
                Contact Information
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
                {[
                  { label: "Office Address", val: "A-53, New York Tower-A, Cross Road, Sarkhej - Gandhinagar Hwy, Ahmedabad, Gujarat 380054, India" },
                  { label: "Email Us", val: "info@kavachglobal.com" },
                  { label: "Call Us", val: "+91 72288 88904" },
                  { label: "Working Hours", val: "Mon - Sat: 8 AM - 6 PM" },
                ].map((item, i) => (
                  <div key={i} style={{ borderBottom: i === 3 ? "none" : "1px solid rgba(0,0,0,0.1)", paddingBottom: 20 }}>
                    <p style={{ color: "#B83934", fontWeight: 600, fontSize: 16, marginBottom: 8 }}>{item.label}</p>
                    <p style={{ color: "#494B4D", fontSize: 16, lineHeight: "29px" }}>{item.val}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="cp-form-card"
              style={{
                flex: "1.5 1 450px", padding: "35px", background: "#fff",
                borderRadius: 24, border: "1px solid rgba(0,0,0,0.05)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              <h3 style={{ fontSize: 24, fontWeight: 700, color: "#0A2540", borderBottom: "1px solid rgba(0,0,0,0.1)", paddingBottom: 15, marginBottom: 25 }}>
                Send Us A Message
              </h3>
              <div className="cp-form-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginBottom: 20 }}>
                <input name="name" value={formData.name} onChange={handleChange} style={inputStyle} placeholder="Your Name*" maxLength={100} />
                <input name="email" value={formData.email} onChange={handleChange} style={inputStyle} placeholder="Your Email*" maxLength={100} />
                <input name="phone" value={formData.phone} onChange={handleChange} style={inputStyle} placeholder="Phone Number*" maxLength={10} />
                <input name="subject" value={formData.subject} onChange={handleChange} style={inputStyle} placeholder="Subject" maxLength={100} />
              </div>
              <textarea name="message" value={formData.message} onChange={handleChange} style={{ ...inputStyle, height: 130, width: "100%", marginBottom: 10 }} placeholder="Your Message" maxLength={250} />
              <div style={{ textAlign: "right", fontSize: "12px", color: "#6B7280", marginBottom: "20px" }}>
                {formData.message.length}/250
              </div>
              <button onClick={handleSendInquiry} style={{ width: "100%", padding: "20px", background: "#FFD128", borderRadius: 12, color: "#0A2540", fontSize: 20, fontWeight: 700, border: "none", cursor: "pointer" }}>
                Send Inquiry
              </button>
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
              <div
                key={i}
                onMouseEnter={() => setHoveredOffice(i)}
                onMouseLeave={() => setHoveredOffice(null)}
                style={{
                  padding: "25px", background: "#fff", borderRadius: 20,
                  boxShadow: hoveredOffice === i ? "0 12px 30px rgba(184,57,52,0.18)" : "0px 0px 8px rgba(0,0,0,0.1)",
                  borderBottom: "3px solid #B83934",
                  transform: hoveredOffice === i ? "translateY(-6px)" : "translateY(0)",
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <div style={{ width: 50, height: 50, background: "#FFF1F0", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 15 }}>
                  <MapPin size={24} color="#B42A26" />
                </div>
                <h4 style={{ color: "#B42A26", fontSize: 21, fontWeight: 700, marginBottom: 5 }}>{off.title}</h4>
                <p style={{ color: "#494B4D", fontSize: 15, lineHeight: "26px", marginBottom: 15 }}>{off.address}</p>
                <a href={off.mapUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#B83934", fontWeight: 500, cursor: "pointer", display: "flex", alignItems: "center", gap: 5, textDecoration: "none" }}>
                  View On Map <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
          <div className="cp-office-map" style={{ borderRadius: 20, overflow: "hidden", border: "1px solid #ddd", minHeight: 400 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.187523235021!2d72.5169978113869!3d23.053585679065186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8548c0dc0ac7%3A0xa0ee50a3ce97e719!2sKavach%20Global%20Konnects%20Pvt%20Ltd%20%7C%20Best%20Facility%20Management%20Services!5e0!3m2!1sen!2sin!4v1776425621830!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
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
          {MARKERS.map((m) => (
            <div
              key={m.name}
              className="cp-global-chip"
              onMouseEnter={() => setActiveLocation(m.name)}
              onMouseLeave={() => setActiveLocation(null)}
              style={{
                padding: "8px 25px", borderRadius: 30, fontSize: 15, fontWeight: 500, cursor: "pointer",
                backgroundColor: activeLocation === m.name ? "#B83934" : "#FFF1F0",
                color: activeLocation === m.name ? "#fff" : "#B83934",
                transition: "0.3s",
              }}
            >
              {m.name} {m.isHQ && <small style={{ fontSize: 10 }}>HQ</small>}
            </div>
          ))}
        </div>

        <div className="cp-world-map" style={{ maxWidth: 1200, margin: "0 auto 80px", padding: 10, background: "#fdfdfd", borderRadius: 20, boxShadow: "0 10px 30px rgba(0,0,0,0.05)", overflow: "hidden" }}>
          <WorldMap activeLocation={activeLocation} onHover={setActiveLocation} />
        </div>

        <div
          className="cp-stats-row"
          style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", maxWidth: "1400px", margin: "0 auto", width: "100%" }}
        >
          {stats.map((s, i) => (
            <div
              className="cp-stat-card"
              key={i}
              onMouseEnter={() => setHoveredStat(i)}
              onMouseLeave={() => setHoveredStat(null)}
              style={{
                flex: "1 1 220px", padding: "45px 15px 35px", background: "white",
                borderRadius: "20px",
                boxShadow: hoveredStat === i ? "0 12px 30px rgba(184,57,52,0.18)" : "0 10px 30px rgba(0,0,0,0.06)",
                position: "relative", border: "1px solid #f0f0f0",
                transform: hoveredStat === i ? "translateY(-6px)" : "translateY(0)",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
                cursor: "pointer",
              }}
            >
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
      <section className="w-full relative overflow-hidden" style={{ backgroundImage: `url(${aboutLast})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(5, 15, 40, 0.85)", zIndex: 1 }} />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-[60px] relative flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-10" style={{ zIndex: 2 }}>
          <div className="flex flex-col gap-3 w-full lg:max-w-[480px]">
            <h2 style={{ margin: 0, lineHeight: 1.3 }}>
              <span style={{ color: "#FFFFFF", fontSize: "32px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.76px" }}>READY TO PARTNER <br /> WITH </span>
              <span style={{ color: "#FA221C", fontSize: "32px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.76px" }}>KAVACH</span>
              <span style={{ color: "#FFFFFF", fontSize: "32px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.76px" }}> GLOBAL!</span>
            </h2>
            <p style={{ margin: 0, color: "#FFFFFF", fontSize: "16px", fontWeight: 400, textTransform: "capitalize", lineHeight: "1.6", letterSpacing: "0.36px" }}>
              Let's Build Something Extraordinary Together. Our Experts Are Ready To Craft Tailored Solutions That Drive Real Results For Your Organization.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto flex-shrink-0">
            <a href="/new/contact" className="btn-yellow-hover flex items-center justify-center gap-2 rounded-[10px] w-full sm:w-auto" style={{ backgroundColor: "#FFD128", padding: "14px 32px", textDecoration: "none", whiteSpace: "nowrap" }}>
              <span style={{ color: "#0A2540", fontSize: "18px", fontWeight: 600, textTransform: "capitalize", letterSpacing: "0.42px" }}>Get In Touch</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="8" y1="16" x2="16" y2="8" stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" />
                <polyline points="9,8 16,8 16,15" stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </a>
            <a href="/new/services" className="btn-outline-hover flex items-center justify-center gap-2 rounded-[10px] w-full sm:w-auto" style={{ backgroundColor: "transparent", padding: "14px 32px", textDecoration: "none", outline: "2px solid #FFD128", whiteSpace: "nowrap" }}>
              <span style={{ color: "#FFD128", fontSize: "18px", fontWeight: 600, textTransform: "capitalize", letterSpacing: "0.42px" }}>Explore Solutions</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="8" y1="16" x2="16" y2="8" stroke="#FFD128" strokeWidth="2.5" strokeLinecap="round" />
                <polyline points="9,8 16,8 16,15" stroke="#FFD128" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;