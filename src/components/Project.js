import React from "react";

export const Project = ({ projectObj }) => {
  return (
    <section className="project__content">
      <section className="project-overview__section">
        <h1 className="project__name">{projectObj.name}</h1>
        <div className="desktopMobile-image__block">
          <img
            src={require(`../images/${projectObj.thumbnail}`).default}
            alt={`${projectObj.name} thumbnail image`}
            className="desktopMobile__image"
          />
        </div>
        <p className="project__description">{projectObj.description}</p>
        <section className="project-video__iframe">
          {/* This could be a good place for the demo video. Ideally the video would sit above the fold */}

          <img src="placeholder-video.gif" alt="" className="project__video" />
        </section>
        <section className="project-links-button__block">
          <a href={projectObj.linkToSite} className="project-button__link" target="_blank" title="Visit live website">
            {" "}
            <button className="project-links__button">Live Site</button>
          </a>
          <a href={projectObj.linkRepo} className="project-button__link" target="_blank" title="Visit GitHub Repository">
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
          src={require(`../images/${projectObj.challengeImage}`).default}
          alt=""
          className="challenge__image"
        />
        <figcaption>
          {" "}
          <a href={projectObj.challengeImageLink} className="full-size-image__link" target="_blank" title="View High Res Image in New Tab">
            See Full Resolution
          </a>
        </figcaption>
      </figure>
      <h2 className="challenge__heading">{projectObj.challengeHeading}</h2>
      <p className="challenge__text">
        {projectObj.challengeText}
      </p>
      <hr className="section__divider" />{" "}
      <figure className="goals-image__block">
        <img src="logo192.png" alt="" className="goals__image" />
        <figcaption>
          {" "}
          <a href="https://google.com" className="full-size-image__link" target="_blank" title="View High Res Image in New Tab">
            See Full Resolution
          </a>
        </figcaption>
      </figure>
      <h2 className="goals__heading">Goals and Constraints</h2>
      <p className="goals__text">
        The Cohort website is a staple in the NSS Web Developer Program
        cirriculum. The UI/UX Students of Cohort 51 were charged with creating a
        hub for getting students employment and showcasing the UI/UX knowledge
        and talent.
      </p>
      <hr className="section__divider" />{" "}
      <figure className="process-image__block">
        <img src="logo192.png" alt="" className="process__image" />
        <figcaption>
          {" "}
          <a href="https://google.com" className="full-size-image__link" target="_blank" title="View High Res Image in New Tab">
            See Full Resolution
          </a>
        </figcaption>
      </figure>
      <h2 className="process__heading">Our Process</h2>
      <p className="process__text">
        The Cohort website is a staple in the NSS Web Developer Program
        cirriculum. The UI/UX Students of Cohort 51 were charged with creating a
        hub for getting students employment and showcasing the UI/UX knowledge
        and talent.
      </p>
    </section>
  );
};
