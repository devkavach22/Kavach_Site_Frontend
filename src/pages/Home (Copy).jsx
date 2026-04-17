import React, { useRef, useState, useEffect } from 'react';
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import Aboutbg from "../assets/AboutBg.png";
import EnginerAbout from "../assets/EnginerAbout.png";
import Domin from "../assets/Domin.png";
import WhyChose from "../assets/WhyChose.png";
import whyP from "../assets/whyP.png";
import key from "../assets/key.png";
import amnex from "../assets/Amnex.png";
import Arvind from "../assets/Arvind.png";
import green from "../assets/green.png";
import Udgam from "../assets/Udgam.png";
import Troikaa from "../assets/Troikaa.png";
import Rubber from "../assets/Rubber.png";
import Omspace from "../assets/Omspace.png";
import Paras from "../assets/Paras.png";
import Licoln from "../assets/Lincoln.png";
import Adani from "../assets/Adani.png";
import mission from "../assets/mision.png";
import vision from "../assets/vision.png";
import star from "../assets/star.svg";
import jitin from "../assets/jitin.jpg";
import rajwant from "../assets/rajwant.jpg";
import taksh from "../assets/taksh.jpg";
import anitk from "../assets/anitk.jpg";
import abijeet from "../assets/abijeet.jpg";

import Physical from "../assets/Py1.png";
import Facility from "../assets/FM1.png";
import ICT from "../assets/ITC1.png";
import Cloud from "../assets/Cloud.png";

import HR from "../assets/HR.png";
import Smart from "../assets/Smart.png";

import Health from "../assets/HelL.png";
import Infrastructure from "../assets/IProject.png";
import Data from "../assets/DataC.png";


const NAVBAR_HEIGHT = 82;
const slides = [img1, img2, img3, img4, img5];

