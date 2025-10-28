import React from "react";
import "./css/Skills.css";

const Skills = () => {
  const experiences = [
    {
      year: "Dec 2024 - Present",
      title: "Shopify Developer",
      company: "Freelance / Remote ",
    },
    {
      year: "Jan 2022 - Dec 2024",
      title: "PHP Web Developer",
      company: "KasWebtech Solutions Pvt. Ltd.",
    },
    {
      year: "Oct 2021 - Dec 2021",
      title: "PHP Web Developer",
      company: "Esferasoft Solutions Pvt Ltd.",
    },
    {
      year: " Jan 2021 - June 2021",
      title: "Mean Stack Intern Developer",
      company: "Impinge Solutions",
    },
    {
      year: "Sep 2018 - Feb 2019",
      title: "PHP Intern Developer",
      company: "Local Training Institute",
    },
  ];

  const skills = [
    { name: "Shopify" },
    { name: "Wordpress" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "JQuery" },
    { name: "AJAX" },
    { name: "JavaScript" },
    { name: "PHP" },
    { name: "React JS" },
    { name: "Git / GitHub" },
    
    

  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-heading">
        Skills <span>& Experience</span>
      </h2>

      {/* TOP SECTION */}
      <div className="skills-top">
        <div className="skills-intro">
          <h2>
            <span>Experience</span>
          </h2>
          <p>
            Experienced <span>Shopify Developer </span> skilled in creating custom themes, enhancing store performance, and delivering smooth, high-converting e-commerce experiences. Currently, I’m expanding my skills by learning React.js to build modern, dynamic web applications.
          </p>
        </div>

        <div className="experience-table">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-row">
              <div className="exp-year">{exp.year}</div>
              <div className="exp-details">
                <h4>{exp.title}</h4>
                <p>{exp.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="skills-bottom">
        {/* LEFT - SKILL BOXES */}
        <div className="skills-boxes">
          <h3>My Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                {skill.name}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - HIRE ME */}
        <div className="hire-box">
          <h3>Hire Me</h3>
          <p>
            I am available for freelance projects and full-time positions. Let's
            work together to create something amazing!
          </p>
          <a href="#contact" className="hire-btn">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
