import React from "react";
import MyCanvas from "../MyCanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import ProjPre from "../components/Project/ProjPre";

const HomePage = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="">
      <MyCanvas />
      <h1 className="text-white">Hello I'm Max Schaefer</h1>
      <p className="text-sky-200">
        I'm a recent computer science gradute from Western Washington University
      </p>
      <button
        className="mt-40 !bg-transparent text-sky-200 !border-sky-200"
        onClick={() => scrollToSection("project-preview")}
      >
        See my projects
        <FontAwesomeIcon
          icon={faArrowDown}
          className="mr-2 text-sky-200 ml-5"
        />
      </button>

      <ProjPre />
    </div>
  );
};

export default HomePage;
