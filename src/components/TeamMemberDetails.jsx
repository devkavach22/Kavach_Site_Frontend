import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Linkedin, CheckCircle2 } from 'lucide-react';

// Import images
import RajwantImg from '../assets/rajwant.jpg';
import TakshImg from '../assets/taksh.jpg';
import AnkitImg from '../assets/anitk.jpg';
import AbhijeetImg from '../assets/abijeet.jpg';
import JitinImg from '../assets/jitin.jpg';

const TeamMemberDetails = () => {
  const { memberId } = useParams();
  const navigate = useNavigate();

  // Scroll to top IMMEDIATELY when component mounts or memberId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [memberId]);

  const teamMembersData = {
    'rajwant-rai': {
      name: 'Dr. Rajwant Rai',
      position: 'Chairman, Kavach Group',
      image: RajwantImg,
      linkedin: 'https://www.linkedin.com/in/dr-rajwant-rai-3111533b/',
      bio: 'Dr. Rajwant Rai is a seasoned professional with over 20 years of leadership experience in strategic business operations. As the Managing Director of Kavach Global, he has driven operational excellence and established the organization as a leader in facility management services. He also serves as a Director at Konvert HR and Kalibre Global, where he has revolutionized payroll services and talent acquisition strategies.',
      achievements: [
        'Over 20 years of leadership experience in strategic business operations',
        'Established Kavach Global as a leader in facility management services',
        'Revolutionized payroll services and talent acquisition at Konvert HR and Kalibre Global',
        'Former Project Manager at Gujarat Narmada Valley Fertilizers and Chemicals Limited',
        'Expert in managing complex, large-scale projects with precision and efficiency',
        'Known for visionary leadership and transformative approach to business'
      ],
      expertise: ['Strategic Business Operations', 'Facility Management', 'Negotiation', 'Strategic Planning', 'Project Management', 'Business Innovation'],
      education: 'Master of Computer Applications (MCA), Babu Banarasi Das Institute of Technology and Management',
      quote: 'Blending strategy and innovation to achieve enduring success in dynamic industries.'
    },
    'taksh-raval': {
      name: 'Mr. Taksh Raval',
      position: 'Group Marketing Director (CMO)',
      image: TakshImg,
      linkedin: 'https://www.linkedin.com/in/taksh-rawal-a38626150/',
      bio: 'Taksh Raval is a seasoned leader in workforce solutions and business development, with over 9 years of expertise in recruitment, industrial manpower, and facility management. As the Director of Kavach Global and Kalibre Management Services, he has been instrumental in bridging the gap between global talent and top-tier organizations.',
      achievements: [
        'Over 9 years of expertise in recruitment and workforce solutions',
        'Director of Kavach Global and Kalibre Management Services',
        'Managed high-profile events like Dubai International Hot Air Balloon Festival',
        'Instrumental in bridging global talent with top-tier organizations',
        'Oversees large-scale operations delivering tailored workforce solutions',
        'Passionate about empowering youth through entrepreneurship and innovation'
      ],
      expertise: ['Workforce Solutions', 'Business Development', 'Recruitment', 'Client Interface', 'Marketing Strategy', 'Operations Management', 'Event Management'],
      education: 'Business Management',
      quote: 'Building strong relationships and fostering growth to enable businesses to thrive.'
    },
    'ankit-sudrania': {
      name: 'CA Ankit Sudrania',
      position: 'Group Chief Financial Officer (CFO)',
      image: AnkitImg,
      linkedin: 'https://www.linkedin.com/in/ca-ankit-sudrania-5aa68729/',
      bio: 'CA Ankit Sudrania is a seasoned finance professional and accomplished Chartered Accountant with over a decade of experience in banking, finance, and strategic management. Currently serving as the Group Chief Financial Officer for Kavach, Kalibre, and Konvert, he oversees financial strategy, investor relations, and corporate governance, driving sustainable growth across multiple verticals.',
      achievements: [
        'Founder of GaHa Partners Private Limited (Financial Advisory)',
        'Managed assets worth ₹30,000 crores during tenure at Canara Bank',
        'Expert in corporate credit appraisals, risk management, and portfolio optimization',
        'Specialized in due diligence and debt syndication for NBFCs and manufacturing industries',
        'Fluent in five languages including Hindi, Gujarati, and Marwari',
        'Advanced management programs from MDI Gurgaon and IIM Indore'
      ],
      expertise: ['Financial Strategy', 'Banking & Finance', 'Investor Relations', 'Corporate Governance', 'Risk Management', 'Due Diligence', 'Debt Syndication'],
      education: 'Chartered Accountant (ICAI), CAIIB (IIBF), Advanced Management Programs (MDI Gurgaon, IIM Indore)',
      quote: 'Driving sustainable growth through financial excellence and strategic innovation.'
    },
    'abhijeet-wadikar': {
      name: 'Mr. Abhijeet Wadekar',
      position: 'Chief Technology Officer (CTO)',
      image: AbhijeetImg,
      linkedin: 'https://www.linkedin.com/in/abhijeetwadkkar/',
      bio: 'Abhijeet Wadkkar serves as the Chief Technology Officer at Kavach Global, where he leads the company\'s Global Technology Growth efforts across diverse geographical regions. With over 23 years of experience in Information Technology, Abhijeet\'s career includes roles at Wipro, Cisco & Lavasa joint venture, where he most recently held the position of Head Technology.',
      achievements: [
        'Over 23 years of experience in Information Technology',
        'Former Head of Technology at Cisco & Lavasa joint venture',
        'Led technology solutions for large townships (Lavasa, Panchashil, Welspun, Lanco)',
        'Implemented Smart & Safe City projects for Surat, Meghalaya, Pune, Silvassa',
        'Delivered Oil & Gas sector projects for IOCL, HPCL, BARC, ISRO, RDSO',
        'Designed and implemented turnkey technology for 110+ Accor Group hotels'
      ],
      expertise: ['Technology Strategy', 'Digital Transformation', 'Smart City Solutions', 'Enterprise Solutions', 'SCADA Systems', 'Team Building', 'Innovation'],
      education: 'Information Technology',
      quote: 'Transforming businesses with digital technologies through strategic collaboration and innovative thinking.'
    },
    'jitendra-kumar': {
      name: 'Mr. Jitendra Kumar',
      position: 'Director – Operations and Business Development',
      image: JitinImg,
      linkedin: 'https://www.linkedin.com/in/jitendra-kumar-7578aa41/',
      bio: 'Jitendra Kumar is a seasoned professional with over 35 years of diverse experience across telecom, infrastructure, and operations. Currently serving as the Director – Operations and Business Development, he brings a strategic vision backed by decades of hands-on expertise in executing and managing complex, large-scale projects.',
      achievements: [
        'Over 35 years of experience in telecom, infrastructure, and operations',
        'Former Circle Head (Gujarat) at Pratap Beckhaul Technologies Pvt. Ltd.',
        'Instrumental role as Sr. Manager during Jio 4G rollout',
        'Led OFC project execution for Maharashtra at Sterlite Technologies',
        'Expertise in data center infrastructure, O&M, and critical infrastructure management',
        'Combined experience in aviation and admin operations'
      ],
      expertise: ['Telecom Operations', 'Infrastructure Management', 'Business Development', 'Project Execution', 'OFC & Tower Construction', 'Data Center Infrastructure', 'Strategic Planning'],
      education: 'Engineering and Management',
      quote: 'Emphasizing efficiency, innovation, and result-oriented execution to drive growth and operational success.'
    }
  };

  const member = teamMembersData[memberId];

  if (!member) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 pt-[76px] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Team Member Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            Back to Team
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 pt-[76px]">
      {/* Back Button - Redesigned */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <button
          onClick={() => navigate('/')}
          className="group flex items-center gap-3 px-6 py-3 bg-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 text-gray-700 hover:text-white rounded-xl font-semibold shadow-md hover:shadow-xl transition-all duration-300 border-2 border-orange-200 hover:border-transparent transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to Team</span>
        </button>
      </div>

      {/* Hero Section - Redesigned */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left Side - Image Card */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="relative group">
                  {/* Main Image Container */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-100 to-orange-50">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-[600px] object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent"></div>
                    
                    {/* Name Badge at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
                      <h1 className="text-3xl font-bold text-white mb-2">
                        {member.name}
                      </h1>
                      <p className="text-orange-400 font-semibold text-lg">
                        {member.position}
                      </p>
                    </div>

                    {/* Decorative Corner Elements */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-500/30 to-transparent"></div>
                  </div>

                  {/* Floating Background Elements */}
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-orange-400 rounded-full blur-3xl opacity-20 -z-10 group-hover:opacity-30 transition-opacity"></div>
                  <div className="absolute -top-8 -left-8 w-40 h-40 bg-red-400 rounded-full blur-3xl opacity-20 -z-10 group-hover:opacity-30 transition-opacity"></div>
                  
                  {/* Border Accent */}
                  <div className="absolute inset-0 rounded-3xl border-4 border-white/50 pointer-events-none"></div>
                </div>

                {/* LinkedIn Button - Below Image */}
                <div className="mt-6">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                    <span className="font-semibold text-lg">Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Quote Card */}
              <div className="relative p-8 bg-gradient-to-br from-orange-50 to-white rounded-3xl shadow-lg border-l-8 border-orange-500 transform hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute top-6 left-6 text-orange-200 opacity-50">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                </div>
                <p className="text-gray-800 text-xl leading-relaxed italic font-medium pl-8">
                  {member.quote}
                </p>
              </div>

              {/* Bio Section */}
              <div className="bg-white rounded-3xl shadow-lg p-8 transform hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
                  About
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Quick Stats/Highlights */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold mb-2">
                    {member.achievements.length}+
                  </div>
                  <div className="text-orange-100 font-medium">
                    Key Achievements
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold mb-2">
                    {member.expertise.length}+
                  </div>
                  <div className="text-orange-100 font-medium">
                    Areas of Expertise
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section - Redesigned */}
      <section className="py-16 px-4 bg-gradient-to-br from-white via-orange-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Key Achievements
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {member.achievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-orange-100 hover:border-orange-400 transform hover:-translate-y-2 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Content */}
                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    {achievement}
                  </p>
                </div>

                {/* Corner Decoration */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-orange-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section - Redesigned */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Areas of Expertise
            </h2>
          </div>

          {/* Expertise Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {member.expertise.map((skill, index) => (
              <div
                key={index}
                className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Shimmer Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <span className="relative z-10">{skill}</span>
              </div>
            ))}
          </div>

          {/* Education Card */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 rounded-3xl shadow-xl p-10 border-2 border-orange-200 overflow-hidden group hover:shadow-2xl transition-all duration-500">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-transparent rounded-full blur-3xl -z-0 group-hover:scale-150 transition-transform duration-1000"></div>
              
              {/* Icon */}
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <svg className="w-32 h-32 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82Z"/>
                </svg>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Education</h3>
                  </div>
                </div>
                
                <p className="text-gray-800 text-xl leading-relaxed font-medium">
                  {member.education}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-200/30 to-transparent rounded-full blur-2xl"></div>
            </div>
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

export default TeamMemberDetails;