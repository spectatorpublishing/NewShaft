import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

let FloorTitle = styled.div` 
	color: grey;
	font-weight: bolder;
	font-size: 2vw;
	margin-top: 3vw;
    margin-bottom: 1vw;
`

let FloorHeader = styled.div` 
	color: grey;
	font-weight: bolder;
	font-size: 1.8vw;
    margin-bottom: 1vw;
`

let FloorPlanBox = styled.div` 
	border: 1px grey solid;
    border-radius: 1.5vw;
	height: 50vw;
	width: 40vw;
	display: flex;
	flex-direction: row;
	padding: 1vw;
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
	overflow: scroll;
    margin-top: 3vw;
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
	width: 80%;
	height: 100%
`

let CurrentPlan = styled.img`
	max-height: 100%;
	max-width: 100%;
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
				<FloorTitle> Floor Plans </FloorTitle>
				<FloorPlanBox>
					<PlanDisplay>
						<FloorHeader> Floor {this.state.currentFloor} </FloorHeader>
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