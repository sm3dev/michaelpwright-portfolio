import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Portfolio } from "./Portfolio";
import "./styles/_global.scss";
import { About } from "./components/About";
import { ContactMe } from "./components/ContactMe";
import { HomeHero } from "./components/HomeHero";
import { NavBar } from "./components/NavBar";
import { Project } from "./components/Project";
import { ProjectList } from "./components/ProjectList";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Portfolio />}>
        <Route index element={<HomeHero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/project/:projectId" element={<Project />} />
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
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
