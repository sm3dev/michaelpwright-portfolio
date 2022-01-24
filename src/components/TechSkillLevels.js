import React from "react";

export const TechSkillLevels = ({ allTechObjects }) => {
  return (
    <section id="tech-skill-levels__block">
      <ul className="tech__list list--no-padding-inline-left">
        {allTechObjects.map((techObj) => (
          <li
            className="tech__list-item list-item__no-bullet text__white-space--no-wrap"
            key={techObj.id}
          >
            {" "}
            <div className="tech-list-item__container">
              <label htmlFor={`technology-${techObj.id}`}>
                {techObj.name}:&nbsp;{" "}
              </label>
              <meter
                className="skill__meter"
                id={`technology-${techObj.id}`}
                max="5"
                low="1"
                high="5"
                optimum="3"
                value={techObj.skillLevel}
                title={`Skill Level ${techObj.skillLevel} out of 5`}
              >
                Skill Level &nbsp;{techObj.skillLevel}
              </meter>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
