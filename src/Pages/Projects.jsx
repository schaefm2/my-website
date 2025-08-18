import { useState } from "react";
import ProjSideBar from "../components/Project/ProjSideBar";
import Project from "../components/Project/Project";
import fallingSandImg from "../assets/falling_sand.png";
const Projects = () => {
  const [displayedProject, setDisplayedProject] = useState({
    name: "Falling Sand",
    description: "This is a description of my project.",
    repoLink: "https://schaefm2.github.io/FallingSand/",
    imgSrc: fallingSandImg,
  });
  const projectNames = {
    "School Projects": [
      "Chaos Engineering",
      "Drone Tracking",
      "Zombie Shooter Game",
    ],
    "Graphics Projects": ["Falling Sand", "Visualizing Merge Sort"],
    "Other Projects": ["WPF Job Application Manager"],
  };
  const projects = [
    {
      name: "Falling Sand",
      description: "This is a description of my project.",
      repoLink: "https://schaefm2.github.io/FallingSand/",
      imgSrc: fallingSandImg,
    },
    {
      name: "Drone Tracking",
      description: "This is a description of my project.",
      repoLink: "https://schaefm2.github.io/FallingSand/",
      imgSrc: fallingSandImg,
    },
    {
      name: "Zombie Shooter Game",
      description: "This is a description of my project.",
      repoLink: "https://schaefm2.github.io/FallingSand/",
      imgSrc: fallingSandImg,
    },
    {
      name: "Chaos Engineering",
      description: "This is a description of my project.",
      repoLink: "https://schaefm2.github.io/FallingSand/",
      imgSrc: fallingSandImg,
    },
    {
      name: "Visualizing Merge Sort",
      description: "This is a description of my project.",
      repoLink: "https://schaefm2.github.io/FallingSand/",
      imgSrc: fallingSandImg,
    },
    {
      name: "WPF Job Application Manager",
      description: "This is a description of my project.",
      repoLink: "https://schaefm2.github.io/FallingSand/",
      imgSrc: fallingSandImg,
    },
  ];

  const handleProjectChange = (name) => {
    console.log("Changeing project to:", name);
    const selectedProject = projects.find((project) => project.name === name);
    if (selectedProject) {
      setDisplayedProject(selectedProject);
    }
  };

  return (
    <div className="flex">
      <Project project={displayedProject} />

      <ProjSideBar
        projectNames={projectNames}
        changeProject={handleProjectChange}
      />
    </div>
  );
};

export default Projects;
