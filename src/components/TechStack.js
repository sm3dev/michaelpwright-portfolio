import React from "react";

export const TechStack = ({ allTechObjects }) => {
  let techUsedArray = [1, 4, 5, 6, 8, 12, 20, 25, 26];

  const getMatch = (techObj) => {
      let techItem = ""
    // If any allTechObjects.id value matches an integer in array techUsedArray,
    // then display the list item with the added class "usedHere".
    // If not, display the regular list item
    techUsedArray.find((data) => {
      allTechObjects.id === data ? (
        techItem = <li key={techObj.id} className="tech__item usedHere">
          {techObj.name}
        </li>
      ) : (
        techItem = <li key={techObj.id} className="tech__item">
          {techObj.name}
        </li>
      );
    });

    return console.log("Bears");
  };

  return (
    <section className="technologies__block">
      <p className="technologies__title">Technologies Used Here</p>
      <ul className="technologies__list">
        {allTechObjects.map((techObj) => getMatch(techObj))}
      </ul>
    </section>
  );
};
