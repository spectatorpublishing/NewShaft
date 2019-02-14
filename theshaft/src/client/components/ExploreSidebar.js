import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Filter from './FilterComponent.js'

import DormButton from '../components/DormButton';
import '../css/ExploreSidebar.css';

export default class ExploreSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {dorms: this.props.dorms};
    }

    componentDidUpdate(prevProps){
        if(prevProps != this.props)
            this.setState({dorms: this.props.dorms});        
    }

    render() {
        var dormsList = this.state.dorms.map((dorm, index) => (<Link key={index} to={"/" + dorm.dorm} style={{ textDecoration: 'none' }}><DormButton key={index} school={dorm.college} name={dorm.dorm + ' Hall'} image={dorm.thumbnail_image} description={dorm.description} amenities={dorm.amenities}/></Link>));
        return (
            <div>
                
                <div className="filters">
                    <h2>The Shaft</h2>
                    <Filter/>
                </div>
                <hr className="sidebar-divider"/>
                <div className="dorms">
                    {dormsList}
                </div>
            </div>
        );
    }
}
