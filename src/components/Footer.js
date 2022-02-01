import React from "react";

export const Footer = ({ user }) => {
  return (
    <div id="footer">
      <section className="resume__block">
        {" "}
        <p className="resume__text">
          <a
            href={user?.resumeLink}
            className="download-resume__link"
            target="_blank"
            title="Download/View My Résumé"
            rel="noreferrer"
          >
            <span className="icon pdf__icon">😄</span> Download Résumé
          </a>
        </p>
      </section>
      <section className="social-media__block">
        {" "}
        <ul className="social-media__list">
          <li className="social__list-item">
            <a
              href={user?.linkedinIn}
              className="social-media__link link__linkedin"
              title={`${user?.Michael} on LinkedIn`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon linkedin__icon">😄</span> /mpw
            </a>
          </li>
          <li className="social__list-item">
            <a
              href={user?.gitHub}
              className="social-media__link link__github"
              title={`${user?.Michael} on GitHub`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon github__icon">😄</span> /sm3dev
            </a>
          </li>
          <li className="social__list-item">
            <a
              href={`mailto:${user?.email}`}
              className="social-media__link link__email"
              title={`Email ${user?.Michael}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon email__icon">😄</span> email
            </a>
          </li>
        </ul>{" "}
      </section>
      <section className="copyright__block">
        {" "}
        <p className="copyright__text">
          Copyright&copy; 2022{" "}
          <a
            href={user?.homepageURL}
            className="personal-site__link"
            title={`${user?.displayName} Personal Website`}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            {user?.displayName}
          </a>
        </p>{" "}
      </section>
    </div>
  );
};
