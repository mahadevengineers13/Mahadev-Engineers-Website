import aboutImg from "../assets/about.avif";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Left side - Image with effects */}
        <div className="about-image-wrapper">
          <div className="image-border"></div>
          <div className="image-glow"></div>
          <img src={aboutImg} alt="About Mahadev Engineers" />
          <div className="experience-badge">
            <span className="years">19+</span>
            <span className="text">Years of Excellence</span>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="about-content">
          <div className="section-badge">Who We Are</div>

          <h2>
            Crafting Excellence in
            <span>Engineering Solutions</span>
          </h2>

          <div className="underline"></div>

          <p className="main-text">
            <strong>Mahadev Engineers</strong> has <strong>19+ years</strong> of expertise in{" "}
            <strong>mechanical equipment maintenance, fabrication and erection of steel structures</strong>{" "}
            in the cement, steel industry and edible oil sector. The organization is committed to{" "}
            <strong>quality standards and timely execution</strong>.
          </p>

          <p className="secondary-text">
            Our fundamental business strategy is to build{" "}
            <strong>strong steel structures and lasting relationships</strong> bonded with trust and
            faith — working towards fostering the interests of our customers by achieving their
            expectations and providing value for money.
          </p>

          <div className="features">
            <div className="feature">
              <div className="feature-icon">⚙️</div>
              <div className="feature-text">
                <h4>Precision Fabrication</h4>
                <p>High-quality metal fabrication with cutting-edge technology</p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">🏗️</div>
              <div className="feature-text">
                <h4>Expert Erection</h4>
                <p>Professional steel structure installation across cement, steel & edible oil industries</p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">🔧</div>
              <div className="feature-text">
                <h4>Mechanical Maintenance</h4>
                <p>Comprehensive maintenance for industrial mechanical equipment</p>
              </div>
            </div>
          </div>

          <button
            className="learn-more"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="arrow-icon"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800&display=swap');

        .about {
          padding: 80px 5%;
          background: linear-gradient(135deg, #f5f7fa 0%, #e8edf5 100%);
          position: relative;
          overflow: hidden;
          font-family: 'Poppins', sans-serif;
        }

        .about::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(26,35,126,0.05) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .about::after {
          content: '';
          position: absolute;
          bottom: -30%;
          left: -5%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(176,190,197,0.05) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .about-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        /* Image Section */
        .about-image-wrapper {
          position: relative;
          animation: fadeInLeft 1s ease-out;
        }

        .about-image-wrapper img {
          width: 100%;
          border-radius: 20px;
          position: relative;
          z-index: 2;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .about-image-wrapper img:hover {
          transform: scale(1.02);
        }

        .image-border {
          position: absolute;
          top: 20px;
          left: 20px;
          width: 100%;
          height: 100%;
          border: 3px solid #1a237e;
          border-radius: 20px;
          z-index: 1;
          transition: all 0.3s ease;
        }

        .about-image-wrapper:hover .image-border {
          top: 15px;
          left: 15px;
        }

        .image-glow {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(26,35,126,0.2) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 0;
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }

        .experience-badge {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: linear-gradient(135deg, #1a237e, #283593);
          padding: 1rem 2rem;
          border-radius: 15px;
          text-align: center;
          z-index: 3;
          box-shadow: 0 10px 30px rgba(26,35,126,0.3);
          animation: fadeInUp 1s ease-out 0.3s backwards;
        }

        .experience-badge .years {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          color: #ffd700;
          line-height: 1;
          font-family: 'Montserrat', sans-serif;
        }

        .experience-badge .text {
          font-size: 0.7rem;
          color: white;
          letter-spacing: 1px;
        }

        /* Content Section */
        .about-content {
          animation: fadeInRight 1s ease-out;
        }

        .section-badge {
          display: inline-block;
          background: rgba(26,35,126,0.1);
          padding: 0.3rem 1rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #1a237e;
          margin-bottom: 1rem;
          letter-spacing: 1px;
        }

        h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          line-height: 1.2;
          color: #1a1a1a;
        }

        h2 span {
          display: block;
          color: #1a237e;
          font-family: 'Montserrat', sans-serif;
        }

        .underline {
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #1a237e, #b0bec5);
          border-radius: 2px;
          margin: 1rem 0 1.5rem 0;
        }

        .main-text {
          font-size: 1rem;
          line-height: 1.8;
          color: #4a5568;
          margin-bottom: 1rem;
        }

        .secondary-text {
          font-size: 0.95rem;
          line-height: 1.8;
          color: #4a5568;
          margin-bottom: 1.8rem;
          padding: 1rem 1.2rem;
          border-left: 3px solid #1a237e;
          background: rgba(26,35,126,0.03);
          border-radius: 0 10px 10px 0;
        }

        .main-text strong,
        .secondary-text strong {
          color: #1a237e;
          font-weight: 700;
        }

        /* Features */
        .features {
          display: grid;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .feature {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 1rem;
          background: white;
          border-radius: 12px;
          transition: all 0.3s ease;
          border: 1px solid rgba(26,35,126,0.1);
        }

        .feature:hover {
          transform: translateX(10px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          border-color: rgba(26,35,126,0.2);
        }

        .feature-icon {
          font-size: 1.8rem;
          min-width: 44px;
          text-align: center;
        }

        .feature-text h4 {
          margin: 0 0 0.25rem 0;
          font-size: 1rem;
          font-weight: 700;
          color: #1a237e;
        }

        .feature-text p {
          margin: 0;
          font-size: 0.85rem;
          color: #718096;
          line-height: 1.5;
        }

        /* Button */
        .learn-more {
          background: transparent;
          border: 2px solid #1a237e;
          padding: 0.8rem 2rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: #1a237e;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border-radius: 8px;
          font-family: 'Poppins', sans-serif;
          line-height: 1;
        }

        .learn-more:hover {
          background: #1a237e;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(26,35,126,0.3);
        }

        .arrow-icon {
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .learn-more:hover .arrow-icon {
          transform: translateX(4px);
        }

        /* Animations */
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Responsive */
        @media (max-width: 968px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .about-image-wrapper {
            max-width: 500px;
            margin: 0 auto;
          }
        }

        @media (max-width: 568px) {
          .about {
            padding: 50px 5%;
          }

          .features {
            gap: 0.8rem;
          }

          .experience-badge {
            bottom: -10px;
            right: -10px;
            padding: 0.8rem 1.5rem;
          }

          .experience-badge .years {
            font-size: 1.5rem;
          }

          .secondary-text {
            font-size: 0.88rem;
          }
        }
      `}</style>
    </section>
  );
}

export default About;