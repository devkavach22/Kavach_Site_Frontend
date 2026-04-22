import React from 'react';
import Hero from "../assets/ICTBgD.png";
import midsection from "../assets/AboutBg.png";
import mid1 from "../assets/mid1.png";
import mid2 from "../assets/mid2.png";
import IC1 from "../assets/IC1.png";
import IC2 from "../assets/IC2.png";
import IC3 from "../assets/IC3.png";
import IC4 from "../assets/IC4.png";
import IC5 from "../assets/IC5.png";
import ICTPerson from "../assets/ICTPersonPik.png";
import aboutLast from "../assets/AboutLast.png";

function ICTDetailPage() {
  const heroStyle = {
    backgroundImage: `url(${Hero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const sectionBgStyle = {
    backgroundImage: `url(${midsection})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const textStyle = {
    fontWeight: 700,
    letterSpacing: '0.76px',
    textTransform: 'capitalize',
  };

  const capabilities = [
    {
      title: "Telecom Solutions",
      desc: "We provide advanced telecom infrastructure and network solutions that ensure seamless communication, high availability, and reliable connectivity.",
      icon: IC1
    },
    {
      title: "IT Infrastructure",
      desc: "Our IT services include deployment and management of hardware, networks, and enterprise systems to support efficient and secure business operations.",
      icon: IC2
    },
    {
      title: "Electronic Security",
      desc: "We offer integrated electronic security systems, including surveillance, access control, and monitoring, to safeguard people and assets effectively.",
      icon: IC3
    },
    {
      title: "Software Development",
      desc: "Custom software solutions designed to streamline business processes, enhance user experience, and drive innovation across various platforms.",
      icon: IC4
    },
    {
      title: "System Integration",
      desc: "Seamlessly connecting diverse technologies and systems into a unified platform to optimize performance and operational efficiency.",
      icon: IC5
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
              ICT Infrastructure
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
              <span className="text-[#B42A26] text-lg font-medium tracking-wide">
                ICT Infrastructure
              </span>
              <h2 className="text-[#0A2540] text-3xl md:text-[38px] font-bold leading-tight">
                Empowering Connectivity through <br />
                <span className="text-[#B83934]">Innovative</span> Technology
              </h2>
            </div>
            <div className="flex flex-col gap-6 text-[#494B4D] text-lg leading-[33px]">
              <p>
                At Kavach Global, our ICT capabilities are built on cutting-edge technology and technical expertise. We provide integrated solutions in telecom, IT infrastructure, and electronic security, ensuring businesses stay connected and secure in a rapidly evolving digital world.
              </p>
              <p>
                From custom software development to complex system integrations, we help organizations streamline operations and improve efficiency. Our mission is to deliver scalable and future-ready digital solutions that drive business growth and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-6 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#0A2540] text-3xl md:text-[42px] font-bold text-center mb-16">
            Modern Technology Solutions
          </h2>

          {/* Top Row: 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {capabilities.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-[20px] shadow-sm border-b-4 border-transparent hover:border-[#B83934] transition-all duration-300 group"
              >
                <div className="mb-6 w-16 h-16 bg-[#FDF2F2] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src={item.icon} alt={item.title} className="w-10 h-10 object-contain" />
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

          {/* Bottom Row: 2 items centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[850px] mx-auto">
            {capabilities.slice(3, 5).map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-[20px] shadow-sm border-b-4 border-transparent hover:border-[#B83934] transition-all duration-300 group"
              >
                <div className="mb-6 w-16 h-16 bg-[#FDF2F2] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src={item.icon} alt={item.title} className="w-10 h-10 object-contain" />
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
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 order-2 lg:order-1">
            <h2 className="text-[#0A2540] text-3xl md:text-[38px] font-bold">
              Why Choose Our <span className="text-[#B83934]">ICT</span> Services
            </h2>
            <div className="flex flex-col gap-6 text-[#494B4D] text-lg leading-[33px] capitalize tracking-[0.36px]">
              <p>
                Our ICT services are rooted in a profound technical mastery and a forward-thinking approach, allowing us to offer holistic solutions that span across telecommunications, IT infrastructure, and integrated electronic security. We pride ourselves on our ability to create robust, scalable networks and communication systems that form the backbone of modern business operations.
              </p>
              <p>
                Through innovative custom software development and precise system integration, we ensure that every technological component works in harmony to drive efficiency and operational excellence. Our focus on security and reliability means that we don't just build systems—we build digital environments where businesses can thrive securely. By partnering with us, organizations gain access to a team dedicated to future-proofing their technological landscape through constant innovation and unwavering technical support.
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

      {/* Ready to Partner Section */}
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
            <a href="/contact" className="btn-yellow-hover flex items-center justify-center gap-2 rounded-[10px] w-full sm:w-auto" style={{ backgroundColor: '#FFD128', padding: '14px 32px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              <span style={{ color: '#0A2540', fontSize: '18px', fontWeight: 600, textTransform: 'capitalize', letterSpacing: '0.42px' }}>Get In Touch</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="8" y1="16" x2="16" y2="8" stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" />
                <polyline points="9,8 16,8 16,15" stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </a>
            <a href="/services" className="btn-outline-hover flex items-center justify-center gap-2 rounded-[10px] w-full sm:w-auto" style={{ backgroundColor: 'transparent', padding: '14px 32px', textDecoration: 'none', outline: '2px solid #FFD128', whiteSpace: 'nowrap' }}>
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

export default ICTDetailPage;