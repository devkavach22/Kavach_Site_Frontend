import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Building2, Users2, Phone, Handshake, Globe2,
  ChevronRight, Plus, Minus, Shield, Zap, ArrowRight,
  CheckCircle2, Star, Award, HeadphonesIcon,
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

const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Mining Operations");
  const [openAccordion, setOpenAccordion] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(1);

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
    <div className="min-h-screen" style={{ fontFamily: "'Barlow', sans-serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;0,900;1,800&family=Barlow:wght@400;500;600&display=swap');

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
        .kv-label { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:0.72rem; letter-spacing:0.28em; text-transform:uppercase; color:var(--org); display:flex; align-items:center; gap:6px; }
        .kv-label::before { content:''; display:inline-block; width:8px; height:8px; border-radius:50%; background:var(--org); flex-shrink:0; }

        .kv-btn, .kv-btn-dark {
          position: relative;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 14px 32px;
          border-radius: 24px 0px 24px 0px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          text-decoration: none;
          overflow: hidden;
          cursor: pointer;
          border: none;
          z-index: 10;
        }
        .kv-btn {
          background: linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%);
          color: #fff;
          box-shadow: 0 4px 15px rgba(234, 88, 12, 0.3);
        }
        .kv-btn-dark {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(4px);
        }
        .kv-btn::before, .kv-btn-dark::before {
          content: "";
          position: absolute;
          top: 0; left: -100%;
          width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
          transform: skewX(-25deg);
          transition: 0.6s ease-in-out;
        }
        .kv-btn:hover { background:#c94e00; transform:translateY(-3px); box-shadow:0 8px 25px rgba(234,88,12,0.5); border-radius:0px 24px 0px 24px; }
        .kv-btn-dark:hover { background:#ffffff; color:var(--dark); transform:translateY(-3px); border-radius:0px 24px 0px 24px; }
        .kv-btn:hover::before, .kv-btn-dark:hover::before { left:150%; }

        .why-item { transition:all 0.3s ease; background:#fff; }
        .why-item:hover { border-color:var(--org) !important; box-shadow:0 10px 30px rgba(0,0,0,0.05); transform:translateX(5px); }

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

        .svc-card-hover {
          position:relative; overflow:hidden;
          clip-path:polygon(0 0,calc(100% - 24px) 0,100% 24px,100% 100%,0 100%);
          transition:transform 0.3s, box-shadow 0.3s;
          cursor:pointer;
        }
        .svc-card-hover:hover { transform:translateY(-6px); box-shadow:0 20px 48px rgba(0,0,0,0.25); }
        .svc-card-fill {
          position:absolute; bottom:0; left:0; right:0; height:0%;
          background:linear-gradient(180deg,#e05a00 0%,#c0392b 100%);
          transition:height 0.52s cubic-bezier(0.4,0,0.2,1); z-index:0;
        }
        .svc-card-hover:hover .svc-card-fill { height:100%; }
        .svc-card-content { position:relative; z-index:1; }

        /* ── INDUSTRY CARDS — dark theme on white bg ── */
        .ind-icon-card {
          background: #1a2332 !important;
          border: 1px solid #243048 !important;
          transition: transform 0.35s, box-shadow 0.35s, border-color 0.35s;
          cursor: pointer;
        }
        .ind-icon-card:hover {
          border-color: var(--org) !important;
          box-shadow:
            0 0 0 1px rgba(224,90,0,0.4),
            0 0 20px rgba(224,90,0,0.25),
            0 0 50px rgba(224,90,0,0.12),
            0 20px 40px rgba(0,0,0,0.3) !important;
          transform: translateY(-6px);
        }
        .ind-icon-card:hover .ind-icon-wrap {
          background: var(--org) !important;
          color: #fff !important;
          border-color: var(--org) !important;
          box-shadow: 0 0 18px rgba(224,90,0,0.55) !important;
        }
        .ind-icon-card .ind-name { color: #ffffff !important; }
        .ind-icon-card .ind-desc { color: #ffffff !important; }
        .ind-icon-wrap {
          background: rgba(224,90,0,0.15) !important;
          color: var(--org) !important;
          border: 1px solid rgba(224,90,0,0.3) !important;
          transition: background 0.3s, color 0.3s, border-color 0.3s, box-shadow 0.3s;
        }

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

        /* ── STAT CARDS — light on dark bg + GLOW ── */
        .stat-card {
          background: #ffffff !important;
          border: 1px solid #e5e7eb !important;
          transition: transform 0.35s, box-shadow 0.35s, border-color 0.35s;
        }
        .stat-card:hover {
          transform: translateY(-6px);
          border-color: var(--org) !important;
          box-shadow:
            0 0 0 1px rgba(224,90,0,0.4),
            0 0 24px rgba(224,90,0,0.3),
            0 0 60px rgba(224,90,0,0.12),
            0 20px 40px rgba(0,0,0,0.15) !important;
        }
        .stat-icon { transition: background 0.2s, color 0.2s, box-shadow 0.2s; }
        .stat-card:hover .stat-icon {
          background: var(--org) !important;
          color: #fff !important;
          box-shadow: 0 0 20px rgba(224,90,0,0.6) !important;
        }
        .stat-card .stat-val { color: var(--dark) !important; }
        .stat-card .stat-lbl { color: var(--txt2) !important; }

        /* ── DELIVERED CARDS — light on dark bg + GLOW ── */
        .delivered-card {
          background: #ffffff !important;
          border: 1px solid #e5e7eb !important;
          position: relative; overflow: hidden;
          transition: transform 0.35s, box-shadow 0.35s, border-color 0.35s;
          cursor: pointer;
        }
        .delivered-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--org), var(--org2));
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s ease;
        }
        .delivered-card:hover::before { transform: scaleX(1); }
        .delivered-card:hover {
          transform: translateY(-8px);
          border-color: var(--org) !important;
          box-shadow:
            0 0 0 1px rgba(224,90,0,0.35),
            0 0 25px rgba(224,90,0,0.28),
            0 0 60px rgba(224,90,0,0.12),
            0 24px 50px rgba(0,0,0,0.12) !important;
        }
        .delivered-card .dc-icon-wrap {
          background: #fff3ee !important;
          color: var(--org) !important;
          border: 1px solid #fde0cc !important;
          transition: background 0.3s, box-shadow 0.3s, color 0.3s;
        }
        .delivered-card:hover .dc-icon-wrap {
          background: var(--org) !important;
          color: #fff !important;
          box-shadow: 0 0 22px rgba(224,90,0,0.55) !important;
        }
        .delivered-card .dc-title { color: var(--dark) !important; }
        .delivered-card .dc-desc  { color: var(--txt2) !important; }
        .delivered-card .dc-link  { color: var(--org) !important; border-top-color: #e5e7eb !important; }
        .delivered-card .dc-arrow { transition: transform 0.3s; }
        .delivered-card:hover .dc-arrow { transform: translateX(6px); }
        .delivered-card .dc-tag {
          background: #fff3ee !important;
          border: 1px solid #fde0cc !important;
          color: var(--org) !important;
        }

        .scrollbar-hide::-webkit-scrollbar { display:none; }
        .scrollbar-hide { -ms-overflow-style:none; scrollbar-width:none; }

        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        .fade-up { animation:fadeUp 0.6s ease forwards; opacity:0; }

    .sol-tab {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 700;
      font-size: 0.9rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      background: #ffffff;
      color: #1a2332;
      border: 1px solid #e5e7eb;
      border-radius: 20px 0px 20px 0px; 
      padding: 16px 20px;
      text-align: left;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      margin-bottom: 8px;
    }

    .sol-tab:hover {
      background: #fff3ee;
      color: #ea580c;
      transform: translateX(10px);
      border-color: #ea580c;
    }

    .sol-tab.active {
      background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
      color: #fff;
      border-color: transparent;
      box-shadow: 0 10px 20px rgba(234, 88, 12, 0.3);
      border-radius: 0px 20px 0px 20px;
    }

    .solutions-card {
      background: white;
      border-radius: 40px 4px 40px 4px;
      border: 1px solid #e5e7eb;
      box-shadow: 0 15px 35px rgba(0,0,0,0.05);
      padding: 40px;
    }

    .accordion-item {
      border-bottom: 1px solid #f3f4f6;
      transition: all 0.3s ease;
    }
    
    .accordion-item.open {
      background: #fffaf8;
      padding-left: 12px;
      border-left: 3px solid #ea580c;
      border-radius: 0 8px 8px 0;
    }

        .dot-bg { background-image:radial-gradient(rgba(0,0,0,0.06) 1px,transparent 1px); background-size:28px 28px; }
        .dot-bg-light { background-image:radial-gradient(rgba(0,0,0,0.04) 1px,transparent 1px); background-size:28px 28px; }
      `}</style>


      {/* ══ 1. HERO ══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-[68px]" style={{ background: '#1a2332' }}>
        <div className="absolute inset-0 z-0">
          <img src={SecurityImg} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(26,35,50,0.97) 55%, rgba(26,35,50,0.45) 100%)' }}></div>
        </div>

        <div className="absolute right-0 bottom-0 top-0 w-[48%] z-10 hidden lg:flex items-center justify-center">
          <div className="glow-pulse absolute" style={{ width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(224,90,0,0.18) 0%, transparent 65%)' }} />
          <div className="ring-rotate absolute" style={{ width: '360px', height: '360px', borderRadius: '50%', border: '1px solid rgba(224,90,0,0.2)' }} />
          <div className="ring-rotate-rev absolute" style={{ width: '280px', height: '280px', borderRadius: '50%', border: '1px dashed rgba(224,90,0,0.15)' }} />
          <div className="shield-float relative z-10" style={{ filter: 'drop-shadow(0 0 48px rgba(224,90,0,0.65))', width: '210px' }}>
            <svg viewBox="0 0 200 224" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }}>
              <defs>
                <linearGradient id="sg1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#243048" /><stop offset="100%" stopColor="#111a27" />
                </linearGradient>
                <linearGradient id="sg2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#f97316" /><stop offset="50%" stopColor="#e05a00" /><stop offset="100%" stopColor="#c0392b" />
                </linearGradient>
              </defs>
              <path d="M100 8 L192 44 L192 112 C192 164 146 202 100 218 C54 202 8 164 8 112 L8 44 Z" fill="url(#sg1)" stroke="url(#sg2)" strokeWidth="3" />
              <path d="M100 28 L174 58 L174 112 C174 154 138 185 100 198 C62 185 26 154 26 112 L26 58 Z" fill="none" stroke="rgba(224,90,0,0.25)" strokeWidth="1" />
              <text x="100" y="138" textAnchor="middle" fill="#e05a00" fontSize="82" fontWeight="900" fontFamily="Barlow Condensed, sans-serif" style={{ filter: 'drop-shadow(0 0 10px rgba(224,90,0,0.9))' }}>K</text>
              <circle cx="100" cy="58" r="9" fill="#e05a00" opacity="0.9" />
              <circle cx="100" cy="58" r="4" fill="#f97316" />
            </svg>
          </div>
          {[
            { text: "ISO Certified", style: { top: '22%', right: '4%' } },
            { text: "7,500+ Clients", style: { top: '58%', right: '0%' } },
            { text: "50+ Industries", style: { bottom: '22%', left: '6%' } },
          ].map((b, i) => (
            <div key={i} className="float-badge absolute" style={{ ...b.style, animationDelay: `${i * 0.8}s`, background: 'rgba(224,90,0,0.1)', border: '1px solid rgba(224,90,0,0.35)', padding: '6px 14px', borderRadius: '3px', fontSize: '11px', color: '#f97316', fontWeight: 700, letterSpacing: '1px', backdropFilter: 'blur(4px)', whiteSpace: 'nowrap', fontFamily: "'Barlow Condensed', sans-serif" }}>{b.text}</div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-20 w-full">
          <div className="max-w-2xl">
            <div className="kv-label mb-5">Integrated Security &amp; Facility Solutions</div>
            <h1 className="kv-h text-white mb-2" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>PROTECTION IS NOT</h1>
            <h1 className="kv-h text-white mb-2" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>JUST A SERVICE,</h1>
            <h1 className="kv-h mb-6" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', color: 'var(--org2)' }}>IT'S OUR MISSION</h1>
            <p className="text-base leading-relaxed mb-8 max-w-lg" style={{ color: '#9ca3af' }}>
              Kavach Global delivers comprehensive, integrated solutions across Security, Facility Management,
              ICT Infrastructure, Healthcare, Power &amp; Utilities, and Data-Driven Analytics — trusted by
              <strong style={{ color: '#e5e7eb' }}> 7,500+ clients across 50+ industries.</strong>
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="kv-btn">Get Started <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/about" className="kv-btn-dark">Learn More <ChevronRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-30">
          <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full" style={{ height: '60px' }}>
            <path d="M0,0 L1440,50 L1440,70 L0,70 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>


      {/* ══ 2. ABOUT ══ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px]">
              <div className="absolute top-0 left-0 w-[70%] h-[75%] rounded-lg overflow-hidden shadow-xl">
                <img src={FacilityImg} alt="Facility" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-[58%] h-[55%] rounded-lg overflow-hidden shadow-xl" style={{ border: '4px solid #fff' }}>
                <img src={Security3Img} alt="Security" className="w-full h-full object-cover" />
              </div>
              <div className="float-badge absolute bottom-10 left-4 z-20 px-6 py-5 rounded-lg shadow-2xl text-center" style={{ background: '#1a2332', minWidth: '140px' }}>
                <div className="kv-h text-4xl" style={{ color: 'var(--org2)', fontStyle: 'italic' }}>20+</div>
                <div className="text-white font-semibold text-sm mt-1 leading-tight">Years of<br />Experience</div>
              </div>
              <div className="absolute top-0 left-[68%] w-2 h-32 rounded-full" style={{ background: 'var(--org)', opacity: 0.5 }}></div>
            </div>
            <div>
              <div className="kv-label mb-4">About Kavach Global</div>
              <h2 className="kv-h mb-3" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'var(--dark)' }}>DEDICATION TO DELIVERING BEST</h2>
              <h2 className="kv-h mb-6" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'var(--org)' }}>INTEGRATED SOLUTIONS</h2>
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--txt)' }}>
                We are your trusted partner for comprehensive facility management and security solutions,
                dedicated to protecting your business and assets with reliable, technology-driven systems.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6 pb-6" style={{ borderBottom: '1px solid #e5e7eb' }}>
                {[{ icon: <Zap className="w-5 h-5" />, label: 'Fast & Reliable Services' }, { icon: <Award className="w-5 h-5" />, label: 'Certified Expert Team' }].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#fff3ee', color: 'var(--org)', border: '1px solid #fde0cc' }}>{f.icon}</div>
                    <span className="font-semibold text-sm" style={{ color: 'var(--dark)' }}>{f.label}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3 mb-8">
                {['We offer flexible, round-the-clock support to fit your schedule.', 'End-to-end customized solutions designed for your industry.', 'Trusted by 7,500+ clients across 50+ industries nationwide.'].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--org)' }} />
                    <span className="text-sm" style={{ color: 'var(--txt)' }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="kv-btn">More About Us <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>


      {/* ══ 3. SERVICES ══ */}
      <section className="relative py-24 px-4 overflow-hidden" style={{ background: '#1a2332' }}>
        <div className="absolute inset-0 z-0">
          <img src={SecurityImg} alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0" style={{ background: 'rgba(26,35,50,0.88)' }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <div className="kv-label justify-center mb-4">Our Service</div>
            <h2 className="kv-h text-white" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>EXPLORE OUR COMPREHENSIVE</h2>
            <h2 className="kv-h" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: 'var(--org2)' }}>RANGE OF SOLUTIONS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Shield className="w-8 h-8" />, title: 'Security Solutions', desc: 'Advanced integrated security including surveillance, access control, and rapid response systems protecting your assets around the clock.' },
              { icon: <Building2 className="w-8 h-8" />, title: 'Facility Management', desc: 'End-to-end facility management ensuring seamless operations, maintenance excellence, and a productive work environment.' },
              { icon: <Zap className="w-8 h-8" />, title: 'ICT Infrastructure', desc: 'Cutting-edge ICT infrastructure solutions enabling digital transformation across enterprises and government sectors.' },
              { icon: <Globe2 className="w-8 h-8" />, title: 'Smart City Solutions', desc: 'Intelligent traffic management, emergency response systems, and GIS-based solutions for modern smart cities.' },
              { icon: <Users2 className="w-8 h-8" />, title: 'HR & Payroll Outsourcing', desc: '360-degree payroll solutions, HR management, and workforce services for enterprises of all sizes.' },
              { icon: <HeadphonesIcon className="w-8 h-8" />, title: 'Cloud & Communication', desc: 'Cloud contact centers, Conversational AI, and enterprise communication platforms for seamless omnichannel connectivity.' },
            ].map((svc, idx) => (
              <SvcCard key={idx} svc={svc} delay={idx * 80} />
            ))}
          </div>
          <div className="text-center mt-12 text-sm" style={{ color: '#9ca3af' }}>
            Need Reliable Solutions?{' '}
            <Link to="/contact" className="font-semibold" style={{ color: 'var(--org2)' }}>Contact Us Today!</Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full" style={{ height: '50px' }}>
            <path d="M0,40 L1440,0 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>


      {/* ══ 4. WHY CHOOSE US ══ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-lg overflow-hidden shadow-2xl h-[460px]">
              <img src={Security3Img} alt="Why Kavach" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,35,50,0.4) 0%, transparent 60%)' }}></div>
            </div>
            <div>
              <div className="kv-label mb-4">Why Choose Us</div>
              <h2 className="kv-h mb-2" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.5rem)', color: 'var(--dark)' }}>WE'RE THE TRUSTED CHOICE FOR</h2>
              <h2 className="kv-h mb-4" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.5rem)', color: 'var(--org)' }}>INTEGRATED SOLUTIONS</h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--txt)', maxWidth: '420px' }}>
                When it comes to security and facility management, choosing the right partner is critical.
                We are committed to delivering reliable, customized solutions that meet your exact needs.
              </p>
              <div className="space-y-4 mb-8">
                {whyUs.map((item, idx) => (
                  <div key={idx} className="why-item flex items-start gap-4 p-4 rounded-lg" style={{ border: '1px solid #f3f4f6' }}>
                    <div className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center" style={{ background: 'var(--org)', color: '#fff' }}>{item.icon}</div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: 'var(--dark)' }}>{item.title}</h4>
                      <p className="text-sm" style={{ color: 'var(--txt)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="kv-btn">Contact Now <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>


      {/* ══ 5. DIGITAL SOLUTIONS ══ */}
      <section className="py-24 px-4 dot-bg-light" style={{ background: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              What We Build
            </div>
            <h2 className="font-bold uppercase" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: '#1a2332' }}>
              KAVACH GLOBAL <span className="text-orange-600">DIGITAL SOLUTIONS</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Tabs */}
            <div className="lg:w-1/3 flex flex-col">
              {Object.keys(solutionsData).map((key) => (
                <button
                  key={key}
                  onClick={() => { setActiveTab(key); setOpenAccordion(null); }}
                  className={`sol-tab ${activeTab === key ? 'active' : ''}`}
                >
                  {key}
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === key ? 'rotate-90' : ''}`} />
                </button>
              ))}
            </div>

            {/* Main Content Area */}
            <div className="lg:w-2/3 solutions-card">
              <h3 className="font-bold text-2xl mb-3 text-slate-900">{solutionsData[activeTab].title}</h3>
              <p className="text-sm leading-relaxed mb-8 pl-4 italic text-slate-500 border-l-4 border-orange-500/20">
                {solutionsData[activeTab].desc}
              </p>

              <div className="space-y-1">
                {solutionsData[activeTab].items.map((item, idx) => (
                  <div key={idx} className={`accordion-item ${openAccordion === idx ? 'open' : ''}`}>
                    <button
                      onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                      className="w-full flex items-center justify-between py-5 text-left group"
                    >
                      <span className={`font-semibold text-sm transition-colors ${openAccordion === idx ? 'text-orange-600' : 'text-slate-800 group-hover:text-orange-600'}`}>
                        {item.title}
                      </span>
                      {openAccordion === idx ?
                        <Minus className="w-4 h-4 text-orange-600" /> :
                        <Plus className="w-4 h-4 text-slate-400 group-hover:text-orange-600" />
                      }
                    </button>

                    <div className={`overflow-hidden transition-all duration-300 ${openAccordion === idx ? 'max-h-40 pb-5' : 'max-h-0'}`}>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══ 6. CLIENT INDUSTRIES — WHITE bg, DARK cards ══ */}
      <section className="relative py-24 px-4 overflow-hidden" style={{ background: '#ffffff' }}>
        <div className="absolute inset-0 pointer-events-none dot-bg-light" />
        <div className="absolute top-0 left-0 right-0" style={{ height: '4px', background: 'linear-gradient(90deg, transparent, #e05a00 30%, #f97316 50%, #e05a00 70%, transparent)' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <div className="kv-label justify-center mb-4">Sectors We Serve</div>
            <h2 className="kv-h" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'var(--dark)' }}>
              OUR CLIENT <span style={{ color: 'var(--org)' }}>INDUSTRIES</span>
            </h2>
            <p className="mt-3 text-sm max-w-xl mx-auto" style={{ color: 'var(--txt2)' }}>
              Tailored solutions that drive growth and operational excellence across diverse sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {industries.map((ind, idx) => {
              const bobClass = idx % 3 === 0 ? 'bob-a' : idx % 3 === 1 ? 'bob-b' : 'bob-c';
              return (
                <div key={idx} className={`ind-icon-card ${bobClass} rounded-xl p-7 flex flex-col items-center text-center`}
                  style={{ position: 'relative', overflow: 'hidden' }}>
                  {/* Orange top accent line */}
                  <div style={{ position: 'absolute', top: 0, left: '25%', right: '25%', height: '3px', background: 'linear-gradient(90deg, transparent, var(--org), transparent)' }} />
                  <div className="ind-icon-wrap w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                    {ind.icon}
                  </div>
                  <h3 className="ind-name kv-h leading-snug mb-2" style={{ fontSize: '0.95rem' }}>{ind.name}</h3>
                  <p className="ind-desc text-xs leading-relaxed text-black style={{ fontSize: '1.95rem' }}">
                    {ind.desc}
                  </p>                </div>
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


      {/* ══ 7. ACHIEVEMENTS — dark bg, WHITE cards ══ */}
      <section className="relative py-24 px-4 overflow-hidden" style={{ background: '#1a2332' }}>
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full" style={{ height: '50px' }}>
            <path d="M0,0 L1440,40 L1440,0 Z" fill="#ffffff" />
          </svg>
        </div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '28px 28px' }}></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <div className="kv-label justify-center mb-4">Our Track Record</div>
            <h2 className="kv-h text-white" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
              DELIVERING <span style={{ color: 'var(--org2)' }}>EXCELLENCE</span> AT SCALE
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {achievements.map((item, idx) => (
              <div key={idx} className="stat-card rounded-lg p-6 flex flex-col items-center text-center fade-up"
                style={{ animationDelay: `${idx * 80}ms`, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent, var(--org), transparent)' }} />
                <div className="stat-icon mb-4 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: '#fff3ee', color: 'var(--org)', border: '1px solid #fde0cc' }}>
                  {item.icon}
                </div>
                <div className="stat-val kv-h text-3xl">
                  <CounterAnimation end={item.value} />{item.suffix}
                </div>
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


      {/* ══ 8. TESTIMONIALS ══ */}
      <section className="py-24 px-4 dot-bg-light" style={{ background: '#f3f4f6' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="kv-label justify-center mb-4">Testimonials</div>
            <h2 className="kv-h" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--dark)' }}>WHY OUR CLIENTS TRUST US FOR</h2>
            <h2 className="kv-h" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--org)' }}>INTEGRATED SOLUTIONS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testi-card rounded-lg p-7 cursor-pointer" onClick={() => setActiveTestimonial(idx)}
                style={{ background: activeTestimonial === idx ? 'linear-gradient(135deg, #e05a00, #f97316)' : '#ffffff', boxShadow: activeTestimonial === idx ? '0 16px 40px rgba(224,90,0,0.3)' : '0 4px 16px rgba(0,0,0,0.06)' }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" style={{ color: activeTestimonial === idx ? '#fff' : 'var(--org)' }} />)}
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: activeTestimonial === idx ? 'rgba(255,255,255,0.9)' : 'var(--txt)' }}>{t.text}</p>
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: activeTestimonial === idx ? '1px solid rgba(255,255,255,0.2)' : '1px solid #f3f4f6' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: activeTestimonial === idx ? 'rgba(255,255,255,0.25)' : '#fff3ee', color: activeTestimonial === idx ? '#fff' : 'var(--org)' }}>
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
                style={{ background: activeTestimonial === i ? 'var(--org)' : '#d1d5db', transform: activeTestimonial === i ? 'scale(1.3)' : 'scale(1)' }} />
            ))}
          </div>
        </div>
      </section>


      {/* ══ 9. TEAM ══ */}
      <section className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="kv-label justify-center mb-4">Leadership</div>
            <h2 className="kv-h" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'var(--dark)' }}>
              THE TEAM TURNING <span style={{ color: 'var(--org)' }}>IDEAS</span> INTO REALITY
            </h2>
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
                  <div className="absolute top-0 left-0" style={{ width: 0, height: 0, borderTop: '36px solid var(--org)', borderRight: '36px solid transparent' }}></div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center shadow" style={{ background: '#0a66c2' }}>
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="kv-h text-base mb-0.5" style={{ color: 'var(--dark)', fontSize: '1rem' }}>{member.name}</h3>
                  <p className="text-xs line-clamp-2 mb-3" style={{ color: 'var(--txt2)' }}>{member.position}</p>
                  <div className="flex items-center gap-1 pt-3 text-xs font-semibold" style={{ borderTop: '1px solid #f3f4f6', color: 'var(--org)' }}>
                    View Profile <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══ 10. RECENTLY DELIVERED — dark bg, WHITE cards ══ */}
      <section className="relative py-24 px-4 overflow-hidden" style={{ background: '#1a2332' }}>
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full" style={{ height: '50px' }}>
            <path d="M0,0 L1440,50 L1440,0 Z" fill="#ffffff" />
          </svg>
        </div>
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <div className="kv-label justify-center mb-4">Our Work</div>
            <h2 className="kv-h text-white" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
              RECENTLY <span style={{ color: 'var(--org2)' }}>DELIVERED</span> SOLUTIONS
            </h2>
            <p className="mt-3 text-sm max-w-md mx-auto" style={{ color: '#9ca3af' }}>Real-world impact delivered at scale across India and beyond.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {recentProjects.map((item, idx) => (
              <div key={idx} onClick={() => navigate(`/project/${item.id}`)}
                className="delivered-card rounded-xl p-7 flex flex-col fade-up"
                style={{ animationDelay: `${idx * 90}ms` }}>
                <div className="dc-icon-wrap mb-5 w-14 h-14 rounded-xl flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map((tag, ti) => (
                    <span key={ti} className="dc-tag" style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '2px', fontFamily: "'Barlow Condensed', sans-serif" }}>{tag}</span>
                  ))}
                </div>
                <h3 className="dc-title font-semibold text-sm leading-snug mb-3">{item.title}</h3>
                <p className="dc-desc text-xs leading-relaxed mb-5">{item.desc}</p>
                <div className="dc-link mt-auto flex items-center gap-2 pt-4 text-xs font-semibold uppercase tracking-wider" style={{ borderTop: '1px solid #e5e7eb' }}>
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
const SvcCard = ({ svc, delay }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="svc-card-hover fade-up" style={{ animationDelay: `${delay}ms`, background: '#ffffff', padding: '2.2rem', minHeight: '320px', display: 'flex', flexDirection: 'column' }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="svc-card-fill" />
      <div className="svc-card-content" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div className="mb-5 w-14 h-14 rounded-full flex items-center justify-center"
          style={{ background: hovered ? 'rgba(255,255,255,0.2)' : '#fff3ee', color: hovered ? '#fff' : 'var(--org)', transition: 'all 0.3s' }}>
          {svc.icon}
        </div>
        <h3 className="kv-h text-lg mb-3" style={{ color: hovered ? '#fff' : 'var(--dark)', fontSize: '1.1rem', transition: 'color 0.3s' }}>{svc.title}</h3>
        <p className="text-sm leading-relaxed mb-5" style={{ color: hovered ? 'rgba(255,255,255,0.85)' : 'var(--txt)', transition: 'color 0.3s' }}>{svc.desc}</p>
        <Link to="/services" className="mt-auto inline-flex items-center gap-2 font-semibold text-sm pt-2" style={{ color: hovered ? '#fff' : 'var(--org)', transition: 'color 0.2s' }}>
          Read More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default Home;