import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import Explore from './containers/Explore';
import Dorm from './containers/Dorm';
import NavBar from './components/NavBar.js';
import { createGlobalStyle } from "styled-components";

const menuItems = [
  {
    "name": "Explore",
    "link": "/explore",
    "external": false
  },
  {
    "name": "Whiteboard",
    "link": "/whiteboard",
    "external": false
  },
  {
    "name": "FAQ",
    "link": "/faq",
    "external": false
  },
  {
    "name": "Spectrum",
    "link": "https://www.columbiaspectator.com/spectrum/",
    "external": true
  }
];

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Raleway');
    font-family: 'Raleway', sans-serif;
  }
`

const App = () => (
    <main>
    	<GlobalStyles />
      <NavBar menuItems={menuItems} fixed />
	      <Switch>
          <Route exact path="/" render={() => (<Redirect from='/' to='/explore'/>)}/>
	        <Route exact path="/explore" component={Explore} />
	        <Route path="/explore/:dorm" component={Dorm} />
	      </Switch>
    </main>
)

export default App
