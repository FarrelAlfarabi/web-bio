import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Our Projects</h2>
        <div className="gallery">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
