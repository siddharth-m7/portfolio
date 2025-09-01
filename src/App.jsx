import React, { useState } from "react";
import "./assets/css/index.css";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";
import PortfolioPage from "./pages/About/About";

import { Route, Routes } from "react-router-dom";

export default function App() {
  const [isOnePage, setIsOnePage] = useState(true); // Toggle state

  return (
    <>
      <Header />
      {/* Conditional Rendering */}
      {isOnePage ? (
        // One-Page Mode: Render all components together
        <>
          <section id="home">
          <Hero />
          </section>
          <section id="skills">
          <Skills />
          </section>
         
          <section id="projects">
          <Projects />
          </section>
          <section id="education">
          <Education />
          </section>
           <section id="experience">
          <Experience />
          </section>
          <PortfolioPage />
          <section id="contact">
          <Contact />
          </section>
          
        </>
      ) : (
        // Router Mode: Use routes for navigation
        <Routes>`
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      )}
    </>
  );
}
