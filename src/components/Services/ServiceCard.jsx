import React from "react";

export default function ServiceCard({ title, desc, icon }) {
  return (
    <div className="card">
      <div className="icon" aria-hidden>{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
