// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Download, Award, Star, Trophy, Medal, ArrowRight } from "lucide-react";

// // Import award images
// import Award1 from "../assets/Award1.jpeg";
// import Award2 from "../assets/Award2.jpeg";
// import Award3 from "../assets/Award3.jpeg";

// // Import team images
// import RajwantImg from "../assets/rajwant.jpg";
// import TakshImg from "../assets/taksh.jpg";
// import AnkitImg from "../assets/anitk.jpg";
// import AbhijeetImg from "../assets/abijeet.jpg";
// import JitinImg from "../assets/jitin.jpg";

// // Import team group images
// import Team1 from "../assets/Team1.jpeg";
// import Team2 from "../assets/Team2.jpeg";
// import Team3 from "../assets/Team3.jpeg";

// // --- Helper Component for Counter Animation ---
// const Counter = ({ end, duration = 2000 }) => {
//     const [count, setCount] = useState(0);
//     const [isVisible, setIsVisible] = useState(false);
//     const countRef = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
//             { threshold: 0.1 }
//         );
//         if (countRef.current) observer.observe(countRef.current);
//         return () => observer.disconnect();
//     }, []);

//     useEffect(() => {
//         if (!isVisible) return;
//         let start = 0;
//         const increment = end / (duration / 16);
//         const timer = setInterval(() => {
//             start += increment;
//             if (start >= end) {
//                 setCount(end);
//                 clearInterval(timer);
//             } else {
//                 setCount(Math.floor(start));
//             }
//         }, 16);
//         return () => clearInterval(timer);
//     }, [end, duration, isVisible]);

//     return <span ref={countRef}>{count}+</span>;
// };

// const Awards = () => {
//     const navigate = useNavigate();
//     const [downloadingId, setDownloadingId] = useState(null);

//     // --- Enhanced Scroll Reveal Logic ---
//     useEffect(() => {
//         const observerOptions = {
//             threshold: 0.1,
//             rootMargin: "0px 0px -50px 0px" // Triggers slightly before the element hits the view
//         };

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add("is-visible");
//                 }
//             });
//         }, observerOptions);

//         const scrollElements = document.querySelectorAll(".scroll-reveal");
//         scrollElements.forEach((el) => observer.observe(el));

//         return () => observer.disconnect();
//     }, []);

//     const awards = [
//         { id: 1, image: Award1, filename: "Award1.jpeg", title: "Excellence in Innovation Award", year: "2023", issuer: "India Business Council", description: "Recognized for pioneering cutting-edge ICT infrastructure solutions.", icon: <Trophy className="w-5 h-5" /> },
//         { id: 2, image: Award2, filename: "Award2.jpeg", title: "Best Managed Services Provider", year: "2022", issuer: "National IT Summit", description: "Awarded for delivering world-class facility management and IT outsourcing.", icon: <Award className="w-5 h-5" /> },
//         { id: 3, image: Award3, filename: "Award3.jpeg", title: "Outstanding Growth & Leadership", year: "2021", issuer: "Asia Business Forum", description: "Honored for exceptional leadership in scaling global operations.", icon: <Medal className="w-5 h-5" /> },
//     ];

//     const teamMembers = [
//         { id: "rajwant-rai", name: "Dr. Rajwant Rai", position: "Chairman, Kavach Group", image: RajwantImg },
//         { id: "taksh-raval", name: "Mr. Taksh Raval", position: "Group Marketing Director (CMO)", image: TakshImg },
//         { id: "ankit-sudrania", name: "CA Ankit Sudrania", position: "Chief Financial Officer (CFO)", image: AnkitImg },
//         { id: "abhijeet-wadikar", name: "Mr. Abhijeet Wadekar", position: "Chief Technology Officer (CTO)", image: AbhijeetImg },
//         { id: "jitendra-kumar", name: "Mr. Jitendra Kumar", position: "Director – Operations & Business", image: JitinImg },
//     ];

