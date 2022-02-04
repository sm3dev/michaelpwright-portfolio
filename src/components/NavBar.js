import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/HeaderNav.scss";

export const NavBar = () => {
  return (
    <nav id="navBar" className="nav-list list-item__no-bullet text__all-caps">
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "notActive")}
        to="/"
        aria-current="page"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "notActive")}
        to="/projects"
        aria-current="page"
      >
        My Work
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "notActive")}
        to="/about"
        aria-current="page"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "notActive")}
        to="/contact"
        aria-current="page"
      >
        Contact
      </NavLink>
    </nav>
  );
};
