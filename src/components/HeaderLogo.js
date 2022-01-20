import React from "react";
import { NavBar } from "./NavBar";

const HeaderLogo = ({ allNavTaglines }) => {
//   console.log(allNavTaglines[0]);

  return (
    <section className="header">
      <div className="logo__block">
        {" "}
        <img
          src={require(`../images/mpwMinecraft3DGoldLogo512.png`).default}
          alt="MPW website logo"
          className="header__logo"
        />{" "}
      </div>
      <div className="nav-tagline__block">
        {" "}
        {/* This has to has to map through the array object allNavTaglines */}
        <p className="nav-tagline__text">text should be here</p>
      </div>
      <NavBar />
    </section>
  );
};

export default HeaderLogo;
