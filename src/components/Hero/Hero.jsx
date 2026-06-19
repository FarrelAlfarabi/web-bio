import React from "react";
import "./Hero.css";
import heroImage from "../../images/hero.jpg";

export default function Hero({ data }) {
  if (!data) return null;

  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        <div className="hero-text">
          <h1>{data.tagline}</h1>
          <p>{data.heroDescription}</p>
          <a href="#projects" className="hero-cta">View Case Studies</a>
        </div>
        <div className="hero-image-container">
          <img src={heroImage} alt="Farrel Alfarabi Saleh" className="hero-image" />
        </div>
      </div>
    </section>
  );
}