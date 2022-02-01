import React, { useEffect, useState } from "react";
import { getRandomObj } from "./Helpers";
import { getHeroTaglines } from "./DataManager";

export const HeroTagline = () => {
  const [originalTaglineObjects, setOriginalTaglineObjects] = useState([]);
  const [taglineTextArray, setTaglineTextArray] = useState([]);
  const [oneTagline, setOneTagline] = useState("");

  const makeTaglinesTextArray = () => {
    let newArray = originalTaglineObjects.map((taglineObj) => taglineObj.text);
    console.log(newArray);
    return newArray;
  };

  const grabOneTagline = () => {
    return getRandomObj(taglineTextArray);
  };

  useEffect(() => {
    setOriginalTaglineObjects(getHeroTaglines);
    setTaglineTextArray(makeTaglinesTextArray());
  }, []);

  useEffect(() => {
    setOneTagline(grabOneTagline());
  }, []);
  return (
    <div>
      <p>{oneTagline}</p>
    </div>
  );
};
