import React from "react";
import "./css/About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-heading">About Me</h2>
        <p>
          I’m a web developer with 4 years of experience specializing in 
          <span className="highlight"> PHP, HTML, CSS, Bootstrap, jQuery, JavaScript, AJAX, Shopify, </span>
          and <span className="highlight"> WordPress</span>. I focus on creating responsive, user-friendly 
          websites and optimized e-commerce solutions. Currently, I’m expanding my skills by learning 
          <span className="highlight"> React</span> to build modern, dynamic web applications.
        </p>
      </div>
    </section>
  );
};

export default About;
