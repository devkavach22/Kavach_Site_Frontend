// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { 
//   Building2, 
//   Users2, 
//   Phone,
//   Handshake, 
//   Globe2,
//   ChevronRight,
//   Plus,
//   Minus 
// } from "lucide-react";

// import EmployeeImg from "../assets/Employee.jpeg";
// import KalibreImg from "../assets/KalibreGlobal.jpg";
// import EducationImg from "../assets/Education.webp";
// import HealthcareImg from "../assets/Healthcare.jpg";
// import AutomobileImg from "../assets/automobile.jpg";
// import HospitalImg from "../assets/Hospital.webp";
// import GovernmentImg from "../assets/goverment.jpg";
// import ITImg from "../assets/IT.jpg";
// import BusinessImg from "../assets/business.webp";
// import MarketingImg from "../assets/Marketing.jpg";

// // Counter Animation Component
// const CounterAnimation = ({ end, duration = 2000, suffix = "" }) => {
//   const [count, setCount] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const counterRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (counterRef.current) {
//       observer.observe(counterRef.current);
//     }

//     return () => {
//       if (counterRef.current) {
//         observer.unobserve(counterRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (!isVisible) return;

//     let startTime;
//     let animationFrame;

//     const animate = (currentTime) => {
//       if (!startTime) startTime = currentTime;
//       const progress = (currentTime - startTime) / duration;

//       if (progress < 1) {
//         setCount(Math.floor(end * progress));
//         animationFrame = requestAnimationFrame(animate);
//       } else {
//         setCount(end);
//       }
//     };

//     animationFrame = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(animationFrame);
//   }, [isVisible, end, duration]);

//   return (
//     <span ref={counterRef}>
//       {count.toLocaleString()}
//       {suffix}
//     </span>
//   );
// };

// const Home = () => {
//   const navigate = useNavigate();

//   // States for the Digital Solutions Section
//   const [activeTab, setActiveTab] = useState("Mining Operations");
//   const [openAccordion, setOpenAccordion] = useState(null);

//   const achievements = [
//     {
//       icon: <Building2 className="w-8 h-8 text-orange-500" strokeWidth={2} />,
//       value: 8,
//       label: "Offices in India",
//       suffix: ""
//     },
//     {
//       icon: <Users2 className="w-8 h-8 text-orange-500" strokeWidth={2} />,
//       value: 23000,
//       label: "Team",
//       suffix: "+"
//     },
//     {
//       icon: <Phone className="w-8 h-8 text-orange-500" strokeWidth={2} />,
//       value: 50,
//       label: "Industries",
//       suffix: "+"
//     },
//     {
//       icon: <Handshake className="w-8 h-8 text-orange-500" strokeWidth={2} />,
//       value: 7500,
//       label: "Clients",
//       suffix: "+"
//     },
//     {
//       icon: <Globe2 className="w-8 h-8 text-orange-500" strokeWidth={2} />,
//       value: 7,
//       label: "Global Footprints",
//       suffix: "+"
//     }
//   ];

