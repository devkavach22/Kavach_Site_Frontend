// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ChevronRight, Download, Award, Star, Trophy, Medal } from "lucide-react";

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

// const Awards = () => {
//     const navigate = useNavigate();
//     const [downloadingId, setDownloadingId] = useState(null);

//     const awards = [
//         {
//             id: 1,
//             image: Award1,
//             filename: "Award1.jpeg",
//             title: "Excellence in Innovation Award",
//             year: "2023",
//             issuer: "India Business Council",
//             category: "Technology Innovation",
//             description:
//                 "Recognized for pioneering cutting-edge ICT infrastructure solutions that transformed operational efficiency across 50+ industries in India and beyond.",
//             icon: <Trophy className="w-6 h-6" />,
//             color: "from-yellow-500 to-orange-500",
//         },
//         {
//             id: 2,
//             image: Award2,
//             filename: "Award2.jpeg",
//             title: "Best Managed Services Provider",
//             year: "2022",
//             issuer: "National IT Summit",
//             category: "Managed Services",
//             description:
//                 "Awarded for delivering world-class facility management and IT outsourcing services with consistent excellence, client satisfaction above 98%, and round-the-clock support.",
//             icon: <Award className="w-6 h-6" />,
//             color: "from-orange-500 to-red-500",
//         },
//         {
//             id: 3,
//             image: Award3,
//             filename: "Award3.jpeg",
//             title: "Outstanding Growth & Leadership",
//             year: "2021",
//             issuer: "Asia Business Forum",
//             category: "Corporate Leadership",
//             description:
//                 "Honored for exceptional leadership in scaling operations across 7+ global footprints while maintaining a team of 23,000+ professionals and serving 7,500+ clients worldwide.",
//             icon: <Medal className="w-6 h-6" />,
//             color: "from-red-600 to-orange-600",
//         },
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
//         } catch (e) {
//             // fallback: open in new tab
//             window.open(award.image, "_blank");
//             console.log(e)
//         }
//         setTimeout(() => setDownloadingId(null), 1500);
//     };

//     return (
//         <div className="min-h-screen bg-white pt-[76px]">

//             {/* ── HERO ── */}
//             <section className="relative py-24 pb-32 px-4 overflow-hidden bg-gradient-to-br from-orange-600 via-red-600 to-orange-300">
//                 <div className="max-w-7xl mx-auto text-center relative z-10">
//                     {/* Badge */}
//                     <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full mb-8 shadow-md opacity-0 animate-[slideDown_0.6s_ease-out_0.1s_forwards]">
//                         <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
//                         <span className="text-white text-sm font-semibold tracking-widest uppercase">Recognition & Awards</span>
//                         <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
//                     </div>

//                     <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
//                         <span className="block text-white opacity-0 animate-[slideUp_0.7s_ease-out_0.2s_forwards]">
//                             Our Awards &
//                         </span>
//                         <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-200 bg-clip-text text-transparent opacity-0 animate-[slideUp_0.7s_ease-out_0.4s_forwards]">
//                             Achievements
//                         </span>
//                     </h1>

//                     <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]">
//                         Over the years, Kavach Global has been recognized by leading industry bodies for our
//                         commitment to innovation, excellence, and transformative impact across sectors worldwide.
//                     </p>

//                     {/* Quick stats */}
//                     <div className="mt-10 flex flex-wrap justify-center gap-6 opacity-0 animate-[fadeIn_0.8s_ease-out_0.8s_forwards]">
//                         {[
//                             { value: "15+", label: "Industry Awards" },
//                             { value: "10+", label: "Years of Recognition" },
//                             { value: "7+", label: "Countries Recognized" },
//                         ].map((s, i) => (
//                             <div key={i} className="flex flex-col items-center px-8 py-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
//                                 <span className="text-3xl font-extrabold text-white">{s.value}</span>
//                                 <span className="text-white/60 text-sm font-medium mt-0.5">{s.label}</span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Wave divider */}
//                 <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
//                     <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
//                         <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
//                     </svg>
//                 </div>
//             </section>

