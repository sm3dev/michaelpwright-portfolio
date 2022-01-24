import React from "react";

export const ProjectDetail = () => {
  return (
    <section className="project-detail-view-">
      <section className="project__nav">
        <div className="nav-left__arrow"></div>
        <p className="project-name__page-title"></p>
        <div className="nav-right__arrow"></div>
      </section>
      <section className="project__content">
        <h1 className="project__name">PROJECT FULL NAME</h1>
        <div className="desktopMobile-image__block">
          <img src="" alt="" className="desktopMobile__image" />
        </div>
        <p className="project__description">
          Break the internet with the first ever ever created
        </p>
        <section className="project-links-button__block">
          <a href="#" className="project-button__link">
            {" "}
            <button className="project-links__button">Live Site</button>
          </a>
          <a href="#" className="project-button__link">
            {" "}
            <button className="project-links__button">GitHub Repo</button>
          </a>
        </section>
        <section className="project-techStack__block">
          {/* techstack component will go here */}
        </section>
        <hr className="section__divider" />{" "}
        <figure className="challenge-image__block">
          <img src="" alt="" className="challenge__image" />
          <figcapton>
            {" "}
            <a href="https://google.com" className="full-size-image__link">
              See full size
            </a>
          </figcapton>
        </figure>
        <h2 className="challenge__heading">Showcase NSS C51 Students</h2>
        <p className="challenge__text">
          he Cohort website is a staple in the NSS Web Developer Program
          cirriculum.
          <br />
          The UI/UX Students of Cohort 51 were charged with creating a hub for
          getting students employment and showcasing the UI/UX knowledge and
          talent.
        </p>
        <hr className="section__divider" />{" "}
        <figure className="goals-image__block">
          <img src="logo192.png" alt="" className="goals__image" />
          <figcapton>
            {" "}
            <a href="https://google.com" className="full-size-image__link">
              See full size
            </a>
          </figcapton>
        </figure>
        <h2 className="goals__heading">Goals and Constraints</h2>
        <p className="goals__text">
          The Cohort website is a staple in the NSS Web Developer Program
          cirriculum. The UI/UX Students of Cohort 51 were charged with creating
          a hub for getting students employment and showcasing the UI/UX
          knowledge and talent.
        </p>
        <hr className="section__divider" />{" "}
        <figure className="process-image__block">
          <img src="logo192.png" alt="" className="process__image" />
          <figcapton>
            {" "}
            <a href="https://google.com" className="full-size-image__link">
              See full size
            </a>
          </figcapton>
        </figure>
        <h2 className="process__heading">Our Process</h2>
        <p className="process__text">The Cohort website is a staple in the NSS Web Developer Program cirriculum. The UI/UX Students of Cohort 51 were charged with creating a hub for getting students employment and showcasing the UI/UX knowledge and talent.</p>
      </section>
    </section>
  );
};
