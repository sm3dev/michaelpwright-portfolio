import React, { useEffect, useState } from "react";
import { getRandomObj } from "./Helpers";

export const HeroTagline = () => {
  const [heroTaglines, setHeroTaglines] = useState([]);

  const getNewRandomTagline = () => {

    const taglinesText = [];
    // for every "text" property push the string into a new array

    // then return the array

    getRandomObj(heroTaglines);
  };

  useEffect(() => {
    fetch("api/database.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.heroTaglines);
        setHeroTaglines(data.heroTaglines);
      });
  }, []);

  return (
    <>
      {heroTaglines.map((tagLineObj) => (
        <p key={tagLineObj.id} className="hero__tagline">
          {tagLineObj.text}
        </p>
      ))}
    </>
  );
};
