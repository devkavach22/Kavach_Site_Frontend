/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Building2, Users2, Phone, Handshake, Globe2, ChevronRight,
  Target, Eye, Heart, Shield, Zap, Award, ArrowRight,
  MapPin, Star, CheckCircle2, TrendingUp, Layers,
} from "lucide-react";

import RajwantImg from "../assets/rajwant.jpg";
import TakshImg from "../assets/taksh.jpg";
import AnkitImg from "../assets/anitk.jpg";
import AbhijeetImg from "../assets/abijeet.jpg";
import JitinImg from "../assets/jitin.jpg";

/* ─────────────────────────── Counter ── */
const CounterAnimation = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => { if (ref.current) obs.unobserve(ref.current); };
  }, []);
  useEffect(() => {
    if (!isVisible) return;
    let start, raf;
    const animate = (now) => {
      if (!start) start = now;
      const p = (now - start) / duration;
      if (p < 1) { setCount(Math.floor(end * p)); raf = requestAnimationFrame(animate); }
      else setCount(end);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isVisible, end, duration]);
  return <span ref={ref}>{count.toLocaleString()}</span>;
};

/* ─────────────────────────── Scroll reveal hook ── */
const useReveal = (threshold = 0.12) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => { if (ref.current) obs.unobserve(ref.current); };
  }, [threshold]);
  return [ref, visible];
};

