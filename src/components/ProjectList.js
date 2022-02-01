import React, { useEffect, useState } from "react";
import { HeaderLogo } from "./HeaderLogo";
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
      <section className="project-list__block">
        {allProjects.map((projectObj) => (
          <ProjectCard key={projectObj.id} projectObj={projectObj} />
        ))}
      </section>
    </>
  );
};
