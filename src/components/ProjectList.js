import React, { useEffect, useState } from "react";
import { NavBar } from "./NavBar";
import { ProjectCard } from "./ProjectCard";

export const ProjectList = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    fetch("api/database.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.projects);
        setAllProjects(data.projects);
        setProjectList(data.projects);
      });
  }, []);

  return (
    <>
      {/* <NavBar /> */}
      <section className="project-list__block">
        {projectList.map((projectObj) => (
          <ProjectCard key={projectObj.id} projectObj={projectObj} />
        ))}
      </section>
    </>
  );
};
