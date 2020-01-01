import React, { Component } from "react";
import styled from 'styled-components';
import { request } from "http";

let Button = styled.button`
	background: none;
	border: none;
	margin: 0;
	padding: 0 1em;
	font-size: 9pt;

	${({ isActive }) => isActive && `
    	font-weight: bold;
  	`}
`

export default class FilterButton extends React.PureComponent {
	constructor(props) {
	    super(props);

	    this.state = {
			isActive: this.props.isActive
	    };

	    this.onClick = this.onClick.bind(this);
	}

	componentDidUpdate(prevState) {
		if (this.state.isActive != prevState.isActive) {
			this.props.handleClick(Number(this.state.isActive), this.props.name)
		}
	}

	onClick() {
		this.setState({isActive: !this.state.isActive})
	}

	render() {
		return (
			<div>
				<Button isActive={this.state.isActive} onClick={()=>this.onClick()}>{this.props.name}</Button>
			</div>
		)
	}
}