function Home() {
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const hasDragged = useRef(false);
  const [slideWidth, setSlideWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current) {
        setSlideWidth(trackRef.current.parentElement.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const snapToSlide = () => {
    const container = trackRef.current?.parentElement;
    if (!container || !slideWidth) return;
    const index = Math.round(container.scrollLeft / slideWidth);
    const clamped = Math.max(0, Math.min(index, slides.length - 1));
    setCurrentIndex(clamped);
    container.scrollTo({ left: clamped * slideWidth, behavior: 'smooth' });
  };

  const onMouseDown = (e) => {
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.pageX;
    scrollLeft.current = trackRef.current?.parentElement?.scrollLeft || 0;
    trackRef.current.parentElement.style.cursor = 'grabbing';
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const diff = startX.current - e.pageX;
    if (Math.abs(diff) > 5) hasDragged.current = true;
    if (trackRef.current?.parentElement) {
      trackRef.current.parentElement.scrollLeft = scrollLeft.current + diff;
    }
  };

  // eslint-disable-next-line no-unused-vars
  const onMouseUp = (e) => {
    isDragging.current = false;
    if (trackRef.current?.parentElement) {
      trackRef.current.parentElement.style.cursor = 'grab';
    }

    if (!hasDragged.current) {
      const container = trackRef.current?.parentElement;
      if (!container || !slideWidth) return;
      const nextIndex = Math.min(currentIndex + 1, slides.length - 1);
      container.scrollTo({ left: nextIndex * slideWidth, behavior: 'smooth' });
      setCurrentIndex(nextIndex);
    } else {
      snapToSlide();
    }

    hasDragged.current = false;
  };

  const onTouchStart = (e) => {
    startX.current = e.touches[0].pageX;
    scrollLeft.current = trackRef.current?.parentElement?.scrollLeft || 0;
  };

  const onTouchMove = (e) => {
    const diff = startX.current - e.touches[0].pageX;
    if (trackRef.current?.parentElement) {
      trackRef.current.parentElement.scrollLeft = scrollLeft.current + diff;
    }
  };

  const onTouchEnd = () => snapToSlide();

  return (
    <div className="w-full" style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}>

      <div
        className="w-full overflow-x-hidden relative select-none"
        style={{
          cursor: 'grab',
          scrollBehavior: 'auto',
          height: 'min(750px, 90vh)',
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          className="flex h-full"
          style={{ width: `${slides.length * 100}%` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 h-full"
              style={{ width: `${100 / slides.length}%` }}
            >
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover pointer-events-none"
                style={{ objectPosition: 'center 20%' }}
                draggable={false}
              />
              <div className="absolute bottom-14 right-[31%]">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#F5C518] rounded hover:brightness-105 transition-all no-underline pointer-events-auto"
                  style={{
                    color: '#0A2540',
                    fontSize: '21px',
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    textTransform: 'capitalize',
                    letterSpacing: '0.42px',
                    whiteSpace: 'nowrap',
                    padding: '12px 25px',
                    textDecoration: 'none',
                    borderRadius: '10px',
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  Get In Touch
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT SECTION ── */}
      <section
        className="w-full relative overflow-hidden"
        style={{
          backgroundImage: `url(${Aboutbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center gap-10"
          style={{ paddingTop: '72px', paddingBottom: '72px' }}
        >

          {/* ── Left: Text Content ── */}
          <div className="flex-1 flex flex-col gap-5">

            {/* About US label */}
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

            {/* Heading */}
            <h2
              style={{
                margin: 0,
                lineHeight: 1.25,
                fontSize: '38px',
                fontWeight: 700,
                textTransform: 'capitalize',
                letterSpacing: '0.76px',
              }}
            >
              <span style={{ color: '#0A2540' }}>Driving Integrated</span>
              <br />
              <span style={{ color: '#0A2540' }}>Solutions For A </span>
              <span style={{ color: '#DA3A34' }}>Smarter </span>
              <span style={{ color: '#0A2540' }}>Future</span>
            </h2>

            {/* Body paragraphs */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                color: '#4A5568',
                fontSize: '15px',
                fontFamily: 'Poppins',
                fontWeight: 400,
                lineHeight: 1.75,
                letterSpacing: '0.36px'
              }}
            >
              <p style={{ margin: 0 }}>
                The Kavach Group Is A Leading Conglomerate Providing Comprehensive,
                Integrated Solutions Across A Wide Range Of Industries. Our Expertise
                Spans Facility Management, ICT Infrastructure, Healthcare, Data Center VPS,
                Power &amp; Utilities, Cloud Hosting, Server Colocation, HR Outsourcing, IT
                Services, Communication Technologies, And Data-Driven Analytics.
              </p>
              <p style={{ margin: 0 }}>
                By Leveraging The Combined Strengths Of Kavach, Kalibre, And Fact IT
                Solutions, We Offer End-To-End, Customized Solutions That Meet The
                Dynamic Needs Of Today's Businesses.
              </p>
              <p style={{ margin: 0 }}>
                With Over 23,000 +Skilled Professionals, 7500+ Satisfied Clients, And A Strong
                Presence In 8+ Countries, We Are Committed To Driving Innovation,
                Operational Efficiency, And Sustainable Growth Across Diverse Industries.
              </p>
            </div>

            {/* More About Button */}
            <div style={{ marginTop: '8px' }}>
              <a
                href="/about"
                className="inline-flex items-center gap-2 hover:brightness-90 transition-all"
                style={{
                  backgroundColor: '#FFD128',
                  borderRadius: '4px',
                  padding: '14px 28px',
                  textDecoration: 'none',
                  color: '#0A2540',
                  fontSize: '21px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  textTransform: 'capitalize',
                  letterSpacing: '0.42px',
                  whiteSpace: 'nowrap',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                More About
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Right: Engineer Image ── */}
          <div
            className="flex-shrink-0 flex items-end justify-center"
            style={{ width: '100%', maxWidth: '480px' }}
          >
            <img
              src={EnginerAbout}
              alt="Engineer About"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>

        </div>
      </section>

      {/* ── DOMAIN REPRESENT SECTION ── */}
      <section
        className="w-full relative overflow-hidden"
        style={{
          backgroundImage: `url(${Domin})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16"
          style={{ paddingTop: '72px', paddingBottom: '72px' }}
        >
          <div className="flex flex-col items-center" style={{ marginBottom: '48px', gap: '8px' }}>
            <span
              style={{
                color: '#B42A26',
                fontSize: '18px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                textTransform: 'capitalize',
                letterSpacing: '0.36px',
              }}
            >
              Core Expertise
            </span>
            <h2
              style={{
                margin: 0,
                color: '#0A2540',
                fontSize: '38px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                textTransform: 'capitalize',
                letterSpacing: '0.76px',
                textAlign: 'center',
              }}
            >
              Domain Represent
            </h2>
          </div>

          {/* Cards Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            style={{ gap: '24px' }}
          >
            {[
              {
                icon: Physical,
                title: 'Physical Security Services',
                desc: 'Advanced Integrated Security Including Surveillance, Access Control, And Rapid Response Systems Protecting Your Assets Around The Clock.',
                href: '/services/physical-security',
              },
              {
                icon: Facility,
                title: 'Facility Management',
                desc: 'End-To-End Facility Management Ensuring Seamless Operations, Maintenance Excellence, And A Productive Work Environment.',
                href: '/services/facility-management',
              },
              {
                icon: ICT,
                title: 'ICT Infrastructure',
                desc: 'Cutting-Edge ICT Solutions — Networking, Cloud Deployments, Enterprise Software, And Digital Automation — Powering Organizations Of Every Size.',
                href: '/services/ict-infrastructure',
              },
              {
                icon: Data,
                title: 'Data Center',
                desc: 'Design, Build, And Management Of Enterprise-Grade Data Centers With 99.99% Uptime, Tier IV Readiness, And Round-The-Clock Operations Support.',
                href: '/services/data-center',
              },
              {
                icon: Infrastructure,
                title: 'Infrastructure Projects',
                desc: 'Large-Scale Roads, Energy, Water Systems, And Smart City Networks — Building The Backbone Of Modern Cities And Industrial Ecosystems.',
                href: '/services/infrastructure',
              },
              {
                icon: Cloud,
                title: 'Cloud & Communication',
                desc: 'Cloud Contact Centers, Conversational AI, And Enterprise Communication Platforms For Seamless Omnichannel Connectivity.',
                href: '/services/cloud-communication',
              },
              {
                icon: Smart,
                title: 'Smart City Solutions',
                desc: 'Intelligent Traffic Management, Emergency Response Systems, And GIS-Based Solutions For Modern Smart Cities.',
                href: '/services/smart-city',
              },
              {
                icon: HR,
                title: 'HR & Payroll Outsourcing',
                desc: '360-Degree Payroll Solutions, HR Management, And Workforce Services For Enterprises Of All Sizes.',
                href: '/services/hr-payroll',
              },
              {
                icon: Health,
                title: 'HealthTech & GovTech',
                desc: 'Digital Health Worker Systems, Drug Distribution Platforms, And E-Governance Solutions Improving Public Services At Scale.',
                href: '/services/healthtech-govtech',
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  width: '100%',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  borderBottom: '3px solid #B83934',
                  padding: '30px 17px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '20px',
                  boxSizing: 'border-box',
                }}
              >
                {/* Icon + Title + Desc */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '13px', width: '100%' }}>

                  {/* Icon Box */}
                  <div style={{ width: '70px', height: '70px', position: 'relative', flexShrink: 0 }}>
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(144deg, #FFBCBA 0%, rgba(255,188,186,0) 100%)',
                        borderRadius: '12px',
                      }}
                    />
                    <img
                      src={item.icon}
                      alt={item.title}
                      style={{
                        position: 'absolute',
                        left: '8px',
                        top: '8px',
                        width: '54px',
                        height: '54px',
                        objectFit: 'contain',
                      }}
                    />
                  </div>

                  {/* Title + Description */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '100%' }}>
                    <div
                      style={{
                        color: '#B42A26',
                        fontSize: '21px',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 700,
                        textTransform: 'capitalize',
                        letterSpacing: '0.63px',
                        wordWrap: 'break-word',
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        color: '#494B4D',
                        fontSize: '16px',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 400,
                        textTransform: 'capitalize',
                        lineHeight: '30px',
                        letterSpacing: '0.32px',
                        wordWrap: 'break-word',
                      }}
                    >
                      {item.desc}
                    </div>
                  </div>
                </div>

                {/* Read More */}
                <a
                  href={item.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    textDecoration: 'none',
                  }}
                >
                  <span
                    style={{
                      color: '#0A2540',
                      fontSize: '16px',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 500,
                      textTransform: 'capitalize',
                      letterSpacing: '0.32px',
                    }}
                  >
                    Read More
                  </span>
                  <span
                    style={{
                      width: '24px',
                      height: '24px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <line x1="8" y1="16" x2="16" y2="8"
                        stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" />
                      <polyline points="9,8 16,8 16,15"
                        stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US SECTION ── */}
      <section
        className="w-full relative overflow-hidden"
        style={{
          backgroundImage: `url(${WhyChose})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center gap-16"
          style={{ paddingTop: '72px', paddingBottom: '72px' }}
        >

          {/* ── Left: Images ── */}
          <div
            className="flex-shrink-0 relative"
            style={{ width: '100%', maxWidth: '460px', height: '560px' }}
          >

            {/* Red background card - top left */}
            <div
              style={{
                position: 'absolute',
                left: '-10px',
                top: '-10px',
                width: '320px',
                height: '420px',
                borderRadius: '20px',
                backgroundColor: '#B42A26',
                zIndex: 1,
              }}
            />

            {/* key - shield/lock image */}
            <div
              style={{
                position: 'absolute',
                left: '0px',
                top: '0px',
                width: '320px',
                height: '420px',
                borderRadius: '20px',
                overflow: 'hidden',
                zIndex: 2,
              }}
            >
              <img
                src={key}
                alt="Security Shield"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </div>

            {/* whyP - team/people bottom overlapping image */}
            <div
              style={{
                position: 'absolute',
                left: '140px',
                top: '320px',
                width: '320px',
                height: '220px',
                borderRadius: '20px',
                overflow: 'hidden',
                outline: '7px solid white',
                zIndex: 10,
              }}
            >
              <img
                src={whyP}
                alt="Team Meeting"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </div>

          </div>

          {/* ── Right: Text Content ── */}
          <div className="flex-1 flex flex-col" style={{ gap: '16px' }}>

            {/* Label */}
            <span
              style={{
                color: '#B42A26',
                fontSize: '18px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                textTransform: 'capitalize',
                letterSpacing: '0.36px',
              }}
            >
              Why Choose Us
            </span>

            {/* Heading */}
            <h2 style={{ margin: 0, lineHeight: 1.3 }}>
              <span
                style={{
                  color: '#0A2540',
                  fontSize: '38px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  textTransform: 'capitalize',
                  letterSpacing: '0.76px',
                }}
              >
                Your Trusted <br />Partner In{' '}
              </span>
              <span
                style={{
                  color: '#B42A26',
                  fontSize: '38px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  textTransform: 'capitalize',
                  letterSpacing: '0.76px',
                }}
              >
                Integrated
              </span>
              <span
                style={{
                  color: '#0A2540',
                  fontSize: '38px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  textTransform: 'capitalize',
                  letterSpacing: '0.76px',
                }}
              >
                {' '}Solutions
              </span>
            </h2>

            {/* Body paragraphs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'At Kavach Global, We Deliver More Than Just Services—We Provide Integrated, End-To-End Solutions Designed To Simplify Operations And Drive Measurable Results. With A Strong Foundation Built On Experience, Scale, And Expertise, We Support Organizations Across Industries With Seamless Service Delivery Under One Roof.',
                'Our Technology-Driven Approach Combines Innovation With Operational Excellence, Enabling Smarter Decision-Making, Improved Efficiency, And Reduced Costs. Backed By A Large And Skilled Workforce, We Ensure Consistent Quality, Strict Compliance, And Proactive Risk Management Across Every Project.',
                'Our Solutions Are Flexible And Scalable, Adapting To Your Evolving Business Needs While Supporting Long-Term Growth. With A Strong Focus On Sustainability And A Client-First Mindset, We Aim To Build Lasting Partnerships And Deliver Outcomes That Truly Make A Difference.',
              ].map((para, i) => (
                <p
                  key={i}
                  style={{
                    margin: 0,
                    color: '#494B4D',
                    fontSize: '15px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    textTransform: 'capitalize',
                    lineHeight: '28px',
                    letterSpacing: '0.36px',
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Contact Now Button */}
            <div style={{ marginTop: '8px' }}>
              <a
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#FFD128',
                  borderRadius: '10px',
                  padding: '12px 28px',
                  textDecoration: 'none',
                }}
              >
                <span
                  style={{
                    color: '#0A2540',
                    fontSize: '16px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    textTransform: 'capitalize',
                    letterSpacing: '0.42px',
                  }}
                >
                  Contact Now
                </span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <line x1="8" y1="16" x2="16" y2="8"
                    stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" />
                  <polyline points="9,8 16,8 16,15"
                    stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>
      {/* ── OUR CLIENTS SECTION ── */}
      <section className="w-full bg-white">
        <div
          className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16"
          style={{ paddingTop: '72px', paddingBottom: '72px' }}
        >

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ margin: 0 }}>
              <span
                style={{
                  color: '#0A2540',
                  fontSize: '38px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  textTransform: 'capitalize',
                  letterSpacing: '0.76px',
                }}
              >
                Our{' '}
              </span>
              <span
                style={{
                  color: '#B42A26',
                  fontSize: '38px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  textTransform: 'capitalize',
                  letterSpacing: '0.76px',
                }}
              >
                Clients
              </span>
            </h2>
            <p
              style={{
                margin: '8px 0 0 0',
                color: '#494B4D',
                fontSize: '16px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                textTransform: 'capitalize',
                letterSpacing: '0.32px',
              }}
            >
              Trusted By Leading Organizations Across Industries Worldwide
            </p>
          </div>

          {/* Logos Grid */}
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
            style={{ gap: '16px' }}
          >
            {[
              { src: Adani, alt: 'Adani' },
              { src: amnex, alt: 'Amnex' },
              { src: Arvind, alt: 'Arvind Smartspaces' },
              { src: green, alt: 'Eco Green' },
              { src: Udgam, alt: 'Udgam School For Children' },
              { src: Troikaa, alt: 'Troikaa' },
              { src: Rubber, alt: 'Rubber King' },
              { src: Omspace, alt: 'OM Space' },
              { src: Paras, alt: 'Paras Trucks & Buses' },
              { src: Licoln, alt: 'Lincoln' },
            ].map((client, i) => (
              <div
                key={i}
                style={{
                  padding: '30px 36px',
                  borderRadius: '13px',
                  outline: '1px solid rgba(10, 37, 64, 0.20)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                }}
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  style={{
                    width: '100px',
                    height: '42px',
                    objectFit: 'contain',
                  }}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── MISSION & VISION SECTION ── */}
      <section
        className="w-full"
        style={{
          background: 'linear-gradient(180deg, #FFFDF5 0%, #FFF1F0 100%)',
        }}
      >
        <div
          className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16"
          style={{ paddingTop: '72px', paddingBottom: '72px' }}
        >

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <span
              style={{
                color: '#B42A26',
                fontSize: '18px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                textTransform: 'capitalize',
                letterSpacing: '0.36px',
              }}
            >
              Our Purpose
            </span>
            <h2 style={{ margin: 0 }}>
              <span
                style={{
                  color: '#0A2540',
                  fontSize: '38px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  textTransform: 'capitalize',
                  letterSpacing: '0.76px',
                }}
              >
                Mission &{' '}
              </span>
              <span
                style={{
                  color: '#B42A26',
                  fontSize: '38px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  textTransform: 'capitalize',
                  letterSpacing: '0.76px',
                }}
              >
                Vision
              </span>
            </h2>
            <p
              style={{
                margin: 0,
                color: '#494B4D',
                fontSize: '18px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                textTransform: 'capitalize',
                lineHeight: '33px',
                letterSpacing: '0.36px',
              }}
            >
              Two Guiding Pillars That Shape Every Decision We Make
            </p>
          </div>

          {/* Cards Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '24px' }}>

            {/* ── MISSION CARD ── */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '30px',
                boxShadow: '0px 5px 14px rgba(0, 0, 0, 0.15)',
                outline: '1px solid rgba(180, 42, 38, 0.60)',
                overflow: 'hidden',
                position: 'relative',
                padding: '30px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              {/* Top right pink bg */}
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  width: '50%',
                  height: '50%',
                  backgroundColor: '#FFF7F6',
                  zIndex: 0,
                }}
              />

              {/* Content */}
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>

                {/* Icon + Title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
                  <img
                    src={mission}
                    alt="Mission"
                    style={{ width: '60px', height: '60px', objectFit: 'contain', flexShrink: 0 }}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span
                      style={{
                        color: '#B42A26',
                        fontSize: '18px',
                        fontFamily: 'Poppins',
                        fontWeight: 500,
                        textTransform: 'capitalize',
                        letterSpacing: '0.36px',
                      }}
                    >
                      Mission
                    </span>
                    <span
                      style={{
                        color: '#0A2540',
                        fontSize: '25px',
                        fontFamily: 'Poppins',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.68px',
                      }}
                    >
                      OUR MISSION
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    margin: 0,
                    color: '#494B4D',
                    fontSize: '14px',
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    textTransform: 'capitalize',
                    lineHeight: '33px',
                    letterSpacing: '0.36px',
                  }}
                >
                  To Deliver Integrated, Technology-Driven Solutions That Empower Businesses To Operate Efficiently, Securely, And Sustainably — Transforming Complex Challenges Into Streamlined Opportunities So Clients Focus On What They Do Best.
                </p>

                {/* Feature Pills */}
                {[
                  { title: 'Integrated Solutions', sub: 'End-to-end tech services across industries' },
                  { title: 'Client Empowerment', sub: 'Enabling growth through smart outsourcing' },
                  { title: 'Sustainable Operations', sub: 'Long-term value with ethical practices' },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '12px 16px 11px',
                      background: 'linear-gradient(90deg, #FFE4E3 0%, rgba(255, 211, 210, 0) 100%)',
                      borderTopLeftRadius: '12px',
                      borderBottomLeftRadius: '12px',
                      borderLeft: '2px solid #B42A26',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                    }}
                  >
                    <span
                      style={{
                        color: '#0A2540',
                        fontSize: '16px',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 500,
                        textTransform: 'capitalize',
                        letterSpacing: '0.32px',
                      }}
                    >
                      {item.title}
                    </span>
                    <span
                      style={{
                        color: '#494B4D',
                        fontSize: '13px',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 400,
                        textTransform: 'capitalize',
                        letterSpacing: '0.26px',
                      }}
                    >
                      {item.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── VISION CARD ── */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '30px',
                boxShadow: '0px 5px 14px rgba(0, 0, 0, 0.15)',
                outline: '1px solid rgba(180, 42, 38, 0.60)',
                overflow: 'hidden',
                position: 'relative',
                padding: '30px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              {/* Top right pink bg */}
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  width: '50%',
                  height: '50%',
                  backgroundColor: '#FFF7F6',
                  zIndex: 0,
                }}
              />

              {/* Content */}
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>

                {/* Icon + Title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
                  <img
                    src={vision}
                    alt="Vision"
                    style={{ width: '60px', height: '60px', objectFit: 'contain', flexShrink: 0 }}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span
                      style={{
                        color: '#B42A26',
                        fontSize: '18px',
                        fontFamily: 'Poppins',
                        fontWeight: 500,
                        textTransform: 'capitalize',
                        letterSpacing: '0.36px',
                      }}
                    >
                      Vision
                    </span>
                    <span
                      style={{
                        color: '#0A2540',
                        fontSize: '25px',
                        fontFamily: 'Poppins',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.68px',
                      }}
                    >
                      OUR VISION
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    margin: 0,
                    color: '#494B4D',
                    fontSize: '14px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    textTransform: 'capitalize',
                    lineHeight: '33px',
                    letterSpacing: '0.36px',
                  }}
                >
                  To Be The Most Trusted And Innovative Global Conglomerate — Recognized For Transforming Industries Through Cutting-Edge Technology, Exceptional Service, And A Deep Commitment To Societal Progress.
                </p>

                {/* Feature Pills */}
                {[
                  { title: 'Global Trust', sub: 'Recognized leader across 7+ countries' },
                  { title: 'Technology Leadership', sub: 'Setting benchmarks in digital transformation' },
                  { title: 'Societal Progress', sub: 'Building a better future for all stakeholders' },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '12px 16px 11px',
                      background: 'linear-gradient(90deg, #FFE4E3 0%, rgba(255, 211, 210, 0) 100%)',
                      borderTopLeftRadius: '12px',
                      borderBottomLeftRadius: '12px',
                      borderLeft: '2px solid #B42A26',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                    }}
                  >
                    <span
                      style={{
                        color: '#0A2540',
                        fontSize: '16px',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 500,
                        textTransform: 'capitalize',
                        letterSpacing: '0.32px',
                      }}
                    >
                      {item.title}
                    </span>
                    <span
                      style={{
                        color: '#494B4D',
                        fontSize: '13px',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 400,
                        textTransform: 'capitalize',
                        letterSpacing: '0.26px',
                      }}
                    >
                      {item.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section
        className="w-full"
        style={{
          background: 'linear-gradient(180deg, #FFFDF5 0%, #FFF1F0 100%)',
        }}
      >
        <div
          className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16"
          style={{ paddingTop: '72px', paddingBottom: '72px' }}
        >

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <span
              style={{
                color: '#B42A26',
                fontSize: '18px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                textTransform: 'capitalize',
                letterSpacing: '0.36px',
              }}
            >
              Testimonials
            </span>
            <h2 style={{ margin: 0, lineHeight: 1.3, textAlign: 'center' }}>
              <span
                style={{
                  color: '#0A2540',
                  fontSize: '38px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  textTransform: 'capitalize',
                  letterSpacing: '0.76px',
                }}
              >
                Why Our Clients Trust Us For
              </span>
              <br />
              <span
                style={{
                  color: '#B42A26',
                  fontSize: '38px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  textTransform: 'capitalize',
                  letterSpacing: '0.76px',
                }}
              >
                Integrated
              </span>
              <span
                style={{
                  color: '#0A2540',
                  fontSize: '38px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  textTransform: 'capitalize',
                  letterSpacing: '0.76px',
                }}
              >
                {' '}Solutions
              </span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '24px' }}>
            {[
              {
                initials: 'RP',
                name: 'Ramesh Patel',
                role: 'CEO, TechVision Pvt. Ltd',
                review: 'Kavach Global Transformed Our Security Operations Completely. Their Integrated Solutions Gave Us Real-Time Visibility And Peace Of Mind. Exceptional Service And Professional Team Throughout The Entire Process.',
              },
              {
                initials: 'SS',
                name: 'Sunita Sharma',
                role: 'MD, BuildRight Corp',
                review: 'The Facility Management Solutions From Kavach Are Outstanding. They Handle Everything Seamlessly And Our Uptime Has Never Been Better. I Would Highly Recommend Them To Any Enterprise Looking For Reliable Partners.',
              },
              {
                initials: 'AM',
                name: 'Arjun Mehta',
                role: 'Director, GovTech Solutions',
                review: 'Working With Kavach Global On Our Smart City Project Was A Great Experience. Their Team Understood Our Requirements Perfectly And Delivered Beyond Expectations With Excellent Post-Project Support.',
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  borderBottom: '3px solid #B83934',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  boxSizing: 'border-box',
                }}
              >

                {/* Avatar + Name + Stars + Red Line */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>

                    {/* Avatar Circle */}
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        backgroundColor: '#B42A26',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          color: '#FFFFFF',
                          fontSize: '15px',
                          fontFamily: 'Poppins, sans-serif',
                          fontWeight: 600,
                          letterSpacing: '0.5px',
                        }}
                      >
                        {item.initials}
                      </span>
                    </div>

                    {/* Name + Role */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1px' }}>
                      <span
                        style={{
                          color: '#0A2540',
                          fontSize: '16px',
                          fontFamily: 'Poppins, sans-serif',
                          fontWeight: 600,
                          textTransform: 'capitalize',
                          letterSpacing: '0.32px',
                        }}
                      >
                        {item.name}
                      </span>
                      <span
                        style={{
                          color: '#494B4D',
                          fontSize: '13px',
                          fontFamily: 'Poppins, sans-serif',
                          fontWeight: 400,
                          textTransform: 'capitalize',
                          letterSpacing: '0.26px',
                        }}
                      >
                        {item.role}
                      </span>
                    </div>

                    {/* Stars */}
                    <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
                      {[...Array(5)].map((_, s) => (
                        <img
                          key={s}
                          src={star}
                          alt="star"
                          style={{ width: '16px', height: '16px' }}
                        />
                      ))}
                    </div>

                  </div>

                  {/* Red divider line */}
                  <div
                    style={{
                      width: 'calc(100% + 40px)',
                      height: '1px',
                      backgroundColor: '#B42A2666',
                      borderRadius: '0px',
                      marginLeft: '-20px',
                      marginRight: '-20px',
                    }}
                  />
                </div>

                {/* Review Text */}
                <p
                  style={{
                    margin: 0,
                    color: '#494B4D',
                    fontSize: '16px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    textTransform: 'capitalize',
                    lineHeight: '33px',
                    letterSpacing: '0.32px',
                  }}
                >
                  {item.review}
                </p>

              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="w-full" style={{ backgroundColor: '#FFFFFF' }}>
        <div
          className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16"
          style={{ paddingTop: '72px', paddingBottom: '72px' }}
        >

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <span
              style={{
                color: '#B42A26',
                fontSize: '18px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                textTransform: 'capitalize',
                letterSpacing: '0.36px',
              }}
            >
              Leadership
            </span>
            <h2 style={{ margin: 0, lineHeight: 1.3, textAlign: 'center' }}>
              <span
                style={{
                  color: '#0A2540',
                  fontSize: '38px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.76px',
                }}
              >
                The Team Turning{' '}
              </span>
              <span
                style={{
                  color: '#B83934',
                  fontSize: '38px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.76px',
                }}
              >
                Ideas
              </span>
              <span
                style={{
                  color: '#0A2540',
                  fontSize: '38px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.76px',
                }}
              >
                {' '}Into Reality
              </span>
            </h2>
            <p
              style={{
                margin: 0,
                color: '#494B4D',
                fontSize: '16px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                textTransform: 'capitalize',
                letterSpacing: '0.32px',
              }}
            >
              Meet The Visionary Leaders Driving Innovation And Excellence At Kavach Global.
            </p>
          </div>

          {/* Scrollable Cards */}
          <div
            className="hide-scrollbar"
            style={{
              display: 'flex',
              gap: '32px',
              overflowX: 'auto',
              paddingBottom: '16px',
              paddingTop: '12px',
              paddingLeft: '10px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
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
                  width: '260px',
                  position: 'relative',
                  paddingLeft: '8px',
                  paddingTop: '8px',
                }}
              >

                {/* Red bg card - peeche */}
                <div
                  style={{
                    position: 'absolute',
                    left: '0px',
                    top: '0px',
                    width: '260px',
                    height: '370px',
                    borderRadius: '20px',
                    backgroundColor: '#B83934',
                    zIndex: 0,
                  }}
                />

                {/* White card - upar */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    borderRadius: '20px',
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.10)',
                    overflow: 'hidden',
                  }}
                >
                  {/* Person Image */}
                  <div style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
                    <img
                      src={person.img}
                      alt={person.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                      }}
                    />
                  </div>

                  {/* Name + Role inside card */}
                  <div
                    style={{
                      padding: '14px 16px 16px',
                      backgroundColor: '#FFFFFF',
                      borderTop: '1px solid rgba(10, 37, 64, 0.08)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '3px',
                    }}
                  >
                    <span
                      style={{
                        color: '#0A2540',
                        fontSize: '16px',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 700,
                        textTransform: 'capitalize',
                        letterSpacing: '0.32px',
                      }}
                    >
                      {person.name}
                    </span>
                    <span
                      style={{
                        color: '#494B4D',
                        fontSize: '13px',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 400,
                        textTransform: 'capitalize',
                        letterSpacing: '0.26px',
                      }}
                    >
                      {person.role}
                    </span>
                  </div>
                </div>

              </div>
            ))}

            {/* Spacer for last card right gap */}
            <div style={{ flexShrink: 0, width: '10px' }} />

          </div>

        </div>
      </section>
    </div >
  );
}

export default Home;



// import React, { useRef, useEffect,useState } from 'react';
// import img1 from "../assets/img1.png";
// import img2 from "../assets/img2.png";
// import img3 from "../assets/img3.png";
// import img4 from "../assets/img4.png";
// import img5 from "../assets/img5.png";

// import Aboutbg from "../assets/AboutBg.png";
// import EnginerAbout from "../assets/EnginerAbout.png";
// import Domin from "../assets/Domin.png";
// import WhyChose from "../assets/WhyChose.png";
// import whyP from "../assets/whyP.png";
// import key from "../assets/key.png";

// import amnex from "../assets/Amnex.png";
// import Arvind from "../assets/Arvind.png";
// import green from "../assets/green.png";
// import Udgam from "../assets/Udgam.png";
// import Troikaa from "../assets/Troikaa.png";
// import Rubber from "../assets/Rubber.png";
// import Omspace from "../assets/Omspace.png";
// import Paras from "../assets/Paras.png";
// import Licoln from "../assets/Lincoln.png";
// import Adani from "../assets/Adani.png";


// import mission from "../assets/mision.png";
// import vision from "../assets/vision.png";
// import star from "../assets/star.svg";
// import jitin from "../assets/jitin.jpg";
// import rajwant from "../assets/rajwant.jpg";
// import taksh from "../assets/taksh.jpg";
// import anitk from "../assets/anitk.jpg";
// import abijeet from "../assets/abijeet.jpg";

// import Physical from "../assets/Py1.png";
// import Facility from "../assets/FM1.png";
// import ICT from "../assets/ITC1.png";
// import Cloud from "../assets/Cloud.png";

// import HR from "../assets/HR.png";
// import Smart from "../assets/Smart.png";

// import Health from "../assets/HelL.png";
// import Infrastructure from "../assets/IProject.png";
// import Data from "../assets/DataC.png";


// const NAVBAR_HEIGHT = 82;
// const slides = [img1, img2, img3, img4, img5];
// const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];
// const TOTAL = extendedSlides.length;

// function Home() {
//   const containerRef = useRef(null);
//   const trackRef = useRef(null);
//   const isDragging = useRef(false);
//   const startX = useRef(0);
//   const scrollLeftRef = useRef(0);
//   const hasDragged = useRef(false);
//   const autoScrollTimerRef = useRef(null);
//   const posRef = useRef(1);
//   const isJumping = useRef(false);

//   const getWidth = () => containerRef.current?.offsetWidth || 0;

//   const jumpTo = (index) => {
//     const container = containerRef.current;
//     if (!container) return;
//     isJumping.current = true;
//     container.style.scrollBehavior = 'auto';
//     container.scrollLeft = index * getWidth();
//     posRef.current = index;
//     requestAnimationFrame(() => {
//       requestAnimationFrame(() => {
//         if (container) container.style.scrollBehavior = 'smooth';
//         isJumping.current = false;
//       });
//     });
//   };

//   const smoothTo = (index) => {
//     const container = containerRef.current;
//     if (!container) return;
//     container.style.scrollBehavior = 'smooth';
//     container.scrollLeft = index * getWidth();
//     posRef.current = index;
//   };

//   const handleScrollEnd = () => {
//     if (isJumping.current) return;
//     const container = containerRef.current;
//     if (!container) return;
//     const width = getWidth();
//     if (!width) return;
//     const pos = Math.round(container.scrollLeft / width);
//     if (pos === 0) {
//       jumpTo(slides.length);
//     } else if (pos === TOTAL - 1) {
//       jumpTo(1);
//     } else {
//       posRef.current = pos;
//     }
//   };

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;
//     container.style.scrollBehavior = 'auto';
//     container.scrollLeft = 1 * (container.offsetWidth || 0);
//     posRef.current = 1;
//     requestAnimationFrame(() => {
//       if (container) container.style.scrollBehavior = 'smooth';
//     });
//   }, []);

//   useEffect(() => {
//     const onResize = () => {
//       const container = containerRef.current;
//       if (!container) return;
//       container.style.scrollBehavior = 'auto';
//       container.scrollLeft = posRef.current * container.offsetWidth;
//     };
//     window.addEventListener('resize', onResize);
//     return () => window.removeEventListener('resize', onResize);
//   }, []);

//   const startAutoScroll = () => {
//     stopAutoScroll();
//     autoScrollTimerRef.current = setInterval(() => {
//       const next = posRef.current + 1;
//       smoothTo(next);
//     }, 10000);
//   };

//   const stopAutoScroll = () => {
//     if (autoScrollTimerRef.current) {
//       clearInterval(autoScrollTimerRef.current);
//       autoScrollTimerRef.current = null;
//     }
//   };

//   useEffect(() => {
//     startAutoScroll();
//     return () => stopAutoScroll();
//   }, []);

//   const snapToSlide = () => {
//     const container = containerRef.current;
//     if (!container) return;
//     const width = getWidth();
//     if (!width) return;
//     const index = Math.round(container.scrollLeft / width);
//     const clamped = Math.max(0, Math.min(index, TOTAL - 1));
//     smoothTo(clamped);
//   };

//   const onMouseDown = (e) => {
//     isDragging.current = true;
//     hasDragged.current = false;
//     startX.current = e.pageX;
//     scrollLeftRef.current = containerRef.current?.scrollLeft || 0;
//     if (containerRef.current) containerRef.current.style.cursor = 'grabbing';
//     stopAutoScroll();
//   };

//   const onMouseMove = (e) => {
//     if (!isDragging.current) return;
//     const diff = startX.current - e.pageX;
//     if (Math.abs(diff) > 5) hasDragged.current = true;
//     if (containerRef.current) {
//       containerRef.current.scrollLeft = scrollLeftRef.current + diff;
//     }
//   };

//   // eslint-disable-next-line no-unused-vars
//   const onMouseUp = (e) => {
//     isDragging.current = false;
//     if (containerRef.current) containerRef.current.style.cursor = 'grab';

//     if (!hasDragged.current) {
//       smoothTo(posRef.current + 1);
//     } else {
//       snapToSlide();
//     }

//     hasDragged.current = false;
//     startAutoScroll();
//   };

//   const onTouchStart = (e) => {
//     startX.current = e.touches[0].pageX;
//     scrollLeftRef.current = containerRef.current?.scrollLeft || 0;
//     stopAutoScroll();
//   };

//   const onTouchMove = (e) => {
//     const diff = startX.current - e.touches[0].pageX;
//     if (containerRef.current) {
//       containerRef.current.scrollLeft = scrollLeftRef.current + diff;
//     }
//   };

//   const onTouchEnd = () => {
//     snapToSlide();
//     startAutoScroll();
//   };

//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 768);
//     check();
//     window.addEventListener('resize', check);
//     return () => window.removeEventListener('resize', check);
//   }, []);

//   return (
//     <div className="w-full" style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}>

//       {/* ── HOVER STYLES ── */}
//       <style>{`
//         .card-hover {
//           transition: transform 0.25s ease, box-shadow 0.25s ease;
//           cursor: default;
//         }
//         .card-hover:hover {
//           transform: translateY(-6px);
//           box-shadow: 0px 16px 36px rgba(180, 42, 38, 0.18);
//         }
//         .client-hover {
//           transition: transform 0.25s ease, box-shadow 0.25s ease, outline 0.25s ease;
//           cursor: default;
//         }
//         .client-hover:hover {
//           transform: translateY(-5px);
//           box-shadow: 0px 12px 28px rgba(10, 37, 64, 0.12);
//           outline: 1.5px solid rgba(180, 42, 38, 0.40);
//         }
//         .person-card-hover {
//           transition: transform 0.25s ease, box-shadow 0.25s ease;
//           cursor: default;
//         }
//         .person-card-hover:hover {
//           transform: translateY(-6px);
//           box-shadow: 0px 16px 36px rgba(180, 42, 38, 0.22);
//         }
//         .why-img-hover {
//           overflow: hidden;
//         }
//         .why-img-hover img {
//           transition: transform 0.3s ease;
//         }
//         .why-img-hover:hover img {
//           transform: scale(1.06);
//         }
//         .btn-hover {
//           transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease !important;
//         }
//         .btn-hover:hover {
//           transform: translateY(-2px) !important;
//           box-shadow: 0px 8px 20px rgba(255, 209, 40, 0.50) !important;
//           filter: brightness(1.06) !important;
//         }
//       `}</style>

//       {/* ── HERO SLIDER ── */}
//       <div
//         ref={containerRef}
//         className="w-full overflow-x-hidden relative select-none h-[68vw] min-h-[320px] max-h-[480px] md:h-[min(750px,90vh)] md:max-h-none md:min-h-0"
//         style={{
//           cursor: 'grab',
//           scrollBehavior: 'smooth',
//         }}
//         onMouseDown={onMouseDown}
//         onMouseMove={onMouseMove}
//         onMouseUp={onMouseUp}
//         onMouseLeave={onMouseUp}
//         onTouchStart={onTouchStart}
//         onTouchMove={onTouchMove}
//         onTouchEnd={onTouchEnd}
//         onScroll={handleScrollEnd}
//       >
//         <div
//           ref={trackRef}
//           className="flex h-full"
//           style={{ width: `${TOTAL * 100}%` }}
//         >
//           {extendedSlides.map((slide, index) => (
//             <div
//               key={index}
//               className="relative flex-shrink-0 h-full"
//               style={{ width: `${100 / TOTAL}%` }}
//             >
//               <img
//                 src={slide}
//                 alt={`Slide ${index}`}
//                 className="w-full h-full object-cover pointer-events-none"
//                 style={{ objectPosition: isMobile ? 'right center' : 'right 20%' }}
//                 draggable={false}
//               />

//               {/* Mobile: centered at bottom | Desktop: bottom-14 right-[31%] */}
//               <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-14 md:right-[31%] md:left-auto md:translate-x-0">
//                 <a
//                   href="/contact"
//                   className="inline-flex items-center gap-2 bg-[#F5C518] hover:brightness-105 transition-all no-underline pointer-events-auto text-[13px] px-[14px] py-[8px] md:text-[16px] md:px-[20px] md:py-[10px]"
//                   style={{
//                     color: '#0A2540',
//                     fontWeight: 600,
//                     textTransform: 'capitalize',
//                     letterSpacing: '0.42px',
//                     whiteSpace: 'nowrap',
//                     textDecoration: 'none',
//                     borderRadius: '10px',
//                   }}
//                   onClick={(e) => e.stopPropagation()}
//                 >
//                   Get In Touch
//                   <svg
//                     width="14"
//                     height="14"
//                     className="md:w-4 md:h-4"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="#0A2540"
//                     strokeWidth="2.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <line x1="7" y1="17" x2="17" y2="7" />
//                     <polyline points="7 7 17 7 17 17" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── ABOUT SECTION ── */}
//       <section
//         className="w-full relative overflow-hidden"
//         style={{
//           backgroundImage: `url(${Aboutbg})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//         }}
//       >
//         <div
//           className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center gap-10"
//           style={{ paddingTop: '72px', paddingBottom: '72px' }}
//         >
//           <div className="flex-1 flex flex-col gap-5">
//             <span
//               style={{
//                 color: '#B42A26',
//                 fontSize: '18px',
//                 fontWeight: 500,
//                 textTransform: 'capitalize',
//                 letterSpacing: '0.36px',
//               }}
//             >
//               About US
//             </span>

//             <h2
//               style={{
//                 margin: 0,
//                 lineHeight: 1.25,
//                 fontSize: '38px',
//                 fontWeight: 700,
//                 textTransform: 'capitalize',
//                 letterSpacing: '0.76px',
//               }}
//             >
//               <span style={{ color: '#0A2540' }}>Driving Integrated</span>
//               <br />
//               <span style={{ color: '#0A2540' }}>Solutions For A </span>
//               <span style={{ color: '#DA3A34' }}>Smarter </span>
//               <span style={{ color: '#0A2540' }}>Future</span>
//             </h2>

//             <div
//               style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: '14px',
//                 color: '#4A5568',
//                 fontSize: '15px',
//                 fontWeight: 400,
//                 lineHeight: 1.75,
//                 letterSpacing: '0.36px'
//               }}
//             >
//               <p style={{ margin: 0 }}>
//                 The Kavach Group Is A Leading Conglomerate Providing Comprehensive,
//                 Integrated Solutions Across A Wide Range Of Industries. Our Expertise
//                 Spans Facility Management, ICT Infrastructure, Healthcare, Data Center VPS,
//                 Power &amp; Utilities, Cloud Hosting, Server Colocation, HR Outsourcing, IT
//                 Services, Communication Technologies, And Data-Driven Analytics.
//               </p>
//               <p style={{ margin: 0 }}>
//                 By Leveraging The Combined Strengths Of Kavach, Kalibre, And Fact IT
//                 Solutions, We Offer End-To-End, Customized Solutions That Meet The
//                 Dynamic Needs Of Today's Businesses.
//               </p>
//               <p style={{ margin: 0 }}>
//                 With Over 23,000 +Skilled Professionals, 7500+ Satisfied Clients, And A Strong
//                 Presence In 8+ Countries, We Are Committed To Driving Innovation,
//                 Operational Efficiency, And Sustainable Growth Across Diverse Industries.
//               </p>
//             </div>

//             <div style={{ marginTop: '8px' }}>
//               <a
//                 href="/new/about"
//                 className="inline-flex items-center gap-2 hover:brightness-90 transition-all"
//                 style={{
//                   backgroundColor: '#FFD128',
//                   borderRadius: '4px',
//                   padding: '14px 28px',
//                   textDecoration: 'none',
//                   color: '#0A2540',
//                   fontSize: '21px',
//                   fontWeight: 600,
//                   textTransform: 'capitalize',
//                   letterSpacing: '0.42px',
//                   whiteSpace: 'nowrap',
//                   display: 'inline-flex',
//                   alignItems: 'center',
//                   gap: '8px',
//                 }}
//               >
//                 More About
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
//                   stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                   <line x1="7" y1="17" x2="17" y2="7" />
//                   <polyline points="7 7 17 7 17 17" />
//                 </svg>
//               </a>
//             </div>
//           </div>

//           <div
//             className="flex-shrink-0 flex items-end justify-center"
//             style={{ width: '100%', maxWidth: '480px' }}
//           >
//             <img
//               src={EnginerAbout}
//               alt="Engineer About"
//               style={{
//                 width: '100%',
//                 height: 'auto',
//                 objectFit: 'contain',
//                 display: 'block',
//               }}
//             />
//           </div>
//         </div>
//       </section>

//       {/* ── CORE EXPERTISE / DOMAIN SECTION ── */}
//       <section
//         className="w-full relative overflow-hidden"
//         style={{
//           backgroundImage: `url(${Domin})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//         }}
//       >
//         <div
//           className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16"
//           style={{ paddingTop: '72px', paddingBottom: '72px' }}
//         >
//           <div className="flex flex-col items-center" style={{ marginBottom: '48px', gap: '8px' }}>
//             <span
//               style={{
//                 color: '#B42A26',
//                 fontSize: '18px',
//                 fontWeight: 500,
//                 textTransform: 'capitalize',
//                 letterSpacing: '0.36px',
//               }}
//             >
//               Core Expertise
//             </span>
//             <h2
//               style={{
//                 margin: 0,
//                 color: '#0A2540',
//                 fontSize: '38px',
//                 fontWeight: 700,
//                 textTransform: 'capitalize',
//                 letterSpacing: '0.76px',
//                 textAlign: 'center',
//               }}
//             >
//               Domain Represent
//             </h2>
//           </div>

//           <div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
//             style={{ gap: '24px' }}
//           >
//             {[
//               {
//                 icon: Physical,
//                 title: 'Physical Security Services',
//                 desc: 'Advanced Integrated Security Including Surveillance, Access Control, And Rapid Response Systems Protecting Your Assets Around The Clock.',
//                 href: '/services/physical-security',
//               },
//               {
//                 icon: Facility,
//                 title: 'Facility Management',
//                 desc: 'End-To-End Facility Management Ensuring Seamless Operations, Maintenance Excellence, And A Productive Work Environment.',
//                 href: '/services/facility-management',
//               },
//               {
//                 icon: ICT,
//                 title: 'ICT Infrastructure',
//                 desc: 'Cutting-Edge ICT Solutions — Networking, Cloud Deployments, Enterprise Software, And Digital Automation — Powering Organizations Of Every Size.',
//                 href: '/services/ict-infrastructure',
//               },
//               {
//                 icon: Data,
//                 title: 'Data Center',
//                 desc: 'Design, Build, And Management Of Enterprise-Grade Data Centers With 99.99% Uptime, Tier IV Readiness, And Round-The-Clock Operations Support.',
//                 href: '/services/data-center',
//               },
//               {
//                 icon: Infrastructure,
//                 title: 'Infrastructure Projects',
//                 desc: 'Large-Scale Roads, Energy, Water Systems, And Smart City Networks — Building The Backbone Of Modern Cities And Industrial Ecosystems.',
//                 href: '/services/infrastructure',
//               },
//               {
//                 icon: Cloud,
//                 title: 'Cloud & Communication',
//                 desc: 'Cloud Contact Centers, Conversational AI, And Enterprise Communication Platforms For Seamless Omnichannel Connectivity.',
//                 href: '/services/cloud-communication',
//               },
//               {
//                 icon: Smart,
//                 title: 'Smart City Solutions',
//                 desc: 'Intelligent Traffic Management, Emergency Response Systems, And GIS-Based Solutions For Modern Smart Cities.',
//                 href: '/services/smart-city',
//               },
//               {
//                 icon: HR,
//                 title: 'HR & Payroll Outsourcing',
//                 desc: '360-Degree Payroll Solutions, HR Management, And Workforce Services For Enterprises Of All Sizes.',
//                 href: '/services/hr-payroll',
//               },
//               {
//                 icon: Health,
//                 title: 'HealthTech & GovTech',
//                 desc: 'Digital Health Worker Systems, Drug Distribution Platforms, And E-Governance Solutions Improving Public Services At Scale.',
//                 href: '/services/healthtech-govtech',
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="card-hover"
//                 style={{
//                   width: '100%',
//                   backgroundColor: '#FFFFFF',
//                   borderRadius: '20px',
//                   borderBottom: '3px solid #B83934',
//                   padding: '30px 17px',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'flex-start',
//                   alignItems: 'flex-start',
//                   gap: '20px',
//                   boxSizing: 'border-box',
//                 }}
//               >
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: '13px', width: '100%' }}>
//                   <div style={{ width: '70px', height: '70px', position: 'relative', flexShrink: 0 }}>
//                     <div
//                       style={{
//                         position: 'absolute',
//                         inset: 0,
//                         background: 'linear-gradient(144deg, #FFBCBA 0%, rgba(255,188,186,0) 100%)',
//                         borderRadius: '12px',
//                       }}
//                     />
//                     <img
//                       src={item.icon}
//                       alt={item.title}
//                       style={{
//                         position: 'absolute',
//                         left: '8px',
//                         top: '8px',
//                         width: '54px',
//                         height: '54px',
//                         objectFit: 'contain',
//                       }}
//                     />
//                   </div>

//                   <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '100%' }}>
//                     <div
//                       style={{
//                         color: '#B42A26',
//                         fontSize: '21px',
//                         fontWeight: 700,
//                         textTransform: 'capitalize',
//                         letterSpacing: '0.63px',
//                         wordWrap: 'break-word',
//                       }}
//                     >
//                       {item.title}
//                     </div>
//                     <div
//                       style={{
//                         color: '#494B4D',
//                         fontSize: '16px',
//                         fontWeight: 400,
//                         textTransform: 'capitalize',
//                         lineHeight: '30px',
//                         letterSpacing: '0.32px',
//                         wordWrap: 'break-word',
//                       }}
//                     >
//                       {item.desc}
//                     </div>
//                   </div>
//                 </div>

//                 <a
//                   href={item.href}
//                   style={{
//                     display: 'inline-flex',
//                     alignItems: 'center',
//                     gap: '10px',
//                     textDecoration: 'none',
//                   }}
//                 >
//                   <span
//                     style={{
//                       color: '#0A2540',
//                       fontSize: '16px',
//                       fontWeight: 500,
//                       textTransform: 'capitalize',
//                       letterSpacing: '0.32px',
//                     }}
//                   >
//                     Read More
//                   </span>
//                   <span
//                     style={{
//                       width: '24px',
//                       height: '24px',
//                       display: 'inline-flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       flexShrink: 0,
//                     }}
//                   >
//                     <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
//                       xmlns="http://www.w3.org/2000/svg">
//                       <line x1="8" y1="16" x2="16" y2="8"
//                         stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" />
//                       <polyline points="9,8 16,8 16,15"
//                         stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
//                     </svg>
//                   </span>
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── WHY CHOOSE US SECTION ── */}
//       <section
//         className="w-full relative overflow-hidden"
//         style={{
//           backgroundImage: `url(${WhyChose})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//         }}
//       >
//         <div
//           className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16"
//           style={{ paddingTop: '72px', paddingBottom: '72px' }}
//         >
//           <div className="flex flex-col lg:flex-row items-center gap-16">

//             <div
//               className="flex-shrink-0 relative mx-auto lg:mx-0"
//               style={{
//                 width: 'min(460px, 90vw)',
//                 height: 'min(560px, 70vw)',
//                 minHeight: '380px',
//               }}
//             >
//               <div
//                 style={{
//                   position: 'absolute',
//                   left: '-10px',
//                   top: '-10px',
//                   width: 'min(320px, 65vw)',
//                   height: 'min(420px, 55vw)',
//                   minHeight: '260px',
//                   borderRadius: '20px',
//                   backgroundColor: '#B42A26',
//                   zIndex: 1,
//                 }}
//               />
//               {/* ── KEY IMAGE with hover ── */}
//               <div
//                 className="why-img-hover"
//                 style={{
//                   position: 'absolute',
//                   left: '0px',
//                   top: '0px',
//                   width: 'min(320px, 65vw)',
//                   height: 'min(420px, 55vw)',
//                   minHeight: '260px',
//                   borderRadius: '20px',
//                   zIndex: 2,
//                 }}
//               >
//                 <img
//                   src={key}
//                   alt="Security Shield"
//                   style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
//                 />
//               </div>
//               {/* ── WHY-P IMAGE with hover ── */}
//               <div
//                 className="why-img-hover"
//                 style={{
//                   position: 'absolute',
//                   left: 'min(140px, 28vw)',
//                   top: 'min(320px, 42vw)',
//                   width: 'min(320px, 62vw)',
//                   height: 'min(220px, 32vw)',
//                   minHeight: '140px',
//                   borderRadius: '20px',
//                   outline: '7px solid white',
//                   zIndex: 10,
//                 }}
//               >
//                 <img
//                   src={whyP}
//                   alt="Team Meeting"
//                   style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
//                 />
//               </div>
//             </div>

//             <div className="flex-1 flex flex-col w-full" style={{ gap: '16px' }}>
//               <span
//                 style={{
//                   color: '#B42A26',
//                   fontSize: '18px',
//                   fontWeight: 500,
//                   textTransform: 'capitalize',
//                   letterSpacing: '0.36px',
//                 }}
//               >
//                 Why Choose Us
//               </span>

//               <h2 style={{ margin: 0, lineHeight: 1.3 }}>
//                 <span
//                   style={{
//                     color: '#0A2540',
//                     fontSize: '38px',
//                     fontWeight: 700,
//                     textTransform: 'capitalize',
//                     letterSpacing: '0.76px',
//                   }}
//                 >
//                   Your Trusted <br />Partner In{' '}
//                 </span>
//                 <span
//                   style={{
//                     color: '#B42A26',
//                     fontSize: '38px',
//                     fontWeight: 700,
//                     textTransform: 'capitalize',
//                     letterSpacing: '0.76px',
//                   }}
//                 >
//                   Integrated
//                 </span>
//                 <span
//                   style={{
//                     color: '#0A2540',
//                     fontSize: '38px',
//                     fontWeight: 700,
//                     textTransform: 'capitalize',
//                     letterSpacing: '0.76px',
//                   }}
//                 >
//                   {' '}Solutions
//                 </span>
//               </h2>

//               <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//                 {[
//                   'At Kavach Global, We Deliver More Than Just Services—We Provide Integrated, End-To-End Solutions Designed To Simplify Operations And Drive Measurable Results. With A Strong Foundation Built On Experience, Scale, And Expertise, We Support Organizations Across Industries With Seamless Service Delivery Under One Roof.',
//                   'Our Technology-Driven Approach Combines Innovation With Operational Excellence, Enabling Smarter Decision-Making, Improved Efficiency, And Reduced Costs. Backed By A Large And Skilled Workforce, We Ensure Consistent Quality, Strict Compliance, And Proactive Risk Management Across Every Project.',
//                   'Our Solutions Are Flexible And Scalable, Adapting To Your Evolving Business Needs While Supporting Long-Term Growth. With A Strong Focus On Sustainability And A Client-First Mindset, We Aim To Build Lasting Partnerships And Deliver Outcomes That Truly Make A Difference.',
//                 ].map((para, i) => (
//                   <p
//                     key={i}
//                     style={{
//                       margin: 0,
//                       color: '#494B4D',
//                       fontSize: '15px',
//                       fontWeight: 400,
//                       textTransform: 'capitalize',
//                       lineHeight: '28px',
//                       letterSpacing: '0.36px',
//                     }}
//                   >
//                     {para}
//                   </p>
//                 ))}
//               </div>

//               <div style={{ marginTop: '8px' }}>
//                 {/* ── CONTACT NOW BUTTON with hover ── */}
//                 <a
//                   href="/contact"
//                   className="btn-hover"
//                   style={{
//                     display: 'inline-flex',
//                     alignItems: 'center',
//                     gap: '8px',
//                     backgroundColor: '#FFD128',
//                     borderRadius: '10px',
//                     padding: '12px 28px',
//                     textDecoration: 'none',
//                   }}
//                 >
//                   <span
//                     style={{
//                       color: '#0A2540',
//                       fontSize: '16px',
//                       fontWeight: 600,
//                       textTransform: 'capitalize',
//                       letterSpacing: '0.42px',
//                     }}
//                   >
//                     Contact Now
//                   </span>
//                   <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
//                     xmlns="http://www.w3.org/2000/svg">
//                     <line x1="8" y1="16" x2="16" y2="8"
//                       stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" />
//                     <polyline points="9,8 16,8 16,15"
//                       stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── OUR CLIENTS SECTION ── */}
//       <section className="w-full bg-white">
//         <div
//           className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16"
//           style={{ paddingTop: '72px', paddingBottom: '72px' }}
//         >
//           <div style={{ textAlign: 'center', marginBottom: '48px' }}>
//             <h2 style={{ margin: 0 }}>
//               <span
//                 style={{
//                   color: '#0A2540',
//                   fontSize: '38px',
//                   fontWeight: 700,
//                   textTransform: 'capitalize',
//                   letterSpacing: '0.76px',
//                 }}
//               >
//                 Our{' '}
//               </span>
//               <span
//                 style={{
//                   color: '#B42A26',
//                   fontSize: '38px',
//                   fontWeight: 700,
//                   textTransform: 'capitalize',
//                   letterSpacing: '0.76px',
//                 }}
//               >
//                 Clients
//               </span>
//             </h2>
//             <p
//               style={{
//                 margin: '8px 0 0 0',
//                 color: '#494B4D',
//                 fontSize: '16px',
//                 fontWeight: 400,
//                 textTransform: 'capitalize',
//                 letterSpacing: '0.32px',
//               }}
//             >
//               Trusted By Leading Organizations Across Industries Worldwide
//             </p>
//           </div>

//           <div
//             className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
//             style={{ gap: '16px' }}
//           >
//             {[
//               { src: Adani, alt: 'Adani' },
//               { src: amnex, alt: 'Amnex' },
//               { src: Arvind, alt: 'Arvind Smartspaces' },
//               { src: green, alt: 'Eco Green' },
//               { src: Udgam, alt: 'Udgam School For Children' },
//               { src: Troikaa, alt: 'Troikaa' },
//               { src: Rubber, alt: 'Rubber King' },
//               { src: Omspace, alt: 'OM Space' },
//               { src: Paras, alt: 'Paras Trucks & Buses' },
//               { src: Licoln, alt: 'Lincoln' },
//             ].map((client, i) => (
//               <div
//                 key={i}
//                 className="client-hover"
//                 style={{
//                   padding: '30px 36px',
//                   borderRadius: '13px',
//                   outline: '1px solid rgba(10, 37, 64, 0.20)',
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   backgroundColor: '#fff',
//                 }}
//               >
//                 <img
//                   src={client.src}
//                   alt={client.alt}
//                   style={{
//                     width: '100px',
//                     height: '42px',
//                     objectFit: 'contain',
//                   }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── MISSION & VISION SECTION ── */}
//       <section
//         className="w-full"
//         style={{
//           background: 'linear-gradient(180deg, #FFFDF5 0%, #FFF1F0 100%)',
//         }}
//       >
//         <div
//           className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16"
//           style={{ paddingTop: '72px', paddingBottom: '72px' }}
//         >
//           <div style={{ textAlign: 'center', marginBottom: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
//             <span
//               style={{
//                 color: '#B42A26',
//                 fontSize: '18px',
//                 fontWeight: 500,
//                 textTransform: 'capitalize',
//                 letterSpacing: '0.36px',
//               }}
//             >
//               Our Purpose
//             </span>
//             <h2 style={{ margin: 0 }}>
//               <span
//                 style={{
//                   color: '#0A2540',
//                   fontSize: '38px',
//                   fontWeight: 700,
//                   textTransform: 'capitalize',
//                   letterSpacing: '0.76px',
//                 }}
//               >
//                 Mission &{' '}
//               </span>
//               <span
//                 style={{
//                   color: '#B42A26',
//                   fontSize: '38px',
//                   fontWeight: 700,
//                   textTransform: 'capitalize',
//                   letterSpacing: '0.76px',
//                 }}
//               >
//                 Vision
//               </span>
//             </h2>
//             <p
//               style={{
//                 margin: 0,
//                 color: '#494B4D',
//                 fontSize: '18px',
//                 fontWeight: 400,
//                 textTransform: 'capitalize',
//                 lineHeight: '33px',
//                 letterSpacing: '0.36px',
//               }}
//             >
//               Two Guiding Pillars That Shape Every Decision We Make
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '24px' }}>

//             {/* ── MISSION CARD ── */}
//             <div
//               className="card-hover"
//               style={{
//                 backgroundColor: '#FFFFFF',
//                 borderRadius: '30px',
//                 boxShadow: '0px 5px 14px rgba(0, 0, 0, 0.15)',
//                 outline: '1px solid rgba(180, 42, 38, 0.60)',
//                 overflow: 'hidden',
//                 position: 'relative',
//                 padding: '30px 24px',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: '10px',
//               }}
//             >
//               <div
//                 style={{
//                   position: 'absolute',
//                   right: 0,
//                   top: 0,
//                   width: '50%',
//                   height: '50%',
//                   backgroundColor: '#FFF7F6',
//                   zIndex: 0,
//                 }}
//               />
//               <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
//                   <img
//                     src={mission}
//                     alt="Mission"
//                     style={{ width: '60px', height: '60px', objectFit: 'contain', flexShrink: 0 }}
//                   />
//                   <div style={{ display: 'flex', flexDirection: 'column' }}>
//                     <span
//                       style={{
//                         color: '#B42A26',
//                         fontSize: '18px',
//                         fontWeight: 500,
//                         textTransform: 'capitalize',
//                         letterSpacing: '0.36px',
//                       }}
//                     >
//                       Mission
//                     </span>
//                     <span
//                       style={{
//                         color: '#0A2540',
//                         fontSize: '25px',
//                         fontWeight: 700,
//                         textTransform: 'uppercase',
//                         letterSpacing: '0.68px',
//                       }}
//                     >
//                       OUR MISSION
//                     </span>
//                   </div>
//                 </div>

//                 <p
//                   style={{
//                     margin: 0,
//                     color: '#494B4D',
//                     fontSize: '14px',
//                     fontWeight: 400,
//                     textTransform: 'capitalize',
//                     lineHeight: '33px',
//                     letterSpacing: '0.36px',
//                   }}
//                 >
//                   To Deliver Integrated, Technology-Driven Solutions That Empower Businesses To Operate Efficiently, Securely, And Sustainably — Transforming Complex Challenges Into Streamlined Opportunities So Clients Focus On What They Do Best.
//                 </p>

//                 {[
//                   { title: 'Integrated Solutions', sub: 'End-to-end tech services across industries' },
//                   { title: 'Client Empowerment', sub: 'Enabling growth through smart outsourcing' },
//                   { title: 'Sustainable Operations', sub: 'Long-term value with ethical practices' },
//                 ].map((item, i) => (
//                   <div
//                     key={i}
//                     style={{
//                       padding: '12px 16px 11px',
//                       background: 'linear-gradient(90deg, #FFE4E3 0%, rgba(255, 211, 210, 0) 100%)',
//                       borderTopLeftRadius: '12px',
//                       borderBottomLeftRadius: '12px',
//                       borderLeft: '2px solid #B42A26',
//                       display: 'flex',
//                       flexDirection: 'column',
//                       gap: '2px',
//                     }}
//                   >
//                     <span
//                       style={{
//                         color: '#0A2540',
//                         fontSize: '16px',
//                         fontWeight: 500,
//                         textTransform: 'capitalize',
//                         letterSpacing: '0.32px',
//                       }}
//                     >
//                       {item.title}
//                     </span>
//                     <span
//                       style={{
//                         color: '#494B4D',
//                         fontSize: '13px',
//                         fontWeight: 400,
//                         textTransform: 'capitalize',
//                         letterSpacing: '0.26px',
//                       }}
//                     >
//                       {item.sub}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* ── VISION CARD ── */}
//             <div
//               className="card-hover"
//               style={{
//                 backgroundColor: '#FFFFFF',
//                 borderRadius: '30px',
//                 boxShadow: '0px 5px 14px rgba(0, 0, 0, 0.15)',
//                 outline: '1px solid rgba(180, 42, 38, 0.60)',
//                 overflow: 'hidden',
//                 position: 'relative',
//                 padding: '30px 24px',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: '10px',
//               }}
//             >
//               <div
//                 style={{
//                   position: 'absolute',
//                   right: 0,
//                   top: 0,
//                   width: '50%',
//                   height: '50%',
//                   backgroundColor: '#FFF7F6',
//                   zIndex: 0,
//                 }}
//               />
//               <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
//                   <img
//                     src={vision}
//                     alt="Vision"
//                     style={{ width: '60px', height: '60px', objectFit: 'contain', flexShrink: 0 }}
//                   />
//                   <div style={{ display: 'flex', flexDirection: 'column' }}>
//                     <span
//                       style={{
//                         color: '#B42A26',
//                         fontSize: '18px',
//                         fontWeight: 500,
//                         textTransform: 'capitalize',
//                         letterSpacing: '0.36px',
//                       }}
//                     >
//                       Vision
//                     </span>
//                     <span
//                       style={{
//                         color: '#0A2540',
//                         fontSize: '25px',
//                         fontWeight: 700,
//                         textTransform: 'uppercase',
//                         letterSpacing: '0.68px',
//                       }}
//                     >
//                       OUR VISION
//                     </span>
//                   </div>
//                 </div>

//                 <p
//                   style={{
//                     margin: 0,
//                     color: '#494B4D',
//                     fontSize: '14px',
//                     fontWeight: 400,
//                     textTransform: 'capitalize',
//                     lineHeight: '33px',
//                     letterSpacing: '0.36px',
//                   }}
//                 >
//                   To Be The Most Trusted And Innovative Global Conglomerate — Recognized For Transforming Industries Through Cutting-Edge Technology, Exceptional Service, And A Deep Commitment To Societal Progress.
//                 </p>

//                 {[
//                   { title: 'Global Trust', sub: 'Recognized leader across 7+ countries' },
//                   { title: 'Technology Leadership', sub: 'Setting benchmarks in digital transformation' },
//                   { title: 'Societal Progress', sub: 'Building a better future for all stakeholders' },
//                 ].map((item, i) => (
//                   <div
//                     key={i}
//                     style={{
//                       padding: '12px 16px 11px',
//                       background: 'linear-gradient(90deg, #FFE4E3 0%, rgba(255, 211, 210, 0) 100%)',
//                       borderTopLeftRadius: '12px',
//                       borderBottomLeftRadius: '12px',
//                       borderLeft: '2px solid #B42A26',
//                       display: 'flex',
//                       flexDirection: 'column',
//                       gap: '2px',
//                     }}
//                   >
//                     <span
//                       style={{
//                         color: '#0A2540',
//                         fontSize: '16px',
//                         fontWeight: 500,
//                         textTransform: 'capitalize',
//                         letterSpacing: '0.32px',
//                       }}
//                     >
//                       {item.title}
//                     </span>
//                     <span
//                       style={{
//                         color: '#494B4D',
//                         fontSize: '13px',
//                         fontWeight: 400,
//                         textTransform: 'capitalize',
//                         letterSpacing: '0.26px',
//                       }}
//                     >
//                       {item.sub}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ── TESTIMONIALS SECTION ── */}
//       <section
//         className="w-full"
//         style={{
//           background: 'linear-gradient(180deg, #FFFDF5 0%, #FFF1F0 100%)',
//         }}
//       >
//         <div
//           className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16"
//           style={{ paddingTop: '72px', paddingBottom: '72px' }}
//         >
//           <div style={{ textAlign: 'center', marginBottom: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
//             <span
//               style={{
//                 color: '#B42A26',
//                 fontSize: '18px',
//                 fontWeight: 500,
//                 textTransform: 'capitalize',
//                 letterSpacing: '0.36px',
//               }}
//             >
//               Testimonials
//             </span>
//             <h2 style={{ margin: 0, lineHeight: 1.3, textAlign: 'center' }}>
//               <span
//                 style={{
//                   color: '#0A2540',
//                   fontSize: '38px',
//                   fontWeight: 700,
//                   textTransform: 'capitalize',
//                   letterSpacing: '0.76px',
//                 }}
//               >
//                 Why Our Clients Trust Us For
//               </span>
//               <br />
//               <span
//                 style={{
//                   color: '#B42A26',
//                   fontSize: '38px',
//                   fontWeight: 700,
//                   textTransform: 'capitalize',
//                   letterSpacing: '0.76px',
//                 }}
//               >
//                 Integrated
//               </span>
//               <span
//                 style={{
//                   color: '#0A2540',
//                   fontSize: '38px',
//                   fontWeight: 700,
//                   textTransform: 'capitalize',
//                   letterSpacing: '0.76px',
//                 }}
//               >
//                 {' '}Solutions
//               </span>
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '24px' }}>
//             {[
//               {
//                 initials: 'RP',
//                 name: 'Ramesh Patel',
//                 role: 'CEO, TechVision Pvt. Ltd',
//                 review: 'Kavach Global Transformed Our Security Operations Completely. Their Integrated Solutions Gave Us Real-Time Visibility And Peace Of Mind. Exceptional Service And Professional Team Throughout The Entire Process.',
//               },
//               {
//                 initials: 'SS',
//                 name: 'Sunita Sharma',
//                 role: 'MD, BuildRight Corp',
//                 review: 'The Facility Management Solutions From Kavach Are Outstanding. They Handle Everything Seamlessly And Our Uptime Has Never Been Better. I Would Highly Recommend Them To Any Enterprise Looking For Reliable Partners.',
//               },
//               {
//                 initials: 'AM',
//                 name: 'Arjun Mehta',
//                 role: 'Director, GovTech Solutions',
//                 review: 'Working With Kavach Global On Our Smart City Project Was A Great Experience. Their Team Understood Our Requirements Perfectly And Delivered Beyond Expectations With Excellent Post-Project Support.',
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="card-hover"
//                 style={{
//                   backgroundColor: '#FFFFFF',
//                   borderRadius: '20px',
//                   borderBottom: '3px solid #B83934',
//                   padding: '24px 20px',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   gap: '16px',
//                   boxSizing: 'border-box',
//                 }}
//               >
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
//                   <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//                     <div
//                       style={{
//                         width: '48px',
//                         height: '48px',
//                         borderRadius: '50%',
//                         backgroundColor: '#B42A26',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         flexShrink: 0,
//                       }}
//                     >
//                       <span
//                         style={{
//                           color: '#FFFFFF',
//                           fontSize: '15px',
//                           fontWeight: 600,
//                           letterSpacing: '0.5px',
//                         }}
//                       >
//                         {item.initials}
//                       </span>
//                     </div>

//                     <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1px' }}>
//                       <span
//                         style={{
//                           color: '#0A2540',
//                           fontSize: '16px',
//                           fontWeight: 600,
//                           textTransform: 'capitalize',
//                           letterSpacing: '0.32px',
//                         }}
//                       >
//                         {item.name}
//                       </span>
//                       <span
//                         style={{
//                           color: '#494B4D',
//                           fontSize: '13px',
//                           fontWeight: 400,
//                           textTransform: 'capitalize',
//                           letterSpacing: '0.26px',
//                         }}
//                       >
//                         {item.role}
//                       </span>
//                     </div>

//                     <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
//                       {[...Array(5)].map((_, s) => (
//                         <img
//                           key={s}
//                           src={star}
//                           alt="star"
//                           style={{ width: '16px', height: '16px' }}
//                         />
//                       ))}
//                     </div>
//                   </div>

//                   <div
//                     style={{
//                       width: 'calc(100% + 40px)',
//                       height: '1px',
//                       backgroundColor: '#B42A2666',
//                       borderRadius: '0px',
//                       marginLeft: '-20px',
//                       marginRight: '-20px',
//                     }}
//                   />
//                 </div>

//                 <p
//                   style={{
//                     margin: 0,
//                     color: '#494B4D',
//                     fontSize: '16px',
//                     fontWeight: 400,
//                     textTransform: 'capitalize',
//                     lineHeight: '33px',
//                     letterSpacing: '0.32px',
//                   }}
//                 >
//                   {item.review}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── LEADERSHIP SECTION ── */}
//       <section className="w-full" style={{ backgroundColor: '#FFFFFF' }}>
//         <div
//           className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16"
//           style={{ paddingTop: '72px', paddingBottom: '72px' }}
//         >
//           <div style={{ textAlign: 'center', marginBottom: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
//             <span style={{ color: '#B42A26', fontSize: isMobile ? '15px' : '18px', fontWeight: 500, textTransform: 'capitalize', letterSpacing: '0.36px' }}>
//               Leadership
//             </span>
//             <h2 style={{ margin: 0, lineHeight: 1.3, textAlign: 'center' }}>
//               <span style={{ color: '#0A2540', fontSize: isMobile ? '24px' : '38px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.76px' }}>
//                 The Team Turning{' '}
//               </span>
//               <span style={{ color: '#B83934', fontSize: isMobile ? '24px' : '38px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.76px' }}>
//                 Ideas
//               </span>
//               <span style={{ color: '#0A2540', fontSize: isMobile ? '24px' : '38px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.76px' }}>
//                 {' '}Into Reality
//               </span>
//             </h2>
//             <p style={{ margin: 0, color: '#494B4D', fontSize: isMobile ? '13px' : '16px', fontWeight: 400, textTransform: 'capitalize', letterSpacing: '0.32px' }}>
//               Meet The Visionary Leaders Driving Innovation And Excellence At Kavach Global.
//             </p>
//           </div>

//           <div
//             className="hide-scrollbar"
//             style={{
//               display: 'flex',
//               gap: isMobile ? '0px' : '32px',
//               overflowX: 'auto',
//               paddingBottom: '16px',
//               paddingTop: '12px',
//               scrollbarWidth: 'none',
//               msOverflowStyle: 'none',
//               scrollSnapType: isMobile ? 'x mandatory' : 'none',
//             }}
//           >
//             {[
//               { img: rajwant, name: 'Dr. Rajwant Rai', role: 'Chairman, Kavach Group' },
//               { img: taksh, name: 'Mr. Taksh Raval', role: 'Group Marketing Director (CMO)' },
//               { img: anitk, name: 'CA Ankit Sudrania', role: 'Group Chief Financial Officer' },
//               { img: abijeet, name: 'Mr. Abhijeet Wadekar', role: 'Chief Technology Officer (CTO)' },
//               { img: jitin, name: 'Mr. Jitin', role: 'Director, Kavach Group' },
//             ].map((person, i) => (
//               <div
//                 key={i}
//                 style={{
//                   flexShrink: 0,
//                   width: isMobile ? '100%' : '260px',
//                   position: 'relative',
//                   paddingLeft: isMobile ? '0px' : '8px',
//                   paddingTop: isMobile ? '0px' : '8px',
//                   scrollSnapAlign: 'start',
//                   display: 'flex',
//                   justifyContent: isMobile ? 'center' : 'flex-start',
//                 }}
//               >
//                 <div style={{ position: 'relative', width: isMobile ? '280px' : '260px' }}>
//                   <div style={{
//                     position: 'absolute', left: isMobile ? '0px' : '0px', top: isMobile ? '0px' : '0px',
//                     width: isMobile ? '280px' : '260px',
//                     height: '370px',
//                     borderRadius: '20px', backgroundColor: '#B83934', zIndex: 0,
//                     transform: isMobile ? 'translate(-8px, -8px)' : 'translate(-8px, -8px)'
//                   }} />
//                   <div className="person-card-hover" style={{
//                     position: 'relative', zIndex: 1, borderRadius: '20px',
//                     backgroundColor: '#FFFFFF', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.10)', overflow: 'hidden'
//                   }}>
//                     <div style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
//                       <img src={person.img} alt={person.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
//                     </div>
//                     <div style={{
//                       padding: '14px 16px 16px', backgroundColor: '#FFFFFF',
//                       borderTop: '1px solid rgba(10, 37, 64, 0.08)',
//                       display: 'flex', flexDirection: 'column', gap: '3px'
//                     }}>
//                       <span style={{ color: '#0A2540', fontSize: isMobile ? '13px' : '16px', fontWeight: 700, textTransform: 'capitalize', letterSpacing: '0.32px' }}>{person.name}</span>
//                       <span style={{ color: '#494B4D', fontSize: isMobile ? '11px' : '13px', fontWeight: 400, textTransform: 'capitalize', letterSpacing: '0.26px' }}>{person.role}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             {!isMobile && <div style={{ flexShrink: 0, width: '10px' }} />}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;

// import React, { useRef, useEffect,useState } from 'react';
// import img1 from "../assets/img-1.png";
// import img2 from "../assets/img-2.png";
// import img3 from "../assets/img-3.png";
// import img4 from "../assets/img-3.png";
// import img5 from "../assets/img-5.png";

// import Aboutbg from "../assets/AboutBg.png";
// import EnginerAbout from "../assets/EnginerAbout.png";
// import Domin from "../assets/Domin.png";
// import WhyChose from "../assets/WhyChose.png";
// import whyP from "../assets/whyP.png";
// import key from "../assets/key.png";

// import amnex from "../assets/Amnex.png";
// import Arvind from "../assets/Arvind.png";
// import green from "../assets/green.png";
// import Udgam from "../assets/Udgam.png";
// import Troikaa from "../assets/Troikaa.png";
// import Rubber from "../assets/Rubber.png";
// import Omspace from "../assets/Omspace.png";
// import Paras from "../assets/Paras.png";
// import Licoln from "../assets/Lincoln.png";
// import Adani from "../assets/Adani.png";


// import mission from "../assets/mision.png";
// import vision from "../assets/vision.png";
// import star from "../assets/star.svg";
// import jitin from "../assets/jitin.jpg";
// import rajwant from "../assets/rajwant.jpg";
// import taksh from "../assets/taksh.jpg";
// import anitk from "../assets/anitk.jpg";
// import abijeet from "../assets/abijeet.jpg";

// import Physical from "../assets/Py1.png";
// import Facility from "../assets/FM1.png";
// import ICT from "../assets/ITC1.png";
// import Cloud from "../assets/Cloud.png";

// import HR from "../assets/HR.png";
// import Smart from "../assets/Smart.png";

// import Health from "../assets/HelL.png";
// import Infrastructure from "../assets/IProject.png";
// import Data from "../assets/DataC.png";


// const NAVBAR_HEIGHT = 82;
// const slides = [img1, img2, img3, img4, img5];
// const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];
// const TOTAL = extendedSlides.length;

// function Home() {
//   const containerRef = useRef(null);
//   const trackRef = useRef(null);
//   const isDragging = useRef(false);
//   const startX = useRef(0);
//   const scrollLeftRef = useRef(0);
//   const hasDragged = useRef(false);
//   const autoScrollTimerRef = useRef(null);
//   const posRef = useRef(1);
//   const isJumping = useRef(false);

//   const getWidth = () => containerRef.current?.offsetWidth || 0;

//   const jumpTo = (index) => {
//     const container = containerRef.current;
//     if (!container) return;
//     isJumping.current = true;
//     container.style.scrollBehavior = 'auto';
//     container.scrollLeft = index * getWidth();
//     posRef.current = index;
//     requestAnimationFrame(() => {
//       requestAnimationFrame(() => {
//         if (container) container.style.scrollBehavior = 'smooth';
//         isJumping.current = false;
//       });
//     });
//   };

//   const smoothTo = (index) => {
//     const container = containerRef.current;
//     if (!container) return;
//     container.style.scrollBehavior = 'smooth';
//     container.scrollLeft = index * getWidth();
//     posRef.current = index;
//   };

//   const handleScrollEnd = () => {
//     if (isJumping.current) return;
//     const container = containerRef.current;
//     if (!container) return;
//     const width = getWidth();
//     if (!width) return;
//     const pos = Math.round(container.scrollLeft / width);
//     if (pos === 0) {
//       jumpTo(slides.length);
//     } else if (pos === TOTAL - 1) {
//       jumpTo(1);
//     } else {
//       posRef.current = pos;
//     }
//   };

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;
//     container.style.scrollBehavior = 'auto';
//     container.scrollLeft = 1 * (container.offsetWidth || 0);
//     posRef.current = 1;
//     requestAnimationFrame(() => {
//       if (container) container.style.scrollBehavior = 'smooth';
//     });
//   }, []);

//   useEffect(() => {
//     const onResize = () => {
//       const container = containerRef.current;
//       if (!container) return;
//       container.style.scrollBehavior = 'auto';
//       container.scrollLeft = posRef.current * container.offsetWidth;
//     };
//     window.addEventListener('resize', onResize);
//     return () => window.removeEventListener('resize', onResize);
//   }, []);

//   const startAutoScroll = () => {
//     stopAutoScroll();
//     autoScrollTimerRef.current = setInterval(() => {
//       const next = posRef.current + 1;
//       smoothTo(next);
//     }, 10000);
//   };

//   const stopAutoScroll = () => {
//     if (autoScrollTimerRef.current) {
//       clearInterval(autoScrollTimerRef.current);
//       autoScrollTimerRef.current = null;
//     }
//   };

//   useEffect(() => {
//     startAutoScroll();
//     return () => stopAutoScroll();
//   }, []);

//   const snapToSlide = () => {
//     const container = containerRef.current;
//     if (!container) return;
//     const width = getWidth();
//     if (!width) return;
//     const index = Math.round(container.scrollLeft / width);
//     const clamped = Math.max(0, Math.min(index, TOTAL - 1));
//     smoothTo(clamped);
//   };

//   const onMouseDown = (e) => {
//     isDragging.current = true;
//     hasDragged.current = false;
//     startX.current = e.pageX;
//     scrollLeftRef.current = containerRef.current?.scrollLeft || 0;
//     if (containerRef.current) containerRef.current.style.cursor = 'grabbing';
//     stopAutoScroll();
//   };

//   const onMouseMove = (e) => {
//     if (!isDragging.current) return;
//     const diff = startX.current - e.pageX;
//     if (Math.abs(diff) > 5) hasDragged.current = true;
//     if (containerRef.current) {
//       containerRef.current.scrollLeft = scrollLeftRef.current + diff;
//     }
//   };

//   // eslint-disable-next-line no-unused-vars
//   const onMouseUp = (e) => {
//     isDragging.current = false;
//     if (containerRef.current) containerRef.current.style.cursor = 'grab';

//     if (!hasDragged.current) {
//       smoothTo(posRef.current + 1);
//     } else {
//       snapToSlide();
//     }

//     hasDragged.current = false;
//     startAutoScroll();
//   };

//   const onTouchStart = (e) => {
//     startX.current = e.touches[0].pageX;
//     scrollLeftRef.current = containerRef.current?.scrollLeft || 0;
//     stopAutoScroll();
//   };

//   const onTouchMove = (e) => {
//     const diff = startX.current - e.touches[0].pageX;
//     if (containerRef.current) {
//       containerRef.current.scrollLeft = scrollLeftRef.current + diff;
//     }
//   };

//   const onTouchEnd = () => {
//     snapToSlide();
//     startAutoScroll();
//   };

//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 768);
//     check();
//     window.addEventListener('resize', check);
//     return () => window.removeEventListener('resize', check);
//   }, []);

//   return (
//     <div className="w-full" style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}>

//       {/* ── HOVER STYLES ── */}
//       <style>{`
//         .card-hover {
//           transition: transform 0.25s ease, box-shadow 0.25s ease;
//           cursor: default;
//         }
//         .card-hover:hover {
//           transform: translateY(-6px);
//           box-shadow: 0px 16px 36px rgba(180, 42, 38, 0.18);
//         }
//         .client-hover {
//           transition: transform 0.25s ease, box-shadow 0.25s ease, outline 0.25s ease;
//           cursor: default;
//         }
//         .client-hover:hover {
//           transform: translateY(-5px);
//           box-shadow: 0px 12px 28px rgba(10, 37, 64, 0.12);
//           outline: 1.5px solid rgba(180, 42, 38, 0.40);
//         }
//         .person-card-hover {
//           transition: transform 0.25s ease, box-shadow 0.25s ease;
//           cursor: default;
//         }
//         .person-card-hover:hover {
//           transform: translateY(-6px);
//           box-shadow: 0px 16px 36px rgba(180, 42, 38, 0.22);
//         }
//         .why-img-hover {
//           overflow: hidden;
//         }
//         .why-img-hover img {
//           transition: transform 0.3s ease;
//         }
//         .why-img-hover:hover img {
//           transform: scale(1.06);
//         }
//         .btn-hover {
//           transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease !important;
//         }
//         .btn-hover:hover {
//           transform: translateY(-2px) !important;
//           box-shadow: 0px 8px 20px rgba(255, 209, 40, 0.50) !important;
//           filter: brightness(1.06) !important;
//         }
//       `}</style>

//       {/* ── HERO SLIDER ── */}
//       <div
//         ref={containerRef}
//         className="w-full overflow-x-hidden relative select-none h-[68vw] min-h-[320px] max-h-[480px] md:h-[min(750px,90vh)] md:max-h-none md:min-h-0"
//         style={{
//           cursor: 'grab',
//           scrollBehavior: 'smooth',
//         }}
//         onMouseDown={onMouseDown}
//         onMouseMove={onMouseMove}
//         onMouseUp={onMouseUp}
//         onMouseLeave={onMouseUp}
//         onTouchStart={onTouchStart}
//         onTouchMove={onTouchMove}
//         onTouchEnd={onTouchEnd}
//         onScroll={handleScrollEnd}
//       >
//         <div
//           ref={trackRef}
//           className="flex h-full"
//           style={{ width: `${TOTAL * 100}%` }}
//         >
//           {extendedSlides.map((slide, index) => (
//             <div
//               key={index}
//               className="relative flex-shrink-0 h-full"
//               style={{ width: `${100 / TOTAL}%` }}
//             >
//               <img
//                 src={slide}
//                 alt={`Slide ${index}`}
//                 className="w-full h-full object-cover pointer-events-none"
//                 style={{ objectPosition: isMobile ? 'center center' : 'right 20%' }}
//                 draggable={false}
//               />

//               {/* Mobile: centered at bottom | Desktop: bottom-14 right-[31%] */}
//               <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-14 md:right-[31%] md:left-auto md:translate-x-0">
//                 <a
//                   href="/contact"
//                   className="inline-flex items-center gap-2 bg-[#F5C518] hover:brightness-105 transition-all no-underline pointer-events-auto text-[13px] px-[14px] py-[8px] md:text-[16px] md:px-[20px] md:py-[10px]"
//                   style={{
//                     color: '#0A2540',
//                     fontWeight: 600,
//                     textTransform: 'capitalize',
//                     letterSpacing: '0.42px',
//                     whiteSpace: 'nowrap',
//                     textDecoration: 'none',
//                     borderRadius: '10px',
//                   }}
//                   onClick={(e) => e.stopPropagation()}
//                 >
//                   Get In Touch
//                   <svg
//                     width="14"
//                     height="14"
//                     className="md:w-4 md:h-4"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="#0A2540"
//                     strokeWidth="2.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <line x1="7" y1="17" x2="17" y2="7" />
//                     <polyline points="7 7 17 7 17 17" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── ABOUT SECTION ── */}
//       <section
//         className="w-full relative overflow-hidden"
//         style={{
//           backgroundImage: `url(${Aboutbg})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//         }}
//       >
//         <div
//           className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center gap-10"
//           style={{ paddingTop: '72px', paddingBottom: '72px' }}
//         >
//           <div className="flex-1 flex flex-col gap-5">
//             <span
//               style={{
//                 color: '#B42A26',
//                 fontSize: '18px',
//                 fontWeight: 500,
//                 textTransform: 'capitalize',
//                 letterSpacing: '0.36px',
//               }}
//             >
//               About US
//             </span>

//             <h2
//               style={{
//                 margin: 0,
//                 lineHeight: 1.25,
//                 fontSize: '38px',
//                 fontWeight: 700,
//                 textTransform: 'capitalize',
//                 letterSpacing: '0.76px',
//               }}
//             >
//               <span style={{ color: '#0A2540' }}>Driving Integrated</span>
//               <br />
//               <span style={{ color: '#0A2540' }}>Solutions For A </span>
//               <span style={{ color: '#DA3A34' }}>Smarter </span>
//               <span style={{ color: '#0A2540' }}>Future</span>
//             </h2>

//             <div
//               style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: '14px',
//                 color: '#4A5568',
//                 fontSize: '15px',
//                 fontWeight: 400,
//                 lineHeight: 1.75,
//                 letterSpacing: '0.36px'
//               }}
//             >
//               <p style={{ margin: 0 }}>
//                 The Kavach Group Is A Leading Conglomerate Providing Comprehensive,
//                 Integrated Solutions Across A Wide Range Of Industries. Our Expertise
//                 Spans Facility Management, ICT Infrastructure, Healthcare, Data Center VPS,
//                 Power &amp; Utilities, Cloud Hosting, Server Colocation, HR Outsourcing, IT
//                 Services, Communication Technologies, And Data-Driven Analytics.
//               </p>
//               <p style={{ margin: 0 }}>
//                 By Leveraging The Combined Strengths Of Kavach, Kalibre, And Fact IT
//                 Solutions, We Offer End-To-End, Customized Solutions That Meet The
//                 Dynamic Needs Of Today's Businesses.
//               </p>
//               <p style={{ margin: 0 }}>
//                 With Over 23,000 +Skilled Professionals, 7500+ Satisfied Clients, And A Strong
//                 Presence In 8+ Countries, We Are Committed To Driving Innovation,
//                 Operational Efficiency, And Sustainable Growth Across Diverse Industries.
//               </p>
//             </div>

//             <div style={{ marginTop: '8px' }}>
//               <a
//                 href="/new/about"
//                 className="inline-flex items-center gap-2 hover:brightness-90 transition-all"
//                 style={{
//                   backgroundColor: '#FFD128',
//                   borderRadius: '4px',
//                   padding: '14px 28px',
//                   textDecoration: 'none',
//                   color: '#0A2540',
//                   fontSize: '21px',
//                   fontWeight: 600,
//                   textTransform: 'capitalize',
//                   letterSpacing: '0.42px',
//                   whiteSpace: 'nowrap',
//                   display: 'inline-flex',
//                   alignItems: 'center',
//                   gap: '8px',
//                 }}
//               >
//                 More About
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
//                   stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                   <line x1="7" y1="17" x2="17" y2="7" />
//                   <polyline points="7 7 17 7 17 17" />
//                 </svg>
//               </a>
//             </div>
//           </div>

//           <div
//             className="flex-shrink-0 flex items-end justify-center"
//             style={{ width: '100%', maxWidth: '480px' }}
//           >
//             <img
//               src={EnginerAbout}
//               alt="Engineer About"
//               style={{
//                 width: '100%',
//                 height: 'auto',
//                 objectFit: 'contain',
//                 display: 'block',
//               }}
//             />
//           </div>
//         </div>
//       </section>

//       {/* ── CORE EXPERTISE / DOMAIN SECTION ── */}
//       <section
//         className="w-full relative overflow-hidden"
//         style={{
//           backgroundImage: `url(${Domin})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//         }}
//       >
//         <div
//           className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16"
//           style={{ paddingTop: '72px', paddingBottom: '72px' }}
//         >
//           <div className="flex flex-col items-center" style={{ marginBottom: '48px', gap: '8px' }}>
//             <span
//               style={{
//                 color: '#B42A26',
//                 fontSize: '18px',
//                 fontWeight: 500,
//                 textTransform: 'capitalize',
//                 letterSpacing: '0.36px',
//               }}
//             >
//               Core Expertise
//             </span>
//             <h2
//               style={{
//                 margin: 0,
//                 color: '#0A2540',
//                 fontSize: '38px',
//                 fontWeight: 700,
//                 textTransform: 'capitalize',
//                 letterSpacing: '0.76px',
//                 textAlign: 'center',
//               }}
//             >
//               Domain Represent
//             </h2>
//           </div>

//           <div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
//             style={{ gap: '24px' }}
//           >
//             {[
//               {
//                 icon: Physical,
//                 title: 'Physical Security Services',
//                 desc: 'Advanced Integrated Security Including Surveillance, Access Control, And Rapid Response Systems Protecting Your Assets Around The Clock.',
//                 href: '/services/physical-security',
//               },
//               {
//                 icon: Facility,
//                 title: 'Facility Management',
//                 desc: 'End-To-End Facility Management Ensuring Seamless Operations, Maintenance Excellence, And A Productive Work Environment.',
//                 href: '/services/facility-management',
//               },
//               {
//                 icon: ICT,
//                 title: 'ICT Infrastructure',
//                 desc: 'Cutting-Edge ICT Solutions — Networking, Cloud Deployments, Enterprise Software, And Digital Automation — Powering Organizations Of Every Size.',
//                 href: '/services/ict-infrastructure',
//               },
//               {
//                 icon: Data,
//                 title: 'Data Center',
//                 desc: 'Design, Build, And Management Of Enterprise-Grade Data Centers With 99.99% Uptime, Tier IV Readiness, And Round-The-Clock Operations Support.',
//                 href: '/services/data-center',
//               },
//               {
//                 icon: Infrastructure,
//                 title: 'Infrastructure Projects',
//                 desc: 'Large-Scale Roads, Energy, Water Systems, And Smart City Networks — Building The Backbone Of Modern Cities And Industrial Ecosystems.',
//                 href: '/services/infrastructure',
//               },
//               {
//                 icon: Cloud,
//                 title: 'Cloud & Communication',
//                 desc: 'Cloud Contact Centers, Conversational AI, And Enterprise Communication Platforms For Seamless Omnichannel Connectivity.',
//                 href: '/services/cloud-communication',
//               },
//               {
//                 icon: Smart,
//                 title: 'Smart City Solutions',
//                 desc: 'Intelligent Traffic Management, Emergency Response Systems, And GIS-Based Solutions For Modern Smart Cities.',
//                 href: '/services/smart-city',
//               },
//               {
//                 icon: HR,
//                 title: 'HR & Payroll Outsourcing',
//                 desc: '360-Degree Payroll Solutions, HR Management, And Workforce Services For Enterprises Of All Sizes.',
//                 href: '/services/hr-payroll',
//               },
//               {
//                 icon: Health,
//                 title: 'HealthTech & GovTech',
//                 desc: 'Digital Health Worker Systems, Drug Distribution Platforms, And E-Governance Solutions Improving Public Services At Scale.',
//                 href: '/services/healthtech-govtech',
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="card-hover"
//                 style={{
//                   width: '100%',
//                   backgroundColor: '#FFFFFF',
//                   borderRadius: '20px',
//                   borderBottom: '3px solid #B83934',
//                   padding: '30px 17px',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'flex-start',
//                   alignItems: 'flex-start',
//                   gap: '20px',
//                   boxSizing: 'border-box',
//                 }}
//               >
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: '13px', width: '100%' }}>
//                   <div style={{ width: '70px', height: '70px', position: 'relative', flexShrink: 0 }}>
//                     <div
//                       style={{
//                         position: 'absolute',
//                         inset: 0,
//                         background: 'linear-gradient(144deg, #FFBCBA 0%, rgba(255,188,186,0) 100%)',
//                         borderRadius: '12px',
//                       }}
//                     />
//                     <img
//                       src={item.icon}
//                       alt={item.title}
//                       style={{
//                         position: 'absolute',
//                         left: '8px',
//                         top: '8px',
//                         width: '54px',
//                         height: '54px',
//                         objectFit: 'contain',
//                       }}
//                     />
//                   </div>

