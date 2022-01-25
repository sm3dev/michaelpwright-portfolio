import React from "react";
import { NavBar } from "./NavBar";
import { Resume } from "./Resume";
import { TechStack } from "./TechStack";

export const HomeHero = () => {
  return (
    <>
      <section className="hero__block">
        <h1 className="website__title">Michael P. Wright</h1>
        <p className="hero__tagline-text">I'm a UX Developer</p>
        <div className="hero headshot__block">
          <img src="" alt="" className="hero headshot__image" />
        </div>

        <TechStack />
      </section>{" "}
      <NavBar />
      <Resume />
    </>
  );
};
