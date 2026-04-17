import React from 'react'
import FacilityBg from "../assets/EPCHero.png";
import midsection from "../assets/AboutBg.png";
import mid2 from "../assets/EPPerson.png";
import mid1 from "../assets/EPGirl.png";
import ICTPerson from "../assets/EPMan.png";
import aboutLast from "../assets/AboutLast.png";

function EPCDetails() {
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
            desc: "We Deliver Sustainable Energy Solutions, Including Solar And Other Renewable Projects, Supporting Clean And Green Initiatives."
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
                            EPC & Infrastructure                        </h1>
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
                                EPC & Infrastructure                            </span>
                            <h2 className="text-[#0A2540] text-3xl md:text-[38px] font-bold leading-tight">
                                Building Foundations For A <br />
                                <span className="text-[#B83934]">Smarter</span> Tomorrow
                            </h2>
                        </div>
                        <div className="flex flex-col gap-6 text-[#494B4D] text-lg leading-[33px]">
                            <p>
                                At Kavach Global, we specialize in delivering comprehensive Engineering, Procurement, and Construction (EPC) solutions tailored to meet the growing needs of modern infrastructure. From urban development and renewable energy to high-voltage transmission and distribution systems, our expertise ensures the successful execution of complex projects with precision and efficiency.                            </p>
                            <p>
                                Our integrated approach combines innovative engineering, strategic procurement, and robust construction management to build infrastructure that is sustainable, reliable, and future-ready. We are committed to supporting national development by delivering high-quality solutions across public and private sectors.                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure Solutions Section */}
            <section className="py-20 px-6 bg-[#FAF9F6]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-[#0A2540] text-3xl md:text-[42px] font-bold text-center mb-16">
                        Infrastructure & EPC Solutions
                    </h2>

                    {/* Top Row: 3 cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                        {infrastructureData.slice(0, 3).map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-[20px] shadow-sm border-b-4 border-transparent hover:border-[#B83934] transition-all duration-300 group"
                            >
                                <h3 className="text-[#B83934] text-xl font-bold mb-4 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-[#494B4D] text-base leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Row: 2 centered cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[850px] mx-auto">
                        {infrastructureData.slice(3, 5).map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-[20px] shadow-sm border-b-4 border-transparent hover:border-[#B83934] transition-all duration-300 group"
                            >
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

            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    {/* Left: Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-8 order-2 lg:order-1">
                        <h2 className="text-[#0A2540] text-3xl md:text-[38px] font-bold">
                            Why Choose Our <span className="text-[#B83934]">EPC</span>{" "}
                            Infrastructure Solutions                        </h2>
                        <div className="flex flex-col gap-6 text-[#494B4D] text-lg leading-[33px] capitalize tracking-[0.36px]">
                            <p>
                                Our EPC and infrastructure solutions are built on a foundation of engineering excellence, project management expertise, and a commitment to quality. We offer end-to-end services that cover every stage of a project—from initial planning and design to procurement, construction, and final commissioning. Our experience across diverse sectors, including urban development, power distribution, and renewable energy, allows us to deliver customized solutions that address specific operational and environmental challenges.
                            </p>
                            <p>
                                We prioritize safety, efficiency, and sustainability in every project we undertake. By leveraging modern technologies and following industry best practices, we ensure that our infrastructure projects are not only delivered on time but also built to last. Our collaborative approach and strong supplier network enable us to manage resources effectively, optimize costs, and maintain high standards throughout the project lifecycle.
                            </p>
                            <p>
                                With a focus on innovation and excellence, we aim to be a trusted partner in building the infrastructure of the future. Our dedication to supporting both public and private initiatives ensures that we contribute meaningfully to creating a more connected, powered, and sustainable world.
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
    )
}

export default EPCDetails;