import React from "react";
import { NavBar } from "./NavBar";
import "../styles/HeaderNav.scss";
import mpwMinecraft3DGoldLogo512 from "../images/mpwMinecraft3DGoldLogo512.png"


const HeaderLogo = ({ allNavTaglines }) => {
  //   console.log(allNavTaglines[0]);

  return (
    <section className="header">
      <div className="logo__block">
        {" "}
        <img
          src={mpwMinecraft3DGoldLogo512}
          alt="MPW website logo"
          className="header__logo"
          w="60"
          height="60"
        />{" "}
      </div>
      <div className="nav-tagline__block">
        {" "}
        {/* This has to has to map through the array object allNavTaglines. Helper function will perform this -- Issue #32 */}
        <p className="nav-tagline__text">
          text should be here: {allNavTaglines?.tagline}
        </p>
      </div>
      <NavBar />
    </section>
  );
};

export default HeaderLogo;
