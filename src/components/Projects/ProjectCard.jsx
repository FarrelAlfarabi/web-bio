import React from "react";
import "./Projects.css";

export default function Projects({ data }) {
  if (!data || !data.projects) return null;
  const { projects } = data;

  return (
    <section id="projects" className="case-studies-section">
      <div className="container">
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "3rem" }}>Case Studies & Business Impact</h2>
        <div className="case-studies-grid">
          {projects.map((project, index) => (
            <div key={index} className="case-study-card">
              <div className="card-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-company">{project.company}</span>
              </div>
              
              <div className="star-content">
                <div className="star-block">
                  <strong>Situation:</strong> <p>{project.situation}</p>
                </div>
                <div className="star-block">
                  <strong>Task:</strong> <p>{project.task}</p>
                </div>
                <div className="star-block">
                  <strong>Action:</strong> <p>{project.action}</p>
                </div>
                <div className="star-block result-block">
                  <strong>Result:</strong> <p>{project.result}</p>
                </div>
              </div>

              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}