/* eslint-disable no-unused-vars */
import React, { useState } from 'react' 
import Productbg from "../assets/AboutBg.png"
import HeroImage from "../assets/HeroSection.png"
import aboutLast from "../assets/AboutLast.png";

const HRIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
    <circle cx="19" cy="7" r="2"/>
    <path d="M22 12c0 1.5-1 2.5-3 2.5"/>
  </svg>
)

const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)

const konvertHRData = {
  title: "Revolutionizing HR & Payroll",
  description: "A State-Of-The-Art Payroll Processing And HR Platform That Is User-Friendly, Highly Secure, And Compliant With Legal And Statutory Norms. Designed To Minimize Manual Intervention And Streamline Processes For Businesses Of All Sizes.",
  buttonLabel: "View Site",
  stats: [
    { value: '10x', label: 'Faster Hiring' },
    { value: '80%', label: 'Admin Saved' },
    { value: '99.9%', label: 'Accuracy' },
  ],
  capabilities: ['Employee Portal', 'Leave Tracking', 'Multi-Branch', 'Tax Management', 'Payroll Automation', 'Statutory Reports'],
  features: [
    { title: "Smart Hiring", desc: "AI-Powered Candidate Screening & Ranking That Finds The Perfect Fit 10x Faster." },
    { title: "Auto Onboarding", desc: "Paperless, Seamless Employee Onboarding With Automated Workflows." },
    { title: "Payroll Engine", desc: "Automated Salary Processing With Built-In Compliance, TDS, PF, ESI & Tax Calculations." },
    { title: "Performance AI", desc: "Real-Time Analytics And 360° Reviews To Boost Team Productivity." },
    { title: "Time & Attendance", desc: "Track Leaves, Working Hours Effortlessly With Biometric And Digital Integration." },
    { title: "Custom HR Settings", desc: "Configure Company Policies, Salary Structures And Approval Workflows." },
  ]
}

const kavachAIData = {
  title: "Intelligent Security Shield",
  description: "Enterprise-Grade AI Security Platform Providing Real-Time Threat Detection And Predictive Cyber Defense For Your Entire Digital Infrastructure — Protecting Every Endpoint, Every Second.",
  buttonLabel: "Coming Soon",
  buttonStyle: { textTransform: 'uppercase', letterSpacing: '1px' },
  stats: [
    { value: '0.1ms', label: 'Response' },
    { value: '99.99%', label: 'Uptime' },
    { value: '24/7', label: 'Monitoring' },
  ],
  capabilities: ['Threat Intel', 'Auto Response', 'Compliance Reports', 'Cloud Protection', 'Incident Response'],
  features: [
    { title: "Threat Detection", desc: "Real-Time AI-Powered Threat Identification With Millisecond Response Times." },
    { title: "Deep Monitoring", desc: "360° Infrastructure Surveillance With Intelligent Anomaly Detection." },
    { title: "Predictive Defense", desc: "Machine Learning Models Predict Threats Before They Cause Damage." },
    { title: "Cloud Protection", desc: "End-To-End Protection Across All Cloud Platforms And Hybrid Environments." },
    { title: "Compliance Reports", desc: "Automated Compliance Documentation And Audit-Ready Security Reports." },
  ]
}

