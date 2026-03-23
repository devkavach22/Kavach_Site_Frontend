/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ComingSoon = () => {
  const navigate = useNavigate();

  // Countdown to a launch date (30 days from now as placeholder)
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles once
    setParticles(
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        size: Math.random() * 6 + 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.4 + 0.1,
      }))
    );
  }, []);

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
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f0f 0%, #1a0a00 40%, #0f0f0f 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
    }}>

      {/* Animated background glow */}
      <div style={{
        position: 'absolute', top: '10%', left: '20%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 65%)',
        animation: 'pulse-glow 4s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '15%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(239,68,68,0.10) 0%, transparent 65%)',
        animation: 'pulse-glow 5s ease-in-out infinite reverse',
        pointerEvents: 'none',
      }} />

      {/* Floating particles */}
      {particles.map(p => (
        <div key={p.id} style={{
          position: 'absolute',
          left: `${p.left}%`,
          top: `${p.top}%`,
          width: `${p.size}px`,
          height: `${p.size}px`,
          borderRadius: '50%',
          background: p.id % 2 === 0 ? '#f97316' : '#ef4444',
          opacity: p.opacity,
          animation: `float-particle ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
          pointerEvents: 'none',
        }} />
      ))}

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(249,115,22,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '700px', width: '100%' }}>

        {/* Logo / Brand */}
        <div style={{ marginBottom: '32px' }}>
          <div
            onClick={() => navigate('/')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              cursor: 'pointer',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(249,115,22,0.2)',
              borderRadius: '50px',
              padding: '8px 20px',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div style={{
              width: 28, height: 28,
              background: 'linear-gradient(135deg, #f97316, #ef4444)',
              borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg viewBox="0 0 48 48" fill="none" width="16" height="16">
                <path d="M24 4L8 11v12c0 10.5 6.8 19.8 16 22 9.2-2.2 16-11.5 16-22V11L24 4z" fill="white" />
                <path d="M18 24l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span style={{ color: 'white', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.02em' }}>
              Kavach Digital Solutions
            </span>
          </div>
        </div>

        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(249,115,22,0.1)',
          border: '1px solid rgba(249,115,22,0.3)',
          borderRadius: '50px', padding: '6px 18px',
          marginBottom: '28px',
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: '50%',
            background: '#f97316',
            boxShadow: '0 0 8px rgba(249,115,22,0.8)',
            animation: 'blink-dot 1.2s ease-in-out infinite',
            display: 'inline-block',
          }} />
          <span style={{ color: '#fb923c', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Launching Soon
          </span>
        </div>

        {/* Main heading */}
        <h1 style={{
          fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          marginBottom: '20px',
          color: 'white',
        }}>
          Something{' '}
          <span style={{
            background: 'linear-gradient(135deg, #f97316, #ef4444, #f97316)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'shimmer-text 3s linear infinite',
          }}>
            Powerful
          </span>
          <br />is on the way
        </h1>

        <p style={{
          fontSize: '1.05rem',
          color: 'rgba(255,255,255,0.5)',
          maxWidth: '480px',
          margin: '0 auto 48px',
          lineHeight: 1.75,
        }}>
          We're putting the finishing touches on something incredible.
          Stay tuned — it'll be worth the wait.
        </p>

        {/* Countdown */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '16px',
          marginBottom: '52px', flexWrap: 'wrap',
        }}>
          {[
            { value: timeLeft.days,    label: 'Days'    },
            { value: timeLeft.hours,   label: 'Hours'   },
            { value: timeLeft.minutes, label: 'Minutes' },
            { value: timeLeft.seconds, label: 'Seconds' },
          ].map(({ value, label }, i) => (
            <div key={label} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '20px 24px',
              minWidth: '80px',
              backdropFilter: 'blur(10px)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: i === 3 ? 'linear-gradient(90deg, #f97316, #ef4444)' : 'rgba(249,115,22,0.3)',
              }} />
              <span style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                fontWeight: 900,
                color: i === 3 ? '#f97316' : 'white',
                lineHeight: 1,
                fontVariantNumeric: 'tabular-nums',
              }}>
                {String(value).padStart(2, '0')}
              </span>
              <span style={{
                fontSize: '0.65rem',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.35)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginTop: '6px',
              }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Email form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} style={{
            display: 'flex', gap: '10px', justifyContent: 'center',
            flexWrap: 'wrap', marginBottom: '40px',
          }}>
            <input
              type="email"
              placeholder="Enter your email for early access"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{
                padding: '14px 22px',
                borderRadius: '12px',
                border: '1.5px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.06)',
                color: 'white',
                fontSize: '0.9rem',
                width: '280px',
                outline: 'none',
                backdropFilter: 'blur(10px)',
                fontFamily: 'inherit',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => e.target.style.borderColor = 'rgba(249,115,22,0.6)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
            <button type="submit" style={{
              padding: '14px 28px',
              borderRadius: '12px',
              border: 'none',
              background: 'linear-gradient(135deg, #f97316, #ef4444)',
              color: 'white',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              boxShadow: '0 6px 24px rgba(249,115,22,0.4)',
              transition: 'all 0.2s',
              fontFamily: 'inherit',
              letterSpacing: '0.02em',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(249,115,22,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(249,115,22,0.4)'; }}
            >
              Notify Me →
            </button>
          </form>
        ) : (
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            background: 'rgba(34,197,94,0.1)',
            border: '1px solid rgba(34,197,94,0.3)',
            borderRadius: '12px', padding: '14px 24px',
            marginBottom: '40px',
          }}>
            <span style={{ color: '#4ade80', fontSize: '1.2rem' }}>✓</span>
            <span style={{ color: '#4ade80', fontWeight: 600, fontSize: '0.9rem' }}>
              You're on the list! We'll notify you at launch.
            </span>
          </div>
        )}

        {/* Back home link */}
        <div>
          <button
            onClick={() => navigate('/')}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem',
              fontFamily: 'inherit', display: 'inline-flex', alignItems: 'center', gap: '6px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
          >
            ← Back to Home
          </button>
        </div>
      </div>

      <style>{`
        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.15); opacity: 0.7; }
        }
        @keyframes float-particle {
          0% { transform: translateY(0px) translateX(0px); }
          100% { transform: translateY(-30px) translateX(15px); }
        }
        @keyframes blink-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes shimmer-text {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        input::placeholder { color: rgba(255,255,255,0.25); }
      `}</style>
    </div>
  );
};

export default ComingSoon;