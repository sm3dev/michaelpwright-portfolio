import React, { useEffect, useState } from "react";
import { HeaderLogo } from "./HeaderLogo";
import { ProjectCard } from "./ProjectCard";

export const ProjectList = () => {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    fetch("api/database.json")
      .then((res) => res.json())
      .then((data) => {
        setAllProjects(data.projects);
      });
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
