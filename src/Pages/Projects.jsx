import { useState } from "react";
import ProjSideBar from "../components/Project/ProjSideBar";
import Project from "../components/Project/Project";
import fallingSandImg from "../assets/falling_sand.png";
import chaosImg from "../assets/chaos-screenshot.png";
const Projects = () => {
  const [displayedProject, setDisplayedProject] = useState({
    name: "Falling Sand",
    description: "Left click and drag to create sand particles!",
    repoLink: "https://schaefm2.github.io/FallingSand/",
    imgSrc: fallingSandImg,
  });
  const projectNames = {
    "School Projects": [
      "Chaos Engineering Senior Project",
      "Drone Tracking",
      "Zombie Shooter Game",
    ],
    "Graphics Projects": ["Falling Sand", "Visualizing Merge Sort"],
    "Other Projects": ["WPF Job Application Manager"],
  };
  const projects = [
    {
      name: "Falling Sand",
      description: "Left click and drag to create sand particles!",
      repoLink: "https://schaefm2.github.io/FallingSand/",
      imgSrc: fallingSandImg,
    },
    {
      name: "Drone Tracking",
      description:
        "My team and I created a drone traching system using crazyflie with aruco tags. We were able to successfully track a target and steer the drone to it using PID control.",
      imgSrc: fallingSandImg,
    },
    {
      name: "Zombie Shooter Game",
      description: "This is a description of my project.",
      repoLink: "https://schaefm2.github.io/FallingSand/",
      imgSrc: fallingSandImg,
    },
    {
      name: "Chaos Engineering Senior Project",
      description:
        "Me and 3 other students created a chaos tool for the Western Washington University Cyber Range. \n This project is currently available on the cyber range. \n Download the presentation to learn more.",
      imgSrc: chaosImg,
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
