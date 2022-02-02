import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Portfolio } from "./Portfolio";
import "./styles/_global.scss";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Portfolio />
  </BrowserRouter>,
  rootElement
);
