import { render } from "react-dom";
import React from "react";
import App from "./components/App.jsx";


const containerEl = document.getElementById("app");

render(
  <App/>,
  containerEl
);