//     const teamGallery = [
//         { image: Team1, caption: "Annual Leadership Summit 2023" },
//         { image: Team2, caption: "Team Kavach — Building Tomorrow" },
//         { image: Team3, caption: "Award Ceremony Celebration" },
//     ];

//     const handleDownload = async (award) => {
//         setDownloadingId(award.id);
//         try {
//             const response = await fetch(award.image);
//             const blob = await response.blob();
//             const url = URL.createObjectURL(blob);
//             const link = document.createElement("a");
//             link.href = url;
//             link.download = award.filename;
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//             URL.revokeObjectURL(url);
//         } catch { window.open(award.image, "_blank"); }
//         setTimeout(() => setDownloadingId(null), 1500);
//     };

//     return (
//         <div className="min-h-screen bg-white pt-[76px]" style={{ fontFamily: "'Barlow', sans-serif" }}>
//             <style>{`
//                 @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;0,900;1,800&family=Barlow:wght@400;500;600&display=swap');

//                 :root { --org: #e05a00; --org2: #f97316; --dark: #1a2332; }

//                 .kv-h { font-family:'Barlow Condensed',sans-serif; font-weight:800; text-transform:uppercase; letter-spacing:0.02em; line-height:1.05; }
//                 .kv-label { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:0.72rem; letter-spacing:0.28em; text-transform:uppercase; color:var(--org); display:flex; align-items:center; gap:6px; }
//                 .kv-label::before { content:''; width:8px; height:8px; border-radius:50%; background:var(--org); }

//                 .kv-btn {
//                     font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 0.85rem; letter-spacing: 0.08em; text-transform: uppercase;
//                     padding: 12px 24px; border-radius: 20px 0px 20px 0px; display: inline-flex; align-items: center; gap: 8px; transition: all 0.3s ease;
//                     background: linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%); color: #fff; border:none; cursor:pointer;
//                 }
//                 .kv-btn:hover { background:#c94e00; transform:translateY(-2px); box-shadow: 0 8px 25px rgba(234,88,12,0.4); border-radius:0px 20px 0px 20px; }

//                 .dot-bg-light { background-image:radial-gradient(rgba(0,0,0,0.04) 1px,transparent 1px); background-size:28px 28px; }
//                 .dot-bg-dark  { background-image:radial-gradient(rgba(255,255,255,0.03) 1px,transparent 1px); background-size:28px 28px; }

//                 /* --- ADVANCED SCROLL REVEAL --- */
//                 .scroll-reveal {
//                     opacity: 0;
//                     transform: translateY(60px) scale(0.95);
//                     transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
//                     will-change: transform, opacity;
//                 }
                
//                 .scroll-reveal.is-visible {
//                     opacity: 1;
//                     transform: translateY(0) scale(1);
//                 }

//                 /* Staggered Delays for Children */
//                 .stagger-1 { transition-delay: 0.1s; }
//                 .stagger-2 { transition-delay: 0.2s; }
//                 .stagger-3 { transition-delay: 0.3s; }
//                 .stagger-4 { transition-delay: 0.4s; }
//                 .stagger-5 { transition-delay: 0.5s; }

//                 /* Floating Stats */
//                 @keyframes floatStat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
//                 .stat-box { animation: floatStat 4s ease-in-out infinite; }
                
//                 @keyframes bobA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-9px)} }
//                 .bob-a { animation:bobA 2.8s ease-in-out infinite; }
//             `}</style>

