import React, { useState, useRef } from "react";

const ContactPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [copied, setCopied] = useState(false);
  
  // Track the currently active map query string
  const [mapQuery, setMapQuery] = useState("20.99820751334766,75.58443749584006");
  
  // Ref to help scroll smoothly to the map when a location card is clicked
  const mapSectionRef = useRef(null);

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

  // Dynamically change map location and scroll map into view
  const handleLocationClick = (e, mapUrl) => {
    e.preventDefault();
    // Extract the actual Google Maps embed URL from the share link
    let embedUrl = mapUrl;
    if (mapUrl.includes("maps.app.goo.gl")) {
      // For Google Maps short links, we'll use the coordinates or a direct search
      // Since we can't resolve short links directly in iframe, we'll use the address as search query
      if (mapUrl.includes("7xwWa5GRYgsGYvow7")) {
        setMapQuery(encodeURIComponent("Kherwas Badnawar Dhar Madhya Pradesh 454660"));
      } else if (mapUrl.includes("sdUC4dcbuUy5Pndb9")) {
        setMapQuery(encodeURIComponent("MIDC Nardana Jatode Sindkheda Dhule Maharashtra 425404"));
      } else {
        setMapQuery(encodeURIComponent(mapUrl));
      }
    } else {
      setMapQuery(encodeURIComponent(mapUrl));
    }
    if (mapSectionRef.current) {
      mapSectionRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
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
      details: ["+91 8698780300 ","+91 9576961723", "Mon – Sat : 9am – 6pm"],
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

  const inlineLocationCards = [
    {
      id: 1,
      city: "Jalgaon",
      address: "Orient Cement Limited, NH-6, Nashirabad Post, Jalgaon 425001",
      mapUrl: "https://maps.google.com/?q=Orient+Cement+Jalgaon+Maharashtra",
      icon: "🏭",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      city: "Chandrapur",
      address: "Dalmia Cement, Naranda, Korpana Road, Maharashtra-442916",
      mapUrl: "https://maps.google.com/?q=Dalmia+Cement+Chandrapur+Cement+Works+Naranda+Maharashtra",
      icon: "🏭",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      city: "Nardana",
      address: "Plot No. 4 Nardana, MIDC(Phase 1), Taluka, Sindkheda, Jatode, Maharashtra 425404",
      mapUrl: "https://maps.app.goo.gl/sdUC4dcbuUy5Pndb9",
      icon: "🏭",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 4,
      city: "Pune",
      address: "Penna Cement, Survey 594, Kangaon, Taluka Daund, Pune 412219",
      mapUrl: "https://maps.google.com/?q=Penna+Cement+Industries+Kangaon+Daund+Pune+Maharashtra",
      icon: "🏭",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 5,
      city: "Madhya Pradesh",
      address: "Plot No 1A & 1 B, Industrial Area Khenwas, Tehsil : Badnawar, Badnawar, Madhya Pradesh 454660",
      mapUrl: "https://maps.app.goo.gl/7xwWa5GRYgsGYvow7",
      icon: "🏭",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
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

        {/* Animated Contact Cards */}
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

        {/* Dynamic Workspace Hub Map Section */}
        <div className="section-title" ref={mapSectionRef}>
          <span className="section-badge">📍 location</span>
          <h2>Our workspace hub</h2>
          <div className="sub-line">Industrial excellence, right in the heart of MIDC</div>
        </div>
        
        <div className="map-wrapper-modern">
          <div className="map-overlay"></div>
          <iframe
            title="Workspace Location Map"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${mapQuery}`}
            style={{ border: 0, width: "100%", height: "350px", display: "block" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Open in Google Maps Button */}
        <div className="open-map-container">
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="open-map-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Get Directions on Google Maps
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

        {/* Footprint Section */}
        <div className="section-title inline-cards-title">
          <span className="section-badge">📍 our footprint</span>
          <h2>Where We Operate</h2>
          <div className="sub-line">Strategic locations serving industrial excellence across regions</div>
        </div>

        <div className="inline-cards-grid">
          {inlineLocationCards.map((loc, index) => (
            <div
              key={loc.id}
              className="inline-location-card"
              style={{ animationDelay: `${index * 0.08}s` }}
              onClick={(e) => handleLocationClick(e, loc.mapUrl)}
            >
              <div className="inline-card-inner">
                <div className="inline-card-icon" style={{ background: loc.gradient }}>
                  <span>{loc.icon}</span>
                </div>
                <h4>{loc.city}</h4>
                <p>{loc.address}</p>
                <button className="inline-map-link">
                  <span>View on Map</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

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

        .info-card-item h3 {
          font-size: 1.3rem;
          font-weight: 700;
          color: #0b1a4a;
          margin-bottom: 14px;
        }

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

        .open-map-container {
          text-align: center;
          margin-bottom: 30px;
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

        .inline-cards-title {
          margin-top: 20px;
        }

        .inline-cards-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          position: relative;
          z-index: 2;
          margin: 20px 0 40px;
        }

        .inline-location-card {
          flex: 1;
          min-width: 180px;
          max-width: 220px;
          animation: fadeInUp 0.6s ease backwards;
          cursor: pointer;
        }

        .inline-card-inner {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 20px 16px;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .inline-card-inner:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 30px rgba(74, 108, 247, 0.12);
          border-color: rgba(74, 108, 247, 0.2);
        }

        .inline-card-icon {
          width: 50px;
          height: 50px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 14px;
          transition: all 0.3s ease;
        }

        .inline-card-icon span {
          font-size: 1.6rem;
        }

        .inline-card-inner:hover .inline-card-icon {
          transform: scale(1.05);
        }

        .inline-card-inner h4 {
          font-size: 1rem;
          font-weight: 700;
          color: #0b1a4a;
          margin-bottom: 8px;
        }

        .inline-card-inner p {
          font-size: 0.7rem;
          color: #5a6e92;
          line-height: 1.4;
          margin-bottom: 14px;
          flex: 1;
        }

        .inline-map-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          background: linear-gradient(135deg, #4a6cf7, #667eea);
          color: white;
          padding: 5px 12px;
          border-radius: 30px;
          font-size: 0.65rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          width: fit-content;
          margin: 0 auto;
        }

        .inline-map-link:hover {
          transform: translateX(3px);
          box-shadow: 0 4px 10px rgba(74, 108, 247, 0.3);
        }

        .inline-map-link svg {
          transition: transform 0.2s ease;
        }

        .inline-map-link:hover svg {
          transform: translateX(2px);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1100px) {
          .inline-location-card {
            min-width: 170px;
            max-width: 200px;
          }
        }

        @media (max-width: 950px) {
          .inline-cards-grid {
            flex-wrap: wrap;
            justify-content: center;
          }
          .inline-location-card {
            min-width: 160px;
            max-width: 180px;
          }
        }

        @media (max-width: 900px) {
          .contact-static { padding: 40px 20px 70px; }
          .hero-header h1 { font-size: 2.2rem; }
          .bg-ghost-text span { letter-spacing: 5px; font-size: 2.5rem; }
          .ghost-second { display: none; }
          .info-grid { gap: 20px; }
        }

        @media (max-width: 700px) {
          .inline-location-card {
            min-width: calc(50% - 20px);
            max-width: none;
          }
        }

        @media (max-width: 550px) {
          .hero-header h1 { font-size: 1.6rem; }
          .info-grid { grid-template-columns: 1fr; gap: 16px; }
          .info-card-item { padding: 22px 16px; }
          .card-icon-wrapper { width: 55px; height: 55px; margin-bottom: 12px; }
          .card-icon { font-size: 1.8rem; }
          .info-card-item h3 { font-size: 1.1rem; margin-bottom: 10px; }
          .info-detail p { font-size: 0.75rem; }
          .small-highlight { font-size: 0.6rem; }
          .section-title h2 { font-size: 1.6rem; }
          .map-wrapper-modern iframe { height: 250px; }
          .inline-location-card { min-width: 100%; }
          .inline-card-inner { padding: 16px; }
        }

        @media (max-width: 380px) {
          .hero-header h1 { font-size: 1.3rem; }
          .badge-light { font-size: 0.65rem; padding: 4px 16px; }
          .hero-sub { font-size: 0.85rem; }
          .info-card-item { padding: 18px 14px; }
          .card-icon-wrapper { width: 48px; height: 48px; }
          .card-icon { font-size: 1.5rem; }
        }
      `}</style>
    </>
  );
};

export default ContactPage;
