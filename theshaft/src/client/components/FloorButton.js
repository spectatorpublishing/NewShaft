import React, { Component } from "react";
import styled from 'styled-components';

let NumberBlue = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    color: ${props => props.theme.columbiaBlue};
    background-color: ${props => props.theme.white};
    border: none;
    font-size: 1rem;
    @media only screen and (min-width: 992px){
        border: 1px ${props => props.theme.columbiaBlue} solid;
        border-radius: 3px;
        color: ${props => props.theme.white};
        background-color: ${props => props.theme.columbiaBlue};  
    }
    text-align: center;
`
let NumberBlack = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    color: ${props => props.theme.black};
    background-color: ${props => props.theme.white};
    border: none;
    font-size: 1rem;
    @media only screen and (min-width: 992px){
        border: 1px ${props => props.theme.columbiaBlue} solid;
        border-radius: 3px;
        background-color: ${props => props.theme.white};
    }
    text-align: center;
`
let ButtonTopText= styled.div`
    color: 	${props => props.theme.white};
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom:0.5rem;
    text-align: left;
    @media only screen and (min-width: 992px){
        margin-top:6vh;
        color: 	${props => props.theme.columbiaBlue};
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

        this.state = {
            floorNums : this.props.floorNums,
            handleChange: this.props.handleChange,
            currentFloorIndex: -1 
        }
    }
    
    componentDidUpdate(oldProps){
        if(JSON.stringify(oldProps) != JSON.stringify(this.props)){
            console.log("old: " + JSON.stringify(oldProps))
            console.log("new: " + JSON.stringify(this.props))
            this.setState({
                floorNums : this.props.floorNums,
                currentFloorIndex : -1
            })
        }
    }

    render(){
        let buttons = []
        if (this.state.floorNums){
            buttons = this.state.floorNums.map((floor, idx) => {
                let floorNum = floor["FLOOR"]
                if(idx == this.state.currentFloorIndex){
                    return <NumberBlue onClick={() => {
                        this.state.handleChange(floorNum)
                    }}>{floorNum}</NumberBlue>
                }
                else{
                    return <NumberBlack onClick={() => {
                        this.setState({currentFloorIndex : idx})
                        this.state.handleChange(floorNum)
                    }}>{floorNum}</NumberBlack>
                }
            })

            if(this.state.currentFloorIndex == -1){
                console.log("initializing")
                this.state.handleChange(this.state.floorNums[0]["FLOOR"])
                this.setState({currentFloorIndex : 0})
                
            }
        }
            
        return(
            <div>
                {/* <FloorButtonWrapper> */}
                    <ButtonTopText>Jump to floor:</ButtonTopText>
                    <Buttons>{buttons}</Buttons>
                {/* </FloorButtonWrapper> */}
            </div>
        )
    }
}