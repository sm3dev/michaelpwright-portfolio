import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRandomObj, getTaglinesTextArray, sortObjectsByNameProperty } from "./Helpers";
import { HeroTagline } from "./HeroTagline";
import { NavBar } from "./NavBar";
import { Resume } from "./Resume";
import { TechStack } from "./TechStack";

export const HomeHero = ({ allHeroTaglines, user, allTechStack }) => {
  const [portfolioAuthor, setPortfolioAuthor] = useState({});
  const [taglineTextArray, setTaglineTextArray] = useState([]);

  // Sort allTechStack by the "name" property 
  const sortedTechStackList = sortObjectsByNameProperty(allTechStack);

  console.log(sortedTechStackList)
  useEffect(() => {
    setPortfolioAuthor(user);
    setTaglineTextArray(getTaglinesTextArray(allHeroTaglines));
  }, [user, allHeroTaglines]);

  return (
    <>
      <section className="hero__block">
        <h1 className="website__title">I'm {portfolioAuthor.displayName}</h1>
        <HeroTagline tagline={getRandomObj(taglineTextArray)} />
        <figure className="hero headshot__block">
          <Link to="/about">
            <img
              src={`../images/${portfolioAuthor.headshot}`}
              alt="headshot"
              className="hero headshot__image"
            />
          </Link>
        </figure>

        <TechStack allTechStack={sortedTechStackList} />
      </section>{" "}
      <NavBar />
      <Resume
        portfolioAuthor={portfolioAuthor}
        resumeLink={portfolioAuthor.resumeLink}
      />
    </>
  );
};
