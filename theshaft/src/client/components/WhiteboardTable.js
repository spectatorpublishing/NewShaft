import React, { Component } from "react";
import styled from 'styled-components';
import ReactToolTip from 'react-tooltip';

let Table = styled.div`
    display: flex;
    flex: 2 50%;
	justify-content: flex-start;
	border-bottom: 1px solid ${props => props.theme.lightGray};
	padding-bottom: 0.5rem;
	margin-bottom: 0.5rem;
    margin-right: 1.5rem;
`
let Map = styled.div`
    overflow-y: scroll;
    height: 11rem;
    font-weight: bold;
`

let Wrapper = styled.div`
    width: 50%;
`

let TitleText = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-flow: row-wrap;
`
let LeftTitle = styled.h4`
    margin-bottom: 1rem;
    width:50%;
    color: ${props => props.theme.columbiaBlue}
`
let RightTitle = styled.h4`
    margin-bottom: 1rem;
    text-align: left;
    color: ${props => props.theme.columbiaBlue};
`

let Category = styled.div`
    width: 50%;
`
let Content = styled.span`
    margin-left: 1rem;
`

let Question = styled.div`
    position: relative;
    text-align: center;
    background-color: #D3D3D3;
    border-radius: 100%;
    width: 1.15rem;
    height: 1.15rem;
    color: white;
    font-size: 0.85rem;
    margin-left: 0.4rem;
`

let TooltipText = styled.span`
    font-size: 0.6rem;
    width: 50%;
`

export default class WhiteboardTable extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        let i = 0;
        let roomMap = []; 
        for(i=0; i < this.props.roomAvailability.length; i++){
            roomMap.push([this.props.roomAvailability[i]["ROOM"], this.props.roomAvailability[i]["PRIORITY"]+"/"+this.props.roomAvailability[i]["LOTTERY"]]);
        }

        const AvailabilityMapped = roomMap.map((el, i)=>{
			if(el[1] && el[1] != "" && el[1] != "0" && el[1] != " "){
				return (
				<Table key={i}>
					<Category>{el[0]}</Category> 
					<Content>{el[1]}</Content>
				</Table>
				)
			}
			else return (<div key={i}/>);
        })

        return (
			<Wrapper>
                <TitleText>
                    <LeftTitle>Room Number</LeftTitle>
                    <RightTitle>Lottery Number</RightTitle>
                    <Question data-tip>?</Question>
                    <ReactToolTip><TooltipText>shows this year's (if taken) or last year's (if available) lottery number for this room</TooltipText></ReactToolTip>
                </TitleText>
                <Map>
                    {AvailabilityMapped}
                </Map>
				
			</Wrapper>
        );
    }
}