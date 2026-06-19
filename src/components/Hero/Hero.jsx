import React from "react";
import "./Hero.css";
import heroImage from "../../images/hero.jpg"; // Ensure this path is correct

export default function Hero({ data }) {
  if (!data) return null;

  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>{data.tagline}</h1>
          <p>{data.heroDescription}</p>
          <div className="cta-group">
            <a href="#projects" className="btn-primary">View Case Studies</a>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <img src={heroImage} alt="Farrel Alfarabi Saleh" className="hero-profile-img" />
        </div>
      </div>
    </section>
  );
}