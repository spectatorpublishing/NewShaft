import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Explore from './containers/Explore';
import Dorm from './containers/Dorm';
import NavBar from './components/NavBar.js';

let menuItems = [
  ["Explore", "/"],
  ["Whiteboard", "/"],
  ["Spectrum", "/"]
];

const App = () => (
    <main>
      <NavBar menuItems={menuItems} />
      <Switch>
        <Route exact path="/" component={Explore} />
        <Route path="/:dorm" component={Dorm} />
      </Switch>
    </main>
)

export default App
