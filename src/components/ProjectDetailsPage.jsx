// src/pages/ProjectDetailsPage.jsx
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Globe2, Phone, Building2, Users2 } from 'lucide-react';

const ProjectDetailsPage = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Project data
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
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 pt-[76px] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Project Not Found</h1>
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 pt-[76px]">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold mb-8 transition-colors group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </button>

                {/* Header Section - Animated */}
                <div className="bg-white rounded-3xl shadow-lg p-8 mb-8 border-2 border-orange-100 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group">
                    <div className="flex items-center gap-6 mb-6">
                        <div className="p-4 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl text-orange-600 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                            <div className="transform group-hover:rotate-[-6deg] transition-all duration-500">
                                {project.icon}
                            </div>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">{project.title}</h1>
                            <p className="text-gray-600 text-lg">{project.description}</p>
                        </div>
                    </div>
                </div>

                {/* Main Features - Animated */}
                <div
                    className="bg-white rounded-3xl shadow-lg p-8 mb-8 border-2 border-orange-100 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group"
                    style={{ animationDelay: '0.1s' }}
                >
                    <h2 className="text-2xl font-bold text-orange-600 mb-6 group-hover:scale-105 transition-transform duration-300 text-center">Services and Solutions We Offer</h2>
                    <ul className="space-y-3">
                        {project.mainFeatures.map((feature, idx) => (
                            <li
                                key={idx}
                                className="flex items-start gap-3 opacity-0 animate-[fadeInLeft_0.5s_ease-out_forwards] hover:translate-x-2 transition-transform duration-300"
                                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                            >
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                                <span className="text-gray-700">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Sections Grid - Animated */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {project.sections.map((section, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-3xl shadow-lg p-8 border-2 border-orange-100 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] hover:shadow-2xl hover:border-orange-400 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden"
                            style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
                        >
                            {/* Decorative gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-500"></div>

                            {/* Top accent line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                            <div className="relative">
                                <h2 className="text-2xl font-bold text-orange-600 mb-6 group-hover:scale-105 transition-transform duration-300">{section.title}</h2>
                                <ul className="space-y-3">
                                    {section.items.map((item, itemIdx) => (
                                        <li
                                            key={itemIdx}
                                            className="flex items-start gap-3 opacity-0 animate-[fadeInLeft_0.5s_ease-out_forwards] hover:translate-x-2 transition-transform duration-300"
                                            style={{ animationDelay: `${0.4 + idx * 0.1 + itemIdx * 0.05}s` }}
                                        >
                                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0 group-hover:animate-pulse"></div>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Corner decorations */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-red-400/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>

                <div
                    className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8 text-center text-white shadow-xl opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: '0.7s' }}
                >
                    <h2 className="text-3xl font-bold mb-4 transition-transform duration-300 hover:scale-105">Interested in This Solution?</h2>
                    <p className="text-lg mb-6 opacity-90">Contact us to learn how we can customize this solution for your organization</p>
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-orange-50 hover:scale-110 hover:shadow-xl transition-all duration-300 shadow-lg transform"
                    >
                        Get in Touch
                    </button>
                </div>
            </div>

            {/* Animation Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes fadeInUp {
                    from { 
                        opacity: 0; 
                        transform: translateY(30px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0); 
                    }
                }
                
                @keyframes fadeInLeft {
                    from { 
                        opacity: 0; 
                        transform: translateX(-20px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateX(0); 
                    }
                }
            `}} />
        </div>
    );
};

export default ProjectDetailsPage;