import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Building2, Users2, Phone, Handshake, Globe2,
  ChevronRight, Plus, Minus, Shield, Zap, ArrowRight,
  CheckCircle2, Star, Award, HeadphonesIcon, ChevronLeft,
} from "lucide-react";

import { MdLocalHospital, MdSchool, MdApartment, MdSecurity } from "react-icons/md";
import { FiTruck, FiCpu, FiTool, FiBriefcase } from "react-icons/fi";
import SecurityImg from "../assets/security1.jpg";
import Security3Img from "../assets/Security3.jpg";
import FacilityImg from "../assets/facility.jpg";
import RajwantImg from "../assets/rajwant.jpg";
import TakshImg from "../assets/taksh.jpg";
import AnkitImg from "../assets/anitk.jpg";
import AbhijeetImg from "../assets/abijeet.jpg";
import JitinImg from "../assets/jitin.jpg";
import DataCenter from "../assets/DataCenter.webp";
import ICT from "../assets/ICT.jpg";
import Infrastructure from "../assets/Infrasturesture.jpeg";


/* ── Counter ── */
const CounterAnimation = ({ end, duration = 2000, suffix = "" }) => {
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
    let start, af;
    const animate = (now) => {
      if (!start) start = now;
      const p = (now - start) / duration;
      if (p < 1) { setCount(Math.floor(end * p)); af = requestAnimationFrame(animate); }
      else setCount(end);
    };
    af = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(af);
  }, [isVisible, end, duration]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

/* ── Hero Slides Data ── */
const heroSlides = [
  {
    label: "Integrated Security Solutions",
    heading1: "PROTECTION IS NOT",
    heading2: "JUST A SERVICE,",
    heading3: "IT'S OUR MISSION",
    accent: "#f97316",
    accent2: "#e05a00",
    desc: "Kavach Global delivers comprehensive integrated security solutions — from surveillance and access control to rapid response systems — trusted by",
    img: SecurityImg,
    whyImg: Security3Img,
    badges: ["ISO Certified", "7,500+ Clients", "50+ Industries"],
    shieldLetter: "K",
    servicesBg: SecurityImg,
    servicesLabel: "Integrated Security & Facility Solutions",
    servicesHeading1: "EXPLORE OUR COMPREHENSIVE",
    servicesHeading2: "RANGE OF SOLUTIONS",
    whyHeading1: "WE'RE THE TRUSTED CHOICE FOR",
    whyHeading2: "INTEGRATED SOLUTIONS",
    whyDesc: "Whether it's security, ICT, data centers, or large-scale infrastructure — choosing the right partner is critical. We are committed to delivering reliable, customized solutions that meet your exact needs across every domain.",
  },
  {
    label: "ICT Infrastructure",
    heading1: "CONNECTING THE FUTURE",
    heading2: "THROUGH INTELLIGENT",
    heading3: "ICT INFRASTRUCTURE",
    accent: "#3b82f6",
    accent2: "#1d4ed8",
    desc: "End-to-end ICT solutions — networking, cloud, enterprise software, and digital automation — empowering organizations to thrive digitally. Trusted by",
    img: ICT,
    whyImg: ICT,
    badges: ["Cloud Ready", "Enterprise Grade", "Digital First"],
    shieldLetter: "K",
    servicesBg: ICT,
    servicesLabel: "ICT & Digital Technology Solutions",
    servicesHeading1: "POWERING ENTERPRISES THROUGH",
    servicesHeading2: "CUTTING-EDGE ICT SOLUTIONS",
    whyHeading1: "YOUR TRUSTED PARTNER FOR",
    whyHeading2: "ICT & DIGITAL TRANSFORMATION",
    whyDesc: "From enterprise networking and cloud deployments to full data center design and management — we deliver the digital backbone your business needs. Trusted across 7+ countries by government and private sector clients.",
  },
  {
    label: "Data Center Solutions",
    heading1: "THE POWERHOUSE",
    heading2: "BEHIND YOUR",
    heading3: "DIGITAL SERVICES",
    accent: "#8b5cf6",
    accent2: "#6d28d9",
    desc: "Design, construction, and management of enterprise-grade data centers powering banking, healthcare, e-commerce, and government services. Trusted by",
    img: DataCenter,
    whyImg: DataCenter,
    badges: ["99.99% Uptime", "Tier IV Ready", "24/7 Operations"],
    shieldLetter: "K",
    servicesBg: DataCenter,
    servicesLabel: "Data Center Design & Operations",
    servicesHeading1: "ENTERPRISE-GRADE DATA CENTERS",
    servicesHeading2: "BUILT FOR 99.99% UPTIME",
    whyHeading1: "THE TRUSTED BUILDER OF",
    whyHeading2: "MISSION-CRITICAL DATA CENTERS",
    whyDesc: "Design, construction, and management of enterprise-grade data centers — the critical infrastructure behind banking, healthcare, e-commerce, and government digital services. Built for resilience, built to last.",
  },
  {
    label: "Infrastructure Projects",
    heading1: "BUILDING THE",
    heading2: "BACKBONE OF",
    heading3: "MODERN SOCIETY",
    accent: "#10b981",
    accent2: "#059669",
    desc: "Large-scale infrastructure solutions — roads, energy, water systems, and smart city networks — forming the foundation of cities and industries. Trusted by",
    img: Infrastructure,
    whyImg: Infrastructure,
    badges: ["Smart Cities", "Large Scale", "Nation Building"],
    shieldLetter: "K",
    servicesBg: Infrastructure,
    servicesLabel: "Infrastructure & Smart City Projects",
    servicesHeading1: "BUILDING THE BACKBONE OF",
    servicesHeading2: "MODERN CITIES & INDUSTRIES",
    whyHeading1: "DELIVERING LARGE-SCALE",
    whyHeading2: "INFRASTRUCTURE EXCELLENCE",
    whyDesc: "Large-scale infrastructure solutions — roads, energy, water systems, and smart city networks — forming the foundation of modern cities. 20+ years of experience across public and private sector mega-projects.",
  },
];

/* ── About Slides Data ── */
const aboutSlides = [
  {
    img1: FacilityImg,
    img2: Security3Img,
    label: "About Kavach Global",
    h1: "DEDICATION TO DELIVERING BEST",
    h2: "INTEGRATED SOLUTIONS",
    desc: "We are your trusted partner for comprehensive facility management and security solutions, dedicated to protecting your business and assets with reliable, technology-driven systems.",
    points: [
      "We offer flexible, round-the-clock support to fit your schedule.",
      "End-to-end customized solutions designed for your industry.",
      "Trusted by 7,500+ clients across 50+ industries nationwide.",
    ],
  },
  {
    img1: ICT,
    img2: DataCenter,
    label: "ICT & Data Center Expertise",
    h1: "POWERING ENTERPRISES WITH",
    h2: "CUTTING-EDGE ICT SOLUTIONS",
    desc: "From enterprise networking and cloud deployments to full data center design and management — we deliver the digital backbone your business needs to grow and stay resilient.",
    points: [
      "Custom ERP, CRM, and cloud platforms for enterprises of all sizes.",
      "Data center design with 99.99% uptime and Tier IV readiness.",
      "Trusted by government and private sector clients across 7+ countries.",
    ],
  },
  {
    img1: Infrastructure,
    img2: FacilityImg,
    label: "Infrastructure & Smart Cities",
    h1: "BUILDING THE FOUNDATIONS",
    h2: "OF TOMORROW'S WORLD",
    desc: "We deliver large-scale infrastructure projects — roads, water systems, energy networks, and smart city solutions — that power communities and drive economic growth.",
    points: [
      "Roads, bridges, metro, and smart city networks delivered at scale.",
      "Renewable energy and power transmission infrastructure expertise.",
      "20+ years of experience across public and private sector projects.",
    ],
  },
];

