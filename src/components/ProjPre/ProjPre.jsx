import React, { useEffect, useState } from "react";
import chaosPreview from "../../assets/chaos-screenshot.png";
import fallingPreview from "../../assets/falling_sand.png";
import finalLaunchPreview from "../../assets/final_launch.png";
import "./ProjPre.css";

const images = [chaosPreview, fallingPreview, finalLaunchPreview];

const ProjPre = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let interval;
    if (hovering) {
      interval = setInterval(() => {
        setBgIndex((prev) => (prev + 1) % images.length);
      }, 1000);
    } else {
      setBgIndex(2); // Default to finalLaunchPreview when not hovering
    }

    return () => clearInterval(interval);
  }, [hovering]);

  return (
    <div
      id="project-preview"
      className="relative text-white top-90 flex px-20 items-center justify-center flex-col py-20 bg-gray-900"
    >
      <ul className="flex flex-wrap gap-10 justify-center w-full">
        <div
          className="image-container"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          style={{
            backgroundImage: `url(${images[bgIndex]})`,
            transition: "background-image 0.5s ease-in-out",
          }}
        >
          <li>
            <h4 className="font-bold">Projects</h4>
          </li>
        </div>
        <li>
          <h4>Resume</h4>
        </li>
      </ul>
    </div>
  );
};

export default ProjPre;
