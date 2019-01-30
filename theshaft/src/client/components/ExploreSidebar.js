import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import DormButton from '../components/DormButton';
import '../css/ExploreSidebar.css';

export default class ExploreSidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {dorms: props.dorms};
    }

    render() {
        var dormsList = this.state.dorms.map((dorm, index) => (<Link key={index} to={"/" + dorm.id} style={{ textDecoration: 'none' }}><DormButton key={index} school={dorm.school} name={dorm.name} image={dorm.image} description={dorm.description} amenities={dorm.amenities}/></Link>));
        return (
            <div>
                <div className="filters">
                    <h2>The Shaft</h2>
                </div>
                <hr className="sidebar-divider"/>
                <div className="dorms">
                    {dormsList}
                </div>
            </div>
        );
    }
}
