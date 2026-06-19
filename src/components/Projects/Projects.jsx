import React from "react";
import "./Projects.css";

export default function Projects({ data }) {
  // THE FIX: This safety check prevents the crash if data is undefined
  if (!data || !data.projects) {
    return null; // Renders nothing until the data is safely loaded
  }

  const { projects } = data;

  return (
    <section id="projects" className="case-studies-section" style={{ padding: "5rem 1rem", backgroundColor: "#ffffff" }}>
      <div className="container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "3rem", fontSize: "2.5rem", color: "#1a202c", fontWeight: "bold" }}>
          Case Studies & Business Impact
        </h2>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {projects.map((project, index) => (
            <div key={index} style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "2.5rem", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
              <div style={{ marginBottom: "2rem", borderBottom: "2px solid #edf2f7", paddingBottom: "1rem" }}>
                <h3 style={{ fontSize: "1.75rem", color: "#1a202c", margin: "0 0 0.5rem 0", fontWeight: "700" }}>
                  {project.title}
                </h3>
                <span style={{ fontSize: "1rem", color: "#3182ce", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {project.company}
                </span>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <strong style={{ color: "#2d3748", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>Situation:</strong> 
                  <p style={{ margin: 0, color: "#4a5568", lineHeight: "1.6" }}>{project.situation}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <strong style={{ color: "#2d3748", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>Task:</strong> 
                  <p style={{ margin: 0, color: "#4a5568", lineHeight: "1.6" }}>{project.task}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <strong style={{ color: "#2d3748", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>Action:</strong> 
                  <p style={{ margin: 0, color: "#4a5568", lineHeight: "1.6" }}>{project.action}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", backgroundColor: "#ebf8ff", padding: "1rem", borderRadius: "8px" }}>
                  <strong style={{ color: "#2b6cb0", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>Result:</strong> 
                  <p style={{ margin: 0, color: "#2b6cb0", fontWeight: "600", lineHeight: "1.6" }}>{project.result}</p>
                </div>
              </div>

              <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                {project.tags && project.tags.map((tag, i) => (
                  <span key={i} style={{ background: "#edf2f7", color: "#4a5568", padding: "0.4rem 1rem", borderRadius: "9999px", fontSize: "0.85rem", fontWeight: "500" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}