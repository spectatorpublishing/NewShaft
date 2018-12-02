import React, { Component } from 'react';
import './Explore.css';

export default class Photos extends Component {

	constructor(props) {
		super(props);

		this.state = {
			image: this.props.image
		}
	}

	render() {
		return (
			<div class="pics">
				<img class="blinky" src={this.state.image} />
				<img class="pinky" src={this.state.image} />
				<img class="inky" src={this.state.image} />
				<img class="clyde" src={this.state.image} />
			</div>
		)
	}
}