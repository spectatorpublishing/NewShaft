import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";

import ReactGA from 'react-ga'

ReactGA.initialize('UA-135479210-1')

const routing = (
  <HashRouter>
    <App />
  </HashRouter>
);

ReactDOM.render(routing, document.getElementById("root"));
