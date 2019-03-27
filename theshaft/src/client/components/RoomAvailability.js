import React, { Component } from "react";
import styled from 'styled-components';

let Wrapper = styled.div`
`

let Table = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid ${props => props.theme.lightGray};
	padding-bottom: 0.5rem;
	margin-bottom: 0.5rem;
	margin-right: 1.5rem;
`

let Category = styled.div`
`
let Content = styled.span`
	margin-left: 1rem;
	text-align: right;
`

export default class RoomAvailability extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     roomnum: this.props.roomnum,
        //     priority: this.props.priority,
        //     lottery: this.props.lottery,
        // };
    }
    render() {

        let i = 0;
        let roomMap = [];

        for(i=0; i < this.props.roomAvailability; i++){
            roomMap.push([this.props.roomAvailability[i]["ROOM"], this.props.roomAvailability[i]["PRIORITY"]+"/"+this.props.roomAvailability[i]["LOTTERY"]]);
        }

        const AvailabilityMapped = roomMap.map((el, i)=>{
			if(el[1] && el[1] != "" && el[1] != "0" && el[1] != " "){
				return (
				<Table key={i}>
					<Category>{el[0]}</Category> 
					<Content><b>{el[1]}</b></Content>
				</Table>
				)
			}
			else return (<div key={i}/>);
        })
        
        return (
            <Wrapper>
				{AvailabilityMapped}
            </Wrapper>
        );
    }
}