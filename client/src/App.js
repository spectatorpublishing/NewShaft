import React from 'react'
import { Routes, redirect, Route} from 'react-router-dom'
import { BrowserRouter as Router } from "react-router-dom"; 
import Explore from './containers/Explore';
import ShaftLive from './containers/ShaftLive';
import Dorm from './containers/Dorm';
import Housing101 from './containers/Housing101';
import Reviews from './containers/Reviews'
import NavBar from './components/NavBar.js';
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./util/GlobalStyles";
import './css/App.css';

const menuItems = [
  {
    "name": "Explore",
    "link": "/explore",
    "external": false,
    "disabled": false,
  },
  {
    "name": "Housing Odds",
    "link": "/lottery",
    "external": false,
    "disabled": false,
  },
  {
    "name": "Housing 101",
    "link": "/housing101",
    "external": false,
    "disabled": false,
  },
  /* {
    "name": "Reviews",
    "link": "/reviews",
    "external": false,
    "disabled": false,
  }, */
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
      <Router>
        <NavBar menuItems={menuItems} fixed />
        <Routes>
          <Route exact path="/" element={<Explore />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route path="/explore/:dorm" element={<Dorm />} />
          <Route exact path="/lottery" element={<ShaftLive />} />
          <Route exact path="/housing101" element={<Housing101 />} />
        </Routes>
      </Router>
    </main>
  </ThemeProvider>
)

export default App
