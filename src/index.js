import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Portfolio } from "./Portfolio";
import "./styles/_global.scss";

ReactDOM.render(
  <BrowserRouter>
    <Portfolio />
  </BrowserRouter>,
  document.getElementById("root")
);
