import React, { useState } from "react";
import { ComingSoon } from "./ComingSoon";
import { Footer } from "./Footer";
import HeaderLogo from "./HeaderLogo";
import { NavBar } from "./NavBar";
import { Resume } from "./Resume";

export const Portfolio = () => {

  return (
    <div className="page">
      <NavBar />
      <HeaderLogo />
      <ComingSoon />
      <Resume />
      <Footer />
    </div>
  );
};

export default Portfolio;
