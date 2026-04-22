import React,{useState,useEffect} from 'react';
import AboutHero from "../assets/AboutHero.png";
import pikBehind from "../assets/PikBehind.svg";
import aboutLock from "../assets/AboutLock.png"
import aboutPerson from "../assets/AboutPerson.png"
import PersoLock from "../assets/PersonLock.png";
import group from "../assets/Group.svg";
import princple from "../assets/princleple.png";
import { Building2, Users, Factory, Handshake, Globe } from 'lucide-react';
import { Cpu, Lightbulb, UsersRound, Award } from 'lucide-react';
import rajwant from "../assets/rajwant.jpg";
import taksh from "../assets/taksh.jpg";
import anitk from "../assets/anitk.jpg";
import abijeet from "../assets/abijeet.jpg";
import jitin from "../assets/jitin.jpg";
import aboutLast from "../assets/AboutLast.png";
const NAVBAR_HEIGHT = 82;

function About() {
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return (
    <div className="w-full" style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}>

      {/* ── HOVER STYLES ── */}
      <style>{`
        .person-card-hover {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          cursor: default;
        }
        .person-card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0px 16px 36px rgba(180, 42, 38, 0.22);
        }
        .stat-card-hover {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          cursor: default;
        }
        .stat-card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0px 12px 28px rgba(180, 42, 38, 0.15);
        }
        .value-card-hover {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          cursor: default;
        }
        .value-card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0px 14px 32px rgba(180, 42, 38, 0.20);
        }
        .tag-hover {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: default;
        }
        .tag-hover:hover {
          transform: translateX(5px);
          box-shadow: 2px 4px 12px rgba(180, 42, 38, 0.12);
        }
        .btn-yellow-hover {
          transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
        }
        .btn-yellow-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0px 8px 20px rgba(255, 209, 40, 0.50);
          filter: brightness(1.06);
        }
        .btn-outline-hover {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .btn-outline-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0px 8px 20px rgba(255, 209, 40, 0.20);
        }
        .about-img-hover {
          overflow: hidden;
        }
        .about-img-hover img {
          transition: transform 0.3s ease;
        }
        .about-img-hover:hover img {
          transform: scale(1.05);
        }
      `}</style>

      <section
        className="w-full relative overflow-hidden"
        style={{
          backgroundImage: `url(${AboutHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '600px',
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Dark blue overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(10, 37, 64, 0.75)',
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 relative"
          style={{
            zIndex: 2,
            paddingTop: '90px',
            paddingBottom: '90px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              margin: 0,
              color: '#FFFFFF',
              fontSize: '38px',
              fontWeight: 700,
              textTransform: 'capitalize',
              lineHeight: '49px',
              letterSpacing: '0.76px',
              textAlign: 'center',
              wordWrap: 'break-word',
            }}
          >
            Powering Businesses <br />
            With Integrated Solutions
          </h1>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-[72px] flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* ── Left: Images ── */}
          <div className="flex-shrink-0 relative w-full max-w-[480px] h-[500px] sm:h-[520px] lg:h-[540px] mx-auto">

            <img
              src={pikBehind}
              alt=""
              className="absolute top-42 right-12 w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] object-contain z-0"
            />

            <img
              src={pikBehind}
              alt=""
              className="absolute w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] object-contain z-0"
              style={{ bottom: '31%', left: '70px' }}
            />

            {/* Person/Team image with hover */}
            <div className="about-img-hover absolute left-0 top-0 w-[75%] h-[55%] rounded-[20px] z-[2]">
              <img
                src={aboutPerson}
                alt="About Team"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Lock/Tech image with hover */}
            <div
              className="about-img-hover absolute right-0 w-[70%] h-[52%] rounded-[20px] z-[3]"
              style={{ top: '40%', boxShadow: '0 12px 40px rgba(0,0,0,0.18)' }}
            >
              <img
                src={aboutLock}
                alt="About Lock"
                className="w-full h-full object-cover object-center"
              />
            </div>

          </div>

          {/* ── Right: Text Content ── */}
          <div className="flex-1 flex flex-col gap-4 w-full">

            <span
              style={{
                color: '#B42A26',
                fontSize: '18px',
                fontWeight: 500,
                textTransform: 'capitalize',
                letterSpacing: '0.36px',
              }}
            >
              About US
            </span>

            <h2 style={{ margin: 0, lineHeight: 1.3 }}>
              <span
                style={{
                  color: '#0A2540',
                  fontSize: '38px',
                  fontWeight: 700,
                  textTransform: 'capitalize',
                  letterSpacing: '0.76px',
                }}
              >
                Driving Integrated <br />Solutions For A{' '}
              </span>
              <span
                style={{
                  color: '#DA3A34',
                  fontSize: '38px',
                  fontWeight: 700,
                  textTransform: 'capitalize',
                  letterSpacing: '0.76px',
                }}
              >
                Smarter{' '}
              </span>
              <span
                style={{
                  color: '#0A2540',
                  fontSize: '38px',
                  fontWeight: 700,
                  textTransform: 'capitalize',
                  letterSpacing: '0.76px',
                }}
              >
                Future
              </span>
            </h2>

            <div className="flex flex-col gap-4">
              {[
                'At Kavach Global, We Are A Dynamic, Multi-Service Organization Committed To Delivering Integrated, Technology-Driven Solutions That Simplify Operations And Drive Growth. With A Strong Presence Across Industries, We Combine Expertise, Innovation, And Scale To Help Businesses Operate Efficiently, Securely, And Sustainably.',
                'Our Approach Is Built On Understanding Client Needs And Delivering Customized Solutions That Create Measurable Impact. Backed By A Skilled Workforce And A Commitment To Excellence, We Continue To Empower Organizations To Focus On What They Do Best While We Take Care Of The Rest.',
              ].map((para, i) => (
                <p
                  key={i}
                  style={{
                    margin: 0,
                    color: '#494B4D',
                    fontSize: '18px',
                    fontWeight: 400,
                    textTransform: 'capitalize',
                    lineHeight: '33px',
                    letterSpacing: '0.36px',
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

          </div>
        </div>
      </section>

      <section
        className="w-full"
        style={{
          background: 'linear-gradient(169deg, rgba(255, 241, 240, 0) 0%, #FFF1F0 100%)',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-[72px]">

          <div className="flex flex-col items-center text-center gap-[5px] mb-10 lg:mb-[48px]">
            <span
              style={{
                color: '#B42A26',
                fontSize: '18px',
                fontWeight: 500,
                textTransform: 'capitalize',
                letterSpacing: '0.36px',
              }}
            >
              By The Numbers
            </span>
            <h2 style={{ margin: 0 }}>
              <span
                style={{
                  color: '#0A2540',
                  fontSize: '38px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.76px',
                }}
              >
                OUR{' '}
              </span>
              <span
                style={{
                  color: '#B42A26',
                  fontSize: '38px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.76px',
                }}
              >
                ACHIEVEMENTS
              </span>
              <span
                style={{
                  color: '#0A2540',
                  fontSize: '38px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.76px',
                }}
              >
                {' '}AT A GLANCE
              </span>
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
            {[
              { icon: Building2, number: '8', label: 'Offices In India' },
              { icon: Users, number: '23,000+', label: 'Team Members' },
              { icon: Factory, number: '50+', label: 'Industries Served' },
              { icon: Handshake, number: '7,500+', label: 'Happy Clients' },
              { icon: Globe, number: '7+', label: 'Global Footprints' },
            ].map((item, i) => (
              <div
                key={i}
                className="stat-card-hover flex flex-col items-center bg-white rounded-2xl px-3 py-6 sm:px-4 sm:py-7 lg:px-4 lg:py-[30px]"
                style={{ boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.07)' }}
              >
                <div
                  className="flex items-center justify-center rounded-full mb-4 lg:mb-5 w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] lg:w-[68px] lg:h-[68px]"
                  style={{ border: '1px solid #B42A26', backgroundColor: '#FFFFFF' }}
                >
                  <item.icon
                    className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] lg:w-[30px] lg:h-[30px]"
                    strokeWidth={1.5}
                    color="#B42A26"
                  />
                </div>

                <span
                  className="text-center leading-tight block"
                  style={{
                    color: '#00245B',
                    fontSize: 'clamp(24px, 4vw, 40px)',
                    fontWeight: 700,
                    textTransform: 'capitalize',
                    letterSpacing: '0.80px',
                  }}
                >
                  {item.number}
                </span>

                <span
                  className="text-center mt-1 block"
                  style={{
                    color: '#494B4D',
                    fontSize: 'clamp(13px, 2vw, 18px)',
                    fontWeight: 400,
                    textTransform: 'capitalize',
                    letterSpacing: '0.36px',
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section
        className="w-full relative overflow-hidden"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <img
          src={group}
          alt=""
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            height: '100%',
            objectFit: 'contain',
            zIndex: 0,
            opacity: 0.5,
          }}
        />

        <div
          className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-[72px]"
          style={{ position: 'relative', zIndex: 1 }}
        >

          <div className="flex flex-col items-center text-center gap-2 mb-10">
            <span
              style={{
                color: '#B42A26',
                fontSize: '18px',
                fontWeight: 500,
                textTransform: 'capitalize',
                letterSpacing: '0.36px',
              }}
            >
              Industries We Serve
            </span>
            <h2 style={{ margin: 0, lineHeight: 1.3, textAlign: 'center' }}>
              <span
                style={{
                  color: '#0A2540',
                  fontSize: '38px',
                  fontWeight: 700,
                  textTransform: 'capitalize',
                  letterSpacing: '0.76px',
                }}
              >
                Delivering{' '}
              </span>
              <span
                style={{
                  color: '#DA3A34',
                  fontSize: '38px',
                  fontWeight: 700,
                  textTransform: 'capitalize',
                  letterSpacing: '0.76px',
                }}
              >
                Solutions{' '}
              </span>
              <span
                style={{
                  color: '#0A2540',
                  fontSize: '38px',
                  fontWeight: 700,
                  textTransform: 'capitalize',
                  letterSpacing: '0.76px',
                }}
              >
                Across <br /> Diverse Sectors
              </span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-16">

            {/* ── Left: Description + Tags ── */}
            <div className="flex-1 flex flex-col gap-5">

              <p
                style={{
                  margin: 0,
                  color: '#494B4D',
                  fontSize: '18px',
                  fontWeight: 400,
                  textTransform: 'capitalize',
                  lineHeight: '33px',
                  letterSpacing: '0.36px',
                  wordWrap: 'break-word',
                }}
              >
                We Provide Tailored, Integrated Solutions Across A Wide Range Of Industries, Helping Organizations Enhance Efficiency, Optimize Operations, And Achieve Sustainable Growth. Our Expertise Spans Government, Corporate Enterprises, Infrastructure, Healthcare, Education, And More—Enabling Us To Understand Unique Challenges And Deliver Solutions That Create Real Impact. With A Flexible And Scalable Approach, We Adapt To The Evolving Needs Of Every Industry We Serve.
              </p>

              {/* Industry Tags Grid with hover */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Government & Public Sector',
                  'Manufacturing & Industrial',
                  'Corporate & Enterprises',
                  'Retail & Commercial Spaces',
                  'Infrastructure & Real Estate',
                  'Banking & Financial Services',
                  'Healthcare & Hospitals',
                  'IT & Technology',
                  'Education & Institutions',
                  'Hospitality & Facilities Management',
                ].map((tag, i) => (
                  <div
                    key={i}
                    className="tag-hover flex items-center w-full"
                    style={{
                      paddingTop: '9px',
                      paddingBottom: '9px',
                      paddingLeft: '16px',
                      paddingRight: '30px',
                      background: 'linear-gradient(90deg, #FFE5E4 0%, rgba(255, 229, 228, 0) 100%)',
                      borderRadius: '10px',
                      borderLeft: '2px solid #B42A26',
                      gap: '10px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <span
                      style={{
                        color: '#0A2540',
                        fontSize: '16px',
                        fontWeight: 500,
                        textTransform: 'capitalize',
                        lineHeight: '33px',
                        letterSpacing: '0.32px',
                        wordWrap: 'break-word',
                      }}
                    >
                      {tag}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* ── Right: Image with hover ── */}
            <div
              className="flex-shrink-0 w-full lg:max-w-[440px]"
              style={{ position: 'relative', alignSelf: 'center' }}
            >
              <div
                style={{
                  position: 'absolute',
                  right: '-10px',
                  top: '-10px',
                  width: '100%',
                  height: '100%',
                  borderRadius: '20px',
                  backgroundColor: '#B42A26',
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  right: '-5px',
                  top: '-5px',
                  width: '100%',
                  height: '100%',
                  borderRadius: '20px',
                  backgroundColor: '#FFBFBD',
                  zIndex: 1,
                }}
              />
              <div
                className="about-img-hover"
                style={{
                  position: 'relative',
                  zIndex: 2,
                  borderRadius: '20px',
                  width: '100%',
                }}
              >
                <img
                  src={PersoLock}
                  alt="Industries"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    borderRadius: '20px',
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section
        className="w-full relative overflow-hidden"
        style={{
          backgroundImage: `url(${princple})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '500px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(5, 15, 40, 0.82)',
            zIndex: 1,
          }}
        />

        <div
          className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-[72px]"
          style={{ position: 'relative', zIndex: 2 }}
        >

          <div className="flex flex-col items-center text-center gap-[5px] mb-10 lg:mb-[48px]">
            <span
              style={{
                color: '#FFFFFF',
                fontSize: '18px',
                fontWeight: 500,
                textTransform: 'capitalize',
                letterSpacing: '0.36px',
              }}
            >
              Our Principles
            </span>
            <h2 style={{ margin: 0 }}>
              <span
                style={{
                  color: '#FFFFFF',
                  fontSize: '38px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.76px',
                }}
              >
                CORE VALUES THAT DRIVE US{' '}
              </span>
              <span
                style={{
                  color: '#FFD128',
                  fontSize: '38px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.76px',
                }}
              >
                FORWARD
              </span>
            </h2>
          </div>

          {/* Core Values Cards with hover */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            style={{ alignItems: 'start' }}
          >
            {[
              {
                number: '01',
                icon: Cpu,
                title: 'Integrity',
                desc: 'We Operate With Unwavering Transparency And Ethical Conduct In Every Interaction And Business Decision.',
              },
              {
                number: '02',
                icon: Lightbulb,
                title: 'Innovation',
                desc: "We Continuously Push Boundaries, Leveraging Cutting-Edge Technology To Craft Solutions For Tomorrow's Challenges.",
              },
              {
                number: '03',
                icon: UsersRound,
                title: 'Client-Centric',
                desc: 'Our Clients Are At The Heart Of Everything We Do. Their Success Is Our Mission And Our Greatest Achievement.',
              },
              {
                number: '04',
                icon: Award,
                title: 'Excellence',
                desc: 'We Hold Ourselves To The Highest Standards, Delivering Quality That Stands The Test Of Time Across Every Project.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`value-card-hover ${i % 2 !== 0 ? 'lg:mt-[30px]' : 'lg:mt-0'}`}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '20px 12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span
                  className="w-full text-center lg:text-left"
                  style={{
                    color: '#B42A26',
                    fontSize: '30px',
                    fontWeight: 700,
                    letterSpacing: '0.60px',
                  }}
                >
                  {item.number}
                </span>

                <div className="flex flex-col items-center gap-2 w-full">

                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50px',
                      backgroundColor: '#FFF1F0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <item.icon size={38} strokeWidth={1.5} color="#B42A26" />
                  </div>

                  <span
                    style={{
                      color: '#0A2540',
                      fontSize: '22px',
                      fontWeight: 700,
                      textTransform: 'capitalize',
                      letterSpacing: '0.48px',
                      textAlign: 'center',
                    }}
                  >
                    {item.title}
                  </span>

                  <p
                    style={{
                      margin: 0,
                      color: '#494B4D',
                      fontSize: '15px',
                      fontWeight: 400,
                      textTransform: 'capitalize',
                      lineHeight: '28px',
                      letterSpacing: '0.34px',
                      textAlign: 'center',
                    }}
                  >
                    {item.desc}
                  </p>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── LEADERSHIP SECTION ── */}
     <section className="w-full" style={{ backgroundColor: '#FFFFFF' }}>
        <div
          className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16"
          style={{ paddingTop: '72px', paddingBottom: '72px' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <span style={{ color: '#B42A26', fontSize: isMobile ? '15px' : '18px', fontWeight: 500, textTransform: 'capitalize', letterSpacing: '0.36px' }}>
              Leadership
            </span>
            <h2 style={{ margin: 0, lineHeight: 1.3, textAlign: 'center' }}>
              <span style={{ color: '#0A2540', fontSize: isMobile ? '24px' : '38px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.76px' }}>
                The Team Turning{' '}
              </span>
              <span style={{ color: '#B83934', fontSize: isMobile ? '24px' : '38px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.76px' }}>
                Ideas
              </span>
              <span style={{ color: '#0A2540', fontSize: isMobile ? '24px' : '38px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.76px' }}>
                {' '}Into Reality
              </span>
            </h2>
            <p style={{ margin: 0, color: '#494B4D', fontSize: isMobile ? '13px' : '16px', fontWeight: 400, textTransform: 'capitalize', letterSpacing: '0.32px' }}>
              Meet The Visionary Leaders Driving Innovation And Excellence At Kavach Global.
            </p>
          </div>

          <div
            className="hide-scrollbar"
            style={{
              display: 'flex',
              gap: isMobile ? '0px' : '32px',
              overflowX: 'auto',
              paddingBottom: '16px',
              paddingTop: '12px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollSnapType: isMobile ? 'x mandatory' : 'none',
            }}
          >
            {[
              { img: rajwant, name: 'Dr. Rajwant Rai', role: 'Chairman, Kavach Group' },
              { img: taksh, name: 'Mr. Taksh Raval', role: 'Group Marketing Director (CMO)' },
              { img: anitk, name: 'CA Ankit Sudrania', role: 'Group Chief Financial Officer' },
              { img: abijeet, name: 'Mr. Abhijeet Wadekar', role: 'Chief Technology Officer (CTO)' },
              { img: jitin, name: 'Mr. Jitin', role: 'Director, Kavach Group' },
            ].map((person, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  width: isMobile ? '100%' : '260px',
                  position: 'relative',
                  paddingLeft: isMobile ? '0px' : '8px',
                  paddingTop: isMobile ? '0px' : '8px',
                  scrollSnapAlign: 'start',
                  display: 'flex',
                  justifyContent: isMobile ? 'center' : 'flex-start',
                }}
              >
                <div style={{ position: 'relative', width: isMobile ? '280px' : '260px' }}>
                  <div style={{
                    position: 'absolute', left: isMobile ? '0px' : '0px', top: isMobile ? '0px' : '0px',
                    width: isMobile ? '280px' : '260px',
                    height: '370px',
                    borderRadius: '20px', backgroundColor: '#B83934', zIndex: 0,
                    transform: isMobile ? 'translate(-8px, -8px)' : 'translate(-8px, -8px)'
                  }} />
                  <div className="person-card-hover" style={{
                    position: 'relative', zIndex: 1, borderRadius: '20px',
                    backgroundColor: '#FFFFFF', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.10)', overflow: 'hidden'
                  }}>
                    <div style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
                      <img src={person.img} alt={person.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                    </div>
                    <div style={{
                      padding: '14px 16px 16px', backgroundColor: '#FFFFFF',
                      borderTop: '1px solid rgba(10, 37, 64, 0.08)',
                      display: 'flex', flexDirection: 'column', gap: '3px'
                    }}>
                      <span style={{ color: '#0A2540', fontSize: isMobile ? '13px' : '16px', fontWeight: 700, textTransform: 'capitalize', letterSpacing: '0.32px' }}>{person.name}</span>
                      <span style={{ color: '#494B4D', fontSize: isMobile ? '11px' : '13px', fontWeight: 400, textTransform: 'capitalize', letterSpacing: '0.26px' }}>{person.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {!isMobile && <div style={{ flexShrink: 0, width: '10px' }} />}
          </div>
        </div>
      </section>

      {/* ── LAST CTA SECTION ── */}
      <section
        className="w-full relative overflow-hidden"
        style={{
          backgroundImage: `url(${aboutLast})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(5, 15, 40, 0.85)', zIndex: 1 }}
        />

        <div
          className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-[60px] relative flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-10"
          style={{ zIndex: 2 }}
        >

          <div className="flex flex-col gap-3 w-full lg:max-w-[480px]">
            <h2 style={{ margin: 0, lineHeight: 1.3 }}>
              <span
                style={{
                  color: '#FFFFFF',
                  fontSize: '38px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.76px',
                }}
              >
                READY TO PARTNER <br /> WITH{' '}
              </span>
              <span
                style={{
                  color: '#FA221C',
                  fontSize: '38px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.76px',
                }}
              >
                KAVACH
              </span>
              <span
                style={{
                  color: '#FFFFFF',
                  fontSize: '38px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.76px',
                }}
              >
                {' '}GLOBAL!
              </span>
            </h2>

            <p
              style={{
                margin: 0,
                color: '#FFFFFF',
                fontSize: '18px',
                fontWeight: 400,
                textTransform: 'capitalize',
                lineHeight: '33px',
                letterSpacing: '0.36px',
              }}
            >
              Let's Build Something Extraordinary Together. Our Experts Are Ready To Craft Tailored Solutions That Drive Real Results For Your Organization.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto flex-shrink-0">

            {/* Get In Touch button with hover */}
            <a
              href="/contact"
              className="btn-yellow-hover flex items-center justify-center gap-2 rounded-[10px] w-full sm:w-auto"
              style={{
                backgroundColor: '#FFD128',
                padding: '14px 32px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              <span
                style={{
                  color: '#0A2540',
                  fontSize: '18px',
                  fontWeight: 600,
                  textTransform: 'capitalize',
                  letterSpacing: '0.42px',
                }}
              >
                Get In Touch
              </span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="8" y1="16" x2="16" y2="8" stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" />
                <polyline points="9,8 16,8 16,15" stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </a>

            {/* Explore Solutions button with hover */}
            <a
              href="/services"
              className="btn-outline-hover flex items-center justify-center gap-2 rounded-[10px] w-full sm:w-auto"
              style={{
                backgroundColor: 'transparent',
                padding: '14px 32px',
                textDecoration: 'none',
                outline: '2px solid #FFD128',
                whiteSpace: 'nowrap',
              }}
            >
              <span
                style={{
                  color: '#FFD128',
                  fontSize: '18px',
                  fontWeight: 600,
                  textTransform: 'capitalize',
                  letterSpacing: '0.42px',
                }}
              >
                Explore Solutions
              </span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="8" y1="16" x2="16" y2="8" stroke="#FFD128" strokeWidth="2.5" strokeLinecap="round" />
                <polyline points="9,8 16,8 16,15" stroke="#FFD128" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </a>

          </div>

        </div>
      </section>
    </div>
  );
}

export default About;