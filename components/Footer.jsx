import React, { useState, useEffect } from "react";

const Footer = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) =>
    date.toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const formatTime = (date) =>
    date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: (
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: (
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: (
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      icon: (
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
          <polygon fill="#0d1117" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: (
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ];

  const s = {
    footer: {
      backgroundColor: "#0d1117",
      borderTop: "1px solid #21262d",
      fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif",
      color: "#8b949e",
    },
    topBar: {
      backgroundColor: "#161b22",
      padding: "8px 32px",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      borderBottom: "1px solid #21262d",
    },
    liveContainer: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      backgroundColor: "#1a1f2e",
      border: "1px solid #2d3a5e",
      borderRadius: "8px",
      padding: "6px 16px",
    },
    liveTag: {
      backgroundColor: "#1f3a1f",
      color: "#4ade80",
      fontSize: "9px",
      padding: "2px 8px",
      borderRadius: "4px",
      fontWeight: "700",
      letterSpacing: "0.5px",
    },
    mainContainer: {
      maxWidth: "1300px",
      margin: "0 auto",
      padding: "32px",
    },
    singleRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
      gap: "30px",
    },
    section: {
      flex: 1,
      minWidth: "150px",
    },
    label: {
      color: "#3b82f6",
      fontSize: "11px",
      fontWeight: "700",
      letterSpacing: "2px",
      textTransform: "uppercase",
      marginBottom: "12px",
      display: "flex",
      alignItems: "center",
      gap: "6px",
    },
    phoneLink: {
      color: "#c9d1d9",
      textDecoration: "none",
      fontSize: "13px",
      fontWeight: "500",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "8px",
      transition: "color 0.2s",
    },
    emailLink: {
      color: "#c9d1d9",
      textDecoration: "none",
      fontSize: "13px",
      fontWeight: "500",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "4px",
      transition: "color 0.2s",
      wordBreak: "break-all",
    },
    socialBtn: {
      width: "34px",
      height: "34px",
      borderRadius: "8px",
      backgroundColor: "#161b22",
      border: "1px solid #30363d",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#8b949e",
      textDecoration: "none",
      transition: "all 0.2s ease",
    },
    quickLink: {
      color: "#c9d1d9",
      textDecoration: "none",
      fontSize: "12px",
      transition: "color 0.2s",
      display: "block",
      marginBottom: "8px",
    },
    hoursText: {
      fontSize: "12px",
      color: "#c9d1d9",
      lineHeight: "1.6",
      margin: 0,
    },
    sundayText: {
      fontSize: "12px",
      color: "#f85149",
      marginTop: "6px",
    },
    divider: {
      borderTop: "1px solid #21262d",
    },
    bottomBar: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "16px 32px",
      fontSize: "11px",
      color: "#6e7681",
      gap: "12px",
      flexWrap: "wrap",
    },
    socialContainer: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
      marginTop: "4px",
    },
  };

  return (
    <footer style={s.footer}>
      {/* Live Date & Time Bar */}
      <div style={s.topBar}>
        <div style={s.liveContainer}>
          <span style={s.liveTag}>LIVE</span>
          <span style={{ color: "#c9d1d9", fontSize: "12px" }}>{formatDate(dateTime)}</span>
          <span style={{ color: "#3b82f6", fontWeight: "600", fontSize: "12px" }}>
            {formatTime(dateTime)}
          </span>
        </div>
      </div>

      {/* Main Footer Content - All Sections in Single Row */}
      <div style={s.mainContainer}>
        <div style={s.singleRow}>
          
          {/* INQUIRIES Section */}
          <div style={s.section}>
            <div style={s.label}>
              <span>📞</span> INQUIRIES
            </div>
            <a
              href="tel:8698780300"
              style={s.phoneLink}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#3b82f6")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#c9d1d9")}
            >
              +91 8698780300
            </a>
            <a
              href="tel:9576961723"
              style={s.phoneLink}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#3b82f6")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#c9d1d9")}
            >
              +91 9576961723
            </a>
          </div>

          {/* EMAIL Section */}
          <div style={s.section}>
            <div style={s.label}>
              <span>✉️</span> EMAIL
            </div>
            <a
              href="mailto:mahadevengineers13@gmail.com"
              style={s.emailLink}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#3b82f6")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#c9d1d9")}
            >
              mahadevengineers13@gmail.com
            </a>
          </div>

          {/* HOURS Section */}
          <div style={s.section}>
            <div style={s.label}>
              <span>🕐</span> HOURS
            </div>
            <p style={s.hoursText}>
              Mon – Sat: 9am – 6pm
            </p>
            <p style={s.sundayText}>Sunday: Closed</p>
          </div>

          {/* QUICK LINKS Section */}
          <div style={s.section}>
            <div style={s.label}>
              <span>🔗</span> QUICK LINKS
            </div>
            <a href="#" style={s.quickLink} onMouseEnter={(e) => (e.currentTarget.style.color = "#3b82f6")} onMouseLeave={(e) => (e.currentTarget.style.color = "#c9d1d9")}>About Us</a>
            <a href="#" style={s.quickLink} onMouseEnter={(e) => (e.currentTarget.style.color = "#3b82f6")} onMouseLeave={(e) => (e.currentTarget.style.color = "#c9d1d9")}>Our Services</a>
            <a href="#" style={s.quickLink} onMouseEnter={(e) => (e.currentTarget.style.color = "#3b82f6")} onMouseLeave={(e) => (e.currentTarget.style.color = "#c9d1d9")}>Contact Us</a>
          </div>

          {/* FOLLOW US Section */}
          <div style={s.section}>
            <div style={s.label}>
              <span>📱</span> FOLLOW US
            </div>
            <div style={s.socialContainer}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  style={s.socialBtn}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#3b82f6";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.borderColor = "#3b82f6";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#161b22";
                    e.currentTarget.style.color = "#8b949e";
                    e.currentTarget.style.borderColor = "#30363d";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={s.divider} />

      {/* Bottom Bar */}
      <div style={s.bottomBar}>
        <span>© 2026 Mahadev Engineers. All rights reserved.</span>
        <span style={{ color: "#30363d" }}>•</span>
        <span>Serving: Jalgaon · Nardana · Chandrapur · Pune · Madhya Pradesh</span>
      </div>
    </footer>
  );
};

export default Footer;
