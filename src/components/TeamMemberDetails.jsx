
// // Import images
import RajwantImg from '../assets/rajwant.jpg';
import TakshImg from '../assets/taksh.jpg';
import AnkitImg from '../assets/anitk.jpg';
import AbhijeetImg from '../assets/abijeet.jpg';
import JitinImg from '../assets/jitin.jpg';



import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Linkedin, Award, Target, Quote } from 'lucide-react';

// Import images


const TeamMemberDetails = () => {
  const { memberId } = useParams();
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
  }, [memberId]);

  const teamMembersData = {
    'rajwant-rai': {
        name: 'Dr. Rajwant Rai',
        position: 'Chairman, Kavach Group',
        image: RajwantImg,
        linkedin: 'https://www.linkedin.com/in/dr-rajwant-rai-3111533b/',
        bio: 'Dr. Rajwant Rai is a seasoned professional with over 20 years of leadership experience in strategic business operations. As the Managing Director of Kavach Global, he has driven operational excellence and established the organization as a leader in facility management services.',
        achievements: [
          'Over 20 years of leadership experience in strategic business operations',
          'Established Kavach Global as a leader in facility management services',
          'Revolutionized payroll services and talent acquisition',
          'Former Project Manager at GNFC Limited',
          'Expert in managing complex, large-scale projects',
          'Known for visionary leadership and transformative approach'
        ],
        expertise: ['Strategic Business Operations', 'Facility Management', 'Negotiation', 'Strategic Planning', 'Project Management', 'Business Innovation'],
        quote: 'Blending strategy and innovation to achieve enduring success in dynamic industries.'
      },
      'taksh-raval': {
        name: 'Mr. Taksh Raval',
        position: 'Group Marketing Director (CMO)',
        image: TakshImg,
        linkedin: 'https://www.linkedin.com/in/taksh-rawal-a38626150/',
        bio: 'Taksh Raval is a seasoned leader in workforce solutions and business development, with over 9 years of expertise in recruitment, industrial manpower, and facility management.',
        achievements: [
          'Over 9 years of expertise in recruitment and workforce solutions',
          'Director of Kavach Global and Kalibre Management Services',
          'Managed high-profile events like Dubai International Hot Air Balloon Festival',
          'Instrumental in bridging global talent with top-tier organizations',
          'Oversees large-scale operations delivering tailored workforce solutions',
          'Passionate about empowering youth through entrepreneurship'
        ],
        expertise: ['Workforce Solutions', 'Business Development', 'Recruitment', 'Marketing Strategy', 'Operations Management', 'Event Management'],
        quote: 'Building strong relationships and fostering growth to enable businesses to thrive.'
      },
      'ankit-sudrania': {
        name: 'CA Ankit Sudrania',
        position: 'Group Chief Financial Officer (CFO)',
        image: AnkitImg,
        linkedin: 'https://www.linkedin.com/in/ca-ankit-sudrania-5aa68729/',
        bio: 'CA Ankit Sudrania is a seasoned finance professional and Chartered Accountant with over a decade of experience in banking, finance, and strategic management.',
        achievements: [
          'Founder of GaHa Partners Private Limited',
          'Managed assets worth ₹30,000 crores at Canara Bank',
          'Expert in corporate credit appraisals and risk management',
          'Specialized in due diligence and debt syndication',
          'Fluent in five languages including Hindi, Gujarati, and Marwari',
          'Advanced management programs from MDI Gurgaon and IIM Indore'
        ],
        expertise: ['Financial Strategy', 'Banking & Finance', 'Investor Relations', 'Corporate Governance', 'Risk Management', 'Due Diligence'],
        quote: 'Driving sustainable growth through financial excellence and strategic innovation.'
      },
      'abhijeet-wadikar': {
        name: 'Mr. Abhijeet Wadekar',
        position: 'Chief Technology Officer (CTO)',
        image: AbhijeetImg,
        linkedin: 'https://www.linkedin.com/in/abhijeetwadkkar/',
        bio: 'Abhijeet Wadkkar leads Global Technology Growth with over 23 years of experience in IT, including roles at Wipro and Cisco.',
        achievements: [
          'Over 23 years of experience in Information Technology',
          'Former Head of Technology at Cisco & Lavasa joint venture',
          'Led technology solutions for large smart city townships',
          'Implemented Smart & Safe City projects for major Indian cities',
          'Delivered Oil & Gas sector projects for IOCL, HPCL, BARC',
          'Designed turnkey technology for 110+ Accor Group hotels'
        ],
        expertise: ['Technology Strategy', 'Digital Transformation', 'Smart City Solutions', 'Enterprise Solutions', 'SCADA Systems', 'Team Building'],
        quote: 'Transforming businesses with digital technologies through strategic collaboration.'
      },
      'jitendra-kumar': {
        name: 'Mr. Jitendra Kumar',
        position: 'Director – Operations & BD',
        image: JitinImg,
        linkedin: 'https://www.linkedin.com/in/jitendra-kumar-7578aa41/',
        bio: 'Jitendra Kumar brings over 35 years of diverse experience across telecom, infrastructure, and operations to his role as Director.',
        achievements: [
          'Over 35 years of experience in telecom and infrastructure',
          'Former Circle Head (Gujarat) at Pratap Beckhaul Technologies',
          'Instrumental role as Sr. Manager during Jio 4G rollout',
          'Led OFC project execution for Maharashtra at Sterlite Technologies',
          'Expertise in data center and critical infrastructure management',
          'Combined experience in aviation and admin operations'
        ],
        expertise: ['Telecom Operations', 'Infrastructure Management', 'Business Development', 'Project Execution', 'OFC Construction', 'Data Center Infrastructure'],
        quote: 'Emphasizing efficiency and result-oriented execution to drive operational success.'
      }
  };

  const member = teamMembersData[memberId];

  if (!member) {
    return (
      <div className="min-h-screen bg-[#fdfcfb] flex items-center justify-center font-['Barlow']">
        <div className="text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-6 font-['Barlow_Condensed'] uppercase tracking-tight">Member Not Found</h2>
          <button onClick={() => navigate('/')} className="px-8 py-3 bg-orange-600 text-white font-bold rounded-full uppercase tracking-widest text-xs hover:bg-orange-700 transition-all">Back to Team</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdfcfb] text-gray-900 font-['Barlow'] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;0,900;1,800&family=Barlow:wght@400;500;600;700&display=swap');
        
        :root { --org: #e05a00; --org2: #f97316; --dark: #1a2332; }
        .kv-h { font-family:'Barlow Condensed',sans-serif; font-weight:800; text-transform:uppercase; letter-spacing:0.02em; line-height:1; }
        .kv-label { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:0.75rem; letter-spacing:0.25em; text-transform:uppercase; color:var(--org); display:flex; align-items:center; gap:8px; }
        .kv-label::before { content:''; width:10px; height:2px; background:var(--org); }

        .scroll-reveal { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1); }
        .scroll-reveal.is-visible { opacity: 1; transform: translateY(0); }
        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
        
        .profile-mask { border-radius: 40px 10px 40px 10px; overflow: hidden; }
        .glass-card { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(10px); border: 1px solid rgba(224, 90, 0, 0.1); }
      `}</style>

      {/* Navigation Header */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <button
          onClick={() => navigate('/')}
          className="group flex items-center gap-3 px-5 py-2.5 bg-white rounded-full text-sm font-bold uppercase tracking-widest shadow-sm hover:shadow-md border border-gray-100 transition-all"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back</span>
        </button>
        <div className="kv-label">Team Member Profile</div>
      </div>

      {/* Hero Section */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left: Professional Portrait (FULL COLOR) */}
            <div className="lg:col-span-5 scroll-reveal">
              <div className="relative">
                <div className="profile-mask shadow-2xl relative z-10">
                  {/* Sab filters hata diye hain taaki original color dikhe */}
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full aspect-[4/5] object-cover object-top transition-all duration-700" 
                  />
                </div>
                <div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-orange-500 -z-0"></div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-orange-100/50 rounded-full blur-3xl -z-0"></div>
                
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" 
                   className="absolute bottom-6 right-6 w-14 h-14 bg-[#0077b5] text-white flex items-center justify-center rounded-2xl shadow-xl hover:scale-110 transition-transform z-20">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            {/* Right: Intro Details */}
            <div className="lg:col-span-7 space-y-8">
              <div className="scroll-reveal stagger-1">
                <h1 className="kv-h text-gray-900 mb-2" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>
                  {member.name.split(' ').slice(0,-1).join(' ')} <br/>
                  <span className="text-orange-600">{member.name.split(' ').pop()}</span>
                </h1>
                <p className="text-xl font-bold text-gray-500 uppercase tracking-widest font-['Barlow_Condensed']">{member.position}</p>
              </div>

              <div className="scroll-reveal stagger-2 glass-card p-8 rounded-3xl relative">
                <Quote className="absolute top-6 right-8 text-orange-200" size={48} />
                <p className="text-2xl font-semibold italic text-gray-800 leading-snug">"{member.quote}"</p>
              </div>

              <div className="scroll-reveal stagger-3 space-y-6">
                <div className="kv-label">Professional Background</div>
                <p className="text-gray-600 text-lg leading-relaxed">{member.bio}</p>
                
                <div className="flex flex-wrap gap-8 pt-4">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center"><Award /></div>
                        <div>
                            <p className="text-xs font-black uppercase tracking-tighter text-gray-400">Achievements</p>
                            <p className="font-bold">{member.achievements.length}+ Major Keys</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center"><Target /></div>
                        <div>
                            <p className="text-xs font-black uppercase tracking-tighter text-gray-400">Focus Areas</p>
                            <p className="font-bold">{member.expertise.length} Domains</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-[#1a2332] text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 opacity-10"><Target size={400} /></div>
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="scroll-reveal">
                    <div className="kv-label text-orange-500">Mastery & Skills</div>
                    <h2 className="kv-h text-white text-5xl mt-6 mb-8">AREAS OF <span className="text-orange-500">EXPERTISE</span></h2>
                    <p className="text-gray-400 max-w-lg mb-12 text-lg">Harnessing decades of operational insight to deliver excellence across these core industrial and corporate domains.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 scroll-reveal stagger-2">
                    {member.expertise.map((skill, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-orange-600 hover:border-orange-600 transition-all group">
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-orange-500 group-hover:bg-white"></div>
                                <span className="font-bold uppercase tracking-widest text-sm">{skill}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
         </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 scroll-reveal">
            <div>
                <div className="kv-label">Track Record</div>
                <h2 className="kv-h text-5xl mt-4">KEY <span className="text-orange-500">ACHIEVEMENTS</span></h2>
            </div>
            <p className="text-gray-500 font-bold max-w-xs md:text-right mt-4 md:mt-0">Quantifiable impact and transformative leadership milestones.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {member.achievements.map((achievement, i) => (
              <div key={i} className={`scroll-reveal stagger-${(i%3)+1} glass-card p-8 rounded-3xl hover:border-orange-500 transition-all group`}>
                <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <CheckCircle2 size={20} />
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default TeamMemberDetails;