import React, { Component } from "react";
import FilterButton from "./FilterButton.js"
import styled from 'styled-components';

let Filter = styled.div`
	display: flex;
	flex-direction: row;
	
	@media (max-width: 650px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`

let Text = styled.li`
	padding-top: 2px;
	color: rgb(176, 214, 132);
	font-size: 15pt;
	white-space: nowrap;
`

export default class FilterComponent extends React.PureComponent {

	constructor(props) {
	    super(props);

	    this.state = {
	    	type: this.props.type
	    };
	}

	render() {
		if(this.state.type === "school") {
			return(
				<Filter>
					<Text> filter by {this.state.type}: </Text>
					<FilterButton name="columbia"/>
					<FilterButton name="barnard"/>
			    </Filter>
			)
		}
		else if(this.state.type === "room type") {
			return(
				<Filter>
					<Text> filter by {this.state.type}: </Text>
					<FilterButton name="single"/>
					<FilterButton name="double"/>
					<FilterButton name="# person room"/>
			    </Filter>
			)
		}
		else if(this.state.type === "year") {
			return(
				<Filter>
					<Text> filter by {this.state.type}: </Text>
					<FilterButton name="freshperson"/>
					<FilterButton name="sophomore"/>
					<FilterButton name="junior"/>
					<FilterButton name="senior"/>
			    </Filter>
			)
		}
		else {
			return( <li> oopsie :DDDDDDDDDDDD</li>)
		}
	}
}