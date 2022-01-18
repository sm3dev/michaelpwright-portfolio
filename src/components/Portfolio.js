import React from "react";
import { ComingSoon } from "./ComingSoon";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import { Resume } from "./Resume";

export const Portfolio = () => {
  return (
    <div className="page">
      <NavBar />
      <ComingSoon />
      <Resume />
      <Footer />
    </div>
  );
};

export default Portfolio;
