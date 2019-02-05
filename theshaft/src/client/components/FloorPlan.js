import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

let FloorPlanBox = styled.div` 
	border: 1px black solid;
    border-radius: 10px;
	height: 950px;
	min-width: 250px;
	display: flex;
	flex-direction: row;
`

let FloorList = styled.div`
	display: flex;
	flex-direction: column;
	width: 20%;
	height: 60%;
	padding: 1em;
	// border: 3px solid #9B9B9B;
	// border-radius: 10px;
	text-align: center;
`

let FloorButton = styled.button`
	background-color: #FFFFFF;
	border: none;
	color: #76aaf2;
	// font-family: raley;
	font-size: 1em;
	// margin: 1em;
	// padding: 0px;
	background: none;
	// border: none;
	// padding: 0.25em 1em;
	// border: 2px solid palevioletred;
	// border-radius: 3px;
`

let PlanDisplay = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 90%;
	max-height: 90%
	align-self: flex-end;
`

let CurrentPlan = styled.img`
	
	
	max-height: 100%;
	max-width: 100%;

`

let FloorTitle = styled.h1`
	width: 30%;

	align-self: flex-start;
`

export default class FloorPlan extends React.PureComponent {

	constructor(props){
		super(props)
		this.state = {
			planArray: this.props.planArray,			//array of floor plan links/picture files.
			floorOffset: this.props.floorOffset + 1,	//offset of starting floor from ground level. eg wien has rooms starting on floor 2, not floor 1, so the offset is 1. the + 1 is because arrays starting at 0 doesn't mesh with floors starting at 1. 
			currentFloor: this.props.floorOffset + 1,
			currentPlan: this.props.planArray[0]
		}
		this.selectFloor = this.selectFloor.bind(this)
	}

	selectFloor(floorNumber) {
		this.setState({
			currentFloor: floorNumber + this.state.floorOffset,
			currentPlan: this.state.planArray[floorNumber]
		})
	}

	render(){
		console.log("render planArray:", this.state.planArray)
		console.log("render currentFloor:", this.state.currentFloor)
		console.log("render currentPlan:", this.state.currentPlan)

		return (
			<div>
				<h1> Floor Plans </h1>
				<FloorPlanBox>
				<FloorTitle> Floor {this.state.currentFloor} </FloorTitle>
					<PlanDisplay>
						<CurrentPlan src={this.state.currentPlan} />
					</PlanDisplay>
					<FloorList>
						{ 
						  	this.props.planArray.map((floor, i) =>
								(<FloorButton key = {i} onClick = {() => this.selectFloor(i)}> 
								Floor {i + this.state.floorOffset}
							 	</FloorButton>)
							)
						}
					</FloorList>
				</FloorPlanBox>
			</div>
		)
	}
}