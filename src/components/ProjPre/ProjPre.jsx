import React, { useEffect, useState } from "react";
import chaosPreview from "../../assets/chaos-screenshot.png";
import fallingPreview from "../../assets/falling_sand.png";
import finalLaunchPreview from "../../assets/final_launch.png";
import resumePreview from "../../assets/resume_photo1.jpg";
import resumePreview2 from "../../assets/resume_photo2.jpg";
import { SlideShow } from "./SlideShow";
import "./ProjPre.css";

const images = [chaosPreview, fallingPreview, finalLaunchPreview];
const resume_images = [resumePreview, resumePreview2];
const ProjPre = () => {

  return (
    <div
      id="project-preview"
      className="relative text-white top-90 flex px-20 items-center justify-center flex-col py-20 bg-gray-900"
    >
      <ul className="flex flex-wrap gap-10 justify-center w-full">
        <SlideShow images={images} to="/projects" content="Projects"/>
        <SlideShow images={resume_images} to="/resume" content="Resume"/>
      </ul>
    </div>
  );
};

export default ProjPre;
