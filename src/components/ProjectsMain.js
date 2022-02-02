import React from "react";
import { Link, Outlet } from "react-router-dom";
import { HeaderLogo } from "./HeaderLogo";

export const ProjectsMain = ({ allNavTaglines }) => {
  return (
    <>
    <HeaderLogo allNavTaglines={allNavTaglines} />
      <h2>My Work</h2>
      <Link to="/projects/all-projects">My Projects</Link>
      <Outlet />
    </>
  );
};
