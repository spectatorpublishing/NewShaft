import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import ExploreSidebar from '../components/ExploreSidebar';
import Dorm from './Dorm.js';
import '../css/Explore.css';
import map from '../assets/map.png';

export default class Explore extends Component {
    render() {
        return (
        <div className="explore">
            <div className="sidebar">
                <ExploreSidebar />
            </div>
            <div className="map">
                <img src={map} />
            </div>
        </div>
        );
    }
}
