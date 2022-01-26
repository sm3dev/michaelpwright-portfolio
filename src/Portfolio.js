import React, { useEffect, useState } from "react";
import { About } from "./components/About";
import { ComingSoon } from "./components/ComingSoon";
import { Footer } from "./components/Footer";
import { HomeHero } from "./components/HomeHero";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectDetail } from "./components/ProjectDetail";
import { ProjectList } from "./components/ProjectList";
import { Resume } from "./components/Resume";
import { TechSkillLevels } from "./components/TechSkillLevels";
import { TechStack } from "./components/TechStack";

export const Portfolio = () => {
  const [allNavTaglines, setAllNavTaglines] = useState([]);
  const [allTechObjects, setAllTechObjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    fetch("api/database.json")
      .then((res) => res.json())
      .then((data) => {
        setAllNavTaglines(data.navTaglines);
        setAllTechObjects(data.techStack);
        setAllProjects(data.projects)
      });
  }, []);

  return (
    <div className="page">
      <HomeHero />
      {/* <About /> */}
      {/* <ProjectDetail allProjects={allProjects} /> */}
      {/* <TechSkillLevels allTechObjects={allTechObjects} /> */}
      {/* <ProjectList /> */}
      {/* <TechStack allTechObjects={allTechObjects} /> */}
      {/* <ComingSoon /> */}
     <Footer />
    </div>
  );
};