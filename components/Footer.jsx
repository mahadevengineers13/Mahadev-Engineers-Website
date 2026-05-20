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

  const locations = [
    {
      city: "Jalgaon",
      address: "Orient Cement Limited Clinker Grinding Unit, National Highway VI, Nashirabad Post, Jalgaon 425001, Maharashtra",
      mapUrl: "https://maps.google.com/?q=Orient+Cement+Jalgaon+Maharashtra",
    },
    {
      city: "Chandrapur",
      address: "Dalmia Cement (Bharat) Ltd, Chandrapur Cement Works (CCW), Naranda, Korpana Road, Maharashtra-442916",
      mapUrl: "https://maps.google.com/?q=Dalmia+Cement+Chandrapur+Cement+Works+Naranda+Maharashtra",
    },
    {
      city: "Nardana",
      address: "Plot No 4, MIDC Industrial Area, Jatoda, Tal-Shindkheda, Dhule, Nardana – 425404, Maharashtra",
      mapUrl: "https://maps.google.com/?q=MIDC+Industrial+Area+Jatoda+Nardana+Dhule+Maharashtra",
    },
    {
      city: "Pune",
      address: "Penna Cement Industries, Survey No 594, Village Kangaon, Taluka Daund, Pune 412219, Maharashtra",
      mapUrl: "https://maps.google.com/?q=Penna+Cement+Industries+Kangaon+Daund+Pune+Maharashtra",
    },
    {
      city: "Madhya Pradesh",
      address: "1-A, 1-B, Kherwas, Badnawar, Dhar, Badnawar – 454660, Dhar, Madhya Pradesh",
      mapUrl: "https://maps.google.com/?q=Kherwas+Badnawar+Dhar+Madhya+Pradesh+454660",
      span: true,
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: (
        <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: (
        <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
        <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      icon: (
        <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
          <polygon fill="#0d1117" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: (
        <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
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
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#8b949e",
    },
    topBar: {
      backgroundColor: "#161b22",
      padding: "5px 24px",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      borderBottom: "1px solid #21262d",
      fontSize: "11px",
      flexWrap: "wrap",
      gap: "8px",
    },
    liveTag: {
      backgroundColor: "#1f3a1f",
      color: "#4ade80",
      fontSize: "9px",
      padding: "1px 5px",
      borderRadius: "3px",
      fontWeight: "700",
      letterSpacing: "1px",
    },
    mainGrid: {
      display: "grid",
      gridTemplateColumns: "200px 1fr 160px",
      gap: "20px",
      padding: "16px 24px 12px",
      maxWidth: "1300px",
      margin: "0 auto",
    },
    label: {
      color: "#3b82f6",
      fontSize: "9px",
      fontWeight: "700",
      letterSpacing: "3px",
      textTransform: "uppercase",
      paddingBottom: "5px",
      borderBottom: "1px solid #21262d",
      margin: "0 0 8px 0",
    },
    phoneLink: {
      color: "#3b82f6",
      textDecoration: "none",
      fontSize: "11.5px",
      fontWeight: "600",
      display: "flex",
      alignItems: "center",
      gap: "6px",
      marginBottom: "4px",
    },
    emailLink: {
      color: "#3b82f6",
      textDecoration: "none",
      fontSize: "11.5px",
      fontWeight: "600",
      display: "flex",
      alignItems: "center",
      gap: "6px",
      marginBottom: "4px",
    },
    locCard: {
      background: "#161b22",
      border: "1px solid #21262d",
      borderRadius: "6px",
      padding: "10px 12px",
      transition: "border-color 0.2s, background 0.2s",
    },
    socialBtn: {
      width: "28px",
      height: "28px",
      borderRadius: "6px",
      backgroundColor: "#161b22",
      border: "1px solid #21262d",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#8b949e",
      textDecoration: "none",
      cursor: "pointer",
      flexShrink: 0,
    },
    divider: {
      borderTop: "1px solid #21262d",
      margin: "0 24px",
    },
    bottomBar: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "7px 24px",
      fontSize: "11px",
      color: "#4b5563",
      textAlign: "center",
      flexWrap: "wrap",
      gap: "6px",
    },
  };

  return (
    <footer style={s.footer}>

      {/* Live Date & Time Bar */}
      <div style={s.topBar}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#6b7280" }}>
          <span style={s.liveTag}>LIVE</span>
          <span style={{ fontSize: "11px" }}>{formatDate(dateTime)}</span>
          <span style={{ color: "#3b82f6", fontWeight: "700", fontVariantNumeric: "tabular-nums", fontSize: "11px" }}>
            {formatTime(dateTime)}
          </span>
        </div>
      </div>

      {/* Main Grid */}
      <div style={s.mainGrid}>

        {/* Column 1: Contact + Email + Hours */}
        <div>
          <p style={s.label}>Inquiries</p>
          <p style={{ fontSize: "11px", color: "#6b7280", margin: "0 0 6px 0" }}>Call us anytime</p>
          <a
            href="tel:8698780300"
            style={s.phoneLink}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#60a5fa")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#3b82f6")}
          >
            📞 8698780300
          </a>
          <a
            href="tel:9576961723"
            style={s.phoneLink}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#60a5fa")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#3b82f6")}
          >
            📞 9576961723
          </a>

          <div style={{ marginTop: "10px" }}>
            <p style={s.label}>Email</p>
            <a
              href="mailto:mahadevengineers13@gmail.com"
              style={s.emailLink}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#60a5fa")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#3b82f6")}
            >
              ✉️ mahadevengineers13@gmail.com
            </a>
          </div>

          <div style={{ marginTop: "10px" }}>
            <p style={s.label}>Business Hours</p>
            <p style={{ fontSize: "11px", color: "#8b949e", lineHeight: "1.8", margin: 0 }}>
              Mon – Sat: &nbsp;09:00 AM – 06:00 PM<br />
              <span style={{ color: "#ef4444" }}>Sunday: Closed</span>
            </p>
          </div>
        </div>

        {/* Column 2: Locations with address + map link */}
        <div>
          <p style={s.label}>Our Locations</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
            {locations.map((loc) => (
              <div
                key={loc.city}
                style={{ ...s.locCard, ...(loc.span ? { gridColumn: "span 2" } : {}) }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#3b82f6";
                  e.currentTarget.style.background = "#1c2330";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#21262d";
                  e.currentTarget.style.background = "#161b22";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "5px", fontWeight: "700", fontSize: "12px", color: "#e6edf3", marginBottom: "4px" }}>
                  <span style={{ fontSize: "11px" }}>📍</span>
                  {loc.city}
                </div>
                <div style={{ fontSize: "10px", color: "#6b7280", lineHeight: "1.5", marginBottom: "7px" }}>
                  {loc.address}
                </div>
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "3px", color: "#3b82f6", fontSize: "10px", fontWeight: "600", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#60a5fa")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#3b82f6")}
                >
                  View on Map →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Social + Service Area */}
        <div>
          <p style={s.label}>Follow Us</p>
          <p style={{ fontSize: "11px", color: "#6b7280", marginBottom: "8px" }}>Stay connected</p>
          <div style={{ display: "flex", gap: "7px", flexWrap: "wrap", marginBottom: "14px" }}>
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
                  e.currentTarget.style.borderColor = "#21262d";
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <p style={s.label}>Service Area</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
            {["Jalgaon", "Nardana", "Chandrapur", "Pune", "Madhya Pradesh"].map((city) => (
              <span
                key={city}
                style={{
                  backgroundColor: "#1e3a5f",
                  color: "#60a5fa",
                  fontSize: "9px",
                  fontWeight: "600",
                  padding: "3px 8px",
                  borderRadius: "20px",
                  border: "1px solid #1d4ed8",
                }}
              >
                {city}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Divider */}
      <div style={s.divider} />

      {/* Bottom Bar */}
      <div style={s.bottomBar}>
        <span>© 2026 Mahadev Engineers. All Rights Reserved.</span>
        <span style={{ color: "#21262d" }}>|</span>
        <span>Serving Jalgaon · Nardana · Chandrapur · Pune · Madhya Pradesh</span>
        <span style={{ color: "#21262d" }}>|</span>
      
      </div>

    </footer>
  );
};

export default Footer;