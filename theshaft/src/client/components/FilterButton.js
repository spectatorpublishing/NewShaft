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
var url  = "http://localhost:8080/api/filterDorm"

export default class FilterButton extends React.PureComponent {
	constructor(props) {
	    super(props);

	    this.state = {
	    	name: this.props.name,
				clicked: false,
				payload: {
					"college": -1,
					"single": false,
					"double": false,
					"triple": false,
					"suite": [],
					"make_up":[]
				}
	    };

	    this.onClick = this.onClick.bind(this);
	}

	componentDidMount(){
		fetch(url, {
			method: 'POST', // or 'PUT'
			body: JSON.stringify(this.state.payload), //
			headers:{
			  'Content-Type': 'application/json',
			}
		  }).then(res => res.json())
		  .then(response => {
				console.log('Success:', JSON.stringify(response))
			})
		  .catch(error => console.error('Error:', error));
	}

	onClick() {
		let statePayload = this.state.payload;
		console.log(this.props.name + " button clicked")
		let isClicked = this.state.clicked;
		if(!isClicked){
			if(this.state.name === 'columbia' || this.state.name === 'barnard'){
				if(this.state.payload.college !=-1){
					statePayload.college = -1;
					this.setState({payload: statePayload});
				}
				else{
					statePayload.college = this.state.name;
					this.setState({payload: statePayload});
				}

			}
			
		}
		else{
			if(this.state.payload.college === this.state.name){
				statePayload.college = -1;
				this.setState({payload: statePayload});
			}
			else {
				if(this.state.name ==='barnard'){
					statePayload.college = 'columbia';
					this.setState({payload: statePayload});
				}
				else{
					statePayload.college = 'barnard';
					this.setState({payload: statePayload});
				}
			}
		}
		console.log(this.state.payload)

		this.setState({clicked: !isClicked})
		
	}

	render() {
		return (
			<div>
				<Button clicked={this.state.clicked} onClick={()=>this.onClick()}>{this.state.name}</Button>
			</div>
		)
	}
}