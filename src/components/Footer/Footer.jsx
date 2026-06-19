import React from "react";
import "./Footer.css";

export default function Footer({ data }) {
  if (!data) return null;
  return (
    <footer style={{ padding: "3rem 1rem", backgroundColor: "#1a202c", color: "#a0aec0", textAlign: "center" }}>
      <div className="container">
        <div style={{ marginBottom: "1.5rem" }}>
          <a href={data.github} target="_blank" rel="noreferrer" style={{ color: "#e2e8f0", margin: "0 1rem", textDecoration: "none", fontWeight: "500" }}>GitHub</a>
          <a href={data.linkedin} target="_blank" rel="noreferrer" style={{ color: "#e2e8f0", margin: "0 1rem", textDecoration: "none", fontWeight: "500" }}>LinkedIn</a>
        </div>
        <p style={{ fontSize: "0.9rem" }}>&copy; {new Date().getFullYear()} {data.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}