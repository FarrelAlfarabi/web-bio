import React from "react";
import TestimonialCard from "./TestimonialCard";
import "./Testimonials.css";

export default function Testimonials({ testimonials }) {
  return (
    <section id="testimonials" className="section olive">
      <div className="container">
        <p className="eyebrow center">Testimonials</p>
        <h2 className="center">What client says about?</h2>
        <div className="cards grid3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
