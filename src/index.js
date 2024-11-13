import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouer } from "react-router-dom";

const rootContainer = document.getElementById("root");
const root = ReactDOM.createRoot(rootContainer);
root.render(
  <BrowserRouer>
    <App />
  </BrowserRouer>
);
