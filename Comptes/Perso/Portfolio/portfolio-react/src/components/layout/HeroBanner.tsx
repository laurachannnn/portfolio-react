import React from "react";
import "./HeroBanner.css";

const HeroBanner: React.FC = () => {
return(
    <div>
        <div className="hero-banner">
            <div className="portfolio-heading">
                <h1>PORTFOLIO</h1>
                <div className="portfolios">
                    <h2>PORTFOLIO</h2>
                    <h2>PORTFOLIO</h2>
                    <h2>PORTFOLIO</h2>
                    <h2>PORTFOLIO</h2>
                </div>
            </div>
        </div>
        <div className="banner-image">
            <img src="https://i.pinimg.com/736x/ca/73/5e/ca735ea51ce10971df272a4390dee821.jpg" alt="Image d'un ordinateur"/>
        </div>
        <div className="box">
            Passionnée par le développement web, je vous invite à découvrir mes projets, mes expériences et mes compétences à travers ce portfolio.
        </div>
    </div>
);
}

export default HeroBanner;
