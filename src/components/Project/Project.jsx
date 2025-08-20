import "./Project.css";

const Project = ({ project }) => {
  const docFiles = [
    {
      uri: "my-website/assets/chaosPresentation.ppt",
    },
  ];
  return (
    <div className="project-container">
      <h3 className="project-header">{project.name}</h3>
      {project.repoLink && (
        <a
          href={project.repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          See on GitHub
        </a>
      )}
      <p className="project-description">{project.description}</p>
      {project.imgSrc && (
        <img src={project.imgSrc} alt="Project" className="project-image" />
      )}
      {project.name === "Chaos Engineering Senior Project" && (
        <a
          className="project-a"
          href="public/assets/chaosPresentation.ppt"
          download
        >
          Download Presentation
        </a>
      )}
    </div>
  );
};

export default Project;
