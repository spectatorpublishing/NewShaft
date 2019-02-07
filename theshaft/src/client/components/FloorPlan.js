import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

let FloorPlanBox = styled.div` 
	border: 1px black solid;
    border-radius: 10px;
	height: 700px;
	width: 500px;
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
	width: 80%;
	height: 100%;
`

let FloorPlanBoxMobile = styled.div` 
	border: 1px black solid;
    border-radius: 10px;
	height: 700px;
	width: 500px;
	display: flex;
	flex-direction: column;
`

let FloorListMobile = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 10%;
	padding: 1em;
	// border: 3px solid #9B9B9B;
	// border-radius: 10px;
	text-align: center;
`
let PlanDisplayMobile = styled.div`
	width: 100%;
	height: 90%;
`
let TitleMobile = styled.h1`
	height: 10%;
	margin: 0em;
`

let CurrentPlanMobile = styled.img`
	max-height: 90%;
	max-width: 100%;
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
			currentPlan: this.props.planArray[0],
			width: window.innerWidth
		}
		this.selectFloor = this.selectFloor.bind(this)
	}

	componentWillMount() {
	    window.addEventListener("resize", this.handleWindowSizeChange);
	}

	// make sure to remove the listener
	// when the component is not mounted anymore
	componentWillUnmount() {
	    window.removeEventListener("resize", this.handleWindowSizeChange);
	}

	handleWindowSizeChange = () => {
	    this.setState({ width: window.innerWidth });
	};

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
							<TitleMobile> Floor {this.state.currentFloor} </TitleMobile>
							<CurrentPlanMobile src={this.state.currentPlan} />
						</PlanDisplayMobile>
						<FloorListMobile>
							<FloorButton onClick = {() => this.floorDown()}> &#8249; </FloorButton>
							<FloorButton onClick = {() => this.floorUp()} > &#8250; </FloorButton>
						</FloorListMobile>
					</FloorPlanBoxMobile>
				</div>
			)
		} else { 
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