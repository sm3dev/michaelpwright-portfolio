import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useParams,
  BrowserRouter,
  Outlet,
} from "react-router-dom";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { ContactMe } from "./components/ContactMe";
import { HomeHero } from "./components/HomeHero";
import { NavBar } from "./components/NavBar";
import { HeaderLogo } from "./components/HeaderLogo";
import { getFirstUser, getProject, getProjects, getTeckStack } from "./api";
import { ProjectCard } from "./components/ProjectCard";

function ProjectsMain({ allNavTaglines }) {
  return (
    <>
      <HeaderLogo allNavTaglines={allNavTaglines} />
      <Outlet />
    </>
  );
}

function ProjectList() {
  const projects = getProjects();

  return (
    <>
      <section className="project-list__block">
        {projects.map((projectObj) => (
          <ProjectCard key={projectObj.id} projectObj={projectObj} />
        ))}
      </section>
    </>
  );
}

function Project() {
  const { projectId } = useParams();
  const project = getProject(projectId);

  return (
    <>
      <section className="project__content">
        <section className="project-overview__section">
          <h1 className="project__name">{project.name}</h1>
          <div className="desktopMobile-image__block">
            <img
              src={`../images/${project.thumbnail}`}
              alt={`${project.name} thumbnail`}
              className="desktopMobile__image"
            />
          </div>
          <p className="project__description">{project.description}</p>
          <section className="project-video__iframe">
            {/* This could be a good place for the demo video. Ideally the video would sit above the fold */}

            <img
              src="placeholder-video.gif"
              alt=""
              className="project__video"
            />
          </section>
          <section className="project-links-button__block">
            <a
              href={project.linkToSite}
              className="project-button__link"
              target="_blank"
              rel="noreferrer"
              title="Visit live website"
            >
              {" "}
              <button className="project-links__button">Live Site</button>
            </a>
            <a
              href={project.linkRepo}
              className="project-button__link"
              target="_blank"
              rel="noreferrer"
              title="Visit GitHub Repository"
            >
              {" "}
              <button className="project-links__button">GitHub Repo</button>
            </a>
          </section>
          {/* <TechStack projectObjId={project.id} allTechStackItems={techStackAll} /> */}
        </section>
        <hr className="section__divider" />{" "}
        <figure className="challenge-image__block">
          <img
            src={`../images/${project.challengeImage}`}
            alt=""
            className="challenge__image"
          />
          <figcaption>
            {" "}
            <a
              href={project.challengeImageLink}
              className="full-size-image__link"
              target="_blank"
              rel="noreferrer"
              title="View High Res Image in New Tab"
            >
              See Full Resolution
            </a>
          </figcaption>
        </figure>
        <h2 className="challenge__heading">{project.challengeHeading}</h2>
        <p className="challenge__subtitle subheading__text">The Challenge</p>
        <p className="challenge__text">{project.challengeText}</p>
        <hr className="section__divider" />{" "}
        <figure className="goals-image__block">
          <img
            src={`../images/${project.goalsImage}`}
            alt="goals and constraints"
            className="goals__image"
          />
          <figcaption>
            {" "}
            <a
              href={project.goalsImageLink}
              className="full-size-image__link"
              target="_blank"
              rel="noreferrer"
              title="View High Res Image in New Tab"
            >
              See Full Resolution
            </a>
          </figcaption>
        </figure>
        <h2 className="goals__heading">{project.goalsHeading}</h2>
        <p className="goals__subtitle subheading__text">
          Goals and Constraints
        </p>
        <p className="goals__text">{project.goalsText}</p>
        <hr className="section__divider" />{" "}
        <figure className="process-image__block">
          <img
            src={`../images/${project.processImage}`}
            alt="project process"
            className="process__image"
          />
          <figcaption>
            {" "}
            <a
              href={project.processImageLink}
              className="full-size-image__link"
              target="_blank"
              rel="noreferrer"
              title="View High Res Image in New Tab"
            >
              See Full Resolution
            </a>
          </figcaption>
        </figure>
        <h2 className="process__heading">{project.processHeading}</h2>
        <p className="process__subtitle subheading__text">The Process</p>
        <p className="process__text">{project.processText}</p>
        <hr className="section__divider" />{" "}
        <h2 className="lessons-learned__heading">{project.lessonsHeading}</h2>
        <p className="lessons-learned__subtitle subheading__text">
          Lessons Learned
        </p>
        <p className="lessons-learned__text">{project.lessonsText}</p>
        <section className="project-links-button__block">
          <a
            href={project.linkToSite}
            className="project-button__link"
            target="_blank"
            rel="noreferrer"
            title="Visit live website"
          >
            {" "}
            <button className="project-links__button">Live Site</button>
          </a>
          <a
            href={project.linkRepo}
            className="project-button__link"
            target="_blank"
            rel="noreferrer"
            title="Visit GitHub Repository"
          >
            {" "}
            <button className="project-links__button">GitHub Repo</button>
          </a>
        </section>
      </section>
    </>
  );
}

export default function Portfolio() {
  const primaryUser = getFirstUser();
  const techStackAll = getTeckStack();

  const [allProjects, setAllProjects] = useState([]);
  const [allNavTaglines, setAllNavTaglines] = useState([]);
  const [allHeroTaglines, setAllHeroTaglines] = useState([]);
  const [allQuotes, setAllQuotes] = useState([]);

  useEffect(() => {
    fetch("api/database.json")
      .then((res) => res.json())
      .then((data) => {
        setAllProjects(data.projects);
        setAllNavTaglines(data.navTaglines);
        setAllHeroTaglines(data.heroTaglines);
        setAllQuotes(data.aboutQuotes);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomeHero
              allHeroTaglines={allHeroTaglines}
              user={primaryUser}
              allTechStackItems={techStackAll}
            />
          }
        />
        <Route
          path="/about"
          element={
            <>
              <HeaderLogo allNavTaglines={allNavTaglines} />
              <About user={primaryUser} allQuotes={allQuotes} />
            </>
          }
        />
        <Route path="/contact" element={<ContactMe user={primaryUser} />} />
        <Route
          path="/projects"
          element={
            <>
              <ProjectsMain
                allProjects={allProjects}
                allNavTaglines={allNavTaglines}
              />
            </>
          }
        >
          <Route index element={<ProjectList allProjects={allProjects} />} />
          <Route
            path="all-projects"
            element={
              <>
                <ProjectList
                  allProjects={allProjects}
                  allTechStackItems={techStackAll}
                />
              </>
            }
          />
          <Route path=":projectId" element={<Project />} />
        </Route>

        <Route
          path="*"
          element={
            <>
              {" "}
              <NavBar allNavTaglines={allNavTaglines} />
              <main
                style={{ padding: "1rem" }}
                className="nothing-here__message"
              >
                <p>There's nothing here!</p>
                <strong>Try a visiting a different page or reloading</strong>
              </main>
            </>
          }
        />
      </Routes>
      <Footer user={primaryUser} />
    </BrowserRouter>
  );
}
