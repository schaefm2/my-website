import React from "react";
import MyCanvas from "../../MyCanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import ProjPre from "../../components/ProjPre/ProjPre";
import "./HomePage.css";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="homepage-container">
      <MyCanvas key={location.pathname} />
      <header className="intro-section">
        <h1 className="text-white">Hello I'm Max Schaefer</h1>
        <p className="text-sky-200">
          I'm a recent computer science gradute from Western Washington University
        </p>
        <button
          onClick={() => scrollToSection("project-preview")}
        >
          See my projects
          <FontAwesomeIcon
            icon={faArrowDown}
            className="mr-2 text-sky-200 ml-5"
          />
        </button>
      </header>


      <ProjPre />
    </div>
  );
};

export default HomePage;
