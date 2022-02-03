import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderLogo } from "./HeaderLogo";

export const ProjectsMain = ({ allNavTaglines }) => {
  return (
    <>
      <HeaderLogo allNavTaglines={allNavTaglines} />
      <Outlet />
    </>
  );
};
