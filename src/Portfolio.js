import React, { useEffect, useState } from "react";
import { ComingSoon } from "./components/ComingSoon";
import { Footer } from "./components/Footer";
import HeaderLogo from "./components/HeaderLogo";
import { Resume } from "./components/Resume";

export const Portfolio = () => {
  const [allNavTaglines, setAllNavTaglines] = useState([]);

  useEffect(() => {
    fetch("api/database.json").then(res => res.json()).then(data => {
        console.log(data.navTaglines);
        setAllNavTaglines(data.navTaglines);
      });
  }, []);

  return (
    <div className="page">
      <HeaderLogo allNavTaglines={allNavTaglines} />
      <ComingSoon />
      <Resume />
      <Footer />
    </div>
  );
};

// export default Portfolio;
