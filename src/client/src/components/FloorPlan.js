import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import 'react-image-lightbox/style.css'; 
import Lightbox from 'react-image-lightbox';

let FloorPlanBox = styled.div` 
    display: flex;
    flex-direction: row;
    overflow: hidden;
    padding: 3vw;
    box-shadow: 5px 5px 10px ${props => props.theme.lightGray};
    border: 1px solid ${props => props.theme.lightGray};
`

let FloorList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.7rem 1rem 1rem 0;
    width: 20%;
`

let FloorNumber = styled.h2`
    margin: 1.5rem;
`

let FloorButton = styled.button`
    border: none;
    margin-top: -0.5rem;
    background: none;
    padding: 0 0.5rem;
    @media only screen and (min-width: 768px){
        margin-top: 0;
        border: none;
        background: none;
        padding: 1px 4px 2px 4px;
    }
    &>h4 {
        @media only screen and (min-width: 768px){
            color: ${props => props.active ? props.theme.darkGray : props.theme.columbiaBlue};
        }
    }
`

let FloorButtonNumber = styled.h4`
  color: ${props => props.theme.columbiaBlue};
  margin: 10px 0; 
`

let PlanDisplay = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
`

let FloorPlanNavMobile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 1px 5px 1px 5px;
`
// mobile removes box border
let FloorPlanBoxMobile = styled.div` 
    display: flex;
    flex-direction: column;
    margin-top: 1vw;
    padding-top: 0;
`

let FloorListMobile = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    text-align: center;
`

let PlanDisplayMobile = styled.div`
    width: 100%;
`
// Floor #
let FloorNumberMobile = styled.h3`
    margin-left: 0;
    padding-left: 0;
`

let CurrentPlanMobile = styled.img`
    border-bottom-left-radius: calc(${props => props.theme.borderRadius} - 2px);
    border-bottom-right-radius: calc(${props => props.theme.borderRadius} - 2px);
    margin-bottom: -4px;
    max-width: 100%;
`

let CurrentPlan = styled.img`
    max-height: 100%;
    max-width: 100%;
    border-bottom-left-radius: calc(${props => props.theme.borderRadius} - 2px);
`
let Button = styled.button`
    background: none;
    border: none;
    display: flex;
    padding: 0;
`

let FloorArrow = styled.h3`
    color: ${props => props.theme.columbiaBlue};
`

export default class FloorPlan extends React.PureComponent {

    constructor(props){
        super(props)
        this.state = {
            planArray: props.planArray,
            planNames: props.planNames,
            floorOffset: props.floorOffset,
            currentFloor: props.floorOffset,
            currentPlan: props.planArray[props.floorOffset],
            width: window.innerWidth,
            isOpen: false,
            photoIndex: 0
        }
        this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
        this.selectFloor = this.selectFloor.bind(this);
        this.floorUp = this.floorUp.bind(this);
        this.floorDown = this.floorDown.bind(this);
    }

    componentWillMount() {
        window.addEventListener("resize", this.handleWindowSizeChange);
    }

    componentWillReceiveProps(props) {
        this.setState({
            planArray: props.planArray,
            planNames: props.planNames,
            currentFloor: 0 + props.floorOffset,
            currentPlan: props.planArray[props.floorOffset]
        })
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
            currentFloor: floorNumber,
            currentPlan: this.props.planArray[floorNumber]
        })
    }

    floorUp() {
        let tmp = this.state.currentFloor;
        const maxFloor = this.props.planArray.length - 1;
        if(tmp >= maxFloor) {
            this.setState({
                currentFloor: this.props.floorOffset,
                currentPlan: this.props.planArray[this.props.floorOffset]
            })
        } else {
            const floorNumber = this.state.currentFloor + 1
            this.setState({
                currentFloor: floorNumber,
                currentPlan: this.props.planArray[floorNumber]
            })
        }
    }

    floorDown() {
        let tmp = this.state.currentFloor;
        const minFloor = this.state.floorOffset;
        if(tmp <= minFloor) {
            this.setState({
                currentFloor: this.props.planArray.length - 1,
                currentPlan: this.props.planArray[this.props.planArray.length-1]
            })
        } else {
            const floorNumber = this.state.currentFloor - 1
            this.setState({
                currentFloor: floorNumber,
                currentPlan: this.props.planArray[floorNumber]
            })
        }
    }

    render(){
        const { width } = this.state;
        let isOpen = this.state.isOpen;
        let photoIndex = this.state.photoIndex;
        const isMobile = width <= 700;

        
        console.log("offset: " + this.state.floorOffset)
        console.log("current floor: " + this.state.currentFloor)
        console.log("current plan: " + this.state.currentPlan)

        if(isMobile) {
            return (
                <div>
                    <FloorPlanBoxMobile>
                        <PlanDisplayMobile>
                            <CurrentPlanMobile src={this.state.currentPlan} />
                            <FloorPlanNavMobile>                                
                                <FloorListMobile>
                                    <FloorButton onClick = {() => this.floorDown()}><FloorArrow>&#8249;</FloorArrow></FloorButton>
                                    <FloorNumberMobile> {this.props.planNames[this.state.currentFloor]}</FloorNumberMobile>
                                    <FloorButton onClick = {() => this.floorUp()} ><FloorArrow>&#8250;</FloorArrow></FloorButton>
                                </FloorListMobile>
                            </FloorPlanNavMobile>
                        </PlanDisplayMobile>
                    </FloorPlanBoxMobile>
                </div>
            )
        } else { 
            return (
                <div>
                    <FloorPlanBox>
                        <PlanDisplay>
                            <Button 
                                type="button" 
                                onClick = {
                                    () => this.setState({
                                        isOpen: true,
                                        photoIndex: this.state.currentFloor - this.state.floorOffset}
                                    )}
                            >
                            <CurrentPlan src={this.state.planArray[this.state.currentFloor]}/>
                            {isOpen && ( 
                              <Lightbox
                                   mainSrc={this.props.planArray[photoIndex]}
                                nextSrc={this.props.planArray[(photoIndex + 1) % this.props.planArray.length]} 
                                prevSrc={this.props.planArray[(photoIndex + this.props.planArray.length - 1) % this.props.planArray.length]}
                                onCloseRequest={() => this.setState({ isOpen: false })}
                                onMovePrevRequest={() =>
                                     this.setState({
                                         photoIndex: (photoIndex + this.props.planArray.length - 1) % this.props.planArray.length,
                                   })
                                 }
                                onMoveNextRequest={() => {
                                    this.setState({
                                        //photoIndex: 0
                                        photoIndex: (photoIndex + 1) % this.props.planArray.length,
                                        // this.state.currentFloor - this.state.floorOffset
                                    });
                                }
                            }
                              />
                            )} 
                        </Button>
                        </PlanDisplay>
                        <FloorList>
                            { 
                                  this.props.planArray.map((floor, i) =>
                                    (<FloorButton key = {i} active = {this.state.currentFloor === i} onClick = {() => this.selectFloor(i)}> 
                                    <FloorButtonNumber>{this.state.planNames[i]}</FloorButtonNumber>
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