import React from "react";
import mpwMinecraft3DGoldLogo512 from "../images/mpwMinecraft3DGoldLogo512.png";
import "../styles/NavBar.scss";

export const NavBar = () => {
  return (
    <div className="nav__block">
      <section className="logo-tagline__block">
        <div className="logo__block">
          <img
            src={mpwMinecraft3DGoldLogo512}
            alt="logo home button"
            className="nav__logo"
          />
        </div>
        <p className="nav__tag-line">
          Michael Wright is a UI/UX Front-End Developer based in Huntsville.
        </p>
      </section>
      <section className="">
        <ul class="">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/Projects">
              Portfolio
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/About-Me">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Contact">
              Contact
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};
