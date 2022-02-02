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

export const Portfolio = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("api/database.json")
      .then((res) => res.json())
      .then((data) => {
        let usersArray = data.users;
        setUser(getUserById(usersArray, 1));
      });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeHero />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactMe />} />
        <Route path="projects">
          <Route index element={<ProjectList />} />
          <Route path=":projectId" element={<Project />} />
        </Route>
        <Route
          path="*"
          element={
            <>
              {" "}
              <NavBar />
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
