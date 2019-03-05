import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, Link, HashRouter as Router } from "react-router-dom";
import App from "./App";

import ReactGA from 'react-ga'

ReactGA.initialize('UA-135479210-1')



const routing = (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
