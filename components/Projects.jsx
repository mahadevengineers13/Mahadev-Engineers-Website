import { useState } from "react";
import a1 from "../assets/a1.avif";
import a2 from "../assets/a2.avif";
import a3 from "../assets/a3.avif";
import a4 from "../assets/a4.avif";
import a5 from "../assets/a5.avif";
import a6 from "../assets/a6.avif";
import a7 from "../assets/a7.avif";
import a8 from "../assets/a8.avif";
import a9 from "../assets/a9.avif";
import a10 from "../assets/a10.avif";
import a11 from "../assets/a11.avif";
import a12 from "../assets/a12.avif";
import a13 from "../assets/a13.avif";
import a14 from "../assets/a14.avif";
import a15 from "../assets/a15.avif";
import a16 from "../assets/a16.avif";
import a17 from "../assets/a17.avif";
import a18 from "../assets/a18.avif";

const Projects = () => {
  // All individual images (no text, just photos)
  const allImages = [
    { img: a1, id: 1 },
    { img: a2, id: 2 },
    { img: a3, id: 3 },
    { img: a4, id: 4 },
    { img: a5, id: 5 },
    { img: a6, id: 6 },
    { img: a7, id: 7 },
    { img: a8, id: 8 },
    { img: a9, id: 9 },
    { img: a10, id: 10 },
    { img: a11, id: 11 },
    { img: a12, id: 12 },
    { img: a13, id: 13 },
    { img: a14, id: 14 },
    { img: a15, id: 15 },
    { img: a16, id: 16 },
    { img: a17, id: 17 },
    { img: a18, id: 18 },
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setSelectedImageIndex((prev) => 
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (selectedImageIndex !== null) {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    }
  };

  // Add/remove keyboard listener
  useState(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* HEADER SECTION - From Old Code */}
        <div className="section-header">
          <div className="portfolio-tag">
            <span className="tag-icon">✦</span> Our Portfolio
            <span className="tag-icon">✦</span>
          </div>
          <h2 className="main-title">
            Featured <span className="highlight">Projects</span>
          </h2>
          <div className="title-underline"></div>
          <p className="subtitle">
            Showcasing our excellence in engineering and construction
          </p>
        </div>

        {/* All Photos Grid - Single Display */}
        <div className="projects-grid">
          {allImages.map((image, index) => (
            <div
              className="project-card"
              key={image.id}
              style={{ "--delay": `${index * 0.05}s` }}
              onClick={() => openModal(index)}
            >
              <div className="card-inner">
                <div className="image-wrapper">
                  <div className="image-shine"></div>
                  <img src={image.img} alt={`Gallery ${image.id}`} loading="lazy" />
                  <div className="project-overlay">
                    <div className="overlay-info">
                      <div className="view-link">
                        View Image
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Stats - From Old Code */}
        <div className="impact-stats">
          <div className="stat-item">
            <div className="stat-icon">🏆</div>
            <span className="num">19<span className="plus">+</span></span>
            <span className="label">Years Of Experience</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-icon">🏗️</div>
            <span className="num">1500<span className="plus">+</span></span>
            <span className="label">Projects Completed</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-icon">🤝</div>
            <span className="num">1000<span className="plus">+</span></span>
            <span className="label">Satisfied Clients</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-icon">👷</div>
            <span className="num">105<span className="plus">+</span></span>
            <span className="label">Active Workers</span>
          </div>
        </div>
      </div>

      {/* Modal for Fullscreen View with Navigation */}
      {selectedImageIndex !== null && (
        <div className="project-modal" onClick={closeModal}>
          <div className="modal-body" onClick={(e) => e.stopPropagation()}>
            {/* Close Button - Cross */}
            <button className="close-btn" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Previous Button */}
            <button className="nav-btn prev-btn" onClick={goToPrevious}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            {/* Next Button */}
            <button className="nav-btn next-btn" onClick={goToNext}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            {/* Current Image */}
            <div className="modal-img-container">
              <img
                src={allImages[selectedImageIndex].img}
                alt={`Full size ${selectedImageIndex + 1}`}
                className="modal-full-img"
              />
            </div>

            {/* Image Counter */}
            <div className="image-counter">
              {selectedImageIndex + 1} / {allImages.length}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');

        :root {
          --primary-blue: #0a66c2;
          --primary-dark: #003377;
          --secondary-gold: #ffc107;
          --card-bg: #ffffff;
          --text-dark: #1e293b;
          --text-muted: #64748b;
          --border-light: #e2e8f0;
          --shadow-sm: 0 10px 25px -5px rgba(0,0,0,0.05), 0 8px 10px -6px rgba(0,0,0,0.02);
          --shadow-md: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.05);
          --shadow-lg: 0 25px 50px -12px rgba(0,0,0,0.25);
          --gradient-primary: linear-gradient(135deg, #0a66c2 0%, #0047ab 50%, #002d6b 100%);
          --gradient-gold: linear-gradient(135deg, #ffc107 0%, #ff8c00 100%);
        }

        .projects-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #f0f4f8 0%, #e8edf5 100%);
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .projects-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: radial-gradient(circle at 20% 80%, rgba(10,102,194,0.03) 0%, transparent 50%);
          pointer-events: none;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .portfolio-tag {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, rgba(10,102,194,0.1), rgba(10,102,194,0.05));
          backdrop-filter: blur(4px);
          padding: 8px 24px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--primary-blue);
          margin-bottom: 20px;
          border: 1px solid rgba(10,102,194,0.2);
        }

        .tag-icon {
          font-size: 0.9rem;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.9); }
        }

        .main-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin: 0;
          line-height: 1.2;
        }

        .main-title .highlight {
          background: var(--gradient-gold);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .title-underline {
          width: 80px;
          height: 4px;
          background: var(--gradient-gold);
          margin: 20px auto;
          border-radius: 4px;
          position: relative;
        }

        .title-underline::before {
          content: '';
          position: absolute;
          width: 40px;
          height: 4px;
          background: var(--primary-blue);
          border-radius: 4px;
          left: 20px;
          top: 0;
        }

        .subtitle {
          color: var(--text-muted);
          font-size: 1rem;
          letter-spacing: 0.5px;
          max-width: 600px;
          margin: 0 auto;
          font-weight: 400;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 30px;
          position: relative;
          z-index: 2;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 35px;
          margin-bottom: 70px;
        }

        .project-card {
          cursor: pointer;
          animation: slideIn 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards var(--delay);
          opacity: 0;
          transform: translateY(30px);
        }

        @keyframes slideIn {
          to { opacity: 1; transform: translateY(0); }
        }

        .card-inner {
          background: var(--card-bg);
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(255,255,255,0.2);
        }

        .project-card:hover .card-inner {
          transform: translateY(-12px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(10,102,194,0.2);
        }

        .image-wrapper {
          height: 320px;
          overflow: hidden;
          position: relative;
          background: #1e293b;
        }

        .image-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.6s ease;
          z-index: 1;
        }

        .project-card:hover .image-shine { left: 100%; }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }

        .project-card:hover .image-wrapper img { transform: scale(1.08); }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(10,102,194,0.95), rgba(0,71,171,0.95));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.4s ease;
          padding: 30px;
          text-align: center;
          color: white;
          backdrop-filter: blur(4px);
        }

        .project-card:hover .project-overlay { opacity: 1; }

        .view-link {
          font-weight: 600;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-bottom: 2px solid var(--secondary-gold);
          padding-bottom: 6px;
        }

        /* IMPACT STATS */
        .impact-stats {
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 40px 60px;
          background: var(--card-bg);
          border-radius: 40px;
          box-shadow: var(--shadow-md);
          border: 1px solid rgba(10,102,194,0.1);
          position: relative;
          overflow: hidden;
        }

        .impact-stats::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: var(--gradient-gold);
        }

        .stat-item {
          text-align: center;
          flex: 1;
        }

        .stat-icon { font-size: 2rem; margin-bottom: 10px; }

        .stat-item .num {
          display: block;
          font-size: 2.8rem;
          font-weight: 800;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-family: 'Space Grotesk', monospace;
          line-height: 1;
        }

        .stat-item .plus { font-size: 1.5rem; vertical-align: super; }

        .stat-item .label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--text-muted);
          margin-top: 10px;
          display: block;
          font-weight: 600;
        }

        .stat-divider {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, transparent, var(--border-light), transparent);
        }

        /* MODAL - Fullscreen with Navigation */
        .project-modal {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(12px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-body {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Close Button - Cross */
        .close-btn {
          position: absolute;
          top: 30px;
          right: 30px;
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          cursor: pointer;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: white;
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.05);
          border-color: rgba(255, 255, 255, 0.5);
        }

        /* Navigation Buttons */
        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 56px;
          height: 56px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          cursor: pointer;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: white;
        }

        .nav-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-50%) scale(1.05);
          border-color: rgba(255, 255, 255, 0.5);
        }

        .prev-btn {
          left: 30px;
        }

        .next-btn {
          right: 30px;
        }

        .modal-img-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          padding: 80px;
        }

        .modal-full-img {
          max-width: 90vw;
          max-height: 85vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          animation: scaleUp 0.3s ease;
        }

        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        /* Image Counter */
        .image-counter {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          padding: 8px 20px;
          border-radius: 40px;
          color: white;
          font-size: 0.9rem;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.5px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Responsive */
        @media (max-width: 992px) {
          .impact-stats { flex-direction: column; gap: 30px; padding: 40px 30px; }
          .stat-divider { width: 80px; height: 1px; }
        }

        @media (max-width: 768px) {
          .projects-section { padding: 60px 0; }
          .projects-grid { grid-template-columns: 1fr; gap: 25px; }
          .impact-stats { margin-top: 30px; }
          
          .nav-btn {
            width: 44px;
            height: 44px;
          }
          
          .nav-btn svg {
            width: 24px;
            height: 24px;
          }
          
          .close-btn {
            width: 40px;
            height: 40px;
            top: 20px;
            right: 20px;
          }
          
          .close-btn svg {
            width: 20px;
            height: 20px;
          }
          
          .prev-btn { left: 15px; }
          .next-btn { right: 15px; }
          
          .modal-img-container { padding: 60px 40px; }
          .modal-full-img { max-width: 95vw; max-height: 80vh; }
          
          .image-counter {
            bottom: 20px;
            padding: 6px 16px;
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .projects-grid { grid-template-columns: 1fr; }
          .image-wrapper { height: 280px; }
          .container { padding: 0 20px; }
          
          .nav-btn {
            width: 36px;
            height: 36px;
          }
          
          .nav-btn svg {
            width: 20px;
            height: 20px;
          }
          
          .modal-img-container { padding: 50px 20px; }
        }
      `}</style>
    </section>
  );
};

export default Projects;