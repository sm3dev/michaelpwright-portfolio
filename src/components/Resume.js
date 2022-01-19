import React from "react";

export const Resume = () => {
  return (
    <div className="resume__block theme__dark">
      <h2 className="resume__title">Résumé</h2>
      <section className="download-resume__block">
        <button className="download-resume__button">
          {" "}
          <span className="icon pdf__icon">😄</span> Download PDF
        </button>
      </section>
      <section className="resume about__block">
        {" "}
        <h3 className="about__heading">About</h3>{" "}
      </section>
      <section className="resume tech-experience__block">
        {" "}
        <h3 className="tech-experience__text">Technical Experience</h3>{" "}
        <section className="tech-experience__job"><p className="tech-section__title text__all-caps">UI/UX FRONT-END DEVELOPER (APPRENTICESHIP)</p>
        <p className="tech-section__location-name">Nashville Software School</p>
        <p className="tech-section__dates">2019-Present</p>
        <ul className="tech-section__bullet-points">
            <li className="tech__list-item">Lorem ipsum dolor sit amet, consectetur </li>
            <li className="tech__list-item">Lorem ipsum dolor sit amet, consectetur </li>
            <li className="tech__list-item">Lorem ipsum dolor sit amet, consectetur </li>
        </ul></section>
        <section className="tech-experience__job"><p className="tech-section__title text__all-caps">UI/UX FRONT-END DEVELOPER (APPRENTICESHIP)</p>
        <p className="tech-section__location-name">Nashville Software School</p>
        <p className="tech-section__dates">2019-Present</p>
        <ul className="tech-section__bullet-points">
            <li className="tech__list-item">Lorem ipsum dolor sit amet, consectetur </li>
            <li className="tech__list-item">Lorem ipsum dolor sit amet, consectetur </li>
            <li className="tech__list-item">Lorem ipsum dolor sit amet, consectetur </li>
        </ul></section>
        <section className="tech-experience__job"><p className="tech-section__title text__all-caps">UI/UX FRONT-END DEVELOPER (APPRENTICESHIP)</p>
        <p className="tech-section__location-name">Nashville Software School</p>
        <p className="tech-section__dates">2019-Present</p>
        <ul className="tech-section__bullet-points">
            <li className="tech__list-item">Lorem ipsum dolor sit amet, consectetur </li>
            <li className="tech__list-item">Lorem ipsum dolor sit amet, consectetur </li>
            <li className="tech__list-item">Lorem ipsum dolor sit amet, consectetur </li>
        </ul></section>
        
      </section>
      <section className="resume skills__block"></section>
      <section className="resume education__block"></section>
      <section className="resume__footer download-resume__block">
        <button className="resume__footer download-resume__button">
          {" "}
          <span className="icon pdf__icon">😄</span> Download PDF
        </button>
      </section>
    </div>
  );
};
