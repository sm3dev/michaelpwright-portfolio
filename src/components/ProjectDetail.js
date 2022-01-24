import React, { useEffect, useState } from "react";
import { Project } from "./Project";

export const ProjectDetail = () => {
  const [allProjects, setAllProjects] = useState([]);
  useEffect(() => {
    fetch("api/database.json")
      .then((res) => res.json())
      .then((data) => {
        setAllProjects(data.projects);
      });
  }, []);

  return (
    <section className="project-detail-view-">
      <section className="project__nav">
        <div className="nav-left__arrow">&#60;</div>
        <p className="project-name__page-title"></p>
        <div className="nav-right__arrow">&#62;</div>
      </section>
      {allProjects.map((projectObj) => (
        <Project key={projectObj.id} projectObj={projectObj} />
      ))}
    </section>
  );
};
