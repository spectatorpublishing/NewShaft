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
				handleClick: this.props.handleClick,
	    	name: this.props.name,
				clicked: false
	    };

	    this.onClick = this.onClick.bind(this);
	}
	
	onClick() {
		this.state.handleClick(this.state.clicked, this.state.name);		

		console.log(this.props.name + " button clicked")
		this.setState({clicked: !this.state.clicked})		
	}

	render() {
		return (
			<div>
				<Button clicked={this.state.clicked} onClick={()=>this.onClick()}>{this.state.name}</Button>
			</div>
		)
	}
}