import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Explore from './containers/Explore';
import Test from './containers/Test';

const routing = (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Explore</Link></li>
        <li><Link to="/test">Test</Link></li>
      </ul>
      <Route exact path="/" component={Explore} />
      <Route path="/test" component={Test} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
