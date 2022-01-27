import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Project } from "./Project";

export const ProjectDetail = ({ allProjects }) => {
  return (
    <section className="project-detail-view-">
      <nav className="project__nav">
        <div className="nav-left__arrow">&#60;</div>
        <p className="project-name__page-title"></p>
        <div className="nav-right__arrow">&#62;</div>
      </nav>
      <Outlet />
      {allProjects.map((projectObj) => {
                <Project key={projectObj.id} projectObj={projectObj} />
                // <Link to=":" />

      }
      )}
    </section>
  );
};
