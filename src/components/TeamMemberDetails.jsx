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

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [memberId]);

  const teamMembersData = {
    'rajwant-rai': {
      name: 'Dr. Rajwant Rai',
      position: 'Chairman, Kavach Group',
      image: RajwantImg,
      linkedin: '#',
      bio: 'Dr. Rajwant Rai is a visionary leader with extensive experience in building and scaling technology-driven businesses. As the Chairman of Kavach Group, he has been instrumental in establishing the company as a leading provider of integrated solutions across multiple industries. His strategic vision and commitment to innovation have shaped the company\'s growth trajectory and market positioning.',
      achievements: [
        'Founded Kavach Group with a vision to transform industries through technology',
        '20+ years of entrepreneurial experience in diverse sectors',
        'Pioneer in integrated facility management solutions in India',
        'Champion of innovation and sustainable business practices',
        'Established strategic partnerships with global technology leaders',
        'Recipient of multiple industry awards for business excellence'
      ],
      expertise: ['Strategic Leadership', 'Business Development', 'Innovation Management', 'Corporate Governance', 'Stakeholder Relations', 'Digital Transformation'],
      education: 'Doctorate in Business Administration',
      quote: 'Innovation is not just about technology; it\'s about creating value that transforms lives and businesses.'
    },
    'taksh-raval': {
      name: 'Mr. Taksh Raval',
      position: 'Director',
      image: TakshImg,
      linkedin: '#',
      bio: 'Mr. Taksh Raval is a dynamic leader driving operational excellence and strategic growth across multiple business verticals at Kavach Group. With a keen eye for market opportunities and a commitment to delivering exceptional value, he has been pivotal in expanding the company\'s footprint and strengthening its market position.',
      achievements: [
        'Spearheading digital transformation initiatives across the organization',
        'Established key partnerships with leading corporations across industries',
        'Led successful expansion into new market segments and geographies',
        'Champion of customer-centric solutions and service excellence',
        'Implemented innovative operational strategies that improved efficiency by 40%',
        'Built and mentored high-performing teams across multiple functions'
      ],
      expertise: ['Operations Management', 'Strategic Planning', 'Client Relations', 'Team Leadership', 'Business Analytics', 'Process Optimization'],
      education: 'MBA in Operations and Strategy',
      quote: 'Success in business comes from understanding customer needs and delivering solutions that exceed expectations.'
    },
    'ankit-sudrania': {
      name: 'CA Ankit Sudrania',
      position: 'Chief Financial Officer (CFO)',
      image: AnkitImg,
      linkedin: '#',
      bio: 'CA Ankit Sudrania is a seasoned financial strategist ensuring robust fiscal management and sustainable growth trajectories for Kavach Group. His expertise in financial planning, risk management, and corporate governance has been crucial in maintaining the company\'s financial health and supporting its ambitious expansion plans.',
      achievements: [
        'Optimized financial operations across all group companies',
        'Implemented advanced financial planning and analysis systems',
        'Ensured compliance and governance excellence across operations',
        'Drove cost optimization initiatives resulting in 25% efficiency gains',
        'Successfully managed multiple funding rounds and strategic investments',
        'Established best-in-class financial reporting and control systems'
      ],
      expertise: ['Financial Planning & Analysis', 'Risk Management', 'Corporate Finance', 'Compliance & Governance', 'Investment Strategy', 'Treasury Management'],
      education: 'Chartered Accountant, B.Com',
      quote: 'Financial discipline and strategic thinking are the cornerstones of sustainable business growth.'
    },
    'abhijeet-wadikar': {
      name: 'Mr. Abhijeet Wadikar',
      position: 'Chief Technology Officer (CTO)',
      image: AbhijeetImg,
      linkedin: '#',
      bio: 'Mr. Abhijeet Wadikar is a technology visionary architecting cutting-edge solutions that drive digital innovation at Kavach Group. His expertise in emerging technologies and commitment to excellence have positioned the company at the forefront of technological advancement in the industry.',
      achievements: [
        'Led development of enterprise-grade platforms serving millions of users',
        'Pioneered AI and cloud-based solutions for diverse industry applications',
        'Built and scaled high-performing technical teams of 500+ professionals',
        'Established robust technology infrastructure supporting 24/7 operations',
        'Implemented DevOps and agile methodologies across the organization',
        'Recognized as a thought leader in digital transformation'
      ],
      expertise: ['Technology Strategy', 'Cloud Computing', 'AI & Machine Learning', 'Digital Innovation', 'Cybersecurity', 'Enterprise Architecture'],
      education: 'B.Tech in Computer Science, M.Tech in AI',
      quote: 'Technology is the enabler, but it\'s the vision and execution that creates true transformation.'
    },
    'jitin-patel': {
      name: 'Mr. Jitin Patel',
      position: 'Chief Operating Officer (COO)',
      image: JitinImg,
      linkedin: '#',
      bio: 'Mr. Jitin Patel is a strategic operations leader ensuring seamless execution and operational excellence across all Kavach Group ventures. His expertise in process optimization and team management has been instrumental in scaling the organization\'s operations efficiently.',
      achievements: [
        'Streamlined operations across 8+ office locations in India',
        'Implemented best practices resulting in 35% efficiency improvement',
        'Led successful integration of acquired companies',
        'Built a culture of continuous improvement and innovation',
        'Established robust quality management systems',
        'Drove customer satisfaction scores to industry-leading levels'
      ],
      expertise: ['Operations Management', 'Process Optimization', 'Supply Chain', 'Quality Management', 'Team Development', 'Strategic Planning'],
      education: 'MBA in Operations Management, B.E. in Industrial Engineering',
      quote: 'Operational excellence is not just about efficiency; it\'s about creating value at every touchpoint.'
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
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Team
        </button>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-400 rounded-full blur-3xl opacity-30 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-400 rounded-full blur-3xl opacity-30 -z-10"></div>
            </div>

            {/* Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                {member.name}
              </h1>
              <p className="text-xl text-orange-600 font-semibold mb-6">
                {member.position}
              </p>

              <div className="mb-6 p-6 bg-white rounded-2xl shadow-md border-l-4 border-orange-500">
                <p className="text-gray-700 leading-relaxed italic">
                  "{member.quote}"
                </p>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {member.bio}
              </p>

              <div className="flex items-center gap-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {member.achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-orange-500 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Areas of Expertise
          </h2>
          <div className="flex flex-wrap gap-4">
            {member.expertise.map((skill, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-12 p-8 bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-md border border-orange-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
            <p className="text-gray-700 text-lg">{member.education}</p>
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