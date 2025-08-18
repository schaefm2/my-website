import React from "react";

const ProjPre = () => {
  return (
    <div
      id="project-preview"
      className="relative text-white top-90 flex px-20 items-center "
    >
      <ul className="flex flex-wrap gap-10 justify-center w-full">
        <li>
          <h4 className="font-bold">Graphic Projects</h4>
          <p className="text-lg">Falling sand</p>
          <p className="text-lg"> Visualizing Merge Sort</p>
        </li>
        <li>
          <h4>School Projects</h4>
          <p className="text-lg"> Chaos Engineering</p>
          <p className="text-lg"> Zombie Shooter Game </p>
          <p className="text-lg"> Drone Tracking</p>
        </li>
        <li>
          <h4>Other Projects</h4>
          <p className="text-lg"> WPF Job Application Manager</p>
        </li>
      </ul>
    </div>
  );
};

export default ProjPre;
