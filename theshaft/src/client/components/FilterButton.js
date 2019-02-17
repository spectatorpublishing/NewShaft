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
	"single": false,
	"double": false,
	"triple": false,
	"suite": [],
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
		var bool = this.state.clicked;
		console.log(payload.college)
		if(!bool){
			console.log("button was false now clicked")
			if(this.props.name === "columbia" || this.props.name === "barnard"){
				console.log("columbia or barnard button clicked")
				if(payload.college !== this.props.name && payload.college !==-1){
					payload.college = -1
				}
				else if (payload.college ===-1){
					payload.college = this.props.name
				}

			}
		}
		else{
			if(payload.college === this.props.name){
				payload.college = -1
			}
			else {
				if(this.props.name ==='barnard' && payload.college ===-1){
					payload.college = 'columbia'
				}
				else{
					payload.college = "barnard"
				}
			}
		}
		console.log("payload", payload)

		fetch(url, {
			method: 'POST', // or 'PUT'
			body: JSON.stringify(payload), //
			headers:{
			  'Content-Type': 'application/json',
			  
			}
		  }).then(res => res.json())
		  .then(response => console.log('Success:', JSON.stringify(response)))
		  .catch(error => console.error('Error:', error));

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