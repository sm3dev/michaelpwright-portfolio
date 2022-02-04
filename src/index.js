import React from "react";
import ReactDOM from "react-dom";
import Portfolio from "./Portfolio";
import "./styles/_global.scss";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
  rootElement
);
