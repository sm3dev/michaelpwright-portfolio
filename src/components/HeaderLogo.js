import React from "react";
import { NavBar } from "./NavBar";

const HeaderLogo = ({ allNavTaglines }) => {
//   console.log(allNavTaglines[0]);

  return (
    <section className="header">
      <div className="logo__block">
        {" "}
        <img
          src="logo512.png"
          alt="MPW website logo"
          className="header__logo"
        />{" "}
      </div>
      <div className="nav-tagline__block">
        {" "}
        {/* This has to has to map through the array object allNavTaglines. Helper function will perform this -- Issue #32 */}
        <p className="nav-tagline__text">text should be here: {allNavTaglines[3]?.tagline}</p>
      </div>
      <NavBar />
    </section>
  );
};

export default HeaderLogo;
