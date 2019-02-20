import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Explore from './containers/Explore';
import Dorm from './containers/Dorm';
import NavBar from './components/NavBar.js';
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./util/GlobalStyles"

let menuItems = [
  ["Explore", "/"],
  ["Whiteboard", "/"],
  ["Spectrum", "/"]
];

const App = () => (
  <ThemeProvider theme={theme}>
    <main>
      <GlobalStyles />
      <NavBar menuItems={menuItems} fixed />
      <Switch>
        <Route exact path="/" component={Explore} />
        <Route path="/:dorm" component={Dorm} />
      </Switch>
    </main>
  </ThemeProvider>
)

export default App
