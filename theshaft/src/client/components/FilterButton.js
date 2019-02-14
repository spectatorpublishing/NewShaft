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
var payload = {
	"college": -1,
	"single": true,
	"double": false,
	"triple": false,
	"suite": ["4","6"],
	"make_up":[]
}
var url  = "http://localhost:8080/api/filterDorm"

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
		console.log(this.props.name+"button clicked")
		
		fetch(url, {
			method: 'POST', // or 'PUT'
			body: JSON.stringify(payload), //
			headers:{
			  'Content-Type': 'application/json',
			}
		  }).then(res => res.json())
		  .then(response => console.log('Success:', JSON.stringify(response)))
		  .catch(error => console.error('Error:', error));
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