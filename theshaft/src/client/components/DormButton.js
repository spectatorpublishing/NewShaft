import React, { Component } from 'react';
import './Explore.css';

export default class DormButton extends Component {

	constructor(props) {
		super(props);

		this.state = {
			name: this.props.name,
			address: this.props.address,
			sundial_distance: this.props.sundial_distance,
			description: this.props.description
		}
	}

	onClick(e) {
		console.log(e) //should redirect to separate page for floor plans
	}

	render() {
		return (
			<div class="DormButton" onClick={() => this.onClick(this.state.name)}>
				<h3> {this.state.name} </h3>
				<h3> {this.state.address} </h3>
				<h3> {this.state.sundial_distance} </h3>
				<h3> {this.state.description} </h3>
				<br/>
				<h2> CLICK TO VIEW FLOOR PLAN </h2>
			</div>
		)
	}
}