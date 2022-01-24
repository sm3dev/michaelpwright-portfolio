import React, { useEffect, useState } from "react";
import { ComingSoon } from "./components/ComingSoon";
import { Footer } from "./components/Footer";
import HeaderLogo from "./components/HeaderLogo";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectList } from "./components/ProjectList";
import { Resume } from "./components/Resume";
import { TechStack } from "./components/TechStack";

export const Portfolio = () => {
  const [allNavTaglines, setAllNavTaglines] = useState([]);
  const [allTechObjects, setAllTechObjects] = useState([]);

  useEffect(() => {
    fetch("api/database.json")
      .then((res) => res.json())
      .then((data) => {
        setAllNavTaglines(data.navTaglines);
        setAllTechObjects(data.techStack);
      });
  }, []);

  return (
    <div className="page">
      <TechSkillLevels allTechObjects={allTechObjects} />
      <ProjectList />
      <TechStack allTechObjects={allTechObjects} />
      <HeaderLogo allNavTaglines={allNavTaglines} />
      <ComingSoon />
      <Resume />
      <Footer />
    </div>
  );
};

export const TechSkillLevels = ({ allTechObjects }) => {
  return (
    <section id="tech-skill-levels__block">
      <ul className="tech__list list--no-padding-inline-left">
        {allTechObjects.map((techObj) => (
          <li className="tech__list-item list-item__no-bullet text__white-space--no-wrap" key={techObj.id}>
            {" "}
            <div className="tech-list-item__container">
              <label htmlFor={`technology-${techObj.id}`}>
                {techObj.name}:&nbsp;{" "}
              </label>
              <meter className="skill__meter"
                id={`technology-${techObj.id}`}
                max="5"
                low="1"
                high="5"
                optimum="3"
                value={techObj.skillLevel}
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
