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
        fontFamily: "'Poppins', sans-serif",
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
            desc: "Real-time monitoring systems that enhance visibility, improve response time, and ensure continuous oversight.",
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
                            Integrated Facility Management
                        </h1>
                    </div>
                </div>
            </section>

            {/* Content Section */}
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
                            <img src={mid2} alt="City Infrastructure" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute bottom-[50px] right-0 w-[65%] h-[45%] overflow-hidden rounded-[18px] border-[6px] border-white z-20 shadow-xl">
                            <img src={mid1} alt="Technician" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <span className="text-[#B42A26] text-lg font-medium tracking-wide font-['Poppins']">
                                Integrated Facility Management
                            </span>
                            <h2 className="text-[#0A2540] text-3xl md:text-[38px] font-bold leading-tight font-['Poppins']">
                                Ensuring Efficient, <br />
                                <span className="text-[#B83934]">Safe & Well-Managed</span> Environments
                            </h2>
                        </div>
                        <div className="flex flex-col gap-6 text-[#494B4D] text-lg leading-[33px] font-['Poppins']">
                            <p>
                                At Kavach Global, we provide comprehensive Integrated Facility Management (IFM) solutions that streamline operations, enhance safety, and improve overall efficiency. By combining people, processes, and technology, we deliver seamless facility management services tailored to the unique needs of each organization.
                            </p>
                            <p>
                                Our integrated approach ensures better control, reduced operational costs, and improved asset performance—allowing businesses to focus on their core activities while we manage their facilities with precision and reliability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="py-16 px-6 bg-gradient-to-b from-transparent to-[#FFF1F0]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-[#B42A26] text-lg font-medium font-['Poppins'] mb-2 uppercase tracking-[0.36px]">Our Capabilities</p>
                        <h2 className="text-[#0A2540] text-3xl md:text-[38px] font-bold font-['Poppins'] leading-tight">
                            Enabling Seamless <br />
                            <span className="text-[#B83934]">Connectivity & Smart</span> Operations
                        </h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {capabilities.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-[20px] shadow-[0px_0px_8px_rgba(0,0,0,0.15)] border-b-4 border-[#B83934] flex flex-col gap-4 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-[380px]"
                            >
                                <div className="relative w-14 h-14 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[#FFBCBA] to-transparent opacity-40 rounded-lg"></div>
                                    <div className="relative z-10 scale-75">
                                        {item.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[#B42A26] text-lg font-bold font-['Poppins'] mb-2">{item.title}</h3>
                                    <p className="text-[#494B4D] text-sm leading-relaxed font-['Poppins']">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach Section - UPDATED CARD SIZES */}
            <section className="py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-[1200px] mx-auto">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <p className="text-[#B42A26] text-base font-medium font-['Poppins'] mb-3 tracking-[0.4px]">
                            Our Approach
                        </p>
                        <h2 className="text-[#0A2540] text-3xl md:text-[38px] font-extrabold font-['Poppins'] leading-tight mb-6">
                            Delivering Excellence Through A <br />
                            <span className="text-[#B83934]">Structured</span> Process
                        </h2>
                        <p className="text-[#494B4D] text-[15px] font-normal font-['Poppins'] max-w-[780px] mx-auto leading-[28px]">
                            We follow a systematic and client-focused approach to ensure seamless execution and consistent results across every project. By combining strategic planning, advanced technology, and skilled expertise, we deliver solutions that are efficient, reliable, and aligned with your business goals.
                        </p>
                    </div>

                    {/* Process Cards - Zig-Zag & Reduced Size */}
                    <div className="flex flex-wrap lg:flex-nowrap justify-center items-start gap-4 relative">
                        {[
                            {
                                number: "01",
                                title: "Understand",
                                desc: "We Analyze Your Requirements, Challenges, And Objectives To Design The Right Solution.",
                                icon: <Search className="w-8 h-8 text-[#B83934]" />,
                                style: "lg:mt-0"
                            },
                            {
                                number: "02",
                                title: "Plan",
                                desc: "We Create A Customized Strategy With Clear Timelines And Resource Allocation.",
                                icon: <ClipboardList className="w-8 h-8 text-[#B83934]" />,
                                style: "lg:mt-16"
                            },
                            {
                                number: "03",
                                title: "Execute",
                                desc: "Our Expert Teams Implement Solutions With Precision, Quality, And Efficiency.",
                                icon: <Zap className="w-8 h-8 text-[#B83934]" />,
                                style: "lg:mt-0"
                            },
                            {
                                number: "04",
                                title: "Monitor & Optimize",
                                desc: "We Continuously Monitor Performance And Optimize Operations For Better Results.",
                                icon: <TrendingUp className="w-8 h-8 text-[#B83934]" />,
                                style: "lg:mt-16"
                            },
                        ].map((step, index) => (
                            <div
                                key={index}
                                className={`relative w-full sm:w-[calc(50%-16px)] lg:w-[245px] bg-white border border-[#E1E6E8] rounded-[20px] p-6 flex flex-col items-center text-center shadow-[0_4px_15px_rgba(0,0,0,0.03)] ${step.style}`}
                            >
                                <div className="w-full flex justify-start mb-1">
                                    <span className="text-[#B83934] text-2xl font-bold font-['Poppins']">{step.number}</span>
                                </div>
                                <div className="w-16 h-16 rounded-full bg-[#FFF0EF] flex items-center justify-center mb-5">
                                    {step.icon}
                                </div>
                                <h3 className="text-[#0A2540] text-lg font-bold font-['Poppins'] mb-3">{step.title}</h3>
                                <p className="text-[#494B4D] text-[13px] leading-[22px] font-['Poppins']">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
    )
}

export default Facility