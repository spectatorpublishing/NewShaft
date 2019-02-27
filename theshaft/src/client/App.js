import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import Explore from './containers/Explore';
import Dorm from './containers/Dorm';
import NavBar from './components/NavBar.js';
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./util/GlobalStyles"

const menuItems = [
  {
    "name": "Explore",
    "link": "/explore",
    "external": false,
    "disabled": false,
  },
  {
    "name": "Whiteboard",
    "link": "/whiteboard",
    "external": false,
    "disabled": true,
  },
  {
    "name": "FAQ",
    "link": "/faq",
    "external": false,
    "disabled": true,
  },
  {
    "name": "Spectrum",
    "link": "https://www.columbiaspectator.com/spectrum/",
    "external": true,
    "disabled": false,
  }
];

const App = () => (
  <ThemeProvider theme={theme}>
    <main>
      <GlobalStyles />
      <NavBar menuItems={menuItems} fixed />
      <Switch>
        <Route exact path="/" render={() => (<Redirect from='/' to='/explore'/>)}/>
        <Route exact path="/explore" component={Explore} />
        <Route path="/explore/:dorm" component={Dorm} />
      </Switch>
    </main>
  </ThemeProvider>
)

export default App
