import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Entrepreneurship from './components/sections/Entrepreneurship';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  // Activate scroll-triggered animations on view
  useScrollReveal();

  return (
    <div className="portfolio-app">
      <Navbar />
      <main id="main-content">
        <Hero />
        <div className="section-divider" aria-hidden="true" />
        <div className="reveal-on-scroll">
          <About />
        </div>
        <div className="section-divider" aria-hidden="true" />
        <div className="reveal-on-scroll">
          <Skills />
        </div>
        <div className="section-divider" aria-hidden="true" />
        <div className="reveal-on-scroll">
          <Experience />
        </div>
        <div className="section-divider" aria-hidden="true" />
        <div className="reveal-on-scroll">
          <Entrepreneurship />
        </div>
        <div className="section-divider" aria-hidden="true" />
        <div className="reveal-on-scroll">
          <Projects />
        </div>
        <div className="section-divider" aria-hidden="true" />
        <div className="reveal-on-scroll">
          <Education />
        </div>
        <div className="section-divider" aria-hidden="true" />
        <div className="reveal-on-scroll">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