/* ── Specialized Project Domains Data ── */
const projectDomains = [
  {
    id: "infrastructure",
    num: "01",
    color: "#e05a00",
    colorLight: "rgba(224,90,0,0.4)",
    colorHoverBg: "#fff7f3",
    colorHoverBorder: "#e05a00",
    colorPillHover: "#fff3ee",
    img: Infrastructure,
    title: "Infrastructure",
    titleAccent: "Projects",
    accentTextColor: "#ffa05a",
    tagline: "Building the backbone of modern society",
    badges: ["Smart Cities", "Roads & Bridges", "Energy Systems"],
    desc: "Large-scale infrastructure solutions — from transportation and water systems to energy, communication, and social infrastructure — forming the foundation of cities and industries.",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    tiles: [
      { title: "Transportation", desc: "Roads, bridges, metro, airports, and port solutions reducing transit time and improving safety." },
      { title: "Water & Sanitation", desc: "Dams, pipelines, and sewage treatment ensuring clean water access and reduced shortage." },
      { title: "Energy Systems", desc: "Power plants, transmission lines, and renewable energy infrastructure for reliable electricity." },
      { title: "Social Infrastructure", desc: "Schools, hospitals, and government facilities improving education and healthcare access." },
    ],
    stats: ["Roads & Highways", "Water Supply Systems", "Energy Infrastructure", "Smart City Networks"],
    reverse: false,
  },
  {
    id: "ict",
    num: "02",
    color: "#2563eb",
    colorLight: "rgba(37,99,235,0.4)",
    colorHoverBg: "#eff6ff",
    colorHoverBorder: "#2563eb",
    colorPillHover: "#eff6ff",
    img: ICT,
    title: "ICT",
    titleAccent: "Projects",
    accentTextColor: "#93c5fd",
    tagline: "Information & Communication Technology",
    badges: ["Cloud Ready", "Enterprise Grade", "Digital First"],
    desc: "End-to-end ICT solutions empowering organizations to digitize operations, build robust networks, and leverage intelligent systems — from software platforms to enterprise communication infrastructure.",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    tiles: [
      { title: "Enterprise Software", desc: "Custom ERP, CRM, and management systems handling thousands of users with full compliance." },
      { title: "Network Infrastructure", desc: "Fiber cables, mobile towers, and data centers enabling fast and secure connectivity." },
      { title: "Cloud Solutions", desc: "Scalable cloud platforms, storage systems, and SaaS deployments for modern enterprises." },
      { title: "Digital Automation", desc: "AI chatbots, IoT systems, and process automation reducing manual workload significantly." },
    ],
    stats: ["Networking & Connectivity", "Cloud & Data Systems", "Software Platforms", "Communication Tech"],
    reverse: true,
  },
  {
    id: "data-center",
    num: "03",
    color: "#7c3aed",
    colorLight: "rgba(124,58,237,0.4)",
    colorHoverBg: "#f5f3ff",
    colorHoverBorder: "#7c3aed",
    colorPillHover: "#f5f3ff",
    img: DataCenter,
    title: "Data Center",
    titleAccent: "Projects",
    accentTextColor: "#c4b5fd",
    tagline: "The powerhouse behind digital services",
    badges: ["99.99% Uptime", "Tier IV Ready", "24/7 Ops"],
    desc: "Design, construction, and management of enterprise-grade data centers — the critical infrastructure behind banking, healthcare, e-commerce, and government digital services.",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6" y2="6" />
        <line x1="6" y1="18" x2="6" y2="18" />
      </svg>
    ),
    tiles: [
      { title: "Server & Storage", desc: "High-performance servers, NAS/SAN storage, and redundant systems ensuring zero data loss." },
      { title: "Power & Cooling", desc: "UPS, generators, precision cooling, and airflow systems for non-stop operations." },
      { title: "Network Design", desc: "Routers, switches, firewalls, and fiber cabling for ultra-fast and secure transmission." },
      { title: "Physical Security", desc: "Biometric access, CCTV, fire suppression, and compliance-ready facility design." },
    ],
    stats: ["Server Infrastructure", "Cooling & Power Systems", "Network & Security", "24/7 Operations"],
    reverse: false,
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Mining Operations");
  const [openAccordion, setOpenAccordion] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(1);
  const [heroIdx, setHeroIdx] = useState(0);
  const [aboutIdx, setAboutIdx] = useState(0);
  const [heroFading, setHeroFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroFading(true);
      setTimeout(() => {
        setHeroIdx(prev => (prev + 1) % heroSlides.length);
        setHeroFading(false);
      }, 400);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setAboutIdx(prev => (prev + 1) % aboutSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[heroIdx];
  const about = aboutSlides[aboutIdx];

  const goHero = (dir) => {
    setHeroFading(true);
    setTimeout(() => {
      setHeroIdx(prev => (prev + dir + heroSlides.length) % heroSlides.length);
      setHeroFading(false);
    }, 400);
  };

  const solutionsData = {
    "Mining Operations": {
      title: "Innovating Mining Operations with Digital Solutions",
      desc: "At Kavach Global, we enhance efficiency and transparency of mining operations through cutting-edge technology — from extraction to delivery.",
      items: [
        { title: "Digital Logistics Management Solutions (DLMS)", content: "Real-time tracking, optimized routing, and intelligent analytics that improve operational efficiency, reduce transit time, and minimize costs while ensuring safety and regulatory compliance." },
        { title: "Integrated Customer Management Solution", content: "Seamless tracking of customer interactions — orders, invoicing, delivery — with customer profiling, order history, and 360-degree support tracking." }
      ]
    },
    "Education Management": {
      title: "Revolutionizing Education Management Through Technology",
      desc: "Empowering educational institutions with cutting-edge solutions to streamline operations, enhance learning experiences, and foster innovation.",
      items: [
        { title: "Admission Automation System", content: "Online applications, real-time status updates, error-free data management — reducing admin workload and enhancing the applicant experience." },
        { title: "Scholarship Management System", content: "Transparent and efficient scholarship administration with application tracking, eligibility verification, fund disbursement, and compliance reporting." }
      ]
    },
    "Food Security & Agriculture": {
      title: "Driving Food Security Through Digital Innovation",
      desc: "Efficient, transparent, tech-driven solutions addressing the complexities of agriculture, distribution, and food supply management.",
      items: [
        { title: "Commodity Auction Automation System", content: "Transparent real-time auction platform ensuring fair pricing for farmers and buyers, reducing market inefficiencies across the ecosystem." },
        { title: "Supply Chain Management System", content: "End-to-end optimization of storage, transportation, and delivery with real-time tracking and analytics to minimize wastage." }
      ]
    },
    "Smart Land & Industry": {
      title: "Empowering Land & Industry with Digital Solutions",
      desc: "Innovative solutions for land allocation, industrial inspections, CSR monitoring, and resource management across multiple sectors.",
      items: [
        { title: "Building Plan Approval System", content: "Automated submission, review, and approval workflows ensuring faster and more efficient handling of building plan applications." },
        { title: "CSR Monitoring System", content: "Track CSR projects, monitor progress, and measure impact — ensuring transparency and accountability across all initiatives." }
      ]
    },
    "HealthTech Solutions": {
      title: "Transforming Healthcare Through Technology",
      desc: "Empowering healthcare providers to enhance service delivery, coordinate resources efficiently, and improve patient outcomes.",
      items: [
        { title: "Community Health Worker System", content: "Track patient records, monitor health programs, and deliver timely care in underserved areas — fostering healthier communities." },
        { title: "Drug Distribution & Supply Chain System", content: "Optimize inventory, track distribution in real time, reduce wastage — ensuring critical drugs reach the right locations on time." }
      ]
    },
    "Marketing & Communication": {
      title: "Revolutionizing Marketing and Communication",
      desc: "Advanced solutions empowering organizations to engage customers, streamline operations, and enhance decision-making.",
      items: [
        { title: "Cloud Contact Center", content: "Manage omnichannel communications, optimize workflows, and ensure seamless customer experience through a scalable cloud-based platform." },
        { title: "Conversational AI", content: "Intelligent chatbots and virtual assistants delivering personalized 24/7 support — automating routine tasks while ensuring meaningful interactions." }
      ]
    }
  };

  const industries = [
    { icon: <MdSecurity size={34} />, name: "Security Services", desc: "Advanced integrated security solutions including surveillance, access control, and rapid response systems protecting assets 24/7." },
    { icon: <FiTool size={34} />, name: "Facility Management", desc: "Comprehensive facility management ensuring seamless operations, maintenance excellence, and a productive environment." },
    { icon: <MdSchool size={34} />, name: "Education", desc: "Empowering institutions with innovative educational technology and smart infrastructure management systems." },
    { icon: <MdLocalHospital size={34} />, name: "Health Care", desc: "World-class healthcare support through cutting-edge medical technology and integrated health management." },
    { icon: <FiTruck size={34} />, name: "Automobile", desc: "Manufacturing excellence in the automotive sector with precision-engineered facility solutions." },
    { icon: <MdApartment size={34} />, name: "Hospital", desc: "Comprehensive hospital management for 24/7 seamless operations and critical infrastructure support." },
    { icon: <FiBriefcase size={34} />, name: "Government", desc: "Public sector digital transformation through robust infrastructure, security, and smart-city solutions." },
    { icon: <FiCpu size={34} />, name: "IT Industries", desc: "Leading-edge IT infrastructure and technology services powering the digital ecosystem of modern enterprises." },
  ];

  const recentProjects = [
    { id: "intelligent-traffic-management", title: "Intelligent Traffic Management System", icon: <Globe2 className="w-7 h-7" />, tags: ["Smart City", "IoT"], desc: "AI-powered adaptive traffic control system reducing congestion by 40% across urban corridors." },
    { id: "emergency-call-box", title: "Emergency Call Box", icon: <Phone className="w-7 h-7" />, tags: ["Safety", "Telecom"], desc: "Solar-powered SOS kiosks with two-way communication deployed across national highways." },
    { id: "gis-solution-mining", title: "GIS Solution For Mining", icon: <Building2 className="w-7 h-7" />, tags: ["GIS", "Mining"], desc: "Geospatial intelligence platform for real-time asset tracking and hazard mapping in mines." },
    { id: "payroll-solutions", title: "360 Degree Payroll Solutions", icon: <Users2 className="w-7 h-7" />, tags: ["HR Tech", "Analytics"], desc: "Automated payroll engine handling 23,000+ employees with full statutory compliance built-in." },
  ];

  const whyUs = [
    { icon: <Award className="w-5 h-5" />, title: "Certified Experts", desc: "Our team comprises certified professionals with extensive knowledge in systems installation, maintenance, and operations with 20+ years of experience." },
    { icon: <Zap className="w-5 h-5" />, title: "Customized Solutions", desc: "Every client has unique requirements. That's why we design and implement systems tailored specifically to your business needs and challenges." },
    { icon: <HeadphonesIcon className="w-5 h-5" />, title: "24/7 Emergency Support", desc: "Emergencies can happen anytime. Our dedicated team is available around the clock to provide swift assistance and ensure operational continuity." },
  ];

  const testimonials = [
    { name: "Ramesh Patel", role: "CEO, TechVision Pvt. Ltd", text: "Kavach Global transformed our security operations completely. Their integrated solutions gave us real-time visibility and peace of mind. Exceptional service and professional team throughout the entire process." },
    { name: "Sunita Sharma", role: "MD, BuildRight Corp", text: "The facility management solutions from Kavach are outstanding. They handle everything seamlessly and our uptime has never been better. I would highly recommend them to any enterprise looking for reliable partners." },
    { name: "Arjun Mehta", role: "Director, GovTech Solutions", text: "Working with Kavach Global on our smart city project was a great experience. Their team understood our requirements perfectly and delivered beyond expectations with excellent post-project support." },
  ];

  const teamMembers = [
    { id: 'rajwant-rai', name: 'Dr. Rajwant Rai', position: 'Chairman, Kavach Group', image: RajwantImg },
    { id: 'taksh-raval', name: 'Mr. Taksh Raval', position: 'Group Marketing Director (CMO)', image: TakshImg },
    { id: 'ankit-sudrania', name: 'CA Ankit Sudrania', position: 'Group Chief Financial Officer (CFO)', image: AnkitImg },
    { id: 'abhijeet-wadikar', name: 'Mr. Abhijeet Wadekar', position: 'Chief Technology Officer (CTO)', image: AbhijeetImg },
    { id: 'jitendra-kumar', name: 'Mr. Jitendra Kumar', position: 'Director – Operations & Business Development', image: JitinImg },
  ];

  const achievements = [
    { icon: <Building2 className="w-6 h-6" />, value: 8, label: "Offices in India", suffix: "" },
    { icon: <Users2 className="w-6 h-6" />, value: 23000, label: "Team Members", suffix: "+" },
    { icon: <Phone className="w-6 h-6" />, value: 50, label: "Industries", suffix: "+" },
    { icon: <Handshake className="w-6 h-6" />, value: 7500, label: "Happy Clients", suffix: "+" },
    { icon: <Globe2 className="w-6 h-6" />, value: 7, label: "Global Footprints", suffix: "+" },
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Barlow', sans-serif", overflowX: 'hidden', maxWidth: '100vw' }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;0,900;1,800&family=Barlow:wght@400;500;600&display=swap');

        html, body { overflow-x: hidden !important; max-width: 100vw !important; }

        :root {
          --org:   #e05a00;
          --org2:  #f97316;
          --red:   #c0392b;
          --dark:  #1a2332;
          --dark2: #111827;
          --gray:  #f3f4f6;
          --txt:   #4b5563;
          --txt2:  #6b7280;
        }

        .kv-h { font-family:'Barlow Condensed',sans-serif; font-weight:800; text-transform:uppercase; letter-spacing:0.02em; line-height:1.05; }
        .kv-label { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:0.72rem; letter-spacing:0.28em; text-transform:uppercase; color:var(--domain-accent, var(--org)); display:flex; align-items:center; gap:6px; }
        .kv-label::before { content:''; display:inline-block; width:8px; height:8px; border-radius:50%; background:var(--domain-accent, var(--org)); flex-shrink:0; }

        .kv-btn, .kv-btn-dark {
          position: relative; font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 0.9rem; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 14px 32px; border-radius: 24px 0px 24px 0px;
          display: inline-flex; align-items: center; gap: 10px;
          transition: all 0.3s ease; text-decoration: none; overflow: hidden; cursor: pointer; border: none; z-index: 10;
        }
        .kv-btn { background: linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%); color: #fff; box-shadow: 0 4px 15px rgba(234,88,12,0.3); }
        .kv-btn-dark { background: rgba(255,255,255,0.1); color: #ffffff; border: 1px solid rgba(255,255,255,0.2); backdrop-filter: blur(4px); }
        .kv-btn::before, .kv-btn-dark::before { content:""; position:absolute; top:0; left:-100%; width:50%; height:100%; background:linear-gradient(to right,transparent,rgba(255,255,255,0.3),transparent); transform:skewX(-25deg); transition:0.6s ease-in-out; }
        .kv-btn:hover { background:#c94e00; transform:translateY(-3px); box-shadow:0 8px 25px rgba(234,88,12,0.5); border-radius:0px 24px 0px 24px; }
        .kv-btn-dark:hover { background:#ffffff; color:var(--dark); transform:translateY(-3px); border-radius:0px 24px 0px 24px; }
        .kv-btn:hover::before, .kv-btn-dark:hover::before { left:150%; }

        .why-item { transition:all 0.3s ease; background:#fff; }
        .why-item:hover { border-color:var(--domain-accent, var(--org)) !important; box-shadow:0 10px 30px rgba(0,0,0,0.05); transform:translateX(5px); }

        @keyframes floatUpDown { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-12px)} }
        .float-badge { animation:floatUpDown 3s ease-in-out infinite; }
        @keyframes shieldFloat { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-14px)} }
        @keyframes ringRotate { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes ringRotateRev { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
        @keyframes glowPulse { 0%,100%{opacity:0.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.06)} }
        .shield-float { animation:shieldFloat 4s ease-in-out infinite; }
        .ring-rotate { animation:ringRotate 18s linear infinite; }
        .ring-rotate-rev { animation:ringRotateRev 12s linear infinite; }
        .glow-pulse { animation:glowPulse 3s ease-in-out infinite; }

        @keyframes heroFadeIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        .hero-content-enter { animation: heroFadeIn 0.5s ease forwards; }
        .hero-fading { opacity: 0; transform: translateY(-10px); transition: opacity 0.35s ease, transform 0.35s ease; }

        .domain-pill {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 0.72rem;
          letter-spacing: 0.12em; text-transform: uppercase; padding: 7px 16px;
          border-radius: 20px; border: 1px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.55); background: transparent;
          cursor: pointer; transition: all 0.3s ease; white-space: nowrap;
        }
        .domain-pill.active { color: #fff; border-color: transparent; }
        .domain-pill:hover:not(.active) { color: rgba(255,255,255,0.85); border-color: rgba(255,255,255,0.3); }

        .svc-card-hover { position:relative; overflow:hidden; clip-path:polygon(0 0,calc(100% - 24px) 0,100% 24px,100% 100%,0 100%); transition:transform 0.3s, box-shadow 0.3s; cursor:pointer; }
        .svc-card-hover:hover { transform:translateY(-6px); box-shadow:0 20px 48px rgba(0,0,0,0.25); }
        .svc-card-fill { position:absolute; bottom:0; left:0; right:0; height:0%; transition:height 0.52s cubic-bezier(0.4,0,0.2,1); z-index:0; }
        .svc-card-hover:hover .svc-card-fill { height:100%; }
        .svc-card-content { position:relative; z-index:1; }

        .ind-icon-card { background: #1a2332 !important; border: 1px solid #243048 !important; transition: transform 0.35s, box-shadow 0.35s, border-color 0.35s; cursor: pointer; }
        .ind-icon-card:hover { border-color: var(--domain-accent, var(--org)) !important; box-shadow: 0 0 0 1px rgba(224,90,0,0.4), 0 0 20px rgba(224,90,0,0.25), 0 0 50px rgba(224,90,0,0.12), 0 20px 40px rgba(0,0,0,0.3) !important; transform: translateY(-6px); }
        .ind-icon-card:hover .ind-icon-wrap { background: var(--domain-accent, var(--org)) !important; color: #fff !important; border-color: var(--domain-accent, var(--org)) !important; box-shadow: 0 0 18px rgba(224,90,0,0.55) !important; }
        .ind-icon-card .ind-name { color: #ffffff !important; }
        .ind-icon-card .ind-desc { color: #ffffff !important; }
        .ind-icon-wrap { transition: background 0.3s, color 0.3s, border-color 0.3s, box-shadow 0.3s; }

        @keyframes bobA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-9px)} }
        @keyframes bobB { 0%,100%{transform:translateY(-5px)} 50%{transform:translateY(4px)} }
        @keyframes bobC { 0%,100%{transform:translateY(-3px)} 50%{transform:translateY(6px)} }
        .bob-a { animation:bobA 2.8s ease-in-out infinite; }
        .bob-b { animation:bobB 3.2s ease-in-out infinite; }
        .bob-c { animation:bobC 2.5s ease-in-out infinite; }

        .testi-card { transition:transform 0.3s, box-shadow 0.3s; }
        .testi-card:hover { transform:translateY(-4px); box-shadow:0 16px 32px rgba(0,0,0,0.1); }

        .team-card { transition:transform 0.4s, box-shadow 0.4s; }
        .team-card:hover { transform:translateY(-6px); box-shadow:0 20px 40px rgba(0,0,0,0.12); }
        .team-card .tm-img { transition:transform 0.6s; }
        .team-card:hover .tm-img { transform:scale(1.07); }

        .stat-card { background: #ffffff !important; border: 1px solid #e5e7eb !important; transition: transform 0.35s, box-shadow 0.35s, border-color 0.35s; }
        .stat-card:hover { transform: translateY(-6px); border-color: var(--domain-accent, var(--org)) !important; box-shadow: 0 0 0 1px rgba(224,90,0,0.4), 0 0 24px rgba(224,90,0,0.3), 0 0 60px rgba(224,90,0,0.12), 0 20px 40px rgba(0,0,0,0.15) !important; }
        .stat-icon { transition: background 0.2s, color 0.2s, box-shadow 0.2s; }
        .stat-card:hover .stat-icon { background: var(--domain-accent, var(--org)) !important; color: #fff !important; box-shadow: 0 0 20px rgba(224,90,0,0.6) !important; }
        .stat-card .stat-val { color: var(--dark) !important; }
        .stat-card .stat-lbl { color: var(--txt2) !important; }

        .delivered-card { background: #ffffff !important; border: 1px solid #e5e7eb !important; position: relative; overflow: hidden; transition: transform 0.35s, box-shadow 0.35s, border-color 0.35s; cursor: pointer; }
        .delivered-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--domain-accent, var(--org)), var(--domain-accent2, var(--org2))); transform: scaleX(0); transform-origin: left; transition: transform 0.4s ease; }
        .delivered-card:hover::before { transform: scaleX(1); }
        .delivered-card:hover { transform: translateY(-8px); border-color: var(--domain-accent, var(--org)) !important; box-shadow: 0 0 0 1px rgba(224,90,0,0.35), 0 0 25px rgba(224,90,0,0.28), 0 0 60px rgba(224,90,0,0.12), 0 24px 50px rgba(0,0,0,0.12) !important; }
        .delivered-card .dc-icon-wrap { background: #fff3ee !important; color: var(--domain-accent, var(--org)) !important; border: 1px solid #fde0cc !important; transition: background 0.3s, box-shadow 0.3s, color 0.3s; }
        .delivered-card:hover .dc-icon-wrap { background: var(--domain-accent, var(--org)) !important; color: #fff !important; box-shadow: 0 0 22px rgba(224,90,0,0.55) !important; }
        .delivered-card .dc-title { color: var(--dark) !important; }
        .delivered-card .dc-desc  { color: var(--txt2) !important; }
        .delivered-card .dc-link  { color: var(--domain-accent, var(--org)) !important; border-top-color: #e5e7eb !important; }
        .delivered-card .dc-arrow { transition: transform 0.3s; }
        .delivered-card:hover .dc-arrow { transform: translateX(6px); }
        .delivered-card .dc-tag { background: #fff3ee !important; border: 1px solid #fde0cc !important; color: var(--domain-accent, var(--org)) !important; }

        /* ══ SPECIALIZED PROJECT DOMAINS — REDESIGNED ══ */
        .spd-card {
          border-radius: 20px;
          overflow: hidden;
          background: #fff;
          display: grid;
          grid-template-columns: 340px 1fr;
          min-height: 300px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          max-width:1200px;
          margin: 0 auto 28px;
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s;
        }
        .spd-card:last-child { margin-bottom: 0; }
        .spd-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(0,0,0,0.13); }
        .spd-card.spd-reverse { grid-template-columns: 1fr 340px; }
        .spd-card.spd-reverse .spd-img-side { order: 2; }
        .spd-card.spd-reverse .spd-content-side { order: 1; }

        .spd-img-side {
          position: relative;
          overflow: hidden;
          min-height: 280px;
        }
        .spd-img-side img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .spd-card:hover .spd-img-side img { transform: scale(1.06); }
        .spd-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(26,35,50,0.82) 0%, rgba(26,35,50,0.32) 100%);
        }
        .spd-img-content {
          position: absolute;
          inset: 0;
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .spd-num-ghost {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: 72px;
          line-height: 1;
          color: #fff;
          opacity: 0.1;
          position: absolute;
          top: 12px;
          right: 18px;
          pointer-events: none;
          letter-spacing: -0.02em;
        }
        .spd-icon-box {
          width: 52px; height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .spd-img-heading {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: 1.85rem;
          text-transform: uppercase;
          color: #fff;
          line-height: 1.05;
          letter-spacing: 0.01em;
          margin: 8px 0 4px;
        }
        .spd-img-tagline {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          margin-bottom: 4px;
        }
        .spd-img-badges { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px; }
        .spd-img-badge {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.3);
          color: rgba(255,255,255,0.85);
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(4px);
        }

        .spd-content-side {
          padding: 32px 36px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-top: 4px solid #f9fafb;
        }
        .spd-content-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size:25px;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .spd-content-desc {
          font-size: 14px;
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 20px;
          padding-left: 14px;
          border-left: 3px solid;
        }
        .spd-tiles-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 20px;
        }
        .spd-tile {
          padding: 14px 16px;
          border-radius: 10px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          transition: border-color 0.2s, background 0.2s;
        }
        .spd-tile-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size:16px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: #1a2332;
          margin-bottom: 4px;
        }
        .spd-tile-desc { font-size: 15px; color: #6b7280; line-height: 1.5; }
        .spd-stats-row {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          padding-top: 16px;
          border-top: 1px solid #f0f1f3;
        }
        .spd-stat-pill {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 5px;
          background: #f3f4f6;
          color: #6b7280;
          border: 1px solid #e5e7eb;
          transition: all 0.2s;
          cursor: default;
        }
        .spd-stat-dot { width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0; }

        @media (max-width: 768px) {
          .spd-card, .spd-card.spd-reverse {
            grid-template-columns: 1fr !important;
          }
          .spd-card.spd-reverse .spd-img-side { order: 1 !important; }
          .spd-card.spd-reverse .spd-content-side { order: 2 !important; }
          .spd-img-side { min-height: 220px; }
          .spd-content-side { padding: 24px 20px; }
          .spd-tiles-grid { grid-template-columns: 1fr; }
        }
        /* ══ END SPECIALIZED PROJECT DOMAINS ══ */

        .scrollbar-hide::-webkit-scrollbar { display:none; }
        .scrollbar-hide { -ms-overflow-style:none; scrollbar-width:none; }

        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        .fade-up { animation:fadeUp 0.6s ease forwards; opacity:0; }

        .sol-tab { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 0.9rem; letter-spacing: 0.06em; text-transform: uppercase; background: #ffffff; color: #1a2332; border: 1px solid #e5e7eb; border-radius: 20px 0px 20px 0px; padding: 16px 20px; text-align: left; width: 100%; display: flex; align-items: center; justify-content: space-between; transition: all 0.3s cubic-bezier(0.4,0,0.2,1); cursor: pointer; margin-bottom: 8px; }
        .sol-tab:hover { background: #fff3ee; color: #ea580c; transform: translateX(10px); border-color: #ea580c; }
        .sol-tab.active { color: #fff; border-color: transparent; box-shadow: 0 10px 20px rgba(234,88,12,0.3); border-radius: 0px 20px 0px 20px; }
        .solutions-card { background: white; border-radius: 40px 4px 40px 4px; border: 1px solid #e5e7eb; box-shadow: 0 15px 35px rgba(0,0,0,0.05); padding: 40px; }
        .accordion-item { border-bottom: 1px solid #f3f4f6; transition: all 0.3s ease; }
        .accordion-item.open { background: #fffaf8; padding-left: 12px; border-left: 3px solid #ea580c; border-radius: 0 8px 8px 0; }

        .dot-bg { background-image:radial-gradient(rgba(0,0,0,0.06) 1px,transparent 1px); background-size:28px 28px; }
        .dot-bg-light { background-image:radial-gradient(rgba(0,0,0,0.04) 1px,transparent 1px); background-size:28px 28px; }

        @keyframes aboutFadeIn { from{opacity:0;transform:translateX(20px)} to{opacity:1;transform:translateX(0)} }
        .about-slide-enter { animation: aboutFadeIn 0.5s ease forwards; }

        .domain-accent-transition { transition: color 0.4s ease, background-color 0.4s ease, border-color 0.4s ease; }
        @keyframes sectionBgFade { from{opacity:0} to{opacity:1} }
        .section-bg-fade { animation: sectionBgFade 0.6s ease forwards; }
      `}</style>

      <style>{`
        :root {
          --domain-accent: ${slide.accent};
          --domain-accent2: ${slide.accent2};
        }
      `}</style>


      {/* ══ 1. HERO ══ */}
      <section className="relative min-h-screen flex flex-col items-center pt-[68px]" style={{ background: '#1a2332', overflow: 'hidden', maxWidth: '100%' }}>
        <div className="absolute inset-0 z-0" style={{ transition: 'opacity 0.4s ease' }}>
          <img key={heroIdx} src={slide.img} alt="" className="w-full h-full object-cover opacity-20" style={{ animation: 'heroFadeIn 0.6s ease forwards' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(26,35,50,0.97) 55%, rgba(26,35,50,0.45) 100%)' }}></div>
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 80% 50%, ${slide.accent}18 0%, transparent 60%)`, transition: 'background 0.6s ease' }} />
        </div>

        <div className="absolute right-0 bottom-0 top-0 w-[48%] z-10 hidden lg:flex items-center justify-center" style={{ overflow: 'hidden' }}>
          <div className="glow-pulse absolute" style={{ width: '420px', height: '420px', borderRadius: '50%', background: `radial-gradient(circle, ${slide.accent}25 0%, transparent 65%)`, transition: 'background 0.6s ease' }} />
          <div className="ring-rotate absolute" style={{ width: '360px', height: '360px', borderRadius: '50%', border: `1px solid ${slide.accent}35`, transition: 'border-color 0.6s ease' }} />
          <div className="ring-rotate-rev absolute" style={{ width: '280px', height: '280px', borderRadius: '50%', border: `1px dashed ${slide.accent}22`, transition: 'border-color 0.6s ease' }} />
          <div className="shield-float relative z-10" style={{ filter: `drop-shadow(0 0 48px ${slide.accent}99)`, width: '210px', transition: 'filter 0.6s ease' }}>
            <svg viewBox="0 0 200 224" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }}>
              <defs>
                <linearGradient id="sg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#243048" /><stop offset="100%" stopColor="#111a27" /></linearGradient>
                <linearGradient id="sg2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={slide.accent} />
                  <stop offset="100%" stopColor={slide.accent2} />
                </linearGradient>
              </defs>
              <path d="M100 8 L192 44 L192 112 C192 164 146 202 100 218 C54 202 8 164 8 112 L8 44 Z" fill="url(#sg1)" stroke="url(#sg2)" strokeWidth="3" />
              <path d="M100 28 L174 58 L174 112 C174 154 138 185 100 198 C62 185 26 154 26 112 L26 58 Z" fill="none" stroke={`${slide.accent}40`} strokeWidth="1" />
              <text x="100" y="138" textAnchor="middle" fill={slide.accent} fontSize="82" fontWeight="900" fontFamily="Barlow Condensed, sans-serif" style={{ filter: `drop-shadow(0 0 10px ${slide.accent}dd)` }}>K</text>
              <circle cx="100" cy="58" r="9" fill={slide.accent} opacity="0.9" />
              <circle cx="100" cy="58" r="4" fill={slide.accent2} />
            </svg>
          </div>
          {slide.badges.map((b, i) => (
            <div key={i} className="float-badge absolute" style={{
              ...[{ top: '22%', right: '4%' }, { top: '58%', right: '0%' }, { bottom: '22%', left: '6%' }][i],
              animationDelay: `${i * 0.8}s`,
              background: `${slide.accent}18`,
              border: `1px solid ${slide.accent}55`,
              padding: '6px 14px', borderRadius: '3px', fontSize: '11px',
              color: slide.accent, fontWeight: 700, letterSpacing: '1px',
              backdropFilter: 'blur(4px)', whiteSpace: 'nowrap',
              fontFamily: "'Barlow Condensed', sans-serif",
              transition: 'all 0.4s ease',
            }}>{b}</div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-20 w-full flex-1 flex items-center">
          <div className="max-w-2xl">
            <div className={`kv-label mb-5 ${heroFading ? 'hero-fading' : 'hero-content-enter'}`} style={{ color: slide.accent }}>
              <span style={{ background: slide.accent, width: 8, height: 8, borderRadius: '50%', display: 'inline-block' }} />
              {slide.label}
            </div>
            <div className={heroFading ? 'hero-fading' : 'hero-content-enter'}>
              <h1 className="kv-h text-white mb-2" style={{ fontSize: 'clamp(2.6rem, 5.5vw, 5rem)' }}>{slide.heading1}</h1>
              <h1 className="kv-h text-white mb-2" style={{ fontSize: 'clamp(2.6rem, 5.5vw, 5rem)' }}>{slide.heading2}</h1>
              <h1 className="kv-h mb-6" style={{ fontSize: 'clamp(2.6rem, 5.5vw, 5rem)', color: slide.accent }}>{slide.heading3}</h1>
              <p className="text-base leading-relaxed mb-8 max-w-lg" style={{ color: '#9ca3af' }}>
                {slide.desc} <strong style={{ color: '#e5e7eb' }}>7,500+ clients across 50+ industries.</strong>
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="kv-btn" style={{ background: `linear-gradient(135deg, ${slide.accent} 0%, ${slide.accent2} 100%)`, boxShadow: `0 4px 15px ${slide.accent}50` }}>
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/about" className="kv-btn-dark">Learn More <ChevronRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="flex items-center gap-4 flex-wrap">
            <button onClick={() => goHero(-1)} className="w-9 h-9 rounded-full flex items-center justify-center border border-white/20 text-white/60 hover:border-white/50 hover:text-white transition-all flex-shrink-0">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2 flex-wrap">
              {heroSlides.map((s, i) => (
                <button
                  key={i}
                  onClick={() => { setHeroFading(true); setTimeout(() => { setHeroIdx(i); setHeroFading(false); }, 350); }}
                  className={`domain-pill ${heroIdx === i ? 'active' : ''}`}
                  style={heroIdx === i ? { background: `${s.accent}22`, borderColor: `${s.accent}70`, color: s.accent } : {}}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <button onClick={() => goHero(1)} className="w-9 h-9 rounded-full flex items-center justify-center border border-white/20 text-white/60 hover:border-white/50 hover:text-white transition-all flex-shrink-0">
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="flex gap-1.5 ml-auto">
              {heroSlides.map((_, i) => (
                <div key={i} style={{
                  width: heroIdx === i ? 24 : 6, height: 6, borderRadius: 3,
                  background: heroIdx === i ? slide.accent : 'rgba(255,255,255,0.2)',
                  transition: 'all 0.4s ease',
                }} />
              ))}
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 30, lineHeight: 0, fontSize: 0 }}>
          <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '60px' }}>
            <path d="M0,0 L1500,52 L1500,70 L0,70 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>


      {/* ══ 2. ABOUT ══ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div key={aboutIdx} className="about-slide-enter relative h-[500px]">
              <div className="absolute top-0 left-0 w-[70%] h-[75%] rounded-lg overflow-hidden shadow-xl">
                <img src={about.img1} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-[58%] h-[55%] rounded-lg overflow-hidden shadow-xl" style={{ border: '4px solid #fff' }}>
                <img src={about.img2} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="float-badge absolute bottom-10 left-4 z-20 px-6 py-5 rounded-lg shadow-2xl text-center" style={{ background: '#1a2332', minWidth: '140px' }}>
                <div className="kv-h text-4xl" style={{ color: slide.accent, fontStyle: 'italic' }}>20+</div>
                <div className="text-white font-semibold text-sm mt-1 leading-tight">Years of<br />Experience</div>
              </div>
              <div className="absolute top-0 left-[68%] w-2 h-32 rounded-full" style={{ background: slide.accent, opacity: 0.5 }}></div>
            </div>

            <div key={`txt-${aboutIdx}`} className="about-slide-enter">
              <div className="kv-label mb-4" style={{ color: slide.accent }}>{about.label}</div>
              <h2 className="kv-h mb-3" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'var(--dark)' }}>{about.h1}</h2>
              <h2 className="kv-h mb-6" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: slide.accent }}>{about.h2}</h2>
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--txt)' }}>{about.desc}</p>
              <div className="grid grid-cols-2 gap-4 mb-6 pb-6" style={{ borderBottom: '1px solid #e5e7eb' }}>
                {[{ icon: <Zap className="w-5 h-5" />, label: 'Fast & Reliable Services' }, { icon: <Award className="w-5 h-5" />, label: 'Certified Expert Team' }].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${slide.accent}15`, color: slide.accent, border: `1px solid ${slide.accent}30` }}>{f.icon}</div>
                    <span className="font-semibold text-sm" style={{ color: 'var(--dark)' }}>{f.label}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3 mb-8">
                {about.points.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: slide.accent }} />
                    <span className="text-sm" style={{ color: 'var(--txt)' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mb-6">
                {aboutSlides.map((_, i) => (
                  <button key={i} onClick={() => setAboutIdx(i)} style={{
                    width: aboutIdx === i ? 20 : 6, height: 6, borderRadius: 3,
                    background: aboutIdx === i ? slide.accent : '#d1d5db',
                    border: 'none', cursor: 'pointer', transition: 'all 0.3s ease',
                  }} />
                ))}
              </div>
              <Link to="/about" className="kv-btn" style={{ background: `linear-gradient(135deg, ${slide.accent} 0%, ${slide.accent2} 100%)`, boxShadow: `0 4px 15px ${slide.accent}40` }}>
                More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ══ 3. SPECIALIZED PROJECT DOMAINS ══ */}
      <section className="relative py-24 px-4" style={{ background: '#f0f1f3', overflowX: 'hidden' }}>
        <div className="absolute inset-0 pointer-events-none dot-bg-light" />
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: '4px',
            background: `linear-gradient(90deg, transparent, ${slide.accent} 30%, ${slide.accent2} 50%, ${slide.accent} 70%, transparent)`,
            transition: 'background 0.4s ease',
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-14">
            <div
              className="flex items-center justify-center gap-2 mb-4"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: slide.accent,
              }}
            >
              <span style={{ width: 32, height: '1.5px', background: slide.accent, opacity: 0.5, display: 'inline-block' }} />
              Core Expertise
              <span style={{ width: 32, height: '1.5px', background: slide.accent, opacity: 0.5, display: 'inline-block' }} />
            </div>
            <h2 className="kv-h" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'var(--dark)' }}>
              SPECIALIZED{' '}
              <span style={{ color: slide.accent, transition: 'color 0.4s ease' }}>PROJECT DOMAINS</span>
            </h2>
            <p className="mt-3 text-sm max-w-xl mx-auto" style={{ color: 'var(--txt2)' }}>
              Deep expertise across three pillars that power modern economies — infrastructure,
              digital technology, and data-driven operations.
            </p>
          </div>

          {/* Domain Cards */}
          {projectDomains.map((proj, idx) => (
            <div
              key={proj.id}
              className={`spd-card fade-up${proj.reverse ? ' spd-reverse' : ''}`}
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              {/* ── Image Side ── */}
              <div className="spd-img-side" style={{ borderTop: `4px solid ${proj.color}` }}>
                <img src={proj.img} alt={proj.title} />
                <div className="spd-img-overlay" />
                <div className="spd-num-ghost">{proj.num}</div>
                <div className="spd-img-content">
                  {/* Icon */}
                  <div
                    className="spd-icon-box"
                    style={{ background: proj.color, boxShadow: `0 6px 18px ${proj.color}55` }}
                  >
                    {proj.icon}
                  </div>
                  {/* Bottom content */}
                  <div>
                    <div className="spd-img-tagline">{proj.tagline}</div>
                    <div className="spd-img-heading">
                      {proj.title}
                      <br />
                      <em style={{ fontStyle: 'normal', color: proj.accentTextColor }}>
                        {proj.titleAccent}
                      </em>
                    </div>
                    <div className="spd-img-badges">
                      {proj.badges.map((b, i) => (
                        <span key={i} className="spd-img-badge">{b}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Content Side ── */}
              <div className="spd-content-side">
                <div>
                  {/* Label */}
                  <div className="spd-content-label" style={{ color: proj.color }}>
                    {proj.num} — {proj.title}
                    <span style={{
                      display: 'inline-block',
                      width: 20, height: 2,
                      background: proj.color,
                      borderRadius: 1,
                    }} />
                  </div>

                  {/* Description */}
                  <p className="spd-content-desc" style={{ borderLeftColor: proj.colorLight }}>
                    {proj.desc}
                  </p>

                  {/* 2×2 Tiles */}
                  <div className="spd-tiles-grid">
                    {proj.tiles.map((tile, ti) => (
                      <div
                        key={ti}
                        className="spd-tile"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = proj.colorHoverBorder;
                          e.currentTarget.style.background = proj.colorHoverBg;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = '#e5e7eb';
                          e.currentTarget.style.background = '#f9fafb';
                        }}
                      >
                        <div className="spd-tile-title">{tile.title}</div>
                        <div className="spd-tile-desc">{tile.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats Pills */}
                <div className="spd-stats-row">
                  {proj.stats.map((s, si) => (
                    <div
                      key={si}
                      className="spd-stat-pill"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = proj.colorPillHover;
                        e.currentTarget.style.borderColor = proj.color;
                        e.currentTarget.style.color = proj.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#f3f4f6';
                        e.currentTarget.style.borderColor = '#e5e7eb';
                        e.currentTarget.style.color = '#6b7280';
                      }}
                    >
                      <span className="spd-stat-dot" style={{ background: proj.color }} />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ══ 4. SERVICES ══ */}
      <section className="relative py-24 px-4 overflow-hidden" style={{ background: '#1a2332' }}>
        <div className="absolute inset-0 z-0">
          <img
            key={`svc-bg-${heroIdx}`}
            src={slide.servicesBg}
            alt=""
            className="w-full h-full object-cover section-bg-fade"
            style={{ opacity: 0.12 }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(26,35,50,0.88)' }}></div>
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 50% 0%, ${slide.accent}12 0%, transparent 60%)`, transition: 'background 0.6s ease' }} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <div className="kv-label justify-center mb-4" style={{ color: slide.accent }}>{slide.servicesLabel}</div>
            <h2 className="kv-h text-white" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>{slide.servicesHeading1}</h2>
            <h2 className="kv-h" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: slide.accent, transition: 'color 0.4s ease' }}>{slide.servicesHeading2}</h2>
            <div className="flex justify-center gap-2 mt-5">
              {heroSlides.map((s, i) => (
                <div key={i} style={{
                  width: heroIdx === i ? 28 : 8, height: 8, borderRadius: 4,
                  background: heroIdx === i ? s.accent : 'rgba(255,255,255,0.15)',
                  transition: 'all 0.4s ease',
                }} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Shield className="w-8 h-8" />, title: 'Security Solutions', desc: 'Advanced integrated security including surveillance, access control, and rapid response systems protecting your assets around the clock.' },
              { icon: <Building2 className="w-8 h-8" />, title: 'Facility Management', desc: 'End-to-end facility management ensuring seamless operations, maintenance excellence, and a productive work environment.' },
              { icon: <Zap className="w-8 h-8" />, title: 'ICT Infrastructure', desc: 'Cutting-edge ICT solutions — networking, cloud deployments, enterprise software, and digital automation — powering organizations of every size.' },
              { icon: <Globe2 className="w-8 h-8" />, title: 'Data Center Solutions', desc: 'Design, build, and management of enterprise-grade data centers with 99.99% uptime, Tier IV readiness, and round-the-clock operations support.' },
              { icon: <Building2 className="w-8 h-8" />, title: 'Infrastructure Projects', desc: 'Large-scale roads, energy, water systems, and smart city networks — building the backbone of modern cities and industrial ecosystems.' },
              { icon: <HeadphonesIcon className="w-8 h-8" />, title: 'Cloud & Communication', desc: 'Cloud contact centers, Conversational AI, and enterprise communication platforms for seamless omnichannel connectivity.' },
              { icon: <Globe2 className="w-8 h-8" />, title: 'Smart City Solutions', desc: 'Intelligent traffic management, emergency response systems, and GIS-based solutions for modern smart cities.' },
              { icon: <Users2 className="w-8 h-8" />, title: 'HR & Payroll Outsourcing', desc: '360-degree payroll solutions, HR management, and workforce services for enterprises of all sizes.' },
              { icon: <Award className="w-8 h-8" />, title: 'HealthTech & GovTech', desc: 'Digital health worker systems, drug distribution platforms, and e-governance solutions improving public services at scale.' },
            ].map((svc, idx) => <SvcCard key={idx} svc={svc} delay={idx * 60} accent={slide.accent} accent2={slide.accent2} />)}
          </div>
          <div className="text-center mt-12 text-sm" style={{ color: '#9ca3af' }}>
            Need Reliable Solutions?{' '}<Link to="/contact" className="font-semibold" style={{ color: slide.accent }}>Contact Us Today!</Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full" style={{ height: '50px' }}>
            <path d="M0,40 L1440,0 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>


      {/* ══ 5. WHY CHOOSE US ══ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-lg overflow-hidden shadow-2xl h-[460px]">
              <img
                key={`why-img-${heroIdx}`}
                src={slide.whyImg}
                alt="Why Kavach"
                className="w-full h-full object-cover section-bg-fade"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,35,50,0.4) 0%, transparent 60%)' }}></div>
              <div className="absolute bottom-6 left-6 px-4 py-3 rounded-lg" style={{ background: `${slide.accent}ee`, backdropFilter: 'blur(4px)' }}>
                <div className="kv-h text-white text-sm">{slide.label}</div>
              </div>
            </div>
            <div>
              <div className="kv-label mb-4" style={{ color: slide.accent }}>Why Choose Us</div>
              <h2 className="kv-h mb-2" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.5rem)', color: 'var(--dark)' }}>{slide.whyHeading1}</h2>
              <h2 className="kv-h mb-4" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.5rem)', color: slide.accent, transition: 'color 0.4s ease' }}>{slide.whyHeading2}</h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--txt)', maxWidth: '420px' }}>{slide.whyDesc}</p>
              <div className="space-y-4 mb-8">
                {whyUs.map((item, idx) => (
                  <div key={idx} className="why-item flex items-start gap-4 p-4 rounded-lg" style={{ border: '1px solid #f3f4f6' }}>
                    <div className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center" style={{ background: slide.accent, color: '#fff', transition: 'background 0.4s ease' }}>{item.icon}</div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: 'var(--dark)' }}>{item.title}</h4>
                      <p className="text-sm" style={{ color: 'var(--txt)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="kv-btn" style={{ background: `linear-gradient(135deg, ${slide.accent} 0%, ${slide.accent2} 100%)`, boxShadow: `0 4px 15px ${slide.accent}40` }}>
                Contact Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ══ 6. DIGITAL SOLUTIONS ══ */}
      <section className="py-24 px-4 dot-bg-light" style={{ background: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style={{ background: `${slide.accent}15`, color: slide.accent }}>What We Build</div>
            <h2 className="font-bold uppercase" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: '#1a2332' }}>KAVACH GLOBAL <span style={{ color: slide.accent }}>DIGITAL SOLUTIONS</span></h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3 flex flex-col">
              {Object.keys(solutionsData).map((key) => (
                <button key={key} onClick={() => { setActiveTab(key); setOpenAccordion(null); }} className={`sol-tab ${activeTab === key ? 'active' : ''}`}
                  style={activeTab === key ? { background: `linear-gradient(135deg, ${slide.accent} 0%, ${slide.accent2} 100%)`, boxShadow: `0 10px 20px ${slide.accent}40` } : {}}>
                  {key}<ChevronRight className={`w-4 h-4 transition-transform ${activeTab === key ? 'rotate-90' : ''}`} />
                </button>
              ))}
            </div>
            <div className="lg:w-2/3 solutions-card">
              <h3 className="font-bold text-2xl mb-3 text-slate-900">{solutionsData[activeTab].title}</h3>
              <p className="text-sm leading-relaxed mb-8 pl-4 italic text-slate-500 border-l-4" style={{ borderLeftColor: `${slide.accent}40` }}>{solutionsData[activeTab].desc}</p>
              <div className="space-y-1">
                {solutionsData[activeTab].items.map((item, idx) => (
                  <div key={idx} className={`accordion-item ${openAccordion === idx ? 'open' : ''}`}
                    style={openAccordion === idx ? { borderLeftColor: slide.accent } : {}}>
                    <button onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)} className="w-full flex items-center justify-between py-5 text-left group">
                      <span className={`font-semibold text-sm transition-colors ${openAccordion === idx ? '' : 'text-slate-800'}`}
                        style={openAccordion === idx ? { color: slide.accent } : {}}>{item.title}</span>
                      {openAccordion === idx
                        ? <Minus className="w-4 h-4" style={{ color: slide.accent }} />
                        : <Plus className="w-4 h-4 text-slate-400 group-hover:text-orange-600" />}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openAccordion === idx ? 'max-h-40 pb-5' : 'max-h-0'}`}>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══ 7. CLIENT INDUSTRIES ══ */}
      <section className="relative py-24 px-4 overflow-hidden" style={{ background: '#ffffff' }}>
        <div className="absolute inset-0 pointer-events-none dot-bg-light" />
        <div className="absolute top-0 left-0 right-0" style={{ height: '4px', background: `linear-gradient(90deg, transparent, ${slide.accent} 30%, ${slide.accent2} 50%, ${slide.accent} 70%, transparent)`, transition: 'background 0.4s ease' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <div className="kv-label justify-center mb-4" style={{ color: slide.accent }}>Sectors We Serve</div>
            <h2 className="kv-h" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'var(--dark)' }}>OUR CLIENT <span style={{ color: slide.accent }}>INDUSTRIES</span></h2>
            <p className="mt-3 text-sm max-w-xl mx-auto" style={{ color: 'var(--txt2)' }}>Tailored solutions that drive growth and operational excellence across diverse sectors.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {industries.map((ind, idx) => {
              const bobClass = idx % 3 === 0 ? 'bob-a' : idx % 3 === 1 ? 'bob-b' : 'bob-c';
              return (
                <div key={idx} className={`ind-icon-card ${bobClass} rounded-xl p-7 flex flex-col items-center text-center`} style={{ position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: '25%', right: '25%', height: '3px', background: `linear-gradient(90deg, transparent, ${slide.accent}, transparent)`, transition: 'background 0.4s ease' }} />
                  <div className="ind-icon-wrap w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${slide.accent}25`, color: slide.accent, border: `1px solid ${slide.accent}45` }}>
                    {ind.icon}
                  </div>
                  <h3 className="ind-name kv-h leading-snug mb-2" style={{ fontSize: '0.95rem' }}>{ind.name}</h3>
                  <p className="ind-desc text-xs leading-relaxed">{ind.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full" style={{ height: '50px' }}>
            <path d="M0,40 L1440,0 L1440,60 L0,60 Z" fill="#1a2332" />
          </svg>
        </div>
      </section>


      {/* ══ 8. ACHIEVEMENTS ══ */}
      <section className="relative py-24 px-4 overflow-hidden" style={{ background: '#1a2332' }}>
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full" style={{ height: '50px' }}>
            <path d="M0,0 L1440,40 L1440,0 Z" fill="#ffffff" />
          </svg>
        </div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '28px 28px' }}></div>
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 50% 100%, ${slide.accent}10 0%, transparent 60%)`, transition: 'background 0.6s ease' }} />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <div className="kv-label justify-center mb-4" style={{ color: slide.accent }}>Our Track Record</div>
            <h2 className="kv-h text-white" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>DELIVERING <span style={{ color: slide.accent, transition: 'color 0.4s ease' }}>EXCELLENCE</span> AT SCALE</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {achievements.map((item, idx) => (
              <div key={idx} className="stat-card rounded-lg p-6 flex flex-col items-center text-center fade-up" style={{ animationDelay: `${idx * 80}ms`, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, transparent, ${slide.accent}, transparent)`, transition: 'background 0.4s ease' }} />
                <div className="stat-icon mb-4 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: `${slide.accent}15`, color: slide.accent, border: `1px solid ${slide.accent}30`, transition: 'all 0.3s ease' }}>
                  {item.icon}
                </div>
                <div className="stat-val kv-h text-3xl"><CounterAnimation end={item.value} />{item.suffix}</div>
                <p className="stat-lbl mt-1 text-xs uppercase tracking-widest">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full" style={{ height: '50px' }}>
            <path d="M0,60 L1440,20 L1440,60 Z" fill="#f3f4f6" />
          </svg>
        </div>
      </section>


      {/* ══ 9. TESTIMONIALS ══ */}
      <section className="py-24 px-4 dot-bg-light" style={{ background: '#f3f4f6' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="kv-label justify-center mb-4" style={{ color: slide.accent }}>Testimonials</div>
            <h2 className="kv-h" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--dark)' }}>WHY OUR CLIENTS TRUST US FOR</h2>
            <h2 className="kv-h" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: slide.accent, transition: 'color 0.4s ease' }}>INTEGRATED SOLUTIONS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testi-card rounded-lg p-7 cursor-pointer" onClick={() => setActiveTestimonial(idx)}
                style={{
                  background: activeTestimonial === idx ? `linear-gradient(135deg, ${slide.accent}, ${slide.accent2})` : '#ffffff',
                  boxShadow: activeTestimonial === idx ? `0 16px 40px ${slide.accent}40` : '0 4px 16px rgba(0,0,0,0.06)',
                  transition: 'all 0.4s ease',
                }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" style={{ color: activeTestimonial === idx ? '#fff' : slide.accent }} />)}
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: activeTestimonial === idx ? 'rgba(255,255,255,0.9)' : 'var(--txt)' }}>{t.text}</p>
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: activeTestimonial === idx ? '1px solid rgba(255,255,255,0.2)' : '1px solid #f3f4f6' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: activeTestimonial === idx ? 'rgba(255,255,255,0.25)' : `${slide.accent}15`, color: activeTestimonial === idx ? '#fff' : slide.accent }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: activeTestimonial === idx ? '#fff' : 'var(--dark)' }}>{t.name}</div>
                    <div className="text-xs" style={{ color: activeTestimonial === idx ? 'rgba(255,255,255,0.7)' : 'var(--txt2)' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)} className="w-2.5 h-2.5 rounded-full transition-all"
                style={{ background: activeTestimonial === i ? slide.accent : '#d1d5db', transform: activeTestimonial === i ? 'scale(1.3)' : 'scale(1)' }} />
            ))}
          </div>
        </div>
      </section>


      {/* ══ 10. TEAM ══ */}
      <section className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="kv-label justify-center mb-4" style={{ color: slide.accent }}>Leadership</div>
            <h2 className="kv-h" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'var(--dark)' }}>THE TEAM TURNING <span style={{ color: slide.accent }}>IDEAS</span> INTO REALITY</h2>
            <p className="mt-3 text-sm max-w-xl mx-auto" style={{ color: 'var(--txt2)' }}>Meet the visionary leaders driving innovation and excellence at Kavach Global.</p>
          </div>
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {teamMembers.map((member, idx) => (
              <div key={member.id} onClick={() => navigate(`/team/${member.id}`)}
                className="team-card flex-shrink-0 w-[260px] snap-center cursor-pointer rounded-lg overflow-hidden fade-up"
                style={{ animationDelay: `${idx * 80}ms`, border: '1px solid #f3f4f6', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
                <div className="relative h-64 overflow-hidden">
                  <img src={member.image} alt={member.name} className="tm-img w-full h-full object-cover object-top" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,35,50,0.65) 0%, transparent 60%)' }}></div>
                  <div className="absolute top-0 left-0" style={{ width: 0, height: 0, borderTop: `36px solid ${slide.accent}`, borderRight: '36px solid transparent', transition: 'border-color 0.4s ease' }}></div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center shadow" style={{ background: '#0a66c2' }}>
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="kv-h text-base mb-0.5" style={{ color: 'var(--dark)', fontSize: '1rem' }}>{member.name}</h3>
                  <p className="text-xs line-clamp-2 mb-3" style={{ color: 'var(--txt2)' }}>{member.position}</p>
                  <div className="flex items-center gap-1 pt-3 text-xs font-semibold" style={{ borderTop: '1px solid #f3f4f6', color: slide.accent }}>
                    View Profile <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══ 11. RECENTLY DELIVERED ══ */}
      <section className="relative py-24 px-4 overflow-hidden" style={{ background: '#1a2332' }}>
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full" style={{ height: '50px' }}>
            <path d="M0,0 L1440,50 L1440,0 Z" fill="#ffffff" />
          </svg>
        </div>
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="absolute inset-0 z-0">
          <img key={`del-bg-${heroIdx}`} src={slide.img} alt="" className="w-full h-full object-cover section-bg-fade" style={{ opacity: 0.06 }} />
          <div className="absolute inset-0" style={{ background: 'rgba(26,35,50,0.92)' }} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <div className="kv-label justify-center mb-4" style={{ color: slide.accent }}>Our Work</div>
            <h2 className="kv-h text-white" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>RECENTLY <span style={{ color: slide.accent, transition: 'color 0.4s ease' }}>DELIVERED</span> SOLUTIONS</h2>
            <p className="mt-3 text-sm max-w-md mx-auto" style={{ color: '#9ca3af' }}>Real-world impact delivered at scale across India and beyond.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {recentProjects.map((item, idx) => (
              <div key={idx} onClick={() => navigate(`/project/${item.id}`)} className="delivered-card rounded-xl p-7 flex flex-col fade-up" style={{ animationDelay: `${idx * 90}ms` }}>
                <div className="dc-icon-wrap mb-5 w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: `${slide.accent}15`, color: slide.accent, border: `1px solid ${slide.accent}30` }}>
                  {item.icon}
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map((tag, ti) => <span key={ti} className="dc-tag"
                    style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '2px', fontFamily: "'Barlow Condensed', sans-serif", background: `${slide.accent}12`, border: `1px solid ${slide.accent}30`, color: slide.accent }}>{tag}</span>)}
                </div>
                <h3 className="dc-title font-semibold text-sm leading-snug mb-3">{item.title}</h3>
                <p className="dc-desc text-xs leading-relaxed mb-5">{item.desc}</p>
                <div className="dc-link mt-auto flex items-center gap-2 pt-4 text-xs font-semibold uppercase tracking-wider"
                  style={{ borderTop: '1px solid #e5e7eb', color: slide.accent }}>
                  Learn More <ChevronRight className="dc-arrow w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

/* ── SvcCard ── */
const SvcCard = ({ svc, delay, accent, accent2 }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="svc-card-hover fade-up" style={{ animationDelay: `${delay}ms`, background: '#ffffff', padding: '2.2rem', minHeight: '300px', display: 'flex', flexDirection: 'column' }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="svc-card-fill" style={{ background: `linear-gradient(180deg, ${accent} 0%, ${accent2} 100%)` }} />
      <div className="svc-card-content" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div className="mb-5 w-14 h-14 rounded-full flex items-center justify-center"
          style={{ background: hovered ? 'rgba(255,255,255,0.2)' : `${accent}15`, color: hovered ? '#fff' : accent, transition: 'all 0.3s' }}>
          {svc.icon}
        </div>
        <h3 className="kv-h text-lg mb-3" style={{ color: hovered ? '#fff' : 'var(--dark)', fontSize: '1.1rem', transition: 'color 0.3s' }}>{svc.title}</h3>
        <p className="text-sm leading-relaxed mb-5" style={{ color: hovered ? 'rgba(255,255,255,0.85)' : 'var(--txt)', transition: 'color 0.3s' }}>{svc.desc}</p>
        <Link to="/services" className="mt-auto inline-flex items-center gap-2 font-semibold text-sm pt-2" style={{ color: hovered ? '#fff' : accent, transition: 'color 0.2s' }}>
          Read More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default Home;