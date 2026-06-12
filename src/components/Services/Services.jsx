import React from "react";
import ServiceCard from "./ServiceCard";
import "./Services.css";

export default function Services({ services }) {
  return (
    <section id="services" className="section alt">
      <div className="container">
        <p className="eyebrow">Capabilities</p>
        <h2>We do awesome services for our clients</h2>
        <div className="cards grid3">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
