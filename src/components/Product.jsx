/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
    {
        id: 'konvert-hr',
        name: 'Konvert HR',
        tagline: 'Revolutionizing HR & Payroll',
        description: 'A state-of-the-art payroll processing and HR platform that is user-friendly, highly secure, and compliant with legal and statutory norms. Designed to minimize manual intervention and streamline processes for businesses of all sizes.',
        badge: 'HR Suite',
        accentColor: '#f97316',
        gradientFrom: '#f97316',
        gradientTo: '#ef4444',
        bgGlow: 'rgba(249,115,22,0.15)',
        siteLink: 'https://marketing.konverthr.com/',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" width="28" height="28">
                <circle cx="18" cy="14" r="7" fill="currentColor" />
                <path d="M6 36c0-7 5-11 12-11s12 4 12 11" fill="currentColor" />
                <circle cx="34" cy="18" r="5" fill="currentColor" opacity="0.6" />
                <path d="M28 30c0-4 2.5-6 6-6s6 2 6 6" fill="currentColor" opacity="0.4" />
            </svg>
        ),
        features: [
            { icon: '⚡', label: 'Smart Hiring', desc: 'AI-powered candidate screening & ranking that finds the perfect fit 10x faster.' },
            { icon: '📋', label: 'Auto Onboarding', desc: 'Paperless, seamless employee onboarding with automated workflows.' },
            { icon: '💰', label: 'Payroll Engine', desc: 'Automated salary processing with built-in compliance, TDS, PF, ESI & tax calculations.' },
            { icon: '📊', label: 'Performance AI', desc: 'Real-time analytics and 360° reviews to boost team productivity.' },
            { icon: '🕐', label: 'Time & Attendance', desc: 'Track leaves, working hours effortlessly with biometric and digital integration.' },
            { icon: '⚙️', label: 'Custom HR Settings', desc: 'Configure company policies, salary structures and approval workflows.' },
        ],
        stats: [{ v: '10x', l: 'Faster Hiring' }, { v: '80%', l: 'Admin Saved' }, { v: '99.9%', l: 'Accuracy' }],
        highlights: ['Employee Portal', 'Leave Tracking', 'Tax Management', 'Multi-branch', 'Payroll Automation', 'Statutory Reports'],
    },
    {
        id: 'kavach-ai',
        name: 'Kavach AI',
        tagline: 'Intelligent Security Shield',
        description: 'Enterprise-grade AI security platform providing real-time threat detection and predictive cyber defense for your entire digital infrastructure — protecting every endpoint, every second.',
        badge: 'AI Security',
        accentColor: '#dc2626',
        gradientFrom: '#dc2626',
        gradientTo: '#7f1d1d',
        bgGlow: 'rgba(220,38,38,0.15)',
        siteLink: null,
        icon: (
            <svg viewBox="0 0 48 48" fill="none" width="28" height="28">
                <path d="M24 4L8 11v12c0 10.5 6.8 19.8 16 22 9.2-2.2 16-11.5 16-22V11L24 4z" fill="currentColor" />
                <path d="M18 24l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        features: [
            { icon: '🔍', label: 'Threat Detection', desc: 'Real-time AI-powered threat identification with millisecond response times.' },
            { icon: '📡', label: 'Deep Monitoring', desc: '360° infrastructure surveillance with intelligent anomaly detection.' },
            { icon: '🤖', label: 'Predictive Defense', desc: 'Machine learning models predict threats before they cause damage.' },
            { icon: '☁️', label: 'Cloud Protection', desc: 'End-to-end protection across all cloud platforms and hybrid environments.' },
            { icon: '📄', label: 'Compliance Reports', desc: 'Automated compliance documentation and audit-ready security reports.' },
        ],
        stats: [{ v: '0.1ms', l: 'Response' }, { v: '99.99%', l: 'Uptime' }, { v: '24/7', l: 'Monitoring' }],
        highlights: ['Threat Intel', 'Auto Response', 'Compliance Reports', 'Cloud Protection', 'Incident Response'],
    },
];

