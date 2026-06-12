import React from "react";
import { portfolioData } from "../data/portfolio";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Services from "./Services/Services";
import Projects from "./Projects/Projects";
import Testimonials from "./Testimonials/Testimonials";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import "../styles/index.css";

export default function App() {
  return (
    <div className="site">
      <Header data={portfolioData} />
      <Hero data={portfolioData} />
      <About data={portfolioData} />
      <Skills skills={portfolioData.skills} />
      <Services services={portfolioData.services} />
      <Projects projects={portfolioData.projects} />
      <Testimonials testimonials={portfolioData.testimonials} />
      <Blog blog={portfolioData.blog} />
      <Contact data={portfolioData} />
      <Footer data={portfolioData} />
    </div>
  );
}