//             {/* ── HERO ── */}
//             <section className="relative py-20 px-4 overflow-hidden dot-bg-dark" style={{ background: '#1a2332' }}>
//                 <div className="max-w-4xl mx-auto text-center scroll-reveal is-visible">
//                     <div className="kv-label justify-center mb-5">Recognition & Excellence</div>
//                     <h1 className="kv-h text-white mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
//                         OUR AWARDS & <span style={{ color: 'var(--org)' }}>ACHIEVEMENTS</span>
//                     </h1>
//                     <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
//                         Recognized by leading industry bodies for our commitment to innovation and excellence.
//                     </p>
//                     <div className="flex flex-wrap justify-center gap-6">
//                         {[{v:15, l:"Awards"}, {v:10, l:"Years"}, {v:7, l:"Countries"}].map((s, i) => (
//                             <div key={i} className={`stat-box flex flex-col items-center px-10 py-6 bg-white/5 border border-white/10 rounded-xl stagger-${i+1}`}>
//                                 <span className="text-4xl font-bold text-white"><Counter end={s.v} /></span>
//                                 <span className="text-orange-500 text-[10px] font-bold uppercase tracking-widest">{s.l}</span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ── AWARDS GRID ── */}
//             <section className="py-24 px-4 bg-white dot-bg-light">
//                 <div className="max-w-7xl mx-auto">
//                     <div className="text-center mb-16 scroll-reveal">
//                         <div className="kv-label justify-center mb-4">The Hall of Fame</div>
//                         <h2 className="kv-h text-gray-900" style={{ fontSize: '2.5rem' }}>PRESTIGIOUS <span style={{ color: 'var(--org)' }}>RECOGNITIONS</span></h2>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         {awards.map((award, idx) => (
//                             <div key={award.id} className={`scroll-reveal stagger-${idx+1} group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500`}>
//                                 <div className="relative h-64 overflow-hidden">
//                                     <img src={award.image} alt={award.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//                                     <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">{award.year}</div>
//                                 </div>
//                                 <div className="p-6">
//                                     <h3 className="kv-h text-xl mb-2">{award.title}</h3>
//                                     <p className="text-gray-500 text-sm mb-6">{award.description}</p>
//                                     <button onClick={() => handleDownload(award)} className="kv-btn w-full justify-center">
//                                         {downloadingId === award.id ? "Saving..." : "Download"}
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ── TEAM GALLERY ── */}
//             <section className="py-24 px-4 dot-bg-dark" style={{ background: '#111827' }}>
//                 <div className="max-w-7xl mx-auto">
//                     <div className="text-center mb-14 scroll-reveal">
//                         <h2 className="kv-h text-white" style={{ fontSize: '2.5rem' }}>THE SPIRIT OF <span style={{ color: 'var(--org)' }}>OUR TEAM</span></h2>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                         {teamGallery.map((item, idx) => (
//                             <div key={idx} className={`scroll-reveal stagger-${idx+1} bob-a relative rounded-xl overflow-hidden h-64 border border-white/5`}>
//                                 <img src={item.image} alt={item.caption} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black p-6 flex flex-col justify-end">
//                                     <p className="text-white text-sm font-bold uppercase">{item.caption}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ── VISIONARIES (Unchanged visual, added stagger reveal) ── */}
//             <section className="py-24 px-4 dot-bg-light bg-white border-t border-gray-100">
//                 <div className="max-w-7xl mx-auto">
//                     <div className="text-center mb-12 scroll-reveal">
//                         <div className="kv-label justify-center mb-4">Our Visionaries</div>
//                         <h2 className="kv-h text-gray-900" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
//                             LEADERSHIP <span style={{ color: 'var(--org)' }}>EXCELLENCE</span>
//                         </h2>
//                     </div>
//                     <div className="flex flex-wrap justify-center gap-8">
//                         {teamMembers.map((member, idx) => (
//                             <div 
//                                 key={member.id} 
//                                 onClick={() => navigate(`/team/${member.id}`)} 
//                                 className={`scroll-reveal stagger-${idx+1} group w-52 bg-white rounded-xl overflow-hidden cursor-pointer border border-gray-200 shadow-sm hover:shadow-xl hover:border-orange-500 transition-all duration-300`}
//                             >
//                                 <div className="h-60 overflow-hidden bg-gray-100">
//                                     <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
//                                 </div>
//                                 <div className="p-5 text-center">
//                                     <h4 className="text-gray-900 font-bold text-xs uppercase tracking-tight group-hover:text-orange-600 transition-colors">{member.name}</h4>
//                                     <p className="text-orange-600 text-[9px] font-bold uppercase mt-1 leading-tight tracking-widest">{member.position}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ── CTA ── */}
//             <section className="relative py-24 px-4 overflow-hidden dot-bg-light" style={{ background: '#f9fafb' }}>
//                 <div className="max-w-4xl mx-auto text-center scroll-reveal">
//                     <h2 className="kv-h mb-2" style={{ fontSize: '3rem', color: '#1a2332' }}>PARTNER WITH THE <span style={{ color: 'var(--org2)' }}>BEST</span></h2>
//                     <p className="text-lg text-gray-600 mb-10">Experience award-winning service today.</p>
//                     <Link to="/contact" className="kv-btn shadow-xl">Work With Us <ArrowRight className="w-5 h-5 ml-1" /></Link>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Awards;



