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

    // componentDidMount(){
    //     fetch('/api/getLotteryNum', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({DORM: this.state.dorm, FLOOR: this.state.floorNums[0]})
    //         }).then(res => res.json())
    //         .then(response => {console.log(response); this.state.handleChange(response)}
    //     ); 
    // }

    componentDidUpdate(oldProps){
        if(oldProps != this.props){
            this.setState({
                dorm: this.props.dorm,
                floorNums : this.props.floorNums
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
                       
                        fetch('/api/getLotteryNum', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({DORM: this.state.dorm, FLOOR: floorNum})
                            }).then(res => res.json())
                            .then(response => {console.log(response); this.state.handleChange(response)}
                        ); 
                    }

                    }>{floorNum}</NumberBlue>
                }
                else{
                    return <NumberBlack onClick={() => {
                        this.setState({currentFloorIndex: idx}, () => {
                            fetch('/api/getLotteryNum', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({DORM: this.state.dorm, FLOOR: floorNum})
                                }).then(res => res.json())
                                .then(response => {console.log(response); this.state.handleChange(response)}
                            ); 
                        })
                            
                    }}>{floorNum}</NumberBlack>
                }
            })
        }
            
        return <Buttons>{buttons}</Buttons>
    }
}