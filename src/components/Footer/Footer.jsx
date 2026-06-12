import React from "react";
import "./Footer.css";

export default function Footer({ data }) {
  return (
    <footer className="footer">
      <div className="container grid4">
        <div>
          <h4>Let's be in touch</h4>
          <p>Open to software roles, product/IT management, and UI/UX work.</p>
          <a className="btn small" href="/cv.pdf" download>Download CV</a>
        </div>
        <div>
          <h5>Links</h5>
          <ul className="list small">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5>Services</h5>
          <ul className="list small">
            {data.services.slice(0, 4).map((s) => <li key={s.title}>{s.title}</li>)}
          </ul>
        </div>
        <div>
          <h5>Have a Question?</h5>
          <ul className="list small">
            <li><a href={`mailto:${data.email}`}>{data.email}</a></li>
            <li><a href={`tel:${data.phone.replace(/\s|-/g, "")}`}>{data.phone}</a></li>
            <li><a href={data.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href={data.github} target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">© {new Date().getFullYear()} {data.name}. All rights reserved.</div>
    </footer>
  );
}
