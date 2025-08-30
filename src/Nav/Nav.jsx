import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full flex justify-between bg-gray-800 p-4">
        <ul className="flex space-x-4 text-white text-lg">
          <NavLink to="/projects">
            <li>Projects</li>
          </NavLink>
          <NavLink to="/resume">
            <li>Resume</li>
          </NavLink>
        </ul>
        <NavLink to="/">
          <div className="text-white text-lg font-bold flex items-center">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Max Schaefer
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
