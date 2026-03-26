import { Link } from 'react-router-dom';
import { Award, Zap, HeadphonesIcon, ArrowRight, Star, CheckCircle2 } from "lucide-react";
import { MdSchool, MdLocalHospital, MdApartment } from "react-icons/md";
import { FiTruck, FiCpu, FiBriefcase, FiTrendingUp, FiTool } from "react-icons/fi";

function Services() {
    const industries = [
        { icon: <MdSchool size={34} />, name: "Education", desc: "Empowering institutions with innovative educational technology and smart infrastructure management systems." },
        { icon: <MdLocalHospital size={34} />, name: "Health Care", desc: "World-class healthcare support through cutting-edge medical technology and integrated health management." },
        { icon: <FiTruck size={34} />, name: "Automobile", desc: "Manufacturing excellence in the automotive sector with precision-engineered facility solutions." },
        { icon: <MdApartment size={34} />, name: "Hospital", desc: "Comprehensive hospital management for 24/7 seamless operations and critical infrastructure support." },
        { icon: <FiBriefcase size={34} />, name: "Government", desc: "Public sector digital transformation through robust infrastructure, security, and smart-city solutions." },
        { icon: <FiCpu size={34} />, name: "IT Industries", desc: "Leading-edge IT infrastructure and technology services powering the digital ecosystem of modern enterprises." },
        { icon: <FiTool size={34} />, name: "Business", desc: "Integrated facility management and professional solutions allowing organisations to focus on core goals." },
        { icon: <FiTrendingUp size={34} />, name: "Marketing", desc: "Strategic marketing and branding solutions that elevate your presence and drive measurable business growth." },
    ];

    const whyChooseUs = [
        { icon: <Zap className="w-5 h-5" />, title: "We Think Differently", desc: "Crafting innovative solutions that empower, protect, and transform the way you thrive." },
        { icon: <Award className="w-5 h-5" />, title: "High Quality Projects", desc: "Every project undergoes rigorous quality control and is executed by certified professionals." },
        { icon: <CheckCircle2 className="w-5 h-5" />, title: "Expert Team Members", desc: "Our diverse team of industry specialists brings a wealth of knowledge to every engagement." },
        { icon: <HeadphonesIcon className="w-5 h-5" />, title: "24/7 Customer Support", desc: "Round-the-clock support ensuring your operations run smoothly and resolve issues." },
        { icon: <Zap className="w-5 h-5" />, title: "Innovative Technology", desc: "From AI-powered analytics to IoT integration leveraging the latest advancements." },
        { icon: <Award className="w-5 h-5" />, title: "Proven Track Record", desc: "Hundreds of successful project implementations across diverse industries worldwide." },
    ];

    const testimonials = [
        { name: "Troikka Pharma", role: "Verified Client", text: "Kavach Global Konnects Pvt. Ltd. has been an exceptional partner in facility management. Their proactive approach and timely services ensure seamless operation." },
        { name: "Lincoln Pharma", role: "Verified Client", text: "The expertise and dedication of Kavach Global Konnects have significantly improved the efficiency of our facility management." },
        { name: "Rubberking Group", role: "Verified Client", text: "We have been availing Kavach Global's services for over two years. They have consistently exceeded our expectations for quality." },
        { name: "Marengo Asia", role: "Verified Client", text: "Kavach Global Konnects has been instrumental in ensuring the smooth functioning of our facility with highest standards." },
    ];

    return (
        <div className="min-h-screen" style={{ fontFamily: "'Barlow', sans-serif" }}>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;0,900;1,800&family=Barlow:wght@400;500;600&display=swap');

                :root {
                    --org:   #e05a00;
                    --org2:  #f97316;
                    --dark:  #1a2332;
                    --dark2: #111827;
                    --gray:  #f3f4f6;
                    --txt:   #4b5563;
                    --txt2:  #6b7280;
                }

                .kv-h { font-family:'Barlow Condensed',sans-serif; font-weight:800; text-transform:uppercase; letter-spacing:0.02em; line-height:1.05; }
                .kv-label { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:0.72rem; letter-spacing:0.28em; text-transform:uppercase; color:var(--org); display:flex; align-items:center; gap:6px; }
                .kv-label::before { content:''; display:inline-block; width:8px; height:8px; border-radius:50%; background:var(--org); flex-shrink:0; }

                .kv-btn {
                    position: relative; font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 0.9rem; letter-spacing: 0.08em; text-transform: uppercase;
                    padding: 14px 32px; border-radius: 24px 0px 24px 0px; display: inline-flex; align-items: center; gap: 10px; transition: all 0.3s ease;
                    text-decoration: none; overflow: hidden; border: none; z-index: 10;
                    background: linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%); color: #fff; box-shadow: 0 4px 15px rgba(234, 88, 12, 0.3);
                }
                .kv-btn:hover {
                    background:#c94e00;
                    transform:translateY(-3px);
                    box-shadow: 0 8px 35px rgba(234,88,12,0.7), 0 0 20px rgba(249,115,22,0.4);
                    border-radius:0px 24px 0px 24px;
                }

                /* ── INDUSTRY CARDS ── */
                .ind-card-white {
                    background: #ffffff !important;
                    border: 1px solid #e5e7eb !important;
                    transition: all 0.35s ease;
                }
                .ind-card-white:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
                    border-color: var(--org) !important;
                }
                .ind-card-white .ind-icon-wrap {
                    background: #fff3ee !important;
                    color: var(--org) !important;
                    border: 1px solid #fed7aa !important;
                }
                .ind-card-white:hover .ind-icon-wrap {
                    background: var(--org) !important;
                    color: #fff !important;
                }

                /* ── TESTIMONIAL CARD ── */
                .testi-card-premium {
                    background: #1a2332;
                    border: 1px solid rgba(255,255,255,0.05);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                }
                .testi-card-premium:hover {
                    border-color: var(--org);
                    box-shadow: 0 10px 30px rgba(224, 90, 0, 0.15);
                    transform: scale(1.02);
                }
                .testi-card-premium .testi-text {
                    color: #ffffff !important;
                    opacity: 0.9;
                }

                /* ── WHY CHOOSE US CARD — GLOW ON HOVER ── */
                .why-card-animated {
                    transition: all 0.4s ease;
                    position: relative;
                }
                .why-card-animated:hover {
                    transform: translateY(-5px);
                    border-color: #f97316 !important;
                    box-shadow:
                        0 8px 25px rgba(234, 88, 12, 0.25),
                        0 0 0 1px rgba(249, 115, 22, 0.3),
                        0 0 30px rgba(249, 115, 22, 0.15),
                        inset 0 0 20px rgba(249, 115, 22, 0.04);
                }
                .why-card-animated .why-icon-wrap {
                    transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
                }
                .why-card-animated:hover .why-icon-wrap {
                    background-color: var(--org2) !important;
                    color: #ffffff !important;
                    box-shadow: 0 0 16px rgba(249, 115, 22, 0.6);
                }

                /* ── CTA GLOW ── */
                @keyframes ctaGlowPulse {
                    0%, 100% { opacity: 0.5; transform: scale(1); }
                    50%       { opacity: 1;   transform: scale(1.08); }
                }
                .cta-glow-orb-1 {
                    position: absolute;
                    top: -60px; left: 50%;
                    transform: translateX(-50%);
                    width: 520px; height: 220px;
                    border-radius: 50%;
                    background: radial-gradient(ellipse, rgba(249,115,22,0.22) 0%, transparent 70%);
                    animation: ctaGlowPulse 3.5s ease-in-out infinite;
                    pointer-events: none;
                    filter: blur(18px);
                }
                .cta-glow-orb-2 {
                    position: absolute;
                    bottom: -40px; left: 50%;
                    transform: translateX(-50%);
                    width: 380px; height: 160px;
                    border-radius: 50%;
                    background: radial-gradient(ellipse, rgba(224,90,0,0.15) 0%, transparent 70%);
                    animation: ctaGlowPulse 4s ease-in-out infinite reverse;
                    pointer-events: none;
                    filter: blur(14px);
                }
                .cta-heading-glow {
                    text-shadow: 0 0 40px rgba(249,115,22,0.25), 0 0 80px rgba(249,115,22,0.1);
                }

                @keyframes bobA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-9px)} }
                .bob-a { animation:bobA 2.8s ease-in-out infinite; }

                .dot-bg-light { background-image:radial-gradient(rgba(0,0,0,0.04) 1px,transparent 1px); background-size:28px 28px; }
                .dot-bg-dark  { background-image:radial-gradient(rgba(255,255,255,0.03) 1px,transparent 1px); background-size:28px 28px; }
            `}</style>

            {/* ══ 1. SECTORS WE SERVE ══ */}
            <section className="relative py-24 px-4 overflow-hidden dot-bg-dark" style={{ background: '#1a2332' }}>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-14">
                        <div className="kv-label justify-center mb-4">Sectors We Serve</div>
                        <h2 className="kv-h text-white" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
                            OUR CLIENT <span style={{ color: 'var(--org)' }}>INDUSTRIES</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {industries.map((ind, idx) => (
                            <div key={idx} className="ind-card-white bob-a rounded-xl p-7 flex flex-col items-center text-center">
                                <div className="ind-icon-wrap w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-300">
                                    {ind.icon}
                                </div>
                                <h3 className="kv-h leading-snug mb-2" style={{ fontSize: '0.95rem', color: 'var(--dark)' }}>{ind.name}</h3>
                                <p className="text-xs leading-relaxed" style={{ color: 'var(--txt2)' }}>{ind.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-20">
                    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full" style={{ height: '50px' }}>
                        <path d="M0,40 L1440,0 L1440,60 L0,60 Z" fill="#ffffff" />
                    </svg>
                </div>
            </section>

            {/* ══ 2. WHY CHOOSE US — WITH GLOW ══ */}
            <section className="relative py-16 px-4 dot-bg-light" style={{ background: '#ffffff' }}>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-10">
                        <div className="kv-label justify-center mb-3">Our Excellence</div>
                        <h2 className="kv-h" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'var(--dark)' }}>
                            WHY CHOOSE <span style={{ color: 'var(--org)' }}>KAVACH GLOBAL</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyChooseUs.map((item, idx) => (
                            <div key={idx} className="why-card-animated flex items-start gap-4 p-6 rounded-lg border border-gray-100 bg-white">
                                <div className="why-icon-wrap flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center bg-orange-100 text-orange-600">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="kv-h mb-1" style={{ fontSize: '1rem', color: 'var(--dark)' }}>{item.title}</h4>
                                    <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 3. TESTIMONIALS ══ */}
            <section className="py-24 px-4 dot-bg-dark" style={{ background: '#111827' }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <div className="kv-label justify-center mb-4">Testimonials</div>
                        <h2 className="kv-h text-white" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>CLIENT FEEDBACK</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="testi-card-premium rounded-2xl p-8 overflow-hidden group">
                                <div className="absolute top-4 right-8 text-6xl text-white opacity-5 font-serif pointer-events-none">"</div>
                                <div className="flex gap-1 mb-5">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-orange-500 text-orange-500" />)}
                                </div>
                                <p className="testi-text text-base italic leading-relaxed mb-8 relative z-10">{t.text}</p>
                                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-white text-base tracking-wide uppercase">{t.name}</div>
                                        <div className="text-xs text-orange-400 font-semibold uppercase tracking-widest">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 4. CTA — WITH GLOW ══ */}
            <section className="relative py-16 px-4 overflow-hidden dot-bg-light" style={{ background: '#f9fafb' }}>

                {/* Animated glow orbs */}
                <div className="cta-glow-orb-1" />
                <div className="cta-glow-orb-2" />

                {/* Static side orbs */}
                <div className="absolute pointer-events-none" style={{ top: '10%', right: '5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)', filter: 'blur(10px)' }} />
                <div className="absolute pointer-events-none" style={{ bottom: '-10%', left: '-5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)', filter: 'blur(10px)' }} />

                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 mb-6">
                        <div className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></div>
                        <span className="kv-label !p-0 !m-0" style={{ fontSize: '0.65rem', color: 'var(--org)' }}>Get In Touch</span>
                    </div>

                    <h2 className="kv-h cta-heading-glow mb-2" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', color: '#1a2332' }}>
                        READY TO <span style={{ color: 'var(--org2)' }}>TRANSFORM</span>
                    </h2>
                    <h2 className="kv-h mb-8" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', color: '#1a2332' }}>
                        YOUR BUSINESS?
                    </h2>

                    <p className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: '#4b5563' }}>
                        Join hundreds of satisfied clients who trust <strong>Kavach Global Konnects</strong> for their facility management and technology solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link to="/contact" className="kv-btn shadow-xl">
                            Get A Quote <ArrowRight className="w-5 h-5 ml-1" />
                        </Link>
                        <div className="flex items-center gap-2 text-gray-400 font-medium uppercase tracking-widest text-[10px]">
                            OR CALL US TODAY
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Services;