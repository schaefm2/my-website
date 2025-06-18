import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full flex justify-between bg-gray-800 p-4">
        <ul className="flex space-x-4 text-white text-lg">
          <li>Projects</li>
          <li>Testimonial</li>
        </ul>
        <div className="text-white text-lg font-bold flex items-center">
          <FontAwesomeIcon icon={faUser} className="mr-2" />
          Max Schaefer
        </div>
      </nav>
    </div>
  );
};

export default Nav;
