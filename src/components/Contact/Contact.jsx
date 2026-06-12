import React from "react";
import "./Contact.css";

export default function Contact({ data }) {
  return (
    <section id="contact" className="section cta">
      <div className="container grid2">
        <div>
          <h2>Have a Project?</h2>
          <p>I'd love to hear about it. Drop a message and I'll get back to you.</p>
          <ul className="list">
            <li><strong>Email:</strong> <a href={`mailto:${data.email}`}>{data.email}</a></li>
            <li><strong>Phone:</strong> <a href={`tel:${data.phone.replace(/\s|-/g, "")}`}>{data.phone}</a></li>
            <li><strong>LinkedIn:</strong> <a href={data.linkedin} target="_blank" rel="noreferrer">Profile</a></li>
            <li><strong>GitHub:</strong> <a href={data.github} target="_blank" rel="noreferrer">@FarrelAlfarabi</a></li>
          </ul>
        </div>
        <form action={`https://formspree.io/f/${"YOUR_FORM_ID"}`} method="POST" className="card form">
          <div className="row">
            <input name="name" placeholder="Name" required />
            <input name="email" type="email" placeholder="Email" required />
          </div>
          <input name="subject" placeholder="Subject" />
          <textarea name="message" rows="5" placeholder="Message" />
          <button className="btn" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
