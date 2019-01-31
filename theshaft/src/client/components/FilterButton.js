import React, { Component } from "react";
import styled from 'styled-components';

let Button = styled.button`
	background: none;
	border: none;
	margin: 0;
	padding-left: 1em;
	font-size: 15pt;

	${({ clicked }) => clicked && `
    	font-weight: bold;
  	`}
`

export default class FilterButton extends React.PureComponent {
	constructor(props) {
	    super(props);

	    this.state = {
	    	name: this.props.name,
	    	clicked: false
	    };

	    this.onClick = this.onClick.bind(this);
	}

	onClick() {
		var bool = this.state.clicked;
		this.setState({clicked: !bool})
	}

	render() {
		return (
			<div>
				<Button clicked={this.state.clicked} onClick={()=>this.onClick()}>{this.state.name}</Button>
			</div>
		)
	}
}