import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectList = [
    {
      name: "Portfolio Website",
      description: "A personal portfolio built with React and CSS.",
      image: "/Gemini_Generated_Image_mlq69cmlq69cmlq6.png", // image url
      tech: ["React", "CSS", "JavaScript"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      name: "E-commerce App",
      description: "A shopping cart app using React and Firebase.",
      image: "/Gemini_Generated_Image_ioostzioostzioos.png",
      tech: ["React", "Firebase", "CSS"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      name: "ToDo App",
      description: "A simple task management app with React hooks.",
      image: "/Gemini_Generated_Image_sdl0kqsdl0kqsdl0.png",
      tech: ["React", "Hooks", "CSS"],
      demoLink: "#",
      githubLink: "#"
    },
  ];

  return (
    <section id="projects" data-aos="fade-up" className="projects">
      <h2>My Projects</h2>
      <div className="project-container">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tech-badges">
              {project.tech.map((t, i) => (
                <span key={i} className="badge">{t}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.demoLink} target="_blank" rel="noreferrer">Live Demo</a>
              <a href={project.githubLink} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