//                   <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '100%' }}>
//                     <div
//                       style={{
//                         color: '#B42A26',
//                         fontSize: '21px',
//                         fontWeight: 700,
//                         textTransform: 'capitalize',
//                         letterSpacing: '0.63px',
//                         wordWrap: 'break-word',
//                       }}
//                     >
//                       {item.title}
//                     </div>
//                     <div
//                       style={{
//                         color: '#494B4D',
//                         fontSize: '16px',
//                         fontWeight: 400,
//                         textTransform: 'capitalize',
//                         lineHeight: '30px',
//                         letterSpacing: '0.32px',
//                         wordWrap: 'break-word',
//                       }}
//                     >
//                       {item.desc}
//                     </div>
//                   </div>
//                 </div>

//                 <a
//                   href={item.href}
//                   style={{
//                     display: 'inline-flex',
//                     alignItems: 'center',
//                     gap: '10px',
//                     textDecoration: 'none',
//                   }}
//                 >
//                   <span
//                     style={{
//                       color: '#0A2540',
//                       fontSize: '16px',
//                       fontWeight: 500,
//                       textTransform: 'capitalize',
//                       letterSpacing: '0.32px',
//                     }}
//                   >
//                     Read More
//                   </span>
//                   <span
//                     style={{
//                       width: '24px',
//                       height: '24px',
//                       display: 'inline-flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       flexShrink: 0,
//                     }}
//                   >
//                     <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
//                       xmlns="http://www.w3.org/2000/svg">
//                       <line x1="8" y1="16" x2="16" y2="8"
//                         stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" />
//                       <polyline points="9,8 16,8 16,15"
//                         stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
//                     </svg>
//                   </span>
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── WHY CHOOSE US SECTION ── */}
//       <section
//         className="w-full relative overflow-hidden"
//         style={{
//           backgroundImage: `url(${WhyChose})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//         }}
//       >
//         <div
//           className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16"
//           style={{ paddingTop: '72px', paddingBottom: '72px' }}
//         >
//           <div className="flex flex-col lg:flex-row items-center gap-16">

