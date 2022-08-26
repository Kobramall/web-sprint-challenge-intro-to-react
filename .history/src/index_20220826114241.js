// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./App.css";
import theme from "./theme";
import { ThemeProvider } from "styled-components";

import { worker } from "./mocks/browser";
worker.start();

ReactDOM.render(
<ThemeProvider theme={theme}>
  <App /> 
</ThemeProvider>,
document.getElementById("root"));