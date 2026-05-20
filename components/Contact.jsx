import React, { useState } from "react";

const ContactPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCallNow = () => {
    window.location.href = "tel:+919576961723";
  };

  const handleQuickEmail = () => {
    window.location.href = "mailto:mahadevengineers13@gmail.com?subject=Inquiry%20from%20Contact%20Page&body=Hello%20Mahadev%20Engineers%2C%0D%0A%0D%0AI%20would%20like%20to%20know%20more%20about%20your%20engineering%20solutions...";
  };

  const handleCopyEmail = async () => {
    const emailText = "mahadevengineers13@gmail.com";
    try {
      await navigator.clipboard.writeText(emailText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert("Unable to copy, you can manually copy: mahadevengineers13@gmail.com");
    }
  };

  const contactCards = [
    {
      id: 1,
      icon: "📍",
      title: "Visit Us",
      details: ["Mahadev Engineers Vasundhara Appartement Flat No 3 MIDC Jalgaon 425001"],
      highlight: "✧ landmark near MSEB substation",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      icon: "📞",
      title: "Call Directly",
      details: ["+91 9576961723", "Mon – Sat : 9am – 6pm"],
      highlight: "⚡ emergency support available",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      icon: "✉️",
      title: "Write to us",
      details: ["mahadevengineers13@gmail.com"],
      highlight: "📋 Click to copy email",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 4,
      icon: "🕐",
      title: "Work Schedule",
      details: ["Monday – Friday : 9:00 AM – 6:00 PM", "Sunday & Holidays : Closed"],
      highlight: "✨ walk-ins welcome",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    }
  ];

  return (
    <>
      <div className="contact-static">
        {/* Animated Background Elements */}
        <div className="animated-bg">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
        </div>

        {/* Hero Header */}
        <div className="hero-header">
          <div className="bg-ghost-text">
            <span>CONNECT</span>
            <span className="ghost-second">CREATE</span>
          </div>
          <div className="badge-wrapper">
            <span className="badge-light">
              <span className="badge-dot"></span>
              ✦ reach out ✦
            </span>
          </div>
          <h1 className="glow-text">
            Let's Talk
            <span className="text-gradient"> Innovation</span>
          </h1>
          <div className="accent-glow"></div>
          <p className="hero-sub">
            Engineering solutions that shape the future — your vision, our expertise.
          </p>
        </div>

        {/* Animated Contact Cards - Scaled Down */}
        <div className="info-grid">
          {contactCards.map((card, index) => (
            <div
              key={card.id}
              className={`info-card-item ${hoveredCard === card.id ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-icon-wrapper">
                <div className="card-icon-bg" style={{ background: card.gradient }}></div>
                <div className="card-icon">{card.icon}</div>
              </div>
              <h3>{card.title}</h3>
              <div className="info-detail">
                {card.details.map((detail, i) => (
                  <p key={i}>
                    {detail && detail.includes("gmail.com") ? (
                      <>
                        {detail}
                        {card.id === 3 && (
                          <button className="copy-email-btn" onClick={handleCopyEmail}>
                            {copied ? "✓ Copied!" : "📋 Copy"}
                          </button>
                        )}
                      </>
                    ) : (
                      detail
                    )}
                  </p>
                ))}
                <span className="small-highlight">{card.highlight}</span>
              </div>
              {hoveredCard === card.id && <div className="card-glow"></div>}
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="section-title">
          <span className="section-badge">📍 location</span>
          <h2>Our workspace hub</h2>
          <div className="sub-line">Industrial excellence, right in the heart of MIDC</div>
        </div>
        
        <div className="map-wrapper-modern">
          <div className="map-overlay"></div>
          <iframe
            title="Mahadev Engineers Location Map"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=20.99820751334766,75.58443749584006"
            style={{ border: 0, width: "100%", height: "350px", display: "block" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
  {/* Premium Bottom CTA */}
     
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,600;14..32,700;14..32,800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .contact-static {
          max-width: 1400px;
          margin: 0 auto;
          padding: 60px 24px 100px;
          position: relative;
          font-family: 'Inter', sans-serif;
          background: linear-gradient(135deg, #f5f7fe 0%, #eef2ff 100%);
          overflow-x: hidden;
        }

        .animated-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(74, 108, 247, 0.08) 0%, rgba(74, 108, 247, 0) 70%);
          animation: float 20s infinite ease-in-out;
        }

        .circle-1 { width: 500px; height: 500px; top: -200px; left: -200px; animation-delay: 0s; }
        .circle-2 { width: 600px; height: 600px; bottom: -300px; right: -200px; animation-delay: 5s; }
        .circle-3 { width: 300px; height: 300px; top: 40%; left: 70%; animation-delay: 10s; }
        .circle-4 { width: 400px; height: 400px; bottom: 20%; left: 10%; animation-delay: 15s; }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }

        .hero-header {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
          z-index: 2;
        }

        .bg-ghost-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          pointer-events: none;
          z-index: 0;
          white-space: nowrap;
          overflow: hidden;
        }

        .bg-ghost-text span {
          font-size: clamp(4rem, 12vw, 10rem);
          font-weight: 800;
          background: linear-gradient(135deg, rgba(11, 26, 74, 0.03) 0%, rgba(74, 108, 247, 0.05) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          letter-spacing: 10px;
          font-family: 'Inter', sans-serif;
          user-select: none;
          white-space: nowrap;
        }

        .ghost-second { margin-left: 20px; }

        .badge-wrapper {
          margin-bottom: 16px;
          animation: fadeInUp 0.8s ease;
        }

        .badge-light {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(74, 108, 247, 0.12);
          backdrop-filter: blur(10px);
          padding: 6px 20px;
          border-radius: 40px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #4a6cf7;
          letter-spacing: 0.3px;
          border: 1px solid rgba(74, 108, 247, 0.3);
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: #4a6cf7;
          border-radius: 50%;
          display: inline-block;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        .hero-header h1 {
          font-size: 3rem;
          font-weight: 800;
          color: #0b1a4a;
          margin: 15px 0 12px;
          letter-spacing: -0.02em;
          animation: fadeInUp 0.8s ease 0.1s both;
        }

        .text-gradient {
          background: linear-gradient(135deg, #4a6cf7 0%, #ffcc00 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .glow-text { position: relative; }

        .glow-text::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #4a6cf7, #ffcc00, transparent);
          border-radius: 4px;
        }

        .accent-glow {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #4a6cf7, #ffcc00);
          margin: 15px auto 20px;
          border-radius: 4px;
          animation: expandWidth 1s ease;
        }

        @keyframes expandWidth {
          from { width: 0; opacity: 0; }
          to { width: 60px; opacity: 1; }
        }

        .hero-sub {
          font-size: 1rem;
          color: #5a6e92;
          max-width: 550px;
          margin: 0 auto;
          line-height: 1.5;
          font-weight: 400;
          animation: fadeInUp 0.8s ease 0.2s both;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Contact Cards - Smaller Size */
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin: 50px 0 60px;
          position: relative;
          z-index: 2;
        }

        .info-card-item {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 28px 20px;
          border-radius: 28px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.5);
          text-align: center;
          position: relative;
          overflow: hidden;
          animation: fadeInUp 0.6s ease backwards;
          cursor: pointer;
        }

        .info-card-item.hovered {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 20px 40px rgba(74, 108, 247, 0.12);
          border-color: rgba(74, 108, 247, 0.3);
        }

        /* Smaller Icon Wrapper */
        .card-icon-wrapper {
          position: relative;
          width: 70px;
          height: 70px;
          margin: 0 auto 18px;
        }

        .card-icon-bg {
          position: absolute;
          inset: 0;
          border-radius: 20px;
          opacity: 0.15;
          transition: all 0.3s ease;
        }

        .info-card-item.hovered .card-icon-bg {
          opacity: 0.3;
          transform: scale(1.08);
        }

        /* Scaled Down Icon */
        .card-icon {
          position: relative;
          font-size: 2.2rem;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        /* Smaller Title */
        .info-card-item h3 {
          font-size: 1.3rem;
          font-weight: 700;
          color: #0b1a4a;
          margin-bottom: 14px;
        }

        /* Smaller Text */
        .info-detail {
          color: #3c4b6e;
          line-height: 1.5;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .info-detail p { 
          margin: 6px 0;
          font-size: 0.85rem;
          word-break: break-word;
        }

        .small-highlight {
          display: inline-block;
          font-size: 0.7rem;
          color: #ff8c00;
          font-weight: 600;
          margin-top: 12px;
          padding: 4px 10px;
          background: rgba(255, 140, 0, 0.1);
          border-radius: 20px;
        }

        .copy-email-btn {
          margin-left: 8px;
          background: linear-gradient(135deg, #4a6cf7, #667eea);
          border: none;
          padding: 3px 10px;
          border-radius: 20px;
          font-size: 0.65rem;
          font-weight: 600;
          color: white;
          cursor: pointer;
          transition: all 0.2s;
        }

        .copy-email-btn:hover {
          transform: scale(1.03);
          box-shadow: 0 2px 6px rgba(74, 108, 247, 0.4);
        }

        .card-glow {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border-radius: 28px;
          background: radial-gradient(circle at 50% 0%, rgba(74, 108, 247, 0.08), transparent);
          pointer-events: none;
          animation: glowPulse 1.5s infinite;
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }

        .section-title {
          text-align: center;
          margin: 50px 0 30px;
          position: relative;
          z-index: 2;
        }

        .section-badge {
          display: inline-block;
          background: linear-gradient(135deg, #4a6cf7, #667eea);
          padding: 4px 14px;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 600;
          color: white;
          margin-bottom: 12px;
        }

        .section-title h2 {
          font-size: 2rem;
          color: #0b1a4a;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .sub-line { 
          color: #6c7b9b; 
          font-size: 0.9rem; 
        }

        .map-wrapper-modern {
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 25px 40px -20px rgba(0, 0, 0, 0.3);
          margin: 0 0 20px;
          position: relative;
          z-index: 2;
          transition: transform 0.3s ease;
        }

        .map-wrapper-modern:hover { transform: scale(1.01); }

        .map-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(74, 108, 247, 0.08), transparent);
          pointer-events: none;
          z-index: 1;
          border-radius: 30px;
        }

        .map-link-container {
          text-align: center;
          margin-bottom: 40px;
          position: relative;
          z-index: 2;
        }

        .open-map-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #4a6cf7, #667eea);
          color: white;
          padding: 10px 24px;
          border-radius: 40px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.85rem;
          transition: all 0.3s ease;
          box-shadow: 0 6px 15px rgba(74, 108, 247, 0.25);
        }

        .open-map-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(74, 108, 247, 0.35);
        }

        .open-map-btn svg {
          transition: transform 0.3s ease;
        }

        .open-map-btn:hover svg {
          transform: translateX(4px);
        }

        .cta-premium {
          background: linear-gradient(135deg, #0b1a4a 0%, #1a2c5a 100%);
          border-radius: 40px;
          padding: 35px 45px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 25px;
          position: relative;
          z-index: 2;
          overflow: hidden;
          margin-top: 30px;
        }

        .cta-glow {
          position: absolute;
          top: -50%; left: -50%;
          width: 200%; height: 200%;
          background: radial-gradient(circle, rgba(255, 204, 0, 0.08), transparent);
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .cta-tag {
          display: inline-block;
          background: rgba(255, 204, 0, 0.2);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.65rem;
          font-weight: 600;
          color: #ffcc00;
          margin-bottom: 12px;
        }

        .cta-text h4 {
          font-size: 1.6rem;
          font-weight: 700;
          color: white;
          letter-spacing: -0.3px;
          margin-bottom: 8px;
        }

        .cta-text p {
          color: rgba(255, 255, 255, 0.75);
          font-size: 0.85rem;
          max-width: 450px;
          line-height: 1.5;
        }

        .cta-button-group { display: flex; gap: 15px; flex-wrap: wrap; }

        .btn-call, .btn-email-copy {
          padding: 12px 28px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          align-items: center;
          gap: 10px;
          border: none;
          position: relative;
          overflow: hidden;
        }

        .btn-call {
          background: linear-gradient(135deg, #ffcc00, #ffa000);
          color: #0b1a4a;
          box-shadow: 0 5px 15px rgba(255, 204, 0, 0.25);
        }

        .btn-email-copy {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
        }

        .btn-call:hover, .btn-email-copy:hover {
          transform: translateY(-3px) scale(1.02);
        }

        .btn-call:hover { box-shadow: 0 10px 25px rgba(255, 204, 0, 0.35); }

        .btn-email-copy:hover {
          background: rgba(255, 255, 255, 0.18);
          border-color: #ffcc00;
        }

        .btn-icon { font-size: 1rem; }

        /* Responsive */
        @media (max-width: 900px) {
          .contact-static { padding: 40px 20px 70px; }
          .hero-header h1 { font-size: 2.2rem; }
          .cta-premium { flex-direction: column; text-align: center; padding: 30px 25px; }
          .cta-button-group { justify-content: center; }
          .bg-ghost-text span { letter-spacing: 5px; font-size: 2.5rem; }
          .ghost-second { display: none; }
          .info-grid { gap: 20px; }
        }

        @media (max-width: 550px) {
          .hero-header h1 { font-size: 1.6rem; }
          .info-grid { grid-template-columns: 1fr; gap: 16px; }
          .cta-text h4 { font-size: 1.3rem; }
          .info-card-item { padding: 22px 16px; }
          .card-icon-wrapper { width: 55px; height: 55px; margin-bottom: 12px; }
          .card-icon { font-size: 1.8rem; }
          .info-card-item h3 { font-size: 1.1rem; margin-bottom: 10px; }
          .info-detail p { font-size: 0.75rem; }
          .small-highlight { font-size: 0.6rem; }
          .section-title h2 { font-size: 1.6rem; }
          .map-wrapper-modern iframe { height: 250px; }
          .btn-call, .btn-email-copy { padding: 10px 20px; font-size: 0.75rem; }
        }

        @media (max-width: 380px) {
          .hero-header h1 { font-size: 1.3rem; }
          .badge-light { font-size: 0.65rem; padding: 4px 16px; }
          .hero-sub { font-size: 0.85rem; }
          .info-card-item { padding: 18px 14px; }
          .card-icon-wrapper { width: 48px; height: 48px; }
          .card-icon { font-size: 1.5rem; }
          .cta-premium { padding: 25px 20px; }
          .cta-text h4 { font-size: 1.1rem; }
        }
      `}</style>
    </>
  );
};

export default ContactPage;