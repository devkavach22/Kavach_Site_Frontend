import React from 'react'
import FacilityBg from "../assets/EPCHero.png";
import midsection from "../assets/AboutBg.png";
import mid1 from "../assets/mid1.png";
import mid2 from "../assets/mid2.png";
import ICTPerson from "../assets/SecurityP.png";

function EPCDetails() {
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

    const infrastructureData = [
        {
            title: "Urban Development",
            desc: "We Contribute To Modern Urban Infrastructure Through Planning And Execution Of Smart, Efficient, And Sustainable Development Projects."
        },
        {
            title: "HT/LT Transmission & Distribution",
            desc: "Our Power Solutions Include High-Tension And Low-Tension Transmission And Distribution Systems, Ensuring Reliable And Efficient Energy Delivery."
        },
        {
            title: "Renewable Energy",
            desc: "We Deliver Sustainable Energy Solutions, Including Solar And Other Renewable Projects, Supporting Clean Energy Adoption And Environmental Responsibility."
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

            {/* Infrastructure & Development Section */}
            <section className="py-20 px-6 bg-[#FFF9F9]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[#0A2540] text-3xl md:text-4xl font-bold font-['Poppins']">
                            Infrastructure & <span className="text-[#B83934]">Development</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {infrastructureData.map((card, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-b-4 border-[#B83934] flex flex-col gap-4">
                                <h3 className="text-[#B83934] text-xl font-bold font-['Poppins']">
                                    {card.title}
                                </h3>
                                <p className="text-[#494B4D] text-sm leading-relaxed font-['Poppins']">
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
                        <h2 className="text-[#0A2540] text-3xl md:text-[38px] font-bold font-['Poppins']">
                            Why Choose Our <span className="text-[#B83934]">Security</span>{" "}
                            Services
                        </h2>
                        <div className="flex flex-col gap-6 text-[#494B4D] text-lg leading-[33px] font-['Poppins'] capitalize tracking-[0.36px]">
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
        
        </div>
    )
}

export default EPCDetails