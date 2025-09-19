import React from "react";
import "./EducationExperience.css";

const EducationExperience: React.FC = () => {
  return (
    <section className="edu-exp-section" id="education">
      <div className="edu-exp-container">
        {/* Bloc Éducation */}
        <div className="education-card">
          <h2>Éducation</h2>
          <div className="edu-item">
            <h3>2023 - 2024</h3>
            <p><strong>Echange à l'Ecole de Technologie Supérieure, Montréal, Canada</strong></p>
            <p>Technologies de l'Information</p>
          </div>
          <div className="edu-item">
            <h3>2021 - 2024</h3>
            <p><strong>École Polytechnique de l’Université de Nantes, Nantes, France</strong></p>
            <p>Diplômée d’école d’ingénieur en Électronique et Technologies Numériques</p>
          </div>
          <div className="edu-item">
            <h3>2019 - 2021</h3>
            <p><strong>Classe préparatoire aux Grandes Écoles (CPGE), Lycée Jean Dautet, La Rochelle, France</strong></p>
            <p>Mathématiques, Physique et Sciences de l’ingénieur (MPSI) / Mathématiques, Physique (MP)</p>
          </div>
        </div>

        {/* Bloc Expériences */}
        <div className="experience-card">
          <h2>Expériences</h2>
          <div className="exp-item">
            <h3>Septembre 2024 - Juillet 2025</h3>
            <p><strong>Développeuse logiciel</strong></p>
            <p>CyberPNM — Fullstack MERN</p>
            <ul>
              <li>Conception et automatisation de la génération de rapports PDF (PHP, JavaScript, mPDF)</li>
              <li>Développement d’API et intégration front-end via Node.js (POST, Fetch, Ajax)</li>
              <li>Déploiement et conteneurisation d’applications avec Docker</li>
              <li>Gestion de projet logiciel (planification, suivi et coordination)</li>
              <li>Réalisation de maquettes et prototypage mobile sur Figma</li>
              <li>Développement front-end d’une application mobile avec React Native</li>
            </ul>
          </div>
          <div className="exp-item">
            <h3>Mars 2024 - Août 2024</h3>
            <p><strong>Stage en développement logiciel</strong></p>
            <p>CyberPNM — React + Node.js</p>
            <ul>
              <li>Développement d’une application web (PHP, MariaDB, HTML, CSS, JavaScript, jQuery, Ajax)</li>
              <li>Automatisation de la génération de rapports PDF (PHP, JavaScript, librairie mPDF)</li>
              <li>Conception et intégration d’une formule de calcul de risque en cybersécurité</li>
              <li>Gestion de projet avec JIRA : suivi des tâches, organisation et communication avec l’équipe</li>
              <li>Développement de compétences transversales : entrepreneuriat, collaboration interdisciplinaire, communication professionnelle</li>
              <li>Familiarisation et mise en pratique sur Linux, AWS et Apache</li>
            </ul>

          </div>
          <div className="exp-item">
            <h3>Mai 2023 - Août 2023</h3>
            <p><strong>Stage en Recherche Et Développement (R&D) - Electronique de puissance</strong></p>
            <p>Sunology – Frontend React</p>
            <ul>
              <li>Conception d’une brique technologique de type Buck Soft en électronique de puissance</li>
              <li>Rédaction de documentation technique et réalisation de recherches</li>
              <li>Programmation en langage C pour systèmes embarqués</li>
              <li>Travaux pratiques : soudage et montage de composants électroniques</li>
              <li>Acquisition de connaissances sur le fonctionnement et l’intégration des panneaux solaires</li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
