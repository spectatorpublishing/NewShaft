import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

let FloorPlanBox = styled.div` 
	border: 1px black solid;
    border-radius: 10px;
	display: flex;
	flex-direction: row;
`

let FloorList = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1.7rem 1rem 1rem 0;
	width: 20%;
`

let FloorNumber = styled.h1`
	margin-left: 1.5rem;
`

let FloorButton = styled.button`
	background-color: #FFFFFF;
	border: none;
	color: #76aaf2;
	font-size: 1.5rem;
	background: none;
`

let PlanDisplay = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	height: 100%;
`

let FloorPlanTopMobile = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 10px 20px 5px 20px;
`

let FloorPlanBoxMobile = styled.div` 
	border: 1px black solid;
    border-radius: 10px;
	display: flex;
	flex-direction: column;
`

let FloorListMobile = styled.div`
	display: flex;
	flex-direction: row;
	text-align: center;
`

let PlanDisplayMobile = styled.div`
	width: 100%;
`

let FloorNumberMobile = styled.h1`
	margin: 0;
`

let CurrentPlanMobile = styled.img`
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	margin-bottom: -4px;
	max-width: 100%;
`

let CurrentPlan = styled.img`
	max-height: 100%;
	max-width: 100%;
	border-bottom-left-radius: 8px;
`

export default class FloorPlan extends React.PureComponent {

	constructor(props){
		super(props)
		this.state = {
			planArray: this.props.planArray,			//array of floor plan links/picture files.
			floorOffset: this.props.floorOffset + 1,	//offset of starting floor from ground level. eg wien has rooms starting on floor 2, not floor 1, so the offset is 1. the + 1 is because arrays starting at 0 doesn't mesh with floors starting at 1. 
			currentFloor: this.props.floorOffset + 1,
			currentPlan: this.props.planArray[0],
			width: window.innerWidth
		}
		this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
		this.selectFloor = this.selectFloor.bind(this);
		this.floorUp = this.floorUp.bind(this);
		this.floorDown = this.floorDown.bind(this);
	}

	componentWillMount() {
	    window.addEventListener("resize", this.handleWindowSizeChange);
	}

	// make sure to remove the listener
	// when the component is not mounted anymore
	componentWillUnmount() {
	    window.removeEventListener("resize", this.handleWindowSizeChange);
	}

	handleWindowSizeChange() {
	    this.setState({ width: window.innerWidth });
	}

	selectFloor(floorNumber) {
		this.setState({
			currentFloor: floorNumber + this.state.floorOffset,
			currentPlan: this.state.planArray[floorNumber]
		})
	}

	floorUp() {
		let tmp = this.state.currentFloor;
		const maxFloor = this.state.planArray.length - 1 + this.state.floorOffset;
		if(tmp >= maxFloor) {
			this.setState({
				currentFloor: this.props.floorOffset + 1,
				currentPlan: this.props.planArray[0]
			})
		} else {
			const floorNumber = this.state.currentFloor + 1
			const floorIndex = floorNumber - this.state.floorOffset
			this.setState({
				currentFloor: floorNumber,
				currentPlan: this.state.planArray[floorIndex]
			})
		}
	}

	floorDown() {
		let tmp = this.state.currentFloor;
		const minFloor = this.state.floorOffset;
		if(tmp <= minFloor) {
			this.setState({
				currentFloor: this.state.planArray.length - 1 + this.state.floorOffset,
				currentPlan: this.props.planArray[this.state.planArray.length-1]
			})
		} else {
			const floorNumber = this.state.currentFloor - 1
			const floorIndex = floorNumber - this.state.floorOffset
			this.setState({
				currentFloor: floorNumber,
				currentPlan: this.state.planArray[floorIndex]
			})
		}
	}

	render(){
		const { width } = this.state;
    	const isMobile = width <= 700;
		if(isMobile) {
			return (
				<div>
					<h1> Floor Plans </h1>
					<FloorPlanBoxMobile>
						<PlanDisplayMobile>
							<FloorPlanTopMobile>
								<FloorNumberMobile> Floor {this.state.currentFloor} </FloorNumberMobile>
								<FloorListMobile>
									<FloorButton onClick = {() => this.floorDown()}> &#8249; </FloorButton>
									<FloorButton onClick = {() => this.floorUp()} > &#8250; </FloorButton>
								</FloorListMobile>
							</FloorPlanTopMobile>
							<CurrentPlanMobile src={this.state.currentPlan} />
						</PlanDisplayMobile>
					</FloorPlanBoxMobile>
				</div>
			)
		} else { 
			return (
				<div>
					<h1> Floor Plans </h1>
					<FloorPlanBox>
						<PlanDisplay>
							<FloorNumber> Floor {this.state.currentFloor} </FloorNumber>
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
}