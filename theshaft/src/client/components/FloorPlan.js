import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/FloorPlan.css';

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
			<div className="FloorPlanComponent">
				<h1 className="FloorPlans"> Floor Plans </h1>
				<div className="FloorPlanBox">
					<div className="PlanDisplay">
						<h1 className="CurrentFloor"> Floor {this.state.currentFloor} </h1>
						<img className="CurrentPlan" src={this.state.currentPlan} />
					</div>
					<div className="FloorList">
						{ 
						  	this.props.planArray.map((floor, i) =>
								(<button key = {i} onClick = {() => this.selectFloor(i)}> 
									Floor {i + this.state.floorOffset} 
							 	</button>)
							)
						}
					</div>
				</div>
			</div>
		)
	}
}