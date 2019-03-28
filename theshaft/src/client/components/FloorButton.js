import React, { Component } from "react";
import styled from 'styled-components';

let NumberBlue = styled.button`
    width: 25px;
    height: 25px;
    border: 1px ${props => props.theme.columbiaBlue} solid;
    border-radius: 3px;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.columbiaBlue};  
    text-align: center;
`
let NumberBlack = styled.button`
    width: 25px;
    height: 25px;
    border: 1px ${props => props.theme.columbiaBlue} solid;
    border-radius: 3px;
    background-color: white;
    text-align: center;
`

let Buttons = styled.div`
    display: inline-block;
`

export default class FloorButton extends Component{
    constructor(props){
        super(props)

        this.state = {
            dorm: this.props.dorm,
            numFloors : this.props.numFloors,
            handleChange: this.props.handleChange,
            currentFloor: 1
        }
    }

    render(){
        console.log("Current Floor: " + this.state.currentFloor)
        let buttons = []
        for(let i = 1; i < this.state.numFloors + 1; i++){
            if(i == this.state.currentFloor){
                buttons.push(<NumberBlue>{i}</NumberBlue>)
            }
            else{
                buttons.push(<NumberBlack onClick={() => {
                    this.setState({currentFloor: i})
                    fetch('/api/getWhiteboardRooms', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({dorm: this.state.dorm, floor: this.state.currentFloor})
                        }).then(res => res.json())
                        .then(response => {this.state.handleChange(response)}
                    );      
                }}>{i}</NumberBlack>)
            }
        }
        return <Buttons>{buttons}</Buttons>
    }
}