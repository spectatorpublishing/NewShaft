import React, { Component } from "react";
import styled from 'styled-components';
import { __values } from "tslib";

let Wrapper = styled.div`
	width: 90%;
`

let Table = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid ${props => props.theme.lightGray};
	padding-bottom: 0.5rem;
	margin-bottom: 0.5rem;
`

let Category = styled.div`
	// color: grey;
`

let Title = styled.h2`
	margin-bottom: 1rem;
`

let Content = styled.span`
	margin-left: 1rem;
	text-align: right;
`

export default class AtAGlance extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		let glanceMap = [
			["Location", this.props.location],
			["Room types", this.props.roomtype],
			["Class makeup", this.props.classmakeup],
			["Cut-off lottery #", this.props.cutoff]
		]

		const AtAGlanceMapped = glanceMap.map((el)=>{
			if(el[1] && el[1] != "" && el[1] != "0" && el[1] != " "){
				return (
				<Table>
					<Category>{el[0]}</Category> 
					<Content><b>{el[1]}</b></Content>
				</Table>
				)
			}
			else return (<div/>);
		})

		return (
			<Wrapper>
				<Title> At a glance </Title>
				{AtAGlanceMapped}
				<br/>
			</Wrapper>
		);
	}
}