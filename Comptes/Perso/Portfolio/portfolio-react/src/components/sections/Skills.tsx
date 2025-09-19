import React from "react";
import "./Skills.css";

const Skills: React.FC = () => {
  return (
    <section className="skills-section" id="skills">
      {/* Texte en arrière-plan répété */}
      <div className="skills-background">
        <p>MES COMPÉTENCES</p>
        <p>MES COMPÉTENCES</p>
        <p>MES COMPÉTENCES</p>
      </div>

      <h2 className="skills-title">Mes compétences</h2>

      <div className="skills-grid">
        <div className="skill-card"><p>Frontend</p>
            <p><span className="skill-label">Langages :</span> HTML, CSS, JavaScript, AJAX</p>
            <p><span className="skill-label">Frameworks & Librairies :</span> React, React Native, Next.js, Bootstrap</p>
            <p><span className="skill-label">CMS :</span> WordPress (bases)</p>
        </div>
        <div className="skill-card"><p>Backend</p>
            <p><span className="skill-label">Langages :</span> PHP, Python, Java</p>
            <p><span className="skill-label">Frameworks / Environnements :</span> Node.js</p>
            <p><span className="skill-label">Bases de données :</span> SQL, MySQL, MariaDB, MongoDB</p>
        </div>
        <div className="skill-card"><p>Outils</p>
            <p><span className="skill-label">Versioning & Cloud :</span> Git, GitHub, AWS, Linux</p>
            <p><span className="skill-label">Collaboration & Design :</span> Figma, Jira, HubSpot</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
