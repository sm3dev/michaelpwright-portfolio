import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRandomObj, getTaglinesTextArray } from "./Helpers";
import { HeroTagline } from "./HeroTagline";
import { NavBar } from "./NavBar";
import { Resume } from "./Resume";
import { TechStack } from "./TechStack";

export const HomeHero = () => {
  const [portfolioAuthor, setPortfolioAuthor] = useState({});
  const [allHeroTaglines, setAllHeroTaglines] = useState([]);
  const [taglineTextArray, setTaglineTextArray] = useState([]);

  useEffect(() => {
    fetch("api/database.json")
      .then((res) => res.json())
      .then((data) => {
        let firstUser = data.users[0];
        setPortfolioAuthor(firstUser);
        let taglineOnlyArray = getTaglinesTextArray(data.heroTaglines);
        setTaglineTextArray(taglineOnlyArray);
        setAllHeroTaglines(data.heroTaglines);
      });
  }, []);

  return (
    <>
      <section className="hero__block">
        <h1 className="website__title">I'm {portfolioAuthor.displayName}</h1>
        <HeroTagline
          taglineTextArray={taglineTextArray}
          tagline={getRandomObj(taglineTextArray)}
        />
        <figure className="hero headshot__block">
          <Link to="/about">
            <img
              src={`../images/${portfolioAuthor.headshot}`}
              alt="headshot"
              className="hero headshot__image"
            />
          </Link>
        </figure>

        <TechStack />
      </section>{" "}
      <NavBar />
      <Resume
        portfolioAuthor={portfolioAuthor}
        resumeLink={portfolioAuthor.resumeLink}
      />
    </>
  );
};
