import React from "react";
import "./About.css";

export default function About({ data }) {
  if (!data || !data.about) return null;
  const { about } = data;

  return (
    <section id="about" className="section">
      <div className="container section-grid">
        <div className="about-side">
          <div className="section-marker">
            <span className="section-index">{about.index}</span>
            <span className="mono-label">{about.label}</span>
          </div>
          <img
            className="about-photo"
            src={about.image}
            srcSet={`${about.imageSmall} 680w, ${about.image} 1200w`}
            sizes="(max-width: 899px) 280px, 340px"
            alt={about.imageAlt}
            width="1200"
            height="876"
            loading="lazy"
          />
        </div>

        <div className="about-body">
          <h2 className="section-title">{about.title}</h2>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="about-para">
              {paragraph}
            </p>
          ))}

          <h3 className="mono-label about-subhead">{about.timelineLabel}</h3>
          <ol className="timeline">
            {about.timeline.map((item) => (
              <li key={item.org} className="timeline-item">
                <span className="timeline-period">{item.period}</span>
                <span className="timeline-detail">
                  <span className="timeline-org">{item.org}</span>
                  <span className="timeline-role">{item.role}</span>
                </span>
              </li>
            ))}
          </ol>

          <h3 className="mono-label about-subhead">{about.educationLabel}</h3>
          <ul className="edu-list">
            {about.education.map((item) => (
              <li key={item.degree} className="edu-item">
                <span className="edu-degree">{item.degree}</span>
                <span className="edu-school">{item.school}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
