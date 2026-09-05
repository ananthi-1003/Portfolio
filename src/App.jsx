import React from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import EasterEgg from './components/EasterEgg';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Journey from './sections/Journey';
import Milestones from './sections/Milestones';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import FutureGoals from './sections/FutureGoals';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#08070d] text-[#f8fafc] font-sans selection:bg-purple-600/30 selection:text-purple-200 relative">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Secret Keyboard Easter Egg: Type "ANANTHI" */}
      <EasterEgg />

      {/* Sticky Glassmorphic Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Milestones />
        <Education />
        <Certifications />
        <FutureGoals />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
