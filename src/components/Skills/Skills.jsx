import React from "react";
import Skill from "./Skill";
import "./Skills.css";

export default function Skills({ skills }) {
  const mid = Math.ceil(skills.length / 2);
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>My Skills</h2>
        <div className="grid2">
          <div>{skills.slice(0, mid).map((s) => <Skill key={s.name} {...s} />)}</div>
          <div>{skills.slice(mid).map((s) => <Skill key={s.name} {...s} />)}</div>
        </div>
      </div>
    </section>
  );
}
