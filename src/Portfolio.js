import React, { useEffect, useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { ContactMe } from "./components/ContactMe";
import { HomeHero } from "./components/HomeHero";
import { NavBar } from "./components/NavBar";
import { Project } from "./components/Project";
import { ProjectList } from "./components/ProjectList";

export const Portfolio = () => {
  const [allNavTaglines, setAllNavTaglines] = useState([]);
  const [allTechObjects, setAllTechObjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState({});
  const [allHeroTaglines, setAllHeroTaglines] = useState([]);
  const [allQuotes, setAllQuotes] = useState([]);
  const [allTestimonials, setAllTestimonials] = useState([]);

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
        setAllHeroTaglines(data.heroTaglines);
        setAllQuotes(data.aboutQuotes);
        setAllTestimonials(data.testimonials);
      });
  }, []);
 
  return (
    <>
      <div className="page">
        <Footer />
      </div>
      <Routes>
          <Route index element={<HomeHero allNavTaglines={allNavTaglines} allHeroTaglines={allHeroTaglines}  allUsers={allUsers} />} user={user} />
          <Route path="about-me" element={<About allUsers={allUsers} allQuotes={allQuotes} allTestimonials={allTestimonials} />} />
          <Route path="contact" element={<ContactMe allUsers={allUsers} />} />
          <Route path="projects" element={<ProjectList allProjects={allProjects} />} />
          <Route path="projects/:projectId" element={<Project />} />
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
    </>
  );
};
