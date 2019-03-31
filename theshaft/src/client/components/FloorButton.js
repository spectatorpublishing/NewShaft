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
            floorNums : this.props.floorNums,
            handleChange: this.props.handleChange,
            currentFloorIndex: 0 
        }
    }

    componentDidUpdate(oldProps){
        if(oldProps != this.props){
            this.setState({
                dorm: this.props.dorm,
                floorNums : this.props.floorNums,
                handleChange: this.props.handleChange,
                currentFloorIndex: 0
            })
        }
    }

    render(){
        console.log("Current Floor: " + this.state.currentFloorIndex)
        let buttons = []
        if (this.state.floorNums){
            buttons = this.state.floorNums.map((floor, idx) => {
                if(idx == this.state.currentFloorIndex){
                    return <NumberBlue>{floor}</NumberBlue>
                }
                else{
                    return <NumberBlack onClick={() => {
                        this.setState({currentFloor: floor}, () => {
                            fetch('/api/getLotteryNum', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({DORM: this.state.dorm, FLOOR: this.state.floorNums[this.state.currentFloorIndex]})
                                }).then(res => res.json())
                                .then(response => {console.log(respones); this.state.handleChange(response)}
                            ); 
                        })
                            
                    }}>{floor}</NumberBlack>
                }
            })
        }
            
        return <Buttons>{buttons}</Buttons>
    }
}