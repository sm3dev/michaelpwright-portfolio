import React, { useEffect, useState } from "react";
import {
  projectC51Website,
  projectPasswordGenerator,
  projectReactPortfolio,
  projectSmilestonesApp,
} from "../api";
import { getMatch } from "./Helpers";

export const TechStack = ({ allTechStack, projectObjId }) => {
  const [allTechObjects, setAllTechObjects] = useState(allTechStack);
  const [techUsedArray, setTechUsedArray] = useState([]);

  const getTechUsed = () => {
    if (projectObjId) {
      return console.log("not the home page");
    } else if (projectObjId === "react-portfolio-website") {
      return setTechUsedArray(projectReactPortfolio);
    } else if (projectObjId === "nss-cohort-51-website") {
      return setTechUsedArray(projectC51Website);
    } else if (projectObjId === "smilestones-app") {
      return setTechUsedArray(projectSmilestonesApp);
    } else if (projectObjId === "unforgettable-passwords-generator") {
      return setTechUsedArray(projectPasswordGenerator);
    } else {
      console.log("this is the home page");
    }
  };

  useEffect(() => {
    setAllTechObjects(allTechStack);
    getTechUsed();
  }, [allTechStack, getTechUsed()]);

  return (
    <section className="technologies__block">
      <p className="technologies__title">Technologies Used Here</p>
      <ul className="technologies__list list-item__no-bullet list--no-padding-inline-left">
        {allTechObjects.map((techObj) => (
          <li key={techObj.id} className={getMatch(techObj.id, techUsedArray)}>
            {techObj.name}
          </li>
        ))}
      </ul>
    </section>
  );
};
