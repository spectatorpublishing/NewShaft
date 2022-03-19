import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import ReactGA from 'react-ga'

//ReactGA.initialize('UA-135479210-1')
ReactGA.initialize('UA-3441642-16')

const routing = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById("root"));
