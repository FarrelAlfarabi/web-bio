import React from "react";
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
  return (
    <div className="App">
      <a href="#main" className="skip-link">
        Skip to content
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
