import React from "react";

export default function BlogCard({ date, title, desc, icon, link }) {
  return (
    <a className="card post" href={link}>
      <div className="post-icon">{icon}</div>
      <div className="post-body">
        <div className="post-date">{date}</div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </a>
  );
}