//             <div
//               className="flex-shrink-0 relative mx-auto lg:mx-0"
//               style={{
//                 width: 'min(460px, 90vw)',
//                 height: 'min(560px, 70vw)',
//                 minHeight: '380px',
//               }}
//             >
//               <div
//                 style={{
//                   position: 'absolute',
//                   left: '-10px',
//                   top: '-10px',
//                   width: 'min(320px, 65vw)',
//                   height: 'min(420px, 55vw)',
//                   minHeight: '260px',
//                   borderRadius: '20px',
//                   backgroundColor: '#B42A26',
//                   zIndex: 1,
//                 }}
//               />
//               {/* ── KEY IMAGE with hover ── */}
//               <div
//                 className="why-img-hover"
//                 style={{
//                   position: 'absolute',
//                   left: '0px',
//                   top: '0px',
//                   width: 'min(320px, 65vw)',
//                   height: 'min(420px, 55vw)',
//                   minHeight: '260px',
//                   borderRadius: '20px',
//                   zIndex: 2,
//                 }}
//               >
//                 <img
//                   src={key}
//                   alt="Security Shield"
//                   style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
//                 />
//               </div>
//               {/* ── WHY-P IMAGE with hover ── */}
//               <div
//                 className="why-img-hover"
//                 style={{
//                   position: 'absolute',
//                   left: 'min(140px, 28vw)',
//                   top: 'min(320px, 42vw)',
//                   width: 'min(320px, 62vw)',
//                   height: 'min(220px, 32vw)',
//                   minHeight: '140px',
//                   borderRadius: '20px',
//                   outline: '7px solid white',
//                   zIndex: 10,
//                 }}
//               >
//                 <img
//                   src={whyP}
//                   alt="Team Meeting"
//                   style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
//                 />
//               </div>
//             </div>

