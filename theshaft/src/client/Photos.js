import React, { Component } from 'react';

export default class Photos extends Component {

	constructor(props) {
		super(props);

		this.state = {
			image: this.props.image
		}
	}

	render() {
		return (
			<div>
				<img src={this.state.image} />
			</div>
		)
	}
}