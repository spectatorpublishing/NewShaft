import React from 'react';

export default class Updater extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
			time: 0,
		};
	}

	componentWillMount() {
		this.tick();
	}

	tick() {
		fetch('http://worldclockapi.com/api/json/est/now')
			.then(response => response.json())
			.then(data => this.setState(prevState => (
					{
						time: data.currentFileTime
					}
				))
			);

	}

	componentDidMount() {
		this.interval = setInterval(
			() => this.tick(), 
			this.props.interval * 1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<div>
				Seconds: {this.state.time}
			</div>
		);
	}

};