import React from "react";
import { portfolioData } from "../data/portfolio";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
// NOTE: Services import removed to elevate professional positioning
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Skills data={portfolioData} />
        <Projects data={portfolioData} />
        {/* Services section removed */}
        <Contact data={portfolioData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;