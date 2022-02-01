import React from "react";

export const Resume = ({ portfolioAuthor }) => {
  return (
    <article className="resume__block theme__dark">
      <h2 className="resume__title">Résumé</h2>
      <section className="download-resume__block">
        <a
          href={portfolioAuthor.resumeLink}
          className="download-resume__link"
          target="_blank"
        >
          <button className="download-resume__button">
            <span className="icon pdf__icon">😄</span> Download PDF
          </button>
        </a>
      </section>
      <section className="resume about__block">
        {" "}
        <h3 className="about__heading">About</h3>{" "}
        <p className="about__text">
          Lorem Khaled Ipsum is a major key to success. They don’t want us to
          eat. You should never complain, complaining is a weak emotion, you got
          life, we breathing, we blessed.
        </p>
        <p className="about__text">
          Lorem Khaled Ipsum is a major key to success. They don’t want us to
          eat. You should never complain, complaining is a weak emotion, you got
          life, we breathing, we blessed.
        </p>
      </section>
      <section className="resume tech-experience__block">
        {" "}
        <h3 className="tech-experience__text">Technical Experience</h3>{" "}
        <section className="tech-experience__job">
          <p className="tech-section__title text__all-caps">
            UI/UX FRONT-END DEVELOPER (APPRENTICESHIP)
          </p>
          <p className="tech-section__location-name">
            Nashville Software School
          </p>
          <p className="tech-section__dates">2019-Present</p>
          <ul className="tech-section__bullet-points-list">
            <li className="tech__list-item">
              Lorem ipsum dolor sit amet, consectetur{" "}
            </li>
            <li className="tech__list-item">
              Lorem ipsum dolor sit amet, consectetur{" "}
            </li>
            <li className="tech__list-item">
              Lorem ipsum dolor sit amet, consectetur{" "}
            </li>
          </ul>
        </section>
        <section className="tech-experience__job">
          <p className="tech-section__title text__all-caps">
            UI/UX FRONT-END DEVELOPER (APPRENTICESHIP)
          </p>
          <p className="tech-section__location-name">
            Nashville Software School
          </p>
          <p className="tech-section__dates">2019-Present </p>

          <ul className="tech-section__bullet-points-list">
            <li className="tech__list-item">
              Lorem ipsum dolor sit amet, consectetur{" "}
            </li>
            <li className="tech__list-item">
              Lorem ipsum dolor sit amet, consectetur{" "}
            </li>
            <li className="tech__list-item">
              Lorem ipsum dolor sit amet, consectetur{" "}
            </li>
          </ul>
        </section>
        <section className="tech-experience__job">
          <p className="tech-section__title text__all-caps">
            UI/UX FRONT-END DEVELOPER (APPRENTICESHIP)
          </p>
          <p className="tech-section__location-name">
            Nashville Software School
          </p>
          <p className="tech-section__dates">2019-Present </p>

          <ul className="tech-section__bullet-points-list">
            <li className="tech__list-item">
              Lorem ipsum dolor sit amet, consectetur{" "}
            </li>
            <li className="tech__list-item">
              Lorem ipsum dolor sit amet, consectetur{" "}
            </li>
            <li className="tech__list-item">
              Lorem ipsum dolor sit amet, consectetur{" "}
            </li>
          </ul>
        </section>
      </section>
      <section className="resume skills__block"></section>
      <section className="resume education__block"></section>
      <section className="resume__footer download-resume__block">
        <a
          href={portfolioAuthor.resumeLink}
          className="download-resume__link"
          target="_blank"
        >
          <button className="download-resume__button">
            <span className="icon pdf__icon">😄</span> Download PDF
          </button>
        </a>
      </section>
    </article>
  );
};
