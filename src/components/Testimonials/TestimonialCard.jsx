import React from "react";

export default function TestimonialCard({ quote, name, role, icon }) {
  return (
    <div className="card quote">
      <p>"{quote}"</p>
      <div className="person">
        <div className="person-icon">{icon}</div>
        <div>
          <div className="person-name">{name}</div>
          <div className="person-role">{role}</div>
        </div>
      </div>
    </div>
  );
}
