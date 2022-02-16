import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useParams,
  BrowserRouter,
  Outlet,
} from "react-router-dom";
// import { Footer } from "./components/Footer";
// import { About } from "./components/About";
// import { ContactMe } from "./components/ContactMe";
// import { HomeHero } from "./components/HomeHero";
// import { NavBar } from "./components/NavBar";
import { HeaderLogo } from "./components/HeaderLogo";
import {
  getAboutQuotes,
  getFirstUser,
  getHeroTaglines,
  getNavTaglines,
  getProject,
  getProjects,
  getTechStack,
} from "./api";
import { ProjectCard } from "./components/ProjectCard";
import { TechStack } from "./components/TechStack";
import { ComingSoon } from "./components/ComingSoon";

function ProjectsMain({ allNavTaglines }) {
  return (
    <>
      <HeaderLogo allNavTaglines={allNavTaglines} />
      <Outlet />
    </>
  );
}

function ProjectList({ allProjects }) {
  const projects = allProjects;

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

function Project({ allTechStack }) {
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
          <TechStack projectObjId={projectId} allTechStack={allTechStack} />
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
  const techStackAll = getTechStack();
  const allNavTaglines = getNavTaglines();
  const projects = getProjects();
  const heroTaglines = getHeroTaglines();
  const allAboutQuotes = getAboutQuotes();

  const [allHeroTaglines, setAllHeroTaglines] = useState([heroTaglines]);
  const [allQuotes, setAllQuotes] = useState([allAboutQuotes]);
  const [allProjects, setAllProjects] = useState(projects);
  const [allTechStack, setAllTechStack] = useState(techStackAll);
  const [user, setUser] = useState(primaryUser);

  useEffect(() => {
    setAllHeroTaglines(heroTaglines);
    setAllQuotes(allAboutQuotes);
    setAllProjects(projects);
    setAllTechStack(techStackAll);
    setUser(primaryUser);
  }, [heroTaglines, allAboutQuotes, techStackAll, projects, primaryUser]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComingSoon user={user} />} />
        {/* <Route
          path="/"
          element={
            <HomeHero
              allHeroTaglines={allHeroTaglines}
              user={user}
              allTechStack={allTechStack}
            />
          }
        /> */}
        {/* <Route
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
              <ProjectsMain
                allProjects={projects}
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
                  allTechStackItems={allTechStack}
                />
              </>
            }
          />
          <Route
            path=":projectId"
            element={
              <Project allProjects={allProjects} allTechStack={allTechStack} />
            }
          />
        </Route>
*/}
        {/* <Route
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
        />  */}
        <Route path="*" element={<ComingSoon user={user} />} />
      </Routes>
      {/* <Footer user={user} /> */}
    </BrowserRouter>
  );
}
