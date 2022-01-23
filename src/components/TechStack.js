import React, { useEffect, useState } from "react";
import { getMatch } from "./Helpers";

export const TechStack = () => {
  const techUsedArray = [1, 4, 5, 6, 8, 10, 20, 27, 35];

  // to grab the correct comparison used in getMatch(), the function has to do the following:
  //  - get the id of the ProjectCard object the techStack component is called on
  // - include a conditional that returns a given array that will be called techUsedArray 

  const [allTechObjects, setAllTechObjects] = useState([])
  
  useEffect(() => {
    fetch("api/database.json")
      .then((res) => res.json())
      .then((data) => {
        setAllTechObjects(data.techStack);
      });
  }, []);

  return (
    <section className="technologies__block">
      <p className="technologies__title">Technologies Used Here</p>
      <ul className="technologies__list">
        {allTechObjects.map((techObj) => (
          <li
            key={techObj.id}
            className={getMatch(techObj.id, techUsedArray)}
          >
            {techObj.name}
          </li>
        ))}
      </ul>
    </section>
  );
};
