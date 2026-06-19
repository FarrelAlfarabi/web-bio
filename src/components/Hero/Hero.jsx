import React from "react";
import "./Hero.css";
import heroImage from "../../images/hero.jpg";

export default function Hero({ data }) {
  if (!data) return null;

  return (
    <section id="hero" className="hero-section" style={{ padding: "8rem 1rem", textAlign: "center", backgroundColor: "#f8fafc" }}>
      <div className="container">
        <div style={{ marginBottom: "2rem" }}>
          <img src={heroImage} alt="Farrel Alfarabi Saleh" style={{ maxWidth: "200px", borderRadius: "50%", border: "4px solid white", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }} />
        </div>
        <h1 style={{ fontSize: "3rem", color: "#1a202c", marginBottom: "1.5rem", fontWeight: "bold", lineHeight: "1.2" }}>
          {data.tagline}.
        </h1>
        <p style={{ fontSize: "1.25rem", color: "#4a5568", maxWidth: "800px", margin: "0 auto 2.5rem auto", lineHeight: "1.6" }}>
          {data.heroDescription}
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#projects" style={{ padding: "1rem 2.5rem", backgroundColor: "#1a202c", color: "white", textDecoration: "none", borderRadius: "8px", fontWeight: "bold" }}>View Case Studies</a>
          <a href="#contact" style={{ padding: "1rem 2.5rem", backgroundColor: "white", color: "#1a202c", border: "1px solid #e2e8f0", textDecoration: "none", borderRadius: "8px", fontWeight: "bold" }}>Contact Me</a>
        </div>
      </div>
    </section>
  );
}