import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Download, Award, Star, Trophy, Medal, ArrowRight } from "lucide-react";

// Import award images
import Award1 from "../assets/Award1.jpeg";
import Award2 from "../assets/Award2.jpeg";
import Award3 from "../assets/Award3.jpeg";

// Import team images
import RajwantImg from "../assets/rajwant.jpg";
import TakshImg from "../assets/taksh.jpg";
import AnkitImg from "../assets/anitk.jpg";
import AbhijeetImg from "../assets/abijeet.jpg";
import JitinImg from "../assets/jitin.jpg";

// Import team group images
import Team1 from "../assets/Team1.jpeg";
import Team2 from "../assets/Team2.jpeg";
import Team3 from "../assets/Team3.jpeg";

// --- Helper Component for Counter Animation ---
const Counter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const countRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.1 }
        );
        if (countRef.current) observer.observe(countRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        let start = 0;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [end, duration, isVisible]);

    return <span ref={countRef}>{count}+</span>;
};

const Awards = () => {
    const navigate = useNavigate();
    const [downloadingId, setDownloadingId] = useState(null);

    // --- Enhanced Scroll Reveal Logic ---
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                }
            });
        }, observerOptions);

        const scrollElements = document.querySelectorAll(".scroll-reveal");
        scrollElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const awards = [
        { id: 1, image: Award1, filename: "Award1.jpeg", title: "Excellence in Innovation Award", year: "2023", issuer: "India Business Council", description: "Recognized for pioneering cutting-edge ICT infrastructure solutions.", icon: <Trophy className="w-5 h-5" /> },
        { id: 2, image: Award2, filename: "Award2.jpeg", title: "Best Managed Services Provider", year: "2022", issuer: "National IT Summit", description: "Awarded for delivering world-class facility management and IT outsourcing.", icon: <Award className="w-5 h-5" /> },
        { id: 3, image: Award3, filename: "Award3.jpeg", title: "Outstanding Growth & Leadership", year: "2021", issuer: "Asia Business Forum", description: "Honored for exceptional leadership in scaling global operations.", icon: <Medal className="w-5 h-5" /> },
    ];

    const teamMembers = [
        { id: "rajwant-rai", name: "Dr. Rajwant Rai", position: "Chairman, Kavach Group", image: RajwantImg },
        { id: "taksh-raval", name: "Mr. Taksh Raval", position: "Group Marketing Director (CMO)", image: TakshImg },
        { id: "ankit-sudrania", name: "CA Ankit Sudrania", position: "Chief Financial Officer (CFO)", image: AnkitImg },
        { id: "abhijeet-wadikar", name: "Mr. Abhijeet Wadekar", position: "Chief Technology Officer (CTO)", image: AbhijeetImg },
        { id: "jitendra-kumar", name: "Mr. Jitendra Kumar", position: "Director – Operations & Business", image: JitinImg },
    ];

    const teamGallery = [
        { image: Team1, caption: "Annual Leadership Summit 2023" },
        { image: Team2, caption: "Team Kavach — Building Tomorrow" },
        { image: Team3, caption: "Award Ceremony Celebration" },
    ];

    const handleDownload = async (award) => {
        setDownloadingId(award.id);
        try {
            const response = await fetch(award.image);
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = award.filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch { window.open(award.image, "_blank"); }
        setTimeout(() => setDownloadingId(null), 1500);
    };

    return (
        <div className="min-h-screen bg-white pt-[76px]" style={{ fontFamily: "'Barlow', sans-serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;0,900;1,800&family=Barlow:wght@400;500;600&display=swap');

                :root { --org: #e05a00; --org2: #f97316; --dark: #1a2332; }

                .kv-h { font-family:'Barlow Condensed',sans-serif; font-weight:800; text-transform:uppercase; letter-spacing:0.02em; line-height:1.05; }
                .kv-label { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:0.72rem; letter-spacing:0.28em; text-transform:uppercase; color:var(--org); display:flex; align-items:center; gap:6px; }
                .kv-label::before { content:''; width:8px; height:8px; border-radius:50%; background:var(--org); }

                .kv-btn {
                    font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 0.85rem; letter-spacing: 0.08em; text-transform: uppercase;
                    padding: 12px 24px; border-radius: 20px 0px 20px 0px; display: inline-flex; align-items: center; gap: 8px; transition: all 0.3s ease;
                    background: linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%); color: #fff; border:none; cursor:pointer;
                }
                .kv-btn:hover { background:#c94e00; transform:translateY(-2px); box-shadow: 0 8px 25px rgba(234,88,12,0.4); border-radius:0px 20px 0px 20px; }

                .dot-bg-light { background-image:radial-gradient(rgba(0,0,0,0.04) 1px,transparent 1px); background-size:28px 28px; }
                .dot-bg-dark  { background-image:radial-gradient(rgba(255,255,255,0.03) 1px,transparent 1px); background-size:28px 28px; }

                /* --- ADVANCED SCROLL REVEAL --- */
                .scroll-reveal {
                    opacity: 0;
                    transform: translateY(60px) scale(0.95);
                    transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
                    will-change: transform, opacity;
                }
                
                .scroll-reveal.is-visible {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }

                /* Staggered Delays for Children */
                .stagger-1 { transition-delay: 0.1s; }
                .stagger-2 { transition-delay: 0.2s; }
                .stagger-3 { transition-delay: 0.3s; }
                .stagger-4 { transition-delay: 0.4s; }
                .stagger-5 { transition-delay: 0.5s; }

                /* Floating Stats */
                @keyframes floatStat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
                .stat-box { animation: floatStat 4s ease-in-out infinite; }
                
                @keyframes bobA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-9px)} }
                .bob-a { animation:bobA 2.8s ease-in-out infinite; }

                /* Team Gallery Image Brightness */
                .team-gallery-img {
                    filter: brightness(1.15) contrast(1.05);
                    transition: filter 0.7s ease, transform 0.7s ease;
                }
                .team-gallery-img:hover {
                    filter: brightness(1.3) contrast(1.08);
                    transform: scale(1.05);
                }
            `}</style>

            {/* ── HERO ── */}
            <section className="relative py-20 px-4 overflow-hidden dot-bg-dark" style={{ background: '#1a2332' }}>
                <div className="max-w-4xl mx-auto text-center scroll-reveal is-visible">
                    <div className="kv-label justify-center mb-5">Recognition & Excellence</div>
                    <h1 className="kv-h text-white mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
                        OUR AWARDS & <span style={{ color: 'var(--org)' }}>ACHIEVEMENTS</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
                        Recognized by leading industry bodies for our commitment to innovation and excellence.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {[{v:15, l:"Awards"}, {v:10, l:"Years"}, {v:7, l:"Countries"}].map((s, i) => (
                            <div key={i} className={`stat-box flex flex-col items-center px-10 py-6 bg-white/5 border border-white/10 rounded-xl stagger-${i+1}`}>
                                <span className="text-4xl font-bold text-white"><Counter end={s.v} /></span>
                                <span className="text-orange-500 text-[10px] font-bold uppercase tracking-widest">{s.l}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── AWARDS GRID ── */}
            <section className="py-24 px-4 bg-white dot-bg-light">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 scroll-reveal">
                        <div className="kv-label justify-center mb-4">The Hall of Fame</div>
                        <h2 className="kv-h text-gray-900" style={{ fontSize: '2.5rem' }}>PRESTIGIOUS <span style={{ color: 'var(--org)' }}>RECOGNITIONS</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {awards.map((award, idx) => (
                            <div key={award.id} className={`scroll-reveal stagger-${idx+1} group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500`}>
                                <div className="relative h-64 overflow-hidden">
                                    <img src={award.image} alt={award.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">{award.year}</div>
                                </div>
                                <div className="p-6">
                                    <h3 className="kv-h text-xl mb-2">{award.title}</h3>
                                    <p className="text-gray-500 text-sm mb-6">{award.description}</p>
                                    <button onClick={() => handleDownload(award)} className="kv-btn w-full justify-center">
                                        {downloadingId === award.id ? "Saving..." : "Download"}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TEAM GALLERY ── */}
            <section className="py-24 px-4 dot-bg-dark" style={{ background: '#111827' }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14 scroll-reveal">
                        <h2 className="kv-h text-white" style={{ fontSize: '2.5rem' }}>THE SPIRIT OF <span style={{ color: 'var(--org)' }}>OUR TEAM</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {teamGallery.map((item, idx) => (
                            <div key={idx} className={`scroll-reveal stagger-${idx+1} bob-a relative rounded-xl overflow-hidden h-64 border border-white/10`}>
                                {/* ✅ UPDATED: Removed grayscale, added brightness for lighter, colorful images */}
                                <img
                                    src={item.image}
                                    alt={item.caption}
                                    className="w-full h-full object-cover team-gallery-img"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-6 flex flex-col justify-end">
                                    <p className="text-white text-sm font-bold uppercase tracking-wider">{item.caption}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── VISIONARIES ── */}
            <section className="py-24 px-4 dot-bg-light bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 scroll-reveal">
                        <div className="kv-label justify-center mb-4">Our Visionaries</div>
                        <h2 className="kv-h text-gray-900" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
                            LEADERSHIP <span style={{ color: 'var(--org)' }}>EXCELLENCE</span>
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                        {teamMembers.map((member, idx) => (
                            <div 
                                key={member.id} 
                                onClick={() => navigate(`/team/${member.id}`)} 
                                className={`scroll-reveal stagger-${idx+1} group w-52 bg-white rounded-xl overflow-hidden cursor-pointer border border-gray-200 shadow-sm hover:shadow-xl hover:border-orange-500 transition-all duration-300`}
                            >
                                <div className="h-60 overflow-hidden bg-gray-100">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                                </div>
                                <div className="p-5 text-center">
                                    <h4 className="text-gray-900 font-bold text-xs uppercase tracking-tight group-hover:text-orange-600 transition-colors">{member.name}</h4>
                                    <p className="text-orange-600 text-[9px] font-bold uppercase mt-1 leading-tight tracking-widest">{member.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="relative py-24 px-4 overflow-hidden dot-bg-light" style={{ background: '#f9fafb' }}>
                <div className="max-w-4xl mx-auto text-center scroll-reveal">
                    <h2 className="kv-h mb-2" style={{ fontSize: '3rem', color: '#1a2332' }}>PARTNER WITH THE <span style={{ color: 'var(--org2)' }}>BEST</span></h2>
                    <p className="text-lg text-gray-600 mb-10">Experience award-winning service today.</p>
                    <Link to="/contact" className="kv-btn shadow-xl">Work With Us <ArrowRight className="w-5 h-5 ml-1" /></Link>
                </div>
            </section>
        </div>
    );
};

export default Awards;