import React, { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard";

export const ProjectList = () => {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    fetch("api/database.json")
      .then((res) => res.json())
      .then((data) => {
        setAllProjects(data.projects);
        console.log(data.projects);
      });
  }, []);

  return (
    <main className="project-list__block">
      {allProjects.map((projectObj) => (
        <ProjectCard key={projectObj.id} projectObj={projectObj} />
      ))}
    </main>
  );
};