/* ═══════════════════════════════════════
   MAIN
══════════════════════════════════════= */
const About = () => {
  const navigate = useNavigate();

  const achievements = [
    { icon: <Building2 className="w-6 h-6" />, value: 8, label: "Offices in India", suffix: "" },
    { icon: <Users2 className="w-6 h-6" />, value: 23000, label: "Team Members", suffix: "+" },
    { icon: <Phone className="w-6 h-6" />, value: 50, label: "Industries Served", suffix: "+" },
    { icon: <Handshake className="w-6 h-6" />, value: 7500, label: "Happy Clients", suffix: "+" },
    { icon: <Globe2 className="w-6 h-6" />, value: 7, label: "Global Footprints", suffix: "+" },
  ];

  const values = [
    { icon: <Shield className="w-6 h-6" />, title: "Integrity", desc: "We operate with unwavering transparency and ethical conduct in every interaction and business decision." },
    { icon: <Zap className="w-6 h-6" />, title: "Innovation", desc: "We continuously push boundaries, leveraging cutting-edge technology to craft solutions for tomorrow's challenges." },
    { icon: <Heart className="w-6 h-6" />, title: "Client-Centric", desc: "Our clients are at the heart of everything we do. Their success is our mission and our greatest achievement." },
    { icon: <Award className="w-6 h-6" />, title: "Excellence", desc: "We hold ourselves to the highest standards, delivering quality that stands the test of time across every project." },
  ];

  const recentProjects = [
    { id: "intelligent-traffic-management", title: "Intelligent Traffic Management System", icon: <Globe2 className="w-7 h-7" />, tags: ["Smart City", "IoT"], desc: "AI-powered adaptive traffic control system reducing congestion by 40% across urban corridors." },
    { id: "emergency-call-box", title: "Emergency Call Box", icon: <Phone className="w-7 h-7" />, tags: ["Safety", "Telecom"], desc: "Solar-powered SOS kiosks with two-way communication deployed across national highways." },
    { id: "gis-solution-mining", title: "GIS Solution For Mining", icon: <Building2 className="w-7 h-7" />, tags: ["GIS", "Mining"], desc: "Geospatial intelligence platform for real-time asset tracking and hazard mapping in mines." },
    { id: "payroll-solutions", title: "360 Degree Payroll Solutions", icon: <Users2 className="w-7 h-7" />, tags: ["HR Tech", "Analytics"], desc: "Automated payroll engine handling 23,000+ employees with full statutory compliance built-in." },
  ];

  const teamMembers = [
    { id: "rajwant-rai", name: "Dr. Rajwant Rai", position: "Chairman, Kavach Group", image: RajwantImg },
    { id: "taksh-raval", name: "Mr. Taksh Raval", position: "Group Marketing Director (CMO)", image: TakshImg },
    { id: "ankit-sudrania", name: "CA Ankit Sudrania", position: "Group Chief Financial Officer (CFO)", image: AnkitImg },
    { id: "abhijeet-wadikar", name: "Mr. Abhijeet Wadekar", position: "Chief Technology Officer (CTO)", image: AbhijeetImg },
    { id: "jitendra-kumar", name: "Mr. Jitendra Kumar", position: "Director – Operations & Business Development", image: JitinImg },
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Barlow',sans-serif", background: "#fff" }}>
      <style>{CSS}</style>

      {/* ── HERO ── */}
      <section
        className="relative min-h-[600px] flex items-center overflow-hidden pt-[140px] pb-24"
        style={{ background: "#1a2332" }}
      >
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 30% 50%,rgba(255,255,255,0.1) 0%,transparent 50%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="kv-label justify-center mb-6">About Kavach Global</div>
          <h1 className="kv-h text-white mb-2 leading-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
            EMPOWERING INDUSTRIES,
          </h1>
          <h1 className="kv-h text-white mb-8 leading-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", opacity: 0.9 }}>
            SHAPING THE FUTURE
          </h1>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
            The Kavach Group is a leading conglomerate delivering comprehensive, integrated solutions
            across 50+ industries — trusted by 7,500+ clients with 25+ years of proven excellence.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <button onClick={() => navigate("/contact")} className="kv-btn">
              Get In Touch <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <button onClick={() => navigate("/")} className="kv-btn ghost">
              Explore Solutions <ChevronRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section className="py-15 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="kv-label justify-center mb-4">By The Numbers</div>
            <h2 className="kv-h" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", color: "var(--dark)" }}>OUR ACHIEVEMENTS</h2>
            <h2 className="kv-h" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", color: "var(--org)" }}>AT A GLANCE</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {achievements.map((item, idx) => (
              <div key={idx} className="stat-card rounded-lg p-6 flex flex-col items-center text-center fade-up"
                style={{ animationDelay: `${idx * 80}ms`, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg,transparent,var(--org),transparent)" }} />
                <div className="stat-icon mb-4 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: "#fff3ee", color: "var(--org)", border: "1px solid #fde0cc" }}>
                  {item.icon}
                </div>
                <div className="stat-val kv-h text-3xl"><CounterAnimation end={item.value} />{item.suffix}</div>
                <p className="stat-lbl mt-2 text-xs uppercase tracking-widest font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutSection navigate={navigate} />
      <PurposeSection />
      <CoreValuesSection values={values} />

      {/* ── RECENTLY DELIVERED ── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="kv-label justify-center mb-4">Our Work</div>
            <h2 className="kv-h" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", color: "var(--dark)" }}>RECENTLY</h2>
            <h2 className="kv-h" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", color: "var(--org)" }}>DELIVERED SOLUTIONS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {recentProjects.map((item, idx) => (
              <div key={idx} onClick={() => navigate(`/project/${item.id}`)}
                className="delivered-card rounded-lg p-6 flex flex-col fade-up"
                style={{ animationDelay: `${idx * 80}ms` }}>
                <div className="dc-icon-wrap mb-4 w-12 h-12 rounded-lg flex items-center justify-center">{item.icon}</div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map((tag, ti) => (
                    <span key={ti} className="dc-tag" style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", padding: "3px 8px", borderRadius: "2px", fontFamily: "'Barlow Condensed',sans-serif" }}>{tag}</span>
                  ))}
                </div>
                <h3 className="dc-title font-semibold text-sm leading-snug mb-3">{item.title}</h3>
                <p className="dc-desc text-xs leading-relaxed mb-5 flex-grow">{item.desc}</p>
                <div className="dc-link mt-auto flex items-center gap-2 pt-4 text-xs font-semibold uppercase tracking-wider" style={{ borderTop: "1px solid #e5e7eb" }}>
                  Learn More <ChevronRight className="dc-arrow w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24 px-4 dot-bg-light" style={{ background: "#f9fafb" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="kv-label justify-center mb-4">Leadership</div>
            <h2 className="kv-h" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", color: "var(--dark)" }}>THE TEAM TURNING</h2>
            <h2 className="kv-h" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", color: "var(--org)" }}>IDEAS INTO REALITY</h2>
          </div>
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {teamMembers.map((member, idx) => (
              <div key={member.id} onClick={() => navigate(`/team/${member.id}`)}
                className="team-card flex-shrink-0 w-[260px] snap-center cursor-pointer rounded-lg overflow-hidden fade-up"
                style={{ animationDelay: `${idx * 80}ms`, background: "#fff", border: "1px solid #e5e7eb", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
                <div className="relative h-64 overflow-hidden">
                  <img src={member.image} alt={member.name} className="tm-img w-full h-full object-cover object-top" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(26,35,50,0.65) 0%,transparent 60%)" }} />
                  <div className="absolute top-0 left-0" style={{ width: 0, height: 0, borderTop: "36px solid var(--org)", borderRight: "36px solid transparent" }} />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="kv-h text-base mb-0.5" style={{ color: "var(--dark)", fontSize: "1rem" }}>{member.name}</h3>
                  <p className="text-xs line-clamp-2 mb-3" style={{ color: "var(--txt2)" }}>{member.position}</p>
                  <div className="flex items-center gap-1 pt-3 text-xs font-semibold" style={{ borderTop: "1px solid #f3f4f6", color: "var(--org)" }}>
                    View Profile <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 px-4 overflow-hidden" style={{ background: "#1a2332" }}>
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full" style={{ height: "50px" }}>
            <path d="M0,0 L1440,40 L1440,0 Z" fill="#fff" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="kv-h text-white mb-4" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)" }}>READY TO PARTNER WITH</h2>
          <h2 className="kv-h mb-6" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", color: "var(--org2)" }}>KAVACH GLOBAL?</h2>
          <p className="text-white/75 text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
            Let's build something extraordinary together. Our experts are ready to craft tailored solutions that drive real results for your organization.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => navigate("/contact")} className="kv-btn">Get In Touch <ArrowRight className="w-4 h-4" /></button>
            <button onClick={() => navigate("/")} className="kv-btn ghost">Explore Solutions <ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ═══════════════════════════════════════
   WHO WE ARE — v3 (white bg + animations)
══════════════════════════════════════= */
const AboutSection = ({ navigate }) => {
  const [secRef, secVisible] = useReveal(0.06);

  const industries = [
    "Facility Management", "ICT Infrastructure", "Healthcare",
    "Data Center VPS", "Cloud Hosting", "HR Outsourcing",
    "Power & Utilities", "IT Services", "Analytics",
  ];

  const highlights = [
    { num: "25+",  label: "Years of Excellence", icon: <Award className="w-5 h-5" /> },
    { num: "3",    label: "Group Subsidiaries",  icon: <Layers className="w-5 h-5" /> },
    { num: "7+",   label: "Global Footprints",   icon: <Globe2 className="w-5 h-5" /> },
    { num: "23K+", label: "Team Members",        icon: <Users2 className="w-5 h-5" /> },
  ];

  const bullets = [
    "End-to-end customised solutions for every scale of business",
    "Combined strength of Kavach & Kalibre brands under one roof",
    "Serving 50+ industries across India and 7+ countries globally",
  ];

  const cities = ["Delhi", "Mumbai", "Bengaluru", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad"];

  return (
    <section ref={secRef} className={`aw3-section ${secVisible ? "aw3-in" : ""}`}>
      <style>{AWStylesV3}</style>

      {/* ── BANNER (dark) ── */}
      <div className="aw3-banner">
        <div className="aw3-banner-grid" />
        <div className="aw3-banner-glow-l" />
        <div className="aw3-banner-glow-r" />
        <div className="aw3-banner-inner">
          <div className="aw3-banner-left">
            <div className="aw3-eyebrow">
              <span className="aw3-dot" /> About Kavach Global
            </div>
            <h2 className="aw3-heading">
              WHO <em>WE ARE</em> &amp; WHAT <em>WE DO</em>
            </h2>
          </div>
          <div className="aw3-banner-stats">
            {highlights.map((h, i) => (
              <div key={i}
                className={`aw3-bstat ${secVisible ? "aw3-bstat-in" : ""}`}
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                <div className="aw3-bstat-icon">{h.icon}</div>
                <div className="aw3-bstat-num">{h.num}</div>
                <div className="aw3-bstat-label">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3-COL BODY (white bg) ── */}
      <div className="aw3-body">
        <div className="aw3-body-inner">

          {/* Card 1 */}
          <div className={`aw3-card ${secVisible ? "aw3-card-in" : ""}`}
            style={{ animationDelay: "0.15s" }}>
            <div className="aw3-card-top-bar" />
            <div className="aw3-card-num-bg">01</div>

            <div className="aw3-badge-white">
              <TrendingUp style={{ width: 13, height: 13, color: "var(--org)" }} />
              Trusted Since 1999
            </div>

            <p className="aw3-body-text">
              The <strong>Kavach Group</strong> is a leading conglomerate providing
              integrated, technology-driven solutions across 50+ industries.
            </p>

            <div className="aw3-bullets" style={{ flex: 1 }}>
              {bullets.map((b, i) => (
                <div key={i} className="aw3-bullet"
                  style={{ animationDelay: secVisible ? `${0.35 + i * 0.1}s` : "0s" }}>
                  <CheckCircle2 style={{ width: 16, height: 16, color: "var(--org)", flexShrink: 0 }} />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <button onClick={() => navigate("/contact")} className="kv-btn"
              style={{ marginTop: 24, width: "100%", justifyContent: "center" }}>
              PARTNER WITH US <ArrowRight style={{ width: 16, height: 16 }} />
            </button>
          </div>

          {/* Card 2 */}
          <div className={`aw3-card ${secVisible ? "aw3-card-in" : ""}`}
            style={{ animationDelay: "0.28s" }}>
            <div className="aw3-card-top-bar" />
            <div className="aw3-card-num-bg">02</div>

            <div className="aw3-col-label">
              <TrendingUp style={{ width: 13, height: 13, color: "var(--org)" }} />
              OUR EXPERTISE SPANS
            </div>
            <div className="aw3-tags">
              {industries.map((ind, i) => (
                <span key={i}
                  className={`aw3-tag ${secVisible ? "aw3-tag-in" : ""}`}
                  style={{ animationDelay: `${0.4 + i * 0.05}s` }}>
                  {ind}
                </span>
              ))}
            </div>

            <div className="aw3-divider" />

            <div className="aw3-col-label">
              <MapPin style={{ width: 13, height: 13, color: "var(--org)" }} />
              INDIA OFFICES
            </div>
            <div className="aw3-cities">
              {cities.map((c, i) => (
                <span key={i}
                  className={`aw3-city ${i < 3 ? "hot" : ""} ${secVisible ? "aw3-tag-in" : ""}`}
                  style={{ animationDelay: `${0.55 + i * 0.05}s` }}>
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3 — dark accent */}
          <div className={`aw3-card aw3-card-accent ${secVisible ? "aw3-card-in" : ""}`}
            style={{ animationDelay: "0.42s" }}>
            <div className="aw3-card-top-bar" />
            <div className="aw3-card-num-bg">03</div>

            <div className="aw3-feat-badge">
              <Star style={{ width: 12, height: 12 }} /> Kavach Group
            </div>

            <div className="aw3-feat-num">50<span>+</span></div>
            <div className="aw3-feat-sublabel">Industries Served</div>
            <div className="aw3-feat-divider" />

            {[
              [Globe2,    "7+ Countries"],
              [Building2, "8 India Offices"],
              [Users2,    "23,000+ Team Members"],
              [Award,     "25+ Years Excellence"],
            ].map(([Icon, text], i) => (
              <div key={i}
                className={`aw3-feat-row ${secVisible ? "aw3-row-in" : ""}`}
                style={{ animationDelay: `${0.55 + i * 0.1}s` }}>
                <Icon style={{ width: 15, height: 15 }} />
                <span>{text}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════
   MISSION & VISION
══════════════════════════════════════= */
const PurposeSection = () => {
  const [secRef, secVisible] = useReveal(0.07);

  const missionPoints = [
    { l: "Integrated Solutions", d: "End-to-end tech services across industries" },
    { l: "Client Empowerment", d: "Enabling growth through smart outsourcing" },
    { l: "Sustainable Operations", d: "Long-term value with ethical practices" },
  ];
  const visionPoints = [
    { l: "Global Trust", d: "Recognized leader across 7+ countries" },
    { l: "Technology Leadership", d: "Setting benchmarks in digital transformation" },
    { l: "Societal Progress", d: "Building a better future for all stakeholders" },
  ];

  return (
    <section ref={secRef} className={`mv-section ${secVisible ? "mv-in" : ""}`}>
      <style>{MVStyles}</style>
      <div className="mv-grid" />
      <div className="mv-orb mv-orb-l" />
      <div className="mv-orb mv-orb-r" />

      <div className="mv-inner">
        <div className="mv-header">
          <div className="mv-eyebrow">Our Purpose</div>
          <h2 className="mv-title">
            <span style={{ color: "var(--dark)" }}>MISSION</span>
            <span className="mv-amp">&amp;</span>
            <span style={{ color: "var(--org)" }}>VISION</span>
          </h2>
          <p className="mv-subtitle">Two guiding pillars that shape every decision we make</p>
        </div>

        <div className="mv-cards">
          {/* MISSION */}
          <div className={`mv-card ${secVisible ? "mv-card-left" : ""}`}>
            <div className="mv-card-stripe" />
            <div className="mv-card-number">01</div>
            <div className="mv-card-icon-wrap">
              <Target style={{ width: 28, height: 28 }} />
            </div>
            <div className="mv-card-tag">Mission</div>
            <h3 className="mv-card-title">OUR MISSION</h3>
            <div className="mv-card-bar" />
            <p className="mv-card-body">
              To deliver integrated, technology-driven solutions that empower businesses to operate efficiently, securely, and sustainably — transforming complex challenges into streamlined opportunities so clients focus on what they do best.
            </p>
            <div className="mv-points">
              {missionPoints.map((p, i) => (
                <div key={i} className="mv-point">
                  <div className="mv-point-dot" />
                  <div><strong>{p.l}</strong><span>{p.d}</span></div>
                </div>
              ))}
            </div>
          </div>

          {/* Connector */}
          <div className={`mv-connector ${secVisible ? "mv-connector-in" : ""}`}>
            <div className="mv-connector-line" />
            <div className="mv-connector-badge"><Globe2 style={{ width: 18, height: 18 }} /></div>
            <div className="mv-connector-line" />
          </div>

          {/* VISION */}
          <div className={`mv-card ${secVisible ? "mv-card-right" : ""}`}>
            <div className="mv-card-stripe" />
            <div className="mv-card-number">02</div>
            <div className="mv-card-icon-wrap">
              <Eye style={{ width: 28, height: 28 }} />
            </div>
            <div className="mv-card-tag">Vision</div>
            <h3 className="mv-card-title">OUR VISION</h3>
            <div className="mv-card-bar" />
            <p className="mv-card-body">
              To be the most trusted and innovative global conglomerate — recognized for transforming industries through cutting-edge technology, exceptional service, and a deep commitment to societal progress.
            </p>
            <div className="mv-points">
              {visionPoints.map((p, i) => (
                <div key={i} className="mv-point">
                  <div className="mv-point-dot" />
                  <div><strong>{p.l}</strong><span>{p.d}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mv-bottom-wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: "100%", height: "50px", display: "block" }}>
          <path d="M0,60 L1440,20 L1440,60 Z" fill="#f3f4f6" />
        </svg>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════
   CORE VALUES
══════════════════════════════════════= */
const CoreValuesSection = ({ values }) => {
  const [headRef, headVisible] = useReveal(0.1);
  return (
    <section className="relative py-24 px-4 overflow-hidden" style={{ background: "#1a2332" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "-80px", left: "10%", width: "320px", height: "320px", borderRadius: "50%", background: "radial-gradient(circle,rgba(224,90,0,0.13) 0%,transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-60px", right: "12%", width: "260px", height: "260px", borderRadius: "50%", background: "radial-gradient(circle,rgba(249,115,22,0.09) 0%,transparent 70%)", pointerEvents: "none" }} />
      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={headRef} className="text-center mb-16">
          <div className={`kv-label justify-center mb-4 cv-fade ${headVisible ? "cv-in" : ""}`} style={{ color: "rgba(249,115,22,0.9)" }}>Our Principles</div>
          <h2 className={`kv-h text-white cv-fade ${headVisible ? "cv-in" : ""}`} style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", animationDelay: "0.08s" }}>CORE VALUES THAT</h2>
          <h2 className={`kv-h cv-fade ${headVisible ? "cv-in" : ""}`} style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", color: "var(--org2)", animationDelay: "0.16s" }}>DRIVE US FORWARD</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((val, idx) => <ValueCard key={idx} val={val} idx={idx} />)}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full" style={{ height: "50px" }}>
          <path d="M0,60 L1440,20 L1440,60 Z" fill="#f3f4f6" />
        </svg>
      </div>
    </section>
  );
};

const ValueCard = ({ val, idx }) => {
  const [ref, visible] = useReveal(0.15);
  return (
    <div ref={ref} className={`cv-card ${visible ? "cv-card-in" : ""}`} style={{ animationDelay: `${idx * 130}ms` }}>
      <div className="cv-accent" />
      <div className="cv-icon">{val.icon}</div>
      <div className="cv-num">0{idx + 1}</div>
      <h4 className="kv-h mb-3" style={{ color: "var(--dark)", fontSize: "1.05rem" }}>{val.title}</h4>
      <p style={{ fontSize: "0.8rem", lineHeight: 1.7, color: "var(--txt)" }}>{val.desc}</p>
      <div className="cv-dot" />
    </div>
  );
};

/* ═══════════════════════════════════════
   WHO WE ARE — STYLES v3
══════════════════════════════════════= */
const AWStylesV3 = `
/* ── Section entrance ── */
.aw3-section {
  opacity: 0; transform: translateY(32px);
  transition: opacity .7s ease, transform .7s ease;
}
.aw3-section.aw3-in { opacity: 1; transform: translateY(0); }

/* ── Banner ── */
.aw3-banner { position: relative; background: #1a2332; overflow: hidden; }
.aw3-banner-grid {
  position: absolute; inset: 0; pointer-events: none;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 48px 48px;
}
.aw3-banner-glow-l {
  position: absolute; top: -80px; left: -60px; width: 340px; height: 340px;
  border-radius: 50%; pointer-events: none;
  background: radial-gradient(circle, rgba(224,90,0,0.18) 0%, transparent 65%);
}
.aw3-banner-glow-r {
  position: absolute; bottom: -60px; right: 5%; width: 260px; height: 260px;
  border-radius: 50%; pointer-events: none;
  background: radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 65%);
}
.aw3-banner-inner {
  position: relative; z-index: 2; width: 100%; padding: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; flex-wrap: wrap;
}
.aw3-eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 11px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase;
  color: var(--org2); margin-bottom: 16px;
}
.aw3-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--org); box-shadow: 0 0 10px var(--org); flex-shrink: 0; }
.aw3-heading {
  font-family: 'Barlow Condensed', sans-serif; font-weight: 800; text-transform: uppercase;
  font-size: clamp(2.6rem, 4vw, 3.8rem); line-height: 1; letter-spacing: -0.01em;
  color: rgba(255,255,255,0.88); white-space: nowrap;
}
.aw3-heading em { font-style: normal; color: var(--org); }

/* ── Stat pills ── */
@keyframes aw3BstatIn {
  from { opacity: 0; transform: translateY(18px) scale(0.88); }
  to   { opacity: 1; transform: translateY(0)    scale(1);    }
}
.aw3-banner-stats { display: flex; gap: 10px; flex-wrap: wrap; }
.aw3-bstat {
  opacity: 0;
  background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px; padding: 18px 22px; text-align: center; min-width: 120px;
  transition: background .3s, border-color .3s, transform .3s;
}
.aw3-bstat.aw3-bstat-in { animation: aw3BstatIn .55s cubic-bezier(.22,1,.36,1) forwards; }
.aw3-bstat:hover { background: rgba(224,90,0,0.2); border-color: rgba(224,90,0,0.45); transform: translateY(-5px); }
.aw3-bstat-icon { color: var(--org2); display: flex; justify-content: center; margin-bottom: 8px; }
.aw3-bstat-num  { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 2rem; color: #fff; line-height: 1; }
.aw3-bstat-label { font-size: 9px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.42); margin-top: 5px; font-family: 'Barlow Condensed', sans-serif; }

/* ── Body wrapper ── */
.aw3-body { background: #f8f9fb; padding: 64px; }
.aw3-body-inner {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; align-items: stretch;
  max-width: 1400px; margin: 0 auto;
}

/* ── Cards ── */
@keyframes aw3CardIn {
  from { opacity: 0; transform: translateY(50px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0)    scale(1);    }
}
.aw3-card {
  opacity: 0;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  padding: 36px 32px;
  position: relative; overflow: hidden;
  display: flex; flex-direction: column;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
  transition: transform .4s ease, box-shadow .4s ease, border-color .4s ease;
}
.aw3-card.aw3-card-in { animation: aw3CardIn .65s cubic-bezier(.22,1,.36,1) forwards; }
.aw3-card:hover {
  transform: translateY(-8px);
  border-color: rgba(224,90,0,0.3);
  box-shadow: 0 0 0 1px rgba(224,90,0,.18), 0 20px 50px rgba(224,90,0,.1), 0 8px 20px rgba(0,0,0,.08);
}

/* orange top bar on hover */
.aw3-card-top-bar {
  position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--org), var(--org2));
  transform: scaleX(0); transform-origin: left;
  transition: transform .45s ease;
}
.aw3-card:hover .aw3-card-top-bar { transform: scaleX(1); }

/* ghost big number */
.aw3-card-num-bg {
  position: absolute; bottom: -16px; right: 18px;
  font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 7rem; line-height: 1;
  color: rgba(26,35,50,0.04); pointer-events: none; user-select: none; transition: color .3s;
}
.aw3-card:hover .aw3-card-num-bg { color: rgba(224,90,0,0.06); }

/* dark accent card (card 3) */
.aw3-card-accent { background: #1a2332 !important; border-color: rgba(255,255,255,0.08) !important; }
.aw3-card-accent .aw3-card-num-bg { color: rgba(255,255,255,0.03); }
.aw3-card-accent:hover .aw3-card-num-bg { color: rgba(224,90,0,0.06); }
.aw3-card-accent:hover { border-color: rgba(224,90,0,0.4) !important; }

/* badge on white cards */
.aw3-badge-white {
  display: inline-flex; align-items: center; gap: 7px;
  background: #fff7f3; border: 1px solid #fde0cc; border-radius: 20px;
  padding: 6px 14px; margin-bottom: 18px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: var(--org);
}

.aw3-body-text { font-size: 0.9rem; color: var(--txt); line-height: 1.82; margin-bottom: 22px; }
.aw3-body-text strong { color: var(--dark); }

/* ── Bullets ── */
@keyframes aw3BulletIn { from { opacity:0; transform:translateX(-16px); } to { opacity:1; transform:translateX(0); } }
.aw3-bullets { display: flex; flex-direction: column; gap: 10px; }
.aw3-bullet {
  opacity: 0;
  display: flex; align-items: flex-start; gap: 10px;
  font-size: 0.84rem; color: var(--dark); font-weight: 500; line-height: 1.5;
  padding: 11px 14px;
  background: #f8f9fb; border: 1px solid #e2e8f0; border-radius: 9px;
  transition: border-color .2s, box-shadow .2s, transform .2s, background .2s;
}
.aw3-section.aw3-in .aw3-bullet { animation: aw3BulletIn .5s ease forwards; }
.aw3-bullet:hover { border-color: rgba(224,90,0,0.28); background: #fff7f3; box-shadow: 0 3px 12px rgba(224,90,0,.07); transform: translateX(4px); }

/* ── Column label ── */
.aw3-col-label {
  display: flex; align-items: center; gap: 6px;
  font-size: 10px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase;
  color: var(--org); margin-bottom: 12px; font-family: 'Barlow Condensed', sans-serif;
}

/* ── Tags ── */
@keyframes aw3TagIn { from { opacity:0; transform:scale(0.82) translateY(6px); } to { opacity:1; transform:scale(1) translateY(0); } }
.aw3-tags { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 6px; }
.aw3-tag {
  opacity: 0;
  font-size: 11px; font-weight: 600; padding: 5px 12px; border-radius: 6px;
  background: #f1f5f9; border: 1px solid #e2e8f0; color: var(--dark);
  font-family: 'Barlow Condensed', sans-serif; text-transform: uppercase; letter-spacing: 0.5px;
  transition: all .2s; cursor: default;
}
.aw3-section.aw3-in .aw3-tag { animation: aw3TagIn .4s ease forwards; }
.aw3-tag:hover { background: #fff7f3; border-color: #fde0cc; color: var(--org); }

.aw3-divider { height: 1px; background: #e2e8f0; margin: 20px 0; }

/* ── Cities ── */
.aw3-cities { display: flex; flex-wrap: wrap; gap: 6px; }
.aw3-city {
  opacity: 0;
  font-size: 10px; font-weight: 600; padding: 5px 11px; border-radius: 6px;
  background: #f1f5f9; border: 1px solid #e2e8f0; color: var(--txt2);
  font-family: 'Barlow Condensed', sans-serif; text-transform: uppercase; letter-spacing: 1px; transition: all .2s;
}
.aw3-section.aw3-in .aw3-city { animation: aw3TagIn .4s ease forwards; }
.aw3-city.hot { background: #fff7f3 !important; border-color: #fde0cc !important; color: var(--org) !important; }
.aw3-city:hover { background: #fff7f3; border-color: #fde0cc; color: var(--org); }

/* ── Card 3 (dark) ── */
.aw3-feat-badge {
  display: inline-flex; align-items: center; gap: 6px;
  background: rgba(224,90,0,0.18); border: 1px solid rgba(224,90,0,0.3);
  border-radius: 6px; padding: 5px 12px; margin-bottom: 20px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--org2);
}
.aw3-feat-num { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 5rem; color: #fff; line-height: 1; }
.aw3-feat-num span { color: var(--org); }
.aw3-feat-sublabel {
  font-family: 'Barlow Condensed', sans-serif; font-size: 11px; font-weight: 700;
  letter-spacing: 2.5px; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-bottom: 20px;
}
.aw3-feat-divider { height: 1px; background: rgba(255,255,255,0.08); margin-bottom: 18px; }

@keyframes aw3RowIn { from { opacity:0; transform:translateX(18px); } to { opacity:1; transform:translateX(0); } }
.aw3-feat-row {
  opacity: 0;
  display: flex; align-items: center; gap: 10px;
  font-size: 0.83rem; color: rgba(255,255,255,0.65); font-weight: 500; padding: 9px 0;
  border-bottom: 1px solid rgba(255,255,255,0.06); transition: color .2s;
}
.aw3-section.aw3-in .aw3-feat-row { animation: aw3RowIn .5s ease forwards; }
.aw3-feat-row:last-child { border-bottom: none; }
.aw3-feat-row svg { color: var(--org2); flex-shrink: 0; }
.aw3-feat-row:hover { color: #fff; }

/* ── Responsive ── */
@media (max-width: 1024px) {
  .aw3-body { padding: 48px 32px; }
  .aw3-body-inner { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 700px) {
  .aw3-banner-inner { padding: 48px 24px; flex-direction: column; }
  .aw3-heading { white-space: normal; }
  .aw3-body { padding: 40px 20px; }
  .aw3-body-inner { grid-template-columns: 1fr; gap: 20px; }
}
`;

/* ═══════════════════════════════════════
   MISSION & VISION — STYLES
══════════════════════════════════════= */
const MVStyles = `
.mv-section {
  position: relative; background: #fff; overflow: hidden; padding: 0;
  opacity: 0; transform: translateY(24px);
  transition: opacity .7s ease, transform .7s ease;
}
.mv-section.mv-in { opacity: 1; transform: translateY(0); }

.mv-grid {
  position: absolute; inset: 0; pointer-events: none;
  background-image: radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px);
  background-size: 28px 28px;
}
.mv-orb { position: absolute; border-radius: 50%; pointer-events: none; }
.mv-orb-l { top: 20%; left: -80px; width: 300px; height: 300px; background: radial-gradient(circle, rgba(224,90,0,0.07) 0%, transparent 70%); }
.mv-orb-r { bottom: 15%; right: -60px; width: 260px; height: 260px; background: radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%); }

.mv-inner { max-width: 1200px; margin: 0 auto; padding: 72px 24px 80px; position: relative; z-index: 2; }

.mv-header { text-align: center; margin-bottom: 44px; }
.mv-eyebrow {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 11px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase;
  color: var(--org); margin-bottom: 14px;
}
.mv-eyebrow::before { content: ''; display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: var(--org); }
.mv-title {
  font-family: 'Barlow Condensed', sans-serif; font-weight: 800; text-transform: uppercase;
  font-size: clamp(2.4rem, 5vw, 4rem); line-height: 1; letter-spacing: -0.01em;
  display: flex; align-items: center; justify-content: center; gap: 20px; flex-wrap: wrap; margin-bottom: 14px;
}
.mv-amp { font-size: clamp(1.8rem, 3vw, 2.8rem); color: rgba(26,35,50,0.15); }
.mv-subtitle { font-size: 0.875rem; color: var(--txt2); letter-spacing: 0.02em; }

.mv-cards { display: grid; grid-template-columns: 1fr auto 1fr; align-items: stretch; gap: 0; }

.mv-card {
  background: #fff; border: 1px solid #e5e7eb; border-radius: 18px; padding: 32px 36px;
  position: relative; overflow: hidden; opacity: 0;
  transition: border-color .4s, box-shadow .4s, transform .4s;
}

@keyframes mvSlideLeft  { from { opacity:0; transform:translateX(-40px) translateY(20px); } to { opacity:1; transform:translateX(0) translateY(0); } }
@keyframes mvSlideRight { from { opacity:0; transform:translateX( 40px) translateY(20px); } to { opacity:1; transform:translateX(0) translateY(0); } }
@keyframes mvStripe     { from { transform:scaleX(0); } to { transform:scaleX(1); } }
@keyframes mvIconPop    { 0%{transform:scale(0.7);opacity:0} 60%{transform:scale(1.1)} 100%{transform:scale(1);opacity:1} }
@keyframes mvNumFade    { from{opacity:0;transform:translateX(20px)} to{opacity:0.04;transform:translateX(0)} }
@keyframes mvConnector  { from{opacity:0;transform:scale(0.8)} to{opacity:1;transform:scale(1)} }

.mv-card.mv-card-left  { animation: mvSlideLeft  .7s cubic-bezier(.22,1,.36,1) .1s forwards; }
.mv-card.mv-card-right { animation: mvSlideRight .7s cubic-bezier(.22,1,.36,1) .25s forwards; }
.mv-card.mv-card-left  .mv-card-stripe { animation: mvStripe .8s cubic-bezier(.22,1,.36,1) .6s forwards; }
.mv-card.mv-card-right .mv-card-stripe { animation: mvStripe .8s cubic-bezier(.22,1,.36,1) .75s forwards; }
.mv-card.mv-card-left  .mv-card-icon-wrap,
.mv-card.mv-card-right .mv-card-icon-wrap { animation: mvIconPop .6s cubic-bezier(.22,1,.36,1) .45s both; }
.mv-card.mv-card-left  .mv-card-number,
.mv-card.mv-card-right .mv-card-number { animation: mvNumFade .7s ease .3s both; }
.mv-connector.mv-connector-in { animation: mvConnector .5s ease .5s both; }

.mv-card:hover { border-color: rgba(224,90,0,0.35); transform: translateY(-8px); box-shadow: 0 0 0 1px rgba(224,90,0,.2), 0 28px 60px rgba(224,90,0,.1), 0 8px 20px rgba(0,0,0,.07); }
.mv-card:hover .mv-card-stripe { transform: scaleX(1); }
.mv-card:hover .mv-card-number { color: rgba(224,90,0,.07); }
.mv-card:hover .mv-card-icon-wrap { background: var(--org); color: #fff; box-shadow: 0 0 30px rgba(224,90,0,.4); }

.mv-card-stripe { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--org), var(--org2)); transform: scaleX(0); transform-origin: left; transition: transform .5s ease; }
.mv-card-number { position: absolute; top: -10px; right: 24px; font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 6rem; line-height: 1; color: rgba(26,35,50,0.04); pointer-events: none; user-select: none; transition: color .3s; }
.mv-card-icon-wrap { width: 56px; height: 56px; border-radius: 14px; display: flex; align-items: center; justify-content: center; background: #fff3ee; color: var(--org); border: 1px solid #fde0cc; margin-bottom: 12px; transition: all .35s ease; }
.mv-card-tag { font-family: 'Barlow Condensed', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: var(--org); margin-bottom: 4px; }
.mv-card-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; text-transform: uppercase; font-size: 1.6rem; color: var(--dark); line-height: 1; letter-spacing: .02em; }
.mv-card-bar { width: 36px; height: 3px; border-radius: 2px; background: linear-gradient(90deg, var(--org), var(--org2)); margin: 10px 0 14px; }
.mv-card-body { font-size: 0.85rem; color: var(--txt); line-height: 1.75; margin-bottom: 20px; }

.mv-points { display: flex; flex-direction: column; gap: 10px; }
.mv-point { display: flex; align-items: flex-start; gap: 10px; }
.mv-point-dot { margin-top: 5px; flex-shrink: 0; width: 7px; height: 7px; border-radius: 50%; background: var(--org); box-shadow: 0 0 6px rgba(224,90,0,.4); }
.mv-point strong { display: block; font-size: .81rem; font-weight: 700; color: var(--dark); line-height: 1.3; }
.mv-point span   { display: block; font-size: .74rem; color: var(--txt2); line-height: 1.4; }

.mv-connector { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 0 24px; gap: 12px; flex-shrink: 0; opacity: 0; }
.mv-connector-line { flex: 1; width: 1px; max-height: 80px; background: linear-gradient(to bottom, transparent, rgba(224,90,0,.25), transparent); }
.mv-connector-badge { width: 48px; height: 48px; border-radius: 50%; background: #fff3ee; border: 1px solid #fde0cc; display: flex; align-items: center; justify-content: center; color: var(--org); }
.mv-bottom-wave { position: absolute; bottom: 0; left: 0; right: 0; z-index: 20; }

@media (max-width: 860px) {
  .mv-cards { grid-template-columns: 1fr; gap: 20px; }
  .mv-connector { flex-direction: row; padding: 0; opacity: 1; animation: none; }
  .mv-connector-line { max-height: unset; max-width: 80px; width: unset; height: 1px; }
  .mv-card { padding: 32px 24px; }
  .mv-card.mv-card-left, .mv-card.mv-card-right { animation-name: mvSlideLeft; }
}
`;

/* ═══════════════════════════════════════
   GLOBAL CSS
══════════════════════════════════════= */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Barlow+Condensed:wght@700;800&display=swap');

:root {
  --org:#e05a00; --org2:#f97316;
  --dark:#1a2332; --txt:#4b5563; --txt2:#6b7280;
}

.kv-h { font-family:'Barlow Condensed',sans-serif; font-weight:800; text-transform:uppercase; letter-spacing:.02em; line-height:1.05; }
.kv-label { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:.72rem; letter-spacing:.28em; text-transform:uppercase; color:var(--org); display:flex; align-items:center; gap:6px; }
.kv-label::before { content:''; display:inline-block; width:8px; height:8px; border-radius:50%; background:var(--org); flex-shrink:0; }

.kv-btn {
  position:relative; font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:.9rem;
  letter-spacing:.08em; text-transform:uppercase; padding:14px 32px; border-radius:24px 0 24px 0;
  display:inline-flex; align-items:center; gap:10px; cursor:pointer; border:none; overflow:hidden; z-index:10;
  background:linear-gradient(135deg,#f97316 0%,#ea580c 50%,#c2410c 100%); color:#fff;
  box-shadow:0 4px 15px rgba(234,88,12,.3); transition:all .3s ease;
}
.kv-btn::before { content:""; position:absolute; top:0; left:-100%; width:50%; height:100%; background:linear-gradient(to right,transparent,rgba(255,255,255,.3),transparent); transform:skewX(-25deg); transition:.6s ease-in-out; }
.kv-btn:hover { background:#c94e00; transform:translateY(-3px); box-shadow:0 8px 25px rgba(234,88,12,.5); border-radius:0 24px 0 24px; }
.kv-btn:hover::before { left:150%; }
.kv-btn.ghost { background:rgba(255,255,255,.15); border:1px solid rgba(255,255,255,.3); }
.kv-btn.ghost:hover { background:rgba(255,255,255,.25); }

.stat-card { background:#fff!important; border:1px solid #e5e7eb!important; transition:transform .35s,box-shadow .35s,border-color .35s; }
.stat-card:hover { transform:translateY(-6px); border-color:var(--org)!important; box-shadow:0 0 0 1px rgba(224,90,0,.4),0 0 24px rgba(224,90,0,.3),0 20px 40px rgba(0,0,0,.15)!important; }
.stat-icon { transition:background .2s,color .2s,box-shadow .2s; }
.stat-card:hover .stat-icon { background:var(--org)!important; color:#fff!important; box-shadow:0 0 20px rgba(224,90,0,.6)!important; }
.stat-card .stat-val { color:var(--dark)!important; }
.stat-card .stat-lbl { color:var(--txt2)!important; }

@keyframes cvHeadIn { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
.cv-fade { opacity:0; }
.cv-fade.cv-in { animation:cvHeadIn .6s ease forwards; }

@keyframes cvCardIn { from{opacity:0;transform:translateY(52px) scale(.95)} to{opacity:1;transform:translateY(0) scale(1)} }
.cv-card {
  opacity:0; background:#fff; border:1px solid #e5e7eb; border-radius:14px;
  padding:28px 24px; text-align:center; position:relative; overflow:hidden;
  transition:transform .4s ease,box-shadow .4s ease,border-color .4s ease;
}
.cv-card.cv-card-in { animation:cvCardIn .72s cubic-bezier(.22,1,.36,1) forwards; }
.cv-card:hover { transform:translateY(-10px) scale(1.02); box-shadow:0 0 0 1px rgba(224,90,0,.3),0 0 30px rgba(224,90,0,.2),0 24px 60px rgba(0,0,0,.16); border-color:rgba(224,90,0,.4); }
.cv-accent { position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,var(--org),var(--org2)); transform:scaleX(0); transform-origin:left; transition:transform .4s ease; }
.cv-card:hover .cv-accent { transform:scaleX(1); }
.cv-icon { width:60px; height:60px; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto; background:#fff3ee; color:var(--org); border:1px solid #fde0cc; transition:all .35s ease; }
.cv-card:hover .cv-icon { background:var(--org); color:#fff; box-shadow:0 0 24px rgba(224,90,0,.5); transform:scale(1.1) rotate(-5deg); }
.cv-num { font-family:'Barlow Condensed',sans-serif; font-weight:800; font-size:2.8rem; color:rgba(224,90,0,0.55); line-height:1; margin:10px 0 6px; transition:color .35s; user-select:none; }
.cv-card:hover .cv-num { color:var(--org); }
.cv-dot { width:8px; height:8px; border-radius:50%; background:linear-gradient(135deg,var(--org),var(--org2)); margin:18px auto 0; transform:scale(0); transition:transform .4s ease .1s; }
.cv-card:hover .cv-dot { transform:scale(1); }

.delivered-card { background:#fff!important; border:1px solid #e5e7eb!important; position:relative; overflow:hidden; transition:transform .35s,box-shadow .35s,border-color .35s; cursor:pointer; }
.delivered-card::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,var(--org),var(--org2)); transform:scaleX(0); transform-origin:left; transition:transform .4s ease; }
.delivered-card:hover::before { transform:scaleX(1); }
.delivered-card:hover { transform:translateY(-8px); border-color:var(--org)!important; box-shadow:0 0 0 1px rgba(224,90,0,.35),0 0 25px rgba(224,90,0,.28),0 24px 50px rgba(0,0,0,.12)!important; }
.delivered-card .dc-icon-wrap { background:#fff3ee!important; color:var(--org)!important; border:1px solid #fde0cc!important; transition:background .3s,box-shadow .3s,color .3s; }
.delivered-card:hover .dc-icon-wrap { background:var(--org)!important; color:#fff!important; box-shadow:0 0 22px rgba(224,90,0,.55)!important; }
.delivered-card .dc-title { color:var(--dark)!important; }
.delivered-card .dc-desc  { color:var(--txt2)!important; }
.delivered-card .dc-link  { color:var(--org)!important; }
.delivered-card .dc-arrow { transition:transform .3s; }
.delivered-card:hover .dc-arrow { transform:translateX(6px); }
.delivered-card .dc-tag { background:#fff3ee!important; border:1px solid #fde0cc!important; color:var(--org)!important; }

.team-card { transition:transform .4s,box-shadow .4s; }
.team-card:hover { transform:translateY(-6px); box-shadow:0 20px 40px rgba(0,0,0,.12); }
.team-card .tm-img { transition:transform .6s; }
.team-card:hover .tm-img { transform:scale(1.07); }

.scrollbar-hide::-webkit-scrollbar { display:none; }
.scrollbar-hide { -ms-overflow-style:none; scrollbar-width:none; }
@keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
.fade-up { animation:fadeUp .6s ease forwards; opacity:0; }
.dot-bg-light { background-image:radial-gradient(rgba(0,0,0,.04) 1px,transparent 1px); background-size:28px 28px; }
`;

export default About;