import React from 'react'
import EducationImg from "../assets/Education.webp";
import HealthcareImg from "../assets/Healthcare.jpg";
import AutomobileImg from "../assets/automobile.jpg";
import HospitalImg from "../assets/Hospital.webp";
import GovernmentImg from "../assets/goverment.jpg";
import ITImg from "../assets/IT.jpg";
import BusinessImg from "../assets/business.webp";
import MarketingImg from "../assets/Marketing.jpg";
import { Link } from 'react-router-dom';


function Services() {
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

    const whyChooseUs = [
        {
            title: "We think differently",
            description: "We think differently at Kavach Technology, crafting innovative solutions that empower, protect, and transform the way you thrive. Our unique approach combines creative problem-solving with cutting-edge technology to deliver solutions that not only meet your current needs but anticipate future challenges.",
            icon: "💡",
            color: "from-orange-400 to-red-400"
        },
        {
            title: "High quality projects",
            description: "At Kavach Technology, we deliver high-quality projects, blending innovation, precision, and excellence to create solutions that inspire and protect. Every project undergoes rigorous quality control measures and is executed by certified professionals who bring years of industry experience.",
            icon: "⭐",
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Expert team members",
            description: "Kavach Technology boasts expert team members, combining unmatched skills, innovation, and dedication to deliver exceptional solutions for every challenge. Our diverse team of industry specialists, certified engineers, and technology experts brings a wealth of knowledge across multiple domains.",
            icon: "👥",
            color: "from-orange-600 to-red-600"
        }
    ];

    const whyChooseUsPart2 = [
        {
            title: "24/7 Customer Support",
            description: "We provide round-the-clock customer support to ensure your operations run smoothly without interruption. Our dedicated support team is always available to address your concerns, resolve issues promptly, and provide technical assistance whenever you need it, ensuring complete peace of mind.",
            icon: "🎧",
            color: "from-blue-500 to-indigo-500"
        },
        {
            title: "Innovative Technology",
            description: "Leveraging the latest technological advancements and industry best practices, we implement cutting-edge solutions that drive efficiency and productivity. From AI-powered analytics to IoT integration, we ensure your business stays at the forefront of technological innovation.",
            icon: "🚀",
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Proven Track Record",
            description: "With years of successful project implementations across diverse industries, we have built a reputation for excellence and reliability. Our portfolio showcases hundreds of satisfied clients and completed projects that demonstrate our commitment to delivering results that exceed expectations.",
            icon: "🏆",
            color: "from-green-500 to-teal-500"
        }
    ];

    const testimonials = [
        {
            company: "Troikka Pharma",
            logo: "🏢",
            review: "Kavach Global Konnects Pvt. Ltd. has been an exceptional partner in facility management for Troikka Pharma. Their proactive approach, timely services, and attention to detail have ensured a seamless operation of our premises. The team is professional, reliable, and always goes the extra mile to deliver excellence. We highly recommend their services.",
            rating: 4.9,
            reviews: "Reviews"
        },
        {
            company: "Lincoln Pharma",
            logo: "🏢",
            review: "The expertise and dedication of Kavach Global Konnects have significantly improved the efficiency of our facility management. Their innovative solutions and impeccable execution have made a tangible impact on our workplace environment. It's a pleasure to work with a team that prioritizes quality and customer satisfaction.",
            rating: 4.9,
            reviews: "Reviews"
        },
        {
            company: "Rubberking Group",
            logo: "🏢",
            review: "We have been availing Kavach Global's facility management services for over two years, and their professionalism and commitment have been commendable. From housekeeping to specialized maintenance tasks, they have consistently exceeded our expectations. Kavach Global truly sets the benchmark for quality facility management.",
            rating: 4.9,
            reviews: "Reviews"
        },
        {
            company: "Marengo Asia",
            logo: "🏢",
            review: "Kavach Global Konnects Pvt. Ltd. has been instrumental in ensuring the smooth functioning of our facility. Their team's proactive approach to problem-solving and commitment to maintaining the highest standards have been invaluable. It's rare to find a service provider so dedicated to excellence.",
            rating: 4.9,
            reviews: "Reviews"
        }
    ];

    return (
        <>
            {/* Industries Section */}
            <section className="py-12 px-4 bg-gradient-to-br from-white via-orange-50 to-white mt-15">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-3">
                        Our Client Industries
                    </h2>
                    <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
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

            {/* Why Choose Us Section - Part 1 */}
            <section className="py-12 px-4 bg-gradient-to-br from-orange-50 via-white to-orange-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <p className="text-orange-500 font-semibold mb-2 uppercase tracking-wider text-sm">
                            WHY CHOOSE US
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Providing the best services
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChooseUs.map((item, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-orange-300 transform hover:-translate-y-3 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                {/* Gradient background overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Icon with animation */}
                                <div className={`relative w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                                    <span className="animate-pulse">{item.icon}</span>
                                </div>

                                {/* Content */}
                                <div className="relative">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Decorative corner */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-100/50 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section - Part 2 */}
            <section className="py-12 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            More Reasons to Choose Kavach
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Discover additional advantages that set us apart from the competition
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChooseUsPart2.map((item, index) => (
                            <div
                                key={index}
                                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-orange-300 transform hover:-translate-y-3 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                {/* Animated background gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>

                                {/* Icon with 3D effect */}
                                <div className="relative w-16 h-16 mb-6 rounded-xl bg-white flex items-center justify-center text-3xl shadow-md transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                                    <span className="filter group-hover:drop-shadow-lg transition-all duration-300">{item.icon}</span>
                                </div>

                                {/* Content */}
                                <div className="relative">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Animated corner accent */}
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-200/30 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Pulse effect on hover */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-20 animate-pulse`}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-12 px-4 bg-gradient-to-br from-gray-50 via-orange-50/30 to-gray-50">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-10">
                        <p className="text-orange-500 font-semibold mb-2 uppercase tracking-wider text-sm">
                            OUR CLIENTS FEEDBACK
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            What they're talking about us
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-200 group"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                                            {testimonial.logo}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {testimonial.company}
                                        </h3>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border-2 border-orange-200 flex items-center justify-center group-hover:bg-orange-50 transition-colors duration-300">
                                        <span className="text-orange-500 text-xl">→</span>
                                    </div>
                                </div>

                                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-5">
                                    {testimonial.review}
                                </p>

                                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg key={star} className="w-5 h-5 fill-orange-400" viewBox="0 0 20 20">
                                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-gray-900 font-bold">{testimonial.rating}</span>
                                    <span className="text-gray-500 text-sm">{testimonial.reviews}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

           {/* Call to Action Section */}
<section className="relative py-20 px-4 bg-gradient-to-br from-orange-900 via-red-800 to-orange-800 overflow-hidden">
    {/* Top wave border - Match with other sections */}
    <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
    </div>

    {/* Decorative Glow Orbs for Depth */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-500 rounded-full blur-3xl opacity-10"></div>

    <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of satisfied clients who trust Kavach Global Konnects for their facility management and technology solutions.
        </p>
        <Link to="/contact">
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-orange-500/30 transform hover:scale-105 transition-all duration-300">
                Get Started Today
            </button>
        </Link>
    </div>
</section>
        </>
    )
}

export default Services