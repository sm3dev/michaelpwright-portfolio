import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Portfolio } from "./Portfolio";
import "./styles/_global.scss";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Portfolio />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
