import React, { useEffect, useState } from "react";
import HeaderLogo from "./HeaderLogo";

export const About = () => {
  const [aboutUser, setaboutUser] = useState({});

  useEffect(() => {
    fetch("api/database.json")
      .then((res) => res.json())
      .then((data) => {
        let firstUser = data.users[0];
        console.log(firstUser);
        setaboutUser(firstUser);
      });
  }, []);

  return (
    <>
      <HeaderLogo />
      <section className="about__content">
        <div className="about-headshot__block">
          <img
            src={`../images/${aboutUser.headshot}`}
            alt={`${aboutUser.displayName} headshot`}
            className="about-headshot__image"
          />
        </div>

        <section className="about__greeting-text">
          <h2 className="greeting__heading">I'm {aboutUser.displayName}</h2>
          <p className="greeting__job-title subheading__text">
            {aboutUser.jobTitle}
          </p>
          <p className="about__intro-text">{aboutUser.aboutMeIntro}</p>
        </section>

        <figure className="photo-collage__block">
          <img
            src={`../images/${aboutUser.photoCollage}`}
            alt={`${aboutUser.displayName} personal photo collage`}
            className="photo-collage__image"
          />
          <figcaption>
            {aboutUser.firstName}'s Personal Photos &#124;{" "}
            <a
              href={aboutUser.photoCollageLink}
              className="full-resolution-image__link"
              target="_blank"
              title="View High Resolution Image"
            >
              View High Res
            </a>{" "}
          </figcaption>
        </figure>
        <h2 className="motivations__heading">What Intrigues Me</h2>
        <p className="personal-info__text">{aboutUser.personalInfo1}</p>
        <p className="personal-info__text">{aboutUser.personalInfo2}</p>

        <figure className="additional-image__block">
          <img
            src={`../images/${aboutUser?.additionalPhoto}`}
            alt={`${aboutUser.displayName} personal photo`}
            className="additional__image"
          />
          <figcaption>
            {" "}
            <a
              href={aboutUser.additionalPhotoLink}
              className="full-resolution-image__link"
              target="_blank"
              title="View High Resolution Image"
            >
              View High Res
            </a>
          </figcaption>
        </figure>

        <section className="about-quote__block">
          {/* This will be brought in by the Quote component */}
          <blockquote className="blockquote">
            {" "}
            <p className="blockquote-single-line__text">
              {" "}
              If you can't beat 'em, unfollow their Instagram account
            </p>
            <cite className="quote__cite">&#8208; Author</cite>
          </blockquote>
        </section>

        <section className="testimonial__block">
          <h2 className="testimony__heading">What Teammates Say</h2>
          <section className="testimony-item__block">
            <p className="accolade__text">Sometimes right!</p>
            <p className="author__name">Bells Whistles</p>
          </section>
          <section className="testimony-item__block">
            <p className="accolade__text">I can't believe he's not butter!</p>
            <p className="author__name">Left Overs</p>
          </section>
          <section className="testimony-item__block">
            <p className="accolade__text">This isn't where I parked my care!</p>
            <p className="author__name">Roger Rabbit</p>
          </section>
        </section>
      </section>
    </>
  );
};
