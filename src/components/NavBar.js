import React from "react";
import "../styles/HeaderNav.scss";

export const NavBar = () => {
  return (
    <section id="navBar">
      <ul className="">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/Projects">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About-Me">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Contact">
            Contact
          </a>
        </li>
      </ul>
    </section>
  );
};
