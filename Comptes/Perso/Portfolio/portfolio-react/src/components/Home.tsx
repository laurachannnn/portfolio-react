import React, { useState, useEffect } from "react";
import "./Home.css";
import EducationExperience from "./sections/EducationExperience";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Navbar from "./layout/Navbar";
import HeroBanner from "./layout/HeroBanner";


const Portfolio: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Mise à jour des styles CSS en fonction du scroll
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--scroll-y', `${scrollY}px`);
  }, [scrollY]);

  return (
    <>
      <Navbar />

      <HeroBanner />
      
      <About visibleElements={visibleElements}/>
      <EducationExperience />
      <Skills />
      <Projects />
    </>
  );
};

export default Portfolio;