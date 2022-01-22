import React from "react";
import { getMatch } from "./Helpers";

export const TechStack = ({ allTechObjects }) => {
  const techUsedArray = [1, 4, 5, 6, 8, 10, 20, 27, 35];

  // const getMatch = (id) => {
  //   let techItem = techUsedArray.find((item) => item === id);
  //   if (techItem) {
  //     return "tech__item usedHere";
  //   } else {
  //     return "tech__item";
  //   }
  // };

  return (
    <section className="technologies__block">
      <p className="technologies__title">Technologies Used Here</p>
      <ul className="technologies__list">
        {allTechObjects.map((techObj) => (
          <li
            key={techObj.id}
            className={getMatch(allTechObjects, techObj.id, techUsedArray)}
          >
            {techObj.name}
          </li>
        ))}
      </ul>
    </section>
  );
};
