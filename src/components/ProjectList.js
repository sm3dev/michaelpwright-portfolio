import React, { useEffect, useState } from "react";
import { NavBar } from "./NavBar";
import { ProjectCard } from "./ProjectCard";

export const ProjectList = ({ allProjects }) => {
  return (
    <>
      <NavBar />
      <main className="project-list__block">
        {allProjects.map((projectObj) => (
          <ProjectCard key={projectObj.id} projectObj={projectObj} />
        ))}
      </main>
    </>
  );
};
