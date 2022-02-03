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
import { HeaderLogo } from "./components/HeaderLogo";
import { ProjectsMain } from "./components/ProjectsMain";

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
              <ProjectsMain allNavTaglines={allNavTaglines} />
            </>
          }
        >
          <Route index element={<ProjectList allProjects={allProjects} />} />
          <Route
            path="all-projects"
            element={
              <>
                <ProjectList allProjects={allProjects} />
              </>
            }
          />
          <Route
            path=":projectId"
            element={
              <>
                <Project allProjects={allProjects} allTechStackItems={allTechStackItems} />
              </>
            }
          />
        </Route>

        <Route
          path="*"
          element={
            <>
              {" "}
              <NavBar allNavTaglines={allNavTaglines} />
              <main style={{ padding: "1rem" }} className="nothing-here__message">
                <p>There's nothing here!</p>
                <strong>Try a visiting a different page or reloading</strong>
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
