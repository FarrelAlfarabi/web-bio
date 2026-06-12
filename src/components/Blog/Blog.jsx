import React from "react";
import BlogCard from "./BlogCard";
import "./Blog.css";

export default function Blog({ blog }) {
  return (
    <section id="blog" className="section">
      <div className="container">
        <h2>Our Blog</h2>
        <div className="cards grid3">
          {blog.map((b) => (
            <BlogCard key={b.title} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}
