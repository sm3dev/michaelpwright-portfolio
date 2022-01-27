import React, { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import { ContactMe } from "./components/ContactMe";
import { Footer } from "./components/Footer";
import { HomeHero } from "./components/HomeHero";
import { ProjectList } from "./components/ProjectList";

export const Portfolio = () => {
  const [allNavTaglines, setAllNavTaglines] = useState([]);
  const [allTechObjects, setAllTechObjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState({});

  const getFirstUser = () => {
    allUsers.map((userObj) => setUser(userObj.id === 1));
  };

  useEffect(() => {
    fetch("api/database.json")
      .then((res) => res.json())
      .then((data) => {
        setAllNavTaglines(data.navTaglines);
        setAllTechObjects(data.techStack);
        setAllProjects(data.projects);
        setAllUsers(data.users);
        getFirstUser();
      });
  }, []);

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<HomeHero user={user} />} />
        <Route
          path="projects"
          element={<ProjectList allProjects={allProjects} />}
        ></Route>
        <Route path="/about-me" element={<About user={user} />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
      {/* <About /> */}
      {/* <ProjectDetail allProjects={allProjects} /> */}
      {/* <TechSkillLevels allTechObjects={allTechObjects} /> */}
      {/* <ProjectList /> */}
      {/* <TechStack allTechObjects={allTechObjects} /> */}
      {/* <ComingSoon /> */}
      <Outlet />
      <Footer />
    </div>
  );
};
