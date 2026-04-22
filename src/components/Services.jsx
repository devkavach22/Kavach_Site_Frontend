import React, { useState } from 'react'
import PersoLock from "../assets/PersonLock.png";
import img3 from "../assets/gard.png"
import software from "../assets/software.png"
import EPCwork from "../assets/EPCWork.png"
import FMT from "../assets/FMT.png"
import ITC from "../assets/ITCIns.png"
import projectBg from "../assets/AboutBg.png"
import Book from "../assets/Book.png"
import bookBulb from "../assets/bookBulb.png"
import Bulb from "../assets/Bulb.png"
import Person from "../assets/Person.png"
import hand from "../assets/hand.png"
import amnex from "../assets/Amnex.png";
import Arvind from "../assets/Arvind.png";
import green from "../assets/green.png";
import Udgam from "../assets/Udgam.png";
import Troikaa from "../assets/Troikaa.png";
import Rubber from "../assets/Rubber.png";
import Omspace from "../assets/Omspace.png";
import Paras from "../assets/Paras.png";
import Licoln from "../assets/Lincoln.png";
import Adani from "../assets/Adani.png";
import girl from "../assets/GIRL.png"
import aboutLast from "../assets/AboutLast.png";

const servicesData = [
    {
        id: 1,
        image: ITC,
        title: "ICT Infrastructure",
        description: "We Provide Comprehensive ICT Infrastructure Solutions Across Telecom, IT, System Integration, Data Centers, And Smart City Technologies—Enabling Secure, Scalable, And Efficient Operations.",
        link: "/ITCdetails",
    },
    {
        id: 2,
        image: img3,
        title: "Security Services",
        description: "Reliable Security Solutions Including Guarding, Armed Protection, Industrial Security, And Investigation Services—Ensuring Safety And Peace Of Mind.",
        link: "/security",
    },
    {
        id: 3,
        image: EPCwork,
        title: "EPC Works",
        description: "Comprehensive EPC Solutions Across Urban Development, Power Distribution, And Renewable Energy—Delivering Reliable And Sustainable Infrastructure.",
        link: "/epc",
    },
    {
        id: 4,
        image: software,
        title: "Software Development",
        description: "We Deliver Customized Software Solutions That Are Scalable, Secure, And Performance-Driven—Helping Businesses Streamline Operations And Accelerate Digital Transformation.",
        link: "/software",
    },
    {
        id: 5,
        image: FMT,
        title: "Integrated Facility Management",
        description: "End-To-End Facility Management Solutions Including Managed Services, Security Systems, Remote Monitoring, And Command Centers—Ensuring Efficiency, Safety, And Control.",
        link: "/facility",
    },
]

const whyData = [
    {
        id: 1,
        icon: bookBulb,
        title: "We Think Differently",
        description: "Crafting innovative solutions that empower, protect, and transform the way you thrive.",
    },
    {
        id: 2,
        icon: hand,
        title: "High Quality Projects",
        description: "Every project undergoes rigorous quality control and is executed by certified professionals.",
    },
    {
        id: 3,
        icon: bookBulb,
        title: "Expert Team Members",
        description: "Our diverse team of industry specialists brings a wealth of knowledge to every engagement.",
    },
    {
        id: 4,
        icon: Person,
        title: "24/7 Customer Support",
        description: "Round-the-clock support ensuring your operations run smoothly and resolve issues.",
    },
    {
        id: 5,
        icon: Bulb,
        title: "Innovative Technology",
        description: "From AI-powered analytics to IoT integration leveraging the latest advancements.",
    },
    {
        id: 6,
        icon: Book,
        title: "Proven Track Record",
        description: "Hundreds of successful project implementations across diverse industries worldwide.",
    },
]