//             <div className="flex-1 flex flex-col w-full" style={{ gap: '16px' }}>
//               <span
//                 style={{
//                   color: '#B42A26',
//                   fontSize: '18px',
//                   fontWeight: 500,
//                   textTransform: 'capitalize',
//                   letterSpacing: '0.36px',
//                 }}
//               >
//                 Why Choose Us
//               </span>

//               <h2 style={{ margin: 0, lineHeight: 1.3 }}>
//                 <span
//                   style={{
//                     color: '#0A2540',
//                     fontSize: '38px',
//                     fontWeight: 700,
//                     textTransform: 'capitalize',
//                     letterSpacing: '0.76px',
//                   }}
//                 >
//                   Your Trusted <br />Partner In{' '}
//                 </span>
//                 <span
//                   style={{
//                     color: '#B42A26',
//                     fontSize: '38px',
//                     fontWeight: 700,
//                     textTransform: 'capitalize',
//                     letterSpacing: '0.76px',
//                   }}
//                 >
//                   Integrated
//                 </span>
//                 <span
//                   style={{
//                     color: '#0A2540',
//                     fontSize: '38px',
//                     fontWeight: 700,
//                     textTransform: 'capitalize',
//                     letterSpacing: '0.76px',
//                   }}
//                 >
//                   {' '}Solutions
//                 </span>
//               </h2>

