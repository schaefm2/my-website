import React, { useState } from "react";
import "./SideBar.css"; // Make sure the path is correct

const ProjSideBar = ({ projectNames, changeProject }) => {
  const [extendedCategories, setExtendedCategories] = useState({});

  const toggleCategory = (category) => {
    setExtendedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="proj-sidebar-container">
      <aside id="projectSideBar">
        <h1 className="project-title">Projects</h1>
        {Object.entries(projectNames).map(([category, projects]) => (
          <div key={category} className="category-container">

            <button
              onClick={() => toggleCategory(category)}
              className="toggle-button"
              aria-label={`Toggle ${category} Projects`}
            >
              <h4 className="category-header">
                {category}

              </h4>

              <span className="button-span">{extendedCategories[category] ? "▼" : "►"}</span>
            </button>

            {extendedCategories[category] && (
              <ul>
                {projects.map((project, idx) => (
                  <h6
                    onClick={() => changeProject(project)}
                    className="project-item"
                    key={idx}
                  >
                    {project}
                  </h6>
                ))}
              </ul>
            )}
          </div>
        ))}
      </aside>
    </div>
  );
};

export default ProjSideBar;
