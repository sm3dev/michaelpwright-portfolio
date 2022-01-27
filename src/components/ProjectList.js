import React from "react";
import { NavBar } from "./NavBar";
import { ProjectCard } from "./ProjectCard";

export const ProjectList = ({ allProjects }) => {
  return (
    <>
      <NavBar />
      <section className="project-list__block">
        {allProjects.map((projectObj) => (
          <ProjectCard key={projectObj.id} projectObj={projectObj} />
        ))}
      </section>
    </>
  );
};
