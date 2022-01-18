import React from "react";

export const NavBar = () => {
  return (
    <div className="nav__block">
      <section className="logo_block">
        <div>
          <img src="./" alt="" className="nav__logo" />
        </div>
        <p className="nav__tag-line">
          Michael Wright is a UI/UX Front-End Developer based in Huntsville.
        </p>
      </section>
      <section className="">
        <ul class="">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">
              Active
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </section>
    </div>
  );
};
