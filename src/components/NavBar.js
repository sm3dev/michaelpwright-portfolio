import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/HeaderNav.scss";

export const NavBar = () => {
  return (
    <nav id="navBar">
      <ul className="nav-lislist-item__no-bullet">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/projects" className="nav-link" aria-current="page">My Work</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about-me" className="nav-link" aria-current="page">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link" aria-current="page">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};
