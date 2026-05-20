import { useState, useEffect, useRef } from "react";
import { servicesData } from "../data/servicesData";

function Services() {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(5);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 768) setCardsPerView(2);
      else if (window.innerWidth < 1024) setCardsPerView(3);
      else if (window.innerWidth < 1280) setCardsPerView(4);
      else setCardsPerView(5);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (isPausedRef.current) return;
      setIndex((prev) => {
        const max = Math.max(0, servicesData.length - cardsPerView);
        return prev >= max ? 0 : prev + 1;
      });
    }, 3000);
    return () => clearInterval(id);
  }, [cardsPerView]);

  const maxIndex = Math.max(0, servicesData.length - cardsPerView);

  const handlePrev = () => setIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setIndex((prev) => Math.min(maxIndex, prev + 1));
  const handleDotClick = (i) => setIndex(i);

  return (
    <section
      id="services"
      onMouseEnter={() => { isPausedRef.current = true; }}
      onMouseLeave={() => { isPausedRef.current = false; }}
      style={{
        padding: "100px 0",
        background: "#ffffff",
        overflow: "hidden",
        fontFamily: "'Inter', system-ui, sans-serif",
        width: "100%",
      }}
    >
      <div style={{ width: "100%", padding: "0 20px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span
            style={{
              letterSpacing: "2px",
              fontSize: "12px",
              fontWeight: 800,
              color: "#1a237e",
              background: "rgba(26, 35, 126, 0.08)",
              padding: "6px 16px",
              borderRadius: "100px",
              display: "inline-block",
            }}
          >
            SOLUTIONS
          </span>
          <h2 style={{ fontSize: "2.5rem", margin: "20px 0", color: "#2d3436", fontWeight: 800 }}>
            Our Professional{" "}
            <span
              style={{
                background: "linear-gradient(to right, #1a237e, #00d4ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Services
            </span>
          </h2>
          <p style={{ maxWidth: "700px", margin: "0 auto", color: "#636e72", lineHeight: 1.6 }}>
            Industry-leading expertise in fabrication, erection, and mechanical
            maintenance, tailored to your engineering requirements.
          </p>
        </div>

        {/* Slider */}
        <div style={{ display: "flex", alignItems: "center", width: "100%", gap: "15px" }}>

          {/* Prev */}
          <button
            onClick={handlePrev}
            disabled={index === 0}
            style={{
              background: "white",
              border: "1px solid #eef2f6",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              cursor: index === 0 ? "default" : "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              fontSize: "1.2rem",
              color: "#1a237e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              opacity: index === 0 ? 0 : 1,
              pointerEvents: index === 0 ? "none" : "auto",
              transition: "all 0.3s ease",
            }}
          >
            ←
          </button>

          {/* Mask */}
          <div style={{ overflow: "hidden", flex: 1, minWidth: 0 }}>
            <div
              style={{
                display: "flex",
                transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                transform: `translateX(-${index * (100 / cardsPerView)}%)`,
              }}
            >
              {servicesData.map((service, i) => (
                <div
                  key={i}
                  style={{
                    flex: `0 0 ${100 / cardsPerView}%`,
                    padding: "12px",
                    boxSizing: "border-box",
                  }}
                >
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={handleNext}
            disabled={index >= maxIndex}
            style={{
              background: "white",
              border: "1px solid #eef2f6",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              cursor: index >= maxIndex ? "default" : "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              fontSize: "1.2rem",
              color: "#1a237e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              opacity: index >= maxIndex ? 0 : 1,
              pointerEvents: index >= maxIndex ? "none" : "auto",
              transition: "all 0.3s ease",
            }}
          >
            →
          </button>
        </div>

        {/* Pagination dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "50px", flexWrap: "wrap" }}>
          {[...Array(maxIndex + 1)].map((_, i) => (
            <div
              key={i}
              onClick={() => handleDotClick(i)}
              style={{
                width: index === i ? "35px" : "10px",
                height: "10px",
                borderRadius: index === i ? "10px" : "50%",
                background: index === i ? "#1a237e" : "#d1d8e0",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "white",
        padding: "30px 20px",
        borderRadius: "20px",
        border: hovered ? "1px solid rgba(26, 35, 126, 0.15)" : "1px solid #eef2f6",
        height: "360px",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.4s ease",
        boxShadow: hovered ? "0 20px 40px rgba(0,0,0,0.08)" : "0 2px 8px rgba(0,0,0,0.04)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        overflow: "hidden",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      <div
        style={{
          fontSize: "42px",
          marginBottom: "16px",
          display: "inline-block",
          transition: "transform 0.4s ease",
          transform: hovered ? "scale(1.15) rotate(-5deg)" : "scale(1) rotate(0deg)",
          flexShrink: 0,
        }}
      >
        {service.icon}
      </div>

      <h3
        style={{
          fontSize: "1.1rem",
          marginBottom: "12px",
          color: "#1a237e",
          fontWeight: 700,
          lineHeight: 1.3,
          flexShrink: 0,
        }}
      >
        {service.title}
      </h3>

      <ul style={{ listStyle: "none", padding: 0, margin: 0, flex: 1, overflow: "hidden" }}>
        {service.points.map((point, j) => (
          <li
            key={j}
            style={{
              fontSize: "0.8rem",
              color: "#636e72",
              marginBottom: "6px",
              paddingLeft: "18px",
              position: "relative",
              lineHeight: 1.4,
            }}
          >
            <span style={{ position: "absolute", left: 0, color: "#00d4ff", fontWeight: "bold", fontSize: "0.75rem" }}>
              →
            </span>
            {point}
          </li>
        ))}
      </ul>

      <div
        style={{
          marginTop: "14px",
          height: "2px",
          background: "linear-gradient(to right, #1a237e, #00d4ff)",
          width: hovered ? "80px" : "40px",
          transition: "width 0.3s ease",
          borderRadius: "2px",
          flexShrink: 0,
        }}
      />
    </div>
  );
}

export default Services;