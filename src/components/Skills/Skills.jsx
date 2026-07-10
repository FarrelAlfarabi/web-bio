import React from "react";
import "./Skills.css";

export default function Skills({ data }) {
  if (!data || !data.skillsSection || !data.skillCategories) return null;
  const { skillsSection: section, skillCategories } = data;

  return (
    <section id="skills" className="section">
      <div className="container section-grid">
        <div className="section-marker">
          <span className="section-index">{section.index}</span>
          <span className="mono-label">{section.label}</span>
        </div>

        <div className="skills-body">
          <h2 className="section-title">{section.title}</h2>

          <div className="skills-grid">
            {skillCategories.map((category) => (
              <div key={category.title} className="skills-col">
                <h3 className="skills-col-title mono-label">{category.title}</h3>
                <ul className="skills-list">
                  {category.skills.map((skill) => (
                    <li key={skill} className="skills-item">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
