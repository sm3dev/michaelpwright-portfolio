import React, { useEffect, useState } from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import { getUserById } from "./components/DataManager";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { ContactMe } from "./components/ContactMe";
import { HomeHero } from "./components/HomeHero";
import { NavBar } from "./components/NavBar";
import { Project } from "./components/Project";
import { ProjectList } from "./components/ProjectList";
import { ProjectsMain } from "./components/ProjectsMain";
import { HeaderLogo } from "./components/HeaderLogo";

export const Portfolio = () => {
  const [user, setUser] = useState({});
  const [allProjects, setAllProjects] = useState([]);
  const [allNavTaglines, setAllNavTaglines] = useState([]);
  const [allHeroTaglines, setAllHeroTaglines] = useState([]);
  const [allTechStackItems, setAllTechStackItems] = useState([]);
  const [allQuotes, setAllQuotes] = useState([]);

  useEffect(() => {
    fetch("api/database.json")
      .then((res) => res.json())
      .then((data) => {
        let usersArray = data.users;
        setUser(getUserById(usersArray, 1));
        setAllProjects(data.projects);
        setAllNavTaglines(data.navTaglines);
        setAllHeroTaglines(data.heroTaglines);
        setAllTechStackItems(data.techStack);
        setAllQuotes(data.aboutQuotes);
      });
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomeHero
              allHeroTaglines={allHeroTaglines}
              user={user}
              allTechStackItems={allTechStackItems}
            />
          }
        />
        <Route
          path="/about"
          element={
            <>
              <HeaderLogo allNavTaglines={allNavTaglines} />
              <About user={user} allQuotes={allQuotes} />
            </>
          }
        />
        <Route path="/contact" element={<ContactMe user={user} />} />
        <Route
          path="/projects"
          element={
            <>
              <HeaderLogo allNavTaglines={allNavTaglines} />
              <ProjectsMain />
            </>
          }
        />
        <Route
          path="/projects/all-projects"
          element={
            <>
              <HeaderLogo allNavTaglines={allNavTaglines} />
              <ProjectList
                allProjects={allProjects}
                allTechStackItems={allTechStackItems}
                allNavTaglines={allNavTaglines}
              />
            </>
          }
        />
        <Route
          path="/projects/:projectId"
          element={
            <>
              <HeaderLogo allNavTaglines={allNavTaglines} />
              <Project allProjects={allProjects} />
            </>
          }
        />

        <Route
          path="*"
          element={
            <>
              {" "}
              <NavBar allNavTaglines={allNavTaglines} />
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            </>
          }
        />
      </Routes>
      <Outlet />
      <Footer user={user} />
    </>
  );
};
