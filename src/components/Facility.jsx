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
            title: "Command Control Center",
            desc: "Centralized control hubs that integrate systems for better decision-making, coordination, and operational efficiency.",
            icon: <Layout className="w-8 h-8 text-[#B83934]" />
        },
        {
            title: "Asset & Maintenance Management",
            desc: "Proactive maintenance and asset tracking solutions to ensure optimal performance, reduced downtime, and extended lifecycle of infrastructure.",
            icon: <Wrench className="w-8 h-8 text-[#B83934]" />
        }
    ];

    const approaches = [
        {
            number: "01",
            title: "Understand",
            desc: "We analyze your requirements, challenges, and objectives to design the right solution.",
            icon: <Search className="w-8 h-8 text-[#B83934]" />
        },
        {
            number: "02",
            title: "Plan",
            desc: "We create a customized strategy with clear timelines and resource allocation.",
            icon: <ClipboardList className="w-8 h-8 text-[#B83934]" />
        },
        {
            number: "03",
            title: "Execute",
            desc: "Our expert teams implement solutions with precision, quality, and efficiency.",
            icon: <Zap className="w-8 h-8 text-[#B83934]" />
        },
        {
            number: "04",
            title: "Monitor & Optimize",
            desc: "We continuously monitor performance and optimize operations for better results.",
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
         {/* Capabilities Grid */}
<section className="py-20 px-6 bg-[#FAF9F6]">
    <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-[#0A2540] text-3xl md:text-[42px] font-bold">
                Our Capabilities
            </h2>
            <h3 className="text-[#0A2540] text-2xl md:text-[32px] font-bold mt-2">
                Enabling Seamless <br className="md:hidden" />
                <span className="text-[#B83934]">Connectivity & Smart</span> Operations
            </h3>
        </div>

        {/* Updated container to center last row items */}
        <div className="flex flex-wrap justify-center gap-8">
            {capabilities.map((item, index) => (
                <div
                    key={index}
                    className="bg-white p-8 rounded-[20px] shadow-sm border-b-4 border-transparent hover:border-[#B83934] transition-all duration-300 group w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]"
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

            {/* Our Approach Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="text-[#B42A26] text-lg font-medium tracking-wide">
                        Our Approach
                    </span>
                    <h2 className="text-[#0A2540] text-3xl md:text-[42px] font-bold mt-4 mb-6">
                        Delivering Excellence Through A <br />
                        <span className="text-[#B83934]">Structured</span> Process
                    </h2>
                    <p className="max-w-3xl mx-auto text-[#494B4D] text-lg mb-16">
                        We follow a systematic and client-focused approach to ensure seamless execution and consistent results across every project. By combining strategic planning, advanced technology, and skilled expertise, we deliver solutions that are efficient, reliable, and aligned with your business goals.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {approaches.map((item, index) => (
                            <div
                                key={index}
                                className={`group p-8 rounded-[24px] border border-gray-100 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[#B83934]/20 ${index % 2 !== 0 ? 'lg:mt-8' : ''}`}
                            >
                                <div className="w-full flex justify-start mb-4">
                                    <span className="text-[#B83934] text-2xl font-bold opacity-80 group-hover:opacity-100 transition-opacity">{item.number}</span>
                                </div>
                                <div className="mb-6 w-20 h-20 bg-[#FDF2F2] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-[#0A2540] text-xl font-bold mb-4 group-hover:text-[#B83934] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-[#494B4D] text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
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


