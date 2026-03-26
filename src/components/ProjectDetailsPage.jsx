import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Globe2, Phone, Building2, Users2, CheckCircle2, Target, Quote } from 'lucide-react';

const ProjectDetailsPage = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("is-visible");
            });
        }, observerOptions);

        const scrollElements = document.querySelectorAll(".scroll-reveal");
        scrollElements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [projectId]);

    const projectDetails = {
        "intelligent-traffic-management": {
            title: "Intelligent Traffic Management System",
            icon: <Globe2 className="w-12 h-12" />,
            description: "Kavach offers cutting-edge urban development solutions, including smart and safe city systems, GIS mapping, integrated command & control centers, and area-based development strategies for smarter, more sustainable cities.",
            mainFeatures: [
                "Convergence of all city applications through an enterprise application",
                "Live city operational dashboards by integrating data from various departments",
                "Live incident monitoring and remote support to field crews",
                "City surveillance on video wall with onscreen alerts for important events",
                "Real-time analytics on live data streams and complex event processing to predict issues and be forewarned"
            ],
            sections: [
                {
                    title: "Digital Infrastructure",
                    items: [
                        "Smart schools and e-learning platform",
                        "Technology-driven community centers and recreational facilities",
                        "Citizen feedback systems"
                    ]
                },
                {
                    title: "Technologies for Anganwadi, Schools",
                    items: [
                        "Digital learning for early childhood education",
                        "Culturally relevant digital storytelling platforms",
                        "Nutrition and health monitoring",
                        "Smart devices to monitor child growth metrics",
                        "Community and parent engagement through virtual platform",
                        "Facility management for water quality, sanitation, hygiene, solar power",
                        "Digital inventory for food and teaching aids"
                    ]
                },
                {
                    title: "Public Safety",
                    items: [
                        "CCTV surveillance",
                        "Emergency response systems",
                        "Disaster management solutions",
                        "Smart LED street lights"
                    ]
                },
                {
                    title: "Revitalization of Gardens",
                    items: [
                        "Restoring natural features, rejuvenating garden landscapes",
                        "Installing vertical gardens, green walls",
                        "Developing urban forestry projects",
                        "Smart irrigation systems",
                        "Artistic elements like sculptures, murals, and decorative installations"
                    ]
                }
            ]
        },
        "emergency-call-box": {
            title: "Emergency Call Box",
            icon: <Phone className="w-12 h-12" />,
            description: "A robust emergency communication system providing instant connectivity to emergency services with GPS location tracking and real-time monitoring.",
            mainFeatures: [
                "Integrated command control & monitoring center",
                "CCTV Surveillance",
                "Access Control",
                "Public Announcement System",
                "Boom Barriers"
            ],
            sections: [
                {
                    title: "She Distress Centers",
                    items: [
                        "Integrated command control & monitoring center",
                        "CCTV Surveillance",
                        "Access Control",
                        "Public Announcement System",
                        "Boom Barriers",
                        "DFMD, HHMD",
                        "Gate Automation Solution",
                        "Under Vehicle System",
                        "Video Analytics System",
                        "Emergency Communication System"
                    ]
                },
                {
                    title: "Public Safety",
                    items: [
                        "CCTV surveillance",
                        "Emergency response systems",
                        "Disaster management solutions",
                        "Smart LED street lights"
                    ]
                },
                {
                    title: "Digital Infrastructure",
                    items: [
                        "Smart schools and e-learning platform",
                        "Technology-driven community centers and recreational facilities",
                        "Citizen feedback systems"
                    ]
                },
                {
                    title: "Sustainable Livelihood Development",
                    items: [
                        "Skill Development and Training Programs",
                        "Financial literacy programs",
                        "Eco-Tourism and Community-Based Tourism",
                        "Women's Empowerment Programs",
                        "Market Access and Value Chain Development"
                    ]
                }
            ]
        },
        "gis-solution-mining": {
            title: "GIS Solution For Mining",
            icon: <Building2 className="w-12 h-12" />,
            description: "Kavach offers cutting-edge urban development solutions, including smart and safe city systems, GIS mapping, integrated command & control centers, and area-based development strategies for smarter, more sustainable cities.",
            mainFeatures: [
                "Convergence of all city applications through an enterprise application",
                "Live city operational dashboards by integrating data from various departments",
                "Live incident monitoring and remote support to field crews",
                "City surveillance on video wall with onscreen alerts for important events",
                "Real-time analytics on live data streams and complex event processing to predict issues and be forewarned"
            ],
            sections: [
                {
                    title: "Technologies for Anganwadi, Schools",
                    items: [
                        "Digital learning for early childhood education",
                        "Culturally relevant digital storytelling platforms",
                        "Nutrition and health monitoring",
                        "Smart devices to monitor child growth metrics",
                        "Community and parent engagement through virtual platform",
                        "Facility management for water quality, sanitation, hygiene, solar power",
                        "Digital inventory for food and teaching aids"
                    ]
                },
                {
                    title: "Public Safety",
                    items: [
                        "CCTV surveillance",
                        "Emergency response systems",
                        "Disaster management solutions",
                        "Smart LED street lights"
                    ]
                },
                {
                    title: "Revitalization of Gardens",
                    items: [
                        "Restoring natural features, rejuvenating garden landscapes",
                        "Installing vertical gardens, green walls",
                        "Developing urban forestry projects",
                        "Smart irrigation systems",
                        "Artistic elements like sculptures, murals, and decorative installations"
                    ]
                },
                {
                    title: "Digital Infrastructure",
                    items: [
                        "Smart schools and e-learning platform",
                        "Technology-driven community centers and recreational facilities",
                        "Citizen feedback systems"
                    ]
                }
            ]
        },
        "payroll-solutions": {
            title: "360 Degree Payroll Solutions",
            icon: <Users2 className="w-12 h-12" />,
            description: "Kavach offers cutting-edge urban development solutions, including smart and safe city systems, GIS mapping, integrated command & control centers, and area-based development strategies for smarter, more sustainable cities.",
            mainFeatures: [
                "Convergence of all city applications through an enterprise application",
                "Live city operational dashboards by integrating data from various departments",
                "Live incident monitoring and remote support to field crews",
                "City surveillance on video wall with onscreen alerts for important events",
                "Real-time analytics on live data streams and complex event processing to predict issues and be forewarned"
            ],
            sections: [
                {
                    title: "Digital Infrastructure",
                    items: [
                        "Smart schools and e-learning platform",
                        "Technology-driven community centers and recreational facilities",
                        "Citizen feedback systems"
                    ]
                },
                {
                    title: "Technologies for Anganwadi, Schools",
                    items: [
                        "Digital learning for early childhood education",
                        "Culturally relevant digital storytelling platforms",
                        "Nutrition and health monitoring",
                        "Smart devices to monitor child growth metrics",
                        "Community and parent engagement through virtual platform",
                        "Facility management for water quality, sanitation, hygiene, solar power",
                        "Digital inventory for food and teaching aids"
                    ]
                },
                {
                    title: "Sustainable Livelihood Development",
                    items: [
                        "Skill Development and Training Programs",
                        "Financial literacy programs",
                        "Eco-Tourism and Community-Based Tourism",
                        "Women's Empowerment Programs",
                        "Market Access and Value Chain Development"
                    ]
                },
                {
                    title: "Public Safety",
                    items: [
                        "CCTV surveillance",
                        "Emergency response systems",
                        "Disaster management solutions",
                        "Smart LED street lights"
                    ]
                }
            ]
        }
    };

    const project = projectDetails[projectId];

    if (!project) {
        return (
            <div className="min-h-screen bg-[#eeecea] flex items-center justify-center font-['Barlow']">
                <div className="text-center">
                    <h2 className="text-4xl font-black text-gray-900 mb-6 font-['Barlow_Condensed'] uppercase tracking-tight">Project Not Found</h2>
                    <button onClick={() => navigate('/')} className="px-8 py-3 bg-orange-600 text-white font-bold rounded-full uppercase tracking-widest text-xs hover:bg-orange-700 transition-all">Back to Home</button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#eeecea] text-gray-900 font-['Barlow'] overflow-x-hidden">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;0,900;1,800&family=Barlow:wght@400;500;600;700&display=swap');
                
                :root { --org: #e05a00; --dark: #1a2332; }
                .kv-h { font-family:'Barlow Condensed',sans-serif; font-weight:800; text-transform:uppercase; letter-spacing:0.02em; line-height:1; }
                .kv-label { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:0.75rem; letter-spacing:0.25em; text-transform:uppercase; color:var(--org); display:flex; align-items:center; gap:8px; }
                .kv-label::before { content:''; width:10px; height:2px; background:var(--org); }

                .scroll-reveal { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1); }
                .scroll-reveal.is-visible { opacity: 1; transform: translateY(0); }
                .stagger-1 { transition-delay: 0.1s; }
                .stagger-2 { transition-delay: 0.2s; }
                
                .glass-card { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(10px); border: 1px solid rgba(224, 90, 0, 0.1); }
                .icon-box { border-radius: 20px 5px 20px 5px; }

                /* ── ICON VISUAL ── */
                .proj-icon-wrap {
                    position: relative;
                    width: 260px;
                    height: 260px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                /* Outer ring */
                .proj-icon-ring {
                    position: absolute;
                    inset: 0;
                    border-radius: 32px 8px 32px 8px;
                    border: 2px dashed rgba(224,90,0,0.25);
                    animation: spinRing 18s linear infinite;
                }
                @keyframes spinRing {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }

                /* Middle glow ring */
                .proj-icon-glow {
                    position: absolute;
                    inset: 16px;
                    border-radius: 24px 6px 24px 6px;
                    background: radial-gradient(circle at 40% 40%, rgba(224,90,0,0.18) 0%, transparent 70%);
                    border: 1px solid rgba(224,90,0,0.12);
                }

                /* Main dark tile */
                .proj-icon-tile {
                    position: relative;
                    z-index: 2;
                    width: 180px;
                    height: 180px;
                    border-radius: 24px 6px 24px 6px;
                    background: linear-gradient(145deg, #1e2d42 0%, #111827 60%, #0d1520 100%);
                    box-shadow:
                        0 0 0 1px rgba(224,90,0,0.3),
                        0 0 40px rgba(224,90,0,0.2),
                        0 20px 60px rgba(0,0,0,0.5),
                        inset 0 1px 0 rgba(255,255,255,0.06);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.4s ease, box-shadow 0.4s ease;
                }
                .proj-icon-tile:hover {
                    transform: translateY(-6px) scale(1.04);
                    box-shadow:
                        0 0 0 1px rgba(224,90,0,0.5),
                        0 0 60px rgba(224,90,0,0.35),
                        0 30px 80px rgba(0,0,0,0.5),
                        inset 0 1px 0 rgba(255,255,255,0.08);
                }

                /* Icon itself — bright orange with glow */
                .proj-icon-svg {
                    color: #f97316;
                    filter: drop-shadow(0 0 12px rgba(249,115,22,0.8)) drop-shadow(0 0 28px rgba(224,90,0,0.5));
                    transition: filter 0.4s ease, transform 0.4s ease;
                }
                .proj-icon-tile:hover .proj-icon-svg {
                    filter: drop-shadow(0 0 18px rgba(249,115,22,1)) drop-shadow(0 0 40px rgba(224,90,0,0.7));
                    transform: scale(1.1);
                }

                /* Corner accent dots */
                .proj-icon-dot {
                    position: absolute;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #f97316;
                    box-shadow: 0 0 10px rgba(249,115,22,0.8);
                }

                /* Orange corner bracket */
                .proj-corner-tl {
                    position: absolute;
                    top: 0; left: 0;
                    width: 28px; height: 28px;
                    border-top: 3px solid #f97316;
                    border-left: 3px solid #f97316;
                    border-radius: 4px 0 0 0;
                }
                .proj-corner-br {
                    position: absolute;
                    bottom: 0; right: 0;
                    width: 28px; height: 28px;
                    border-bottom: 3px solid #f97316;
                    border-right: 3px solid #f97316;
                    border-radius: 0 0 4px 0;
                }

                /* Floating badge */
                .proj-icon-badge {
                    position: absolute;
                    bottom: -10px;
                    right: -10px;
                    z-index: 3;
                    background: linear-gradient(135deg, #f97316, #e05a00);
                    border-radius: 10px 3px 10px 3px;
                    padding: 6px 14px;
                    font-family: 'Barlow Condensed', sans-serif;
                    font-weight: 800;
                    font-size: 10px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: #fff;
                    box-shadow: 0 4px 16px rgba(224,90,0,0.4);
                    white-space: nowrap;
                }
            `}</style>

            {/* Navigation */}
            <div className="w-full px-6 sm:px-10 lg:px-16 py-8 flex justify-between items-center">
                <button
                    onClick={() => navigate('/')}
                    className="group flex items-center gap-3 px-5 py-2.5 bg-white rounded-full text-sm font-bold uppercase tracking-widest shadow-sm hover:shadow-md border border-gray-100 transition-all"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Back</span>
                </button>
                <div className="kv-label">Solution Details</div>
            </div>

            {/* Hero Section */}
            <section className="pb-24 px-6 bg-[#eeecea]">
                <div className="w-full px-4 sm:px-8 lg:px-16">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">

                        {/* ── ICON VISUAL ── */}
                        <div className="lg:col-span-4 scroll-reveal flex justify-center lg:justify-start">
                            <div className="proj-icon-wrap">
                                {/* Spinning dashed ring */}
                                <div className="proj-icon-ring" />

                                {/* Glow layer */}
                                <div className="proj-icon-glow" />

                                {/* Main tile */}
                                <div className="proj-icon-tile">
                                    {/* Corner brackets inside tile */}
                                    <div className="proj-corner-tl" />
                                    <div className="proj-corner-br" />

                                    {/* Corner accent dots */}
                                    <div className="proj-icon-dot" style={{ top: 12, right: 12 }} />
                                    <div className="proj-icon-dot" style={{ bottom: 12, left: 12, width: 5, height: 5, opacity: 0.5 }} />

                                    {/* Icon */}
                                    <div className="proj-icon-svg">
                                        {React.cloneElement(project.icon, { size: 88, strokeWidth: 1.2 })}
                                    </div>
                                </div>

                                {/* Floating label badge */}
                                <div className="proj-icon-badge">Kavach Solution</div>

                                {/* Bottom blur glow */}
                                <div style={{
                                    position: "absolute", bottom: -20, left: "50%", transform: "translateX(-50%)",
                                    width: 140, height: 40,
                                    background: "radial-gradient(ellipse, rgba(249,115,22,0.3) 0%, transparent 70%)",
                                    filter: "blur(12px)"
                                }} />
                            </div>
                        </div>

                        {/* Title side */}
                        <div className="lg:col-span-8 space-y-6">
                            <div className="scroll-reveal stagger-1">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-3 flex items-center gap-2">
                                    <span className="w-8 h-[2px] bg-orange-500"></span>
                                    Project Excellence
                                </p>

                                <h1 className="kv-h text-[#111827] mb-6 leading-[0.9]" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
                                    {project.title.split(' ').slice(0, -1).join(' ')} <br />
                                    <span className="text-orange-600">{project.title.split(' ').pop()}</span>
                                </h1>

                                <div className="relative">
                                    <p className="text-xl text-gray-500 max-w-2xl leading-relaxed pl-6 border-l-2 border-orange-100">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features (Dark Section) */}
            <section className="py-24 bg-[#1a2332] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10"><Target size={400} /></div>
                <div className="w-full px-6 sm:px-10 lg:px-16 relative z-10">
                    <div className="kv-label text-orange-500 mb-6">Core Capabilities</div>
                    <h2 className="kv-h text-4xl mb-12">SERVICES & <span className="text-orange-500">SOLUTIONS</span></h2>

                    <div className="grid md:grid-cols-2 gap-6 scroll-reveal stagger-1">
                        {project.mainFeatures.map((feature, i) => (
                            <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500 transition-colors group">
                                <CheckCircle2 className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                                <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Details Grid */}
            <section className="py-24 px-6 bg-[#eeecea]">
                <div className="w-full px-4 sm:px-8 lg:px-16">
                    <div className="grid md:grid-cols-2 gap-8">
                        {project.sections.map((section, idx) => (
                            <div
                                key={idx}
                                className={`scroll-reveal glass-card p-10 rounded-[40px_10px_40px_10px] border border-orange-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500`}
                                style={{ transitionDelay: `${idx * 150}ms` }}
                            >
                                <div className="relative overflow-hidden">
                                    <h3 className="kv-h text-2xl text-gray-900 mb-8 border-b border-orange-100 pb-4 relative group">
                                        {section.title}
                                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-700"></div>
                                    </h3>
                                    <ul className="space-y-4">
                                        {section.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-600 font-medium group/item translate-x-0 hover:translate-x-2 transition-transform duration-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 group-hover/item:scale-150 transition-transform"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-12 bg-[#eeecea]">
                <div className="w-full text-center scroll-reveal bg-[#111827] py-12 px-6 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl -z-0"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -z-0"></div>

                    <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 mx-auto">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-white/5 text-orange-500 rounded-xl mb-6 border border-white/10">
                            <Quote size={24} />
                        </div>

                        <h2 className="kv-h text-3xl md:text-5xl text-white mb-4 leading-tight uppercase tracking-tight">
                            REVOLUTIONIZE YOUR <br />
                            <span className="text-orange-600">INFRASTRUCTURE</span>
                        </h2>

                        <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px] md:text-[12px] mb-10 max-w-2xl mx-auto leading-relaxed">
                            Scalable solutions tailored for modern city and corporate needs.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <button
                                onClick={() => navigate('/contact')}
                                className="px-10 py-3.5 bg-orange-600 text-white font-black rounded-lg uppercase tracking-tighter text-xs hover:bg-white hover:text-black transition-all shadow-lg min-w-[160px]"
                            >
                                Get in Touch
                            </button>
                            <button
                                onClick={() => navigate('/')}
                                className="px-10 py-3.5 border border-white/20 text-white font-black rounded-lg uppercase tracking-tighter text-xs hover:bg-white hover:text-black transition-all min-w-[160px]"
                            >
                                View All Solutions
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetailsPage;