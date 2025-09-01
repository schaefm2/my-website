import { useState } from "react";
import ProjSideBar from "../components/Project/ProjSideBar";
import Project from "../components/Project/Project";
import fallingSandImg from "../assets/falling_sand.png";
import jobAppImg from "../assets/Job_App.png";
import finalLanchImg from "../assets/final_launch.png";
import chaosImg from "../assets/chaos-screenshot.png";
import CHOimg from "../assets/CHO.png";

const projectNames = {
  "School Projects": [
    "Chaos Engineering Senior Project",
    "Drone Tracking",
    "Zombie Shooter Game",
  ],
  "Graphics Projects": ["Falling Sand"], //, "Visualizing Merge Sort"
  "Other Projects": ["WPF Job Application Manager", "Custom Hardware Overlay (CHO)"],
};
const projects = [
  {
    name: "Falling Sand",
    description: "Follow the github link, then left click and drag to create sand particles!",
    repoLink: "https://schaefm2.github.io/FallingSand/",
    imgSrc: fallingSandImg,
  },
  {
    name: "Drone Tracking",
    description:
      "My team and I created a drone tracking system using a crazyflie with aruco tags. We were able to successfully track a target and steer the drone to it using PID control. Images coming soon.",
  },
  {
    name: "Zombie Shooter Game",
    description: "Final Launch is a 3d zombie shooter game mad in Unity. It was made by me and 3 other student for our final project in our game design class. My main contributions included building the character model, animating it, and implementing shooting controls.",
    repoLink: "https://github.com/schaefm2/FinalLaunch",
    imgSrc: finalLanchImg,
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
    description: "I made myself a job application manager to help me understand the WPF framework. It allows you to add, remove, and edit job applications.",
    repoLink: "https://github.com/schaefm2/JobAppManager",
    imgSrc: jobAppImg,
  },
  {
    name: "Custom Hardware Overlay (CHO)",
    description: "Another WPF project I made that lets you create custom hardware overlays for you PC.",
    repoLink: "https://github.com/schaefm2/CustomHardwareOverlay",
    imgSrc: CHOimg,
  },
];

const Projects = () => {
  const [displayedProject, setDisplayedProject] = useState({
    name: "Falling Sand",
    description: "Left click and drag to create sand particles!",
    repoLink: "https://schaefm2.github.io/FallingSand/",
    imgSrc: fallingSandImg,
  });

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