const faqData = [
    {
        id: 1,
        question: "Why did you choose Kavach Global?",
        answer: "We chose Kavach Global for their integrated approach and ability to deliver multiple services under one roof with consistent quality."
    },
    {
        id: 2,
        question: "How has Kavach Global impacted your operations?",
        answer: "Their solutions have streamlined our security protocols and enhanced our overall operational efficiency significantly."
    },
    {
        id: 3,
        question: "What stands out about their services?",
        answer: "Their attention to detail and proactive maintenance culture sets them apart from other service providers."
    },
    {
        id: 4,
        question: "Would you recommend Kavach Global?",
        answer: "Absolutely. We recommend them to any organization seeking scalable and reliable infrastructure and security solutions."
    },
    {
        id: 5,
        question: "How is their service quality?",
        answer: "The quality is top-notch; they use industry-grade materials and follow international safety standards."
    },
    {
        id: 6,
        question: "Is customer support responsive?",
        answer: "Yes, their support team is available 24/7 and addresses technical issues with remarkable speed."
    }
];

const customStyles = `
    .service-card-main {
        display: flex;
        flex-direction: column;
        border-radius: 16px;
        overflow: hidden;
        width: 100%;
        position: relative;
        box-shadow: 0 2px 16px rgba(0,0,0,0.08);
        max-width: 420px;
        min-height: 400px;
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .service-card-main:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 24px rgba(180, 42, 38, 0.15);
    }

    /* Why Choose Section Hovers */
    .why-card-hoverable {
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .why-card-hoverable:hover {
        transform: translateY(-5px);
        box-shadow: 0px 8px 20px rgba(184, 57, 52, 0.15) !important;
    }

    /* Clients Logo Hovers - Kept full color, added scale and shadow */
    .client-box-hoverable {
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .client-box-hoverable:hover {
        transform: scale(1.05);
        outline: 1px solid rgba(180, 42, 38, 0.3) !important;
        box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    }

    /* FAQ Hovers */
    .faq-item-hoverable {
        transition: all 0.3s ease;
    }

    .faq-item-hoverable:hover {
        background-color: #fcfcfc !important;
        transform: translateX(5px);
    }

    @media (max-width: 768px) {
        .service-card-main {
            min-height: auto; 
            margin-bottom: 20px;
        }
    }

    .why-cards-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        width: 100%;
    }
    
    .why-card-container {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 12px;
        width: 100%;
    }

    @media (max-width: 1100px) {
        .why-cards-grid { grid-template-columns: repeat(2, 1fr); }
    }

    @media (max-width: 768px) {
        .why-cards-grid { grid-template-columns: 1fr; padding: 0 10px; }
        .why-card-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
    }
`;

