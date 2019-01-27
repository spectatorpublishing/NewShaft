import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

let FloorPlanBox = styled.div` 
	height: 1000px;
	width: 500px;
	display: flex;
	flex-direction: row;
`

let FloorList = styled.div`
	display: flex;
	flex-direction: column;
	width: 20%;
	height: 100%;
	border: 3px solid #9B9B9B;
	text-align: center;
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
				<h1> Floor Plans </h1>
				<FloorPlanBox>
					<PlanDisplay>
						<h1> Floor {this.state.currentFloor} </h1>
						<CurrentPlan src={this.state.currentPlan} />
					</PlanDisplay>
					<FloorList>
						{ 
						  	this.props.planArray.map((floor, i) =>
								(<button key = {i} onClick = {() => this.selectFloor(i)}> 
									Floor {i + this.state.floorOffset} 
							 	</button>)
							)
						}
					</FloorList>
				</FloorPlanBox>
			</div>
		)
	}
}