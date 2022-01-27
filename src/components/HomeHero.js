import React, { useEffect, useState } from "react";
import { HeroTagline } from "./HeroTagline";
import { NavBar } from "./NavBar";
import { Resume } from "./Resume";
import { TechStack } from "./TechStack";

export const HomeHero = ({ user }) => {
    const [portfolioAuthor, setPortfolioAuthor] = useState({});

    useEffect(() => {
      fetch("api/database.json")
        .then((res) => res.json())
        .then((data) => {
          let firstUser = data.users[0];
          console.log(firstUser);
          setPortfolioAuthor(firstUser);
        });
    }, []);

    
  return (
    <>
      <section className="hero__block">
        <h1 className="website__title">I'm {portfolioAuthor.displayName}</h1>
        <HeroTagline />
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
