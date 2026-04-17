import React from "react";
import Hero from "../assets/SecurityD.png";
import midsection from "../assets/AboutBg.png";
import mid1 from "../assets/SS2.png";
import mid2 from "../assets/SS1.png";
import ICTPerson from "../assets/SecurityP.png";
import aboutLast from "../assets/AboutLast.png";
function Security() {
    const heroStyle = {
        backgroundImage: `url(${Hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    const textStyle = {
        fontWeight: 700,
        letterSpacing: "0.76px",
        textTransform: "capitalize",
    };
    const sectionBgStyle = {
        backgroundImage: `url(${midsection})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    const cardData = [
        {
            title: "Security Guards",
            desc: "Our Trained And Professional Security Personnel Ensure Round-The-Clock Protection, Maintaining Safety And Order Across Your Premises.",
        },
        {
            title: "Armed Security",
            desc: "We Provide Highly Trained Armed Security Personnel For High-Risk Environments, Ensuring Enhanced Protection And Rapid Response Capabilities.",
        },
        {
            title: "Industrial Security",
            desc: "Specialized Security Solutions Designed For Industrial Environments, Focusing On Asset Protection, Access Control, And Risk Prevention.",
        },
        {
            title: "Protection Services",
            desc: "We Offer Customized Protection Services For Individuals, Assets, And Critical Operations, Ensuring Safety And Peace Of Mind.",
        },
        {
            title: "Due Diligence & Investigation",
            desc: "Our Expert Team Conducts Thorough Background Checks, Risk Assessments, And Investigations To Support Informed Decision-Making And Security Planning.",
        },
    ];

    return (
        <div className="min-h-screen bg-white">
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
                            Security Services                        </h1>
                    </div>
                </div>
            </section>

            <section style={sectionBgStyle} className="py-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                    {/* Left: Image Composition */}
                    <div className="relative w-full lg:w-1/2 h-[500px] md:h-[650px]">
                        <div className="absolute top-[255px] right-6 grid grid-cols-9 gap-2 z-0">
                            {[...Array(81)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-[7px] h-[7px] bg-[#B83934] rounded-full"
                                ></div>
                            ))}
                        </div>
                        <div className="absolute bottom-18 left-[90px] grid grid-cols-9 gap-2 z-0">
                            {[...Array(81)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-[7px] h-[7px] bg-[#B83934] rounded-full"
                                ></div>
                            ))}
                        </div>
                        <div className="absolute top-0 left-0 w-[80%] h-[80%] overflow-hidden rounded-[34px] z-10 shadow-lg">
                            <img
                                src={mid2}
                                alt="City Infrastructure"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute bottom-[50px] right-0 w-[65%] h-[45%] overflow-hidden rounded-[18px] border-[6px] border-white z-20 shadow-xl">
                            <img
                                src={mid1}
                                alt="Technician"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <span className="text-[#B42A26] text-lg font-medium tracking-wide">
                                Security Services
                            </span>
                            <h2 className="text-[#0A2540] text-3xl md:text-[38px] font-bold leading-tight">
                                Protecting People, <br />
                                <span className="text-[#B83934]">Assets & Operations</span>
                            </h2>
                        </div>
                        <div className="flex flex-col gap-6 text-[#494B4D] text-lg leading-[33px]">
                            <p>
                                At Kavach Global, we provide comprehensive security solutions
                                designed to safeguard your people, assets, and business
                                operations. With a strong focus on vigilance, discipline, and
                                professionalism, our services ensure a secure environment across
                                diverse industries.
                            </p>
                            <p>
                                Our integrated approach combines trained personnel, advanced
                                security practices, and risk management strategies to deliver
                                reliable and effective protection tailored to your specific
                                needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Solutions Section */}
            <section className="py-20 px-6 bg-[#FFF9F9]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[#0A2540] text-3xl md:text-4xl font-bold">
                            Security & Protection{" "}
                            <span className="text-[#B83934]">Solutions</span>
                        </h2>
                    </div>

                    {/* Top Row: 3 Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {cardData.slice(0, 3).map((card, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-b-4 border-[#B83934] flex flex-col gap-4"
                            >
                                <h3 className="text-[#B83934] text-xl font-bold">
                                    {card.title}
                                </h3>
                                <p className="text-[#494B4D] text-sm leading-relaxed">
                                    {card.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Row: 2 Centered Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[850px] mx-auto">
                        {cardData.slice(3, 5).map((card, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-b-4 border-[#B83934] flex flex-col gap-4"
                            >
                                <h3 className="text-[#B83934] text-xl font-bold">
                                    {card.title}
                                </h3>
                                <p className="text-[#494B4D] text-sm leading-relaxed">
                                    {card.desc}
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
                            Why Choose Our <span className="text-[#B83934]">Security</span>{" "}
                            Services
                        </h2>
                        <div className="flex flex-col gap-6 text-[#494B4D] text-lg leading-[33px] capitalize tracking-[0.36px]">
                            <p>
                                Our capabilities are built on a strong foundation of expertise,
                                discipline, and advanced security practices, enabling us to
                                deliver comprehensive protection across diverse environments. We
                                offer a wide range of security services, including trained
                                guarding personnel, armed security, industrial security
                                solutions, and specialized protection services tailored to
                                specific operational needs. Our approach integrates modern
                                security systems, risk assessment strategies, and continuous
                                monitoring to ensure complete safety and control.
                            </p>
                            <p>
                                With a focus on professionalism and reliability, our teams are
                                trained to handle dynamic situations with precision and
                                efficiency, ensuring minimal risk and maximum preparedness. We
                                also provide due diligence and investigation services to support
                                informed decision-making and proactive risk management. By
                                combining human expertise with structured processes and
                                technology-driven solutions, we create secure environments that
                                protect assets, maintain operational continuity, and give our
                                clients complete peace of mind.
                            </p>
                        </div>
                    </div>

                    {/* Right: Image Section with Red Frame */}
                    <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
                        <div className="relative z-10">
                            {/* Red outline box behind image */}
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
    );
}

export default Security;