//   // Data for the Digital Solutions Section
//   const solutionsData = {
//     "Mining Operations": {
//       title: "Innovating Mining Operations with Digital Solutions",
//       desc: "At Kavach Technology, we are committed to enhancing the efficiency and transparency of mining operations through our cutting-edge technology solutions. Our suite of products is designed to streamline processes, ensure safety, and boost productivity at every stage of mining, from extraction to delivery.",
//       items: [
//         { 
//           title: "Digital Logistics Management Solutions (DLMS)", 
//           content: "Revolutionizing the movement of goods within mining operations, our Digital Logistics Management Solutions (DLMS) provide real-time tracking, optimized routing, and intelligent analytics. This helps in improving operational efficiency, reducing transit time, and minimizing costs while ensuring safety and regulatory compliance." 
//         },
//         { 
//           title: "Integrated Customer Management Solution", 
//           content: "Our Integrated Customer Management Solution offers seamless tracking and management of customer interactions, ensuring that orders, invoicing, and delivery processes are handled effectively. With features like customer profiling, order history, and support tracking, this solution provides a 360-degree view of your customer base." 
//         }
//       ]
//     },
//     "Education Management": {
//       title: "Revolutionizing Education Management Through Technology",
//       desc: "Education is the cornerstone of progress, and managing the education system is as vital as delivering knowledge itself. In a rapidly evolving world, traditional education management systems must adapt to the dynamic needs of learners and institutions. At Kavach Technology, we empower educational institutions with cutting-edge solutions designed to streamline operations, enhance learning experiences, and foster innovation.",
//       items: [
//         { 
//           title: "Admission Automation System", 
//           content: "Simplify and streamline the admissions process with our Admission Automation System. From online application submissions to real-time status updates, this system reduces administrative workload, ensures error-free data management, and enhances the applicant's experience." 
//         },
//         { 
//           title: "Scholarship Management System", 
//           content: "Our Scholarship Management System ensures transparency and efficiency in administering scholarships. It facilitates application tracking, eligibility verification, fund disbursement, and compliance reporting, ensuring that deserving students receive their benefits seamlessly." 
//         }
//       ]
//     },
//     "Food Security & Agriculture": {
//       title: "Driving Food Security Through Digital Innovation",
//       desc: "Food security is fundamental to a nation's well-being and economic stability. At Kavach Technology, we are committed to enabling efficient, transparent, and tech-driven solutions that address the complexities of agriculture, distribution, and food supply management. Our innovative platforms streamline the entire value chain, from procurement to distribution, ensuring sustainability and accessibility for all.",
//       items: [
//         { 
//           title: "Commodity Auction Automation System", 
//           content: "Revolutionize the trading of agricultural commodities with our Commodity Auction Automation System. This solution provides a transparent, real-time auction platform that ensures fair pricing for farmers and buyers, reduces market inefficiencies, and fosters trust in the ecosystem." 
//         },
//         { 
//           title: "Supply Chain Management System", 
//           content: "Streamline the movement of agricultural produce with our Supply Chain Management System. This end-to-end solution optimizes storage, transportation, and delivery, ensuring fresh produce reaches its destination efficiently. Real-time tracking and data analytics enhance decision-making and minimize wastage." 
//         }
//       ]
//     },
//     "Smart Land & Industry": {
//       title: "Empowering Land & Industry with Digital Solutions",
//       desc: "Land management and industrial operations are fundamental to economic growth, requiring efficient, transparent, and scalable systems. Kavach Technology provides innovative solutions that streamline land allocation, industrial inspections, CSR monitoring, and more. Our platforms ensure optimized operations, better resource management, and seamless collaboration across multiple sectors.",
//       items: [
//         { 
//           title: "Building Plan Approval System", 
//           content: "Simplify the approval process for building plans with our Building Plan Approval System. This solution automates the submission, review, and approval workflows, ensuring faster and more efficient handling of applications." 
//         },
//         { 
//           title: "CSR Monitoring System", 
//           content: "Ensure the effective implementation of corporate social responsibility initiatives with our CSR Monitoring System. This platform tracks CSR projects, monitors progress, and measures impact, ensuring transparency and accountability." 
//         }
//       ]
//     },
//     "HealthTech Solutions": {
//       title: "Transforming Healthcare Through Technology",
//       desc: "The healthcare sector requires seamless coordination, efficient resource management, and robust systems to deliver timely and quality care. Kavach Technology offers innovative solutions that address these challenges, empowering healthcare providers and administrators to enhance service delivery and improve patient outcomes.",
//       items: [
//         { 
//           title: "Community Health Worker System", 
//           content: "Support grassroots healthcare initiatives with our Community Health Worker System. This solution enables health workers to track patient records, monitor health programs, and ensure timely care delivery in underserved areas, fostering healthier communities." 
//         },
//         { 
//           title: "Drug Distribution & Supply Chain System", 
//           content: "Ensure uninterrupted access to essential medicines with our Drug Distribution & Supply Chain System. This platform optimizes inventory management, tracks distribution in real time, and reduces wastage, ensuring critical drugs reach the right locations on time." 
//         }
//       ]
//     },
//     "Marketing & Communication": {
//       title: "Revolutionizing Marketing and Communication",
//       desc: "In today's fast-paced digital world, effective communication and marketing strategies are pivotal for business success. Kavach Technology offers advanced solutions that empower organizations to engage customers, streamline operations, and enhance decision-making. Our tools are designed to create impactful interactions and drive superior outcomes.",
//       items: [
//         { 
//           title: "Cloud Contact Center", 
//           content: "Transform customer service with our Cloud Contact Center solution. It enables businesses to manage omnichannel communications, optimize workflows, and ensure a seamless customer experience—all through a scalable, cloud-based platform." 
//         },
//         { 
//           title: "Conversational AI", 
//           content: "Enhance customer engagement with our Conversational AI solutions. From intelligent chatbots to virtual assistants, this technology delivers personalized, 24/7 support, automating routine tasks while ensuring meaningful interactions." 
//         }
//       ]
//     }
//   };

