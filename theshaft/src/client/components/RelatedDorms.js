
/*
    RelatedDorms component.

    This component displays the related dorms of a given
    dorm page. The names and image sources for this component
    are to be passed into the component as an array.

    NOTE that the divs of this component are styled by
    RelatdDorms.css
*/

import React, { Component } from "react";
import "../css/RelatedDorms.css";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


export default class RelatedDorms extends Component {
    constructor(props) {
        super(props);

        this.state = {
            /*  Props format for this.props.relatedDorms 
                should be array of strings with the following:
                ["Dorm Name", "Image Source", "Dorm Link"]. 
                See example in storybook. */
            name: this.props.name,
            relatedDorms: this.props.relatedDorms
        };

        // Binds the showRelatedDorms() function to this constructor.
        // this.showRelatedDorms = this.showRelatedDorms.bind(this);
    }

    getRelatedDormsList(relatedDorms) {
        return relatedDorms.map((dorm, index) => (
            <Link 
                key={index} 
                to={{pathname : "/explore/" + dorm.DORM.replace(/\s+/g, ''), dorm : dorm.DORM}} 
                style={{ textDecoration: 'none' }}
            >
                <img src={dorm.image} className="relatedDormImage" alt={dorm.DORM}/>
                <div className="relatedDormName"> {dorm.DORM} </div>
            </Link>
        ));
    }

    render() {
        return (
            <div className="relatedDormsList">
                {/* ===> The title component's text prop needs to be passed in here! <=== */}
                <h2 className="relatedDormsTitle"> If you're interested in {this.state.name} </h2>
                <div className="relatedDormsHorizontalView">
                    {this.getRelatedDormsList(this.state.relatedDorms)}
                    {/* {this.showRelatedDorms(dorms)} */}
                </div>
            </div>
        );

    }
}
