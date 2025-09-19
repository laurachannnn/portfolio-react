import { useState } from "react";
import React from "react";
import "./About.css";

const About: React.FC<{ visibleElements: Set<string> }> = ({ visibleElements }) => {
    return(
        <div className={`hello ${visibleElements.has("about-section") ? "visible" : ""}`} 
        id="about-section"
        data-animate
            >
            <div className="hello-content">
                <h1>Bonjour, moi c'est Laura ! </h1>
                <p>Je suis développeuse web et grande passionnée de création, que ce soit à travers l'art, 
                    la peinture, ou même les puzzles. J'adore résoudre des problèmes et donner vie à des idées, 
                    que ce soit dans le code ou sur une toile. 
                </p>
                <p>Ce portfolio, c'est un peu comme une fenêtre sur mon univers : mon parcours, mes projets et tout ce qui me motive au quotidien. </p>
                <p>Bonne visite !</p>
                <button className="hello-button">Télécharger mon CV</button>
                </div>
                <div className="hello-image">
                <img src="https://media.licdn.com/dms/image/D4D03AQH1j1nX4Y2m5g/profile-displayphoto-shrink_800_800/0/1678886328471?e=1701302400&v=beta&t=Zk2rY9b8k3JH5i3bF6nXo0uYhE1a8KX9c3rX4KJfX3U" alt="Laura Chaniolleau"/>
            </div>
                
                
        </div>
);
}

export default About;