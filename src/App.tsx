import React from "react";
import { render } from "react-dom";
import TestComponent from "./TestComponent";

render(
  <React.StrictMode>
    <TestComponent />
  </React.StrictMode>,
  document.getElementById("root")
);
