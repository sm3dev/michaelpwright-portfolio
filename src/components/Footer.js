import React from "react";

export const Footer = () => {
  return (
    <div id="footer">
      <section className="resume__block">
        {" "}
        <p className="resume__text">
          {" "}
          <span className="icon pdf__icon">😄</span> Download Résumé
        </p>
      </section>
      <section className="social-media__block">
        {" "}
        <ul className="social-media__list">
          <li className="social__list-item">
            <a
              href="https://www.linkedin.com/in/mpw/"
              className="social-media__link link__linkedin"
              title="Michael P. Wright on LinkedIn"
              target="_blank"
            >
              <span className="icon linkedin__icon">😄</span> /mpw
            </a>
          </li>
          <li className="social__list-item">
            <a
              href="https://github.com/sm3dev"
              className="social-media__link link__github"
              title="Michael P. Wright on GitHub"
              target="_blank"
            >
              <span className="icon github__icon">😄</span> /sm3dev
            </a>
          </li>
          <li className="social__list-item">
            <a
              href="mailto:mrwry7@gmail.com"
              className="social-media__link link__email"
              title="Email Michael P. Wright"
              target="_blank"
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
            href="https://michaelpwright.com"
            className="personal-site__link"
            title="Michael P. Wright Personal Website"
            target="_blank"
          >
            {" "}
            Michael P. Wright
          </a>
        </p>{" "}
      </section>
    </div>
  );
};
