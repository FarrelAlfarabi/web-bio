import React from "react";
import "./About.css";
// This imports your about photo
import aboutImage from "../../images/about.png";

export default function About({ data }) {
  if (!data) return null;

  return (
    <section id="about" className="about-section" style={{ padding: "6rem 1rem", backgroundColor: "#ffffff" }}>
      <div className="container" style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2rem" }}>
        
        {/* About Photo Column */}
        <div style={{ flex: "1 1 300px" }}>
          <img src={aboutImage} alt="Farrel Working" style={{ width: "100%", borderRadius: "12px", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }} />
        </div>

        {/* Text Column */}
        <div style={{ flex: "1 1 400px" }}>
          <h2 style={{ fontSize: "1rem", color: "#3182ce", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "1rem" }}>
            Professional Background
          </h2>
          <h3 style={{ fontSize: "2.5rem", color: "#1a202c", marginBottom: "2rem", fontWeight: "bold" }}>
            MBA & CS Hybrid
          </h3>
          <p style={{ fontSize: "1.15rem", color: "#4a5568", lineHeight: "1.8" }}>
            {data.about}
          </p>
        </div>
      </div>
    </section>
  );
}