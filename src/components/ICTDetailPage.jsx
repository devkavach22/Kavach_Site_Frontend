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
    fontFamily: "'Poppins', sans-serif",
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
      title: "System Integration",
      desc: "We integrate diverse technologies and platforms into a unified system, enabling smooth data flow, improved efficiency, and centralized control.",
      icon: IC3
    },
    {
      title: "Data Center Solutions",
      desc: "We design and manage secure, high-performance data centers that ensure data availability, disaster recovery, and business continuity.",
      icon: IC4
    },
    {
      title: "Smart & Safe City Solutions",
      desc: "We deliver intelligent solutions including surveillance, automation, and monitoring systems to enhance urban safety, efficiency, and governance.",
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
              <span className="text-[#B42A26] text-lg font-medium tracking-wide font-['Poppins']">
                ICT Infrastructure
              </span>
              <h2 className="text-[#0A2540] text-3xl md:text-[38px] font-bold leading-tight font-['Poppins']">
                Powering Connected, <br />
                <span className="text-[#B83934]">Secure & Scalable</span> Environments
              </h2>
            </div>
            <div className="flex flex-col gap-6 text-[#494B4D] text-lg leading-[33px] font-['Poppins']">
              <p>
                At Kavach Global, we deliver end-to-end ICT infrastructure solutions that enable organizations to operate seamlessly in a connected world. Our expertise spans telecom, IT infrastructure, system integration, data centers, and smart & safe city solutions—ensuring reliable connectivity, enhanced security, and optimized performance across operations.
              </p>
              <p>
                With a technology-first approach, we design, implement, and manage robust infrastructure that supports business continuity and digital transformation. Our solutions are tailored to meet the unique needs of each client, combining scalability, efficiency, and innovation to build future-ready ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-[#FFF1F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#B42A26] text-lg font-medium font-['Poppins'] mb-2">Our Capabilities</p>
            <h2 className="text-[#0A2540] text-3xl md:text-[38px] font-bold font-['Poppins'] leading-tight">
              Enabling Seamless <br />
              <span className="text-[#B83934]">Connectivity & Smart</span> Operations
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {capabilities.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-[20px] shadow-[0px_0px_8px_rgba(0,0,0,0.15)] border-b-4 border-[#B83934] flex flex-col gap-5 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-[466px]"
                style={{ minHeight: '300px' }}
              >
                <div className="relative w-[70px] h-[70px]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#FFBCBA] to-transparent opacity-100 rounded-sm"></div>
                  <img src={item.icon} alt={item.title} className="relative z-10 w-[55px] h-[55px] translate-x-2 translate-y-2" />
                </div>
                <div>
                  <h3 className="text-[#B42A26] text-xl font-bold font-['Poppins'] mb-3">{item.title}</h3>
                  <p className="text-[#494B4D] text-base leading-relaxed font-['Poppins']">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our ICT Solutions Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 order-2 lg:order-1">
            <h2 className="text-[#0A2540] text-3xl md:text-[38px] font-bold font-['Poppins']">
              Why Choose Our <span className="text-[#B83934]">ICT Solutions</span>
            </h2>
            <div className="flex flex-col gap-6 text-[#494B4D] text-lg leading-[33px] font-['Poppins'] capitalize tracking-[0.36px]">
              <p>
                Our ICT solutions are designed to deliver reliability, scalability, and performance in a rapidly evolving digital landscape. We combine deep technical expertise with advanced technologies to build secure and efficient infrastructure tailored to your business needs. From seamless connectivity to integrated systems and data management, our solutions ensure optimized operations and enhanced productivity.
              </p>
              <p>
                We take a holistic approach by integrating telecom, IT infrastructure, and smart technologies into a unified ecosystem that enhances visibility, control, and operational efficiency. Our team focuses on delivering solutions that are not only robust and secure but also flexible enough to adapt to changing business demands.
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
  );
}

export default ICTDetailPage;