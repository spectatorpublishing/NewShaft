import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Explore from './containers/Explore';
import Dorm from './containers/Dorm';

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Raleway');
    font-family: 'Raleway', sans-serif;
  }
`


const App = () => (
    <main>
    	<GlobalStyles />
	      <Switch>
	        <Route exact path="/" component={Explore} />
	        <Route path="/:dorm" component={Dorm} />
	      </Switch>
    </main>
)

export default App