//             {/* ── AWARDS GRID ── */}
//             <section className="py-20 px-4 bg-white">
//                 <div className="max-w-7xl mx-auto">
//                     <div className="text-center mb-14">
//                         <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-3">Our Prestigious Awards</h2>
//                         <p className="text-gray-500 max-w-xl mx-auto">
//                             Click the download button on any award to save a copy to your device.
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         {awards.map((award, idx) => (
//                             <div
//                                 key={award.id}
//                                 // ✅ FIX 1: Added flex flex-col so card stretches full height
//                                 className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange-100 hover:border-orange-300 hover:-translate-y-2 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] flex flex-col"
//                                 style={{ animationDelay: `${idx * 120}ms` }}
//                             >
//                                 {/* Award image */}
//                                 <div className="relative h-72 overflow-hidden">
//                                     <img
//                                         src={award.image}
//                                         alt={award.title}
//                                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                                     />
//                                     {/* Overlay on hover */}
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

//                                     {/* Year badge */}
//                                     <div className="absolute top-4 left-4">
//                                         <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r ${award.color} text-white text-xs font-bold rounded-full shadow-lg`}>
//                                             {award.icon}
//                                             {award.year}
//                                         </span>
//                                     </div>

//                                     {/* Download button - appears on hover */}
//                                     <button
//                                         onClick={() => handleDownload(award)}
//                                         className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-white text-orange-600 rounded-full text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-orange-600 hover:text-white"
//                                     >
//                                         {downloadingId === award.id ? (
//                                             <>
//                                                 <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
//                                                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
//                                                 </svg>
//                                                 Saving...
//                                             </>
//                                         ) : (
//                                             <>
//                                                 <Download className="w-4 h-4" />
//                                                 Download
//                                             </>
//                                         )}
//                                     </button>

//                                     {/* Category at bottom of image */}
//                                     <div className="absolute bottom-4 left-4 right-4">
//                                         <span className="text-xs text-white/70 uppercase tracking-widest font-semibold">{award.category}</span>
//                                         <h3 className="text-white font-bold text-lg leading-tight mt-0.5">{award.title}</h3>
//                                     </div>
//                                 </div>

//                                 {/* Card body */}
//                                 {/* ✅ FIX 2: Added flex flex-col flex-1 so body fills remaining card height */}
//                                 <div className="p-6 flex flex-col flex-1">
//                                     <div className="flex items-center gap-2 mb-3">
//                                         <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
//                                         <span className="text-sm font-semibold text-orange-600">{award.issuer}</span>
//                                     </div>
//                                     <p className="text-gray-600 text-sm leading-relaxed mb-5">{award.description}</p>

//                                     {/* Always-visible download button */}
//                                     {/* ✅ FIX 3: Added mt-auto to push button to bottom of every card */}
//                                     <button
//                                         onClick={() => handleDownload(award)}
//                                         className={`mt-auto w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r ${award.color} text-white rounded-xl font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300`}
//                                     >
//                                         {downloadingId === award.id ? (
//                                             <>
//                                                 <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
//                                                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
//                                                 </svg>
//                                                 Downloading...
//                                             </>
//                                         ) : (
//                                             <>
//                                                 <Download className="w-4 h-4" />
//                                                 Download Certificate
//                                             </>
//                                         )}
//                                     </button>
//                                 </div>

//                                 {/* Bottom accent */}
//                                 <div className={`h-1 bg-gradient-to-r ${award.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ── TEAM GALLERY ── */}
//             <section className="py-16 px-4 bg-gray-50">
//                 <div className="max-w-7xl mx-auto">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-3">The Team Behind the Glory</h2>
//                         <p className="text-gray-500 max-w-2xl mx-auto">
//                             Every award is a reflection of our 23,000+ strong team — their dedication, passion, and relentless pursuit of excellence make every milestone possible.
//                         </p>
//                     </div>

//                     {/* Gallery grid */}
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
//                         {teamGallery.map((item, idx) => (
//                             <div
//                                 key={idx}
//                                 className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
//                                 style={{ animationDelay: `${idx * 100}ms` }}
//                             >
//                                 <div className="h-60 overflow-hidden">
//                                     <img
//                                         src={item.image}
//                                         alt={item.caption}
//                                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                                     />
//                                 </div>
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
//                                     <p className="text-white text-sm font-semibold">{item.caption}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Team members */}
//                     <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Meet the Leadership</h3>
//                     <div className="flex flex-wrap justify-center gap-6">
//                         {teamMembers.map((member, index) => (
//                             <div
//                                 key={member.id}
//                                 onClick={() => navigate(`/team/${member.id}`)}
//                                 className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer hover:-translate-y-2 w-[200px] border-2 border-orange-100 hover:border-orange-400 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
//                                 style={{ animationDelay: `${index * 80}ms` }}
//                             >
//                                 <div className="h-52 overflow-hidden">
//                                     <img
//                                         src={member.image}
//                                         alt={member.name}
//                                         className="w-full h-full object-cover object-top origin-top group-hover:scale-110 transition-transform duration-700"
//                                     />
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                                 </div>
//                                 <div className="p-3 bg-white">
//                                     <h4 className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition-colors duration-300 line-clamp-1">{member.name}</h4>
//                                     <p className="text-gray-500 text-xs mt-0.5 line-clamp-2">{member.position}</p>
//                                     <div className="flex items-center gap-1 mt-2 text-orange-500">
//                                         <span className="text-xs font-semibold">View Profile</span>
//                                         <ChevronRight className="w-3 h-3" />
//                                     </div>
//                                 </div>
//                                 <div className="absolute inset-0 border-2 border-orange-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ── WHY WE WIN ── */}
//             <section className="py-16 px-4 bg-white">
//                 <div className="max-w-7xl mx-auto">
//                     <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-12">Why We Keep Winning</h2>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                         {[
//                             { icon: "🏆", title: "Client First", desc: "98%+ client satisfaction rate drives our approach to every engagement and project we undertake." },
//                             { icon: "💡", title: "Innovation DNA", desc: "We invest heavily in R&D and emerging technologies to stay ahead of industry trends and disruptions." },
//                             { icon: "🌍", title: "Global Mindset", desc: "Operating across 7+ countries gives us a unique perspective that shapes world-class solutions." },
//                             { icon: "🤝", title: "People Power", desc: "23,000+ dedicated professionals who bring passion, expertise, and commitment every single day." },
//                         ].map((item, idx) => (
//                             <div
//                                 key={idx}
//                                 className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-orange-100 hover:border-orange-300 hover:-translate-y-2 text-center overflow-hidden opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
//                                 style={{ animationDelay: `${idx * 100}ms` }}
//                             >
//                                 <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-400 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center rounded-b-2xl"></div>
//                                 <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
//                                 <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-orange-600 transition-colors duration-300">{item.title}</h3>
//                                 <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ── CTA ── */}
//             <section className="py-20 px-4 bg-gradient-to-br from-orange-900 via-red-800 to-orange-800 relative overflow-hidden">
//                 <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none rotate-180">
//                     <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
//                         <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
//                     </svg>
//                 </div>
//                 <div className="max-w-4xl mx-auto text-center relative z-10 pt-8">
//                     <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
//                         Be Part of Our{" "}
//                         <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
//                             Award-Winning Journey
//                         </span>
//                     </h2>
//                     <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
//                         Join 7,500+ clients who trust Kavach Global to deliver excellence. Let's build something exceptional together.
//                     </p>
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                         <button
//                             onClick={() => navigate("/contact")}
//                             className="px-8 py-4 bg-white text-orange-700 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
//                         >
//                             Get In Touch
//                         </button>
//                         <button
//                             onClick={() => navigate("/about")}
//                             className="px-8 py-4 bg-white/10 text-white border border-white/30 rounded-xl font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300"
//                         >
//                             Learn About Us
//                         </button>
//                     </div>
//                 </div>
//             </section>

//             {/* Animations */}
//             <style dangerouslySetInnerHTML={{
//                 __html: `
//           @keyframes fadeIn {
//             from { opacity: 0; transform: translateY(20px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//           @keyframes slideUp {
//             from { opacity: 0; transform: translateY(40px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//           @keyframes slideDown {
//             from { opacity: 0; transform: translateY(-20px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//         `
//             }} />
//         </div>
//     );
// };

// export default Awards;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Download, Award, Star, Trophy, Medal } from "lucide-react";

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

const Awards = () => {
    const navigate = useNavigate();
    const [downloadingId, setDownloadingId] = useState(null);

    const awards = [
        {
            id: 1,
            image: Award1,
            filename: "Award1.jpeg",
            title: "Excellence in Innovation Award",
            year: "2023",
            issuer: "India Business Council",
            category: "Technology Innovation",
            description:
                "Recognized for pioneering cutting-edge ICT infrastructure solutions that transformed operational efficiency across 50+ industries in India and beyond.",
            icon: <Trophy className="w-6 h-6" />,
            color: "from-yellow-500 to-orange-500",
        },
        {
            id: 2,
            image: Award2,
            filename: "Award2.jpeg",
            title: "Best Managed Services Provider",
            year: "2022",
            issuer: "National IT Summit",
            category: "Managed Services",
            description:
                "Awarded for delivering world-class facility management and IT outsourcing services with consistent excellence, client satisfaction above 98%, and round-the-clock support.",
            icon: <Award className="w-6 h-6" />,
            color: "from-orange-500 to-red-500",
        },
        {
            id: 3,
            image: Award3,
            filename: "Award3.jpeg",
            title: "Outstanding Growth & Leadership",
            year: "2021",
            issuer: "Asia Business Forum",
            category: "Corporate Leadership",
            description:
                "Honored for exceptional leadership in scaling operations across 7+ global footprints while maintaining a team of 23,000+ professionals and serving 7,500+ clients worldwide.",
            icon: <Medal className="w-6 h-6" />,
            color: "from-red-600 to-orange-600",
        },
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
        } catch (e) {
            window.open(award.image, "_blank");
            console.log(e);
        }
        setTimeout(() => setDownloadingId(null), 1500);
    };

    return (
        <div className="min-h-screen bg-white pt-[76px]">

            {/* ── HERO ── */}
            <section className="relative py-12 pb-20 px-4 overflow-hidden bg-gradient-to-br from-orange-600 via-red-600 to-orange-300">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full mb-5 shadow-md opacity-0 animate-[slideDown_0.6s_ease-out_0.1s_forwards]">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                        <span className="text-white text-xs font-semibold tracking-widest uppercase">Recognition & Awards</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
                        <span className="block text-white opacity-0 animate-[slideUp_0.7s_ease-out_0.2s_forwards]">
                            Our Awards &
                        </span>
                        <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-200 bg-clip-text text-transparent opacity-0 animate-[slideUp_0.7s_ease-out_0.4s_forwards]">
                            Achievements
                        </span>
                    </h1>

                    <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]">
                        Over the years, Kavach Global has been recognized by leading industry bodies for our
                        commitment to innovation, excellence, and transformative impact across sectors worldwide.
                    </p>

                    {/* Quick stats */}
                    <div className="mt-7 flex flex-wrap justify-center gap-4 opacity-0 animate-[fadeIn_0.8s_ease-out_0.8s_forwards]">
                        {[
                            { value: "15+", label: "Industry Awards" },
                            { value: "10+", label: "Years of Recognition" },
                            { value: "7+", label: "Countries Recognized" },
                        ].map((s, i) => (
                            <div key={i} className="flex flex-col items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                                <span className="text-2xl font-extrabold text-white">{s.value}</span>
                                <span className="text-white/60 text-xs font-medium mt-0.5">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Wave divider */}
                <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
                    <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
                        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* ── AWARDS GRID ── */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-3">Our Prestigious Awards</h2>
                        <p className="text-gray-500 max-w-xl mx-auto">
                            Click the download button on any award to save a copy to your device.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {awards.map((award, idx) => (
                            <div
                                key={award.id}
                                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange-100 hover:border-orange-300 hover:-translate-y-2 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] flex flex-col"
                                style={{ animationDelay: `${idx * 120}ms` }}
                            >
                                {/* Award image */}
                                <div className="relative h-72 overflow-hidden">
                                    <img
                                        src={award.image}
                                        alt={award.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                                    {/* Year badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r ${award.color} text-white text-xs font-bold rounded-full shadow-lg`}>
                                            {award.icon}
                                            {award.year}
                                        </span>
                                    </div>

                                    {/* Download button - appears on hover */}
                                    <button
                                        onClick={() => handleDownload(award)}
                                        className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-white text-orange-600 rounded-full text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-orange-600 hover:text-white"
                                    >
                                        {downloadingId === award.id ? (
                                            <>
                                                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                                </svg>
                                                Saving...
                                            </>
                                        ) : (
                                            <>
                                                <Download className="w-4 h-4" />
                                                Download
                                            </>
                                        )}
                                    </button>

                                    {/* Category at bottom of image */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <span className="text-xs text-white/70 uppercase tracking-widest font-semibold">{award.category}</span>
                                        <h3 className="text-white font-bold text-lg leading-tight mt-0.5">{award.title}</h3>
                                    </div>
                                </div>

                                {/* Card body */}
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                                        <span className="text-sm font-semibold text-orange-600">{award.issuer}</span>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-5">{award.description}</p>

                                    <button
                                        onClick={() => handleDownload(award)}
                                        className={`mt-auto w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r ${award.color} text-white rounded-xl font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300`}
                                    >
                                        {downloadingId === award.id ? (
                                            <>
                                                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                                </svg>
                                                Downloading...
                                            </>
                                        ) : (
                                            <>
                                                <Download className="w-4 h-4" />
                                                Download Certificate
                                            </>
                                        )}
                                    </button>
                                </div>

                                {/* Bottom accent */}
                                <div className={`h-1 bg-gradient-to-r ${award.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TEAM GALLERY ── */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-3">The Team Behind the Glory</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Every award is a reflection of our 23,000+ strong team — their dedication, passion, and relentless pursuit of excellence make every milestone possible.
                        </p>
                    </div>

                    {/* Gallery grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
                        {teamGallery.map((item, idx) => (
                            <div
                                key={idx}
                                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                <div className="h-60 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.caption}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                                    <p className="text-white text-sm font-semibold">{item.caption}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Team members */}
                    <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Meet the Leadership</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        {teamMembers.map((member, index) => (
                            <div
                                key={member.id}
                                onClick={() => navigate(`/team/${member.id}`)}
                                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer hover:-translate-y-2 w-[200px] border-2 border-orange-100 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
                                style={{ animationDelay: `${index * 80}ms` }}
                            >
                                <div className="h-52 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-top origin-top group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                <div className="p-3 bg-white">
                                    <h4 className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition-colors duration-300 line-clamp-1">{member.name}</h4>
                                    <p className="text-gray-500 text-xs mt-0.5 line-clamp-2">{member.position}</p>
                                    <div className="flex items-center gap-1 mt-2 text-orange-500">
                                        <span className="text-xs font-semibold">View Profile</span>
                                        <ChevronRight className="w-3 h-3" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHY WE WIN ── */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-12">Why We Keep Winning</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: "🏆", title: "Client First", desc: "98%+ client satisfaction rate drives our approach to every engagement and project we undertake." },
                            { icon: "💡", title: "Innovation DNA", desc: "We invest heavily in R&D and emerging technologies to stay ahead of industry trends and disruptions." },
                            { icon: "🌍", title: "Global Mindset", desc: "Operating across 7+ countries gives us a unique perspective that shapes world-class solutions." },
                            { icon: "🤝", title: "People Power", desc: "23,000+ dedicated professionals who bring passion, expertise, and commitment every single day." },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-orange-100 hover:border-orange-300 hover:-translate-y-2 text-center overflow-hidden opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-400 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center rounded-b-2xl"></div>
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-orange-600 transition-colors duration-300">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-20 px-4 bg-gradient-to-br from-orange-900 via-red-800 to-orange-800 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none rotate-180">
                    <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
                        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
                    </svg>
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10 pt-8">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                        Be Part of Our{" "}
                        <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                            Award-Winning Journey
                        </span>
                    </h2>
                    <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                        Join 7,500+ clients who trust Kavach Global to deliver excellence. Let's build something exceptional together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => navigate("/contact")}
                            className="px-8 py-4 bg-white text-orange-700 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Get In Touch
                        </button>
                        <button
                            onClick={() => navigate("/about")}
                            className="px-8 py-4 bg-white/10 text-white border border-white/30 rounded-xl font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300"
                        >
                            Learn About Us
                        </button>
                    </div>
                </div>
            </section>

            {/* Animations */}
            <style dangerouslySetInnerHTML={{
                __html: `
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `
            }} />
        </div>
    );
};

export default Awards;