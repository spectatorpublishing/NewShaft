import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Explore from './containers/Explore';
import Dorm from './containers/Dorm';

const App = () => (
    <main>
      <Switch>
        <Route exact path="/" component={Explore} />
        <Route path="/:dorm" component={Dorm} />
      </Switch>
    </main>
)

export default App
