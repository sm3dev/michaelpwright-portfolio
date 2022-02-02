import React from "react";
import { Link, Outlet } from "react-router-dom";

export const ProjectsMain = () => {
  return (
    <>
      <h2>My Work</h2>
      <Link to="/projects/all-projects">My Projects</Link>
      <Outlet />
    </>
  );
};
