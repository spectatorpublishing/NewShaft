import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import DormButton from '../components/DormButton';
import '../css/Explore.css';
import Dorm from './Dorm.js';


export default class Explore extends Component {

    render() {
      return (
      <div>
        <div className="header">
          <h1>Explore The Shaft</h1>
          <div className="SchoolButton">Barnard</div>
          <div className="SchoolButton">Columbia</div>
        </div>
        <div className="DormButtons">
          <Link to="/adi"><DormButton name="ADI House" address="21" sundial_distance="7 minutes" description="the best dorm"/></Link>
          <Link to="/mcbain"><DormButton name="McBain Hall" address="21" sundial_distance="7 minutes" description="the best dorm"/></Link>
          <Link to="/ruggles"><DormButton name="Ruggles Hall" address="21" sundial_distance="7 minutes" description="the best dorm"/></Link>
          <Link to="/carman"><DormButton name="Carman Hall" address="21" sundial_distance="7 minutes" description="the best dorm"/></Link>
        </div>
      </div>
      );
    }
  }
