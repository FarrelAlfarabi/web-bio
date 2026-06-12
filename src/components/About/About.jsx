import React from "react";
import "./About.css";
import aboutImg from "../../images/about.png";

export default function About({ data }) {
  return (
    <section id="about" className="section">
      <div className="container grid2">
        <img className="card media" src={aboutImg} alt="About" />
        <div>
          <h2>About Me</h2>
          <p>{data.about}</p>
          <dl className="info">
            <div><dt>Name</dt><dd>{data.name}</dd></div>
            <div><dt>Email</dt><dd><a href={`mailto:${data.email}`}>{data.email}</a></dd></div>
            <div><dt>Phone</dt><dd><a href={`tel:${data.phone.replace(/\s|-/g, "")}`}>{data.phone}</a></dd></div>
            <div><dt>LinkedIn</dt><dd><a target="_blank" rel="noreferrer" href={data.linkedin}>Profile</a></dd></div>
            <div><dt>GitHub</dt><dd><a target="_blank" rel="noreferrer" href={data.github}>@FarrelAlfarabi</a></dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
