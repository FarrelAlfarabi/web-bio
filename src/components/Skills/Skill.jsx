import React from "react";

export default function Skill({ name, level }) {
  return (
    <div className="skill">
      <div className="skill-header">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="bar"><span style={{ width: `${level}%` }} /></div>
    </div>
  );
}
