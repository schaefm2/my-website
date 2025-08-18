import React, { useState } from "react";

const ProjSideBar = ({ projectNames, changeProject }) => {
  const [extendedCategories, setExtendedCategories] = useState({});

  const toggleCategory = (category) => {
    setExtendedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="flex mr-0">
      <aside
        id="projectSideBar"
        className="top-15 h-screen w-100 bg-gray-600 p-4 overflow-y-auto flex flex-col items-center justify-start"
      >
        <h1 className="text-blue-200 font-bold mb-4 self-center m-5 text-2xl">
          Projects
        </h1>
        {Object.entries(projectNames).map(([category, projects]) => (
          <div key={category} className="w-full flex flex-col items-center">
            <h4 className="text-blue-500 font-bold flex items-center">
              {category}
              <button
                onClick={() => toggleCategory(category)}
                className="ml-2"
                aria-label={`Toggle ${category} Projects`}
              >
                <span>{extendedCategories[category] ? "▼" : "►"}</span>
              </button>
            </h4>
            {extendedCategories[category] && (
              <ul>
                {projects.map((project, idx) => (
                  <h6
                    onClick={() => changeProject(project)}
                    className="text-gray-950 hover:text-blue-500 cursor-pointer"
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