const styles = {
  tabsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '24px',
    flexWrap: 'wrap', // Added for responsiveness
  },
  outerCard: {
    border: '1.5px solid #e8c4c4',
    borderRadius: '20px',
    background: 'white',
    overflow: 'hidden',
    marginBottom: '32px',
  },
  tabActive: {
    display: 'flex', alignItems: 'center', gap: '8px',
    padding: '12px 32px', borderRadius: '50px',
    fontSize: '15px', fontWeight: '500', letterSpacing: '0.4px',
    background: '#B83934', color: 'white',
    border: 'none', cursor: 'pointer',
    fontFamily: "'Poppins', sans-serif",
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(184, 57, 52, 0.2)',
  },
  tabInactive: {
    display: 'flex', alignItems: 'center', gap: '8px',
    padding: '12px 32px', borderRadius: '50px',
    fontSize: '15px', fontWeight: '500', letterSpacing: '0.4px',
    background: '#fde8e8', color: '#B83934',
    border: 'none', cursor: 'pointer',
    fontFamily: "'Poppins', sans-serif",
    transition: 'all 0.3s ease',
  },
  body: {
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Changed for responsiveness
    padding: '40px 20px 24px 20px',
  },
  leftPanel: { paddingRight: '24px' },
  leftInner: {
    border: '1.5px solid #e8c4c4', borderRadius: '14px',
    padding: '22px', background: '#fffafa', marginBottom: '14px',
  },
  leftTitle: {
    fontSize: '18px', fontWeight: '700', color: '#0A2540',
    marginBottom: '10px', fontFamily: "'Poppins', sans-serif",
  },
  leftDesc: {
    fontSize: '13px', color: '#6B7280', lineHeight: '1.7',
    marginBottom: '18px', fontFamily: "'Poppins', sans-serif",
  },
  btnYellow: {
    background: '#F5C518', color: '#1a1a1a', border: 'none',
    borderRadius: '8px', padding: '10px 22px',
    fontSize: '13px', fontWeight: '700', cursor: 'pointer',
    display: 'inline-flex', alignItems: 'center', gap: '6px',
    fontFamily: "'Poppins', sans-serif",
  },
  statsGrid: {
    display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
    gap: '12px', marginBottom: '14px',
  },
  statItem: {
    padding: '16px 12px', textAlign: 'center',
    background: 'white', borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    borderBottom: '4px solid #B83934',
  },
  statVal: {
    fontSize: '20px', fontWeight: '700', color: '#0A2540',
    fontFamily: "'Poppins', sans-serif",
  },
  statLabel: {
    fontSize: '11px', color: '#4B5563', marginTop: '4px',
    fontFamily: "'Poppins', sans-serif",
  },
  capsBox: {
    border: '1.5px solid #e8c4c4', borderRadius: '14px',
    padding: '18px', background: 'white',
    marginBottom: '20px', // Added spacing for vertical stack
  },
  capsTitle: {
    fontSize: '13px', fontWeight: '700', color: '#0A2540',
    marginBottom: '12px', fontFamily: "'Poppins', sans-serif",
  },
  chips: { display: 'flex', flexWrap: 'wrap', gap: '8px' },
  chip: {
    background: '#fde8e8', color: '#B83934', borderRadius: '50px',
    padding: '5px 14px', fontSize: '12px', fontWeight: '500',
    border: '1px solid #f5c4c4', fontFamily: "'Poppins', sans-serif",
  },
  rightPanel: {
    paddingLeft: '24px',
  },
  featuresTitle: {
    fontSize: '14px', fontWeight: '700', color: '#0A2540',
    marginBottom: '12px', fontFamily: "'Poppins', sans-serif",
  },
  featCard: {
    border: '2px solid #E8C4C4', 
    borderRadius: '10px',
    padding: '12px 14px', marginBottom: '10px', background: 'white',
  },
  featTitle: {
    fontSize: '13px', fontWeight: '700', color: '#B83934',
    marginBottom: '4px', fontFamily: "'Poppins', sans-serif",
  },
  featDesc: {
    fontSize: '12px', color: '#6B7280', lineHeight: '1.6',
    fontFamily: "'Poppins', sans-serif",
  },
}

