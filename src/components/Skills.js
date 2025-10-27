import React from "react";
import "./css/Skills.css";

const Skills = () => {
  const experiences = [
    {
      year: "Jan 2021 - Present",
      title: "Creative Director",
      company: "pxdraft Ltd, UK",
    },
    {
      year: "Feb 2020 - Dec 2020",
      title: "Frontend Developer",
      company: "Web Studio, India",
    },
    {
      year: "2019 - 2020",
      title: "UI/UX Designer",
      company: "Freelance Projects",
    },
    {
      year: "2018 - 2019",
      title: "Intern Developer",
      company: "TechSoft Pvt Ltd",
    },
  ];

  const skills = [
    { name: "React" },
    { name: "JavaScript" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "Node.js" },
    { name: "Git / GitHub" },
    { name: "Figma" },
    { name: "Shopify" },
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
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services, and
            online stores.
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
