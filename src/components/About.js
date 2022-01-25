import React, { useEffect, useState } from "react";

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
    <section className="about__content">
      <div className="about-headshot__block">
        <img
          src={`../images/${aboutUser.headshot}`}
          alt="Michael P Wright headshot"
          className="about-headshot__image"
        />
      </div>

      <section className="about__greeting-text">
        <h2 className="greeting__heading">I'm {aboutUser.displayName}</h2>
        <p className="greeting__job-title subheading__text">{aboutUser.jobTitle}</p>
      </section>
    </section>
  );
};
