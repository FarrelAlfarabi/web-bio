import React from "react";
import "./Contact.css";

export default function Contact({ data }) {
  if (!data || !data.contactSection) return null;
  const { contactSection: section } = data;

  return (
    <section id="contact" className="section" data-reveal-line>
      <div className="container section-grid">
        <div className="section-marker" data-reveal>
          <span className="section-index">{section.index}</span>
          <span className="mono-label">{section.label}</span>
        </div>

        <div className="contact-body" data-reveal style={{ "--reveal-delay": "120ms" }}>
          <h2 className="section-title">{section.title}</h2>
          <p className="contact-copy">{section.body}</p>
          <div className="contact-links">
            {section.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={link.primary ? "btn" : "btn ghost"}
                {...(link.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
