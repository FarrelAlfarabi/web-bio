import React from "react";
import Stats from "../Stats/Stats";
import "./Hero.css";
import heroImg from "../../images/hero.jpg";

export default function Hero({ data }) {
  return (
    <section id="hero" className="hero">
      <div className="container grid2">
        <div>
          <p className="eyebrow">Hello, {data.tagline.toLowerCase()}</p>
          <h1>Hi, I am <span className="accent">{data.name.split(" ")[0]}</span>. This is my favorite work.</h1>
          <p className="lede">{data.about}</p>
          <div className="row gap">
            <a href="#projects" className="btn">See Projects</a>
            <a href="#contact" className="btn ghost">Contact Me</a>
          </div>
          <div className="row meta">
            <a href={`mailto:${data.email}`}>{data.email}</a>
            <span>•</span>
            <a href={`tel:${data.phone.replace(/\s|-/g, "")}`}>{data.phone}</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="tilt"/>
          <img src={heroImg} alt="Portrait" />
        </div>
      </div>
      <Stats highlights={data.highlights} />
    </section>
  );
}