//   const industries = [
//     { 
//       name: "Education", 
//       image: EducationImg,
//       description: "Empowering the next generation through innovative educational technology. We specialize in transforming traditional classrooms into interactive digital learning environments, providing smart infrastructure and comprehensive management systems."
//     },
//     { 
//       name: "Health Care", 
//       image: HealthcareImg,
//       description: "Delivering world-class healthcare support through cutting-edge medical technology and facility management. We ensure patient safety and care excellence by integrating sophisticated health management systems that allow providers to focus on clinical."
//     },
//     { 
//       name: "Automobile", 
//       image: AutomobileImg,
//       description: "Driving manufacturing excellence in the automotive sector with precision-engineered solutions. We support global auto manufacturers with state-of-the-art facility management and technical infrastructure that meets the rigorous demands of modern production."
//     },
//     { 
//       name: "Hospital", 
//       image: HospitalImg,
//       description: "Comprehensive hospital management solutions designed for 24/7 seamless operations. From meticulous facility maintenance to critical infrastructure support, we ensure your medical environment remains safe, sterile, and fully functional, allowing for uninterrupted."
//     },
//     { 
//       name: "Government", 
//       image: GovernmentImg,
//       description: "Supporting public sector digital transformation through robust infrastructure and security solutions. We partner with government agencies to enhance citizen services and operational transparency, building the foundations for smart cities."
//     },
//     { 
//       name: "IT Industries", 
//       image: ITImg,
//       description: "Leading-edge IT infrastructure and comprehensive technology services for the digital age. From high-tier data centers to secure cloud hosting, we power the digital ecosystem of modern enterprises, providing the scalable and secure technical."
//     },
//     { 
//       name: "Business", 
//       image: BusinessImg,
//       description: "Enabling sustainable business growth and peak operational efficiency across all corporate sectors. Our integrated facility management and customized professional solutions allow organizations to focus entirely on their core business goals while we manage their entire physical."
//     },
//     { 
//       name: "Marketing", 
//       image: MarketingImg,
//       description: "Strategic marketing and branding solutions that elevate your presence in a competitive global market. We create high-impact, data-driven campaigns and brand strategies that resonate deeply with target audiences, driving measurable business growth through creative digital transformation."
//     }
//   ];

//   const recentProjects = [
//     {
//       id: "intelligent-traffic-management",
//       title: "Intelligent Traffic Management System",
//       icon: <Globe2 className="w-8 h-8" />,
//     },
//     {
//       id: "emergency-call-box",
//       title: "Emergency Call Box",
//       icon: <Phone className="w-8 h-8" />,
//     },
//     {
//       id: "gis-solution-mining",
//       title: "GIS Solution For Mining",
//       icon: <Building2 className="w-8 h-8" />,
//     },
//     {
//       id: "payroll-solutions",
//       title: "360 Degree Payroll Solutions",
//       icon: <Users2 className="w-8 h-8" />,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 pt-[76px]">
//       <section className="py-10 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div>
//               <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight mb-8 drop-shadow-sm">
//                 <span className="text-gray-900 block leading-none">Kavach Global</span>
//                 <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent block leading-none -mt-1">
//                   Konnects
//                 </span>
//               </h1>

//               <p className="text-gray-700 text-lg leading-relaxed mb-4">
//                 The Kavach Group is a leading conglomerate providing
//                 comprehensive, integrated solutions across a wide range of
//                 industries. Our expertise spans{" "}
//                 <strong>
//                   Facility Management, ICT Infrastructure, Healthcare, Data
//                   Center VPS, Power & Utilities, Cloud Hosting, Server
//                   Colocation, HR Outsourcing, IT Services, Communication
//                   Technologies, and Data-Driven Analytics.
//                 </strong>
//               </p>

//               <p className="text-gray-700 text-lg leading-relaxed mb-4">
//                 By leveraging the combined strengths of{" "}
//                 <strong>Kavach, Kalibrc, and Fact IT Solutions</strong>, we
//                 offer end-to-end, customized solutions that meet the dynamic
//                 needs of today's businesses.
//               </p>

//               <Link
//                 to="/contact"
//                 className="inline-block px-8 py-4 bg-red-600 text-white rounded-lg font-semibold shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse hover:animate-none"
//               >
//                 Get Started
//               </Link>
//             </div>

//             {/* Right Side Images */}
//             <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
//               <div className="absolute top-0 left-0 w-2/3 z-10 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
//                 <img
//                   src={KalibreImg}
//                   alt="Kalibre Global"
//                   className="rounded-2xl shadow-2xl border-4 border-white object-cover w-full h-64 md:h-80"
//                 />
//               </div>
//               <div className="absolute bottom-0 right-0 w-2/3 z-20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
//                 <img
//                   src={EmployeeImg}
//                   alt="Employee"
//                   className="rounded-2xl shadow-2xl border-4 border-white object-cover w-full h-64 md:h-80"
//                 />
//               </div>
//               <div className="absolute w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-30 -z-10"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* NEW: Kavach Technology Digital Solutions Section */}
//       <section className="py-20 px-4 bg-white/50">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-12">
//             Kavach Technology Digital Solutions
//           </h2>

