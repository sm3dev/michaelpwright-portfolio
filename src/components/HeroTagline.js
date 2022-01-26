import React, { useEffect, useState } from "react";
import { getRandomObj } from "./Helpers";

export const HeroTagline = () => {
  const [heroTaglines, setHeroTaglines] = useState([]);
  const [taglineTextArray, setTaglineTextArray] = useState([]);

  //   const getNewRandomTagline =
  const taglinesTextArray = (arrayOfTaglines) => {
    let newArray = arrayOfTaglines.map((taglineObj) => taglineObj.text);
    console.log(newArray);
    setTaglineTextArray(newArray);
  };

  useEffect(() => {
    fetch("api/database.json")
      .then((res) => res.json())
      .then((data) => {
        setHeroTaglines(data.heroTaglines);
        taglinesTextArray(data.heroTaglines);
      });
  }, []);

  return (
    <>
      <p>{getRandomObj(taglineTextArray)}</p>
      {/* {heroTaglines.map((tagLineObj) => (
        <p key={tagLineObj.id} className="hero__tagline">
          {tagLineObj.text}
        </p>
      ))} */}
    </>
  );
};
