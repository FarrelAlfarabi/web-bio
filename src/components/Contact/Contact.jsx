import React from "react";
import "./Contact.css";

export default function Contact({ data }) {
  if (!data) return null;

  return (
    <section id="contact" className="contact-section" style={{ padding: "6rem 1rem", backgroundColor: "#f8fafc", textAlign: "center" }}>
      <div className="container">
        <h2 style={{ fontSize: "2.5rem", color: "#1a202c", marginBottom: "1.5rem", fontWeight: "bold" }}>Ready to Optimize Your Operations?</h2>
        <p style={{ fontSize: "1.15rem", color: "#4a5568", marginBottom: "3rem", maxWidth: "600px", margin: "0 auto 3rem auto" }}>
          Whether you are looking for a Product Manager to bridge the gap between business and engineering, or need operational strategies executed flawlessly.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
          <a href={`mailto:${data.email}`} style={{ padding: "1rem 2rem", backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", textDecoration: "none", color: "#2d3748", fontWeight: "600", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" }}>
            Email: {data.email}
          </a>
          <a href={data.linkedin} target="_blank" rel="noreferrer" style={{ padding: "1rem 2rem", backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", textDecoration: "none", color: "#2d3748", fontWeight: "600", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" }}>
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}