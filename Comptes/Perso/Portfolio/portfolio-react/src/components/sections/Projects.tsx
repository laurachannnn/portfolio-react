// Projects.tsx
import React, { useState, useRef } from "react";
import "./Projects.css";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

const Projects: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Données d'exemple - remplacez par vos vrais projets
  const projects: Project[] = [
    {
      id: 1,
      title: "Projet Java",
      description: "Application Java avec interface moderne",
      image: "/path/to/java-project.jpg",
      technologies: ["Java", "Spring Boot", "MySQL"]
    },
    {
      id: 2,
      title: "Gestion de projet - Projet transversal",
      description: "Système de gestion de projets complet",
      image: "/path/to/management-project.jpg",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 3,
      title: "Développement Pistes cyclables",
      description: "Application de cartographie des pistes cyclables",
      image: "/path/to/bike-project.jpg",
      technologies: ["Vue.js", "Express", "PostgreSQL"]
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description: "Plateforme de commerce électronique complète",
      image: "/path/to/ecommerce-project.jpg",
      technologies: ["React", "TypeScript", "Stripe"]
    },
    {
      id: 5,
      title: "Mobile App",
      description: "Application mobile cross-platform",
      image: "/path/to/mobile-project.jpg",
      technologies: ["React Native", "Firebase", "Redux"]
    }
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320,
        behavior: 'smooth'
      });
    }
  };

  const scrollToPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h2 className="projects-title">Mes projets</h2>
        <div className="projects-navigation">
          <button className="nav-btn prev-btn" onClick={scrollToPrev}>
            ←
          </button>
          <button className="nav-btn next-btn" onClick={scrollToNext}>
            →
          </button>
        </div>
      </div>

      <div 
        className="projects-container"
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div className="projects-track">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {project.link && (
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    Voir le projet
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;