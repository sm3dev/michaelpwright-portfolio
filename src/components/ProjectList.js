import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";
import { ProjectCard } from "./ProjectCard";
import { getAllProjects } from "./DataManager";

export const ProjectList = () => {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    setAllProjects(getAllProjects);
  }, []);

  return (
    <>
      <HeaderLogo />
      <Outlet />
      <section className="project-list__block">
        {allProjects.map((projectObj) => (
          <ProjectCard key={projectObj.id} projectObj={projectObj} />
        ))}
      </section>
    </>
  );
};