//           <div className="flex flex-col lg:flex-row gap-8">
//             {/* Sidebar List */}
//             <div className="lg:w-1/3 flex flex-col gap-3">
//               {Object.keys(solutionsData).map((key) => (
//                 <button
//                   key={key}
//                   onClick={() => { setActiveTab(key); setOpenAccordion(null); }}
//                   className={`flex items-center justify-between p-4 rounded-xl font-bold transition-all text-left ${
//                     activeTab === key 
//                     ? "bg-gray-900 text-white shadow-xl" 
//                     : "bg-orange-100 text-gray-700 hover:bg-orange-200"
//                   }`}
//                 >
//                   {key}
//                   <ChevronRight className={`w-5 h-5 transition-transform ${activeTab === key ? "rotate-90" : ""}`} />
//                 </button>
//               ))}
//             </div>

//             {/* Interactive Accordion Content */}
//             <div className="lg:w-2/3 bg-white rounded-3xl p-8 border border-orange-200 shadow-sm">
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">{solutionsData[activeTab].title}</h3>
//               <p className="text-gray-600 mb-8 border-l-4 border-orange-500 pl-4 italic">
//                 {solutionsData[activeTab].desc}
//               </p>

//               <div className="space-y-4">
//                 {solutionsData[activeTab].items.map((item, idx) => (
//                   <div key={idx} className="border-b border-gray-100 last:border-0">
//                     <button 
//                       onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
//                       className="w-full flex items-center justify-between py-4 text-left group"
//                     >
//                       <span className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
//                         {item.title}
//                       </span>
//                       {openAccordion === idx ? <Minus className="text-red-500" /> : <Plus className="text-orange-500" />}
//                     </button>
//                     <div className={`overflow-hidden transition-all duration-300 ${openAccordion === idx ? "max-h-96 pb-4" : "max-h-0"}`}>
//                       <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Client Industries Section - COMPLETELY REDESIGNED */}
//       <section className="py-16 px-4 bg-gradient-to-br from-white via-orange-50 to-white">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-4">
//             Our Client Industries
//           </h2>
//           <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
//             We serve diverse sectors with tailored solutions that drive growth and innovation
//           </p>

//           {/* Grid container with better spacing */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {industries.map((industry, index) => (
//               <div
//                 key={index}
//                 className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-orange-400 transform hover:-translate-y-2 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 {/* Gradient Background Overlay (always visible) */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 group-hover:from-orange-500/10 group-hover:to-red-500/10 transition-all duration-500"></div>

//                 {/* Image Container */}
//                 <div className="relative h-56 overflow-hidden">
//                   {/* Image with zoom effect */}
//                   <img
//                     src={industry.image}
//                     alt={industry.name}
//                     className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 ease-out"
//                   />

//                   {/* Gradient overlay that intensifies on hover */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/60 transition-all duration-500"></div>

//                   {/* Industry name badge - always visible at bottom */}
//                   <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
//                     <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300 drop-shadow-lg">
//                       {industry.name}
//                     </h3>
//                   </div>

//                   {/* Hover overlay with description */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-orange-600/85 via-red-600/85 to-orange-700/85 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm">
//                     <div className="transform scale-90 group-hover:scale-100 transition-transform duration-500">
//                       <p className="text-white text-center text-sm leading-relaxed font-medium">
//                         {industry.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Decorative corner elements */}
//                 <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-orange-400/20 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-red-400/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//                 {/* Animated border glow */}
//                 <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
//                   <div className="absolute inset-0 rounded-2xl shadow-[0_0_20px_rgba(249,115,22,0.5)] animate-pulse"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Highlighting Our Recently Delivered Solutions */}
//       <section className="py-16 px-4 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
//               Highlighting Our Recently Delivered Solutions
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {recentProjects.map((item, idx) => (
//               <div
//                 key={idx}
//                 onClick={() => navigate(`/project/${item.id}`)}
//                 className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border-2 border-orange-100 hover:border-orange-400 transform hover:-translate-y-2 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] cursor-pointer"
//                 style={{ animationDelay: `${idx * 100}ms` }}
//               >
//                 {/* Gradient overlay on hover */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-500"></div>

//                 <div className="relative flex flex-col items-center text-center h-full">
//                   {/* Icon Container */}
//                   <div className="mb-4 p-4 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm">
//                     <div className="text-orange-600 transform group-hover:rotate-[-6deg] transition-all duration-500">
//                       {item.icon}
//                     </div>
//                   </div>

//                   <h3 className="text-lg font-bold text-gray-800 leading-snug group-hover:text-orange-600 transition-colors duration-300">
//                     {item.title}
//                   </h3>

//                   {/* Bottom accent line */}
//                   <div className="mt-4 w-12 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full transition-all duration-500 group-hover:w-20"></div>
//                 </div>

//                 {/* Corner decorations */}
//                 <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-orange-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-red-400/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//         {/* Our Achievements Section */}
//       <section className="py-16 px-4">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-12">
//             Our Achievements
//           </h2>

//           <div className="flex flex-wrap justify-center gap-6">
//             {achievements.map((item, index) => (
//               <div 
//                 key={index}
//                 className="relative flex flex-col items-center justify-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-3xl shadow-md hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group overflow-hidden border border-red-200"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
//                 <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"></div>

//                 <div className="relative mb-4 p-3 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-sm group-hover:shadow-md">
//                   <div className="transform group-hover:rotate-[-12deg] transition-all duration-500">
//                     {item.icon}
//                   </div>
//                 </div>

//                 <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 group-hover:from-orange-600 group-hover:to-red-600 bg-clip-text text-transparent mb-1 transition-all duration-300">
//                   <CounterAnimation end={item.value} />
//                   <span>{item.suffix}</span>
//                 </h3>
//                 <p className="text-gray-600 text-xs font-bold text-center uppercase tracking-wider group-hover:text-orange-600 transition-colors duration-300">
//                   {item.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Animation Styles */}
//       <style dangerouslySetInnerHTML={{ __html: `
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}} />
//     </div>
//   );
// };

// export default Home;



import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Building2, 
  Users2, 
  Phone,
  Handshake, 
  Globe2,
  ChevronRight,
  Plus,
  Minus 
} from "lucide-react";

