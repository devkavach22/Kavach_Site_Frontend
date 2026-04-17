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
            desc: "We Offer Comprehensive Protection Services, Including Personal Security And Asset Safeguarding, Tailored To Meet Your Specific Needs.",
        },
        {
            title: "Event Security",
            desc: "Our Professional Team Manages Crowd Control, Access Points, And Overall Security To Ensure A Safe And Seamless Experience For Any Event.",
        },
        {
            title: "Security Consulting",
            desc: "Our Experts Conduct Thorough Risk Assessments And Develop Strategic Security Plans To Strengthen Your Organization's Safety Protocols.",
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <style>{`
                .full-card-hover {
                    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease, border-color 0.3s ease;
                    cursor: pointer;
                    border-bottom: 4px solid transparent;
                }
                .full-card-hover:hover {
                    transform: translateY(-12px);
                    box-shadow: 0px 15px 35px rgba(0,0,0,0.1);
                    border-bottom: 4px solid #B83934;
                }
            `}</style>

            {/* Hero Section */}
            <section
                style={heroStyle}
                className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden"
            >
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10 w-full px-4 text-center">
                    <h1
                        style={textStyle}
                        className="text-white text-3xl md:text-[38px] leading-[49px]"
                    >
                        Security Services
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section style={sectionBgStyle} className="py-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
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
                                alt="Security Operations"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute bottom-[50px] right-0 w-[65%] h-[45%] overflow-hidden rounded-[18px] border-[6px] border-white z-20 shadow-xl">
                            <img
                                src={mid1}
                                alt="Security Guard"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <span className="text-[#B42A26] text-lg font-medium tracking-wide">
                                Security Services
                            </span>
                            <h2 className="text-[#0A2540] text-3xl md:text-[38px] font-bold leading-tight">
                                Ensuring Comprehensive Safety & <br />
                                <span className="text-[#B83934]">Security</span> For Your
                                Enterprise
                            </h2>
                        </div>
                        <div className="flex flex-col gap-6 text-[#494B4D] text-lg leading-[33px]">
                            <p>
                                At Kavach Global, we provide end-to-end security solutions
                                tailored to meet the dynamic needs of businesses and
                                communities. Our approach combines highly trained personnel with
                                advanced security strategies to ensure maximum protection and
                                peace of mind. Whether it's physical security, armed protection,
                                or specialized industrial safety, we prioritize reliability and
                                professional excellence.
                            </p>
                            <p>
                                We leverage proactive risk management and strategic consulting to
                                identify vulnerabilities and implement effective safeguards. Our
                                goal is to create a safe environment that allows organizations
                                to focus on their core operations while we handle their security
                                needs with integrity and precision.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Security Expertise Cards */}
            <section className="py-20 px-6 bg-[#FAF9F6]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-[#0A2540] text-3xl md:text-[42px] font-bold text-center mb-16">
                        Our Security Expertise
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cardData.map((card, index) => (
                            <div
                                key={index}
                                className="full-card-hover bg-white p-10 rounded-[20px] shadow-sm flex flex-col"
                            >
                                <h3 className="text-[#B83934] text-xl font-bold mb-4">
                                    {card.title}
                                </h3>
                                <p className="text-[#494B4D] text-base leading-relaxed">
                                    {card.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2 flex flex-col gap-8 order-2 lg:order-1">
                        <h2 className="text-[#0A2540] text-3xl md:text-[38px] font-bold">
                            Why Choose Our <span className="text-[#B83934]">Security</span>{" "}
                            Services
                        </h2>
                        <div className="flex flex-col gap-6 text-[#494B4D] text-lg leading-[33px] capitalize tracking-[0.36px]">
                            <p>
                                Our security services are built on the principles of trust,
                                vigilance, and expertise. We understand that every environment
                                has unique safety requirements, and we provide customized
                                solutions designed to address specific risks and challenges.
                                From corporate offices to industrial sites, our team is dedicated
                                to maintaining a secure and controlled environment through
                                professional oversight and rapid response capabilities.
                            </p>
                            <p>
                                We prioritize continuous training and strict quality standards to
                                ensure that our security personnel are equipped with the skills
                                and knowledge needed to handle any situation. Our focus on
                                proactive safety measures, advanced access control, and seamless
                                coordination helps prevent incidents before they occur,
                                safeguarding your assets and people effectively.
                            </p>
                            <p>
                                With a client-centric approach and a commitment to operational
                                excellence, we provide security that is both reliable and
                                adaptable. Our goal is to empower organizations with the
                                confidence that their safety is in capable hands, allowing for
                                sustainable growth and secure operations in an ever-changing world.
                            </p>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
                        <div className="relative z-10">
                            <div className="overflow-hidden rounded-[24px] shadow-xl relative z-10">
                                <img
                                    src={ICTPerson}
                                    alt="Security Professional"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section
                className="w-full relative overflow-hidden"
                style={{
                    backgroundImage: `url(${aboutLast})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div
                    className="absolute inset-0"
                    style={{ backgroundColor: "rgba(5, 15, 40, 0.85)", zIndex: 1 }}
                />
                <div
                    className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-[60px] relative flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-10"
                    style={{ zIndex: 2 }}
                >
                    <div className="flex flex-col gap-3 w-full lg:max-w-[480px]">
                        <h2 style={{ margin: 0, lineHeight: 1.3 }}>
                            <span
                                style={{
                                    color: "#FFFFFF",
                                    fontSize: "32px",
                                    fontWeight: 700,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.76px",
                                }}
                            >
                                READY TO PARTNER <br /> WITH{" "}
                            </span>
                            <span
                                style={{
                                    color: "#FA221C",
                                    fontSize: "32px",
                                    fontWeight: 700,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.76px",
                                }}
                            >
                                KAVACH
                            </span>
                            <span
                                style={{
                                    color: "#FFFFFF",
                                    fontSize: "32px",
                                    fontWeight: 700,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.76px",
                                }}
                            >
                                {" "}
                                GLOBAL!
                            </span>
                        </h2>
                        <p
                            style={{
                                margin: 0,
                                color: "#FFFFFF",
                                fontSize: "16px",
                                fontWeight: 400,
                                textTransform: "capitalize",
                                lineHeight: "1.6",
                                letterSpacing: "0.36px",
                            }}
                        >
                            Let's Build Something Extraordinary Together. Our Experts Are
                            Ready To Craft Tailored Solutions That Drive Real Results For Your
                            Organization.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto flex-shrink-0">
                        <a
                            href="/new/contact"
                            className="btn-yellow-hover flex items-center justify-center gap-2 rounded-[10px] w-full sm:w-auto"
                            style={{
                                backgroundColor: "#FFD128",
                                padding: "14px 32px",
                                textDecoration: "none",
                                whiteSpace: "nowrap",
                            }}
                        >
                            <span
                                style={{
                                    color: "#0A2540",
                                    fontSize: "18px",
                                    fontWeight: 600,
                                    textTransform: "capitalize",
                                    letterSpacing: "0.42px",
                                }}
                            >
                                Get In Touch
                            </span>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line
                                    x1="8"
                                    y1="16"
                                    x2="16"
                                    y2="8"
                                    stroke="#0A2540"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                />
                                <polyline
                                    points="9,8 16,8 16,15"
                                    stroke="#0A2540"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                />
                            </svg>
                        </a>
                        <a
                            href="/new/services"
                            className="btn-outline-hover flex items-center justify-center gap-2 rounded-[10px] w-full sm:w-auto"
                            style={{
                                backgroundColor: "transparent",
                                padding: "14px 32px",
                                textDecoration: "none",
                                outline: "2px solid #FFD128",
                                whiteSpace: "nowrap",
                            }}
                        >
                            <span
                                style={{
                                    color: "#FFD128",
                                    fontSize: "18px",
                                    fontWeight: 600,
                                    textTransform: "capitalize",
                                    letterSpacing: "0.42px",
                                }}
                            >
                                Explore Solutions
                            </span>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line
                                    x1="8"
                                    y1="16"
                                    x2="16"
                                    y2="8"
                                    stroke="#FFD128"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                />
                                <polyline
                                    points="9,8 16,8 16,15"
                                    stroke="#FFD128"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Security;