function ServiceCard({ image, title, description, link }) {
    return (
        <div className="service-card-main">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${projectBg})` }} />
            <div className="absolute inset-0" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }} />

            <div className="relative z-10 flex flex-col h-full flex-grow">
                <div className="w-full overflow-hidden flex-shrink-0" style={{ height: '200px', borderBottom: '4px solid #B42A26' }}>
                    <img src={image} alt={title} className="w-full h-full object-cover object-center" />
                </div>

                <div className="flex flex-col p-5 flex-grow">
                    <h3 style={{ color: '#000000', fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>{title}</h3>
                    <div className="flex-grow">
                        <p style={{
                            color: '#494B4D',
                            fontSize: '15px',
                            lineHeight: '1.5',
                            marginBottom: '10px'
                        }}>{description}</p>
                    </div>

                    <a href={link} className="flex items-center gap-1 group w-fit" style={{
                        color: '#DA3934', fontSize: '16px', fontWeight: 600, textDecoration: 'none', marginTop: 'auto'
                    }}>
                        Read More
                    </a>
                </div>
            </div>
        </div>
    )
}

function WhyCard({ icon, title, description }) {
    return (
        <div className="why-card-hoverable" style={{ width: '100%', minHeight: '140px', padding: '20px', background: 'white', boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.15)', borderRadius: '20px', borderBottom: '3px solid #B83934', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
            <div className="why-card-container">
                <div style={{ width: '55px', height: '55px', position: 'relative', flexShrink: 0 }}>
                    <div style={{ width: '55px', height: '50px', position: 'absolute', top: '2px', left: 0, background: 'linear-gradient(144deg, #FFBCBA 0%, rgba(255, 188, 186, 0) 100%)', borderRadius: '50%' }} />
                    <img src={icon} alt={title} style={{ width: '45px', height: '45px', position: 'absolute', bottom: 0, right: 0, objectFit: 'contain' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1 }}>
                    <h3 style={{ color: '#B42A26', fontSize: '19px', fontWeight: 700, margin: 0 }}>{title}</h3>
                    <p style={{ color: '#494B4D', fontSize: '15px', fontWeight: 400, lineHeight: '1.4', marginTop: "10px" }}>{description}</p>
                </div>
            </div>
        </div>
    )
}

function Services() {
    const [openId, setOpenId] = useState(1);

    return (
        <div>
            <style>{customStyles}</style>

            {/* Hero Section */}
            <section className="relative w-full flex items-center justify-center overflow-hidden" style={{ minHeight: 'clamp(320px, 50vw, 690px)', paddingTop: '80px' }}>
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${PersoLock})` }} />
                <div className="absolute inset-0 bg-[#0d1f3c] opacity-80" />
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-white mb-4" style={{ fontSize: 'clamp(22px, 3.5vw, 38px)', fontWeight: 700, textTransform: 'capitalize', lineHeight: '1.35' }}>
                        Integrated Solutions For <br className="hidden sm:block" /> Efficient & Scalable Operations
                    </h1>
                </div>
            </section>

            {/* Services Cards Section */}
            <section className="relative w-full py-16 overflow-hidden" style={{ backgroundImage: `url(${projectBg})`, backgroundSize: 'cover' }}>
                <div className="relative z-10 max-w-[1320px] mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                        {servicesData.slice(0, 3).map((service) => (
                            <div key={service.id} className="flex justify-center h-full"><ServiceCard {...service} /></div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[960px] mx-auto">
                        {servicesData.slice(3).map((service) => (
                            <div key={service.id} className="flex justify-center h-full"><ServiceCard {...service} /></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section style={{ width: '100%', padding: '60px clamp(20px, 5vw, 80px)', background: 'linear-gradient(180deg, #FFF1F0 0%, #FFFDF5 100%)' }}>
                <div className="flex flex-col items-center gap-8">
                    <div className="text-center">
                        <p style={{ color: '#B42A26', fontSize: '18px', fontWeight: 500, marginBottom: '5px' }}>Our Excellence</p>
                        <h2 style={{ fontSize: 'clamp(24px, 5vw, 38px)', fontWeight: 700, margin: 0 }}>
                            <span style={{ color: '#0A2540' }}>WHY CHOOSE </span>
                            <span style={{ color: '#B42A26' }}>KAVACH GLOBAL</span>
                        </h2>
                    </div>
                    <div className="why-cards-grid">
                        {whyData.map((item) => <WhyCard key={item.id} {...item} />)}
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className="w-full bg-white py-20">
                <div className="max-w-[1280px] mx-auto px-6 text-center">
                    <h2 style={{ fontSize: '38px', fontWeight: 700, margin: 0 }}>
                        <span style={{ color: '#0A2540' }}>Our </span>
                        <span style={{ color: '#B42A26' }}>Clients</span>
                    </h2>
                    <p style={{ color: '#494B4D', marginTop: '10px' }}>Trusted By Leading Organizations Across Industries Worldwide</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
                        {[Adani, amnex, Arvind, green, Udgam, Troikaa, Rubber, Omspace, Paras, Licoln].map((src, i) => (
                            <div key={i} className="client-box-hoverable" style={{ padding: '25px', borderRadius: '13px', outline: '1px solid rgba(10, 37, 64, 0.1)', display: 'flex', justifyContent: 'center', backgroundColor: '#fff' }}>
                                <img src={src} alt="Client" style={{ width: '100px', height: '42px', objectFit: 'contain' }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section style={{ width: '100%', padding: '80px clamp(20px, 5vw, 80px)', background: 'linear-gradient(180deg, #FFFDF5 0%, #FFF1F0 100%)' }}>
                <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row items-start gap-12">
                    <div className="w-full lg:w-1/2 flex-shrink-0">
                        <img src={girl} alt="Client Support" style={{ width: '100%', borderRadius: '20px', objectFit: 'cover' }} />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        <div>
                            <p style={{ color: '#B42A26', fontSize: '18px', fontWeight: 500 }}>Frequently Asked Questions</p>
                            <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: 700, color: '#0A2540', lineHeight: 1.2 }}>
                                Why Our Clients Trust Us For <span style={{ color: '#B42A26' }}>Reliable & Scalable</span> Solutions
                            </h2>
                        </div>
                        <div className="flex flex-col gap-4">
                            {faqData.map((faq) => (
                                <div key={faq.id}
                                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                                    className="faq-item-hoverable"
                                    style={{ background: 'white', borderRadius: '10px', borderBottom: '3px solid #B42A26', padding: '15px 20px', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-4 items-center">
                                            <span style={{ color: '#B42A26', fontWeight: 600, fontSize: '18px' }}>{faq.id})</span>
                                            <h4 style={{ color: '#0A2540', fontWeight: 500, fontSize: '16px', margin: 0 }}>{faq.question}</h4>
                                        </div>
                                        <div style={{ transform: openId === faq.id ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }}>
                                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M1 1L7 7L13 1" stroke="#0A2540" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                    </div>
                                    {openId === faq.id && (
                                        <div style={{ marginTop: '15px', color: '#494B4D', fontSize: '15px', lineHeight: '24px', borderTop: '1px solid #eee', paddingTop: '10px' }}>
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
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
                            <span style={{ color: '#FFFFFF', fontSize: '38px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.76px' }}>READY TO PARTNER <br /> WITH </span>
                            <span style={{ color: '#FA221C', fontSize: '38px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.76px' }}>KAVACH</span>
                            <span style={{ color: '#FFFFFF', fontSize: '38px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.76px' }}> GLOBAL!</span>
                        </h2>
                        <p style={{ margin: 0, color: '#FFFFFF', fontSize: '18px', fontWeight: 400, textTransform: 'capitalize', lineHeight: '33px', letterSpacing: '0.36px' }}>
                            Let's Build Something Extraordinary Together. Our Experts Are Ready To Craft Tailored Solutions That Drive Real Results For Your Organization.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto flex-shrink-0">
                        <a href="/contact" className="btn-yellow-hover flex items-center justify-center gap-2 rounded-[10px] w-full sm:w-auto" style={{ backgroundColor: '#FFD128', padding: '14px 32px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                            <span style={{ color: '#0A2540', fontSize: '18px', fontWeight: 600, textTransform: 'capitalize', letterSpacing: '0.42px' }}>Get In Touch</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><line x1="8" y1="16" x2="16" y2="8" stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" /><polyline points="9,8 16,8 16,15" stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                        </a>
                        <a href="/services" className="btn-outline-hover flex items-center justify-center gap-2 rounded-[10px] w-full sm:w-auto" style={{ backgroundColor: 'transparent', padding: '14px 32px', textDecoration: 'none', outline: '2px solid #FFD128', whiteSpace: 'nowrap' }}>
                            <span style={{ color: '#FFD128', fontSize: '18px', fontWeight: 600, textTransform: 'capitalize', letterSpacing: '0.42px' }}>Explore Solutions</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><line x1="8" y1="16" x2="16" y2="8" stroke="#FFD128" strokeWidth="2.5" strokeLinecap="round" /><polyline points="9,8 16,8 16,15" stroke="#FFD128" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services