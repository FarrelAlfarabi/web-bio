import React from "react";

export default function ProjectCard({ title, icon }) {
  return (
    <figure className="thumb">
      <div className="icon-display">{icon}</div>
      <figcaption>{title}</figcaption>
    </figure>
  );
}