//               <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//                 {[
//                   'At Kavach Global, We Deliver More Than Just Services—We Provide Integrated, End-To-End Solutions Designed To Simplify Operations And Drive Measurable Results. With A Strong Foundation Built On Experience, Scale, And Expertise, We Support Organizations Across Industries With Seamless Service Delivery Under One Roof.',
//                   'Our Technology-Driven Approach Combines Innovation With Operational Excellence, Enabling Smarter Decision-Making, Improved Efficiency, And Reduced Costs. Backed By A Large And Skilled Workforce, We Ensure Consistent Quality, Strict Compliance, And Proactive Risk Management Across Every Project.',
//                   'Our Solutions Are Flexible And Scalable, Adapting To Your Evolving Business Needs While Supporting Long-Term Growth. With A Strong Focus On Sustainability And A Client-First Mindset, We Aim To Build Lasting Partnerships And Deliver Outcomes That Truly Make A Difference.',
//                 ].map((para, i) => (
//                   <p
//                     key={i}
//                     style={{
//                       margin: 0,
//                       color: '#494B4D',
//                       fontSize: '15px',
//                       fontWeight: 400,
//                       textTransform: 'capitalize',
//                       lineHeight: '28px',
//                       letterSpacing: '0.36px',
//                     }}
//                   >
//                     {para}
//                   </p>
//                 ))}
//               </div>

