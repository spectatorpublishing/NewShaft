
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
import styled from 'styled-components';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const Wrapper = styled.div`
    padding: 3vw;
    margin-top: 1rem;
    box-shadow: 5px 5px 10px ${props => props.theme.lightGray};
    border: 1px solid ${props => props.theme.lightGray};
    
`

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
                to={"/explore/" + dorm.DORM.replace(/\s+/g, '')} 
                style={{ textDecoration: 'none' }}
            >
                <img src={dorm.image} className="relatedDormImage" alt={dorm.DORM}/>
                <div className="relatedDormName"> {dorm.DORM} </div>
            </Link>
        ));
    }

    render() {
        return (
            
                <Wrapper>
                <div className="relatedDormsList">
                    {/* ===> The title component's text prop needs to be passed in here! <=== */}
                    <div className="relatedDormsHorizontalView">
                        {this.getRelatedDormsList(this.state.relatedDorms)}
                        {/* {this.showRelatedDorms(dorms)} */}
                    </div>
                </div>
                </Wrapper>

        );

    }
}
