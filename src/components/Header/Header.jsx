import React, { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  // Add a subtle shadow when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerStyle = {
    position: "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
    transition: "all 0.3s ease",
    zIndex: 1000,
    padding: "1.25rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };

  const navStyle = {
    display: "flex",
    gap: "2rem",
    alignItems: "center"
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#4a5568",
    fontWeight: "500",
    fontSize: "1rem",
    transition: "color 0.2s"
  };

  return (
    <header style={headerStyle}>
      <div style={{ fontWeight: "800", fontSize: "1.5rem", color: "#1a202c", letterSpacing: "-0.5px" }}>
        Farrel Alfarabi Saleh
      </div>
      
      {/* Desktop Navigation */}
      <nav style={navStyle} className="desktop-nav">
        <a href="#about" style={linkStyle}>About</a>
        <a href="#skills" style={linkStyle}>Competencies</a>
        <a href="#projects" style={linkStyle}>Case Studies</a>
        <a 
          href="#contact" 
          style={{ 
            ...linkStyle, 
            backgroundColor: "#3182ce", 
            color: "white", 
            padding: "0.5rem 1.25rem", 
            borderRadius: "8px",
            fontWeight: "bold"
          }}
        >
          Let's Connect
        </a>
      </nav>
    </header>
  );
}