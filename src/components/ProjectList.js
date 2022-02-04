import React, { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard";

export const ProjectList = ({ allProjects }) => {
  const [projectsArray, setProjectsArray] = useState(allProjects);

  useEffect(() => {
    setProjectsArray(allProjects);
  }, [allProjects]);

  return (
    <>
      <section className="project-list__block">
        {projectsArray.map((projectObj) => (
          <ProjectCard key={projectObj.id} projectObj={projectObj} />
        ))}
      </section>
    </>
  );
};