//               <div style={{ marginTop: '8px' }}>
//                 {/* ── CONTACT NOW BUTTON with hover ── */}
//                 <a
//                   href="/contact"
//                   className="btn-hover"
//                   style={{
//                     display: 'inline-flex',
//                     alignItems: 'center',
//                     gap: '8px',
//                     backgroundColor: '#FFD128',
//                     borderRadius: '10px',
//                     padding: '12px 28px',
//                     textDecoration: 'none',
//                   }}
//                 >
//                   <span
//                     style={{
//                       color: '#0A2540',
//                       fontSize: '16px',
//                       fontWeight: 600,
//                       textTransform: 'capitalize',
//                       letterSpacing: '0.42px',
//                     }}
//                   >
//                     Contact Now
//                   </span>
//                   <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
//                     xmlns="http://www.w3.org/2000/svg">
//                     <line x1="8" y1="16" x2="16" y2="8"
//                       stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" />
//                     <polyline points="9,8 16,8 16,15"
//                       stroke="#0A2540" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── OUR CLIENTS SECTION ── */}
//       <section className="w-full bg-white">
//         <div
//           className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16"
//           style={{ paddingTop: '72px', paddingBottom: '72px' }}
//         >
//           <div style={{ textAlign: 'center', marginBottom: '48px' }}>
//             <h2 style={{ margin: 0 }}>
//               <span
//                 style={{
//                   color: '#0A2540',
//                   fontSize: '38px',
//                   fontWeight: 700,
//                   textTransform: 'capitalize',
//                   letterSpacing: '0.76px',
//                 }}
//               >
//                 Our{' '}
//               </span>
//               <span
//                 style={{
//                   color: '#B42A26',
//                   fontSize: '38px',
//                   fontWeight: 700,
//                   textTransform: 'capitalize',
//                   letterSpacing: '0.76px',
//                 }}
//               >
//                 Clients
//               </span>
//             </h2>
//             <p
//               style={{
//                 margin: '8px 0 0 0',
//                 color: '#494B4D',
//                 fontSize: '16px',
//                 fontWeight: 400,
//                 textTransform: 'capitalize',
//                 letterSpacing: '0.32px',
//               }}
//             >
//               Trusted By Leading Organizations Across Industries Worldwide
//             </p>
//           </div>

//           <div
//             className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
//             style={{ gap: '16px' }}
//           >
//             {[
//               { src: Adani, alt: 'Adani' },
//               { src: amnex, alt: 'Amnex' },
//               { src: Arvind, alt: 'Arvind Smartspaces' },
//               { src: green, alt: 'Eco Green' },
//               { src: Udgam, alt: 'Udgam School For Children' },
//               { src: Troikaa, alt: 'Troikaa' },
//               { src: Rubber, alt: 'Rubber King' },
//               { src: Omspace, alt: 'OM Space' },
//               { src: Paras, alt: 'Paras Trucks & Buses' },
//               { src: Licoln, alt: 'Lincoln' },
//             ].map((client, i) => (
//               <div
//                 key={i}
//                 className="client-hover"
//                 style={{
//                   padding: '30px 36px',
//                   borderRadius: '13px',
//                   outline: '1px solid rgba(10, 37, 64, 0.20)',
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   backgroundColor: '#fff',
//                 }}
//               >
//                 <img
//                   src={client.src}
//                   alt={client.alt}
//                   style={{
//                     width: '100px',
//                     height: '42px',
//                     objectFit: 'contain',
//                   }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── MISSION & VISION SECTION ── */}
//       <section
//         className="w-full"
//         style={{
//           background: 'linear-gradient(180deg, #FFFDF5 0%, #FFF1F0 100%)',
//         }}
//       >
//         <div
//           className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16"
//           style={{ paddingTop: '72px', paddingBottom: '72px' }}
//         >
//           <div style={{ textAlign: 'center', marginBottom: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
//             <span
//               style={{
//                 color: '#B42A26',
//                 fontSize: '18px',
//                 fontWeight: 500,
//                 textTransform: 'capitalize',
//                 letterSpacing: '0.36px',
//               }}
//             >
//               Our Purpose
//             </span>
//             <h2 style={{ margin: 0 }}>
//               <span
//                 style={{
//                   color: '#0A2540',
//                   fontSize: '38px',
//                   fontWeight: 700,
//                   textTransform: 'capitalize',
//                   letterSpacing: '0.76px',
//                 }}
//               >
//                 Mission &{' '}
//               </span>
//               <span
//                 style={{
//                   color: '#B42A26',
//                   fontSize: '38px',
//                   fontWeight: 700,
//                   textTransform: 'capitalize',
//                   letterSpacing: '0.76px',
//                 }}
//               >
//                 Vision
//               </span>
//             </h2>
//             <p
//               style={{
//                 margin: 0,
//                 color: '#494B4D',
//                 fontSize: '18px',
//                 fontWeight: 400,
//                 textTransform: 'capitalize',
//                 lineHeight: '33px',
//                 letterSpacing: '0.36px',
//               }}
//             >
//               Two Guiding Pillars That Shape Every Decision We Make
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '24px' }}>

