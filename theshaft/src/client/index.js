import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, Link, HashRouter as Router } from "react-router-dom";
import App from "./App";

import ReactGA from 'react-ga'

ReactGA.initialize('YourAnalyticsID')



const routing = (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
