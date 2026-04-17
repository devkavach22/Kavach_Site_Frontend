import React from 'react'
import {
    Monitor,
    Smartphone,
    Briefcase,
    Layers,
    Settings,
    Globe
} from 'lucide-react'; 
import FacilityBg from "../assets/software.png";
import midsection from "../assets/AboutBg.png";
import mid2 from "../assets/Soft1.png";
import mid1 from "../assets/Soft2.png";
import ICTPerson from "../assets/Laptop.png";
import aboutLast from "../assets/AboutLast.png";

function Software() {
    const heroStyle = {
        backgroundImage: `url(${FacilityBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top', 
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

    // Data for the Modern Technology Solutions Section
    const solutions = [
        {
            title: "Web Application Development",
            description: "We Build Responsive And High-Performance Web Applications Tailored To Your Business Needs, Ensuring Seamless User Experience And Functionality.",
            icon: <Monitor className="w-8 h-8 text-[#B83934]" />,
        },
        {
            title: "Mobile App Development",
            description: "Our Mobile Solutions Are Designed For Both Android And IOS Platforms, Delivering Intuitive, Secure, And Scalable Applications.",
            icon: <Smartphone className="w-8 h-8 text-[#B83934]" />,
        },
        {
            title: "Enterprise Software Solutions",
            description: "We Develop Robust Enterprise Systems That Streamline Business Processes, Improve Efficiency, And Support Data-Driven Decision-Making.",
            icon: <Briefcase className="w-8 h-8 text-[#B83934]" />,
        },
        {
            title: "System Integration",
            description: "We Integrate Various Platforms And Technologies Into A Unified System, Ensuring Smooth Data Flow And Operational Efficiency.",
            icon: <Layers className="w-8 h-8 text-[#B83934]" />,
        },
        {
            title: "Custom Software Development",
            description: "We Design And Develop Tailored Software Solutions That Align Perfectly With Your Unique Business Requirements And Goals.",
            icon: <Settings className="w-8 h-8 text-[#B83934]" />,
        },
        {
            title: "API Development & Integration",
            description: "Seamless Integration Of Systems Through Secure And Efficient API Development.",
            icon: <Globe className="w-8 h-8 text-[#B83934]" />,
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <style>{`
                /* The entire card lifts together */
                .full-card-hover {
                    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease;
                    cursor: pointer;
                }
                .full-card-hover:hover {
                    transform: translateY(-12px);
                    box-shadow: 0px 15px 35px rgba(0,0,0,0.1);
                }

                /* The icon container zooms slightly on hover */
                .icon-container {
                    transition: transform 0.5s ease;
                }
                .full-card-hover:hover .icon-container {
                    transform: scale(1.1);
                }
            `}</style>

            {/* Hero Section */}
            <section
                style={heroStyle}
                className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden"
            >
                <div className="absolute inset-0 bg-black/30"></div> 
                <div className="relative z-10 w-full px-4 text-center">
                    <div className="inline-block px-12 md:px-24 py-6">
                        <h1
                            style={textStyle}
                            className="text-white text-3xl md:text-[38px] leading-[49px] break-words"
                        >
                            Software Development                        </h1>
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
                            <span className="text-[#B42A26] text-lg font-medium tracking-wide">
                                Software Development                            </span>
                            <h2 className="text-[#0A2540] text-3xl md:text-[38px] font-bold leading-tight">
                                Building Scalable, Secure & Future-Ready <br />
                                <span className="text-[#B83934]">Digital</span> Solutions
                            </h2>
                        </div>
                        <div className="flex flex-col gap-6 text-[#494B4D] text-lg leading-[33px]">
                            <p>
                                At Kavach Global, we deliver customized software solutions designed to meet the evolving needs of modern businesses. From web and mobile applications to enterprise platforms, our development approach focuses on scalability, security, and performance. We combine innovation with technical expertise to create digital solutions that streamline operations, enhance user experience, and drive business growth.                            </p>
                            <p>
                                Our team follows agile methodologies to ensure flexibility, faster delivery, and continuous improvement throughout the development lifecycle. By leveraging the latest technologies, we help organizations accelerate digital transformation and stay competitive in a rapidly changing digital landscape.                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modern Technology Solutions Section */}
            <section className="py-20 px-6 bg-[#FAF9F6]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-[#0A2540] text-3xl md:text-[42px] font-bold text-center mb-16">
                        Modern Technology Solutions
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((item, index) => (
                            <div
                                key={index}
                                className="full-card-hover bg-white p-8 rounded-[20px] shadow-sm border-b-4 border-transparent hover:border-[#B83934]"
                            >
                                <div className="icon-container mb-6 w-16 h-16 bg-[#FDF2F2] rounded-2xl flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-[#B83934] text-xl font-bold mb-4 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-[#494B4D] text-base leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    {/* Left: Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-8 order-2 lg:order-1">
                        <h2 className="text-[#0A2540] text-3xl md:text-[38px] font-bold">
                            Why Choose Our <span className="text-[#B83934]">Software</span>{" "}
                            Solutions                        </h2>
                        <div className="flex flex-col gap-6 text-[#494B4D] text-lg leading-[33px] capitalize tracking-[0.36px]">
                            <p>
                                Our software development services are driven by innovation, quality, and a deep understanding of evolving business needs. We specialize in building reliable, scalable, and secure applications that are designed to perform efficiently in dynamic and competitive environments. By combining technical expertise with a strategic approach, we create solutions that not only address current challenges but also support long-term business growth.
                            </p>
                            <p>
                                We leverage modern technologies, agile methodologies, and industry best practices to ensure faster delivery, flexibility, and continuous improvement throughout the development lifecycle. Our focus on user experience, performance optimization, and seamless integration enables businesses to streamline operations, enhance productivity, and deliver superior digital experiences.
                            </p>
                            <p>
                                With continuous support, proactive maintenance, and a client-centric mindset, we ensure that our solutions remain relevant, efficient, and future-ready. Our goal is to empower organizations to embrace digital transformation with confidence, unlocking new opportunities and achieving sustainable success in an ever-evolving digital landscape.
                            </p>
                        </div>
                    </div>

                    {/* Right: Image Section with Red Frame */}
                    <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
                        <div className="relative z-10">
                            <div className="overflow-hidden rounded-[24px] shadow-xl relative z-10">
                                <img
                                    src={ICTPerson}
                                    alt="Technician working on server"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                  className="w-full relative overflow-hidden"
                  style={{ backgroundImage: `url(${aboutLast})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                >
                  <div className="absolute inset-0" style={{ backgroundColor: 'rgba(5, 15, 40, 0.85)', zIndex: 1 }} />
                  <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-[60px] relative flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-10" style={{ zIndex: 2 }}>
                    <div className="flex flex-col gap-3 w-full lg:max-w-[480px]">
                      <h2 style={{ margin: 0, lineHeight: 1.3 }}>
                        <span style={{ color: '#FFFFFF', fontSize: '32px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.76px' }}>READY TO PARTNER <br /> WITH </span>
                        <span style={{ color: '#FA221C', fontSize: '32px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.76px' }}>KAVACH</span>
                        <span style={{ color: '#FFFFFF', fontSize: '32px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.76px' }}> GLOBAL!</span>
                      </h2>
                      <p style={{ margin: 0, color: '#FFFFFF', fontSize: '16px', fontWeight: 400, textTransform: 'capitalize', lineHeight: '1.6', letterSpacing: '0.36px' }}>
                        Let's Build Something Extraordinary Together. Our Experts Are Ready To Craft Tailored Solutions That Drive Real Results For Your Organization.
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
    )
}

export default Software;