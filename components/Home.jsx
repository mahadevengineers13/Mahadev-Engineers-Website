import React, { useRef, useEffect } from "react";

function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section id="home" className="home-hero">

      {/* Fullscreen Video */}
      <video
        ref={videoRef}
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Overlay — dark left side for readability, light right to show video */}
      <div className="hero-overlay" />

      {/* Text Content */}
      <div className="hero-content">
        <div className="accent-line">
          <div className="accent-bar" />
          <div className="accent-dot" />
        </div>
        <h1 className="hero-title">
          <span className="word1">MAHADEV</span>
          <span className="word2">ENGINEERS</span>
        </h1>
        <p className="hero-tagline">TRUST IN CONSISTENT QUALITY</p>
        <div className="divider-line" />
      </div>

      {/* Bottom-right pulsing badge */}
      <div className="corner-badge">
        <span className="pulse-dot" />
        <span className="corner-text">Since 2010</span>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        .home-hero {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #0d1a26;
        }

        .bg-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(to right, rgba(5,12,22,0.72) 0%, rgba(5,12,22,0.35) 45%, rgba(5,12,22,0.15) 100%),
            linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 25%, transparent 70%, rgba(0,0,0,0.45) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.4rem;
          margin-right: 10vw;
          padding-left: 2vw;
          animation: fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .accent-line {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 0.55rem;
        }

        .accent-bar {
          width: 42px;
          height: 3px;
          background: linear-gradient(90deg, #ff6b2b, #ffb347);
          border-radius: 2px;
        }

        .accent-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ff6b2b;
          opacity: 0.75;
        }

        .hero-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: clamp(1.8rem, 4vw, 3.4rem);
          letter-spacing: 2.5px;
          line-height: 1.02;
        }

        .word1 {
          display: inline;
          color: #ffffff;
          text-shadow: 0 2px 24px rgba(0, 0, 0, 0.5);
        }

        .word2 {
          display: inline;
          margin-left: 0.3em;
          background: linear-gradient(135deg, #ff8c42 0%, #ffcf77 55%, #ff6b2b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-tagline {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: clamp(0.6rem, 1.3vw, 0.85rem);
          letter-spacing: 5.5px;
          color: #a8c8e8;
          text-transform: uppercase;
          opacity: 0.95;
          animation: fadeUp 0.9s 0.15s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .hero-sub {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: clamp(0.55rem, 0.9vw, 0.7rem);
          letter-spacing: 2.5px;
          color: rgba(200, 220, 240, 0.35);
          text-transform: uppercase;
          margin-top: 0.8rem;
          animation: fadeUp 0.9s 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .divider-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,140,60,0.55), rgba(255,140,60,0.1), transparent);
          margin-top: 1rem;
        }

        .corner-badge {
          position: absolute;
          bottom: 28px;
          right: 32px;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .pulse-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff6b2b;
          animation: pulseDot 1.8s ease-in-out infinite;
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.6); }
        }

        .corner-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          letter-spacing: 2.5px;
          color: rgba(180, 210, 240, 0.4);
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .hero-content {
            margin-right: 0;
            align-items: center;
            text-align: center;
            padding: 0 1.5rem;
          }
          .accent-line  { justify-content: center; }
          .hero-title   { letter-spacing: 1.5px; }
          .hero-tagline { letter-spacing: 3px; }
          .divider-line { display: none; }
        }
      `}</style>
    </section>
  );
}

export default Home;