import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import { ContactMe } from "./components/ContactMe";
import { HomeHero } from "./components/HomeHero";
import { Project } from "./components/Project";
import { ProjectList } from "./components/ProjectList";
import { Portfolio } from "./Portfolio";
import "./styles/_global.scss";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route to="/" element={<Portfolio />}>
        <Route index element={<HomeHero />} />
        <Route to="projects" element={<ProjectList />}>
          <Route index element={<Project />} />
          <Route to=":projectId" element={<Project />} />
        </Route>
        <Route path="about-me" element={<About />} />
        <Route path="contact" element={<ContactMe />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
