import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";
import { ProjectNav } from "./ProjectNav";
import projects from "../../public/api/database.json"

export const Project = () => {
  const { projectId } = useParams();

  const [currentProject, setCurrentProject] = useState({});
  const [allProjects, setAllProjects] = useState([]);

  // const getProject = () => {
  //   let obj = allProjects.find((projectObj) => projectObj.id === projectId);
  //   setCurrentProject(obj);
  // };

  useEffect(() => {
    fetch("api/database.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.projects);
        setAllProjects(data.projects);
        const theProjects = data.projects;
        let obj = theProjects.map((projectObj) => projectObj.id === projectId);
      setCurrentProject(obj);
      });
      
  }, []);

  return (
    <>
      <section className="project__content">
        <section className="project-overview__section">
          <h1 className="project__name">{currentProject?.name}</h1>
          <div className="desktopMobile-image__block">
            <img
              src={`../images/${currentProject?.thumbnail}`}
              alt={`${currentProject?.name} thumbnail image`}
              className="desktopMobile__image"
            />
          </div>
          <p className="project__description">{currentProject?.description}</p>
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
              href={currentProject?.linkToSite}
              className="project-button__link"
              target="_blank"
              title="Visit live website"
            >
              {" "}
              <button className="project-links__button">Live Site</button>
            </a>
            <a
              href={currentProject?.linkRepo}
              className="project-button__link"
              target="_blank"
              title="Visit GitHub Repository"
            >
              {" "}
              <button className="project-links__button">GitHub Repo</button>
            </a>
          </section>
          <section className="project-techStack__block">
            {/* techstack component will go here */}
          </section>
        </section>
        <hr className="section__divider" />{" "}
        <figure className="challenge-image__block">
          <img
            src={`./images/${currentProject?.challengeImage}`}
            alt=""
            className="challenge__image"
          />
          <figcaption>
            {" "}
            <a
              href={currentProject?.challengeImageLink}
              className="full-size-image__link"
              target="_blank"
              title="View High Res Image in New Tab"
            >
              See Full Resolution
            </a>
          </figcaption>
        </figure>
        <h2 className="challenge__heading">
          {currentProject?.challengeHeading}
        </h2>
        <p className="challenge__subtitle subheading__text">The Challenge</p>
        <p className="challenge__text">{currentProject?.challengeText}</p>
        <hr className="section__divider" />{" "}
        <figure className="goals-image__block">
          <img
            src={`./images/${currentProject?.goalsImage}`}
            alt="goals and constraints image"
            className="goals__image"
          />
          <figcaption>
            {" "}
            <a
              href={currentProject?.goalsImageLink}
              className="full-size-image__link"
              target="_blank"
              title="View High Res Image in New Tab"
            >
              See Full Resolution
            </a>
          </figcaption>
        </figure>
        <h2 className="goals__heading">{currentProject?.goalsHeading}</h2>
        <p className="goals__subtitle subheading__text">
          Goals and Constraints
        </p>
        <p className="goals__text">{currentProject?.goalsText}</p>
        <hr className="section__divider" />{" "}
        <figure className="process-image__block">
          <img
            src={`./images/${currentProject?.processImage}`}
            alt="project process image "
            className="process__image"
          />
          <figcaption>
            {" "}
            <a
              href={currentProject?.processImageLink}
              className="full-size-image__link"
              target="_blank"
              title="View High Res Image in New Tab"
            >
              See Full Resolution
            </a>
          </figcaption>
        </figure>
        <h2 className="process__heading">{currentProject?.processHeading}</h2>
        <p className="process__subtitle subheading__text">The Process</p>
        <p className="process__text">{currentProject?.processText}</p>
        <hr className="section__divider" />{" "}
        <h2 className="lessons-learned__heading">
          {currentProject?.lessonsHeading}
        </h2>
        <p className="lessons-learned__subtitle subheading__text">
          Lessons Learned
        </p>
        <p className="lessons-learned__text">{currentProject?.lessonsText}</p>
        <section className="project-links-button__block">
          <a
            href={currentProject?.linkToSite}
            className="project-button__link"
            target="_blank"
            title="Visit live website"
          >
            {" "}
            <button className="project-links__button">Live Site</button>
          </a>
          <a
            href={currentProject?.linkRepo}
            className="project-button__link"
            target="_blank"
            title="Visit GitHub Repository"
          >
            {" "}
            <button className="project-links__button">GitHub Repo</button>
          </a>
        </section>
      </section>
    </>
  );
};