const TypewriterText = ({ text }) => {
    const COLORS = [{ gradient: false }, { gradient: true }];
    const [tw, setTw] = useState({ displayed: '', index: 0, deleting: false, colorIndex: 0 });

    useEffect(() => {
        const { displayed, index, deleting } = tw;
        let delay;
        if (!deleting && index < text.length)
            delay = setTimeout(() => setTw(p => ({ ...p, displayed: p.displayed + text[p.index], index: p.index + 1 })), 30);
        else if (!deleting && index === text.length)
            delay = setTimeout(() => setTw(p => ({ ...p, deleting: true })), 1800);
        else if (deleting && displayed.length > 0)
            delay = setTimeout(() => setTw(p => ({ ...p, displayed: p.displayed.slice(0, -1) })), 18);
        else
            delay = setTimeout(() => setTw(p => ({ displayed: '', index: 0, deleting: false, colorIndex: (p.colorIndex + 1) % COLORS.length })), 30);
        return () => clearTimeout(delay);
    }, [tw, text]);

    const isGrad = COLORS[tw.colorIndex].gradient;
    return (
        <span style={isGrad ? { background: 'linear-gradient(135deg,#f97316,#ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 700 } : { color: '#9ca3af', fontWeight: 600 }}>
            {tw.displayed}
            <span style={{ display: 'inline-block', width: '2px', height: '1em', background: isGrad ? '#f97316' : '#9ca3af', marginLeft: '2px', verticalAlign: 'text-bottom', animation: 'blink 0.8s step-end infinite', WebkitTextFillColor: 'initial' }} />
        </span>
    );
};

const Product = () => {
    const [active, setActive] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [activeFeature, setActiveFeature] = useState(null);
    const navigate = useNavigate();
    const p = products[active];

    const switchProduct = (i) => {
        if (i === active) return;
        setAnimating(true);
        setTimeout(() => { setActive(i); setAnimating(false); setActiveFeature(null); }, 250);
    };

    const [orbPos, setOrbPos] = useState({ x: 0, y: 0 });
    const heroRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!heroRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();
        setOrbPos({
            x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
            y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
        });
    };

    return (
        <div className="min-h-screen" style={{ fontFamily: "'Barlow', sans-serif", background: '#1a2332', overflowX: 'hidden' }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;0,900;1,800&family=Barlow:wght@400;500;600&display=swap');
                :root {
                    --org:   #e05a00;
                    --org2:  #f97316;
                    --dark:  #1a2332;
                    --dark2: #111827;
                    --txt:   #4b5563;
                    --txt2:  #6b7280;
                }
                .kv-h { font-family:'Barlow Condensed',sans-serif; font-weight:800; text-transform:uppercase; letter-spacing:0.02em; line-height:1.05; }
                .kv-label { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:0.72rem; letter-spacing:0.28em; text-transform:uppercase; color:var(--org); display:flex; align-items:center; gap:6px; }
                .kv-label::before { content:''; display:inline-block; width:8px; height:8px; border-radius:50%; background:var(--org); flex-shrink:0; }
                .kv-btn {
                    position:relative; font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:0.9rem;
                    letter-spacing:0.08em; text-transform:uppercase; padding:14px 32px;
                    border-radius:24px 0px 24px 0px; display:inline-flex; align-items:center; gap:10px;
                    transition:all 0.3s ease; text-decoration:none; overflow:hidden; cursor:pointer; border:none; z-index:10;
                    background:linear-gradient(135deg,#f97316 0%,#ea580c 50%,#c2410c 100%);
                    color:#fff; box-shadow:0 4px 15px rgba(234,88,12,0.35);
                }
                .kv-btn:hover {
                    background:#c94e00; transform:translateY(-3px);
                    box-shadow:0 8px 30px rgba(234,88,12,0.55), 0 0 20px rgba(249,115,22,0.3);
                    border-radius:0px 24px 0px 24px;
                }
                .kv-btn-ghost {
                    font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:0.8rem;
                    letter-spacing:0.08em; text-transform:uppercase; padding:9px 20px;
                    border-radius:20px 0px 20px 0px; display:inline-flex; align-items:center; gap:8px;
                    transition:all 0.3s ease; cursor:pointer; text-decoration:none;
                    background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.25);
                    color:rgba(255,255,255,0.85);
                }
                .kv-btn-ghost:hover {
                    background:rgba(255,255,255,0.2); color:#fff; transform:translateY(-2px);
                    border-radius:0px 20px 0px 20px; box-shadow:0 6px 20px rgba(0,0,0,0.25);
                }
                .prod-tab {
                    font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:0.88rem;
                    letter-spacing:0.08em; text-transform:uppercase; padding:14px 24px;
                    border:none; cursor:pointer; transition:all 0.25s ease;
                    border-bottom:3px solid transparent; background:transparent;
                    display:flex; align-items:center; gap:10px;
                }
                .prod-stat-card {
                    background:#ffffff !important;
                    border:1px solid #e5e7eb !important;
                    transition:transform 0.35s, box-shadow 0.35s, border-color 0.35s;
                    position:relative; overflow:hidden;
                }
                .prod-stat-card::before {
                    content:''; position:absolute; top:0; left:0; right:0; height:3px;
                    background:linear-gradient(90deg,transparent,var(--org),transparent);
                }
                .prod-stat-card:hover {
                    transform:translateY(-6px);
                    border-color:var(--org) !important;
                    box-shadow:
                        0 0 0 1px rgba(224,90,0,0.4),
                        0 0 24px rgba(224,90,0,0.3),
                        0 0 60px rgba(224,90,0,0.12),
                        0 20px 40px rgba(0,0,0,0.15) !important;
                }
                .prod-stat-card .stat-icon { transition:background 0.2s, color 0.2s, box-shadow 0.2s; }
                .prod-stat-card:hover .stat-icon {
                    background:var(--org) !important;
                    color:#fff !important;
                    box-shadow:0 0 20px rgba(224,90,0,0.6) !important;
                }
                .feat-row { transition:all 0.25s ease; }
                .feat-row:hover { transform:translateX(4px); }
                .hl-pill {
                    font-family:'Barlow Condensed',sans-serif; font-weight:700;
                    letter-spacing:0.06em; text-transform:uppercase; font-size:0.75rem;
                    padding:6px 14px; border-radius:20px 0px 20px 0px; transition:all 0.2s;
                }
                .hl-pill:hover { transform:translateY(-2px); filter:brightness(1.1); }
                .prod-identity-card {
                    border-radius:4px 24px 4px 24px;
                    position:relative; overflow:hidden; color:white; padding:32px;
                }
                .feat-panel {
                    background:#ffffff;
                    border:1px solid #f3f4f6;
                    border-radius:4px 24px 4px 24px;
                    padding:32px;
                    box-shadow:0 4px 20px rgba(0,0,0,0.05);
                }
                @keyframes ctaGlowPulse {
                    0%,100%{opacity:0.5;transform:scale(1)}
                    50%{opacity:1;transform:scale(1.08)}
                }
                .cta-orb-1 {
                    position:absolute; top:-60px; left:50%; transform:translateX(-50%);
                    width:520px; height:200px; border-radius:50%;
                    background:radial-gradient(ellipse,rgba(249,115,22,0.22) 0%,transparent 70%);
                    animation:ctaGlowPulse 3.5s ease-in-out infinite;
                    pointer-events:none; filter:blur(18px);
                }
                .cta-orb-2 {
                    position:absolute; bottom:-40px; left:50%; transform:translateX(-50%);
                    width:380px; height:160px; border-radius:50%;
                    background:radial-gradient(ellipse,rgba(224,90,0,0.15) 0%,transparent 70%);
                    animation:ctaGlowPulse 4s ease-in-out infinite reverse;
                    pointer-events:none; filter:blur(14px);
                }
                .dot-bg-dark  { background-image:radial-gradient(rgba(255,255,255,0.03) 1px,transparent 1px); background-size:28px 28px; }
                .dot-bg-light { background-image:radial-gradient(rgba(0,0,0,0.04) 1px,transparent 1px); background-size:28px 28px; }
                @keyframes blink  { 0%,100%{opacity:1} 50%{opacity:0} }
                @keyframes pulse  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(0.8)} }
                @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
                .fade-up { animation:fadeUp 0.6s ease forwards; opacity:0; }
                .hero-badge-pill {
                    display:inline-flex; align-items:center; gap:8px;
                    padding:7px 20px; border-radius:100px;
                    background:rgba(249,115,22,0.1);
                    border:1px solid rgba(249,115,22,0.3);
                    margin-bottom:32px;
                }
                .hero-stat-bar {
                    display:inline-flex;
                    align-items:stretch;
                    overflow:hidden;
                    border:1px solid rgba(255,255,255,0.12);
                    background:rgba(255,255,255,0.05);
                    backdrop-filter:blur(12px);
                    border-radius:8px;
                }
                    @keyframes floatUpDown {
    0%, 100% { transform: translateY(0px); box-shadow: 0 4px 20px rgba(249,115,22,0.1); }
    50%       { transform: translateY(-10px); box-shadow: 0 14px 30px rgba(249,115,22,0.25); }
}
            `}</style>

            {/* ══ 1. HERO ══ */}
            <section
                ref={heroRef}
                onMouseMove={handleMouseMove}
                className="relative overflow-hidden dot-bg-dark"
                style={{
                    background: '#1a2332',
                    padding: '130px 20px 110px',
                    minHeight: '520px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* Mouse-follow ambient orbs */}
                <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(249,115,22,0.15) 0%,transparent 70%)', transform: `translate(${orbPos.x}px,${orbPos.y}px)`, transition: 'transform 0.4s ease', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(239,68,68,0.1) 0%,transparent 70%)', transform: `translate(${-orbPos.x}px,${-orbPos.y}px)`, transition: 'transform 0.4s ease', pointerEvents: 'none' }} />
                {/* Central glow */}
                <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '400px', borderRadius: '50%', background: 'radial-gradient(ellipse,rgba(249,115,22,0.07) 0%,transparent 65%)', pointerEvents: 'none', filter: 'blur(10px)' }} />

                <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 5, textAlign: 'center' }}>

                    {/* Animated badge */}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="hero-badge-pill">
                            <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#f97316', animation: 'pulse 2s infinite' }} />
                            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#f97316' }}>
                                Our Digital Products
                            </span>
                        </div>
                    </div>

                    {/* Main headline */}
                    <h1
                        className="kv-h"
                        style={{
                            fontSize: 'clamp(2.8rem,7vw,6.2rem)',
                            color: '#ffffff',
                            lineHeight: 1,
                            margin: '0 0 0 0',
                        }}
                    >
                        KAVACH&nbsp;
                        <span style={{
                            background: 'linear-gradient(135deg,#f97316 0%,#ef4444 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            DIGITAL
                        </span>
                        &nbsp;SOLUTIONS
                    </h1>

                    {/* Ornamental divider */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', margin: '22px auto 26px' }}>
                        <div style={{ height: '1px', width: '70px', background: 'linear-gradient(90deg,transparent,rgba(249,115,22,0.55))' }} />
                        <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(249,115,22,0.4)' }} />
                            <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#f97316' }} />
                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(249,115,22,0.4)' }} />
                        </div>
                        <div style={{ height: '1px', width: '70px', background: 'linear-gradient(90deg,rgba(249,115,22,0.55),transparent)' }} />
                    </div>

                    {/* Typewriter subtext */}
                    <p style={{ fontSize: '1.05rem', color: '#9ca3af', maxWidth: '600px', lineHeight: 1.8, margin: '0 auto 44px' }}>
                        <TypewriterText text="Empowering modern enterprises with automated HR management and elite AI-driven security — built for scale, speed, and compliance." />
                    </p>

                    {/* Stats bar with proper dividers */}
                    {/* Stats - 3 separate floating cards */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                        {[
                            { v: '500+', l: 'Enterprises', delay: '0s' },
                            { v: '99.9%', l: 'Accuracy', delay: '0.3s' },
                            { v: '24/7', l: 'Support', delay: '0.6s' },
                        ].map(({ v, l, delay }, i) => (
                            <div
                                key={i}
                                style={{
                                    padding: '20px 36px',
                                    textAlign: 'center',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(249,115,22,0.25)',
                                    borderRadius: '10px',
                                    backdropFilter: 'blur(12px)',
                                    animation: `floatUpDown 3s ease-in-out infinite`,
                                    animationDelay: delay,
                                    minWidth: '120px',
                                }}
                            >
                                <div className="kv-h" style={{ fontSize: '1.6rem', color: '#f97316', lineHeight: 1 }}>{v}</div>
                                <div style={{ fontSize: '0.58rem', color: '#6b7280', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', marginTop: '6px' }}>{l}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom angled divider */}
                <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: 10 }}>
                    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: '100%', height: '50px', display: 'block' }}>
                        <path d="M0,40 L1440,0 L1440,60 L0,60 Z" fill="#ffffff" />
                    </svg>
                </div>
            </section>

            {/* ══ 2. PRODUCT TABS ══ */}
            <div style={{ background: '#ffffff', borderBottom: '1px solid #f3f4f6', padding: '0 20px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'flex' }}>
                    {products.map((prod, i) => (
                        <button
                            key={prod.id}
                            onClick={() => switchProduct(i)}
                            className="prod-tab"
                            style={{
                                color: active === i ? prod.accentColor : '#6b7280',
                                borderBottomColor: active === i ? prod.accentColor : 'transparent',
                            }}
                        >
                            <span style={{ color: active === i ? prod.accentColor : '#9ca3af' }}>{prod.icon}</span>
                            {prod.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* ══ 3. MAIN CONTENT ══ */}
            <section className="dot-bg-light" style={{ background: '#ffffff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px 20px' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
                        gap: '28px',
                        opacity: animating ? 0 : 1,
                        transform: animating ? 'translateY(10px)' : 'translateY(0)',
                        transition: 'all 0.25s ease',
                    }}>
                        {/* LEFT */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                            {/* Identity card */}
                            <div
                                className="prod-identity-card"
                                style={{
                                    background: `linear-gradient(135deg,${p.gradientFrom},${p.gradientTo})`,
                                    boxShadow: `0 12px 40px ${p.bgGlow}`,
                                }}
                            >
                                <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '130px', height: '130px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
                                <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '90px', height: '90px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', position: 'relative', zIndex: 2 }}>
                                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px', padding: '4px 14px' }}>
                                        <span style={{ color: 'white', opacity: 0.9 }}>{p.icon}</span>
                                        <span className="kv-h" style={{ fontSize: '0.72rem', color: '#fff' }}>{p.badge}</span>
                                    </div>
                                    {p.siteLink ? (
                                        <a href={p.siteLink} target="_blank" rel="noopener noreferrer" className="kv-btn-ghost">
                                            View Site ↗
                                        </a>
                                    ) : (
                                        <div onClick={() => navigate('/coming-soon')} className="kv-btn-ghost" style={{ cursor: 'pointer' }}>
                                            Coming Soon
                                        </div>
                                    )}
                                </div>
                                <h2 className="kv-h" style={{ fontSize: 'clamp(1.4rem,2.5vw,1.8rem)', marginBottom: '12px', position: 'relative', zIndex: 1, color: '#fff' }}>
                                    {p.tagline}
                                </h2>
                                <p style={{ fontSize: '0.92rem', lineHeight: 1.75, opacity: 0.9, position: 'relative', zIndex: 1 }}>
                                    {p.description}
                                </p>
                            </div>

                            {/* Stats */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px' }}>
                                {p.stats.map((s, i) => (
                                    <div key={i} className="prod-stat-card" style={{ textAlign: 'center', padding: '20px 12px', borderRadius: '8px', cursor: 'default' }}>
                                        <div
                                            className="stat-icon"
                                            style={{
                                                width: '40px', height: '40px', borderRadius: '50%',
                                                background: '#fff3ee', color: 'var(--org)',
                                                border: '1px solid #fde0cc',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                margin: '0 auto 10px',
                                                fontSize: '1rem', fontWeight: 900,
                                                fontFamily: "'Barlow Condensed',sans-serif",
                                            }}
                                        >
                                            ✦
                                        </div>
                                        <div className="kv-h" style={{ fontSize: '1.6rem', color: p.accentColor }}>{s.v}</div>
                                        <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '4px' }}>{s.l}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Highlights */}
                            <div style={{ background: '#fff', borderRadius: '4px 20px 4px 20px', padding: '24px', border: '1px solid #f3f4f6', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                                <div className="kv-label" style={{ marginBottom: '14px' }}>Key Capabilities</div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {p.highlights.map((h, i) => (
                                        <span key={i} className="hl-pill" style={{ background: p.bgGlow, border: `1px solid ${p.accentColor}25`, color: p.accentColor }}>
                                            {h}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT — Features panel */}
                        <div className="feat-panel">
                            <div className="kv-label" style={{ marginBottom: '20px' }}>Core Features</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {p.features.map((f, i) => (
                                    <div
                                        key={i}
                                        className="feat-row"
                                        onClick={() => setActiveFeature(activeFeature === i ? null : i)}
                                        style={{
                                            borderRadius: '4px 14px 4px 14px', cursor: 'pointer', overflow: 'hidden',
                                            border: activeFeature === i ? `1.5px solid ${p.accentColor}55` : '1.5px solid rgba(0,0,0,0.06)',
                                            background: activeFeature === i ? p.bgGlow : '#f9fafb',
                                            boxShadow: activeFeature === i ? `0 4px 20px ${p.bgGlow}` : 'none',
                                            transition: 'all 0.25s ease',
                                        }}
                                        onMouseEnter={e => {
                                            if (activeFeature !== i) {
                                                e.currentTarget.style.background = '#f3f4f6';
                                                e.currentTarget.style.borderColor = `${p.accentColor}30`;
                                                e.currentTarget.style.boxShadow = `0 4px 16px ${p.bgGlow}`;
                                            }
                                        }}
                                        onMouseLeave={e => {
                                            if (activeFeature !== i) {
                                                e.currentTarget.style.background = '#f9fafb';
                                                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)';
                                                e.currentTarget.style.boxShadow = 'none';
                                            }
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 18px' }}>
                                            <div style={{
                                                width: '44px', height: '44px',
                                                borderRadius: '4px 12px 4px 12px', flexShrink: 0,
                                                background: activeFeature === i
                                                    ? `linear-gradient(135deg,${p.gradientFrom},${p.gradientTo})`
                                                    : '#ffffff',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                fontSize: '1.3rem',
                                                boxShadow: activeFeature === i ? `0 4px 12px ${p.bgGlow}` : '0 2px 8px rgba(0,0,0,0.06)',
                                                transition: 'all 0.25s',
                                            }}>
                                                {f.icon}
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <div className="kv-h" style={{ fontSize: '0.9rem', color: activeFeature === i ? p.accentColor : 'var(--dark)', transition: 'color 0.2s' }}>
                                                    {f.label}
                                                </div>
                                                {activeFeature !== i && (
                                                    <div style={{ fontSize: '0.78rem', color: '#9ca3af', marginTop: '2px' }}>Click to learn more</div>
                                                )}
                                            </div>
                                            <div style={{
                                                color: activeFeature === i ? p.accentColor : '#d1d5db',
                                                transition: 'all 0.25s',
                                                transform: activeFeature === i ? 'rotate(90deg)' : 'rotate(0)',
                                                fontSize: '1.2rem',
                                            }}>›</div>
                                        </div>
                                        {activeFeature === i && (
                                            <div style={{ padding: '0 18px 16px 78px', fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--txt)' }}>
                                                {f.desc}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider into dark CTA */}
                <div style={{ position: 'relative', marginTop: '60px' }}>
                    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: '100%', height: '50px', display: 'block' }}>
                        <path d="M0,60 L1440,20 L1440,60 Z" fill="#1a2332" />
                    </svg>
                </div>
            </section>

            {/* ══ 4. CTA ══ */}
            <section className="dot-bg-dark" style={{ background: '#1a2332', position: 'relative', overflow: 'hidden', padding: '80px 20px 100px' }}>
                <div className="cta-orb-1" />
                <div className="cta-orb-2" />
                <div style={{ position: 'absolute', top: '10%', right: '5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(249,115,22,0.08) 0%,transparent 70%)', filter: 'blur(10px)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(249,115,22,0.06) 0%,transparent 70%)', filter: 'blur(10px)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '100px', background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.25)', marginBottom: '20px' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--org2)', animation: 'pulse 2s infinite' }} />
                        <span className="kv-label" style={{ fontSize: '0.65rem' }}>Special Bundle Offer</span>
                    </div>
                    <h2 className="kv-h text-white" style={{ fontSize: 'clamp(2rem,5vw,3.4rem)', marginBottom: '8px' }}>
                        READY TO{' '}
                        <span style={{ background: 'linear-gradient(135deg,#f97316,#ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            TRANSFORM
                        </span>
                    </h2>
                    <h2 className="kv-h text-white" style={{ fontSize: 'clamp(2rem,5vw,3.4rem)', marginBottom: '24px' }}>
                        YOUR BUSINESS?
                    </h2>
                    <p style={{ fontSize: '0.95rem', color: '#9ca3af', maxWidth: '500px', margin: '0 auto 32px', lineHeight: 1.75 }}>
                        Get both products at special bundle pricing —{' '}
                        <span style={{ color: '#e5e7eb', fontWeight: 600 }}>Konvert HR + Kavach AI</span>{' '}
                        — and supercharge your entire enterprise.
                    </p>
                    <button onClick={() => navigate('/contact')} className="kv-btn" style={{ fontSize: '1rem', padding: '16px 44px' }}>
                        Talk to Sales →
                    </button>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '28px', marginTop: '28px', flexWrap: 'wrap' }}>
                        {['No Credit Card', 'Free Onboarding', '24/7 Support'].map((t, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6b7280', fontSize: '0.8rem', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                                <span style={{ color: 'var(--org2)' }}>✓</span> {t}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Product;