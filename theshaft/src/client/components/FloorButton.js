import React, { Component } from "react";
import styled from 'styled-components';

let NumberBtn = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 2px;
    color: ${props => props.theme.black};
    background-color: ${props => props.theme.white};
    border: none;
    font-size: 1rem;
    text-align: center;

    &:hover {
        background-color: ${props => props.theme.lightGray};  
    }

    @media only screen and (min-width: 992px){
        background-color: ${props => props.theme.white};
        border: 1px ${props => props.theme.lightGray} solid;
        border-radius: 4px;
    }
`
let NumberSelected = styled(NumberBtn)`
    color: ${props => props.theme.columbiaBlue};
    
    &:hover {
        background-color: ${props => props.theme.columbiaBlue};  
    }

    @media only screen and (min-width: 992px){
        background-color: ${props => props.theme.columbiaBlue};
        border-color: ${props => props.theme.columbiaBlue};
        color: ${props => props.theme.white};
        text-shadow: ${props => props.theme.shadow};
    }
`
let ButtonTopText= styled.div`
    color: 	${props => props.theme.white};
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom:0.5rem;
    text-align: center;
    @media only screen and (min-width: 992px){
        text-align: left;
        margin-top: 1.5rem;
        color: 	${props => props.theme.columbiaBlue};
    }
`

let FloorButtonWrapper=styled.div`
    padding-bottom: 1rem;
    @media only screen and (min-width: 992px){
        padding: 0;
    }
`

let Buttons = styled.div`
    display: flex;
    flex-direction:row;
    background: ${props => props.theme.white};
    max-width: 95%; 
    margin: 0 2.5%;
    overflow: hidden;
    border-radius: 10px;
    @media only screen and (min-width: 992px){
        background: transparent;
        width: 100%; 
        margin: 0;
        overflow: visible;
        border-radius: 0;
        margin-bottom:4vh;
    }
`

export default class FloorButton extends Component{
    constructor(props){
        super(props)
        
        if (this.props.floorNums) {
            this.props.handleChange(this.props.floorNums[0]["FLOOR"]);
        }

        this.state = {
            currentFloorIndex: 0 
        }
    }
    
    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps) != JSON.stringify(this.props)) {
            if (this.props.floorNums) {
                this.props.handleChange(this.props.floorNums[0]["FLOOR"]);
            }
            this.setState({ currentFloorIndex: 0 });
        }
    }

    getButtons() {
        return this.props.floorNums.map((floor, id) => {
            let floorNum = floor["FLOOR"];
            if (id == this.state.currentFloorIndex) {
                return <NumberSelected key={id} onClick={() => {
                    this.props.handleChange(floorNum);
                }}>{floorNum}</NumberSelected>
            }
            else { 
                return <NumberBtn key={id} onClick={() => {
                    this.setState({ currentFloorIndex: id });
                    this.props.handleChange(floorNum);
                }}>{floorNum}</NumberBtn>
            }
        });
    }

    render(){
        return(
            <div>
                {this.props.floorNums && 
                (<FloorButtonWrapper>
                    <ButtonTopText>{this.props.isMobile ? "Floor" : "Jump to floor:"}</ButtonTopText>
                    <Buttons>{this.getButtons()}</Buttons>
                </FloorButtonWrapper>
                )}
            </div>
        )
    }
}