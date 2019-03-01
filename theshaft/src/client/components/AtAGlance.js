import React, { Component } from "react";
import styled from 'styled-components';
import { __values } from "tslib";

let Wrapper = styled.div`
`

let Table = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid ${props => props.theme.lightGray};
	padding-bottom: 0.5rem;
	margin-bottom: 0.5rem;
`

let Category = styled.div`
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
		let classMakeupFormat = this.props.classmakeup.split(',').map((el, i)=>(
			el.charAt(0).toUpperCase() + el.slice(1)
		)).join(', ')
		

		let glanceMap = [
			["Location", this.props.location],
			["Room types", this.props.roomtype],
			["Class makeup", classMakeupFormat],
			["Cut-off lottery #", this.props.cutoff]
		]

		const AtAGlanceMapped = glanceMap.map((el, i)=>{
			if(el[1] && el[1] != "" && el[1] != "0" && el[1] != " "){
				return (
				<Table key={i}>
					<Category>{el[0]}</Category> 
					<Content><b>{el[1]}</b></Content>
				</Table>
				)
			}
			else return (<div key={i}/>);
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