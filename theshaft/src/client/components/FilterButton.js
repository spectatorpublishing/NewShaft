import React, { Component } from "react";
import styled from 'styled-components';
import { request } from "http";

let Button = styled.button`
	background: none;
	border: none;
	margin: 0;
	padding-left: 1em;
	font-size: 9pt;

	${({ clicked }) => clicked && `
    	font-weight: bold;
  	`}
`

export default class FilterButton extends React.PureComponent {
	constructor(props) {
	    super(props);

	    this.state = {
				clicked: false
	    };

	    this.onClick = this.onClick.bind(this);
	}

	componentDidUpdate(prevState) {
		if (this.state.clicked != prevState.clicked) {
			this.props.handleClick(this.state.clicked, this.props.name)
		}
	}

	onClick() {
		this.setState({clicked: !this.state.clicked})
	}

	render() {
		return (
			<div>
				<Button clicked={this.state.clicked} onClick={()=>this.onClick()}>{this.props.name}</Button>
			</div>
		)
	}
}