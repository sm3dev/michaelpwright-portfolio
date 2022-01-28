import React from "react";
import { Link } from "react-router-dom";


export const ProjectNav = () => {
  return (
    <nav className="project__nav">
      <div className="nav-left__arrow">&#60;</div>
      <p className="project-name__page-title">Page Title</p>
      <div className="nav-right__arrow">&#62;</div>
      <Link to="project-focus">Visit to Projects List</Link>
    </nav>
  );
};
