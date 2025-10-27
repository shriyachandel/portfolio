import React from "react";
import "./css/About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-heading">About Me</h2>
        <p>
          Hi! I’m <span className="highlight">Shriya Chandel</span>, a passionate React developer. 
          I love building responsive and beautiful web applications that provide great user experiences.
        </p>
      </div>
    </section>
  );
};

export default About;
