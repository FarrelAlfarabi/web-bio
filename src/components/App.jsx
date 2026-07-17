import React, { useEffect } from "react";
import { portfolioData } from "../data";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import "../styles/App.css";

function App() {
  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal], [data-reveal-line]");
    if (!("IntersectionObserver" in window)) return undefined;

    document.documentElement.classList.add("reveal-ready");
    const observer = new IntersectionObserver(
      (entries, io) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px" }
    );
    targets.forEach((el) => {
      // anything already on screen shows immediately rather than
      // waiting for the observer's first cycle
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("is-revealed");
      } else {
        observer.observe(el);
      }
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <a href="#main" className="skip-link">
        {portfolioData.ui.skipLink}
      </a>
      <Header data={portfolioData} />
      <main id="main">
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Skills data={portfolioData} />
        <Projects data={portfolioData} />
        <Contact data={portfolioData} />
      </main>
      <Footer data={portfolioData} />
    </div>
  );
}

export default App;
