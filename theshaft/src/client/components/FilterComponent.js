import React, { Component } from "react";
import FilterButton from "./FilterButton.js"
import "../css/filter.css";

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
				<div className="filterComponent">
					<li className="leadText"> filter by {this.state.type}: </li>
					<FilterButton name="columbia"/>
					<FilterButton name="barnard"/>
			    </div>
			)
		}
		else if(this.state.type === "room type") {
			return(
				<div className="filterComponent">
					<li className="leadText"> filter by {this.state.type}: </li>
					<FilterButton name="single"/>
					<FilterButton name="double"/>
					<FilterButton name="# person room"/>
			    </div>
			)
		}
		else if(this.state.type === "year") {
			return(
				<div className="filterComponent">
					<li className="leadText"> filter by {this.state.type}: </li>
					<FilterButton name="freshperson"/>
					<FilterButton name="sophomore"/>
					<FilterButton name="junior"/>
					<FilterButton name="senior"/>
			    </div>
			)
		}
		else {
			return( <li> whoops:DDDDDDDDDDDD</li>)
		}
	}
}