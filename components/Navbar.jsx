import { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = [
        "home",
        "about",
        "services",
        "projects",
        "contact",
      ];

      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const { offsetTop, offsetHeight } = element;

          if (
            scrollPos >= offsetTop &&
            scrollPos < offsetTop + offsetHeight
          ) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();

    const sectionId = href.replace("#", "");
    const element = document.getElementById(sectionId);

    if (element) {
      const offset = 70;
      const top =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      setIsMobileMenuOpen(false);
      setActiveLink(sectionId);
    }
  };

  const navLinks = [
    { label: "HOME", href: "#home", id: "home" },
    { label: "ABOUT", href: "#about", id: "about" },
    { label: "SERVICES", href: "#services", id: "services" },
    { label: "PROJECTS", href: "#projects", id: "projects" },
    { label: "CONTACT", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
        <div className="nav-container">
          <div className="navbar-inner">
            {/* Logo Section */}
            <div
              className="logo-section"
              onClick={(e) => handleLinkClick(e, "#home")}
            >
              <img
                src={Logo}
                alt="Mahadev Engineers"
                className="logo-img"
              />
              <div className="logo-text">
                <span>MAHADEV ENGINEERS</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="nav-links">
              {navLinks.map(({ label, href, id }) => (
                <a
                  key={label}
                  href={href}
                  className={`nav-link ${activeLink === id ? "active" : ""}`}
                  onClick={(e) => handleLinkClick(e, href)}
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Burger Menu Button */}
            <button
              className={`burger ${isMobileMenuOpen ? "open" : ""}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="mobile-menu-inner">
            {navLinks.map(({ label, href, id }) => (
              <a
                key={label}
                href={href}
                className={`mobile-link ${
                  activeLink === id ? "active" : ""
                }`}
                onClick={(e) => handleLinkClick(e, href)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 9999;
          background: #ffffff;
          border-bottom: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .navbar--scrolled {
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          border-bottom-color: #cbd5e1;
        }

        .nav-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .navbar-inner {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 40px;  /* Reduced from 86px */
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 12px;  /* Reduced from 14px */
          cursor: pointer;
          flex-shrink: 0;
        }

        .logo-img {
          width: 80px;  /* Reduced from 78px */
          height: auto;
          object-fit: contain;
        }

        .logo-text span {
          color: #1e293b;
          font-size: 20px;  /* Reduced from 20px */
          font-weight: 700;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 40px;  /* Reduced from 60px */
        }

        .nav-link {
          text-decoration: none;
          color: #4a5568;
          font-size: 13px;  /* Reduced from 14px */
          font-weight: 600;
          transition: 0.3s ease;
          position: relative;
          letter-spacing: 0.4px;
          cursor: pointer;
        }

        .nav-link:hover {
          color: #c0392b;
        }

        .nav-link.active {
          color: #c0392b;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #c0392b;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: transparent;
          border: none;
          cursor: pointer;
          margin-left: 15px;
        }

        .burger span {
          width: 22px;  /* Slightly reduced */
          height: 2px;
          background: #1e293b;
          transition: 0.3s ease;
        }

        .burger.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
          background: #c0392b;
        }

        .burger.open span:nth-child(2) {
          opacity: 0;
        }

        .burger.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
          background: #c0392b;
        }

        .mobile-menu {
          display: none;
        }

        @media (max-width: 992px) {
          .nav-links {
            gap: 30px;  /* Reduced */
          }
        }

        @media (max-width: 768px) {
          .navbar-inner {
            height: 56px;  /* Reduced from 70px */
          }

          .logo-img {
            width: 40px;  /* Reduced from 55px */
          }

          .logo-text span {
            font-size: 13px;  /* Reduced from 15px */
          }

          .nav-links {
            display: none;
          }

          .burger {
            display: flex;
          }

          .mobile-menu {
            display: block;
            background: #ffffff;
            overflow: hidden;
            max-height: 0;
            transition: max-height 0.4s ease;
            border-bottom: 1px solid #e2e8f0;
          }

          .mobile-menu.open {
            max-height: 400px;
          }

          .mobile-menu-inner {
            display: flex;
            flex-direction: column;
            padding: 10px 20px 20px;
          }

          .mobile-link {
            color: #4a5568;
            text-decoration: none;
            padding: 12px 0;  /* Reduced from 15px */
            border-bottom: 1px solid #e2e8f0;
            font-size: 14px;  /* Slightly reduced */
            font-weight: 600;
            transition: 0.3s ease;
            cursor: pointer;
          }

          .mobile-link:hover,
          .mobile-link.active {
            color: #c0392b;
            padding-left: 10px;
          }
        }

        @media (max-width: 480px) {
          .logo-section {
            gap: 8px;  /* Reduced from 10px */
          }

          .logo-img {
            width: 35px;  /* Reduced from 48px */
          }

          .logo-text span {
            font-size: 11px;  /* Reduced from 12px */
          }

          .nav-container {
            padding: 0 15px;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;