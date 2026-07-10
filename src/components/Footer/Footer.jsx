import React from "react";
import "./Footer.css";

export default function Footer({ data }) {
  if (!data) return null;

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} {data.name}
        </p>
        <nav className="footer-links" aria-label="Social">
          <a
            href={data.github}
            target="_blank"
            rel="noreferrer"
            className="draw-link"
          >
            GitHub
          </a>
          <a
            href={data.linkedin}
            target="_blank"
            rel="noreferrer"
            className="draw-link"
          >
            LinkedIn
          </a>
          <a href={`mailto:${data.email}`} className="draw-link">
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
