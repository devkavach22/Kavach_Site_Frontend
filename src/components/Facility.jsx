import React from 'react'
import { Settings, Shield, Monitor, Layout, Wrench, Search, ClipboardList, Zap, TrendingUp } from 'lucide-react';
import FacilityBg from "../assets/FacilityBg.png";
import midsection from "../assets/AboutBg.png";
import mid1 from "../assets/FT2.png";
import mid2 from "../assets/FT1.png";
import aboutLast from "../assets/AboutLast.png";

function Facility() {
    const heroStyle = {
        backgroundImage: `url(${FacilityBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    const textStyle = {
        fontWeight: 700,
        letterSpacing: '0.76px',
        textTransform: 'capitalize',
    };
    const sectionBgStyle = {
        backgroundImage: `url(${midsection})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const capabilities = [
        {
            title: "Managed Services",
            desc: "End-to-end facility support ensuring smooth operations, maintenance, and efficient day-to-day management.",
            icon: <Settings className="w-8 h-8 text-[#B83934]" />
        },
        {
            title: "Physical Security Systems",
            desc: "Advanced surveillance and access control solutions to safeguard people, assets, and infrastructure.",
            icon: <Shield className="w-8 h-8 text-[#B83934]" />
        },
        {
            title: "Remote Monitoring",
            desc: "Real-time oversight of critical systems to detect issues early and ensure continuous performance.",
            icon: <Monitor className="w-8 h-8 text-[#B83934]" />
        },
        {
            title: "Building Management",
            desc: "Integrated solutions for optimizing energy use, lighting, and climate control within facilities.",
            icon: <Layout className="w-8 h-8 text-[#B83934]" />
        },
        {
            title: "Preventive Maintenance",
            desc: "Scheduled inspections and repairs to avoid unexpected failures and extend asset life.",
            icon: <Wrench className="w-8 h-8 text-[#B83934]" />
        },
        {
            title: "Risk Assessment",
            desc: "Comprehensive evaluation of potential vulnerabilities to develop effective mitigation strategies.",
            icon: <Search className="w-8 h-8 text-[#B83934]" />
        },
        {
            title: "Inventory & Asset Tracking",
            desc: "Systematic monitoring of equipment and supplies for better accountability and resource planning.",
            icon: <ClipboardList className="w-8 h-8 text-[#B83934]" />
        },
        {
            title: "Energy Optimization",
            desc: "Strategies to reduce power consumption and improve sustainability across facility operations.",
            icon: <Zap className="w-8 h-8 text-[#B83934]" />
        },
        {
            title: "Performance Analytics",
            desc: "Data-driven insights to measure efficiency and identify areas for operational improvement.",
            icon: <TrendingUp className="w-8 h-8 text-[#B83934]" />
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section
                style={heroStyle}
                className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden"
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 w-full px-4 text-center">
                    <div className="inline-block px-12 md:px-24 py-6">
                        <h1
                            style={textStyle}
                            className="text-white text-3xl md:text-[38px] leading-[49px] break-words"
                        >
                            Facility Management
                        </h1>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section style={sectionBgStyle} className="py-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                    {/* Left: Image Composition */}
                    <div className="relative w-full lg:w-1/2 h-[500px] md:h-[650px]">
                        <div className="absolute top-[255px] right-6 grid grid-cols-9 gap-2 z-0">
                            {[...Array(81)].map((_, i) => (
                                <div key={i} className="w-[7px] h-[7px] bg-[#B83934] rounded-full"></div>
                            ))}
                        </div>
                        <div className="absolute bottom-18 left-[90px] grid grid-cols-9 gap-2 z-0">
                            {[...Array(81)].map((_, i) => (
                                <div key={i} className="w-[7px] h-[7px] bg-[#B83934] rounded-full"></div>
                            ))}
                        </div>
                        <div className="absolute top-0 left-0 w-[80%] h-[80%] overflow-hidden rounded-[34px] z-10 shadow-lg">
                            <img src={mid2} alt="Modern Facility" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute bottom-[50px] right-0 w-[65%] h-[45%] overflow-hidden rounded-[18px] border-[6px] border-white z-20 shadow-xl">
                            <img src={mid1} alt="Facility Maintenance" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <span className="text-[#B42A26] text-lg font-medium tracking-wide">
                                Facility Solutions
                            </span>
                            <h2 className="text-[#0A2540] text-3xl md:text-[38px] font-bold leading-tight">
                                Integrated Management for <br />
                                <span className="text-[#B83934]">Seamless</span> Operations
                            </h2>
                        </div>
                        <div className="flex flex-col gap-6 text-[#494B4D] text-lg leading-[33px]">
                            <p>
                                At Kavach Global, our Facility Management services are designed to optimize the performance, safety, and efficiency of your physical environment. We provide a comprehensive suite of solutions ranging from preventive maintenance and managed services to advanced security system integration.
                            </p>
                            <p>
                                Our approach ensures that every aspect of your facility—from core infrastructure to day-to-day operations—is managed with precision. By leveraging technology and expert oversight, we help organizations reduce costs, improve sustainability, and create a secure, productive space for growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities Grid */}
            <section className="py-20 px-6 bg-[#FAF9F6]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-[#0A2540] text-3xl md:text-[42px] font-bold text-center mb-16">
                        Our Capabilities
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {capabilities.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-[20px] shadow-sm border-b-4 border-transparent hover:border-[#B83934] transition-all duration-300 group"
                            >
                                <div className="mb-6 w-16 h-16 bg-[#FDF2F2] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-[#B83934] text-xl font-bold mb-4 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-[#494B4D] text-base leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        <h2 className="text-[#0A2540] text-3xl md:text-[38px] font-bold">
                            Elevate Your <span className="text-[#B83934]">Facility's</span> Efficiency
                        </h2>
                        <div className="flex flex-col gap-6 text-[#494B4D] text-lg leading-[33px] capitalize tracking-[0.36px]">
                            <p>
                                Choosing Kavach Global means partnering with a team dedicated to excellence in facility oversight. We combine technical expertise with a proactive mindset to anticipate needs before they become issues. Our managed services ensure that your operations remain uninterrupted, while our focus on energy optimization contributes to long-term sustainability.
                            </p>
                            <p>
                                We prioritize safety through integrated security systems and rigorous risk assessments, providing peace of mind for employees and stakeholders alike. Our data-driven performance analytics allow for continuous improvement, ensuring your facility remains future-ready and highly efficient in an ever-changing landscape.
                            </p>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative">
                        <div className="overflow-hidden rounded-[24px] shadow-xl">
                            <img
                                src={mid2}
                                alt="Technical Excellence"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                 className="w-full relative overflow-hidden"
                 style={{ backgroundImage: `url(${aboutLast})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
               >
                 <div className="absolute inset-0" style={{ backgroundColor: 'rgba(5, 15, 40, 0.85)', zIndex: 1 }} />
                 <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-[60px] relative flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-10" style={{ zIndex: 2 }}>
                   <div className="flex flex-col gap-3 w-full lg:max-w-[480px]">
                     <h2 style={{ margin: 0, lineHeight: 1.3 }}>
                       <span style={{ color: '#FFFFFF', fontSize: '32px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.76px' }}>READY TO OPTIMIZE <br /> YOUR </span>
                       <span style={{ color: '#FA221C', fontSize: '32px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.76px' }}>FACILITY?</span>
                     </h2>
                     <p style={{ margin: 0, color: '#FFFFFF', fontSize: '16px', fontWeight: 400, textTransform: 'capitalize', lineHeight: '1.6', letterSpacing: '0.36px' }}>
                       Connect with our experts today to discover how our tailored facility management solutions can drive operational excellence and safety for your business.
                     </p>
                   </div>
                   <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto flex-shrink-0">
                     <a href="/new/contact" className="btn-yellow-hover flex items-center justify-center gap-2 rounded-[10px] w-full sm:w-auto" style={{ backgroundColor: '#FFD128', padding: '14px 32px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                       <span style={{ color: '#0A2540', fontSize: '18px', fontWeight: 600, textTransform: 'capitalize', letterSpacing: '0.42px' }}>Get In Touch</span>
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <line x1="8" y1="16" x2="16" y2="8" stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" />
                         <polyline points="9,8 16,8 16,15" stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                       </svg>
                     </a>
                     <a href="/new/services" className="btn-outline-hover flex items-center justify-center gap-2 rounded-[10px] w-full sm:w-auto" style={{ backgroundColor: 'transparent', padding: '14px 32px', textDecoration: 'none', outline: '2px solid #FFD128', whiteSpace: 'nowrap' }}>
                       <span style={{ color: '#FFD128', fontSize: '18px', fontWeight: 600, textTransform: 'capitalize', letterSpacing: '0.42px' }}>Explore Solutions</span>
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

export default Facility;