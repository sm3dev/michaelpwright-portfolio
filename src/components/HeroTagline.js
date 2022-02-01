import React, { useEffect, useState } from "react";
import { getRandomObj } from "./Helpers";
import { getHeroTaglines } from "./DataManager";

export const HeroTagline = () => {
  const [taglineTextArray, setTaglineTextArray] = useState([]);

  const makeTaglinesTextArray = (originalArray) => {
    let newArray = originalArray.map((taglineObj) => taglineObj.text);
    console.log(newArray);
    return newArray;
  };

  useEffect(() => {
    setTaglineTextArray(makeTaglinesTextArray(getHeroTaglines()));
  }, []);

  return (
    <div>
      <p>{getRandomObj(taglineTextArray)}</p>
    </div>
  );
};
