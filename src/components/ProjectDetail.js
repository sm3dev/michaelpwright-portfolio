import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Project } from "./Project";

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
      <nav className="project__nav">
        <div className="nav-left__arrow">&#60;</div>
        <p className="project-name__page-title">Page Title</p>
        <div className="nav-right__arrow">&#62;</div>
        <Link to="project-focus">OK</Link>
      </nav>
      <Outlet />
      {allProjects.map((projectObj) => (
        <Project key={projectObj.id} projectObj={projectObj} />
      ))}
    </section>
  );
};
