import React, { useEffect, useState } from "react";
import { NavBar } from "./NavBar";
import "../styles/HeaderNav.scss";
import mpwMinecraft3DGoldLogo512 from "../images/mpwMinecraft3DGoldLogo512.png";
import { getRandomObj, getTaglinesTextArray } from "./Helpers";
import { Link } from "react-router-dom";

export const HeaderLogo = ({ allNavTaglines }) => {
  const [navTaglinesTextOnly, setNavTaglinesTextOnly] = useState([]);

  useEffect(() => {
    setNavTaglinesTextOnly(getTaglinesTextArray(allNavTaglines));
  }, [allNavTaglines]);

  return (
    <section className="header">
      <div className="logo__block">
        <Link to="/" title="Home Page">
          <img
            src={mpwMinecraft3DGoldLogo512}
            alt="MPW website logo"
            className="header__logo"
            w="60"
            height="60"
          />
        </Link>
      </div>
      <div className="nav-tagline__block">
        {" "}
        <p className="nav-tagline__text">{getRandomObj(navTaglinesTextOnly)}</p>
      </div>
      <NavBar />
    </section>
  );
};
