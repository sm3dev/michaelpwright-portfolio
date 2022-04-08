import React from "react";
import ReactDOM from "react-dom";
import Portfolio from "./Portfolio";
import "./styles/_global.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
  rootElement
);
