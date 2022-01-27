import React from "react";
import { Link } from "react-router-dom";
import "../styles/HeaderNav.scss";

export const NavBar = () => {
  return (
    <section id="navBar">
      <ul className="nav-lislist-item__no-bullet">
        <li className="nav-item">
          <Link to="/" className="nav-link" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link" aria-current="page">My Work</Link>
        </li>
        <li className="nav-item">
          <Link to="/about-me" className="nav-link" aria-current="page">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link" aria-current="page">Contact</Link>
        </li>
      </ul>
    </section>
  );
};
