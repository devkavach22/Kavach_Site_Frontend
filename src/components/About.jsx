import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Building2,
  Users2,
  Phone,
  Handshake,
  Globe2,
  ChevronRight,
  Target,
  Eye,
  Heart,
  Shield,
  Zap,
  Award,
} from "lucide-react";

// Import Team Member Images
import RajwantImg from "../assets/rajwant.jpg";
import TakshImg from "../assets/taksh.jpg";
import AnkitImg from "../assets/anitk.jpg";
import AbhijeetImg from "../assets/abijeet.jpg";
import JitinImg from "../assets/jitin.jpg";

// Counter Animation Component
const CounterAnimation = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (counterRef.current) observer.observe(counterRef.current);
    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime;
    let animationFrame;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;
      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const About = () => {
  const navigate = useNavigate();

  const achievements = [
    {
      icon: <Building2 className="w-8 h-8 text-orange-500" strokeWidth={2} />,
      value: 8,
      label: "Offices in India",
      suffix: "",
    },
    {
      icon: <Users2 className="w-8 h-8 text-orange-500" strokeWidth={2} />,
      value: 23000,
      label: "Team",
      suffix: "+",
    },
    {
      icon: <Phone className="w-8 h-8 text-orange-500" strokeWidth={2} />,
      value: 50,
      label: "Industries",
      suffix: "+",
    },
    {
      icon: <Handshake className="w-8 h-8 text-orange-500" strokeWidth={2} />,
      value: 7500,
      label: "Clients",
      suffix: "+",
    },
    {
      icon: <Globe2 className="w-8 h-8 text-orange-500" strokeWidth={2} />,
      value: 7,
      label: "Global Footprints",
      suffix: "+",
    },
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: "Integrity",
      desc: "We operate with unwavering transparency and ethical conduct in every interaction and business decision.",
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: "Innovation",
      desc: "We continuously push boundaries, leveraging cutting-edge technology to craft solutions for tomorrow's challenges.",
    },
    {
      icon: <Heart className="w-8 h-8 text-orange-500" />,
      title: "Client-Centric",
      desc: "Our clients are at the heart of everything we do. Their success is our mission and our greatest achievement.",
    },
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: "Excellence",
      desc: "We hold ourselves to the highest standards, delivering quality that stands the test of time across every project.",
    },
  ];

  const recentProjects = [
    {
      id: "intelligent-traffic-management",
      title: "Intelligent Traffic Management System",
      icon: <Globe2 className="w-8 h-8" />,
      desc: "A smart city initiative that leverages AI and IoT for real-time traffic optimization.",
    },
    {
      id: "emergency-call-box",
      title: "Emergency Call Box",
      icon: <Phone className="w-8 h-8" />,
      desc: "Rapid-response emergency infrastructure deployed across critical public zones.",
    },
    {
      id: "gis-solution-mining",
      title: "GIS Solution For Mining",
      icon: <Building2 className="w-8 h-8" />,
      desc: "Geospatial intelligence platform transforming mineral extraction operations.",
    },
    {
      id: "payroll-solutions",
      title: "360 Degree Payroll Solutions",
      icon: <Users2 className="w-8 h-8" />,
      desc: "End-to-end HR and payroll automation serving thousands of employees nationwide.",
    },
  ];

  const teamMembers = [
    {
      id: "rajwant-rai",
      name: "Dr. Rajwant Rai",
      position: "Chairman, Kavach Group",
      image: RajwantImg,
    },
    {
      id: "taksh-raval",
      name: "Mr. Taksh Raval",
      position: "Group Marketing Director (CMO)",
      image: TakshImg,
    },
    {
      id: "ankit-sudrania",
      name: "CA Ankit Sudrania",
      position: "Group Chief Financial Officer (CFO)",
      image: AnkitImg,
    },
    {
      id: "abhijeet-wadikar",
      name: "Mr. Abhijeet Wadekar",
      position: "Chief Technology Officer (CTO)",
      image: AbhijeetImg,
    },
    {
      id: "jitendra-kumar",
      name: "Mr. Jitendra Kumar",
      position: "Director – Operations and Business Development",
      image: JitinImg,
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-[76px]">

      {/* ── HERO SECTION ── */}
      <section className="relative py-24 pb-32 px-4 overflow-hidden bg-gradient-to-br from-orange-600 via-red-600 to-orange-300">

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full mb-8 shadow-md opacity-0 animate-[slideDown_0.6s_ease-out_0.1s_forwards]">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span className="text-white text-sm font-semibold tracking-widest uppercase">About Kavach Global</span>
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          </div>

          {/* Headline with staggered reveal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
            <span className="block text-white opacity-0 animate-[slideUp_0.7s_ease-out_0.2s_forwards]">
              Empowering Industries,
            </span>
            <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent opacity-0 animate-[slideUp_0.7s_ease-out_0.4s_forwards]">
              Shaping the Future
            </span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]">
            The Kavach Group is a leading conglomerate delivering comprehensive,
            integrated solutions across industries — from Facility Management and
            ICT Infrastructure to Healthcare, Cloud Hosting, HR Outsourcing, and
            Data-Driven Analytics.
          </p>

          {/* ── ACHIEVEMENTS BANNER inside hero ── */}
          <div className="mt-14 opacity-0 animate-[fadeIn_0.9s_ease-out_0.8s_forwards]">
            <p className="text-xs uppercase tracking-widest text-white/70 font-semibold mb-5">Our Achievements at a Glance</p>

            {/* 5 achievement cards in a single row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {achievements.map((item, i) => (
                <div
                  key={i}
                  className="group relative bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/20 
  shadow-sm hover:shadow-xl hover:-translate-y-2 
  hover:border-4 hover:border-orange-600 
  transition-all duration-300 text-center overflow-hidden cursor-default"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {/* Glow bg on hover */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  {/* Icon */}
                  <div className="relative mb-3 inline-flex p-3 bg-white/20 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-400 shadow-sm">
                    <div className="group-hover:rotate-[-6deg] transition-all duration-400">
                      {item.icon}
                    </div>
                  </div>
                  {/* Counter */}
                  <div className="text-2xl font-extrabold bg-gradient-to-r from-white to-white group-hover:from-yellow-200 group-hover:to-white bg-clip-text text-transparent transition-all duration-300">
                    <CounterAnimation end={item.value} suffix={item.suffix} />
                  </div>
                  <p className="text-white/60 text-[11px] font-bold uppercase tracking-wider mt-1 group-hover:text-yellow-200 transition-colors duration-300">
                    {item.label}
                  </p>
                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-400 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center rounded-b-2xl"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-10 flex flex-col items-center gap-2 opacity-0 animate-[fadeIn_1s_ease-out_1.2s_forwards]">
            <span className="text-xs text-white/60 uppercase tracking-widest font-medium">Scroll to explore</span>
            <div className="w-5 h-8 border-2 border-white/50 rounded-full flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-white rounded-full animate-[scrollBounce_1.5s_ease-in-out_infinite]"></div>
            </div>
          </div>
        </div>

        {/* Wave divider - blends hero into white section */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-10 opacity-0 animate-[fadeIn_0.6s_ease-out_0.05s_forwards]">Who We Are</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="opacity-0 animate-[fadeIn_0.7s_ease-out_0.1s_forwards]">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                The Kavach Group is a leading conglomerate providing comprehensive,
                integrated solutions across a wide range of industries. Our expertise
                spans <strong>Facility Management, ICT Infrastructure, Healthcare, Data
                  Center VPS, Power & Utilities, Cloud Hosting, Server Colocation, HR
                  Outsourcing, IT Services, Communication Technologies, and Data-Driven
                  Analytics.</strong>
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                By leveraging the combined strengths of{" "}
                <strong>Kavach, Kalibre, and Fact IT Solutions</strong>, we offer
                end-to-end, customized solutions that meet the dynamic needs of
                today's businesses across <strong>50+ industries</strong> and{" "}
                <strong>7+ global footprints.</strong>
              </p>
              <div className="flex gap-4">
                <div className="group relative flex-1 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-4 border border-orange-200 text-center hover:shadow-lg hover:-translate-y-1 hover:border-orange-400 transition-all duration-300 overflow-hidden cursor-default">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-red-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <p className="text-3xl font-extrabold text-orange-600 group-hover:scale-110 transition-transform duration-300 inline-block">25+</p>
                  <p className="text-sm text-gray-600 font-medium mt-1 group-hover:text-orange-700 transition-colors duration-300">Years of Excellence</p>
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-400 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"></div>
                </div>
                <div className="group relative flex-1 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-4 border border-red-200 text-center hover:shadow-lg hover:-translate-y-1 hover:border-red-400 transition-all duration-300 overflow-hidden cursor-default">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-400/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <p className="text-3xl font-extrabold text-red-600 group-hover:scale-110 transition-transform duration-300 inline-block">3</p>
                  <p className="text-sm text-gray-600 font-medium mt-1 group-hover:text-red-700 transition-colors duration-300">Subsidiaries</p>
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"></div>
                </div>
                <div className="group relative flex-1 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-4 border border-yellow-200 text-center hover:shadow-lg hover:-translate-y-1 hover:border-yellow-400 transition-all duration-300 overflow-hidden cursor-default">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <p className="text-3xl font-extrabold text-yellow-600 group-hover:scale-110 transition-transform duration-300 inline-block">8</p>
                  <p className="text-sm text-gray-600 font-medium mt-1 group-hover:text-yellow-700 transition-colors duration-300">Offices in India</p>
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-yellow-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"></div>
                </div>
              </div>
            </div>

            {/* Visual card stack */}
            <div className="relative h-[340px] flex items-center justify-center opacity-0 animate-[fadeIn_0.7s_ease-out_0.3s_forwards]">
              <div className="absolute top-0 left-8 bg-white rounded-2xl shadow-xl border-2 border-orange-100 p-6 w-64 transform -rotate-3 hover:rotate-0 transition-transform duration-500 z-10">
                <Globe2 className="w-10 h-10 text-orange-500 mb-3" />
                <h4 className="font-bold text-gray-800 text-lg">Global Reach</h4>
                <p className="text-gray-500 text-sm mt-1">Serving clients across 7+ countries with localized expertise.</p>
              </div>
              <div className="absolute bottom-0 right-8 bg-white rounded-2xl shadow-xl border-2 border-orange-200 p-6 w-64 transform rotate-3 hover:rotate-0 transition-transform duration-500 z-20">
                <Handshake className="w-10 h-10 text-red-500 mb-3" />
                <h4 className="font-bold text-gray-800 text-lg">7,500+ Clients</h4>
                <p className="text-gray-500 text-sm mt-1">Trusted by thousands of organizations worldwide for mission-critical solutions.</p>
              </div>
              <div className="absolute w-48 h-48 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-12">
            Our Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-orange-100 hover:border-orange-400 overflow-hidden opacity-0 animate-[fadeIn_0.6s_ease-out_0.1s_forwards]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="mb-5 inline-flex p-4 bg-orange-100 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Target className="w-9 h-9 text-orange-600 group-hover:rotate-[-6deg] transition-all duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver integrated, technology-driven solutions that empower
                businesses to operate efficiently, securely, and sustainably.
                We are committed to transforming complex challenges into
                streamlined opportunities — enabling our clients to focus on
                what they do best while we manage the rest.
              </p>
            </div>

            {/* Vision */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-orange-100 hover:border-orange-400 overflow-hidden opacity-0 animate-[fadeIn_0.6s_ease-out_0.2s_forwards]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="mb-5 inline-flex p-4 bg-orange-100 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Eye className="w-9 h-9 text-orange-600 group-hover:rotate-[-6deg] transition-all duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and innovative global conglomerate —
                recognized for transforming industries through cutting-edge
                technology, exceptional service delivery, and a deep commitment
                to societal progress. We envision a world where every
                organization has access to intelligent, scalable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-4">
            Our Core Values
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            The principles that guide every decision, every solution, and every relationship we build.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-orange-100 hover:border-orange-300 transform hover:-translate-y-2 text-center opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] overflow-hidden"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Soft glow background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                {/* Bottom accent bar — clean and contained */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-400 to-red-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-400 rounded-b-2xl"></div>
                <div className="relative inline-flex mb-4 p-3 bg-orange-50 group-hover:bg-orange-100 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <div className="group-hover:rotate-[-6deg] transition-all duration-500">{val.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {val.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
                <div className="mt-4 w-8 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mx-auto transition-all duration-500 group-hover:w-16"></div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── RECENTLY DELIVERED SOLUTIONS ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
              Highlighting Our Recently Delivered Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From smart cities to enterprise-grade systems — here's a glimpse of what we've built.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentProjects.map((item, idx) => (
              <div
                key={idx}
                onClick={() => navigate(`/project/${item.id}`)}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border-2 border-orange-100 hover:border-orange-400 transform hover:-translate-y-2 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] cursor-pointer"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-500"></div>
                <div className="relative flex flex-col items-center text-center h-full">
                  <div className="mb-4 p-4 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm">
                    <div className="text-orange-600 transform group-hover:rotate-[-6deg] transition-all duration-500">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 leading-snug group-hover:text-orange-600 transition-colors duration-300 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  <div className="mt-4 w-12 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full transition-all duration-500 group-hover:w-20"></div>
                  <div className="mt-3 flex items-center gap-1 text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-semibold">Learn More</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-orange-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-red-400/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

   <section className="py-16 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-4">
            The Team Turning Ideas into Reality
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Meet the visionary leaders driving innovation and excellence at Kavach Global
          </p>

          {/* Horizontal Scrolling Container */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide hover:scrollbar-default scroll-smooth">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  onClick={() => navigate(`/team/${member.id}`)}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 flex-shrink-0 w-[280px] snap-center border-2 border-orange-100 hover:border-orange-400 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top origin-top group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* LinkedIn Badge */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="p-4 bg-white">
                    <div className="mb-2">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-300 line-clamp-1">
                        {member.name}
                      </h3>
                      <p className="text-xs text-gray-600 font-medium line-clamp-2">
                        {member.position}
                      </p>
                    </div>

                    {/* View Profile Button */}
                    <div className="flex items-center justify-center pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-1 text-orange-600 group-hover:text-orange-700 transition-colors">
                        <span className="text-xs font-semibold">View Profile</span>
                        <ChevronRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Border — removed, card uses its own border-2 hover:border-orange-400 */}

                  {/* Corner Decorations */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-orange-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-red-400/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>

            {/* Scroll Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {teamMembers.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-orange-300 hover:bg-orange-600 transition-colors cursor-pointer"
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Custom Scrollbar Styles */}
        <style dangerouslySetInnerHTML={{
          __html: `
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-default::-webkit-scrollbar {
            height: 6px;
          }
          .scrollbar-default::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }
          .scrollbar-default::-webkit-scrollbar-thumb {
            background: #fb923c;
            border-radius: 10px;
          }
          .scrollbar-default::-webkit-scrollbar-thumb:hover {
            background: #f97316;
          }
        `}} />
      </section>
      {/* ── CTA SECTION ── */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-900 via-red-800 to-orange-800 relative overflow-hidden">
        {/* Top wave border */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none rotate-180">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-500 rounded-full blur-3xl opacity-10"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Partner with{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Kavach Global?
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's build something extraordinary together. Our experts are ready to
            craft tailored solutions that drive real results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
            <button
              onClick={() => navigate("/")}
              className="inline-block px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }



          @keyframes scrollBounce {
            0%, 100% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(8px); opacity: 0.4; }
          }
        `
      }} />
    </div>
  );
};

export default About;

