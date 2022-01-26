import React, { useEffect, useState } from "react";
import { getRandomObj } from "./Helpers";

export const HeroTagline = () => {
  const [heroTaglines, setHeroTaglines] = useState([]);

  //   const getNewRandomTagline =
  const taglinesTextArray = () => {
    let newArray = [];
    heroTaglines.map((taglineObj) => newArray.push(taglineObj.text));

    return newArray;
  };

  useEffect(() => {
    fetch("api/database.json")
      .then((res) => res.json())
      .then((data) => {
        setHeroTaglines(data.heroTaglines);
        taglinesTextArray();
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
