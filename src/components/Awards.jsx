import React, { useEffect, useState } from 'react'
import Award1 from "../assets/Award1.jpeg";
import Award2 from "../assets/Award2.jpeg";
import Award3 from "../assets/Award3.jpeg";
import Team1 from "../assets/Team1.jpeg";
import Team2 from "../assets/Team2.jpeg";
import Team3 from "../assets/Team3.jpeg";
import AwardBg from '../assets/Awards.png';
import aboutLast from "../assets/AboutLast.png";
import rajwant from "../assets/rajwant.jpg";
import taksh from "../assets/taksh.jpg";
import anitk from "../assets/anitk.jpg";
import abijeet from "../assets/abijeet.jpg";
import jitin from "../assets/jitin.jpg";

function Awards() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const awards = [
    {
      img: Award1,
      title: "Excellence In Innovation Award",
      desc: "Recognized For Pioneering Cutting-Edge ICT Infrastructure Solutions.",
      downloadUrl: Award1,
    },
    {
      img: Award2,
      title: "Best Managed Services Provider",
      desc: "Awarded For Delivering World-Class Facility Management And IT Outsourcing.",
      downloadUrl: Award2,
    },
    {
      img: Award3,
      title: "Outstanding Growth & Leadership",
      desc: "Honored For Exceptional Leadership In Scaling Global Operations.",
      downloadUrl: Award3,
    },
  ];

  const team = [
    { img: Team1, title: "Annual Leadership Summit 2023" },
    { img: Team2, title: "Team Kavach — Building Tomorrow" },
    { img: Team3, title: "Award Ceremony Celebration" },
  ];

  return (
    <div style={{ }}>
      <style>{`
        /* The entire card lifts together */
        .full-card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
        }
        .full-card-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0px 10px 25px rgba(0,0,0,0.15);
        }

        /* The image inside zooms while the card lifts */
        .img-zoom {
          transition: transform 0.5s ease;
        }
        .full-card-hover:hover .img-zoom {
          transform: scale(1.05);
        }

        .person-card-hover {
          transition: all 0.3s ease;
        }
        .person-card-hover:hover {
          transform: translateY(-5px);
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* ── HERO BANNER ── */}
      <div style={{
        marginTop: "80px",
        backgroundImage: `url(${AwardBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
        padding: isMobile ? "40px 20px" : "60px 40px",
        textAlign: "center",
        minHeight: isMobile ? 300 : 600,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(10, 31, 68, 0.78)",
        }} />

        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: isMobile ? 36 : 90,
          fontWeight: 900,
          color: "rgba(255,255,255,0.06)",
          textTransform: "uppercase",
          letterSpacing: isMobile ? 4 : 10,
          whiteSpace: "nowrap",
          pointerEvents: "none",
          lineHeight: 1.1,
          zIndex: 1,
        }}>
          AWARDS<br />NOMINATIONS
        </div>

        <h1 style={{
          color: "#fff",
          fontSize: isMobile ? 24 : 38,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 0.76,
          position: "relative",
          zIndex: 2,
          margin: 0,
        }}>
          Our Awards &amp; Achievements
        </h1>
      </div>

      {/* ── PRESTIGIOUS RECOGNITIONS ── */}
      <div style={{ padding: isMobile ? "40px 20px" : "60px 40px", background: "#fff" }}>
        <p style={{
          color: "#B42A26", fontSize: isMobile ? 15 : 18, fontWeight: 500,
          textAlign: "center", letterSpacing: 0.36, marginBottom: 8,
        }}>
          The Hall Of Fame
        </p>
        <h2 style={{
          textAlign: "center",
          fontSize: isMobile ? 26 : 38,
          fontWeight: 700,
          letterSpacing: 0.76,
          marginBottom: 40,
        }}>
          <span style={{ color: "#0A2540" }}>PRESTIGIOUS </span>
          <span style={{ color: "#B83934" }}>RECOGNITION</span>
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: 28,
          maxWidth: 1200,
          margin: "0 auto",
          alignItems: "stretch",
        }}>
          {awards.map((a, i) => (
            <div key={i} className="full-card-hover" style={{
              border: "1px solid #e5e7eb",
              borderRadius: 12,
              display: "flex",
              flexDirection: "column",
              background: "#fff"
            }}>
              <div style={{ overflow: "hidden" }}>
                <img
                  src={a.img}
                  alt={a.title}
                  className="img-zoom"
                  style={{ width: "100%", height: isMobile ? 220 : 280, objectFit: "cover", display: "block" }}
                />
              </div>
              
              <div style={{
                padding: "20px 22px 24px",
                borderTop: "3px solid #DA3934",
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}>
                <p style={{
                  fontSize: isMobile ? 18 : 22, fontWeight: 700, color: "#000",
                  letterSpacing: 0.44, marginBottom: 10,
                }}>
                  {a.title}
                </p>
                <p style={{
                  fontSize: isMobile ? 14 : 16, color: "#494B4D",
                  lineHeight: "28px", letterSpacing: 0.32,
                  marginBottom: 16, flex: 1,
                }}>
                  {a.desc}
                </p>
                <a
                  href={a.downloadUrl}
                  download={a.title}
                  style={{
                    color: "#DA3934", fontSize: isMobile ? 15 : 18, fontWeight: 500,
                    letterSpacing: 0.36, textDecoration: "none",
                    marginTop: "auto",
                  }}
                >
                  Download Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── THE SPIRIT OF OUR TEAM ── */}
      <div style={{ padding: isMobile ? "40px 20px" : "60px 40px", background: "#fdf6f0" }}>
        <h2 style={{
          textAlign: "center",
          fontSize: isMobile ? 26 : 38,
          fontWeight: 700,
          letterSpacing: 0.76,
          marginBottom: 40,
        }}>
          <span style={{ color: "#0A2540" }}>THE SPIRIT OF OUR </span>
          <span style={{ color: "#B83934" }}>TEAM</span>
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: 28,
          maxWidth: 1200,
          margin: "0 auto",
        }}>
          {team.map((t, i) => (
            <div key={i} className="full-card-hover" style={{ textAlign: "center", background: "#fff", borderRadius: 12, paddingBottom: '16px' }}>
              <div style={{ borderRadius: '12px 12px 0 0', overflow: 'hidden' }}>
                <img
                  src={t.img}
                  alt={t.title}
                  className="img-zoom"
                  style={{
                    width: "100%",
                    height: isMobile ? 200 : 260,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              
              <p style={{
                fontSize: isMobile ? 17 : 22, fontWeight: 700, color: "#000", letterSpacing: 0.44, marginTop: '18px', padding: '0 10px'
              }}>
                {t.title}
              </p>
            </div>
          ))}
        </div>
      </div>

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

      {/* ── FOOTER CTA ── */}
      <section
        className="w-full relative overflow-hidden"
        style={{
          backgroundImage: `url(${aboutLast})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(5, 15, 40, 0.85)', zIndex: 1 }} />
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: isMobile ? '40px 20px' : '60px 64px',
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: 'space-between',
            gap: isMobile ? '24px' : '40px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: isMobile ? '100%' : '480px' }}>
            <h2 style={{ margin: 0, lineHeight: 1.3 }}>
              <span style={{ color: '#FFFFFF', fontSize: isMobile ? '26px' : '38px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.76px' }}>READY TO PARTNER <br /> WITH </span>
              <span style={{ color: '#FA221C', fontSize: isMobile ? '26px' : '38px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.76px' }}>KAVACH</span>
              <span style={{ color: '#FFFFFF', fontSize: isMobile ? '26px' : '38px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.76px' }}> GLOBAL!</span>
            </h2>
            <p style={{ margin: 0, color: '#FFFFFF', fontSize: isMobile ? '14px' : '18px', fontWeight: 400, textTransform: 'capitalize', lineHeight: '33px', letterSpacing: '0.36px' }}>
              Let's Build Something Extraordinary Together. Our Experts Are Ready To Craft Tailored Solutions That Drive Real Results For Your Organization.
            </p>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'stretch',
            gap: '16px',
            width: isMobile ? '100%' : 'auto',
            flexShrink: 0,
          }}>
            <a href="/contact" className="btn-yellow-hover flex items-center justify-center gap-2 rounded-[10px]" style={{ backgroundColor: '#FFD128', padding: '14px 32px', textDecoration: 'none', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', borderRadius: '10px' }}>
              <span style={{ color: '#0A2540', fontSize: isMobile ? '15px' : '18px', fontWeight: 600, textTransform: 'capitalize', letterSpacing: '0.42px' }}>Get In Touch</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="8" y1="16" x2="16" y2="8" stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" />
                <polyline points="9,8 16,8 16,15" stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </a>
            <a href="/services" className="btn-outline-hover flex items-center justify-center gap-2 rounded-[10px]" style={{ backgroundColor: 'transparent', padding: '14px 32px', textDecoration: 'none', outline: '2px solid #FFD128', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', borderRadius: '10px' }}>
              <span style={{ color: '#FFD128', fontSize: isMobile ? '15px' : '18px', fontWeight: 600, textTransform: 'capitalize', letterSpacing: '0.42px' }}>Explore Solutions</span>
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

export default Awards;