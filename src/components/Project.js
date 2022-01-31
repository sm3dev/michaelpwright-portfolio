import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectbyID } from "./DataManager";

export const Project = () => {
  const { projectId } = parseInt(useParams());

  const [projectObj, setProjectObj] = useState({});

  const getProject = () => {
    getProjectbyID(2);
  };

  useEffect(() => {
    setProjectObj(getProject());
  }, []);

  return (
    <>
      <section className="project__content">
        <section className="project-overview__section">
          <h1 className="project__name">{projectObj?.name}</h1>
          <div className="desktopMobile-image__block">
            <img
              src={`../images/${projectObj?.thumbnail}`}
              alt={`${projectObj?.name} thumbnail image`}
              className="desktopMobile__image"
            />
          </div>
          <p className="project__description">{projectObj?.description}</p>
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
              href={projectObj?.linkToSite}
              className="project-button__link"
              target="_blank"
              title="Visit live website"
            >
              {" "}
              <button className="project-links__button">Live Site</button>
            </a>
            <a
              href={projectObj?.linkRepo}
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
            src={`./images/${projectObj?.challengeImage}`}
            alt=""
            className="challenge__image"
          />
          <figcaption>
            {" "}
            <a
              href={projectObj?.challengeImageLink}
              className="full-size-image__link"
              target="_blank"
              title="View High Res Image in New Tab"
            >
              See Full Resolution
            </a>
          </figcaption>
        </figure>
        <h2 className="challenge__heading">{projectObj?.challengeHeading}</h2>
        <p className="challenge__subtitle subheading__text">The Challenge</p>
        <p className="challenge__text">{projectObj?.challengeText}</p>
        <hr className="section__divider" />{" "}
        <figure className="goals-image__block">
          <img
            src={`./images/${projectObj?.goalsImage}`}
            alt="goals and constraints image"
            className="goals__image"
          />
          <figcaption>
            {" "}
            <a
              href={projectObj?.goalsImageLink}
              className="full-size-image__link"
              target="_blank"
              title="View High Res Image in New Tab"
            >
              See Full Resolution
            </a>
          </figcaption>
        </figure>
        <h2 className="goals__heading">{projectObj?.goalsHeading}</h2>
        <p className="goals__subtitle subheading__text">
          Goals and Constraints
        </p>
        <p className="goals__text">{projectObj?.goalsText}</p>
        <hr className="section__divider" />{" "}
        <figure className="process-image__block">
          <img
            src={`./images/${projectObj?.processImage}`}
            alt="project process image "
            className="process__image"
          />
          <figcaption>
            {" "}
            <a
              href={projectObj?.processImageLink}
              className="full-size-image__link"
              target="_blank"
              title="View High Res Image in New Tab"
            >
              See Full Resolution
            </a>
          </figcaption>
        </figure>
        <h2 className="process__heading">{projectObj?.processHeading}</h2>
        <p className="process__subtitle subheading__text">The Process</p>
        <p className="process__text">{projectObj?.processText}</p>
        <hr className="section__divider" />{" "}
        <h2 className="lessons-learned__heading">
          {projectObj?.lessonsHeading}
        </h2>
        <p className="lessons-learned__subtitle subheading__text">
          Lessons Learned
        </p>
        <p className="lessons-learned__text">{projectObj?.lessonsText}</p>
        <section className="project-links-button__block">
          <a
            href={projectObj?.linkToSite}
            className="project-button__link"
            target="_blank"
            title="Visit live website"
          >
            {" "}
            <button className="project-links__button">Live Site</button>
          </a>
          <a
            href={projectObj?.linkRepo}
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
