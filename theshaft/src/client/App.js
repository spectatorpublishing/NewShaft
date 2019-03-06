import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import Explore from './containers/Explore';
import Dorm from './containers/Dorm';
import NavBar from './components/NavBar.js';
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./util/GlobalStyles";
import './css/App.css';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga'

const history = createHistory()
history.listen(location => {
	ReactGA.set({ page: location.pathname })
	ReactGA.pageview(location.pathname)
})

const menuItems = [
  {
    "name": "Explore",
    "link": "/explore",
    "external": false,
    "disabled": false,
  },
  {
    "name": "Shaft Live",
    "link": "/shaftlive",
    "external": false,
    "disabled": true,
  },
  {
    "name": "Housing 101",
    "link": "/housing101",
    "external": false,
    "disabled": true,
  },
  {
    "name": "Spectrum",
    "link": "https://www.columbiaspectator.com/spectrum/shaft/",
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
