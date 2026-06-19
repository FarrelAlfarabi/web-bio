import React from 'react';
import './Skills.css';

export default function Skills({ data }) {
  // Gracefully fallback if data isn't loaded yet
  if (!data || !data.skillCategories) return null;

  const { skillCategories } = data;

  return (
    <section id="skills" className="skills-matrix">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Core Competencies</h2>
          <p className="section-subtitle">Bridging technical execution with strategic business management.</p>
        </div>
        
        <div className="matrix-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="matrix-column">
              <h3 className="category-title">{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, i) => (
                  <li key={i} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}