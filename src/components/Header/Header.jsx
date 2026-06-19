import React, { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">Farrel Alfarabi Saleh</div>
      
      {/* Hamburger Button (Only visible on mobile) */}
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        {isMenuOpen ? "✕" : "☰"}
      </button>

      {/* Navigation - Class changes based on state */}
      <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setIsMenuOpen(false)}>Competencies</a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)}>Case Studies</a>
        <a href="#contact" className="cta-btn" onClick={() => setIsMenuOpen(false)}>Let's Connect</a>
      </nav>
    </header>
  );
}