//             {/* ── MISSION CARD ── */}
//             <div
//               className="card-hover"
//               style={{
//                 backgroundColor: '#FFFFFF',
//                 borderRadius: '30px',
//                 boxShadow: '0px 5px 14px rgba(0, 0, 0, 0.15)',
//                 outline: '1px solid rgba(180, 42, 38, 0.60)',
//                 overflow: 'hidden',
//                 position: 'relative',
//                 padding: '30px 24px',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: '10px',
//               }}
//             >
//               <div
//                 style={{
//                   position: 'absolute',
//                   right: 0,
//                   top: 0,
//                   width: '50%',
//                   height: '50%',
//                   backgroundColor: '#FFF7F6',
//                   zIndex: 0,
//                 }}
//               />
//               <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
//                   <img
//                     src={mission}
//                     alt="Mission"
//                     style={{ width: '60px', height: '60px', objectFit: 'contain', flexShrink: 0 }}
//                   />
//                   <div style={{ display: 'flex', flexDirection: 'column' }}>
//                     <span
//                       style={{
//                         color: '#B42A26',
//                         fontSize: '18px',
//                         fontWeight: 500,
//                         textTransform: 'capitalize',
//                         letterSpacing: '0.36px',
//                       }}
//                     >
//                       Mission
//                     </span>
//                     <span
//                       style={{
//                         color: '#0A2540',
//                         fontSize: '25px',
//                         fontWeight: 700,
//                         textTransform: 'uppercase',
//                         letterSpacing: '0.68px',
//                       }}
//                     >
//                       OUR MISSION
//                     </span>
//                   </div>
//                 </div>

//                 <p
//                   style={{
//                     margin: 0,
//                     color: '#494B4D',
//                     fontSize: '14px',
//                     fontWeight: 400,
//                     textTransform: 'capitalize',
//                     lineHeight: '33px',
//                     letterSpacing: '0.36px',
//                   }}
//                 >
//                   To Deliver Integrated, Technology-Driven Solutions That Empower Businesses To Operate Efficiently, Securely, And Sustainably — Transforming Complex Challenges Into Streamlined Opportunities So Clients Focus On What They Do Best.
//                 </p>

//                 {[
//                   { title: 'Integrated Solutions', sub: 'End-to-end tech services across industries' },
//                   { title: 'Client Empowerment', sub: 'Enabling growth through smart outsourcing' },
//                   { title: 'Sustainable Operations', sub: 'Long-term value with ethical practices' },
//                 ].map((item, i) => (
//                   <div
//                     key={i}
//                     style={{
//                       padding: '12px 16px 11px',
//                       background: 'linear-gradient(90deg, #FFE4E3 0%, rgba(255, 211, 210, 0) 100%)',
//                       borderTopLeftRadius: '12px',
//                       borderBottomLeftRadius: '12px',
//                       borderLeft: '2px solid #B42A26',
//                       display: 'flex',
//                       flexDirection: 'column',
//                       gap: '2px',
//                     }}
//                   >
//                     <span
//                       style={{
//                         color: '#0A2540',
//                         fontSize: '16px',
//                         fontWeight: 500,
//                         textTransform: 'capitalize',
//                         letterSpacing: '0.32px',
//                       }}
//                     >
//                       {item.title}
//                     </span>
//                     <span
//                       style={{
//                         color: '#494B4D',
//                         fontSize: '13px',
//                         fontWeight: 400,
//                         textTransform: 'capitalize',
//                         letterSpacing: '0.26px',
//                       }}
//                     >
//                       {item.sub}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* ── VISION CARD ── */}
//             <div
//               className="card-hover"
//               style={{
//                 backgroundColor: '#FFFFFF',
//                 borderRadius: '30px',
//                 boxShadow: '0px 5px 14px rgba(0, 0, 0, 0.15)',
//                 outline: '1px solid rgba(180, 42, 38, 0.60)',
//                 overflow: 'hidden',
//                 position: 'relative',
//                 padding: '30px 24px',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: '10px',
//               }}
//             >
//               <div
//                 style={{
//                   position: 'absolute',
//                   right: 0,
//                   top: 0,
//                   width: '50%',
//                   height: '50%',
//                   backgroundColor: '#FFF7F6',
//                   zIndex: 0,
//                 }}
//               />
//               <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
//                   <img
//                     src={vision}
//                     alt="Vision"
//                     style={{ width: '60px', height: '60px', objectFit: 'contain', flexShrink: 0 }}
//                   />
//                   <div style={{ display: 'flex', flexDirection: 'column' }}>
//                     <span
//                       style={{
//                         color: '#B42A26',
//                         fontSize: '18px',
//                         fontWeight: 500,
//                         textTransform: 'capitalize',
//                         letterSpacing: '0.36px',
//                       }}
//                     >
//                       Vision
//                     </span>
//                     <span
//                       style={{
//                         color: '#0A2540',
//                         fontSize: '25px',
//                         fontWeight: 700,
//                         textTransform: 'uppercase',
//                         letterSpacing: '0.68px',
//                       }}
//                     >
//                       OUR VISION
//                     </span>
//                   </div>
//                 </div>

//                 <p
//                   style={{
//                     margin: 0,
//                     color: '#494B4D',
//                     fontSize: '14px',
//                     fontWeight: 400,
//                     textTransform: 'capitalize',
//                     lineHeight: '33px',
//                     letterSpacing: '0.36px',
//                   }}
//                 >
//                   To Be The Most Trusted And Innovative Global Conglomerate — Recognized For Transforming Industries Through Cutting-Edge Technology, Exceptional Service, And A Deep Commitment To Societal Progress.
//                 </p>

//                 {[
//                   { title: 'Global Trust', sub: 'Recognized leader across 7+ countries' },
//                   { title: 'Technology Leadership', sub: 'Setting benchmarks in digital transformation' },
//                   { title: 'Societal Progress', sub: 'Building a better future for all stakeholders' },
//                 ].map((item, i) => (
//                   <div
//                     key={i}
//                     style={{
//                       padding: '12px 16px 11px',
//                       background: 'linear-gradient(90deg, #FFE4E3 0%, rgba(255, 211, 210, 0) 100%)',
//                       borderTopLeftRadius: '12px',
//                       borderBottomLeftRadius: '12px',
//                       borderLeft: '2px solid #B42A26',
//                       display: 'flex',
//                       flexDirection: 'column',
//                       gap: '2px',
//                     }}
//                   >
//                     <span
//                       style={{
//                         color: '#0A2540',
//                         fontSize: '16px',
//                         fontWeight: 500,
//                         textTransform: 'capitalize',
//                         letterSpacing: '0.32px',
//                       }}
//                     >
//                       {item.title}
//                     </span>
//                     <span
//                       style={{
//                         color: '#494B4D',
//                         fontSize: '13px',
//                         fontWeight: 400,
//                         textTransform: 'capitalize',
//                         letterSpacing: '0.26px',
//                       }}
//                     >
//                       {item.sub}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ── TESTIMONIALS SECTION ── */}
//       <section
//         className="w-full"
//         style={{
//           background: 'linear-gradient(180deg, #FFFDF5 0%, #FFF1F0 100%)',
//         }}
//       >
//         <div
//           className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16"
//           style={{ paddingTop: '72px', paddingBottom: '72px' }}
//         >
//           <div style={{ textAlign: 'center', marginBottom: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
//             <span
//               style={{
//                 color: '#B42A26',
//                 fontSize: '18px',
//                 fontWeight: 500,
//                 textTransform: 'capitalize',
//                 letterSpacing: '0.36px',
//               }}
//             >
//               Testimonials
//             </span>
//             <h2 style={{ margin: 0, lineHeight: 1.3, textAlign: 'center' }}>
//               <span
//                 style={{
//                   color: '#0A2540',
//                   fontSize: '38px',
//                   fontWeight: 700,
//                   textTransform: 'capitalize',
//                   letterSpacing: '0.76px',
//                 }}
//               >
//                 Why Our Clients Trust Us For
//               </span>
//               <br />
//               <span
//                 style={{
//                   color: '#B42A26',
//                   fontSize: '38px',
//                   fontWeight: 700,
//                   textTransform: 'capitalize',
//                   letterSpacing: '0.76px',
//                 }}
//               >
//                 Integrated
//               </span>
//               <span
//                 style={{
//                   color: '#0A2540',
//                   fontSize: '38px',
//                   fontWeight: 700,
//                   textTransform: 'capitalize',
//                   letterSpacing: '0.76px',
//                 }}
//               >
//                 {' '}Solutions
//               </span>
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '24px' }}>
//             {[
//               {
//                 initials: 'RP',
//                 name: 'Ramesh Patel',
//                 role: 'CEO, TechVision Pvt. Ltd',
//                 review: 'Kavach Global Transformed Our Security Operations Completely. Their Integrated Solutions Gave Us Real-Time Visibility And Peace Of Mind. Exceptional Service And Professional Team Throughout The Entire Process.',
//               },
//               {
//                 initials: 'SS',
//                 name: 'Sunita Sharma',
//                 role: 'MD, BuildRight Corp',
//                 review: 'The Facility Management Solutions From Kavach Are Outstanding. They Handle Everything Seamlessly And Our Uptime Has Never Been Better. I Would Highly Recommend Them To Any Enterprise Looking For Reliable Partners.',
//               },
//               {
//                 initials: 'AM',
//                 name: 'Arjun Mehta',
//                 role: 'Director, GovTech Solutions',
//                 review: 'Working With Kavach Global On Our Smart City Project Was A Great Experience. Their Team Understood Our Requirements Perfectly And Delivered Beyond Expectations With Excellent Post-Project Support.',
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="card-hover"
//                 style={{
//                   backgroundColor: '#FFFFFF',
//                   borderRadius: '20px',
//                   borderBottom: '3px solid #B83934',
//                   padding: '24px 20px',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   gap: '16px',
//                   boxSizing: 'border-box',
//                 }}
//               >
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
//                   <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//                     <div
//                       style={{
//                         width: '48px',
//                         height: '48px',
//                         borderRadius: '50%',
//                         backgroundColor: '#B42A26',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         flexShrink: 0,
//                       }}
//                     >
//                       <span
//                         style={{
//                           color: '#FFFFFF',
//                           fontSize: '15px',
//                           fontWeight: 600,
//                           letterSpacing: '0.5px',
//                         }}
//                       >
//                         {item.initials}
//                       </span>
//                     </div>

//                     <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1px' }}>
//                       <span
//                         style={{
//                           color: '#0A2540',
//                           fontSize: '16px',
//                           fontWeight: 600,
//                           textTransform: 'capitalize',
//                           letterSpacing: '0.32px',
//                         }}
//                       >
//                         {item.name}
//                       </span>
//                       <span
//                         style={{
//                           color: '#494B4D',
//                           fontSize: '13px',
//                           fontWeight: 400,
//                           textTransform: 'capitalize',
//                           letterSpacing: '0.26px',
//                         }}
//                       >
//                         {item.role}
//                       </span>
//                     </div>

//                     <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
//                       {[...Array(5)].map((_, s) => (
//                         <img
//                           key={s}
//                           src={star}
//                           alt="star"
//                           style={{ width: '16px', height: '16px' }}
//                         />
//                       ))}
//                     </div>
//                   </div>

//                   <div
//                     style={{
//                       width: 'calc(100% + 40px)',
//                       height: '1px',
//                       backgroundColor: '#B42A2666',
//                       borderRadius: '0px',
//                       marginLeft: '-20px',
//                       marginRight: '-20px',
//                     }}
//                   />
//                 </div>

//                 <p
//                   style={{
//                     margin: 0,
//                     color: '#494B4D',
//                     fontSize: '16px',
//                     fontWeight: 400,
//                     textTransform: 'capitalize',
//                     lineHeight: '33px',
//                     letterSpacing: '0.32px',
//                   }}
//                 >
//                   {item.review}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── LEADERSHIP SECTION ── */}
//       <section className="w-full" style={{ backgroundColor: '#FFFFFF' }}>
//         <div
//           className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16"
//           style={{ paddingTop: '72px', paddingBottom: '72px' }}
//         >
//           <div style={{ textAlign: 'center', marginBottom: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
//             <span style={{ color: '#B42A26', fontSize: isMobile ? '15px' : '18px', fontWeight: 500, textTransform: 'capitalize', letterSpacing: '0.36px' }}>
//               Leadership
//             </span>
//             <h2 style={{ margin: 0, lineHeight: 1.3, textAlign: 'center' }}>
//               <span style={{ color: '#0A2540', fontSize: isMobile ? '24px' : '38px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.76px' }}>
//                 The Team Turning{' '}
//               </span>
//               <span style={{ color: '#B83934', fontSize: isMobile ? '24px' : '38px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.76px' }}>
//                 Ideas
//               </span>
//               <span style={{ color: '#0A2540', fontSize: isMobile ? '24px' : '38px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.76px' }}>
//                 {' '}Into Reality
//               </span>
//             </h2>
//             <p style={{ margin: 0, color: '#494B4D', fontSize: isMobile ? '13px' : '16px', fontWeight: 400, textTransform: 'capitalize', letterSpacing: '0.32px' }}>
//               Meet The Visionary Leaders Driving Innovation And Excellence At Kavach Global.
//             </p>
//           </div>

//           <div
//             className="hide-scrollbar"
//             style={{
//               display: 'flex',
//               gap: isMobile ? '0px' : '32px',
//               overflowX: 'auto',
//               paddingBottom: '16px',
//               paddingTop: '12px',
//               scrollbarWidth: 'none',
//               msOverflowStyle: 'none',
//               scrollSnapType: isMobile ? 'x mandatory' : 'none',
//             }}
//           >
//             {[
//               { img: rajwant, name: 'Dr. Rajwant Rai', role: 'Chairman, Kavach Group' },
//               { img: taksh, name: 'Mr. Taksh Raval', role: 'Group Marketing Director (CMO)' },
//               { img: anitk, name: 'CA Ankit Sudrania', role: 'Group Chief Financial Officer' },
//               { img: abijeet, name: 'Mr. Abhijeet Wadekar', role: 'Chief Technology Officer (CTO)' },
//               { img: jitin, name: 'Mr. Jitin', role: 'Director, Kavach Group' },
//             ].map((person, i) => (
//               <div
//                 key={i}
//                 style={{
//                   flexShrink: 0,
//                   width: isMobile ? '100%' : '260px',
//                   position: 'relative',
//                   paddingLeft: isMobile ? '0px' : '8px',
//                   paddingTop: isMobile ? '0px' : '8px',
//                   scrollSnapAlign: 'start',
//                   display: 'flex',
//                   justifyContent: isMobile ? 'center' : 'flex-start',
//                 }}
//               >
//                 <div style={{ position: 'relative', width: isMobile ? '280px' : '260px' }}>
//                   <div style={{
//                     position: 'absolute', left: isMobile ? '0px' : '0px', top: isMobile ? '0px' : '0px',
//                     width: isMobile ? '280px' : '260px',
//                     height: '370px',
//                     borderRadius: '20px', backgroundColor: '#B83934', zIndex: 0,
//                     transform: isMobile ? 'translate(-8px, -8px)' : 'translate(-8px, -8px)'
//                   }} />
//                   <div className="person-card-hover" style={{
//                     position: 'relative', zIndex: 1, borderRadius: '20px',
//                     backgroundColor: '#FFFFFF', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.10)', overflow: 'hidden'
//                   }}>
//                     <div style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
//                       <img src={person.img} alt={person.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
//                     </div>
//                     <div style={{
//                       padding: '14px 16px 16px', backgroundColor: '#FFFFFF',
//                       borderTop: '1px solid rgba(10, 37, 64, 0.08)',
//                       display: 'flex', flexDirection: 'column', gap: '3px'
//                     }}>
//                       <span style={{ color: '#0A2540', fontSize: isMobile ? '13px' : '16px', fontWeight: 700, textTransform: 'capitalize', letterSpacing: '0.32px' }}>{person.name}</span>
//                       <span style={{ color: '#494B4D', fontSize: isMobile ? '11px' : '13px', fontWeight: 400, textTransform: 'capitalize', letterSpacing: '0.26px' }}>{person.role}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             {!isMobile && <div style={{ flexShrink: 0, width: '10px' }} />}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;