import React from "react";
import { ComingSoon } from "./ComingSoon";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export const Portfolio = () => {
  return (
    <div className="page">
      <NavBar />
      <ComingSoon />
      <Footer />
    </div>
  );
};

export default Portfolio;
