import React from "react";
import "./Header.css";

export default function Header({ data }) {
  return (
    <header className="topbar">
      <div className="container row">
        <a href="#hero" className="brand">{data.name.split(" ")[0]}</a>
        <nav className="nav">
          {[
            ["About", "about"],
            ["Skills", "skills"],
            ["Services", "services"],
            ["Projects", "projects"],
            ["Testimonials", "testimonials"],
            ["Blog", "blog"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>
        <a className="btn small" href="/cv.pdf" download>Download CV</a>
      </div>
    </header>
  );
}
