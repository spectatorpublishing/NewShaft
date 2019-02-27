import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import styled from 'styled-components'

import DormButton from '../components/DormButton';

const Header = styled.div`
	margin: 0 auto;
	width: 100%;
	text-align: center;
`

const SchoolButton = styled.div`
	display: inline-block;
	font-size: 15pt;
	text-align: center;
	border: 1px solid #9B9B9B;
	color: #9B9B9B;
	height: 20px;
	margin: 20px 10px;
	padding: 2px;
	cursor: pointer;
`

const Dorms = styled.div`
	margin: 0 auto;
	overflow: scroll;
    height: 100%;
    display: grid;
    grid-column-gap: 50px;
    grid-template-columns: auto auto;
`

const SidebarDivider = styled.div`
    & hr{
        border: 1px solid #509e80;
        border-radius: 5px;
    }
`


export default class ExploreSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dorms: this.props.dorms
        };
    }

    componentDidUpdate(prevProps){
        if(prevProps != this.props){
            console.log("props updated")
            this.setState({dorms: this.props.dorms}); 
        }      
    }

    render() {
        return (
            <div>
                <SidebarDivider><hr></hr></SidebarDivider>
                <Dorms>
                    {this.state.dorms.map((dorm, index) => 
                        <Link key={index}  to={{pathname : "/explore/" + dorm.DORM.replace(/\s+/g, ''), dorm : dorm.DORM}} style={{textDecoration: 'none'}}>
                            <DormButton key={index}
                                school={dorm.COLLEGE}
                                name={dorm.DORM}
                                //image={dorm.THUMBNAIL_IMAGE}
                                image={"https://housing.columbia.edu/files/housing/McBain.jpg"}
                                description={dorm.DESCRIPTION}
                                amenities={dorm.AMENITIES}/>
                        </Link>
                    )}
                </Dorms>
            </div>
        );
    }
}
