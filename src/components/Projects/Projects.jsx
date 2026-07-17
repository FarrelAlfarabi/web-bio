import React from "react";
import "./Projects.css";

export default function Projects({ data }) {
  if (!data || !data.projectsSection || !data.projects) return null;
  const { projectsSection: section, projects } = data;

  return (
    <section id="projects" className="section" data-reveal-line>
      <div className="container section-grid">
        <div className="section-marker" data-reveal>
          <span className="section-index">{section.index}</span>
          <span className="mono-label">{section.label}</span>
        </div>

        <div className="cs-body">
          <h2 className="section-title" data-reveal>{section.title}</h2>

          <ol className="cs-list">
            {projects.map((project, i) => (
              <li
                key={project.title}
                className="cs-entry"
                data-reveal
                style={{ "--reveal-delay": `${Math.min(i, 1) * 90}ms` }}
              >
                <div className="cs-head">
                  <span className="cs-no">
                    {section.index}.{i + 1}
                  </span>
                  <span className="cs-org">{project.org}</span>
                  <span className="cs-year">{project.year}</span>
                </div>

                <h3 className="cs-title">{project.title}</h3>
                {project.role && <p className="cs-role">{project.role}</p>}

                <dl className="cs-fields">
                  <div className="cs-field">
                    <dt>{section.fieldLabels.problem}</dt>
                    <dd>{project.problem}</dd>
                  </div>
                  <div className="cs-field">
                    <dt>{section.fieldLabels.built}</dt>
                    <dd>{project.built}</dd>
                  </div>
                  <div className="cs-field cs-field--result">
                    <dt>{section.fieldLabels.result}</dt>
                    <dd>{project.result}</dd>
                  </div>
                </dl>

                <ul className="cs-stack">
                  {project.stack.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
