import React from "react";
import "./Project.css";

const Project = ({ project }) => {
  return (
    <div className="project-container">
      <label className="project-label">{project.name}</label>
      <a
        href={project.repoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        See on GitHub
      </a>
      <p className="project-description">{project.description}</p>
      {project.imgSrc && (
        <img src={project.imgSrc} alt="Project" className="project-image" />
      )}
    </div>
  );
};

export default Project;
