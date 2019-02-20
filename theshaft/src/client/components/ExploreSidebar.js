import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import DormButton from '../components/DormButton';
import '../css/ExploreSidebar.css';

export default class ExploreSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            payload: this.props.payload,
            dorms: [],
            dormButtons: []
        };
    }

    fetchDorms(){
        console.log("PAYLOAD: " + JSON.stringify(this.state.payload))
        fetch('/api/filterDorm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.payload)
        }).then(res => res.json())
        .then(response => {
            console.log("RESPONSE: " + JSON.stringify(response))
            this.setState({dorms: response})
        });      
    }

    componentDidMount(){
        this.fetchDorms();
    }

    componentDidUpdate(prevProps){
        if(prevProps != this.props){
            console.log("props updated")
            this.setState({payload: this.props.payload}, () => this.fetchDorms()); 
        }      
    }

    render() {
        return (
            <div>
                <hr className="sidebar-divider"/>
                <div className="dorms">
                    {this.state.dorms.map((dorm, index) => 
                        <Link key={index} to={"/explore/" + dorm.dorm} style={{textDecoration: 'none'}}>
                            <DormButton key={index}
                                school={dorm.college}
                                name={dorm.dorm + ' Hall'}
                                image={dorm.thumbnail_image}
                                description={dorm.description}
                                amenities={dorm.amenities}/>
                        </Link>
                    )}
                </div>
            </div>
        );
    }
}
