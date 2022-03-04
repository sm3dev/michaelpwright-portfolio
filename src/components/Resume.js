import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/pro-light-svg-icons";
import { TechSkillLevels } from "./TechSkillLevels";

export const Resume = ({ portfolioAuthor, allTechStack }) => {
  
  return (
    <article id="my-resume" className="resume__block theme__dark">
      <h3 className="resume__heading text__all-caps">Résumé</h3>
      <h2 className="resume__title">Michael P. Wright</h2>
      <p className="resume__subtitle text__all-caps">
        UI/UX Front-end Developer
      </p>
      <section className="download-resume__block">
        <a
          href={portfolioAuthor.resumeLink}
          className="download-resume__link"
          target="_blank"
          title="Download/View My Résumé"
          rel="noreferrer"
        >
          <button className="download-resume__button">
            <span className="icon pdf__icon">
              <FontAwesomeIcon icon={faDownload} />
            </span>{" "}
            Download PDF
          </button>
        </a>
      </section>
      <section className="resume about__block">
        {" "}
        <h4
          className="resume__subheading about__heading text__all-caps"
          title="About Me"
        >
          About
        </h4>{" "}
        <p className="about__text">
          I love to solve problems. My favorite parts of software development
          happen in the preparation phase. I enjoy assessing user needs,
          building a Design System, and defending my design choices.
        </p>
        <p className="about__text">
          I’m seeking full-time and contract opportunities as a UX Designer and
          Front-End Developer to design high impact web and mobile applications.
        </p>
      </section>
      <section
        id="resume__work-experience"
        className="resume work-experience__block"
      >
        {" "}
        <h4 className="resume__subheading work-experience__text text__all-caps">
          Work Experience
        </h4>{" "}
        <section className="work-experience__job">
          <p className="work-section__job-title">
            Apprentice Application Developer &amp; Designer
          </p>
          <p className="work-section__location-name">
            Nashville Software School | 2021- 2022 | Nashville, TN, USA
          </p>
          <p className="work-section__description">
            <em>
              Immersive full-time software development boot camp focusing on
              front-end development and UI/UX fundamentals.
            </em>{" "}
          </p>
          <ul className="work-section__bullet-points-list">
            <p className="work-section__subsection--header text__all-caps">
              Development
            </p>
            <li className="work__list-item">
              Apply hands-on application of development fundamentals and
              principles through group and individual projects reflecting
              real-world business problems;
            </li>
            <li className="work__list-item">
              Project management/tracking with Github Projects &amp; Issue
              Tracking;
            </li>
            <li className="work__list-item">
              Build single-page applications in the React framework leveraging
              HTML, CSS, and JavaScript
            </li>
          </ul>
          <ul className="work-section__bullet-points-list">
            <p className="work-section__subsection--header text__all-caps">
              Design
            </p>
            <li className="work__list-item">
              Produce visual &amp; interactive design with strategic use of
              typography, layout, color, motion, and behavior;
            </li>
            <li className="work__list-item">
              Convey interactive story ideas and complex interactions with
              wireframes or prototypes;
            </li>
            <li className="work__list-item">
              Plan user experience with intentional design around speed,
              efficiency
            </li>
          </ul>
        </section>
        <section className="work-experience__job">
          <p className="work-section__job-title">WordPress Website Designer</p>
          <p className="work-section__location-name">
            Self-Employed | 2018 - 2021 | Huntsville, AL, USA
          </p>
          <ul className="work-section__bullet-points-list">
            <li className="work__list-item">
              Design, develop, and launch websites build with WordPress CMS;
            </li>
            <li className="work__list-item">
              Interview clients, perform Content Inventory, and website
              development milestones;
            </li>
            <li className="work__list-item">
              Manage, backup/restore, update, and migrate website content
              including user account management, plug-in updates, and WordPress
              Core update
            </li>
          </ul>
        </section>
        <section className="work-experience__job">
          <p className="work-section__job-title">
            Network and Computer Systems Administrators
          </p>
          <p className="work-section__location-name">
            U.S. Air Force, Active Duty | 1998 - 2018 | N. America, Asia,
            Europe, Africa
          </p>
          <ul className="work-section__bullet-points-list">
            <li className="work__list-item">
              Provides unclassified and classified networked application
              resources by designing, configuring, installing, and managing data
              services, operating system and server;
            </li>
            <li className="work__list-item">
              Categorizes, isolates, and resolves system problems. Performs
              fault recovery by validating, isolating, correcting faults, and
              verifying service restoral with customers
            </li>
          </ul>
        </section>
      </section>
      <section id="resume-education" className="resume education__block">
        <h4 className="resume__subheading education__text text__all-caps">
          Education
        </h4>{" "}
        <ul className="education__list list-item__no-bullet">
          <li className="education__entry-block">
            <p className="education__course-degree-title">
              Front-End Designer &amp; Developer
            </p>
            <p className="education__location-name">
              <a
                href="https://nashvillesoftwareschool.com/"
                className="location__link"
                target="_blank"
                title="Nashville Software School"
              >
                Nashville Software School
              </a>
            </p>
          </li>
          <li className="education__entry-block">
            <p className="education__course-degree-title">
              Information Systems Science, AS
            </p>
            <p className="education__location-name">
              <a
                href="https://www.airuniversity.af.edu/Barnes/CCAF/"
                className="location__link"
                target="_blank"
                title="Community College of the Air Force"
              >
                Community College of the Air Force{" "}
              </a>
            </p>
          </li>
          <li className="education__entry-block">
            <p className="education__course-degree-title">
              U.S. Air Force Noncommissioned Officer Academyy
            </p>
            <p className="education__location-name">
              <a
                href="http://www.airuniversity.af.edu/"
                className="location__link"
                target="_blank"
                title="Air University"
              >
                Air University
              </a>
            </p>
          </li>
        </ul>
      </section>
      <section id="resume-skills" className="resume skills__block">
      <h4 className="resume__subheading skills__text text__all-caps">Skills and Technologies</h4>
      <TechSkillLevels allTechStack={allTechStack} />
      </section>

      <section className="resume__footer download-resume__block">
        <a
          href={portfolioAuthor.resumeLink}
          className="download-resume__link"
          target="_blank"
          title="Download/View My Résumé"
          rel="noreferrer"
        >
          <button className="download-resume__button">
            <span className="icon pdf__icon">
              <FontAwesomeIcon icon={faDownload} />
            </span>{" "}
            Download PDF
          </button>
        </a>
      </section>
    </article>
  );
};
