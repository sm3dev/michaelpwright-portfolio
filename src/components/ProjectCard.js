import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TechStack } from "./TechStack";

export const ProjectCard = ({ projectObj }) => {
  let { projectId } = useParams();
  let navigate = useNavigate();

  // const techUsedArray = [1, 4, 5, 6, 8, 10, 20, 27, 35];

  return (
    <article className="project__card">
      <section className="project-card__thumbmail">
        {" "}
        <Link
          to={`${projectObj.id}`}
          title={`${projectObj.name} Details`}
          className="project-card__link project-detail__link"
        >
          <img
            src={`./images/${projectObj.thumbnail}`}
            alt={`${projectObj.name} thumbnail`}
            className="project-card__thumbnail-image"
          />
        </Link>
      </section>
      <h3 className="project-card-title__text">
        {" "}
        <a href={`${projectObj.id}`} className="project-detail__link">
          {projectObj.name}
        </a>{" "}
      </h3>
      <p className="project-card__description">{projectObj.description}</p>
      <p className="project-card-read-more__block">
        {" "}
        <a href="#" className="project-detail__link">
          Read More
        </a>
      </p>
      <section className="project-card__techstack-button">
        <button className="techstack__trigger">Tech Stack</button>
        <TechStack />
        <a href="" className="continue-to-project-detail__link">
          <button className="continue-to-project-detail__button">
            Continue to Project Details
          </button>
        </a>
      </section>
      {/* <Project projectObj={projectObj} /> */}
    </article>
  );
};