const ProductCard = ({ data }) => (
  <div style={styles.outerCard}>
    {/* CSS for removing side-padding on mobile and managing grid layout */}
    <style>
      {`
        @media (max-width: 768px) {
          .product-body {
            grid-template-columns: 1fr !important;
            padding: 24px 15px !important;
          }
          .left-panel {
            padding-right: 0 !important;
            margin-bottom: 24px;
          }
          .right-panel {
            padding-left: 0 !important;
            border-left: none !important;
            border-top: 1px solid #f5e0e0;
            padding-top: 24px;
          }
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}
    </style>
    <div className="product-body" style={styles.body}>
      <div className="left-panel" style={styles.leftPanel}>
        <div style={styles.leftInner}>
          <h2 style={styles.leftTitle}>{data.title}</h2>
          <p style={styles.leftDesc}>{data.description}</p>
          <button style={{ ...styles.btnYellow, ...(data.buttonStyle || {}) }}>
            {data.buttonLabel} &nbsp;↗
          </button>
        </div>

        <div className="stats-grid" style={styles.statsGrid}>
          {data.stats.map((s, i) => (
            <div key={i} style={styles.statItem}>
              <div style={styles.statVal}>{s.value}</div>
              <div style={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={styles.capsBox}>
          <div style={styles.capsTitle}>Key Capabilities</div>
          <div style={styles.chips}>
            {data.capabilities.map((c, i) => (
              <span key={i} style={styles.chip}>{c}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="right-panel" style={styles.rightPanel}>
        <div style={styles.featuresTitle}>Core Features</div>
        {data.features.map((f, i) => (
          <div key={i} style={styles.featCard}>
            <div style={styles.featTitle}>{f.title}</div>
            <div style={styles.featDesc}>{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const Product = () => {
  const [activeTab, setActiveTab] = useState('hr');

  const currentData = activeTab === 'hr' ? konvertHRData : kavachAIData;

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", overflow: 'hidden' }}>

      {/* ── Hero Section ── */}
      <section className="relative w-full min-h-[700px] flex items-center justify-center bg-[#0A2540] overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url(${HeroImage})` }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 style={{ color: 'white', fontSize: 'clamp(28px, 5vw, 38px)', fontWeight: '700', textTransform: 'capitalize', lineHeight: '1.3', letterSpacing: '0.76px' }}>
            Innovative Solutions for <br /> Modern Challenges
          </h1>
        </div>
      </section>

      {/* ── Products Section ── */}
      <section style={{
        padding: '60px 20px', // Adjusted padding for mobile
        backgroundImage: `url(${Productbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          <div style={styles.tabsContainer}>
            <button 
              onClick={() => setActiveTab('hr')}
              style={activeTab === 'hr' ? styles.tabActive : styles.tabInactive}
            >
              <HRIcon /> Konvert HR
            </button>
            <button 
              onClick={() => setActiveTab('ai')}
              style={activeTab === 'ai' ? styles.tabActive : styles.tabInactive}
            >
              <ShieldIcon /> Kavach AI
            </button>
          </div>

          <ProductCard data={currentData} />

        </div>
      </section>

      {/* ── Call to Action Section ── */}
      <section
        className="w-full relative overflow-hidden"
        style={{
          backgroundImage: `url(${aboutLast})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(5, 15, 40, 0.85)', zIndex: 1 }}
        />

        <div
          className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-[60px] relative flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-10"
          style={{ zIndex: 2 }}
        >

          <div className="flex flex-col gap-3 w-full lg:max-w-[480px]">
            <h2 style={{ margin: 0, lineHeight: 1.3 }}>
              <span
                style={{
                  color: '#FFFFFF',
                  fontSize: '32px', // Slightly adjusted for responsiveness
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.76px',
                }}
              >
                READY TO PARTNER <br /> WITH{' '}
              </span>
              <span
                style={{
                  color: '#FA221C',
                  fontSize: '32px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.76px',
                }}
              >
                KAVACH
              </span>
              <span
                style={{
                  color: '#FFFFFF',
                  fontSize: '32px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.76px',
                }}
              >
                {' '}GLOBAL!
              </span>
            </h2>

            <p
              style={{
                margin: 0,
                color: '#FFFFFF',
                fontSize: '16px',
                fontWeight: 400,
                textTransform: 'capitalize',
                lineHeight: '1.6',
                letterSpacing: '0.36px',
              }}
            >
              Let's Build Something Extraordinary Together. Our Experts Are Ready To Craft Tailored Solutions That Drive Real Results For Your Organization.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto flex-shrink-0">

            <a
              href="/new/contact"
              className="btn-yellow-hover flex items-center justify-center gap-2 rounded-[10px] w-full sm:w-auto"
              style={{
                backgroundColor: '#FFD128',
                padding: '14px 32px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              <span
                style={{
                  color: '#0A2540',
                  fontSize: '18px',
                  fontWeight: 600,
                  textTransform: 'capitalize',
                  letterSpacing: '0.42px',
                }}
              >
                Get In Touch
              </span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="8" y1="16" x2="16" y2="8" stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" />
                <polyline points="9,8 16,8 16,15" stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </a>

            <a
              href="/new/services"
              className="btn-outline-hover flex items-center justify-center gap-2 rounded-[10px] w-full sm:w-auto"
              style={{
                backgroundColor: 'transparent',
                padding: '14px 32px',
                textDecoration: 'none',
                outline: '2px solid #FFD128',
                whiteSpace: 'nowrap',
              }}
            >
              <span
                style={{
                  color: '#FFD128',
                  fontSize: '18px',
                  fontWeight: 600,
                  textTransform: 'capitalize',
                  letterSpacing: '0.42px',
                }}
              >
                Explore Solutions
              </span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="8" y1="16" x2="16" y2="8" stroke="#FFD128" strokeWidth="2.5" strokeLinecap="round" />
                <polyline points="9,8 16,8 16,15" stroke="#FFD128" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </a>

          </div>

        </div>
      </section>
    </div>
  )
}

export default Product