import EmployeeImg from "../assets/Employee.jpeg";
import KalibreImg from "../assets/KalibreGlobal.jpg";
import EducationImg from "../assets/Education.webp";
import HealthcareImg from "../assets/Healthcare.jpg";
import AutomobileImg from "../assets/automobile.jpg";
import HospitalImg from "../assets/Hospital.webp";
import GovernmentImg from "../assets/goverment.jpg";
import ITImg from "../assets/IT.jpg";
import BusinessImg from "../assets/business.webp";
import MarketingImg from "../assets/Marketing.jpg";

// Import Team Member Images
import RajwantImg from "../assets/rajwant.jpg";
import TakshImg from "../assets/taksh.jpg";
import AnkitImg from "../assets/anitk.jpg";
import AbhijeetImg from "../assets/abijeet.jpg";
import JitinImg from "../assets/jitin.jpg";

// Counter Animation Component
const CounterAnimation = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const Home = () => {
  const navigate = useNavigate();

  // States for the Digital Solutions Section
  const [activeTab, setActiveTab] = useState("Mining Operations");
  const [openAccordion, setOpenAccordion] = useState(null);

  const achievements = [
    {
      icon: <Building2 className="w-8 h-8 text-orange-500" strokeWidth={2} />,
      value: 8,
      label: "Offices in India",
      suffix: ""
    },
    {
      icon: <Users2 className="w-8 h-8 text-orange-500" strokeWidth={2} />,
      value: 23000,
      label: "Team",
      suffix: "+"
    },
    {
      icon: <Phone className="w-8 h-8 text-orange-500" strokeWidth={2} />,
      value: 50,
      label: "Industries",
      suffix: "+"
    },
    {
      icon: <Handshake className="w-8 h-8 text-orange-500" strokeWidth={2} />,
      value: 7500,
      label: "Clients",
      suffix: "+"
    },
    {
      icon: <Globe2 className="w-8 h-8 text-orange-500" strokeWidth={2} />,
      value: 7,
      label: "Global Footprints",
      suffix: "+"
    }
  ];

  // Data for the Digital Solutions Section
  const solutionsData = {
    "Mining Operations": {
      title: "Innovating Mining Operations with Digital Solutions",
      desc: "At Kavach Technology, we are committed to enhancing the efficiency and transparency of mining operations through our cutting-edge technology solutions. Our suite of products is designed to streamline processes, ensure safety, and boost productivity at every stage of mining, from extraction to delivery.",
      items: [
        { 
          title: "Digital Logistics Management Solutions (DLMS)", 
          content: "Revolutionizing the movement of goods within mining operations, our Digital Logistics Management Solutions (DLMS) provide real-time tracking, optimized routing, and intelligent analytics. This helps in improving operational efficiency, reducing transit time, and minimizing costs while ensuring safety and regulatory compliance." 
        },
        { 
          title: "Integrated Customer Management Solution", 
          content: "Our Integrated Customer Management Solution offers seamless tracking and management of customer interactions, ensuring that orders, invoicing, and delivery processes are handled effectively. With features like customer profiling, order history, and support tracking, this solution provides a 360-degree view of your customer base." 
        }
      ]
    },
    "Education Management": {
      title: "Revolutionizing Education Management Through Technology",
      desc: "Education is the cornerstone of progress, and managing the education system is as vital as delivering knowledge itself. In a rapidly evolving world, traditional education management systems must adapt to the dynamic needs of learners and institutions. At Kavach Technology, we empower educational institutions with cutting-edge solutions designed to streamline operations, enhance learning experiences, and foster innovation.",
      items: [
        { 
          title: "Admission Automation System", 
          content: "Simplify and streamline the admissions process with our Admission Automation System. From online application submissions to real-time status updates, this system reduces administrative workload, ensures error-free data management, and enhances the applicant's experience." 
        },
        { 
          title: "Scholarship Management System", 
          content: "Our Scholarship Management System ensures transparency and efficiency in administering scholarships. It facilitates application tracking, eligibility verification, fund disbursement, and compliance reporting, ensuring that deserving students receive their benefits seamlessly." 
        }
      ]
    },
    "Food Security & Agriculture": {
      title: "Driving Food Security Through Digital Innovation",
      desc: "Food security is fundamental to a nation's well-being and economic stability. At Kavach Technology, we are committed to enabling efficient, transparent, and tech-driven solutions that address the complexities of agriculture, distribution, and food supply management. Our innovative platforms streamline the entire value chain, from procurement to distribution, ensuring sustainability and accessibility for all.",
      items: [
        { 
          title: "Commodity Auction Automation System", 
          content: "Revolutionize the trading of agricultural commodities with our Commodity Auction Automation System. This solution provides a transparent, real-time auction platform that ensures fair pricing for farmers and buyers, reduces market inefficiencies, and fosters trust in the ecosystem." 
        },
        { 
          title: "Supply Chain Management System", 
          content: "Streamline the movement of agricultural produce with our Supply Chain Management System. This end-to-end solution optimizes storage, transportation, and delivery, ensuring fresh produce reaches its destination efficiently. Real-time tracking and data analytics enhance decision-making and minimize wastage." 
        }
      ]
    },
    "Smart Land & Industry": {
      title: "Empowering Land & Industry with Digital Solutions",
      desc: "Land management and industrial operations are fundamental to economic growth, requiring efficient, transparent, and scalable systems. Kavach Technology provides innovative solutions that streamline land allocation, industrial inspections, CSR monitoring, and more. Our platforms ensure optimized operations, better resource management, and seamless collaboration across multiple sectors.",
      items: [
        { 
          title: "Building Plan Approval System", 
          content: "Simplify the approval process for building plans with our Building Plan Approval System. This solution automates the submission, review, and approval workflows, ensuring faster and more efficient handling of applications." 
        },
        { 
          title: "CSR Monitoring System", 
          content: "Ensure the effective implementation of corporate social responsibility initiatives with our CSR Monitoring System. This platform tracks CSR projects, monitors progress, and measures impact, ensuring transparency and accountability." 
        }
      ]
    },
    "HealthTech Solutions": {
      title: "Transforming Healthcare Through Technology",
      desc: "The healthcare sector requires seamless coordination, efficient resource management, and robust systems to deliver timely and quality care. Kavach Technology offers innovative solutions that address these challenges, empowering healthcare providers and administrators to enhance service delivery and improve patient outcomes.",
      items: [
        { 
          title: "Community Health Worker System", 
          content: "Support grassroots healthcare initiatives with our Community Health Worker System. This solution enables health workers to track patient records, monitor health programs, and ensure timely care delivery in underserved areas, fostering healthier communities." 
        },
        { 
          title: "Drug Distribution & Supply Chain System", 
          content: "Ensure uninterrupted access to essential medicines with our Drug Distribution & Supply Chain System. This platform optimizes inventory management, tracks distribution in real time, and reduces wastage, ensuring critical drugs reach the right locations on time." 
        }
      ]
    },
    "Marketing & Communication": {
      title: "Revolutionizing Marketing and Communication",
      desc: "In today's fast-paced digital world, effective communication and marketing strategies are pivotal for business success. Kavach Technology offers advanced solutions that empower organizations to engage customers, streamline operations, and enhance decision-making. Our tools are designed to create impactful interactions and drive superior outcomes.",
      items: [
        { 
          title: "Cloud Contact Center", 
          content: "Transform customer service with our Cloud Contact Center solution. It enables businesses to manage omnichannel communications, optimize workflows, and ensure a seamless customer experience—all through a scalable, cloud-based platform." 
        },
        { 
          title: "Conversational AI", 
          content: "Enhance customer engagement with our Conversational AI solutions. From intelligent chatbots to virtual assistants, this technology delivers personalized, 24/7 support, automating routine tasks while ensuring meaningful interactions." 
        }
      ]
    }
  };

  const industries = [
    { 
      name: "Education", 
      image: EducationImg,
      description: "Empowering the next generation through innovative educational technology. We specialize in transforming traditional classrooms into interactive digital learning environments, providing smart infrastructure and comprehensive management systems."
    },
    { 
      name: "Health Care", 
      image: HealthcareImg,
      description: "Delivering world-class healthcare support through cutting-edge medical technology and facility management. We ensure patient safety and care excellence by integrating sophisticated health management systems that allow providers to focus on clinical."
    },
    { 
      name: "Automobile", 
      image: AutomobileImg,
      description: "Driving manufacturing excellence in the automotive sector with precision-engineered solutions. We support global auto manufacturers with state-of-the-art facility management and technical infrastructure that meets the rigorous demands of modern production."
    },
    { 
      name: "Hospital", 
      image: HospitalImg,
      description: "Comprehensive hospital management solutions designed for 24/7 seamless operations. From meticulous facility maintenance to critical infrastructure support, we ensure your medical environment remains safe, sterile, and fully functional, allowing for uninterrupted."
    },
    { 
      name: "Government", 
      image: GovernmentImg,
      description: "Supporting public sector digital transformation through robust infrastructure and security solutions. We partner with government agencies to enhance citizen services and operational transparency, building the foundations for smart cities."
    },
    { 
      name: "IT Industries", 
      image: ITImg,
      description: "Leading-edge IT infrastructure and comprehensive technology services for the digital age. From high-tier data centers to secure cloud hosting, we power the digital ecosystem of modern enterprises, providing the scalable and secure technical."
    },
    { 
      name: "Business", 
      image: BusinessImg,
      description: "Enabling sustainable business growth and peak operational efficiency across all corporate sectors. Our integrated facility management and customized professional solutions allow organizations to focus entirely on their core business goals while we manage their entire physical."
    },
    { 
      name: "Marketing", 
      image: MarketingImg,
      description: "Strategic marketing and branding solutions that elevate your presence in a competitive global market. We create high-impact, data-driven campaigns and brand strategies that resonate deeply with target audiences, driving measurable business growth through creative digital transformation."
    }
  ];

  const recentProjects = [
    {
      id: "intelligent-traffic-management",
      title: "Intelligent Traffic Management System",
      icon: <Globe2 className="w-8 h-8" />,
    },
    {
      id: "emergency-call-box",
      title: "Emergency Call Box",
      icon: <Phone className="w-8 h-8" />,
    },
    {
      id: "gis-solution-mining",
      title: "GIS Solution For Mining",
      icon: <Building2 className="w-8 h-8" />,
    },
    {
      id: "payroll-solutions",
      title: "360 Degree Payroll Solutions",
      icon: <Users2 className="w-8 h-8" />,
    },
  ];

  // Team Members Data
  const teamMembers = [
    {
      id: 'rajwant-rai',
      name: 'Dr. Rajwant Rai',
      position: 'Chairman, Kavach Group',
      image: RajwantImg
    },
    {
      id: 'taksh-raval',
      name: 'Mr. Taksh Raval',
      position: 'Director',
      image: TakshImg
    },
    {
      id: 'ankit-sudrania',
      name: 'CA Ankit Sudrania',
      position: 'Chief Financial Officer (CFO)',
      image: AnkitImg
    },
    {
      id: 'abhijeet-wadikar',
      name: 'Mr. Abhijeet Wadikar',
      position: 'Chief Technology Officer (CTO)',
      image: AbhijeetImg
    },
    {
      id: 'jitin-patel',
      name: 'Mr. Jitin Patel',
      position: 'Chief Operating Officer (COO)',
      image: JitinImg
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 pt-[76px]">
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight mb-8 drop-shadow-sm">
                <span className="text-gray-900 block leading-none">Kavach Global</span>
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent block leading-none -mt-1">
                  Konnects
                </span>
              </h1>

              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                The Kavach Group is a leading conglomerate providing
                comprehensive, integrated solutions across a wide range of
                industries. Our expertise spans{" "}
                <strong>
                  Facility Management, ICT Infrastructure, Healthcare, Data
                  Center VPS, Power & Utilities, Cloud Hosting, Server
                  Colocation, HR Outsourcing, IT Services, Communication
                  Technologies, and Data-Driven Analytics.
                </strong>
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                By leveraging the combined strengths of{" "}
                <strong>Kavach, Kalibrc, and Fact IT Solutions</strong>, we
                offer end-to-end, customized solutions that meet the dynamic
                needs of today's businesses.
              </p>

              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-red-600 text-white rounded-lg font-semibold shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse hover:animate-none"
              >
                Get Started
              </Link>
            </div>

            {/* Right Side Images */}
            <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
              <div className="absolute top-0 left-0 w-2/3 z-10 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src={KalibreImg}
                  alt="Kalibre Global"
                  className="rounded-2xl shadow-2xl border-4 border-white object-cover w-full h-64 md:h-80"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-2/3 z-20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src={EmployeeImg}
                  alt="Employee"
                  className="rounded-2xl shadow-2xl border-4 border-white object-cover w-full h-64 md:h-80"
                />
              </div>
              <div className="absolute w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Kavach Technology Digital Solutions Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-12">
            Kavach Technology Digital Solutions
          </h2>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar List */}
            <div className="lg:w-1/3 flex flex-col gap-3">
              {Object.keys(solutionsData).map((key) => (
                <button
                  key={key}
                  onClick={() => { setActiveTab(key); setOpenAccordion(null); }}
                  className={`flex items-center justify-between p-4 rounded-xl font-bold transition-all text-left ${
                    activeTab === key 
                    ? "bg-gray-900 text-white shadow-xl" 
                    : "bg-orange-100 text-gray-700 hover:bg-orange-200"
                  }`}
                >
                  {key}
                  <ChevronRight className={`w-5 h-5 transition-transform ${activeTab === key ? "rotate-90" : ""}`} />
                </button>
              ))}
            </div>

            {/* Interactive Accordion Content */}
            <div className="lg:w-2/3 bg-white rounded-3xl p-8 border border-orange-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{solutionsData[activeTab].title}</h3>
              <p className="text-gray-600 mb-8 border-l-4 border-orange-500 pl-4 italic">
                {solutionsData[activeTab].desc}
              </p>

              <div className="space-y-4">
                {solutionsData[activeTab].items.map((item, idx) => (
                  <div key={idx} className="border-b border-gray-100 last:border-0">
                    <button 
                      onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                      className="w-full flex items-center justify-between py-4 text-left group"
                    >
                      <span className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                        {item.title}
                      </span>
                      {openAccordion === idx ? <Minus className="text-red-500" /> : <Plus className="text-orange-500" />}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openAccordion === idx ? "max-h-96 pb-4" : "max-h-0"}`}>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Client Industries Section - COMPLETELY REDESIGNED */}
      <section className="py-16 px-4 bg-gradient-to-br from-white via-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-4">
            Our Client Industries
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We serve diverse sectors with tailored solutions that drive growth and innovation
          </p>

          {/* Grid container with better spacing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-orange-400 transform hover:-translate-y-2 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Background Overlay (always visible) */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 group-hover:from-orange-500/10 group-hover:to-red-500/10 transition-all duration-500"></div>

                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  {/* Image with zoom effect */}
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient overlay that intensifies on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/60 transition-all duration-500"></div>

                  {/* Industry name badge - always visible at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300 drop-shadow-lg">
                      {industry.name}
                    </h3>
                  </div>

                  {/* Hover overlay with description */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/85 via-red-600/85 to-orange-700/85 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm">
                    <div className="transform scale-90 group-hover:scale-100 transition-transform duration-500">
                      <p className="text-white text-center text-sm leading-relaxed font-medium">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-orange-400/20 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-red-400/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl shadow-[0_0_20px_rgba(249,115,22,0.5)] animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlighting Our Recently Delivered Solutions */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              Highlighting Our Recently Delivered Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentProjects.map((item, idx) => (
              <div
                key={idx}
                onClick={() => navigate(`/project/${item.id}`)}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border-2 border-orange-100 hover:border-orange-400 transform hover:-translate-y-2 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] cursor-pointer"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-500"></div>

                <div className="relative flex flex-col items-center text-center h-full">
                  {/* Icon Container */}
                  <div className="mb-4 p-4 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm">
                    <div className="text-orange-600 transform group-hover:rotate-[-6deg] transition-all duration-500">
                      {item.icon}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 leading-snug group-hover:text-orange-600 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Bottom accent line */}
                  <div className="mt-4 w-12 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full transition-all duration-500 group-hover:w-20"></div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-orange-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-red-400/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section - The Team Turning Ideas into Reality */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-4">
            The Team Turning Ideas into Reality
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Meet the visionary leaders driving innovation and excellence at Kavach Global
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setTimeout(() => navigate(`/team/${member.id}`), 100);
                }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] border-2 border-orange-100 hover:border-orange-400"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* LinkedIn Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium">
                      {member.position}
                    </p>
                  </div>

                  {/* View Profile Button */}
                  <div className="flex items-center justify-center pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-orange-600 group-hover:text-orange-700 transition-colors">
                      <span className="text-sm font-semibold">View Profile</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-orange-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Corner Decorations */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-red-400/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Achievements Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-12">
            Our Achievements
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {achievements.map((item, index) => (
              <div 
                key={index}
                className="relative flex flex-col items-center justify-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-3xl shadow-md hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group overflow-hidden border border-red-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"></div>

                <div className="relative mb-4 p-3 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-sm group-hover:shadow-md">
                  <div className="transform group-hover:rotate-[-12deg] transition-all duration-500">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 group-hover:from-orange-600 group-hover:to-red-600 bg-clip-text text-transparent mb-1 transition-all duration-300">
                  <CounterAnimation end={item.value} />
                  <span>{item.suffix}</span>
                </h3>
                <p className="text-gray-600 text-xs font-bold text-center uppercase tracking-wider group-hover:text-orange-600 transition-colors duration-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animation Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
};

export default Home;