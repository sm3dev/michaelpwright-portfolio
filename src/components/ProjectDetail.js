import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Project } from "./Project";
import { ProjectNav } from "./ProjectNav";

export const ProjectDetail = () => {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    fetch("api/database.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.projects);
        setAllProjects(data.projects);
      });
  }, []);

  return (
    <section className="project-detail-view-">
      <ProjectNav />
      <Outlet />
      {allProjects.map((projectObj) => (
        <Project key={projectObj.id} projectObj={projectObj} />
      ))}
    </section>
  );
};
