import React from "react";

export const TechStack = ({ allTechObjects }) => {
  return (
    <section className="technologies__block">
      <p className="technologies__title">Technologies Used Here</p>
      <ul className="technologies__list">
        {allTechObjects.map((techObj) => (
          <li key={techObj.id} className="tech__item">{techObj.name}</li>
        ))}
      </ul>
    </section>
  );
};
