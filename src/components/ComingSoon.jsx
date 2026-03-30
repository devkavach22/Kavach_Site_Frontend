/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ComingSoon = () => {
  const navigate = useNavigate();

  const [launchDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 30);
    return d;
  });

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = launchDate - now;
      if (diff <= 0) { clearInterval(timer); return; }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <div style={{
      minHeight: '90vh',
      backgroundColor: '#0f172a',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 20px 32px',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Barlow', sans-serif",
      boxSizing: 'border-box',
    }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Barlow:wght@400;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        .kv-h {
          font-family: 'Barlow Condensed', sans-serif;
          text-transform: uppercase;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }

        .kv-logo-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: nowrap;
        }

        .kv-logo-icon {
          width: 44px;
          height: 44px;
          min-width: 44px;
          flex-shrink: 0;
          background: #f97316;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .kv-brand-text {
          font-family: 'Barlow Condensed', sans-serif;
          text-transform: uppercase;
          color: white;
          font-size: 1.25rem;
          letter-spacing: 0.08em;
          font-weight: 800;
          white-space: nowrap;
          line-height: 1;
        }

        .kv-brand-text span { color: #f97316; }

        .kv-countdown {
          display: flex;
          justify-content: center;
          align-items: stretch;
          gap: 8px;
          width: 100%;
          flex-wrap: nowrap;
          margin-bottom: 32px;
        }

        .kv-tile {
          background: #1e293b;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px;
          padding: 16px 8px;
          flex: 1 1 0;
          min-width: 0;
          text-align: center;
          box-shadow: 0 10px 25px -5px rgba(0,0,0,0.35);
        }

        .kv-tile-value {
          font-family: 'Barlow Condensed', sans-serif;
          text-transform: uppercase;
          font-size: clamp(1.6rem, 6vw, 2.2rem);
          font-weight: 900;
          color: white;
          line-height: 1;
        }

        .kv-tile-value.accent { color: #f97316; }

        .kv-tile-label {
          font-family: 'Barlow Condensed', sans-serif;
          text-transform: uppercase;
          font-size: 0.6rem;
          color: #64748b;
          margin-top: 5px;
          letter-spacing: 0.15em;
        }

        .kv-back-btn {
          background: #ffffff;
          border: none;
          color: #000000;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: background 0.25s, color 0.25s;
          padding: 10px 20px;
          border-radius: 8px;
        }
        .kv-back-btn:hover {
          background: #f97316;
          color: #ffffff;
        }
        .kv-back-btn span {
          font-family: 'Barlow Condensed', sans-serif;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          font-weight: 700;
        }
      `}</style>

      {/* Background Glows */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)',
        animation: 'pulse-glow 8s infinite ease-in-out',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-5%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)',
        animation: 'pulse-glow 10s infinite ease-in-out reverse',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        textAlign: 'center',
        maxWidth: '700px',
        width: '100%',
      }}>

        {/* ── Brand Header ── */}
        <div style={{ marginBottom: '28px', marginTop: '24px' }}>
          <div className="kv-logo-wrap">
            <div className="kv-logo-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22" height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
            </div>
            <span className="kv-brand-text">
              KAVACH <span>DIGITAL</span>
            </span>
          </div>
        </div>

        {/* ── Main Heading ── */}
        <h1 className="kv-h" style={{
          fontSize: 'clamp(2rem, 9vw, 5.5rem)',
          fontWeight: 900,
          lineHeight: 0.92,
          color: 'white',
          marginBottom: '16px',
          letterSpacing: '-0.01em',
        }}>
          REVOLUTIONIZING<br />
          <span style={{ color: '#f97316' }}>YOUR DIGITAL FUTURE</span>
        </h1>

        <p style={{
          fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
          color: '#94a3b8',
          maxWidth: '500px',
          margin: '0 auto 32px',
          lineHeight: 1.6,
          fontWeight: 500,
        }}>
          We are building a scalable infrastructure for modern digital needs.
          The next generation of Kavach is almost ready.
        </p>

        {/* ── Countdown — single row ── */}
        <div className="kv-countdown">
          {[
            { value: timeLeft.days,    label: 'Days' },
            { value: timeLeft.hours,   label: 'Hours' },
            { value: timeLeft.minutes, label: 'Mins' },
            { value: timeLeft.seconds, label: 'Secs' },
          ].map(({ value, label }) => (
            <div key={label} className="kv-tile">
              <div className={`kv-tile-value${label === 'Secs' ? ' accent' : ''}`}>
                {String(value).padStart(2, '0')}
              </div>
              <div className="kv-tile-label">{label}</div>
            </div>
          ))}
        </div>

        {/* ── Back Button ── */}
        <button className="kv-back-btn" onClick={() => navigate('/')}>
          <ArrowLeft size={15} />
          <span>Return to Portal</span>
        </button>

      </div>
    </div>
  );
};

export default ComingSoon;