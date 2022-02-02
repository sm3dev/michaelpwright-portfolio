import React, { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard";

export const ProjectList = ({ allProjects }) => {
  const [projectsArray, setProjectsArray] = useState([]);

  useEffect(() => {
    setProjectsArray(allProjects);
  }, [projectsArray, allProjects]);

  return (
    <>
      <section className="project-list__block">
        {allProjects.map((projectObj) => (
          <ProjectCard key={projectObj.id} projectObj={projectObj} />
        ))}
      </section>
    </>
  );
};
