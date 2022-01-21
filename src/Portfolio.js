import React, { useEffect, useState } from "react";
import { ComingSoon } from "./components/ComingSoon";
import { Footer } from "./components/Footer";
import HeaderLogo from "./components/HeaderLogo";
import { Resume } from "./components/Resume";
import { TechStack } from "./components/TechStack";

export const Portfolio = () => {
  const [allNavTaglines, setAllNavTaglines] = useState([]);
  const [allTechObjects, setAllTechObjects] = useState([]);

  useEffect(() => {
    fetch("api/database.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.navTaglines);
        setAllNavTaglines(data.navTaglines);
        setAllTechObjects(data.techStack);
      });
  }, []);

  return (
    <div className="page">
      {" "}
      <TechStack allTechObjects={allTechObjects} />
      <HeaderLogo allNavTaglines={allNavTaglines} />
      <ComingSoon />
      <Resume />
      <Footer />
    </div>
  );
};

// export default Portfolio;
